# Bilingual Content System - User Guide

## Overview

The Conduct Based Medicine platform now supports automated bilingual content (English/Spanish) with medical accuracy safeguards and professional review workflows.

## How It Works

### 1. Content Structure
```
content/
├── en/                     # English content (source of truth)
│   ├── markdown/specialty/content-id.md
│   └── json/specialty/content-id.json
├── es/                     # Spanish content (auto-generated)
│   ├── markdown/specialty/content-id.md
│   └── json/specialty/content-id.json
└── translation/            # Translation management
    ├── config/             # Medical terminology & rules
    ├── templates/          # Content templates
    └── status/             # Translation tracking
```

### 2. Automated Translation Process

#### Manual Translation (Immediate)
```bash
cd content/translation
node translate-content.js neurology headache-management
node translate-content.js dermatology atopic-dermatitis
```

#### Automatic Translation (GitHub Actions)
- Triggers automatically when English content is updated
- Creates pull request with Spanish translations
- Requires medical professional review before merge

### 3. Content Safety Classification

**Auto-Translate** (Safe for automation):
- General condition descriptions
- Symptom lists
- Anatomical references
- Basic medical terminology

**Human Review Required**:
- Treatment protocols
- Medication dosages
- Contraindications
- Clinical decision algorithms

**Manual Only** (Critical safety):
- Red flags and emergency protocols
- Patient safety warnings
- Legal disclaimers

### 4. Translation Features

#### Medical Terminology Database
- 100+ validated medical term translations
- Drug name localization
- Anatomical term consistency
- Clinical setting translations

#### Quality Safeguards
- Content classification by safety level
- Human review markers for critical sections
- Translation status tracking
- Medical professional review workflow

#### UI Indicators
- Language availability flags (🇺🇸 🇪🇸)
- Translation status badges
- Auto-translation warnings
- Medical review completion indicators

## Using the System

### For Content Authors

1. **Create English Content**
   - Write content in `content/en/markdown/specialty/`
   - Add metadata in `content/en/json/specialty/`
   - Follow existing content structure

2. **Generate Spanish Translation**
   ```bash
   node translate-content.js [specialty] [content-id]
   ```

3. **Review Generated Content**
   - Check `content/es/` for auto-generated Spanish files
   - Look for `<!-- HUMAN REVIEW REQUIRED -->` markers
   - Verify medical terminology accuracy

### For Medical Reviewers

1. **Review Auto-translated Content**
   - Focus on sections marked for human review
   - Verify treatment protocols and dosages
   - Check cultural/regional medical practices

2. **Update Translation Status**
   - Modify `content/translation/status/translation-status.json`
   - Change status from "auto-translated" to "human-reviewed"
   - Add reviewer name and date

3. **Approve Content**
   - Content is ready for publication after medical review
   - Translation status will show ✅ instead of 🤖

### For Developers

#### Adding New Languages
1. Add language code to supported languages
2. Create language-specific directories
3. Update ContentManager language detection
4. Add language indicators to UI

#### Enhancing Translation Quality
1. Update medical terminology database
2. Improve content classification rules
3. Add specialty-specific translation patterns
4. Integrate professional translation APIs

## Medical Safety Standards

### Review Requirements
- **All** auto-translated content requires medical review
- Treatment protocols must be verified by qualified professionals
- Dosages and contraindications need human validation
- Patient safety content requires legal review

### Quality Assurance
- Medical terminology consistency checking
- Cross-reference validation with medical guidelines
- Cultural adaptation for target medical practices
- Regular accuracy audits

## Workflow Integration

### GitHub Actions Automation
- Automatic translation on content updates
- Pull request creation for review
- Medical reviewer assignment
- Quality check integration

### Development Workflow
```bash
# 1. Create/update English content
# 2. Auto-translation triggers
# 3. Review PR with Spanish translations
# 4. Medical professional review
# 5. Approve and merge
# 6. Content available in both languages
```

## Benefits

✅ **Efficiency**: 80% automation for non-critical content
✅ **Safety**: Human review for all medical-critical content  
✅ **Scalability**: Easy addition of more languages
✅ **Quality**: Medical professional validation workflow
✅ **Maintenance**: Automated sync between languages
✅ **Cost**: Significant reduction in manual translation work

## Future Enhancements

- Integration with professional medical translation services
- Real-time translation for new content
- Community translation contributions
- AI-powered medical accuracy checking
- Multi-language medical terminology validation

---

*This system maintains medical accuracy while providing efficient bilingual content management for healthcare professionals.*