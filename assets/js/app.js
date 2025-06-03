// assets/js/app.js

// Utility function for escaping HTML
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

// Translation system
const translations = {
    en: {
        searchPlaceholder: "Search site content...",
        switchToSpanish: "Switch to Spanish",
        loadingPresentation: "Loading presentation...",
        noResults: "No results found",
        searchResults: "Search Results"
    },
    es: {
        searchPlaceholder: "Buscar contenido del sitio...",
        switchToSpanish: "Cambiar a Inglés",
        loadingPresentation: "Cargando presentación...",
        noResults: "No se encontraron resultados",
        searchResults: "Resultados de Búsqueda"
    }
};

let currentLanguage = 'en';

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
                if(currentPlaceholder) currentPlaceholder.innerHTML = `<p style="color:red; padding:1em;">Error loading section. (${partial.placeholderId})</p>`;
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
        console.warn('Search elements not found');
        return;
    }

    let searchTimeout;
    let selectedIndex = -1;

    function performSearch(query) {
        if (!query.trim()) {
            searchResults.style.display = 'none';
            return;
        }

        // Check if sitePages is available
        if (typeof sitePages === 'undefined') {
            console.error('sitePages not found. Make sure search-data.js is loaded.');
            return;
        }

        const results = sitePages.filter(page => {
            const searchText = (page.title + ' ' + page.description + ' ' + page.keywords).toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        displaySearchResults(results, query);
    }

    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `<div class="search-result-item">${translations[currentLanguage].noResults}</div>`;
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

        // Add click listeners to results
        searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                const url = item.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        });
    }

    function highlightSearchTerms(text, query) {
        if (!query.trim()) return escapeHTML(text);

        const escapedText = escapeHTML(text);
        const regex = new RegExp(`(${escapeHTML(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return escapedText.replace(regex, '<mark class="search-preview-highlight">$1</mark>');
    }

    function handleKeyDown(event) {
        const items = searchResults.querySelectorAll('.search-result-item');

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(items);
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (selectedIndex >= 0 && items[selectedIndex]) {
                const url = items[selectedIndex].getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
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

    // Event listeners
    searchInput.addEventListener('input', (event) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(event.target.value);
        }, 200);
    });

    searchInput.addEventListener('keydown', handleKeyDown);

    // Hide results when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Show results when focusing on search input
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            performSearch(searchInput.value);
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

// --- TRANSLATION FUNCTIONALITY ---
function initializeTranslation() {
    const translateButton = document.getElementById('translate-button');

    if (!translateButton) {
        console.warn('Translate button not found');
        return;
    }

    translateButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        applySelectedTranslations();
    });

    // Apply initial translations
    applySelectedTranslations();
}

function applySelectedTranslations() {
    const searchInput = document.getElementById('search-input');
    const translateButton = document.getElementById('translate-button');
    const loadingIndicator = document.getElementById('loading-indicator');

    if (searchInput) {
        searchInput.placeholder = translations[currentLanguage].searchPlaceholder;
    }

    if (translateButton) {
        translateButton.textContent = translations[currentLanguage].switchToSpanish;
    }

    if (loadingIndicator) {
        loadingIndicator.textContent = translations[currentLanguage].loadingPresentation;
    }

    // Store language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// --- MOBILE NAVIGATION ---
function initializeMobileNav() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navPanel = document.querySelector('.site-navigation-panel');
    const overlay = document.getElementById('page-overlay');

    if (!mobileToggle || !navPanel || !overlay) {
        console.warn('Mobile navigation elements not found');
        return;
    }

    function openMobileNav() {
        navPanel.classList.add('mobile-nav-is-open');
        overlay.classList.add('is-visible');
        document.body.classList.add('mobile-nav-active');
        mobileToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMobileNav() {
        navPanel.classList.remove('mobile-nav-is-open');
        overlay.classList.remove('is-visible');
        document.body.classList.remove('mobile-nav-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }

    mobileToggle.addEventListener('click', () => {
        const isOpen = navPanel.classList.contains('mobile-nav-is-open');
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    // Close nav when clicking overlay
    overlay.addEventListener('click', closeMobileNav);

    // Close nav when pressing Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navPanel.classList.contains('mobile-nav-is-open')) {
            closeMobileNav();
        }
    });
}

// --- LOAD SAVED LANGUAGE PREFERENCE ---
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
}

// --- MAIN SCRIPT EXECUTION ---
document.addEventListener('DOMContentLoaded', async () => {
    console.log('app.js: DOMContentLoaded event fired.');

    // Load language preference first
    loadLanguagePreference();

    // Load HTML partials first
    await loadHTMLPartials();
    console.log('app.js: loadHTMLPartials has completed.');

    // Initialize components that depend on the loaded HTML from partials
    initializeLucideIcons();    // For any icons in partials or main page
    initializeCtrlKShortcut();  // Search input is in _header.html
    initializeSearch();         // Search elements are in _header.html
    initializeTranslation();    // Translate button is in _header.html
    initializeMobileNav();      // Mobile nav elements are in _header.html, _navigation_shell.html, _page_overlay.html

    // Explicitly initialize navigation AFTER its container is loaded
    if (typeof window.initAppNavigation === 'function') {
        console.log('app.js: Calling window.initAppNavigation...');
        await window.initAppNavigation(); // Call the function exposed by navigation.js
        console.log('app.js: window.initAppNavigation has completed.');
    } else {
        console.error('app.js: initAppNavigation function not found. Navigation will not be built.');
        // Attempt to display error in the navigation panel if it exists but function is missing
        const navPanel = document.querySelector('.site-navigation-panel');
        if (navPanel) {
            navPanel.innerHTML = '<p class="text-red-500 p-2">Error: Navigation script (initAppNavigation) missing.</p>';
        }
    }
});
