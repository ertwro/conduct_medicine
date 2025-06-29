// assets/js/reveal-loader.js

// Global flag to prevent multiple simultaneous initializations
let isRevealInitializing = false;

// Track currently loaded presentation to avoid unnecessary reloads
let currentPresentationUrl = null;
let isRevealReady = false;

// Utility function for escaping HTML
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"'\/]/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}

async function loadAndInitializeReveal() {
    // Prevent multiple simultaneous initializations
    if (isRevealInitializing) {
        console.log('🎬 Reveal.js initialization already in progress, skipping...');
        return;
    }
    
    isRevealInitializing = true;
    
    try {
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
            return;
        }

        const GITHUB_DEMO_URL = 'https://raw.githubusercontent.com/hakimel/reveal.js/master/demo.html';
        const finalPresentationURL = presentationSrc === "presentations/demo-from-github.html" ? GITHUB_DEMO_URL : presentationSrc;
        
        console.log(`🎬 Requested presentation: ${finalPresentationURL}`);
        
        // Check if the same presentation is already loaded and Reveal.js is ready
        if (currentPresentationUrl === finalPresentationURL && isRevealReady && typeof Reveal !== 'undefined' && Reveal.isReady()) {
            console.log('✅ Same presentation already loaded and ready, skipping reload');
            
            // Just hide loading indicator and refresh layout
            if(loadingIndicator) {
                loadingIndicator.style.display = 'none';
                console.log('✅ Loading indicator hidden (no reload needed)');
            }
            
            // Refresh layout to ensure proper display
            setTimeout(() => {
                Reveal.layout();
                Reveal.sync();
                console.log('✅ Layout refreshed for existing presentation');
            }, 100);
            
            return;
        }
        
        console.log(`🎬 Loading new presentation from: ${finalPresentationURL}`);
        
        try {
            if (finalPresentationURL.endsWith('.md')) {
                console.log('🎬 Loading Markdown presentation...');
                const response = await fetch(finalPresentationURL);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const markdownContent = await response.text();
                slidesContainer.innerHTML = `<section data-markdown><textarea data-template>${escapeHTML(markdownContent)}</textarea></section>`;
                console.log('✅ Markdown content loaded successfully');
            } else if (finalPresentationURL.endsWith('.html')) {
                console.log('🎬 Loading HTML presentation...');
                const response = await fetch(finalPresentationURL);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const htmlContent = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlContent, 'text/html');
                const demoSlidesContent = doc.querySelector('.slides');

                if (demoSlidesContent && demoSlidesContent.innerHTML.trim() !== '') {
                     slidesContainer.innerHTML = demoSlidesContent.innerHTML;
                     console.log('✅ HTML slides content loaded successfully');
                } else if (doc.body && doc.body.innerHTML.trim() !== '') {
                    slidesContainer.innerHTML = doc.body.innerHTML;
                    console.log('✅ HTML body content loaded successfully');
                } else {
                     throw new Error('Could not find appropriate slide content in fetched HTML.');
                }
            } else {
                throw new Error('Unsupported presentation file type. Use .md or .html');
            }

            console.log('🎬 Hiding loading indicator...');
            if(loadingIndicator) {
                loadingIndicator.style.display = 'none';
                console.log('✅ Loading indicator hidden');
            }
            
            // Wait for DOM to update before initializing Reveal.js
            console.log('🎬 Preparing to initialize Reveal.js...');
            await initializeRevealWithContent();
            
            // Update tracking variables after successful load
            currentPresentationUrl = finalPresentationURL;
            console.log(`✅ Presentation tracking updated: ${currentPresentationUrl}`);

        } catch (error) {
            console.error('❌ Error fetching or parsing presentation slides:', error);
            if (slidesContainer) {
                slidesContainer.innerHTML = `<section><h2>Failed to load presentation</h2><p>Could not fetch content from ${escapeHTML(finalPresentationURL)}.</p><p><small>${escapeHTML(error.message)}</small></p></section>`;
                console.log('🎬 Error content set in slides container');
            }
            
            console.log('🎬 Hiding loading indicator after error...');
            if(loadingIndicator) {
                loadingIndicator.style.display = 'none';
                console.log('✅ Loading indicator hidden after error');
            }
            
            // Still initialize Reveal.js even with error content
            console.log('🎬 Initializing Reveal.js with error content...');
            await initializeRevealWithContent();
        }

    async function initializeRevealWithContent() {
        if (typeof Reveal === 'undefined') {
            console.error("Reveal.js library is not loaded.");
            return;
        }

        console.log('🎬 Initializing Reveal.js...');

        // Complete cleanup of any existing Reveal.js instance
        try {
            if (typeof Reveal.isReady === 'function' && Reveal.isReady()) {
                console.log('🎬 Destroying existing Reveal.js instance...');
                Reveal.destroy();
            }
            
            // Reset tracking state
            isRevealReady = false;
            console.log('🎬 Reveal.js ready state reset');
            
            // Force cleanup of any Reveal.js DOM modifications
            const revealContainer = document.querySelector('.reveal');
            if (revealContainer) {
                // Remove any Reveal.js added classes and styles
                revealContainer.className = 'reveal';
                revealContainer.removeAttribute('style');
                
                // Clean up any Reveal.js event listeners or state
                const revealElements = revealContainer.querySelectorAll('[data-reveal-initialized]');
                revealElements.forEach(el => el.removeAttribute('data-reveal-initialized'));
            }
            
            console.log('✅ Reveal.js cleanup completed');
        } catch (error) {
            console.warn('⚠️ Error during Reveal.js cleanup:', error);
        }

        // Wait for DOM to be fully updated after cleanup
        await new Promise(resolve => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(resolve);
                });
            });
        });

        const plugins = [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealZoom ];
        
        console.log('🎬 Starting Reveal.js initialization...');
        
        Reveal.initialize({
            embedded: true,
            hash: false, // Disabled to prevent conflicts with the SPA router
            controls: true,
            progress: true,
            center: true,
            slideNumber: 'c/t',
            width: 960,
            height: 700,
            margin: 0.04,
            minScale: 0.1,
            maxScale: 1.5,
            plugins: plugins
        });

        // Enhanced layout refresh with multiple attempts
        let layoutAttempts = 0;
        const maxAttempts = 3;
        
        const refreshLayout = () => {
            layoutAttempts++;
            console.log(`🎬 Layout refresh attempt ${layoutAttempts}/${maxAttempts}`);
            
            if (Reveal.isReady()) {
                Reveal.layout();
                Reveal.sync();
                console.log('✅ Reveal.js layout refreshed successfully');
            } else if (layoutAttempts < maxAttempts) {
                setTimeout(refreshLayout, 200);
            } else {
                console.warn('⚠️ Reveal.js layout refresh failed after maximum attempts');
            }
        };

        // Start layout refresh after initialization
        setTimeout(refreshLayout, 300);
        
        // Additional refresh when Reveal.js is fully ready
        Reveal.on('ready', () => {
            console.log('✅ Reveal.js ready event fired');
            
            // Update ready state
            isRevealReady = true;
            console.log('✅ Reveal.js ready state updated');
            
            // Final check to ensure loading indicator is hidden
            const finalLoadingCheck = document.querySelector('#loading-indicator');
            if (finalLoadingCheck && finalLoadingCheck.style.display !== 'none') {
                finalLoadingCheck.style.display = 'none';
                console.log('✅ Loading indicator finally hidden on Reveal ready');
            }
            
            setTimeout(() => {
                Reveal.layout();
                Reveal.sync();
                console.log('✅ Final layout refresh completed');
            }, 100);
        });
    }
    
    } finally {
        // Reset the initialization flag
        isRevealInitializing = false;
        console.log('🎬 Reveal.js initialization completed, flag reset');
    }
}

// Expose the function to the global scope so the main SPA can call it
window.loadAndInitializeReveal = loadAndInitializeReveal;
