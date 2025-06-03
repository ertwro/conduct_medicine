// assets/js/navigation.js

const navDataUrl = 'assets/data/navigation-menu-index.json';

// --- Start of Helper Functions (ensure these are complete from previous versions) ---
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

function generateSafeId(label) {
    return label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function toggleCollapsible(eventOrElement) {
    // 'this' will be the category title div if called by event listener.
    // If called directly, eventOrElement is the title div.
    const titleElement = eventOrElement.currentTarget || eventOrElement;
    const categoryLi = titleElement.closest('.nav-category');
    const subMenu = titleElement.nextElementSibling; // The UL sub-menu
    const icon = titleElement.querySelector('i[data-lucide]');

    if (!categoryLi || !subMenu) return;

    const isExpanded = titleElement.getAttribute('aria-expanded') === 'true';

    categoryLi.classList.toggle('open');
    titleElement.setAttribute('aria-expanded', !isExpanded);
    // subMenu.classList.toggle('hidden'); // Using max-height for animation from CSS

    if (icon) {
        const newIconName = isExpanded ? 'chevron-right' : 'chevron-down';
        // Directly replace data-lucide attribute and re-render with lucide.
        // Create a temporary span to hold the new icon structure for lucide to process
        const tempIconSpan = document.createElement('span');
        tempIconSpan.setAttribute('data-lucide', newIconName);

        // Replace existing icon content
        icon.innerHTML = ''; // Clear current icon
        icon.setAttribute('data-lucide', newIconName); // Update attribute for semantics

        if (typeof lucide !== 'undefined') {
            lucide.createIcons({
                // elements: [icon] // Process the icon element directly if possible
                // Or, if that doesn't work, ensure its parent is processed after attribute change
                // For safety, let's ensure the icon itself is re-processed:
                nodes: [icon.parentNode], // Process parent to pick up new icon attribute
                attrs: {'stroke-width': icon.getAttribute('stroke-width') || 1.5} // Preserve attributes
            });
             // Lucide might create an SVG inside the <i>. If so, this is fine.
             // If lucide replaces the <i>, then the icon variable might be stale.
             // However, usually it populates the element.
        }
    }
}

function addCollapsibleEventListeners() {
    const navPanel = document.querySelector('.site-navigation-panel');
    if (!navPanel) return;

    const categoryTitles = navPanel.querySelectorAll('.nav-category-title');
    categoryTitles.forEach(title => {
        // Remove any existing listener before adding a new one to prevent duplication if called multiple times
        title.removeEventListener('click', toggleCollapsible);
        title.removeEventListener('keydown', handleCollapsibleKeydown);

        title.addEventListener('click', toggleCollapsible);
        title.addEventListener('keydown', handleCollapsibleKeydown);
    });
}

function handleCollapsibleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCollapsible(event.currentTarget); // Pass the element explicitly
    }
}
// --- End of Helper Functions ---


async function buildAndDisplayNavigation() {
    const navPanel = document.querySelector('.site-navigation-panel');

    if (!navPanel) {
        console.warn('Navigation panel element (.site-navigation-panel) not found when attempting to build navigation. Has _navigation_shell.html been loaded by app.js?');
        // Optionally display an error in a general page area if the panel itself is missing
        // document.body.insertAdjacentHTML('afterbegin', '<p class="text-red-500 p-4">Critical Error: Navigation panel container missing.</p>');
        return;
    }

    try {
        // const response = await fetch(navDataUrl);
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
            navHtml += `<h3 id="${section.id || generateSafeId(section.title)}" class="mt-6 first:mt-0">${escapeHTML(section.title)}</h3><ul>`;
            if (Array.isArray(section.items)) {
                section.items.forEach(item => {
                    if (item.subItems && item.subItems.length > 0) {
                        const subMenuId = `submenu-${item.id || generateSafeId(item.label)}`;
                        navHtml += `<li class="nav-category">`;
                        navHtml += `<div class="nav-category-title" role="button" tabindex="0" aria-expanded="false" aria-controls="${subMenuId}">
                                        <span>${escapeHTML(item.label)}</span>
                                        <i data-lucide="chevron-right" class="lucide-chevron-right"></i>
                                    </div>`;
                        navHtml += `<ul id="${subMenuId}">`; // Removed 'hidden' class, CSS handles collapse
                        item.subItems.forEach(subItem => {
                            navHtml += `<li><a id="${subItem.id || ''}" href="${escapeHTML(subItem.url)}">${escapeHTML(subItem.label)}</a></li>`;
                        });
                        navHtml += `</ul>`;
                        navHtml += `</li>`;
                    } else {
                        navHtml += `<li><a id="${item.id || ''}" href="${escapeHTML(item.url)}">${escapeHTML(item.label)}</a></li>`;
                    }
                });
            }
            navHtml += `</ul>`;
        });

        navPanel.innerHTML = navHtml;

        if (typeof lucide !== 'undefined') {
            // Scope Lucide to the navigation panel to re-process icons specifically here
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
