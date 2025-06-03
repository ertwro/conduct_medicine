// assets/js/nav_neurology.js (or your specific path)

const navDataUrl = 'assets/data/navigation-menu-neurology.json'; // Ensure this path is correct

// --- Start of Helper Functions ---
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

function generateSafeId(label) {
    // Simplified and more robust ID generator
    if (typeof label !== 'string') return 'invalid-id';
    return label.toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '') // Remove all non-word chars except hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single
        .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
}


function toggleCollapsible(eventOrElement) {
    const titleElement = eventOrElement.currentTarget || eventOrElement;
    const categoryLi = titleElement.closest('.nav-category');
    const subMenu = titleElement.nextElementSibling; // The UL sub-menu
    const icon = titleElement.querySelector('i[data-lucide]');

    if (!categoryLi || !subMenu) return;

    const isExpanded = titleElement.getAttribute('aria-expanded') === 'true';

    categoryLi.classList.toggle('open');
    titleElement.setAttribute('aria-expanded', !isExpanded);

    if (icon) {
        const newIconName = isExpanded ? 'chevron-right' : 'chevron-down';
        icon.innerHTML = '';
        icon.setAttribute('data-lucide', newIconName);

        if (typeof lucide !== 'undefined') {
            lucide.createIcons({
                nodes: [icon.parentNode],
                attrs: {'stroke-width': icon.getAttribute('stroke-width') || 1.5}
            });
        }
    }
}

function addCollapsibleEventListeners() {
    const navPanel = document.querySelector('.site-navigation-panel');
    if (!navPanel) return;

    const categoryTitles = navPanel.querySelectorAll('.nav-category-title');
    categoryTitles.forEach(title => {
        title.removeEventListener('click', toggleCollapsible);
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

    if (!navPanel) {
        console.warn('Navigation panel element (.site-navigation-panel) not found when attempting to build navigation.');
        return;
    }

    try {
        const response = await fetch(navDataUrl, { cache: 'no-cache' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} when fetching ${navDataUrl}`);
        }
        const navStructure = await response.json();

        if (!Array.isArray(navStructure) || navStructure.length === 0) {
            console.warn('Navigation data is empty or not in the expected format.');
            navPanel.innerHTML = '<p class="text-gray-400 p-2">Navigation menu is currently unavailable.</p>';
            return;
        }

        let navHtml = '';
        navStructure.forEach(section => {
            let titleTextHtml = '';

            if (section.title) {
                if (section.title === "Neurology") {
                    const charcotImageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jean-Martin_Charcot.jpg";
                    const charcotWikipediaUrl = "https://en.wikipedia.org/wiki/Jean-Martin_Charcot";

                    titleTextHtml = `
                        <span>${escapeHTML(section.title)}</span>
                        <a href="${charcotWikipediaUrl}" target="_blank" rel="noopener noreferrer" title="Learn more about Jean-Martin Charcot" class="inline-block ml-2">
                            <img src="${charcotImageUrl}" alt="Jean-Martin Charcot" class="w-8 h-8 rounded-full object-cover border border-gray-400 hover:border-sky-500 transition-all duration-200 ease-in-out align-middle">
                        </a>
                    `;
                } else {
                    titleTextHtml = escapeHTML(section.title);
                }
                 navHtml += `<h3 id="${section.id || generateSafeId(section.title)}" class="mt-6 first:mt-0 flex items-center">${titleTextHtml}</h3>`;
            }


            if (Array.isArray(section.items)) {
                navHtml += `<ul>`;
                section.items.forEach(item => {
                    if (item.subItems && item.subItems.length > 0) {
                        const subMenuId = `submenu-${item.id || generateSafeId(item.label)}`;
                        navHtml += `<li class="nav-category">`;
                        navHtml += `<div class="nav-category-title" role="button" tabindex="0" aria-expanded="false" aria-controls="${subMenuId}">
                                        <span>${escapeHTML(item.label)}</span>
                                        <i data-lucide="chevron-right" class="lucide-chevron-right"></i>
                                    </div>`;
                        navHtml += `<ul id="${subMenuId}">`;
                        item.subItems.forEach(subItem => {
                            navHtml += `<li><a id="${subItem.id || generateSafeId(subItem.label)}" href="${escapeHTML(subItem.url)}">${escapeHTML(subItem.label)}</a></li>`;
                        });
                        navHtml += `</ul>`;
                        navHtml += `</li>`;
                    } else {
                        navHtml += `<li><a id="${item.id || generateSafeId(item.label)}" href="${escapeHTML(item.url)}">${escapeHTML(item.label)}</a></li>`;
                    }
                });
                navHtml += `</ul>`;
            }
        });

        // Append the updated legend HTML
        const legendHtmlString = `
        <div class="nav-legend">
          <h4 class="text-sm font-semibold text-gray-200 mb-2">Symbol Legend:</h4>
          <div class="legend-section mb-2">
            <p class="text-xs text-gray-400 mb-1"><strong>FC</strong> (Frequency of Consultation):</p>
            <ul class="text-xs text-gray-400">
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">F█</span> High</li>
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">F▄</span> Medium</li>
              <li class="flex items-center"><span class="symbol-legend-item">F▂</span> Low</li>
            </ul>
          </div>
          <div class="legend-section">
            <p class="text-xs text-gray-400 mb-1"><strong>MA</strong> (Mortality Associated):</p>
            <ul class="text-xs text-gray-400">
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">M█</span> High</li>
              <li class="flex items-center mb-0.5"><span class="symbol-legend-item">M▄</span> Medium</li>
              <li class="flex items-center"><span class="symbol-legend-item">M▂</span> Low</li>
            </ul>
          </div>
          <p class="text-xs text-gray-500 italic mt-2">(Indicators like (F█ M▂) appear if data is available)</p>
        </div>
        `;
        navHtml += legendHtmlString;

        navPanel.innerHTML = navHtml;

        if (typeof lucide !== 'undefined') {
            lucide.createIcons({ context: navPanel });
        }
        addCollapsibleEventListeners();

    } catch (error) {
        console.error('Failed to build navigation:', error);
        if (navPanel) {
            navPanel.innerHTML = '<p class="text-red-500 p-2">Error loading navigation menu. See console for details.</p>';
        }
    }
}

// Expose the main function to be called by app.js
window.initAppNavigation = buildAndDisplayNavigation;
