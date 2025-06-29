# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Conduct Based Medicine** is an advanced medical education platform and clinical decision support system created by JP Silva. The platform serves healthcare professionals with evidence-based medical content, interactive clinical tools, and educational presentations across multiple medical specialties.

## Key Features

- **Clinical Decision Support**: Frequency of consultation (F█/F▄/F▂) and mortality risk (M█/M▄/M▂) indicators
- **Multi-specialty Coverage**: Currently Neurology and Dermatology, with expansion planned
- **Interactive Tools**: Question banks, antibiogram calculators, and clinical decision aids
- **Bilingual Support**: English and Spanish content with persistent language preferences
- **Presentation Integration**: Reveal.js slideshows for educational content
- **Clinical Settings**: Organized by Outpatient, Emergency Room, and Hospitalization scenarios

## Architecture

### Modern SPA with Vite
- **Single Page Application** built with Vite for optimal performance
- **Client-side routing** to eliminate page reloads and maintain state
- **Persistent components**: Header, navigation, and footer remain loaded during navigation
- **Lazy loading**: Interactive apps and presentations load on demand
- **GitHub Pages deployment** with automated build pipeline

### Hybrid Content Management System
- **Markdown Files**: Primary content authoring for medical articles, guidelines, and documentation
- **JSON Structure**: Metadata, navigation hierarchies, and structured medical data
- **Combined Workflow**: Markdown for content body, JSON for classification and routing
- **Version Control**: Git-based content review and medical accuracy validation

### Interactive Application Framework
- **Modular Vite Apps**: Question banks, calculators, and decision tools as embedded components
- **Medical Tool Integration**: Risk scores, drug dosing calculators, diagnostic criteria
- **Cross-specialty References**: Linked conditions and treatments across medical domains

## Development Workflow

### Commands (User-Run Only)
```bash
# Development server - ALWAYS run by user, never by Claude
npm run dev          # Start development server on port 3000

# Build and deployment
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run deploy       # Deploy to GitHub Pages
```

**IMPORTANT**: Claude should NEVER run `npm run dev` or other development commands. These are exclusively for user execution.

### File Structure
```
conduct_medicine/
├── package.json              # Vite configuration and dependencies
├── vite.config.js            # Build and development configuration
├── index.html                # Main SPA shell
├── src/                      # Source code and components
│   ├── components/           # Reusable UI components
│   ├── utils/               # Utility functions
│   └── apps/                # Interactive medical applications
├── assets/                   # Static assets and existing code
│   ├── js/                  # Legacy JavaScript (being migrated)
│   ├── css/                 # Styling
│   └── data/                # JSON navigation and content
├── content/                  # Hybrid CMS content
│   ├── markdown/            # Medical articles and guidelines
│   └── json/                # Structured medical data
├── specialties/             # Specialty-specific content
└── partials/                # HTML components (legacy)
```

## Content Management

### Adding Medical Content
1. **Create Markdown file** in `content/markdown/[specialty]/`
2. **Add metadata** in corresponding JSON file in `content/json/`
3. **Update navigation** in `assets/data/navigation-menu-[specialty].json`
4. **Include in search** by updating `assets/js/search-data.js`

### Medical Content Structure
```markdown
---
title: "Condition Name"
specialty: "neurology|dermatology"
setting: "outpatient|emergency|hospitalization"
frequency: "high|medium|low"
mortality: "high|medium|low"
keywords: ["keyword1", "keyword2"]
---

# Medical Content Here
Clinical presentation, diagnosis, management...
```

### Adding New Specialties
1. Create directory structure: `specialties/[specialty]/`
2. Create navigation JSON: `assets/data/navigation-menu-[specialty].json`
3. Create specialty-specific navigation script: `assets/js/nav_specialties/nav_[specialty].js`
4. Add to main navigation: `assets/data/navigation-menu-index.json`
5. Create content directories: `content/markdown/[specialty]/` and `content/json/[specialty]/`

### Interactive Medical Applications
- **Location**: `src/apps/[specialty]/[tool-name]/`
- **Integration**: Embedded as Vite components within medical content
- **Examples**: Question banks, antibiogram tools, risk calculators
- **Loading**: Lazy-loaded when user accesses specific tools

## Technical Implementation

### SPA Routing
- Client-side routing maintains navigation state
- Specialty sidepanes persist across page changes
- Deep linking support for specific medical conditions
- History API integration for proper browser navigation

### Performance Optimizations
- **Code splitting**: Specialty-specific bundles
- **Lazy loading**: Interactive apps load on demand
- **Caching**: Aggressive caching of medical content
- **Minification**: Optimized builds for GitHub Pages

### Bilingual Implementation
- Language switching without page reload
- Content stored in both English and Spanish JSON
- Persistent language preference in localStorage
- Fallback to English for missing translations

## GitHub Pages Deployment

### Automated Deployment
- GitHub Actions workflow builds on push to main
- Vite build outputs to `dist/` directory
- Proper base path configuration for GitHub Pages subdirectory
- Asset optimization and compression

### Local Development
1. User runs `npm install` to install dependencies
2. User runs `npm run dev` to start development server
3. Changes auto-reload in browser
4. Build with `npm run build` to test production output

## Medical Content Guidelines

### Accuracy and Review
- All medical content must be evidence-based
- Include frequency and mortality indicators where applicable
- Cross-reference related conditions across specialties
- Maintain version control for content updates and reviews

### Formatting Standards
- Use consistent medical terminology
- Include diagnostic criteria where relevant
- Provide management algorithms and decision trees
- Link to external medical references when appropriate

### Interactive Tool Requirements
- All calculators must include input validation
- Provide clear instructions and interpretation
- Include appropriate medical disclaimers
- Test thoroughly across different clinical scenarios

## Development Notes

### Component Architecture
- Modular design for easy maintenance
- Reusable components across specialties
- Consistent styling with Tailwind CSS
- Accessibility compliance for medical professionals

### State Management
- Navigation state persists across routes
- Language preferences maintained globally
- Search history and bookmarks (future enhancement)
- User preferences for specialty focus

### Integration Points
- Reveal.js for educational presentations
- Marked.js for Markdown processing
- DOMPurify for content sanitization
- Lucide icons for consistent UI elements