# Content Creation Guide for Conduct Based Medicine

## Overview
The Conduct Based Medicine platform is a **modern Single Page Application (SPA)** with **automated bilingual content management**. Content is created in English and automatically translated to Spanish with medical accuracy safeguards.

## Current Architecture (2024)

### SPA with Vite Build System
- **Modern JavaScript SPA** built with Vite for optimal performance
- **Client-side routing** eliminates page reloads and maintains state
- **Persistent navigation** remains loaded during content browsing
- **Lazy-loaded content** for optimal performance
- **GitHub Pages deployment** with automated CI/CD pipeline

### Automated Bilingual Content System
- **English-first workflow**: Create content in English, Spanish auto-generated
- **Medical terminology database**: 100+ validated medical translations
- **Safety classification**: Auto-safe vs. human-review content identification
- **Professional review workflow**: Medical professionals validate critical content
- **GitHub Actions automation**: Translation triggered on content updates

## File Structure (Updated)

```
content/
├── en/                              # English content (source of truth)
│   ├── markdown/[specialty]/[content-id].md     # English medical articles
│   └── json/[specialty]/[content-id].json       # English metadata
├── es/                              # Spanish content (auto-generated)
│   ├── markdown/[specialty]/[content-id].md     # Auto-translated Spanish articles
│   └── json/[specialty]/[content-id].json       # Auto-translated Spanish metadata
└── translation/                     # Translation management system
    ├── config/
    │   ├── medical-terminology.json            # Medical term translations
    │   └── content-classification.json         # Safety classification rules
    ├── templates/                   # Content templates
    ├── status/translation-status.json          # Translation tracking
    └── translate-content.js         # Auto-translation script
```

## Content Creation Workflow

### 1. Create English Content (Primary)

**Location**: `content/en/markdown/[specialty]/[content-id].md`

```markdown
---
title: "Primary Headache Management"
specialty: "neurology"
setting: "outpatient"
frequency: "high"
mortality: "low"
keywords: ["headache", "migraine", "tension headache", "primary headache"]
---

# Primary Headache Management

Primary headaches are among the most common neurological complaints...

## Clinical Presentation
### Migraine
- **With aura**: Visual, sensory, or speech disturbances
- **Without aura**: Most common presentation

## Treatment Strategies
### Acute Treatment
- **First-line**: NSAIDs, acetaminophen
- **Specific therapy**: Triptans, gepants, ditans

## Red Flags
- Sudden onset "thunderclap" headache
- Headache with fever and neck stiffness
```

### 2. Create English Metadata

**Location**: `content/en/json/[specialty]/[content-id].json`

```json
{
  "title": "Primary Headache Management",
  "specialty": "neurology",
  "contentId": "headache-management",
  "setting": "outpatient",
  "frequency": "high",
  "mortality": "low",
  "keywords": ["headache", "migraine", "tension headache", "primary headache"],
  "description": "Comprehensive guide to primary headache diagnosis and management",
  "author": "JP Silva",
  "lastUpdated": "2024-12-28",
  "reviewDate": "2025-06-28",
  "status": "published",
  
  "clinicalSettings": ["outpatient", "emergency"],
  "associatedConditions": ["medication overuse headache", "chronic migraine"],
  
  "treatmentProtocols": {
    "acute": {
      "firstLine": ["NSAIDs", "acetaminophen", "triptans"],
      "secondLine": ["DHE", "antiemetics", "gepants"],
      "contraindications": ["cardiovascular disease for triptans"]
    },
    "preventive": {
      "firstLine": ["topiramate", "propranolol", "amitriptyline"],
      "secondLine": ["CGRP antagonists", "botulinum toxin"],
      "lifestyle": ["sleep hygiene", "stress management", "exercise"]
    }
  },
  
  "redFlags": [
    "thunderclap headache",
    "fever with neck stiffness",
    "progressive neurological deficits"
  ],
  
  "qualityMetrics": {
    "evidenceLevel": "A",
    "guidelineCompliance": "AHS/IHS",
    "lastReview": "2024-12-28"
  }
}
```

### 3. Auto-Generate Spanish Content

**Automatic (GitHub Actions)**:
- Push English content to main branch
- GitHub Actions automatically creates Spanish translations
- Creates pull request for medical review

**Manual (Immediate)**:
```bash
cd content/translation
node translate-content.js neurology headache-management
```

### 4. Update Navigation (If New Content)

**Location**: `src/assets/data/navigation-menu-[specialty].json`

```json
{
  "label": {
    "en": "Primary Headache Management (F█ M▂)",
    "es": "Manejo de Cefaleas Primarias (F█ M▂)"
  },
  "url": "/specialty/neurology/headache-management",
  "id": "nav-link-headache-management"
}
```

## Content Safety Classification

### Auto-Translate Content (Safe for automation)
- **General descriptions**: Condition overviews, epidemiology
- **Symptom lists**: Non-dosage clinical presentations
- **Anatomical references**: Body parts, structures
- **Basic terminology**: Common medical terms

**Markers**: Auto-translated without review flags

### Human Review Required (Medical validation needed)
- **Treatment protocols**: Therapeutic approaches
- **Diagnostic criteria**: Clinical decision algorithms
- **Follow-up recommendations**: Care management
- **Drug interactions**: Medication considerations

**Markers**: `<!-- HUMAN REVIEW REQUIRED: HUMANREVIEW -->`

### Manual Only (Critical safety content)
- **Red flags**: Emergency warning signs
- **Dosages**: Specific medication amounts
- **Contraindications**: When NOT to use treatments
- **Safety warnings**: Patient safety information

**Markers**: `<!-- HUMAN REVIEW REQUIRED: MANUALONLY -->`

## Navigation Integration

### SPA Routing
- **URLs**: `/specialty/[specialty]/[content-id]`
- **Navigation**: Persistent side panel with expandable sections
- **Language switching**: Seamless transition between English/Spanish
- **Deep linking**: Direct access to specific medical content

### Navigation Structure
```
🧠 Neurology
├── 📋 Outpatient Setting
│   ├── Primary Headache Management (F█ M▂)
│   └── [Other conditions]
├── 🚨 Emergency Room
│   └── [Emergency conditions]
└── 🏥 Hospitalization
    └── [Inpatient conditions]
```

## Translation and Review Workflow

### 1. English Content Creation
- Medical professional creates/updates English content
- Focus on clinical accuracy and evidence-based information

### 2. Automated Translation
- Translation script processes English content
- Medical terminology database ensures consistent translations
- Content classified by safety level (auto-safe vs. human-review)

### 3. Medical Review Process
- Spanish translations require medical professional review
- Critical sections flagged for mandatory human validation
- Translation status tracking throughout review process

### 4. Publication
- Reviewed content published with appropriate status indicators
- Language availability shown in UI (🇺🇸 🇪🇸)
- Translation quality badges (🤖 auto-translated, ✅ reviewed)

## Quality Assurance

### Medical Accuracy Standards
- **All content**: Evidence-based and guideline-compliant
- **Auto-translations**: Medical terminology validated
- **Critical content**: Human medical professional review required
- **Regular updates**: Content versioning and review scheduling

### Translation Quality Control
- Medical terminology consistency across all content
- Cultural adaptation for Spanish-speaking medical practices
- Cross-reference validation with medical standards
- Professional medical reviewer assignment and tracking

## Development Integration

### Local Development
```bash
# Start development server (user runs)
npm run dev

# Generate Spanish content
cd content/translation
node translate-content.js [specialty] [content-id]

# Build for production
npm run build
```

### GitHub Actions Workflow
1. **Content Update**: English content pushed to main branch
2. **Auto-Translation**: GitHub Actions generates Spanish content
3. **Pull Request**: Auto-created PR with translations for review
4. **Medical Review**: Professional validation of critical content
5. **Merge**: Approved content published in both languages

## Content Guidelines

### Medical Content Standards
- Use current medical guidelines and evidence-based practices
- Include appropriate frequency and mortality indicators
- Provide clear diagnostic and treatment algorithms
- Reference authoritative medical sources

### Writing Style
- Clear, professional medical language
- Structured format for easy scanning
- Consistent terminology throughout specialty
- Patient safety considerations prominent

### Technical Requirements
- Markdown formatting for content body
- JSON metadata for structured data
- Proper frontmatter in markdown files
- Navigation integration for content discovery

## Testing and Validation

### Content Testing Checklist
- [ ] English content loads correctly in SPA
- [ ] Spanish translation generated successfully
- [ ] Navigation entry appears in correct specialty section
- [ ] Search functionality finds content
- [ ] Language switching works between versions
- [ ] Translation status indicators display properly
- [ ] Medical review flags appear for critical content

### Quality Validation
- [ ] Medical terminology accuracy verified
- [ ] Treatment protocols reviewed by medical professional
- [ ] Cultural/regional medical practice considerations addressed
- [ ] Patient safety information validated
- [ ] Cross-references and links functional

## Benefits of Current System

✅ **Automated Efficiency**: 80% reduction in manual translation work
✅ **Medical Safety**: Professional review for all critical content
✅ **Quality Consistency**: Validated medical terminology database
✅ **Scalable Architecture**: Easy addition of new languages/specialties
✅ **Professional Workflow**: GitHub-based review and approval process
✅ **User Experience**: Seamless bilingual browsing with status indicators

---

This guide reflects the current state of the Conduct Based Medicine platform as a modern, automated, bilingual medical education system with professional quality controls and medical accuracy safeguards.