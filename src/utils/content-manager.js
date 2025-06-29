// src/utils/content-manager.js - Hybrid Markdown/JSON Content Management System
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export class ContentManager {
  constructor() {
    this.contentCache = new Map();
    this.metadataCache = new Map();
    this.contentIndex = new Map();
    this.markedRenderer = this.setupMarkdownRenderer();
    this.urlMappings = this.initializeUrlMappings();
  }

  initializeUrlMappings() {
    // Map navigation URLs to actual content files (only for the two example content pieces)
    return {
      'neurology': {
        'cefaleas-primarias': 'headache-management',
        'manejo-de-cefaleas-y-dolor': 'headache-management'
      },
      'dermatology': {
        // Dermatology URLs already match filenames, but including for consistency
        'atopic-dermatitis': 'atopic-dermatitis'
      }
    };
  }

  getBasePath() {
    // Use Vite's BASE_URL if available (set in vite.config.js)
    if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
      console.log(`🔍 Using Vite BASE_URL: ${import.meta.env.BASE_URL}`);
      return import.meta.env.BASE_URL;
    }
    
    // Fallback: detect base path from current location
    const pathname = window.location.pathname;
    if (pathname.includes('/conduct_medicine/')) {
      console.log(`🔍 Detected base path from pathname: /conduct_medicine/`);
      return '/conduct_medicine/';
    }
    
    // Default for development
    console.log(`🔍 Using default base path: /`);
    return '/';
  }

  setupMarkdownRenderer() {
    // Configure marked for medical content
    marked.setOptions({
      highlight: function(code, language) {
        // Basic syntax highlighting for code blocks
        return `<pre class="language-${language}"><code>${code}</code></pre>`;
      },
      breaks: true,
      gfm: true
    });

    // Custom renderer for medical content
    const renderer = new marked.Renderer();
    
    // Custom heading renderer to add medical context
    renderer.heading = function(text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${level} id="${escapedText}" class="medical-heading level-${level}">${text}</h${level}>`;
    };

    // Custom link renderer for internal references
    renderer.link = function(href, title, text) {
      const titleAttr = title ? ` title="${title}"` : '';
      
      // Handle internal medical references
      if (href.startsWith('#') || href.startsWith('/')) {
        return `<a href="${href}"${titleAttr} class="internal-link">${text}</a>`;
      }
      
      // External links open in new tab
      return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer" class="external-link">${text}</a>`;
    };

    // Custom table renderer for medical data
    renderer.table = function(header, body) {
      return `<div class="medical-table-wrapper">
        <table class="medical-table">
          <thead>${header}</thead>
          <tbody>${body}</tbody>
        </table>
      </div>`;
    };

    marked.use({ renderer });
    return marked;
  }

  async loadContent(specialty, contentId, language = null) {
    // Use current language if not specified
    const lang = language || window.currentLanguage || 'en';
    
    // Map Spanish URLs to English content file names
    const mappedContentId = this.mapContentId(specialty, contentId);
    const cacheKey = `${lang}/${specialty}/${mappedContentId}`;
    
    // Return cached content if available
    if (this.contentCache.has(cacheKey)) {
      return this.contentCache.get(cacheKey);
    }

    try {
      // Load content and metadata in parallel using mapped content ID
      const [markdownContent, metadata] = await Promise.all([
        this.loadMarkdownContent(specialty, mappedContentId, lang),
        this.loadContentMetadata(specialty, mappedContentId, lang)
      ]);

      // Process and combine content
      const processedContent = await this.processContent(markdownContent, metadata, lang);
      
      // Store original contentId for reference
      processedContent.originalContentId = contentId;
      processedContent.mappedContentId = mappedContentId;
      
      // Cache the result
      this.contentCache.set(cacheKey, processedContent);
      
      return processedContent;
      
    } catch (error) {
      console.error(`Failed to load content ${cacheKey}:`, error);
      return this.createErrorContent(specialty, contentId, error, lang);
    }
  }

  mapContentId(specialty, contentId) {
    // Check if we have a mapping for this specialty and content ID
    if (this.urlMappings[specialty] && this.urlMappings[specialty][contentId]) {
      console.log(`Mapping ${specialty}/${contentId} -> ${this.urlMappings[specialty][contentId]}`);
      return this.urlMappings[specialty][contentId];
    }
    
    // If no mapping exists, return the original content ID
    return contentId;
  }

  async loadMarkdownContent(specialty, contentId, language = 'en') {
    // Get base path from Vite's import.meta.env.BASE_URL or detect from window location
    const basePath = this.getBasePath();
    const markdownPath = `${basePath}content/${language}/markdown/${specialty}/${contentId}.md`;
    
    console.log(`📄 Loading markdown from: ${markdownPath}`);
    console.log(`🔍 Base path: "${basePath}"`);
    console.log(`🔍 Specialty: "${specialty}", Content ID: "${contentId}", Language: "${language}"`);
    
    try {
      const response = await fetch(markdownPath);
      
      console.log(`📄 Fetch response status: ${response.status} ${response.statusText}`);
      
      if (!response.ok) {
        console.warn(`❌ Failed to fetch markdown: ${response.status} ${response.statusText} for ${markdownPath}`);
        // If non-English content not found, try English fallback
        if (language !== 'en') {
          console.warn(`${language} content not found for ${specialty}/${contentId}, falling back to English`);
          return this.loadMarkdownContent(specialty, contentId, 'en');
        }
        throw new Error(`Markdown not found: ${markdownPath} (${response.status} ${response.statusText})`);
      }
      
      const text = await response.text();
      console.log(`✅ Successfully loaded markdown content (${text.length} characters)`);
      return text;
      
    } catch (error) {
      console.error(`❌ Error loading markdown for ${specialty}/${contentId}:`, error);
      console.warn(`Markdown content not found for ${specialty}/${contentId}, creating fallback`);
      return this.createFallbackMarkdown(specialty, contentId, language);
    }
  }

  async loadContentMetadata(specialty, contentId, language = 'en') {
    // Get base path from Vite's import.meta.env.BASE_URL or detect from window location
    const basePath = this.getBasePath();
    const metadataPath = `${basePath}content/${language}/json/${specialty}/${contentId}.json`;
    const cacheKey = `metadata-${language}-${specialty}/${contentId}`;
    
    console.log(`📊 Loading metadata from: ${metadataPath}`);
    
    // Return cached metadata if available
    if (this.metadataCache.has(cacheKey)) {
      console.log(`💾 Using cached metadata for ${cacheKey}`);
      return this.metadataCache.get(cacheKey);
    }

    try {
      const response = await fetch(metadataPath);
      
      console.log(`📊 Metadata fetch response status: ${response.status} ${response.statusText}`);
      
      if (!response.ok) {
        console.warn(`❌ Failed to fetch metadata: ${response.status} ${response.statusText} for ${metadataPath}`);
        // If non-English metadata not found, try English fallback
        if (language !== 'en') {
          console.warn(`${language} metadata not found for ${specialty}/${contentId}, falling back to English`);
          return this.loadContentMetadata(specialty, contentId, 'en');
        }
        throw new Error(`Metadata not found: ${metadataPath} (${response.status} ${response.statusText})`);
      }
      
      const metadata = await response.json();
      
      // Add language and translation status information
      metadata.language = language;
      metadata.translationStatus = await this.getTranslationStatus(specialty, contentId, language);
      
      // Cache metadata
      this.metadataCache.set(cacheKey, metadata);
      
      return metadata;
      
    } catch (error) {
      console.warn(`Metadata not found for ${specialty}/${contentId}, using defaults`);
      return this.createDefaultMetadata(specialty, contentId, language);
    }
  }

  async processContent(markdownContent, metadata, language = 'en') {
    // Parse frontmatter if present
    const { content, frontmatter } = this.parseFrontmatter(markdownContent);
    
    // Merge frontmatter with JSON metadata (JSON takes precedence)
    const combinedMetadata = { ...frontmatter, ...metadata };
    
    // Convert markdown to HTML
    const htmlContent = this.markedRenderer.parse(content);
    
    // Sanitize HTML for security
    const sanitizedContent = DOMPurify.sanitize(htmlContent, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'strong', 'em', 'u', 'ul', 'ol', 'li', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'blockquote', 'code', 'pre', 'div', 'span', 'mark'],
      ALLOWED_ATTR: ['href', 'title', 'class', 'id', 'target', 'rel']
    });
    
    // Add medical indicators if present
    const enhancedContent = this.addMedicalIndicators(sanitizedContent, combinedMetadata);
    
    return {
      content: enhancedContent,
      metadata: combinedMetadata,
      rawMarkdown: content,
      lastModified: new Date().toISOString()
    };
  }

  parseFrontmatter(markdownContent) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdownContent.match(frontmatterRegex);
    
    if (!match) {
      return { content: markdownContent, frontmatter: {} };
    }
    
    try {
      // Simple YAML-like parser for frontmatter
      const frontmatterText = match[1];
      const content = match[2];
      const frontmatter = {};
      
      frontmatterText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();
          
          // Remove quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          
          // Parse arrays
          if (value.startsWith('[') && value.endsWith(']')) {
            try {
              value = JSON.parse(value);
            } catch (e) {
              // Keep as string if JSON parsing fails
            }
          }
          
          frontmatter[key] = value;
        }
      });
      
      return { content, frontmatter };
      
    } catch (error) {
      console.warn('Failed to parse frontmatter:', error);
      return { content: markdownContent, frontmatter: {} };
    }
  }

  addMedicalIndicators(htmlContent, metadata) {
    if (!metadata.frequency && !metadata.mortality) {
      return htmlContent;
    }
    
    // Create medical indicators
    const indicators = [];
    
    if (metadata.frequency) {
      const freqSymbol = this.getFrequencySymbol(metadata.frequency);
      indicators.push(`<span class="medical-indicator frequency-${metadata.frequency}" title="Frequency of Consultation: ${metadata.frequency}">${freqSymbol}</span>`);
    }
    
    if (metadata.mortality) {
      const mortSymbol = this.getMortalitySymbol(metadata.mortality);
      indicators.push(`<span class="medical-indicator mortality-${metadata.mortality}" title="Mortality Risk: ${metadata.mortality}">${mortSymbol}</span>`);
    }
    
    if (indicators.length > 0) {
      const indicatorHTML = `<div class="medical-indicators">${indicators.join(' ')}</div>`;
      // Insert indicators after the first heading
      return htmlContent.replace(/(<h[1-6][^>]*>.*?<\/h[1-6]>)/, `$1${indicatorHTML}`);
    }
    
    return htmlContent;
  }

  getFrequencySymbol(frequency) {
    const symbols = {
      high: 'F█',
      medium: 'F▄',
      low: 'F▂'
    };
    return symbols[frequency] || 'F?';
  }

  getMortalitySymbol(mortality) {
    const symbols = {
      high: 'M█',
      medium: 'M▄',
      low: 'M▂'
    };
    return symbols[mortality] || 'M?';
  }

  createFallbackMarkdown(specialty, contentId) {
    return `# ${contentId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}

This is a placeholder for ${specialty} content: ${contentId}.

Content will be loaded from the hybrid CMS when available.

## Clinical Information
- **Specialty**: ${specialty}
- **Content ID**: ${contentId}
- **Status**: Content pending

## Next Steps
1. Create markdown content file: \`content/markdown/${specialty}/${contentId}.md\`
2. Add metadata file: \`content/json/${specialty}/${contentId}.json\`
3. Update navigation and search data
`;
  }

  createDefaultMetadata(specialty, contentId) {
    return {
      title: contentId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      specialty: specialty,
      contentId: contentId,
      setting: 'outpatient',
      frequency: null,
      mortality: null,
      keywords: [specialty, contentId],
      description: `Medical content for ${specialty}: ${contentId}`,
      lastUpdated: new Date().toISOString(),
      author: 'JP Silva',
      status: 'draft'
    };
  }

  createErrorContent(specialty, contentId, error) {
    return {
      content: `
        <div class="error-content">
          <h2>Content Loading Error</h2>
          <p>Failed to load content for <strong>${specialty}/${contentId}</strong></p>
          <p class="error-details">Error: ${error.message}</p>
          <p><a href="/">← Return to Home</a></p>
        </div>
      `,
      metadata: this.createDefaultMetadata(specialty, contentId),
      rawMarkdown: '',
      lastModified: new Date().toISOString(),
      error: true
    };
  }

  // Index content for search and navigation
  async indexContent(specialty, contentId, content) {
    const indexKey = `${specialty}/${contentId}`;
    
    const searchData = {
      title: content.metadata.title,
      url: `/specialty/${specialty}/${contentId}`,
      description: content.metadata.description,
      keywords: Array.isArray(content.metadata.keywords) ? 
        content.metadata.keywords.join(', ') : 
        content.metadata.keywords || '',
      specialty: specialty,
      setting: content.metadata.setting,
      frequency: content.metadata.frequency,
      mortality: content.metadata.mortality
    };
    
    this.contentIndex.set(indexKey, searchData);
    
    return searchData;
  }

  // Get all indexed content for search
  getAllIndexedContent() {
    return Array.from(this.contentIndex.values());
  }

  // Get content by specialty
  getContentBySpecialty(specialty) {
    return Array.from(this.contentIndex.entries())
      .filter(([key]) => key.startsWith(`${specialty}/`))
      .map(([, value]) => value);
  }

  // Clear cache
  clearCache(cacheType = 'all') {
    switch (cacheType) {
      case 'content':
        this.contentCache.clear();
        break;
      case 'metadata':
        this.metadataCache.clear();
        break;
      case 'index':
        this.contentIndex.clear();
        break;
      case 'all':
        this.contentCache.clear();
        this.metadataCache.clear();
        this.contentIndex.clear();
        break;
    }
  }

  // Get cache statistics
  getCacheStats() {
    return {
      contentCache: this.contentCache.size,
      metadataCache: this.metadataCache.size,
      contentIndex: this.contentIndex.size,
      totalCachedItems: this.contentCache.size + this.metadataCache.size + this.contentIndex.size
    };
  }

  // New methods for bilingual content support

  async getTranslationStatus(specialty, contentId, language) {
    try {
      const basePath = this.getBasePath();
      const response = await fetch(`${basePath}content/translation/status/translation-status.json`);
      if (!response.ok) return null;
      
      const statusData = await response.json();
      const contentKey = `${specialty}/${contentId}`;
      
      if (statusData.contentStatus && statusData.contentStatus[contentKey]) {
        const contentStatus = statusData.contentStatus[contentKey];
        return contentStatus.languages[language] || null;
      }
      
      return null;
    } catch (error) {
      console.warn('Failed to load translation status:', error);
      return null;
    }
  }

  createFallbackMarkdown(specialty, contentId, language = 'en') {
    const translations = {
      en: {
        title: `${contentId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
        content: 'This content is currently being developed. Please check back soon.',
        specialty: specialty.charAt(0).toUpperCase() + specialty.slice(1)
      },
      es: {
        title: `${contentId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
        content: 'Este contenido está actualmente en desarrollo. Por favor, vuelva pronto.',
        specialty: specialty === 'neurology' ? 'Neurología' : specialty === 'dermatology' ? 'Dermatología' : specialty
      }
    };

    const trans = translations[language] || translations.en;
    
    return `---
title: "${trans.title}"
specialty: "${specialty}"
status: "under-development"
---

# ${trans.title}

${trans.content}

---

*${trans.specialty} - Conduct Based Medicine*`;
  }

  createDefaultMetadata(specialty, contentId, language = 'en') {
    return {
      title: contentId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      specialty: specialty,
      contentId: contentId,
      setting: "outpatient",
      frequency: "medium",
      mortality: "low",
      keywords: [contentId.replace(/-/g, ' ')],
      description: "Content currently under development",
      author: "System Generated",
      lastUpdated: new Date().toISOString().split('T')[0],
      status: "under-development",
      language: language,
      translationStatus: {
        status: "pending",
        autoTranslated: false,
        humanReviewRequired: true
      }
    };
  }

  createErrorContent(specialty, contentId, error, language = 'en') {
    const translations = {
      en: {
        title: 'Content Loading Error',
        message: 'Failed to load content. Please try again later.',
        error: 'Error'
      },
      es: {
        title: 'Error al Cargar Contenido',
        message: 'No se pudo cargar el contenido. Por favor, inténtelo más tarde.',
        error: 'Error'
      }
    };

    const trans = translations[language] || translations.en;

    return {
      content: `<div class="error-content">
        <h2>${trans.title}</h2>
        <p>${trans.message}</p>
        <details>
          <summary>${trans.error}</summary>
          <pre>${error.message}</pre>
        </details>
      </div>`,
      metadata: this.createDefaultMetadata(specialty, contentId, language),
      error: true
    };
  }

  // Language utilities
  getAvailableLanguages(specialty, contentId) {
    // This would check which language versions exist
    // For now, return basic info
    return ['en']; // Will be enhanced when we implement the full translation system
  }

  isContentTranslated(specialty, contentId, language) {
    if (language === 'en') return true; // English is always available
    // Check if translated content exists
    return false; // Will be implemented with full translation system
  }
}