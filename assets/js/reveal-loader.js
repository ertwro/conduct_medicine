// assets/js/reveal-loader.js

// Utility function for escaping HTML
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

async function loadAndInitializeReveal() {
    const presentationWrapper = document.querySelector('.presentation-area-wrapper');
    if (!presentationWrapper) {
        // No presentation area on this page
        return;
    }

    const slidesContainer = presentationWrapper.querySelector('.reveal .slides');
    const loadingIndicator = presentationWrapper.querySelector('#loading-indicator');
    const presentationSrc = presentationWrapper.getAttribute('data-presentation-src');

    if (!slidesContainer || !loadingIndicator) {
        console.warn("Reveal.js slides container or loading indicator not found within .presentation-area-wrapper.");
        return;
    }

    if (!presentationSrc) {
        console.warn("No 'data-presentation-src' attribute found on '.presentation-area-wrapper'. Cannot load presentation.");
        slidesContainer.innerHTML = '<section><h2>No presentation source specified.</h2><p>Add `data-presentation-src` to the `presentation-area-wrapper` div.</p></section>';
        if(loadingIndicator) loadingIndicator.style.display = 'none';
        // Initialize Reveal with this placeholder content if desired, or just leave it.
        // Reveal.initialize(...)
        return;
    }

    // Default Reveal.js URL if an external one isn't specified
    const GITHUB_DEMO_URL = 'https://raw.githubusercontent.com/hakimel/reveal.js/master/demo.html';
    const finalPresentationURL = presentationSrc === "presentations/demo-from-github.html" ? GITHUB_DEMO_URL : presentationSrc;


    try {
        if (finalPresentationURL.endsWith('.md')) { // Handle Markdown files
            const response = await fetch(finalPresentationURL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} when fetching Markdown presentation.`);
            }
            const markdownContent = await response.text();
            // Ensure the section has the necessary data attributes for Reveal Markdown
            slidesContainer.innerHTML = `<section data-markdown><textarea data-template>${escapeHTML(markdownContent)}</textarea></section>`;
        } else if (finalPresentationURL.endsWith('.html')) { // Handle HTML snippet files or full HTML
            const response = await fetch(finalPresentationURL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} when fetching HTML presentation.`);
            }
            const htmlContent = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');

            // Try to find .slides content if it's a full Reveal.js demo.html structure
            // Otherwise, assume the fetched content IS the slides themselves.
            const demoSlidesContent = doc.querySelector('.slides');
            if (demoSlidesContent && demoSlidesContent.innerHTML.trim() !== '') {
                 slidesContainer.innerHTML = demoSlidesContent.innerHTML;
            } else if (doc.body && doc.body.innerHTML.trim() !== '') {
                // If no .slides but body has content, assume it's a set of <section> elements
                slidesContainer.innerHTML = doc.body.innerHTML;
            } else {
                 throw new Error('Could not find appropriate slide content in fetched HTML.');
            }
        } else {
            throw new Error('Unsupported presentation file type. Use .md or .html');
        }

        if(loadingIndicator) loadingIndicator.style.display = 'none';

    } catch (error) {
        console.error('Error fetching or parsing presentation slides:', error);
        if (slidesContainer) {
            slidesContainer.innerHTML = `<section><h2>Failed to load presentation</h2><p>Could not fetch or parse content from ${escapeHTML(finalPresentationURL)}.</p><p><small>${escapeHTML(error.message)}</small></p></section>`;
        }
        if(loadingIndicator) loadingIndicator.style.display = 'none';
    }

    // Initialize Reveal.js
    if (typeof Reveal !== 'undefined') {
        Reveal.initialize({
            embedded: true,
            hash: true,
            controls: true,
            progress: true,
            center: true,
            slideNumber: 'c/t',
            width: 960,
            height: 700,
            margin: 0.04,
            minScale: 0.1,
            maxScale: 1.5,
            plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealZoom ],
            dependencies: [] // KaTeX is loaded via plugin now
        });
    } else {
        console.error("Reveal.js library is not loaded. Presentation will not work.");
    }
}

// Conditionally load Reveal.js presentation if its wrapper and data-src exists
if (document.querySelector('.presentation-area-wrapper[data-presentation-src]')) {
    // Ensure this runs after DOM is fully parsed, especially if scripts are in <head>
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAndInitializeReveal);
    } else {
        loadAndInitializeReveal();
    }
}
