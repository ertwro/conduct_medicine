// src/apps/shared/BaseInteractiveApp.js - Base class for interactive medical applications
export class BaseInteractiveApp {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.container = null;
    this.options = {
      title: 'Medical Interactive Tool',
      specialty: 'general',
      description: '',
      showResults: true,
      allowExport: false,
      ...options
    };
    this.data = {};
    this.results = {};
    this.isInitialized = false;
  }

  async init() {
    if (this.isInitialized) return;

    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      throw new Error(`Container with ID ${this.containerId} not found`);
    }

    // Setup basic structure
    this.setupAppStructure();
    
    // Initialize app-specific functionality
    await this.initializeApp();
    
    // Setup event listeners
    this.setupEventListeners();
    
    this.isInitialized = true;
    console.log(`✅ Interactive app initialized: ${this.options.title}`);
  }

  setupAppStructure() {
    this.container.innerHTML = `
      <div class="interactive-app" data-specialty="${this.options.specialty}">
        <header class="app-header">
          <h3 class="app-title">${this.options.title}</h3>
          ${this.options.description ? `<p class="app-description">${this.options.description}</p>` : ''}
          <div class="app-controls">
            <button class="reset-btn" title="Reset">🔄</button>
            ${this.options.allowExport ? '<button class="export-btn" title="Export Results">📊</button>' : ''}
            <button class="close-btn" title="Close">✕</button>
          </div>
        </header>
        <main class="app-content">
          <div class="app-form">
            <!-- App-specific form content will be inserted here -->
          </div>
          ${this.options.showResults ? '<div class="app-results" style="display: none;"></div>' : ''}
        </main>
        <footer class="app-footer">
          <div class="app-disclaimer">
            <p class="text-xs text-gray-400">
              🔬 For educational purposes only. Not a substitute for professional medical advice.
            </p>
          </div>
        </footer>
      </div>
    `;
  }

  setupEventListeners() {
    // Reset button
    const resetBtn = this.container.querySelector('.reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.reset());
    }

    // Export button
    const exportBtn = this.container.querySelector('.export-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportResults());
    }

    // Close button
    const closeBtn = this.container.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
  }

  // Abstract methods to be implemented by subclasses
  async initializeApp() {
    throw new Error('initializeApp() must be implemented by subclass');
  }

  calculate() {
    throw new Error('calculate() must be implemented by subclass');
  }

  // Common utility methods
  getFormData() {
    const formElements = this.container.querySelectorAll('input, select, textarea');
    const data = {};
    
    formElements.forEach(element => {
      const name = element.name || element.id;
      if (name) {
        if (element.type === 'checkbox') {
          data[name] = element.checked;
        } else if (element.type === 'radio') {
          if (element.checked) {
            data[name] = element.value;
          }
        } else {
          data[name] = element.value;
        }
      }
    });
    
    return data;
  }

  setFormData(data) {
    Object.entries(data).forEach(([name, value]) => {
      const element = this.container.querySelector(`[name="${name}"], #${name}`);
      if (element) {
        if (element.type === 'checkbox') {
          element.checked = Boolean(value);
        } else if (element.type === 'radio') {
          if (element.value === value) {
            element.checked = true;
          }
        } else {
          element.value = value;
        }
      }
    });
  }

  showResults(results) {
    const resultsContainer = this.container.querySelector('.app-results');
    if (!resultsContainer) return;

    this.results = results;
    resultsContainer.innerHTML = this.formatResults(results);
    resultsContainer.style.display = 'block';
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  formatResults(results) {
    // Default results formatting - can be overridden by subclasses
    return `
      <div class="results-content">
        <h4 class="results-title">Calculation Results</h4>
        <div class="results-data">
          ${Object.entries(results).map(([key, value]) => `
            <div class="result-item">
              <span class="result-label">${this.formatLabel(key)}:</span>
              <span class="result-value">${this.formatValue(value)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  formatLabel(key) {
    return key.replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase())
              .trim();
  }

  formatValue(value) {
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return String(value);
  }

  showError(message) {
    const resultsContainer = this.container.querySelector('.app-results');
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div class="error-message">
          <h4 class="text-red-400">Error</h4>
          <p>${message}</p>
        </div>
      `;
      resultsContainer.style.display = 'block';
    }
  }

  reset() {
    // Clear form data
    const formElements = this.container.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
      if (element.type === 'checkbox' || element.type === 'radio') {
        element.checked = false;
      } else {
        element.value = '';
      }
    });

    // Hide results
    const resultsContainer = this.container.querySelector('.app-results');
    if (resultsContainer) {
      resultsContainer.style.display = 'none';
    }

    // Reset data
    this.data = {};
    this.results = {};
    
    // Call app-specific reset logic
    this.onReset();
  }

  onReset() {
    // Override in subclasses for custom reset logic
  }

  exportResults() {
    if (!this.results || Object.keys(this.results).length === 0) {
      alert('No results to export. Please perform a calculation first.');
      return;
    }

    const exportData = {
      tool: this.options.title,
      specialty: this.options.specialty,
      timestamp: new Date().toISOString(),
      inputs: this.data,
      results: this.results
    };

    // Create and download JSON file
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.options.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  close() {
    // Emit close event for parent components to handle
    this.container.dispatchEvent(new CustomEvent('app-close', {
      detail: { appId: this.containerId }
    }));
  }

  destroy() {
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.isInitialized = false;
  }

  // Validation helpers
  validateRequired(fields) {
    const missing = [];
    fields.forEach(field => {
      const element = this.container.querySelector(`[name="${field}"], #${field}`);
      if (!element || !element.value.trim()) {
        missing.push(this.formatLabel(field));
      }
    });
    return missing;
  }

  validateNumeric(fields) {
    const invalid = [];
    fields.forEach(field => {
      const element = this.container.querySelector(`[name="${field}"], #${field}`);
      if (element && element.value && isNaN(Number(element.value))) {
        invalid.push(this.formatLabel(field));
      }
    });
    return invalid;
  }

  validateRange(field, min, max) {
    const element = this.container.querySelector(`[name="${field}"], #${field}`);
    if (!element || !element.value) return null;
    
    const value = Number(element.value);
    if (isNaN(value)) return `${this.formatLabel(field)} must be a number`;
    if (value < min || value > max) {
      return `${this.formatLabel(field)} must be between ${min} and ${max}`;
    }
    return null;
  }

  // Utility method to create form elements
  createFormField(config) {
    const { type, name, label, options, required, placeholder, min, max, step } = config;
    
    let field = '';
    const requiredAttr = required ? 'required' : '';
    const inputId = `${this.containerId}-${name}`;
    
    switch (type) {
      case 'select':
        field = `
          <div class="form-field">
            <label for="${inputId}" class="form-label">${label}${required ? ' *' : ''}</label>
            <select id="${inputId}" name="${name}" class="form-select" ${requiredAttr}>
              <option value="">Select...</option>
              ${options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
            </select>
          </div>
        `;
        break;
      
      case 'number':
        field = `
          <div class="form-field">
            <label for="${inputId}" class="form-label">${label}${required ? ' *' : ''}</label>
            <input type="number" id="${inputId}" name="${name}" class="form-input" 
                   placeholder="${placeholder || ''}" ${requiredAttr}
                   ${min !== undefined ? `min="${min}"` : ''}
                   ${max !== undefined ? `max="${max}"` : ''}
                   ${step !== undefined ? `step="${step}"` : ''}>
          </div>
        `;
        break;
      
      case 'checkbox':
        field = `
          <div class="form-field checkbox-field">
            <label for="${inputId}" class="checkbox-label">
              <input type="checkbox" id="${inputId}" name="${name}" class="form-checkbox" ${requiredAttr}>
              <span class="checkbox-text">${label}</span>
            </label>
          </div>
        `;
        break;
      
      case 'radio':
        field = `
          <div class="form-field radio-group">
            <fieldset>
              <legend class="form-label">${label}${required ? ' *' : ''}</legend>
              ${options.map(opt => `
                <label class="radio-label">
                  <input type="radio" name="${name}" value="${opt.value}" class="form-radio" ${requiredAttr}>
                  <span class="radio-text">${opt.label}</span>
                </label>
              `).join('')}
            </fieldset>
          </div>
        `;
        break;
      
      default: // text
        field = `
          <div class="form-field">
            <label for="${inputId}" class="form-label">${label}${required ? ' *' : ''}</label>
            <input type="text" id="${inputId}" name="${name}" class="form-input" 
                   placeholder="${placeholder || ''}" ${requiredAttr}>
          </div>
        `;
    }
    
    return field;
  }
}