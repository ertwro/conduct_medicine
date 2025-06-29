// src/utils/component-loader.js - Load HTML partials and components
export class ComponentLoader {
  constructor() {
    this.cache = new Map();
    this.loadingPromises = new Map();
  }

  async loadPartial(url, useCache = true) {
    // Return cached version if available
    if (useCache && this.cache.has(url)) {
      return this.cache.get(url);
    }

    // Return existing loading promise if in progress
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url);
    }

    // Start loading
    const loadingPromise = this.fetchPartial(url);
    this.loadingPromises.set(url, loadingPromise);

    try {
      const html = await loadingPromise;
      
      // Cache the result
      if (useCache) {
        this.cache.set(url, html);
      }
      
      this.loadingPromises.delete(url);
      return html;
      
    } catch (error) {
      this.loadingPromises.delete(url);
      throw error;
    }
  }

  async fetchPartial(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const html = await response.text();
      
      if (!html.trim()) {
        console.warn(`Partial ${url} is empty`);
        return '';
      }
      
      return html;
      
    } catch (error) {
      console.error(`Failed to load partial ${url}:`, error);
      
      // Return fallback content for critical components
      if (url.includes('_header')) {
        return this.getHeaderFallback();
      } else if (url.includes('_navigation_shell')) {
        return this.getNavigationFallback();
      } else if (url.includes('_footer')) {
        return this.getFooterFallback();
      }
      
      return `<div class="error-placeholder">Failed to load ${url}</div>`;
    }
  }

  getHeaderFallback() {
    return `
      <header class="site-header">
        <div class="header-content">
          <h1 class="site-title">Conduct Based Medicine</h1>
          <div class="header-controls">
            <input type="text" id="search-input" placeholder="Search..." class="search-input">
            <button id="translate-button" class="translate-button">ES</button>
            <button id="mobile-nav-toggle" class="mobile-nav-toggle">☰</button>
          </div>
        </div>
        <div id="search-results-preview" class="search-results-preview"></div>
      </header>
    `;
  }

  getNavigationFallback() {
    return `
      <aside class="site-navigation-panel">
        <nav class="navigation-content">
          <p class="text-gray-400 p-4">Navigation loading...</p>
        </nav>
      </aside>
    `;
  }

  getFooterFallback() {
    return `
      <footer class="site-footer">
        <p>&copy; ${new Date().getFullYear()} JP Silva. All rights reserved.</p>
      </footer>
    `;
  }

  // Load and parse JSON data
  async loadJSON(url, useCache = true) {
    if (useCache && this.cache.has(url)) {
      return this.cache.get(url);
    }

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (useCache) {
        this.cache.set(url, data);
      }
      
      return data;
      
    } catch (error) {
      console.error(`Failed to load JSON ${url}:`, error);
      throw error;
    }
  }

  // Load markdown content
  async loadMarkdown(url, useCache = true) {
    if (useCache && this.cache.has(url)) {
      return this.cache.get(url);
    }

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const markdown = await response.text();
      
      if (useCache) {
        this.cache.set(url, markdown);
      }
      
      return markdown;
      
    } catch (error) {
      console.error(`Failed to load Markdown ${url}:`, error);
      throw error;
    }
  }

  // Clear cache for specific URL or all
  clearCache(url = null) {
    if (url) {
      this.cache.delete(url);
    } else {
      this.cache.clear();
    }
  }

  // Get cache statistics
  getCacheStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}