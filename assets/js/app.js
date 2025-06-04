// assets/js/app.js

// Utility function for escaping HTML
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

// --- CORE TRANSLATIONS ---
// For truly global elements: Header, Footer, and generic site-wide messages.
// Translations for navigation pane content (including legends specific to a nav pane)
// should be handled by the respective navigation scripts (e.g., nav_neurology.js)
// and their data sources (e.g., navigation-menu-neurology.json).
const coreTranslations = {
    en: {
        searchPlaceholder: "Search site content...",
        switchToSpanish: "Switch to Spanish", // Text on button when English is active
        loadingPresentation: "Loading presentation...", // For the Reveal.js presentation area
        noResults: "No results found", // For search results
        searchResults: "Search Results", // For search results title (if any)
        // Footer
        footer_copyright: `© ${new Date().getFullYear()} JP Silva. All rights reserved.`
        // Removed: navUnavailable, navError, learnMoreCharcot, charcotAltText, legend items.
        // These should be managed by the script that builds the specific navigation pane
        // if they are considered part of that pane's content.
    },
    es: {
        searchPlaceholder: "Buscar contenido del sitio...",
        switchToSpanish: "Cambiar a Inglés", // Text on button when Spanish is active
        loadingPresentation: "Cargando presentación...",
        noResults: "No se encontraron resultados",
        searchResults: "Resultados de Búsqueda",
        // Footer
        footer_copyright: `© ${new Date().getFullYear()} JP Silva. Todos los derechos reservados.`
        // Removed: navUnavailable, navError, learnMoreCharcot, charcotAltText, legend items.
    }
};
// Make coreTranslations globally available IF any other script needs them for *truly* global items.
// However, navigation scripts should primarily rely on their own data sources for their content.
window.translations = coreTranslations;

let currentLanguage = 'en'; // Default language
window.currentLanguage = currentLanguage; // Make current language globally accessible

// --- HTML PARTIAL LOADER ---
async function loadHTMLPartials() {
    const partials = [
        { placeholderId: 'header-placeholder', url: 'partials/_header.html' },
        { placeholderId: 'navigation-shell-placeholder', url: 'partials/_navigation_shell.html' },
        { placeholderId: 'page-overlay-placeholder', url: 'partials/_page_overlay.html' },
        { placeholderId: 'footer-placeholder', url: 'partials/_footer.html' }
    ];

    for (const partial of partials) {
        const placeholder = document.getElementById(partial.placeholderId);
        if (placeholder) {
            try {
                const response = await fetch(partial.url);
                if (!response.ok) {
                    console.error(`Failed to fetch ${partial.url}: ${response.status} ${response.statusText}`);
                    throw new Error(`Failed to fetch ${partial.url}`);
                }
                const html = await response.text();
                placeholder.outerHTML = html;
            } catch (error) {
                console.error(`Error loading partial ${partial.url}:`, error);
                const currentPlaceholder = document.getElementById(partial.placeholderId);
                if (currentPlaceholder) {
                    currentPlaceholder.innerHTML = `<p style="color:red; padding:1em;">Error loading section (${partial.placeholderId}).</p>`;
                } else {
                    console.error(`Placeholder ${partial.placeholderId} was removed or replaced.`);
                }
            }
        }
    }
}

// --- LUCIDE ICONS INITIALIZATION ---
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide icons library not loaded');
    }
}

// --- SEARCH FUNCTIONALITY ---
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results-preview');

    if (!searchInput || !searchResults) {
        // console.warn('Search elements (search-input or search-results-preview) not found.');
        return;
    }

    let searchTimeout;
    let selectedIndex = -1;

    function performSearch(query) {
        if (!query.trim()) {
            searchResults.style.display = 'none';
            return;
        }

        if (typeof sitePages === 'undefined') {
            console.error('sitePages (for search data) not found. Make sure search-data.js is loaded.');
            const noResultsText = (coreTranslations[currentLanguage] || coreTranslations.en).noResults;
            searchResults.innerHTML = `<div class="search-result-item">${escapeHTML(noResultsText)} (data unavailable)</div>`;
            searchResults.style.display = 'block';
            return;
        }

        const results = sitePages.filter(page => {
            const searchText = (page.title + ' ' + page.description + ' ' + page.keywords).toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        displaySearchResults(results, query);
    }

    function displaySearchResults(results, query) {
        const currentTrans = coreTranslations[currentLanguage] || coreTranslations.en;
        if (results.length === 0) {
            searchResults.innerHTML = `<div class="search-result-item">${escapeHTML(currentTrans.noResults)}</div>`;
            searchResults.style.display = 'block';
            return;
        }

        const highlightedResults = results.map((result, index) => {
            const highlightedTitle = highlightSearchTerms(result.title, query);
            const highlightedDescription = highlightSearchTerms(result.description, query);
            return `
                <div class="search-result-item" data-index="${index}" data-url="${escapeHTML(result.url)}">
                    <span class="result-snippet-source">${highlightedTitle}</span>
                    <div>${highlightedDescription}</div>
                </div>
            `;
        }).join('');

        searchResults.innerHTML = highlightedResults;
        searchResults.style.display = 'block';
        selectedIndex = -1;

        searchResults.querySelectorAll('.search-result-item').forEach((item) => {
            item.addEventListener('click', () => {
                const url = item.getAttribute('data-url');
                if (url) window.location.href = url;
            });
        });
    }

    function highlightSearchTerms(text, query) {
        if (!query.trim() || typeof text !== 'string') return escapeHTML(text);
        const escapedText = escapeHTML(text);
        try {
            const regex = new RegExp(`(${escapeHTML(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return escapedText.replace(regex, '<mark class="search-preview-highlight">$1</mark>');
        } catch (e) {
            // console.warn("Error in regex for search term highlighting:", e);
            return escapedText;
        }
    }

    function handleKeyDown(event) {
        const items = searchResults.querySelectorAll('.search-result-item');
        if (searchResults.style.display === 'none' || items.length === 0) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(items);
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (selectedIndex >= 0 && items[selectedIndex]) {
                const url = items[selectedIndex].getAttribute('data-url');
                if (url) window.location.href = url;
            }
        } else if (event.key === 'Escape') {
            searchResults.style.display = 'none';
            searchInput.blur();
        }
    }

    function updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.toggle('preview-item-selected', index === selectedIndex);
        });
    }

    searchInput.addEventListener('input', (event) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => performSearch(event.target.value), 200);
    });
    searchInput.addEventListener('keydown', handleKeyDown);
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) performSearch(searchInput.value);
    });
    document.addEventListener('click', (event) => {
        if (searchInput && searchResults && !searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// --- CTRL+K SHORTCUT ---
function initializeCtrlKShortcut() {
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

// --- TRANSLATION APPLICATION & INITIALIZATION ---
function applyGlobalElementTranslations() {
    window.currentLanguage = currentLanguage; // Ensure global var is current

    const currentTrans = coreTranslations[currentLanguage] || coreTranslations.en; // Fallback to English

    // HEADER elements
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = currentTrans.searchPlaceholder;
    }

    const translateButton = document.getElementById('translate-button');
    if (translateButton) {
        translateButton.textContent = currentLanguage === 'en' ? currentTrans.switchToSpanish : coreTranslations.es.switchToSpanish;
    }

    // PRESENTATION AREA (loading indicator)
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.textContent = currentTrans.loadingPresentation;
    }

    // FOOTER elements (example: copyright text)
    // This assumes your _footer.html has an element like: <span data-translate-key="footer_copyright">...</span>
    const footerCopyrightElement = document.querySelector('[data-translate-key="footer_copyright"]');
    if (footerCopyrightElement && currentTrans.footer_copyright) {
        footerCopyrightElement.innerHTML = currentTrans.footer_copyright;
    }

    localStorage.setItem('preferredLanguage', currentLanguage);

    // --- Trigger Navigation Rebuild ---
    // The navigation builder (e.g., nav_neurology.js's initAppNavigation)
    // is responsible for using window.currentLanguage and its own data sources
    // (which should include translations for links, its own section titles, legend, etc.)
    // to rebuild the navigation content.
    if (typeof window.initAppNavigation === 'function') {
        console.log('app.js: Triggering navigation rebuild for language:', currentLanguage);
        window.initAppNavigation();
    } else {
        // console.warn('app.js: window.initAppNavigation function not found. Navigation pane might not update language.');
    }
}

function initializeTranslationSwitch() {
    const translateButton = document.getElementById('translate-button');
    if (!translateButton) {
        // console.warn('Translate button (translate-button) not found in the DOM.');
        return;
    }
    translateButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        applyGlobalElementTranslations(); // Apply core text changes and tell navigation to rebuild
    });
}

// --- MOBILE NAVIGATION ---
function initializeMobileNav() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navPanel = document.querySelector('.site-navigation-panel');
    const overlay = document.getElementById('page-overlay');

    if (!mobileToggle) {
        // console.warn('Mobile navigation toggle (mobile-nav-toggle) not found.');
        return;
    }

    function openMobileNav() {
        if (navPanel) navPanel.classList.add('mobile-nav-is-open');
        if (overlay) overlay.classList.add('is-visible');
        document.body.classList.add('mobile-nav-active');
        mobileToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMobileNav() {
        if (navPanel) navPanel.classList.remove('mobile-nav-is-open');
        if (overlay) overlay.classList.remove('is-visible');
        document.body.classList.remove('mobile-nav-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }

    mobileToggle.addEventListener('click', () => {
        const isOpen = navPanel ? navPanel.classList.contains('mobile-nav-is-open') : false;
        if (isOpen) closeMobileNav();
        else openMobileNav();
    });

    if (overlay) {
        overlay.addEventListener('click', closeMobileNav);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navPanel && navPanel.classList.contains('mobile-nav-is-open')) {
            closeMobileNav();
        }
    });
}

// --- LOAD SAVED LANGUAGE PREFERENCE ---
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && coreTranslations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    window.currentLanguage = currentLanguage;
}

// --- MAIN SCRIPT EXECUTION ---
document.addEventListener('DOMContentLoaded', async () => {
    console.log('app.js: DOMContentLoaded event fired.');

    loadLanguagePreference();

    await loadHTMLPartials();
    console.log('app.js: loadHTMLPartials has completed.');

    initializeLucideIcons();
    initializeCtrlKShortcut();
    initializeSearch();
    initializeMobileNav(); // Initialize mobile nav after its HTML is loaded
    initializeTranslationSwitch(); // Initialize translate button after it's loaded

    // Apply initial translations to global elements and trigger navigation build
    applyGlobalElementTranslations();

    console.log('app.js: Initial setup, global translations applied, and navigation build triggered for language:', window.currentLanguage);
});
