// src/utils/language-manager.js - Manage bilingual content
export class LanguageManager {
  constructor() {
    this.currentLanguage = 'en';
    this.supportedLanguages = ['en', 'es'];
    this.translations = new Map();
    this.observers = new Set();
  }

  async init() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
      this.currentLanguage = savedLanguage;
    }

    // Make current language globally available (for compatibility with existing code)
    window.currentLanguage = this.currentLanguage;

    // Load core translations
    await this.loadCoreTranslations();

    // Apply initial translations
    this.applyTranslations();
  }

  async loadCoreTranslations() {
    // Core translations for global UI elements
    const coreTranslations = {
      en: {
        searchPlaceholder: "Search medical content...",
        switchToSpanish: "Switch to Spanish",
        loadingPresentation: "Loading presentation...",
        noResults: "No results found",
        searchResults: "Search Results",
        footer_copyright: `© ${new Date().getFullYear()} JP Silva. All rights reserved.`,
        supportModalTitle: "Support Our Medical Education Platform",
        supportModalDescription: "Help us maintain and expand this clinical decision support tool.",
        buyMeCoffee: "☕ Buy me a coffee",
        close: "Close",
        pageNotFound: "Page Not Found",
        returnHome: "← Return to Home",
        loading: "Loading...",
        error: "Error"
      },
      es: {
        searchPlaceholder: "Buscar contenido médico...",
        switchToSpanish: "Cambiar a Inglés",
        loadingPresentation: "Cargando presentación...",
        noResults: "No se encontraron resultados",
        searchResults: "Resultados de Búsqueda",
        footer_copyright: `© ${new Date().getFullYear()} JP Silva. Todos los derechos reservados.`,
        supportModalTitle: "Apoya Nuestra Plataforma de Educación Médica",
        supportModalDescription: "Ayúdanos a mantener y expandir esta herramienta de apoyo a decisiones clínicas.",
        buyMeCoffee: "☕ Invítame un café",
        close: "Cerrar",
        pageNotFound: "Página No Encontrada",
        returnHome: "← Volver al Inicio",
        loading: "Cargando...",
        error: "Error"
      }
    };

    this.translations.set('core', coreTranslations);
    
    // Make translations globally available for compatibility
    window.translations = coreTranslations;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getSupportedLanguages() {
    return [...this.supportedLanguages];
  }

  async setLanguage(language) {
    if (!this.supportedLanguages.includes(language)) {
      console.warn(`Language ${language} not supported`);
      return false;
    }

    if (this.currentLanguage === language) {
      return true; // No change needed
    }

    this.currentLanguage = language;
    window.currentLanguage = language; // Update global for compatibility

    // Save preference
    localStorage.setItem('preferredLanguage', language);

    // Apply translations
    this.applyTranslations();

    // Notify observers
    this.notifyObservers();

    // Trigger specialty navigation rebuild if we're on a specialty page
    if (window.app && typeof window.app.reloadCurrentSpecialtyNavigation === 'function') {
      window.app.reloadCurrentSpecialtyNavigation();
    }

    return true;
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
    return this.setLanguage(newLanguage);
  }

  applyTranslations() {
    const coreTranslations = this.translations.get('core');
    if (!coreTranslations || !coreTranslations[this.currentLanguage]) {
      return;
    }

    const currentTrans = coreTranslations[this.currentLanguage];

    // Update search placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = currentTrans.searchPlaceholder;
    }

    // Update translate button
    const translateButton = document.getElementById('translate-button');
    if (translateButton) {
      translateButton.textContent = this.currentLanguage === 'en' ? 'ES' : 'EN';
      translateButton.title = currentTrans.switchToSpanish;
    }

    // Update loading indicator
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
      loadingIndicator.textContent = currentTrans.loadingPresentation;
    }

    // Update footer
    const footerCopyright = document.querySelector('[data-translate-key="footer_copyright"]');
    if (footerCopyright) {
      footerCopyright.innerHTML = currentTrans.footer_copyright;
    }

    // Update any elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (currentTrans[key]) {
        element.textContent = currentTrans[key];
      }
    });
  }

  // Get translation for a specific key
  translate(key, category = 'core', fallback = key) {
    const categoryTranslations = this.translations.get(category);
    if (categoryTranslations && 
        categoryTranslations[this.currentLanguage] && 
        categoryTranslations[this.currentLanguage][key]) {
      return categoryTranslations[this.currentLanguage][key];
    }

    // Try English fallback
    if (this.currentLanguage !== 'en' && 
        categoryTranslations && 
        categoryTranslations.en && 
        categoryTranslations.en[key]) {
      return categoryTranslations.en[key];
    }

    return fallback;
  }

  // Load specialty-specific translations
  async loadSpecialtyTranslations(specialty) {
    if (this.translations.has(specialty)) {
      return this.translations.get(specialty);
    }

    try {
      // Try to load from navigation menu JSON (which includes ui_strings)
      const navData = await fetch(`assets/data/navigation-menu-${specialty}.json`).then(r => r.json());
      
      if (navData.ui_strings) {
        this.translations.set(specialty, navData.ui_strings);
        return navData.ui_strings;
      }
    } catch (error) {
      console.warn(`Could not load ${specialty} translations:`, error);
    }

    return null;
  }

  // Observer pattern for language changes
  subscribe(callback) {
    this.observers.add(callback);
    return () => this.observers.delete(callback);
  }

  notifyObservers() {
    this.observers.forEach(callback => {
      try {
        callback(this.currentLanguage);
      } catch (error) {
        console.error('Error in language change observer:', error);
      }
    });
  }

  // Format text with language-specific rules
  formatText(text, options = {}) {
    if (!text) return '';

    // Apply language-specific formatting rules
    switch (this.currentLanguage) {
      case 'es':
        // Spanish-specific formatting
        if (options.capitalize) {
          return text.charAt(0).toUpperCase() + text.slice(1);
        }
        break;
      case 'en':
      default:
        // English formatting
        if (options.capitalize) {
          return text.charAt(0).toUpperCase() + text.slice(1);
        }
        break;
    }

    return text;
  }

  // Get language direction (for future RTL support)
  getDirection() {
    return 'ltr'; // All currently supported languages are LTR
  }

  // Get language display name
  getLanguageDisplayName(language = this.currentLanguage) {
    const displayNames = {
      en: 'English',
      es: 'Español'
    };
    return displayNames[language] || language;
  }
}