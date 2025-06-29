#!/usr/bin/env node

/**
 * Medical Content Translation Utility
 * Automatically generates Spanish content from English using medical terminology
 * and classification rules for safe vs. human-review content
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MedicalContentTranslator {
  constructor() {
    this.medicalTerms = {};
    this.contentClassification = {};
    this.translationStatus = {};
  }

  async init() {
    // Load configuration files
    this.medicalTerms = await this.loadJSON('./config/medical-terminology.json');
    this.contentClassification = await this.loadJSON('./config/content-classification.json');
    this.translationStatus = await this.loadJSON('./status/translation-status.json');
  }

  async loadJSON(filePath) {
    try {
      const data = await fs.readFile(path.join(__dirname, filePath), 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Failed to load ${filePath}:`, error);
      return {};
    }
  }

  async saveJSON(filePath, data) {
    try {
      await fs.writeFile(
        path.join(__dirname, filePath), 
        JSON.stringify(data, null, 2)
      );
    } catch (error) {
      console.error(`Failed to save ${filePath}:`, error);
    }
  }

  // Basic medical term translation
  translateMedicalTerms(text) {
    let translatedText = text;

    // Apply medical terminology translations
    Object.entries(this.medicalTerms.medicalTerms || {}).forEach(([en, es]) => {
      const regex = new RegExp(`\\b${this.escapeRegex(en)}\\b`, 'gi');
      translatedText = translatedText.replace(regex, es);
    });

    // Apply drug name translations
    Object.entries(this.medicalTerms.drugNames || {}).forEach(([en, es]) => {
      const regex = new RegExp(`\\b${this.escapeRegex(en)}\\b`, 'gi');
      translatedText = translatedText.replace(regex, es);
    });

    // Apply anatomical term translations
    Object.entries(this.medicalTerms.anatomicalTerms || {}).forEach(([en, es]) => {
      const regex = new RegExp(`\\b${this.escapeRegex(en)}\\b`, 'gi');
      translatedText = translatedText.replace(regex, es);
    });

    return translatedText;
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
  }

  // Classify content sections for translation safety
  classifyContent(content) {
    const sections = content.split(/^##\s+/m);
    const classified = [];

    sections.forEach(section => {
      const classification = this.getContentClassification(section);
      classified.push({
        content: section,
        classification,
        needsHumanReview: classification !== 'autoTranslate'
      });
    });

    return classified;
  }

  getContentClassification(content) {
    const rules = this.contentClassification.classificationRules || {};

    // Check for manual-only patterns first (highest priority)
    for (const pattern of rules.manualOnly?.patterns || []) {
      if (content.includes(pattern)) {
        return 'manualOnly';
      }
    }

    // Check for human review patterns
    for (const pattern of rules.humanReview?.patterns || []) {
      if (content.includes(pattern)) {
        return 'humanReview';
      }
    }

    // Check for auto-translate patterns
    for (const pattern of rules.autoTranslate?.patterns || []) {
      if (content.includes(pattern)) {
        return 'autoTranslate';
      }
    }

    // Default to human review for safety
    return 'humanReview';
  }

  // Process markdown content
  async translateMarkdownContent(englishContent) {
    // Parse frontmatter
    const { frontmatter, content } = this.parseFrontmatter(englishContent);

    // Translate safe frontmatter fields
    const translatedFrontmatter = this.translateFrontmatter(frontmatter);

    // Classify and translate content sections
    const classifiedSections = this.classifyContent(content);
    let translatedContent = '';

    classifiedSections.forEach((section, index) => {
      if (section.classification === 'autoTranslate') {
        // Auto-translate safe medical content
        let sectionContent = this.translateMedicalTerms(section.content);
        if (index > 0) sectionContent = '## ' + sectionContent;
        translatedContent += sectionContent;
      } else {
        // Keep original and mark for human review
        let sectionContent = section.content;
        if (index > 0) sectionContent = '## ' + sectionContent;
        translatedContent += sectionContent;
        translatedContent += '\n\n<!-- HUMAN REVIEW REQUIRED: ' + 
                           section.classification.toUpperCase() + ' -->\n\n';
      }
    });

    // Reconstruct markdown with frontmatter
    return this.reconstructMarkdown(translatedFrontmatter, translatedContent);
  }

  parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (match) {
      const frontmatterText = match[1];
      const contentText = match[2];
      
      const frontmatter = {};
      frontmatterText.split('\\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          let value = valueParts.join(':').trim();
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
          }
          frontmatter[key.trim()] = value;
        }
      });

      return { frontmatter, content: contentText };
    }

    return { frontmatter: {}, content };
  }

  translateFrontmatter(frontmatter) {
    const translated = { ...frontmatter };

    // Translate title
    if (translated.title) {
      translated.title = this.translateMedicalTerms(translated.title);
    }

    // Translate keywords (if they're medical terms)
    if (translated.keywords) {
      try {
        const keywords = JSON.parse(translated.keywords);
        const translatedKeywords = keywords.map(keyword => 
          this.translateMedicalTerms(keyword)
        );
        translated.keywords = JSON.stringify(translatedKeywords);
      } catch (e) {
        // Keep original if not valid JSON
      }
    }

    return translated;
  }

  reconstructMarkdown(frontmatter, content) {
    let markdown = '---\n';
    Object.entries(frontmatter).forEach(([key, value]) => {
      if (Array.isArray(value) || (typeof value === 'string' && value.startsWith('['))) {
        markdown += `${key}: ${value}\n`;
      } else {
        markdown += `${key}: "${value}"\n`;
      }
    });
    markdown += '---\n\n';
    markdown += content;
    return markdown;
  }

  // Process JSON metadata
  async translateJSONMetadata(englishMetadata) {
    const translated = { ...englishMetadata };
    const classification = this.contentClassification.jsonFieldClassification || {};

    // Auto-translate safe fields
    (classification.autoTranslate || []).forEach(field => {
      if (translated[field]) {
        if (Array.isArray(translated[field])) {
          translated[field] = translated[field].map(item => 
            this.translateMedicalTerms(item)
          );
        } else if (typeof translated[field] === 'string') {
          translated[field] = this.translateMedicalTerms(translated[field]);
        }
      }
    });

    // Mark human review fields
    (classification.humanReview || []).forEach(field => {
      if (translated[field]) {
        // Add review marker
        translated[`${field}_reviewRequired`] = true;
        translated[`${field}_originalLanguage`] = 'en';
      }
    });

    // Mark manual-only fields
    (classification.manualOnly || []).forEach(field => {
      if (translated[field]) {
        translated[`${field}_manualTranslationRequired`] = true;
        translated[`${field}_originalLanguage`] = 'en';
      }
    });

    return translated;
  }

  // Main translation function for a content item
  async translateContent(specialty, contentId) {
    const englishBasePath = path.join(__dirname, '..', 'en');
    const spanishBasePath = path.join(__dirname, '..', 'es');

    try {
      // Load English content
      const markdownPath = path.join(englishBasePath, 'markdown', specialty, `${contentId}.md`);
      const jsonPath = path.join(englishBasePath, 'json', specialty, `${contentId}.json`);

      const englishMarkdown = await fs.readFile(markdownPath, 'utf8');
      const englishMetadata = JSON.parse(await fs.readFile(jsonPath, 'utf8'));

      // Translate content
      const spanishMarkdown = await this.translateMarkdownContent(englishMarkdown);
      const spanishMetadata = await this.translateJSONMetadata(englishMetadata);

      // Ensure Spanish directories exist
      await fs.mkdir(path.join(spanishBasePath, 'markdown', specialty), { recursive: true });
      await fs.mkdir(path.join(spanishBasePath, 'json', specialty), { recursive: true });

      // Save Spanish content
      await fs.writeFile(
        path.join(spanishBasePath, 'markdown', specialty, `${contentId}.md`),
        spanishMarkdown
      );
      await fs.writeFile(
        path.join(spanishBasePath, 'json', specialty, `${contentId}.json`),
        JSON.stringify(spanishMetadata, null, 2)
      );

      // Update translation status
      await this.updateTranslationStatus(specialty, contentId);

      console.log(`✅ Generated Spanish content for ${specialty}/${contentId}`);
      console.log(`📝 Human review required for medical accuracy`);

    } catch (error) {
      console.error(`❌ Failed to translate ${specialty}/${contentId}:`, error);
    }
  }

  async updateTranslationStatus(specialty, contentId) {
    const contentKey = `${specialty}/${contentId}`;
    
    if (!this.translationStatus.contentStatus) {
      this.translationStatus.contentStatus = {};
    }

    if (!this.translationStatus.contentStatus[contentKey]) {
      this.translationStatus.contentStatus[contentKey] = {
        source: 'en',
        languages: {}
      };
    }

    this.translationStatus.contentStatus[contentKey].languages.es = {
      status: 'auto-translated',
      lastUpdated: new Date().toISOString().split('T')[0],
      reviewedBy: null,
      version: '0.1-auto',
      autoTranslated: true,
      humanReviewRequired: true,
      translationProgress: {
        autoTranslate: 100,
        humanReview: 0,
        manualOnly: 0,
        total: 100
      }
    };

    await this.saveJSON('./status/translation-status.json', this.translationStatus);
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
Usage: node translate-content.js <specialty> <content-id>

Examples:
  node translate-content.js neurology headache-management
  node translate-content.js dermatology atopic-dermatitis

This will generate Spanish content from English sources using medical terminology
and mark sections that require human review for medical accuracy.
    `);
    process.exit(1);
  }

  const [specialty, contentId] = args;
  const translator = new MedicalContentTranslator();
  
  await translator.init();
  await translator.translateContent(specialty, contentId);
}

// Check if this is the main module (ES module equivalent)
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Translation failed:', error);
    process.exit(1);
  });
}

export default MedicalContentTranslator;