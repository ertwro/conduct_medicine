// assets/js/nav_neurology.js

const navDataUrl = 'assets/data/navigation-menu-neurology.json'; // Path to your specific neurology navigation data

// --- Helper Functions ---
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

function generateSafeId(label) {
    if (typeof label !== 'string' || !label) return `id-${Math.random().toString(36).substr(2, 9)}`;
    return label.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function toggleCollapsible(eventOrElement) {
    const titleElement = eventOrElement.currentTarget || eventOrElement;
    const categoryLi = titleElement.closest('.nav-category');
    const subMenu = titleElement.nextElementSibling;
    const icon = titleElement.querySelector('i[data-lucide]');

    if (!categoryLi || !subMenu) return;

    const isExpanded = titleElement.getAttribute('aria-expanded') === 'true';
    categoryLi.classList.toggle('open');
    titleElement.setAttribute('aria-expanded', String(!isExpanded));

    if (icon) {
        const newIconName = isExpanded ? 'chevron-right' : 'chevron-down';
        icon.setAttribute('data-lucide', newIconName);
        if (typeof lucide !== 'undefined' && lucide.icons[newIconName]) {
            icon.innerHTML = ''; // Clear previous icon
            lucide.createIcons({ elements: [icon] }); // Recreate the icon
        }
    }
}

function addCollapsibleEventListeners(navPanel) {
    if (!navPanel) return;
    const categoryTitles = navPanel.querySelectorAll('.nav-category-title');
    categoryTitles.forEach(title => {
        title.removeEventListener('click', toggleCollapsible); // Prevent duplicates
        title.removeEventListener('keydown', handleCollapsibleKeydown);
        title.addEventListener('click', toggleCollapsible);
        title.addEventListener('keydown', handleCollapsibleKeydown);
    });
}

function handleCollapsibleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCollapsible(event.currentTarget);
    }
}
// --- End of Helper Functions ---

async function buildAndDisplayNavigation() {
    const navPanel = document.querySelector('.site-navigation-panel');
    const lang = window.currentLanguage || 'en'; // Get current language from global scope (app.js)

    if (!navPanel) {
        console.warn('Neurology Navigation: Panel element (.site-navigation-panel) not found.');
        return;
    }

    try {
        const response = await fetch(navDataUrl, { cache: 'no-cache' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} when fetching ${navDataUrl}`);
        }
        const navData = await response.json(); // This now contains 'ui_strings' and 'sections'

        // Get UI strings for the current language from the fetched navData
        const uiStrings = (navData.ui_strings && navData.ui_strings[lang]) || navData.ui_strings?.en || {};


        if (!Array.isArray(navData.sections) || navData.sections.length === 0) {
            console.warn('Neurology Navigation: Data is empty or not in the expected format.');
            navPanel.innerHTML = `<p class="text-gray-400 p-2">${escapeHTML(uiStrings.navUnavailableMsg || 'Navigation menu is currently unavailable.')}</p>`;
            return;
        }

        let navHtml = '';
        navData.sections.forEach(section => {
            let titleTextHtml = '';
            let sectionTitleForId = section.id;

            if (section.title) {
                const sectionTitleObj = section.title; // e.g., {"en": "Neurology", "es": "Neurología"}
                const sectionTitleText = sectionTitleObj[lang] || sectionTitleObj.en || ''; // Fallback to English
                
                if (!sectionTitleForId && sectionTitleObj.en) {
                    sectionTitleForId = generateSafeId(sectionTitleObj.en);
                }

                // Special handling for "Neurology" title with Charcot image
                if (sectionTitleObj.en === "Neurology") { // Compare against English title from its own JSON
                    const charcotImageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jean-Martin_Charcot.jpg";
                    const charcotWikipediaUrl = "https://en.wikipedia.org/wiki/Jean-Martin_Charcot";
                    
                    titleTextHtml = `
                        <span>${escapeHTML(sectionTitleText)}</span>
                        <a href="${charcotWikipediaUrl}" target="_blank" rel="noopener noreferrer" title="${escapeHTML(uiStrings.charcotImageTitle || 'Learn more')}" class="inline-block ml-2">
                            <img src="${charcotImageUrl}" alt="${escapeHTML(uiStrings.charcotImageAlt || 'Jean-Martin Charcot')}" class="w-8 h-8 rounded-full object-cover border border-gray-400 hover:border-sky-500 transition-all duration-200 ease-in-out align-middle">
                        </a>
                    `;
                } else {
                    titleTextHtml = escapeHTML(sectionTitleText);
                }
                navHtml += `<h3 id="${sectionTitleForId || generateSafeId('section-title')}" class="mt-6 first:mt-0 flex items-center">${titleTextHtml}</h3>`;
            }

            if (Array.isArray(section.items)) {
                navHtml += `<ul>`;
                section.items.forEach(item => {
                    const itemLabelObj = item.label;
                    const itemLabelText = itemLabelObj[lang] || itemLabelObj.en || '';
                    
                    let itemId = item.id;
                    if (!itemId && itemLabelObj.en) {
                        itemId = generateSafeId(itemLabelObj.en);
                    } else if (!itemId) {
                        itemId = generateSafeId('nav-item');
                    }
                    
                    if (item.subItems && item.subItems.length > 0) {
                        const subMenuId = `submenu-${itemId}`;
                        navHtml += `<li class="nav-category">`;
                        navHtml += `<div class="nav-category-title" role="button" tabindex="0" aria-expanded="false" aria-controls="${subMenuId}">
                                        <span>${escapeHTML(itemLabelText)}</span>
                                        <i data-lucide="chevron-right" class="lucide-chevron-right"></i>
                                    </div>`;
                        navHtml += `<ul id="${subMenuId}">`;
                        item.subItems.forEach(subItem => {
                            const subItemLabelObj = subItem.label;
                            const subItemLabelText = subItemLabelObj[lang] || subItemLabelObj.en || '';
                            
                            let subItemId = subItem.id;
                            if(!subItemId && subItemLabelObj.en){
                                subItemId = generateSafeId(subItemLabelObj.en);
                            } else if (!subItemId) {
                                subItemId = generateSafeId('nav-subitem');
                            }
                            navHtml += `<li><a id="${subItemId}" href="${escapeHTML(subItem.url)}">${escapeHTML(subItemLabelText)}</a></li>`;
                        });
                        navHtml += `</ul>`;
                        navHtml += `</li>`;
                    } else {
                        navHtml += `<li><a id="${itemId}" href="${escapeHTML(item.url)}">${escapeHTML(itemLabelText)}</a></li>`;
                    }
                });
                navHtml += `</ul>`;
            }
        });

        // Append the legend HTML, using translations from this script's own uiStrings
        const legendHtmlString = `
        <div class="nav-legend">
          <h4 class="text-sm font-semibold text-gray-200 mb-2">${escapeHTML(uiStrings.legendTitle || "Symbol Legend:")}</h4>
          <div class="legend-section mb-2">
            <p class="text-xs text-gray-400 mb-1"><strong>FC</strong> (${escapeHTML(uiStrings.legendFC || "Frequency of Consultation")}):</p>
            <ul class="text-xs text-gray-400">
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">F█</span> ${escapeHTML(uiStrings.legendHigh || "High")}</li>
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">F▄</span> ${escapeHTML(uiStrings.legendMedium || "Medium")}</li>
              <li class="flex items-center"><span class="symbol-legend-item">F▂</span> ${escapeHTML(uiStrings.legendLow || "Low")}</li>
            </ul>
          </div>
          <div class="legend-section">
            <p class="text-xs text-gray-400 mb-1"><strong>MA</strong> (${escapeHTML(uiStrings.legendMA || "Mortality Associated")}):</p>
            <ul class="text-xs text-gray-400">
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">M█</span> ${escapeHTML(uiStrings.legendHigh || "High")}</li>
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">M▄</span> ${escapeHTML(uiStrings.legendMedium || "Medium")}</li>
              <li class="flex items-center"><span class="symbol-legend-item">M▂</span> ${escapeHTML(uiStrings.legendLow || "Low")}</li>
            </ul>
          </div>
          <p class="text-xs text-gray-500 italic mt-2">${escapeHTML(uiStrings.legendIndicators || "(Indicators appear if data is available)")}</p>
        </div>
        `;
        navHtml += legendHtmlString;

        navPanel.innerHTML = navHtml;

        if (typeof lucide !== 'undefined') {
            lucide.createIcons({ context: navPanel });
        }
        addCollapsibleEventListeners(navPanel);

    } catch (error) {
        console.error('Neurology Navigation: Failed to build navigation:', error);
        const langForError = window.currentLanguage || 'en';
        // Try to get error message from fetched ui_strings if available, else default
        const errorMsg = (navData?.ui_strings?.[langForError]?.navErrorMsg) || 
                         (navData?.ui_strings?.en?.navErrorMsg) || 
                         'Error loading navigation menu.';
        if (navPanel) {
            navPanel.innerHTML = `<p class="text-red-500 p-2">${escapeHTML(errorMsg)}</p>`;
        }
    }
}

// Expose the main function to be called by app.js
// If this is the only navigation script, window.initAppNavigation is fine.
// If you have multiple (e.g., nav_cardiology.js), you might name them
// window.initNeurologyNavigation, window.initCardiologyNavigation, etc.,
// and app.js would need to know which one to call based on the page.
window.initAppNavigation = buildAndDisplayNavigation;
