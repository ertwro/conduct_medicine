// src/utils/router.js - Simple SPA router
export class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
  }

  addRoute(pattern, handler) {
    this.routes.set(pattern, {
      pattern,
      handler,
      regex: this.patternToRegex(pattern)
    });
  }

  patternToRegex(pattern) {
    // Convert route patterns like '/specialty/:specialty/:page' to regex
    const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const withParams = escaped.replace(/:(\w+)/g, '(?<$1>[^/]+)');
    return new RegExp(`^${withParams}$`);
  }

  navigate(path) {
    // Ensure path always starts with /
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    
    // Build full URL with base path for GitHub Pages
    const basePath = '/conduct_medicine';
    // Remove leading slash from path before adding base path to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const fullPath = window.location.hostname === 'ertwro.github.io' ? 
      basePath + (cleanPath ? '/' + cleanPath : '') : path;
    
    // Update browser history with the full path
    if (window.location.pathname + window.location.search !== fullPath) {
      window.history.pushState(null, '', fullPath);
    }
    this.handleRoute(path);
  }

  async handleRoute(path = window.location.pathname) {
    // Ensure path always starts with /
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    
    // Strip base path for GitHub Pages deployment if present in URL
    const basePath = '/conduct_medicine';
    
    // Strip base path in both dev and production if it's present in the URL
    if (path.startsWith(basePath)) {
      path = path.slice(basePath.length) || '/';
    }
    
    console.log(`🔗 Routing to: ${path}`);
    
    // Find matching route
    for (const [pattern, route] of this.routes) {
      const match = path.match(route.regex);
      if (match) {
        this.currentRoute = pattern;
        
        // Extract parameters
        const params = match.groups || {};
        
        // Call route handler
        try {
          await route.handler(params);
          this.updateActiveNavigation(path);
          return;
        } catch (error) {
          console.error(`Error handling route ${pattern}:`, error);
        }
      }
    }

    // No route matched - handle 404
    console.warn(`No route found for: ${path}`);
    this.handle404();
  }

  

  updateActiveNavigation(path) {
    // Update active navigation states
    document.querySelectorAll('.nav-link-active, .nav-category-active').forEach(el => {
      el.classList.remove('nav-link-active', 'nav-category-active');
    });

    // Find and highlight current navigation item
    const navLinks = document.querySelectorAll('a[href]');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path.startsWith(href) && href !== '/')) {
        link.classList.add('nav-link-active');
        
        // Also highlight parent categories
        const parentCategory = link.closest('.nav-category');
        if (parentCategory) {
          parentCategory.classList.add('nav-category-active');
        }
      }
    });
  }

  handle404() {
    const mainContent = document.querySelector('.actual-main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4 text-gray-100">Page Not Found</h2>
        <p class="mb-4">The requested page could not be found.</p>
        <a href="/" class="text-sky-400 hover:text-sky-300">← Return to Home</a>
      `;
    }
  }

  getCurrentRoute() {
    return this.currentRoute;
  }

  // Utility method to build URLs with base path for GitHub Pages
  buildUrl(path) {
    const base = import.meta.env.BASE_URL || '/';
    return base + path.replace(/^\//, '');
  }
}