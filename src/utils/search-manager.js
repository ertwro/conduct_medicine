// src/utils/search-manager.js - Enhanced search functionality
export class SearchManager {
  constructor() {
    this.searchData = [];
    this.searchIndex = new Map();
    this.searchTimeout = null;
    this.selectedIndex = -1;
    this.minSearchLength = 2;
    this.maxResults = 10;
  }

  getBasePath() {
    // Use Vite's BASE_URL if available (set in vite.config.js)
    if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
      return import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
    }
    
    // Fallback: detect base path from current location
    const pathname = window.location.pathname;
    if (pathname.includes('/conduct_medicine/')) {
      return '/conduct_medicine';
    }
    
    // Default for development
    return '';
  }

  async init() {
    // Load search data
    await this.loadSearchData();
    
    // Build search index
    this.buildSearchIndex();
    
    // Initialize search UI
    this.initializeSearchUI();
  }

  async loadSearchData() {
    try {
      console.log('🔍 Loading search data...');
      
      // Check if sitePages is already loaded globally
      if (window.sitePages && Array.isArray(window.sitePages)) {
        console.log('✅ Using pre-loaded search data from window.sitePages');
        this.searchData = window.sitePages;
        return;
      }
      
      // Load existing search data script with correct base path for dev/prod
      const basePath = this.getBasePath();
      console.log(`🔍 Fetching search data from: ${basePath}/assets/js/search-data.js`);
      const response = await fetch(`${basePath}/assets/js/search-data.js`);
      if (!response.ok) {
        throw new Error(`Failed to fetch search data: ${response.status}`);
      }
      
      const searchScript = await response.text();
      
      // Extract sitePages array from the script using regex
      const match = searchScript.match(/const sitePages = (\[[\s\S]*?\]);/);
      if (match) {
        // Clean up the extracted JSON (remove comments and fix formatting)
        let jsonStr = match[1];
        // Remove JavaScript comments
        jsonStr = jsonStr.replace(/\/\/[^\n\r]*/g, '');
        
        try {
          this.searchData = JSON.parse(jsonStr);
        } catch (parseError) {
          console.warn('Could not parse extracted JSON, trying eval approach');
          // Fallback: use eval in safe context
          try {
            this.searchData = eval(match[1]);
          } catch (evalError) {
            throw new Error('Could not parse search data');
          }
        }
      } else {
        throw new Error('Could not find sitePages array in search-data.js');
      }
      
      // Make it globally available for compatibility
      window.sitePages = this.searchData;
      console.log(`✅ Search data loaded successfully: ${this.searchData.length} items`);
      
    } catch (error) {
      console.error('Failed to load search data:', error);
      this.searchData = [];
      // Create minimal fallback data
      window.sitePages = this.searchData;
    }
  }

  buildSearchIndex() {
    // Create inverted index for faster searching
    this.searchIndex.clear();
    
    this.searchData.forEach((page, pageIndex) => {
      const searchText = [
        page.title,
        page.description,
        page.keywords
      ].join(' ').toLowerCase();
      
      // Split into words and build index
      const words = searchText.match(/\b\w+\b/g) || [];
      
      words.forEach(word => {
        if (word.length >= 2) { // Only index words with 2+ characters
          if (!this.searchIndex.has(word)) {
            this.searchIndex.set(word, new Set());
          }
          this.searchIndex.get(word).add(pageIndex);
        }
      });
    });
  }

  initializeSearchUI() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results-preview');
    
    console.log('🔍 Initializing search UI...', {
      searchInput: !!searchInput,
      searchResults: !!searchResults
    });
    
    if (!searchInput || !searchResults) {
      console.warn('⚠️ Search elements not found:', {
        searchInput: !!searchInput,
        searchResults: !!searchResults
      });
      return;
    }
    
    console.log('✅ Search UI elements found, attaching event listeners');

    // Input event handler
    searchInput.addEventListener('input', (event) => {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.performSearch(event.target.value);
      }, 200);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (event) => {
      this.handleKeyDown(event, searchResults);
    });

    // Focus handler
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim()) {
        this.performSearch(searchInput.value);
      }
    });

    // Click outside to close
    document.addEventListener('click', (event) => {
      if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        this.hideResults();
      }
    });
  }

  performSearch(query) {
    const searchResults = document.getElementById('search-results-preview');
    if (!searchResults) return;

    // Hide results for empty or short queries
    if (!query.trim() || query.length < this.minSearchLength) {
      this.hideResults();
      return;
    }

    // Perform the search
    const results = this.search(query);
    this.displayResults(results, query);
  }

  search(query) {
    const normalizedQuery = query.toLowerCase().trim();
    const queryWords = normalizedQuery.match(/\b\w+\b/g) || [];
    
    if (queryWords.length === 0) return [];

    // Find pages that contain any of the query words
    const candidatePages = new Set();
    
    queryWords.forEach(word => {
      // Exact match
      if (this.searchIndex.has(word)) {
        this.searchIndex.get(word).forEach(pageIndex => {
          candidatePages.add(pageIndex);
        });
      }
      
      // Partial matches (for words that start with the query word)
      if (word.length >= 3) {
        this.searchIndex.forEach((pageIndices, indexWord) => {
          if (indexWord.startsWith(word)) {
            pageIndices.forEach(pageIndex => {
              candidatePages.add(pageIndex);
            });
          }
        });
      }
    });

    // Score and rank results
    const results = Array.from(candidatePages)
      .map(pageIndex => {
        const page = this.searchData[pageIndex];
        const score = this.calculateRelevanceScore(page, normalizedQuery, queryWords);
        return { ...page, score, index: pageIndex };
      })
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, this.maxResults);

    return results;
  }

  calculateRelevanceScore(page, query, queryWords) {
    let score = 0;
    const searchText = [page.title, page.description, page.keywords].join(' ').toLowerCase();
    
    // Exact phrase match (highest score)
    if (searchText.includes(query)) {
      score += 100;
    }
    
    // Title matches (high score)
    const titleLower = page.title.toLowerCase();
    if (titleLower.includes(query)) {
      score += 50;
    }
    
    // Individual word matches
    queryWords.forEach(word => {
      if (titleLower.includes(word)) {
        score += 20;
      }
      if (page.description.toLowerCase().includes(word)) {
        score += 10;
      }
      if (page.keywords.toLowerCase().includes(word)) {
        score += 15;
      }
    });
    
    // Boost common medical terms
    const medicalTerms = ['neurology', 'dermatology', 'diagnosis', 'treatment', 'management'];
    medicalTerms.forEach(term => {
      if (searchText.includes(term) && query.includes(term)) {
        score += 25;
      }
    });
    
    return score;
  }

  displayResults(results, query) {
    const searchResults = document.getElementById('search-results-preview');
    if (!searchResults) return;

    if (results.length === 0) {
      const languageManager = window.app?.languageManager;
      const noResultsText = languageManager ? 
        languageManager.translate('noResults') : 
        'No results found';
        
      searchResults.innerHTML = `
        <div class="search-result-item">
          ${this.escapeHTML(noResultsText)}
        </div>
      `;
      searchResults.style.display = 'block';
      return;
    }

    const highlightedResults = results.map((result, index) => {
      const highlightedTitle = this.highlightSearchTerms(result.title, query);
      const highlightedDescription = this.highlightSearchTerms(result.description, query);
      
      return `
        <div class="search-result-item" data-index="${index}" data-url="${this.escapeHTML(result.url)}">
          <div class="result-snippet-source">${highlightedTitle}</div>
          <div class="result-snippet-description">${highlightedDescription}</div>
          <div class="result-snippet-meta">
            Score: ${result.score} | Keywords: ${this.escapeHTML(result.keywords)}
          </div>
        </div>
      `;
    }).join('');

    searchResults.innerHTML = highlightedResults;
    searchResults.style.display = 'block';
    this.selectedIndex = -1;

    // Add click handlers
    searchResults.querySelectorAll('.search-result-item').forEach((item) => {
      item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url && window.app?.router) {
          this.hideResults();
          window.app.router.navigate(url);
        }
      });
    });
  }

  highlightSearchTerms(text, query) {
    if (!query.trim() || typeof text !== 'string') {
      return this.escapeHTML(text);
    }
    
    const escapedText = this.escapeHTML(text);
    const queryWords = query.toLowerCase().match(/\b\w+\b/g) || [];
    
    let highlightedText = escapedText;
    
    queryWords.forEach(word => {
      if (word.length >= 2) {
        try {
          const regex = new RegExp(`\\b(${this.escapeRegex(word)})`, 'gi');
          highlightedText = highlightedText.replace(regex, '<mark class="search-preview-highlight">$1</mark>');
        } catch (e) {
          console.warn('Error highlighting search term:', e);
        }
      }
    });
    
    return highlightedText;
  }

  handleKeyDown(event, searchResults) {
    const items = searchResults.querySelectorAll('.search-result-item');
    
    if (searchResults.style.display === 'none' || items.length === 0) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
        this.updateSelection(items);
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        this.updateSelection(items);
        break;
        
      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
          const url = items[this.selectedIndex].getAttribute('data-url');
          if (url && window.app?.router) {
            this.hideResults();
            window.app.router.navigate(url);
          }
        }
        break;
        
      case 'Escape':
        this.hideResults();
        event.target.blur();
        break;
    }
  }

  updateSelection(items) {
    items.forEach((item, index) => {
      item.classList.toggle('preview-item-selected', index === this.selectedIndex);
    });
  }

  hideResults() {
    const searchResults = document.getElementById('search-results-preview');
    if (searchResults) {
      searchResults.style.display = 'none';
    }
    this.selectedIndex = -1;
  }

  // Add new page to search data
  addPage(pageData) {
    const newIndex = this.searchData.length;
    this.searchData.push(pageData);
    
    // Update the index
    const searchText = [
      pageData.title,
      pageData.description,
      pageData.keywords
    ].join(' ').toLowerCase();
    
    const words = searchText.match(/\b\w+\b/g) || [];
    words.forEach(word => {
      if (word.length >= 2) {
        if (!this.searchIndex.has(word)) {
          this.searchIndex.set(word, new Set());
        }
        this.searchIndex.get(word).add(newIndex);
      }
    });
    
    // Update global sitePages
    window.sitePages = this.searchData;
  }

  // Utility functions
  escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (match) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
  }

  escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Get search statistics
  getSearchStats() {
    return {
      totalPages: this.searchData.length,
      indexSize: this.searchIndex.size,
      averageWordsPerPage: this.searchData.reduce((sum, page) => {
        const wordCount = [page.title, page.description, page.keywords]
          .join(' ').match(/\b\w+\b/g)?.length || 0;
        return sum + wordCount;
      }, 0) / this.searchData.length
    };
  }
}