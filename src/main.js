// src/main.js - Main SPA entry point
import './index.css';
import { Router } from './utils/router.js';
import { ComponentLoader } from './utils/component-loader.js';
import { LanguageManager } from './utils/language-manager.js';
import { SearchManager } from './utils/search-manager.js';
import { ContentManager } from './utils/content-manager.js';
import { CopyManager } from './utils/copy-manager.js';
import { getNavigationData, clearNavigationCache } from './utils/navigation-data.js';
import './utils/interactive-app-manager.js'; // This creates window.interactiveAppManager

class ConductMedicineApp {
  constructor() {
    this.router = new Router();
    this.componentLoader = new ComponentLoader();
    this.languageManager = new LanguageManager();
    this.searchManager = new SearchManager();
    this.contentManager = new ContentManager();
    this.copyManager = new CopyManager();
    this.isInitialized = false;
    this.currentSpecialty = null; // Track current specialty for language switching
    
    // Detect and store base path at startup
    this.basePath = this.detectBasePath();
    console.log(`🔍 App initialized with basePath: "${this.basePath}"`);
  }
  
  detectBasePath() {
    // Detect base path from initial URL
    const fullPath = window.location.pathname;
    const href = window.location.href;
    
    console.log(`🔍 Detecting base path from pathname: "${fullPath}", href: "${href}"`);
    
    if (fullPath.includes('/conduct_medicine/') || href.includes('/conduct_medicine/')) {
      return '/conduct_medicine';
    }
    return '';
  }

  async init() {
    if (this.isInitialized) return;
    
    console.log('🏥 Initializing Conduct Based Medicine SPA...');
    
    try {
      // Load core components that persist across navigation
      await this.loadPersistentComponents();
      
      // Initialize language system
      await this.languageManager.init();
      
      // Setup search functionality
      await this.searchManager.init();
      
      // Initialize copy functionality
      this.copyManager.init();
      
      // Initialize routing
      this.setupRouting();
      
      // Initialize UI interactions
      this.initializeInteractions();
      
      // Handle initial route AFTER components are loaded
      await this.router.handleRoute();
      
      this.isInitialized = true;
      console.log('✅ SPA initialization complete');
      
      // Add debugging helpers
      window.debugConductMedicine = {
        clearNavigationCache: () => {
          clearNavigationCache();
          console.log('Navigation cache cleared. Reload a specialty page to see updates.');
        },
        reloadCurrentSpecialty: () => {
          if (this.currentSpecialty) {
            clearNavigationCache();
            this.loadSpecialtyNavigation(this.currentSpecialty);
          } else {
            console.log('No current specialty to reload.');
          }
        },
        forceRefreshNavigation: () => {
          clearNavigationCache();
          // Add cache busting parameter
          const originalFetch = window.fetch;
          window.fetch = (url, options) => {
            if (url.includes('navigation-menu-')) {
              const cacheBuster = '?t=' + Date.now();
              url = url + cacheBuster;
            }
            return originalFetch(url, options);
          };
          
          if (this.currentSpecialty) {
            this.loadSpecialtyNavigation(this.currentSpecialty);
          }
          console.log('🔄 Force refreshed navigation with cache busting');
        }
      };
      
    } catch (error) {
      console.error('❌ Failed to initialize application:', error);
      this.showErrorMessage('Failed to load application. Please refresh the page.');
    }
  }

  async loadPersistentComponents() {
    console.log('🔧 Loading persistent components...');
    console.log(`🔧 Base path detected: "${this.basePath}"`);
    
    try {
      // Load header with search and language switcher
      console.log('🔍 Loading header...');
      const headerPath = `${this.basePath}/_header.html`;
      console.log(`🔍 Header path: ${headerPath}`);
      
      const headerHTML = await this.componentLoader.loadPartial(headerPath);
      const headerPlaceholder = document.getElementById('header-placeholder');
      console.log('📄 Header HTML length:', headerHTML?.length, 'Placeholder found:', !!headerPlaceholder);
      
      if (headerPlaceholder && headerHTML) {
        headerPlaceholder.outerHTML = headerHTML;
        console.log('✅ Header loaded successfully');
      } else {
        console.error('❌ Header loading failed:', {
          placeholder: !!headerPlaceholder,
          html: !!headerHTML,
          htmlLength: headerHTML?.length
        });
        // Create fallback header
        if (headerPlaceholder) {
          headerPlaceholder.outerHTML = this.createFallbackHeader();
          console.log('🔄 Fallback header created');
        }
      }

      // Load navigation shell (will be populated by specialty-specific content)
      console.log('🔍 Loading navigation shell...');
      const navPath = `${this.basePath}/_navigation_shell.html`;
      console.log(`🔍 Navigation path: ${navPath}`);
      
      const navHTML = await this.componentLoader.loadPartial(navPath);
      const navPlaceholder = document.getElementById('navigation-shell-placeholder');
      console.log('📄 Nav HTML length:', navHTML?.length, 'Placeholder found:', !!navPlaceholder);
      
      if (navPlaceholder && navHTML) {
        navPlaceholder.outerHTML = navHTML;
        console.log('✅ Navigation shell loaded successfully');
        
        // Verify navigation panel is now available
        const navPanel = document.querySelector('.site-navigation-panel');
        console.log('📄 Navigation panel after loading:', !!navPanel);
      } else {
        console.error('❌ Navigation shell loading failed:', {
          placeholder: !!navPlaceholder,
          html: !!navHTML,
          htmlLength: navHTML?.length
        });
        // Create fallback navigation
        if (navPlaceholder) {
          navPlaceholder.outerHTML = this.createFallbackNavigation();
          console.log('🔄 Fallback navigation created');
        }
      }

      // Load footer
      console.log('🔍 Loading footer...');
      const footerHTML = await this.componentLoader.loadPartial(`${this.basePath}/_footer.html`);
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder && footerHTML) {
        footerPlaceholder.outerHTML = footerHTML;
        console.log('✅ Footer loaded');
      }

      // Load page overlay for modals
      console.log('🔍 Loading page overlay...');
      const overlayHTML = await this.componentLoader.loadPartial(`${this.basePath}/_page_overlay.html`);
      const overlayPlaceholder = document.getElementById('page-overlay-placeholder');
      if (overlayPlaceholder && overlayHTML) {
        overlayPlaceholder.outerHTML = overlayHTML;
        console.log('✅ Page overlay loaded');
      }

      // Initialize Lucide icons after components are loaded
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        console.log('✅ Lucide icons initialized');
      }
      
      console.log('✅ All persistent components loaded');
      
    } catch (error) {
      console.error('❌ Error loading persistent components:', error);
    }
  }

  setupRouting() {
    // Define route patterns
    this.router.addRoute('/', async () => await this.loadMainPage());
    this.router.addRoute('/specialty/:specialty', async (params) => await this.loadSpecialtyPage(params.specialty));
    this.router.addRoute('/specialty/:specialty/:page', async (params) => await this.loadSpecialtyContent(params.specialty, params.page));
    this.router.addRoute('/tools/:tool', async (params) => await this.loadInteractiveTool(params.tool));
    
    // Handle browser navigation
    window.addEventListener('popstate', async () => await this.router.handleRoute());
    
    // Handle internal navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      // Skip modal triggers, navigation category titles, and other special links
      if (link && 
          link.id !== 'nav-link-invite-coffee' && 
          !link.closest('[data-modal="support"]') && 
          !e.target.closest('.nav-category-title') &&
          this.shouldHandleInternally(link.href)) {
        e.preventDefault();
        this.router.navigate(link.getAttribute('href'));
      }
    });
  }

  shouldHandleInternally(href) {
    // Handle internal links, but let external links and anchors work normally
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin && 
           !href.startsWith('#') && 
           !href.startsWith('mailto:') && 
           !href.startsWith('tel:');
  }

  async loadMainPage() {
    console.log('Loading main page...');
    
    // Clear current specialty since we're on the main page
    this.currentSpecialty = null;
    
    // Show presentation area for main page
    this.showPresentationArea();
    
    // Clear any existing navigation state flags to ensure fresh load
    delete window.generalNavInitialized;
    delete window.neurologyNavInitialized;
    delete window.dermatologyNavInitialized;
    
    // The main page content is already in the HTML from index.html
    // Don't replace it - just make sure it's visible and properly styled
    const mainContent = document.querySelector('.actual-main-content');
    if (mainContent && !mainContent.innerHTML.includes('Medical Specialties')) {
      // Only replace content if the original content isn't there
      console.log('Loading fallback main page content...');
      // Keep the original content structure from index.html but with all specialties
      mainContent.innerHTML = `
        <h2 id="main-content-header" class="text-2xl font-semibold mb-4 text-gray-100">
          Welcome to Conduct Based Medicine
        </h2>
        <p class="mb-4">
          Advanced medical education platform with evidence-based clinical decision support for healthcare professionals. 
          Features interactive tools, presentations, and comprehensive specialty content organized by clinical settings.
        </p>
        <p class="mb-4">
          Navigate using the menu on the left or explore our medical specialties below.
        </p>
        
        <!-- Medical Specialties Grid -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 class="text-xl font-semibold mb-4 text-sky-400">
            Medical Specialties
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <a href="/specialty/neurology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🧠 Neurology</h4>
              <p class="text-sm text-gray-300">Neurological disorders and brain-related conditions</p>
            </a>
            <a href="/specialty/dermatology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🧴 Dermatology</h4>
              <p class="text-sm text-gray-300">Skin conditions and dermatologic diseases</p>
            </a>
            <a href="/specialty/cardiology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🫀 Cardiology</h4>
              <p class="text-sm text-gray-300">Cardiovascular diseases and heart conditions</p>
            </a>
            <a href="/specialty/internal_medicine" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🏥 Internal Medicine</h4>
              <p class="text-sm text-gray-300">Comprehensive adult medical care</p>
            </a>
            <a href="/specialty/gastroenterology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🫀 Gastroenterology</h4>
              <p class="text-sm text-gray-300">Digestive system and liver diseases</p>
            </a>
            <a href="/specialty/pulmonology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🫁 Pulmonology</h4>
              <p class="text-sm text-gray-300">Respiratory diseases and lung conditions</p>
            </a>
            <a href="/specialty/endocrinology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🧬 Endocrinology</h4>
              <p class="text-sm text-gray-300">Hormone disorders and metabolic conditions</p>
            </a>
            <a href="/specialty/nephrology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🫘 Nephrology</h4>
              <p class="text-sm text-gray-300">Kidney diseases and renal disorders</p>
            </a>
            <a href="/specialty/hematology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🩸 Hematology</h4>
              <p class="text-sm text-gray-300">Blood disorders and hematologic conditions</p>
            </a>
            <a href="/specialty/rheumatology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🦴 Rheumatology</h4>
              <p class="text-sm text-gray-300">Autoimmune and joint diseases</p>
            </a>
            <a href="/specialty/infectious_disease" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🦠 Infectious Disease</h4>
              <p class="text-sm text-gray-300">Infectious diseases and antimicrobial therapy</p>
            </a>
            <a href="/specialty/psychiatry" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🧠 Psychiatry</h4>
              <p class="text-sm text-gray-300">Mental health and psychiatric disorders</p>
            </a>
            <a href="/specialty/allergy_immunology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🤧 Allergy & Immunology</h4>
              <p class="text-sm text-gray-300">Allergic diseases and immune disorders</p>
            </a>
            <a href="/specialty/gynecology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">👩 Gynecology</h4>
              <p class="text-sm text-gray-300">Women's reproductive health</p>
            </a>
            <a href="/specialty/urology" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🫘 Urology</h4>
              <p class="text-sm text-gray-300">Urologic conditions and male health</p>
            </a>
            <a href="/specialty/pediatrics" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">👶 Pediatrics</h4>
              <p class="text-sm text-gray-300">Children's health and pediatric medicine</p>
            </a>
            <a href="/specialty/physical_medicine" class="specialty-card bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h4 class="font-semibold text-blue-400 mb-2">🏃 Physical Medicine & Rehabilitation</h4>
              <p class="text-sm text-gray-300">Rehabilitation and functional medicine</p>
            </a>
          </div>
        </div>
        
        <!-- Clinical Organization -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-3 text-sky-400">
            Evidence-Based Clinical Organization
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-gray-700 p-4 rounded-lg">
              <h4 class="font-semibold text-green-400 mb-2">🏥 Outpatient Setting</h4>
              <p class="text-sm text-gray-300">Routine care, screening, preventive medicine, and chronic condition management</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-400 mb-2">🚨 Emergency Room</h4>
              <p class="text-sm text-gray-300">Acute presentations, urgent conditions, and emergency medical care</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg">
              <h4 class="font-semibold text-red-400 mb-2">🏨 Hospitalization</h4>
              <p class="text-sm text-gray-300">Complex cases, inpatient management, and specialized medical care</p>
            </div>
          </div>
          <div class="mt-4 p-4 bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-sky-400 mb-2">📊 Frequency & Mortality Indicators</h4>
            <p class="text-sm text-gray-300 mb-2">Each condition includes evidence-based indicators:</p>
            <div class="flex flex-wrap gap-4 text-xs">
              <span class="text-gray-400"><strong>F█/F▄/F▂</strong> Consultation Frequency (High/Medium/Low)</span>
              <span class="text-gray-400"><strong>M█/M▄/M▂</strong> Mortality Risk (High/Medium/Low)</span>
            </div>
          </div>
        </div>
      `;
    }
    
    // Clear navigation panel before loading general navigation
    const navPanel = document.querySelector('.site-navigation-panel');
    if (navPanel) {
      console.log('🔄 Clearing navigation panel for home page');
      navPanel.innerHTML = '<div class="loading-nav">Loading navigation...</div>';
    } else {
      console.warn('⚠️ Navigation panel not found when trying to clear it');
    }
    
    // Load general navigation (not specialty-specific)
    await this.loadGeneralNavigation();
    
    // Load main page presentation if available
    this.loadMainPresentation();
  }

  async loadSpecialtyPage(specialty) {
    console.log(`Loading ${specialty} specialty page...`);
    
    // Track current specialty for language switching
    this.currentSpecialty = specialty;
    
    // Hide presentation area for specialty pages
    this.hidePresentationArea();
    
    // Load specialty-specific navigation
    await this.loadSpecialtyNavigation(specialty);
    
    // Load specialty main content
    const mainContent = document.querySelector('.actual-main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <h2 id="main-content-header" class="text-2xl font-semibold mb-4 text-gray-100">
          Welcome to ${specialty.charAt(0).toUpperCase() + specialty.slice(1)}
        </h2>
        <p class="mb-4">
          Comprehensive ${specialty} conditions organized by clinical setting and frequency.
        </p>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-3 text-sky-400">
            Clinical Settings
          </h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-gray-700 p-4 rounded">
              <h4 class="font-semibold mb-2">Outpatient</h4>
              <p class="text-sm text-gray-300">Common conditions seen in clinical practice.</p>
            </div>
            <div class="bg-gray-700 p-4 rounded">
              <h4 class="font-semibold mb-2">Emergency Room</h4>
              <p class="text-sm text-gray-300">Acute presentations requiring immediate care.</p>
            </div>
            <div class="bg-gray-700 p-4 rounded">
              <h4 class="font-semibold mb-2">Hospitalization</h4>
              <p class="text-sm text-gray-300">Complex cases requiring inpatient management.</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  async loadSpecialtyNavigation(specialty) {
    console.log(`🧠 Loading ${specialty} navigation directly...`);
    
    try {
      // Wait for navigation panel to be available (with retry)
      let navPanel = document.querySelector('.site-navigation-panel');
      let retries = 0;
      const maxRetries = 10;
      
      while (!navPanel && retries < maxRetries) {
        console.log(`⏳ Waiting for navigation panel... (attempt ${retries + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
        navPanel = document.querySelector('.site-navigation-panel');
        retries++;
      }
      
      if (!navPanel) {
        console.error('❌ Navigation panel not found after retries');
        console.log('🔍 Available elements:', document.querySelectorAll('[class*="nav"]'));
        return;
      }
      
      console.log('✅ Navigation panel found:', navPanel);

      // Use the base path detected at app startup
      const basePath = this.basePath;
      
      const navDataUrl = `${basePath}/assets/data/navigation-menu-${specialty}.json`;
      
      console.log(`🔍 Loading ${specialty} navigation with basePath: "${basePath}"`);
      
      console.log(`📍 Loading navigation data for: ${specialty}`);
      
      // Fetch navigation data
      const navData = await getNavigationData(specialty, basePath);
      const lang = window.currentLanguage || 'en';
      const uiStrings = (navData.ui_strings && navData.ui_strings[lang]) || navData.ui_strings?.en || {};

      if (!Array.isArray(navData.sections) || navData.sections.length === 0) {
        throw new Error('Invalid navigation data');
      }

      console.log(`🧠 Building ${specialty} navigation...`);
      let navHtml = '';
      
      navData.sections.forEach(section => {
        let titleTextHtml = '';
        let sectionTitleForId = section.id;

        if (section.title) {
          const sectionTitleObj = section.title;
          const sectionTitleText = sectionTitleObj[lang] || sectionTitleObj.en || '';
          
          if (!sectionTitleForId && sectionTitleObj.en) {
            sectionTitleForId = this.generateSafeId(sectionTitleObj.en);
          }

          // Check for historical figure data in the section
          if (section.historicalFigure) {
            const figure = section.historicalFigure;
            const altText = uiStrings.charcotImageAlt || figure.name;
            const titleAttr = uiStrings.charcotImageTitle || `Learn more about ${figure.name}`;
            
            titleTextHtml = `
              <span>${this.escapeHTML(sectionTitleText)}</span>
              <a href="${figure.wikipediaUrl}" target="_blank" rel="noopener noreferrer" title="${this.escapeHTML(titleAttr)}" class="inline-block ml-2">
                <img src="${figure.imageUrl}" alt="${this.escapeHTML(altText)}" class="w-8 h-8 rounded-full object-cover border border-gray-400 hover:border-sky-500 transition-all duration-200 ease-in-out align-middle">
              </a>
            `;
          } else {
            titleTextHtml = this.escapeHTML(sectionTitleText);
          }
          navHtml += `<h3 id="${sectionTitleForId || this.generateSafeId('section-title')}" class="mt-6 first:mt-0 flex items-center">${titleTextHtml}</h3>`;
        }

        if (Array.isArray(section.items)) {
          navHtml += `<ul>`;
          section.items.forEach(item => {
            const itemLabelObj = item.label;
            const itemLabelText = itemLabelObj[lang] || itemLabelObj.en || '';
            
            let itemId = item.id;
            if (!itemId && itemLabelObj.en) {
              itemId = this.generateSafeId(itemLabelObj.en);
            } else if (!itemId) {
              itemId = this.generateSafeId('nav-item');
            }
            
            if (item.subItems && item.subItems.length > 0) {
              const subMenuId = `submenu-${itemId}`;
              navHtml += `<li class="nav-category">`;
              navHtml += `<div class="nav-category-title" role="button" tabindex="0" aria-expanded="false" aria-controls="${subMenuId}">
                            <span>${this.escapeHTML(itemLabelText)}</span>
                            <i data-lucide="chevron-right" class="lucide-chevron-right"></i>
                          </div>`;
              navHtml += `<ul id="${subMenuId}">`;
              item.subItems.forEach(subItem => {
                const subItemLabelObj = subItem.label;
                const subItemLabelText = subItemLabelObj[lang] || subItemLabelObj.en || '';
                
                let subItemId = subItem.id;
                if(!subItemId && subItemLabelObj.en){
                  subItemId = this.generateSafeId(subItemLabelObj.en);
                } else if (!subItemId) {
                  subItemId = this.generateSafeId('nav-subitem');
                }
                navHtml += `<li><a id="${subItemId}" href="${this.escapeHTML(subItem.url)}">${this.escapeHTML(subItemLabelText)}</a></li>`;
              });
              navHtml += `</ul>`;
              navHtml += `</li>`;
            } else {
              navHtml += `<li><a id="${itemId}" href="${this.escapeHTML(item.url)}">${this.escapeHTML(itemLabelText)}</a></li>`;
            }
          });
          navHtml += `</ul>`;
        }
      });

      // Add legend
      const legendHtmlString = `
        <div class="nav-legend">
          <h4 class="text-sm font-semibold text-gray-200 mb-2">${this.escapeHTML(uiStrings.legendTitle || "Symbol Legend:")}</h4>
          <div class="legend-section mb-2">
            <p class="text-xs text-gray-400 mb-1"><strong>FC</strong> (${this.escapeHTML(uiStrings.legendFC || "Frequency of Consultation")}):</p>
            <ul class="text-xs text-gray-400">
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">F█</span> ${this.escapeHTML(uiStrings.legendHigh || "High")}</li>
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">F▄</span> ${this.escapeHTML(uiStrings.legendMedium || "Medium")}</li>
              <li class="flex items-center"><span class="symbol-legend-item">F▂</span> ${this.escapeHTML(uiStrings.legendLow || "Low")}</li>
            </ul>
          </div>
          <div class="legend-section">
            <p class="text-xs text-gray-400 mb-1"><strong>MA</strong> (${this.escapeHTML(uiStrings.legendMA || "Mortality Associated")}):</p>
            <ul class="text-xs text-gray-400">
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">M█</span> ${this.escapeHTML(uiStrings.legendHigh || "High")}</li>
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">M▄</span> ${this.escapeHTML(uiStrings.legendMedium || "Medium")}</li>
              <li class="flex items-center"><span class="symbol-legend-item">M▂</span> ${this.escapeHTML(uiStrings.legendLow || "Low")}</li>
            </ul>
          </div>
          <p class="text-xs text-gray-500 italic mt-2">${this.escapeHTML(uiStrings.legendIndicators || "(Indicators appear if data is available)")}</p>
        </div>
      `;
      navHtml += legendHtmlString;

      console.log(`🧠 Setting navigation HTML for ${specialty}, length:`, navHtml.length);
      navPanel.innerHTML = navHtml;

      // Re-create icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ context: navPanel });
      }

      // Attach event listeners
      this.attachNavigationEventListeners(navPanel);
      
      // Check for expandable categories
      const categoryTitles = navPanel.querySelectorAll('.nav-category-title');
      console.log(`🧠 Found ${categoryTitles.length} expandable categories for ${specialty}`);
      categoryTitles.forEach((title, index) => {
        console.log(`🧠 Category ${index + 1}:`, title.textContent.trim());
        
        // Verify the structure for debugging
        const categoryLi = title.closest('.nav-category');
        const subMenu = title.nextElementSibling;
        console.log(`   └── Structure check - categoryLi: ${!!categoryLi}, subMenu: ${!!subMenu}`);
      });
      
      console.log(`✅ Successfully loaded ${specialty} navigation with ${categoryTitles.length} expandable sections`);
      
    } catch (error) {
      console.error(`❌ Failed to load ${specialty} navigation:`, error);
      // Don't fall back to basic navigation - show error in navigation panel instead
      const navPanel = document.querySelector('.site-navigation-panel');
      if (navPanel) {
        navPanel.innerHTML = `
          <div class="navigation-error p-4 text-center">
            <h3 class="text-lg font-semibold text-red-400 mb-2">Navigation Error</h3>
            <p class="text-sm text-gray-400 mb-3">Failed to load ${specialty} navigation</p>
            <p class="text-xs text-gray-500">${error.message}</p>
            <button onclick="window.location.reload()" class="mt-3 px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded text-sm">
              Reload Page
            </button>
          </div>
        `;
      }
    }
  }

  async loadGeneralNavigation() {
    try {
      // Build navigation directly without relying on external scripts that might be overwritten
      const navPanel = document.querySelector('.site-navigation-panel');
      if (!navPanel) {
        console.warn('Navigation panel not found');
        return;
      }
      
      // Clear navigation panel first
      navPanel.innerHTML = '<div class="loading-nav">Loading navigation...</div>';
      
      // Use the base path detected at app startup
      const basePath = this.basePath;
      
      const navDataUrl = `${basePath}/assets/data/navigation-menu-index.json`;
      
      console.log(`🔍 Loading general navigation with basePath: "${basePath}"`);
      
      // Fetch navigation data for index
      const navData = await getNavigationData('index', basePath);
      
      // Handle different structures: index is array, specialties have sections property
      const navStructure = Array.isArray(navData) ? navData : (navData.sections || []);
      
      if (!Array.isArray(navStructure) || navStructure.length === 0) {
        throw new Error('Invalid navigation data');
      }
      
      // Build navigation HTML with language support
      const lang = window.currentLanguage || 'en';
      let navHtml = '';
      
      navStructure.forEach(section => {
        const sectionId = section.id || this.generateSafeId((typeof section.title === 'object' ? section.title.en : section.title));
        const sectionTitle = (typeof section.title === 'object') ? 
          (section.title[lang] || section.title.en || '') : 
          section.title;
        
        navHtml += `<h3 id="${sectionId}" class="mt-6 first:mt-0">${this.escapeHTML(sectionTitle)}</h3><ul>`;
        
        if (Array.isArray(section.items)) {
          section.items.forEach(item => {
            const itemLabel = (typeof item.label === 'object') ? 
              (item.label[lang] || item.label.en || '') : 
              item.label;
            
            if (item.subItems && item.subItems.length > 0) {
              const subMenuId = `submenu-${item.id || this.generateSafeId(itemLabel)}`;
              navHtml += `<li class="nav-category">`;
              navHtml += `<div class="nav-category-title" role="button" tabindex="0" aria-expanded="false" aria-controls="${subMenuId}">
                            <span>${this.escapeHTML(itemLabel)}</span>
                            <i data-lucide="chevron-right" class="lucide-chevron-right"></i>
                          </div>`;
              navHtml += `<ul id="${subMenuId}">`;
              item.subItems.forEach(subItem => {
                const subItemLabel = (typeof subItem.label === 'object') ? 
                  (subItem.label[lang] || subItem.label.en || '') : 
                  subItem.label;
                navHtml += `<li><a id="${subItem.id || ''}" href="${this.escapeHTML(subItem.url)}">${this.escapeHTML(subItemLabel)}</a></li>`;
              });
              navHtml += `</ul>`;
              navHtml += `</li>`;
            } else {
              navHtml += `<li><a id="${item.id || ''}" href="${this.escapeHTML(item.url)}">${this.escapeHTML(itemLabel)}</a></li>`;
            }
          });
        }
        navHtml += `</ul>`;
      });
      
      navPanel.innerHTML = navHtml;
      
      // Re-create icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ context: navPanel });
      }
      
      // Add event listeners using event delegation on the navigation panel itself
      this.attachNavigationEventListeners(navPanel);
      
    } catch (error) {
      console.error('Error building navigation directly:', error);
      // Don't fall back to basic navigation - show error in navigation panel instead
      const navPanel = document.querySelector('.site-navigation-panel');
      if (navPanel) {
        navPanel.innerHTML = `
          <div class="navigation-error p-4 text-center">
            <h3 class="text-lg font-semibold text-red-400 mb-2">Navigation Error</h3>
            <p class="text-sm text-gray-400 mb-3">Failed to load navigation</p>
            <p class="text-xs text-gray-500">${error.message}</p>
            <button onclick="window.location.reload()" class="mt-3 px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded text-sm">
              Reload Page
            </button>
          </div>
        `;
      }
    }
  }

  attachNavigationEventListeners(navPanel) {
    console.log('🔧 Attaching navigation event listeners to panel:', navPanel);
    
    // Remove any existing event listeners to prevent duplicates
    if (this.handleNavigationClick) {
      navPanel.removeEventListener('click', this.handleNavigationClick);
    }
    if (this.handleNavigationKeydown) {
      navPanel.removeEventListener('keydown', this.handleNavigationKeydown);
    }
    
    // Use event delegation on the navigation panel
    this.handleNavigationClick = (event) => {
      console.log('🖱️ Navigation panel clicked, target:', event.target);
      const categoryTitle = event.target.closest('.nav-category-title');
      if (categoryTitle) {
        event.preventDefault();
        event.stopPropagation();
        console.log('✅ Found .nav-category-title element:', categoryTitle.textContent.trim());
        this.toggleNavigationCategory(categoryTitle);
      } else {
        console.log('ℹ️ Click was not on a .nav-category-title element');
      }
    };
    
    this.handleNavigationKeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        const categoryTitle = event.target.closest('.nav-category-title');
        if (categoryTitle) {
          event.preventDefault();
          console.log('⌨️ Keyboard activation on category:', categoryTitle.textContent.trim());
          this.toggleNavigationCategory(categoryTitle);
        }
      }
    };
    
    navPanel.addEventListener('click', this.handleNavigationClick);
    navPanel.addEventListener('keydown', this.handleNavigationKeydown);
    
    console.log('✅ Navigation event listeners attached successfully');
  }
  
  toggleNavigationCategory(titleElement) {
    console.log('🔄 Toggling navigation category:', titleElement.textContent.trim());
    
    const categoryLi = titleElement.closest('.nav-category');
    const subMenu = titleElement.nextElementSibling;
    const icon = titleElement.querySelector('i[data-lucide]');
    
    console.log('🔍 Elements found - categoryLi:', categoryLi, 'subMenu:', subMenu, 'icon:', icon);
    console.log('🔍 Title element HTML:', titleElement.outerHTML);
    
    if (!categoryLi || !subMenu) {
      console.error('❌ Missing required elements for navigation toggle');
      return;
    }
    
    const isExpanded = titleElement.getAttribute('aria-expanded') === 'true';
    console.log(`📋 Current state: ${isExpanded ? 'expanded' : 'collapsed'} → ${!isExpanded ? 'expanded' : 'collapsed'}`);
    
    categoryLi.classList.toggle('open');
    titleElement.setAttribute('aria-expanded', String(!isExpanded));
    
    if (icon) {
      const newIconName = isExpanded ? 'chevron-right' : 'chevron-down';
      icon.innerHTML = '';
      icon.setAttribute('data-lucide', newIconName);
      console.log(`🔄 Icon changed to: ${newIconName}`);
      
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ elements: [icon] });
      } else {
        console.warn('⚠️ Lucide icons not available');
      }
    } else {
      console.warn('⚠️ No icon found to toggle');
    }
    
    console.log('✅ Navigation category toggle completed');
  }
  
  escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
  }
  
  generateSafeId(label) {
    if (typeof label !== 'string') return 'nav-item';
    return label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  createFallbackHeader() {
    return `
      <header class="site-header">
        <section class="search-social-nav-section">
          <button id="mobile-nav-toggle" class="mobile-nav-toggle-button" aria-label="Toggle navigation">
            <span>☰</span>
          </button>
          <div class="search-bar-container">
            <div class="relative">
              <input id="search-input" type="search" placeholder="Search site content..." 
                     class="block w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-sky-500 focus:border-sky-500 focus:bg-gray-600 transition" />
              <div id="search-results-preview" class="search-results-container"></div>
            </div>
          </div>
          <button id="translate-button" class="text-sm ml-4 px-3 py-1.5 rounded transition">Switch to Spanish</button>
        </section>
      </header>
    `;
  }

  createFallbackNavigation() {
    return `
      <aside class="site-navigation-panel">
        <nav class="navigation-content">
          <div class="navigation-error p-4 text-center">
            <h3 class="text-lg font-semibold text-yellow-400 mb-2">Navigation Loading...</h3>
            <p class="text-sm text-gray-400">Unable to load navigation from server.</p>
          </div>
        </nav>
      </aside>
    `;
  }


  loadMainPresentation() {
    // Check if there's a presentation area and load it
    const presentationWrapper = document.querySelector('.presentation-area-wrapper[data-presentation-src]');
    if (presentationWrapper && typeof loadAndInitializeReveal === 'function') {
      console.log('🎬 Loading main page presentation...');
      loadAndInitializeReveal();
    } else if (presentationWrapper) {
      console.warn('⚠️ Presentation wrapper found but loadAndInitializeReveal function not available');
    }
  }

  showPresentationArea() {
    const presentationWrapper = document.querySelector('.presentation-area-wrapper');
    if (presentationWrapper) {
      presentationWrapper.style.display = 'block';
      console.log('✅ Presentation area shown');
    }
  }

  hidePresentationArea() {
    const presentationWrapper = document.querySelector('.presentation-area-wrapper');
    if (presentationWrapper) {
      presentationWrapper.style.display = 'none';
      console.log('✅ Presentation area hidden');
    }
  }

  loadSpecialtyPresentation(specialty) {
    // Don't reload presentation for specialty pages to avoid conflicts
    console.log(`🎬 Skipping presentation reload for specialty: ${specialty}`);
  }

  async loadSpecialtyContent(specialty, page) {
    console.log(`Loading ${specialty}/${page} content...`);
    
    // Track current specialty for language switching
    this.currentSpecialty = specialty;
    
    // Hide presentation area for content pages
    this.hidePresentationArea();
    
    // Load specialty navigation first (side pane)
    await this.loadSpecialtyNavigation(specialty);
    
    const mainContent = document.querySelector('.actual-main-content');
    if (!mainContent) return;
    
    // Show loading indicator
    mainContent.innerHTML = `
      <div class="loading-content">
        <h2 class="text-2xl font-semibold mb-4 text-gray-100">Loading...</h2>
        <p>Loading ${specialty} content: ${page}...</p>
      </div>
    `;
    
    try {
      // Load content using the hybrid CMS with current language
      const currentLanguage = window.currentLanguage || 'en';
      const content = await this.contentManager.loadContent(specialty, page, currentLanguage);
      
      console.log('📄 Content loaded:', {
        hasError: !!content.error,
        contentLength: content.content?.length,
        contentPreview: content.content?.substring(0, 200),
        metadata: content.metadata
      });
      
      if (content.error) {
        mainContent.innerHTML = content.content;
        return;
      }
      
      // Create content structure with metadata (optimized for side pane layout)
      const contentHTML = `
        <article class="medical-content-with-sidebar">
          <header class="content-header">
            <div class="breadcrumb text-sm text-gray-400 mb-2">
              <a href="/specialty/${specialty}" class="hover:text-sky-400">${specialty.charAt(0).toUpperCase() + specialty.slice(1)}</a>
              <span class="mx-2">›</span>
              <span>${content.metadata.title}</span>
            </div>
            <h1 class="text-2xl font-bold mb-2 text-gray-100">${content.metadata.title}</h1>
            <div class="content-meta">
              <span class="specialty-tag">${content.metadata.specialty}</span>
              <span class="setting-tag">${content.metadata.setting}</span>
              ${content.metadata.frequency ? `<span class="frequency-indicator">${this.contentManager.getFrequencySymbol(content.metadata.frequency)}</span>` : ''}
              ${content.metadata.mortality ? `<span class="mortality-indicator">${this.contentManager.getMortalitySymbol(content.metadata.mortality)}</span>` : ''}
              ${this.generateLanguageIndicators(content.metadata, currentLanguage)}
            </div>
            ${content.metadata.lastUpdated ? `<p class="text-xs text-gray-400 mt-2">Last updated: ${new Date(content.metadata.lastUpdated).toLocaleDateString()}</p>` : ''}
            ${this.generateTranslationStatus(content.metadata)}
          </header>
          <div class="content-body">
            ${content.content}
          </div>
          ${content.metadata.interactiveTools && content.metadata.interactiveTools.length > 0 ? this.renderInteractiveTools(content.metadata.interactiveTools) : ''}
          ${content.metadata.relatedContent && content.metadata.relatedContent.length > 0 ? this.renderRelatedContent(content.metadata.relatedContent, specialty) : ''}
        </article>
      `;
      
      mainContent.innerHTML = contentHTML;
      
      // Initialize any interactive components
      this.initializeContentInteractions();
      
      // Index content for search
      await this.contentManager.indexContent(specialty, page, content);
      
      // Update active navigation state
      this.updateActiveNavigation(`/specialty/${specialty}/${page}`);
      
    } catch (error) {
      console.error(`Failed to load ${specialty}/${page}:`, error);
      mainContent.innerHTML = `
        <div class="error-content">
          <h2 class="text-xl font-semibold mb-4 text-red-400">Error Loading Content</h2>
          <p>Failed to load ${specialty}: ${page}</p>
          <p class="text-sm text-gray-400 mt-2">${error.message}</p>
          <a href="/specialty/${specialty}" class="text-sky-400 hover:text-sky-300 mt-4 inline-block">← Back to ${specialty}</a>
        </div>
      `;
    }
  }

  updateActiveNavigation(currentPath) {
    // Clear previous active states
    document.querySelectorAll('.nav-link-active, .nav-category-active').forEach(el => {
      el.classList.remove('nav-link-active', 'nav-category-active');
    });

    // Find and highlight current navigation item
    const navLinks = document.querySelectorAll('.site-navigation-panel a[href]');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || currentPath.endsWith(href)) {
        link.classList.add('nav-link-active');
        
        // Also highlight parent categories
        const parentCategory = link.closest('.nav-category');
        if (parentCategory) {
          parentCategory.classList.add('nav-category-active');
          // Expand parent category if collapsed
          const categoryTitle = parentCategory.querySelector('.nav-category-title');
          if (categoryTitle) {
            categoryTitle.setAttribute('aria-expanded', 'true');
            parentCategory.classList.add('open');
          }
        }
      }
    });
  }

  renderInteractiveTools(tools) {
    return `
      <section class="interactive-tools mt-8">
        <h3 class="text-xl font-semibold mb-4 text-sky-400">Interactive Tools</h3>
        <div class="tools-grid grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${tools.map(tool => `
            <div class="tool-card bg-gray-700 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">${tool.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
              <button class="launch-tool bg-sky-600 hover:bg-sky-700 text-white px-3 py-1 rounded text-sm" data-tool="${tool}">
                Launch Tool
              </button>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderRelatedContent(relatedItems, specialty) {
    return `
      <section class="related-content mt-8">
        <h3 class="text-xl font-semibold mb-4 text-sky-400">Related Content</h3>
        <div class="related-links grid md:grid-cols-2 gap-3">
          ${relatedItems.map(item => `
            <a href="/specialty/${specialty}/${item}" class="related-link block p-3 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              ${item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }

  initializeContentInteractions() {
    // Handle interactive tool launches
    document.querySelectorAll('.launch-tool').forEach(button => {
      button.addEventListener('click', (e) => {
        const tool = e.target.getAttribute('data-tool');
        this.launchInteractiveTool(tool);
      });
    });
  }

  async launchInteractiveTool(tool) {
    console.log(`Launching interactive tool: ${tool}`);
    
    if (window.interactiveAppManager) {
      try {
        await window.interactiveAppManager.launchApp(tool);
      } catch (error) {
        console.error(`Failed to launch ${tool}:`, error);
        this.showModal(`
          <div class="tool-modal">
            <h3 class="text-xl font-semibold mb-4 text-red-400">Error</h3>
            <p>Failed to launch interactive tool: ${tool}</p>
            <p class="text-sm text-gray-400 mt-2">${error.message}</p>
          </div>
        `);
      }
    } else {
      this.showModal(`
        <div class="tool-modal">
          <h3 class="text-xl font-semibold mb-4">Interactive Tool: ${tool}</h3>
          <p>Interactive app manager not available.</p>
        </div>
      `);
    }
  }

  showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-4 max-h-[80vh] overflow-auto">
        ${content}
        <button class="close-modal bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mt-4">
          Close
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close handlers
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
    
    // Coffee button handler
    modal.querySelector('.coffee-btn').addEventListener('click', () => {
      // You can replace this URL with your actual donation platform
      window.open('https://ko-fi.com/conductmedicine', '_blank');
    });
  }

  async loadInteractiveTool(tool) {
    console.log(`Loading interactive tool: ${tool}`);
    // Placeholder for interactive tools
    const mainContent = document.querySelector('.actual-main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-100">Interactive Tool: ${tool}</h2>
        <p>Interactive medical tool will be loaded here.</p>
      `;
    }
  }

  initializeInteractions() {
    // Mobile navigation toggle
    this.setupMobileNavigation();
    
    // Language switcher
    this.setupLanguageSwitcher();
    
    // Search functionality
    this.setupSearchInteractions();
    
    // Modal system
    this.setupModalSystem();
  }

  setupMobileNavigation() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navPanel = document.querySelector('.site-navigation-panel');
    const overlay = document.getElementById('page-overlay');

    if (mobileToggle && navPanel && overlay) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navPanel.classList.contains('mobile-nav-is-open');
        
        if (isOpen) {
          navPanel.classList.remove('mobile-nav-is-open');
          overlay.classList.remove('is-visible');
          document.body.classList.remove('mobile-nav-active');
        } else {
          navPanel.classList.add('mobile-nav-is-open');
          overlay.classList.add('is-visible');
          document.body.classList.add('mobile-nav-active');
        }
      });

      overlay.addEventListener('click', () => {
        navPanel.classList.remove('mobile-nav-is-open');
        overlay.classList.remove('is-visible');
        document.body.classList.remove('mobile-nav-active');
      });
    }
  }

  setupLanguageSwitcher() {
    const translateButton = document.getElementById('translate-button');
    if (translateButton) {
      translateButton.addEventListener('click', () => {
        this.languageManager.toggleLanguage();
      });
    }
  }

  setupSearchInteractions() {
    // Ctrl+K shortcut for search
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    });
  }

  // Method called by language manager to reload navigation for language changes
  async reloadCurrentSpecialtyNavigation() {
    if (this.currentSpecialty) {
      console.log(`🌍 Reloading ${this.currentSpecialty} navigation for language change`);
      await this.loadSpecialtyNavigation(this.currentSpecialty);
    } else {
      console.log(`🌍 Reloading home page navigation for language change`);
      await this.loadGeneralNavigation();
    }
  }

  setupModalSystem() {
    // Setup support/coffee modal trigger
    document.addEventListener('click', (e) => {
      const supportLink = e.target.closest('[data-modal="support"]') || e.target.closest('#nav-link-invite-coffee');
      if (supportLink) {
        e.preventDefault();
        e.stopPropagation();
        this.showSupportModal();
      }
    });
  }

  showSupportModal() {
    // Create and show support modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-4">
        <h3 class="text-xl font-semibold mb-4 text-gray-100">Support Our Medical Education Platform</h3>
        <p class="text-gray-300 mb-4">Help us maintain and expand this clinical decision support tool.</p>
        <div class="flex gap-3">
          <button class="coffee-btn bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded transition-colors">
            ☕ Buy me a coffee
          </button>
          <button class="close-modal bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors">
            Close
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close handlers
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
    
    // Coffee button handler
    modal.querySelector('.coffee-btn').addEventListener('click', () => {
      // You can replace this URL with your actual donation platform
      window.open('https://ko-fi.com/conductmedicine', '_blank');
    });
  }

  showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-600 text-white p-4 rounded shadow-lg z-50';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => errorDiv.remove(), 5000);
  }

  // Translation status and language indicator methods
  generateLanguageIndicators(metadata, currentLanguage) {
    const availableLanguages = ['en', 'es']; // Will be enhanced to check actual availability
    let indicators = '';

    availableLanguages.forEach(lang => {
      const isActive = lang === currentLanguage;
      const flag = lang === 'en' ? '🇺🇸' : '🇪🇸';
      const langName = lang === 'en' ? 'English' : 'Español';
      
      // Check if content exists for this language (simplified for now)
      const hasContent = lang === 'en' || (metadata.translationStatus && metadata.translationStatus.status !== 'pending');
      
      if (hasContent) {
        const className = isActive ? 'language-indicator active' : 'language-indicator';
        const title = isActive ? `Currently viewing in ${langName}` : `Switch to ${langName}`;
        indicators += `<span class="${className}" title="${title}" data-lang="${lang}">${flag}</span>`;
      } else {
        indicators += `<span class="language-indicator unavailable" title="Not available in ${langName}">⚪</span>`;
      }
    });

    return indicators;
  }

  generateTranslationStatus(metadata) {
    if (!metadata.translationStatus || metadata.language === 'en') {
      return '';
    }

    const status = metadata.translationStatus;
    let statusHTML = '';

    if (status.status === 'auto-translated') {
      statusHTML = `
        <div class="translation-status mt-2 p-2 bg-yellow-900/30 border border-yellow-600/50 rounded text-sm">
          <div class="flex items-center gap-2 text-yellow-400">
            <span>🤖</span>
            <span>Auto-translated content</span>
          </div>
          <p class="text-xs text-yellow-300 mt-1">
            This content has been automatically translated and requires medical professional review.
            Treatment protocols and dosages should be verified before clinical use.
          </p>
        </div>
      `;
    } else if (status.status === 'human-reviewed') {
      statusHTML = `
        <div class="translation-status mt-2 p-2 bg-green-900/30 border border-green-600/50 rounded text-sm">
          <div class="flex items-center gap-2 text-green-400">
            <span>✅</span>
            <span>Medically reviewed translation</span>
          </div>
          <p class="text-xs text-green-300 mt-1">
            Reviewed by: ${status.reviewedBy || 'Medical professional'} on ${status.lastUpdated}
          </p>
        </div>
      `;
    } else if (status.status === 'pending') {
      statusHTML = `
        <div class="translation-status mt-2 p-2 bg-gray-900/30 border border-gray-600/50 rounded text-sm">
          <div class="flex items-center gap-2 text-gray-400">
            <span>⏳</span>
            <span>Translation in progress</span>
          </div>
        </div>
      `;
    }

    return statusHTML;
  }
}

// Global error handler for debugging
window.addEventListener('error', (event) => {
  console.error('🚨 Global JavaScript Error:', {
    message: event.message,
    filename: event.filename,
    line: event.lineno,
    column: event.colno,
    error: event.error
  });
});

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      console.log('🚀 DOM loaded, initializing app...');
      window.app = new ConductMedicineApp();
      await window.app.init();
      console.log('🎉 App initialization completed');
    } catch (error) {
      console.error('💥 App initialization failed:', error);
      // Show fallback content
      document.body.innerHTML = `
        <div style="padding: 2rem; color: #ef4444; font-family: Arial, sans-serif;">
          <h1>Application Error</h1>
          <p>Failed to initialize the application. Please refresh the page.</p>
          <pre>${error.message}</pre>
        </div>
      `;
    }
  });
} else {
  try {
    console.log('🚀 DOM already loaded, initializing app...');
    window.app = new ConductMedicineApp();
    window.app.init().then(() => {
      console.log('🎉 App initialization completed');
    }).catch((error) => {
      console.error('💥 App initialization failed:', error);
    });
  } catch (error) {
    console.error('💥 App creation failed:', error);
  }
}

export default ConductMedicineApp;