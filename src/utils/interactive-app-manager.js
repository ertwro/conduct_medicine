// src/utils/interactive-app-manager.js - Manager for interactive medical applications
export class InteractiveAppManager {
  constructor() {
    this.loadedApps = new Map();
    this.appRegistry = new Map();
    this.modalContainer = null;
    this.setupAppRegistry();
  }

  setupAppRegistry() {
    // Register available interactive apps
    this.appRegistry.set('midas-calculator', {
      name: 'MIDAS Calculator',
      specialty: 'neurology',
      description: 'Migraine Disability Assessment Scale',
      module: () => import('../apps/neurology/MidasCalculator.js'),
      className: 'MidasCalculator'
    });

    this.appRegistry.set('easi-calculator', {
      name: 'EASI Calculator',
      specialty: 'dermatology',
      description: 'Eczema Area and Severity Index',
      module: () => import('../apps/dermatology/EASICalculator.js'),
      className: 'EASICalculator'
    });

    // Placeholder registrations for future tools
    this.appRegistry.set('headache-diary', {
      name: 'Headache Diary',
      specialty: 'neurology',
      description: 'Track headache patterns and triggers',
      module: null, // To be implemented
      className: 'HeadacheDiary'
    });

    this.appRegistry.set('medication-tracker', {
      name: 'Medication Tracker',
      specialty: 'general',
      description: 'Track medication usage and effectiveness',
      module: null, // To be implemented
      className: 'MedicationTracker'
    });

    this.appRegistry.set('scorad-assessment', {
      name: 'SCORAD Assessment',
      specialty: 'dermatology',
      description: 'Scoring Atopic Dermatitis',
      module: null, // To be implemented
      className: 'SCORADAssessment'
    });

    this.appRegistry.set('treatment-selection-guide', {
      name: 'Treatment Selection Guide',
      specialty: 'dermatology',
      description: 'Interactive treatment decision support',
      module: null, // To be implemented
      className: 'TreatmentSelectionGuide'
    });
  }

  async launchApp(appId, options = {}) {
    console.log(`🚀 Launching interactive app: ${appId}`);

    const appConfig = this.appRegistry.get(appId);
    if (!appConfig) {
      throw new Error(`Unknown interactive app: ${appId}`);
    }

    // Check if app module is available
    if (!appConfig.module) {
      this.showComingSoonModal(appConfig);
      return;
    }

    try {
      // Create modal container
      const modalId = `modal-${appId}-${Date.now()}`;
      const containerId = `app-${appId}-${Date.now()}`;
      
      this.createModalContainer(modalId, containerId, appConfig);

      // Dynamically import and instantiate the app
      const module = await appConfig.module();
      const AppClass = module[appConfig.className];
      
      if (!AppClass) {
        throw new Error(`App class ${appConfig.className} not found in module`);
      }

      const appInstance = new AppClass(containerId);
      
      // Store reference
      this.loadedApps.set(modalId, {
        instance: appInstance,
        appId,
        modalId,
        containerId
      });

      // Initialize the app
      await appInstance.init();

      // Setup modal event handlers
      this.setupModalEventHandlers(modalId);

      console.log(`✅ Interactive app launched successfully: ${appConfig.name}`);

    } catch (error) {
      console.error(`❌ Failed to launch app ${appId}:`, error);
      this.showErrorModal(appConfig, error);
    }
  }

  createModalContainer(modalId, containerId, appConfig) {
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'interactive-app-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
    
    modal.innerHTML = `
      <div class="modal-content bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div class="modal-header bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
          <div>
            <h3 class="text-xl font-semibold text-gray-100">${appConfig.name}</h3>
            <p class="text-sm text-gray-400">${appConfig.description}</p>
          </div>
          <button class="modal-close-btn text-gray-400 hover:text-gray-200 text-2xl">×</button>
        </div>
        <div class="modal-body overflow-auto" style="max-height: calc(90vh - 120px);">
          <div id="${containerId}" class="interactive-app-container p-6"></div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    return modal;
  }

  setupModalEventHandlers(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close-btn');
    const appData = this.loadedApps.get(modalId);

    // Close button handler
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeApp(modalId));
    }

    // Click outside to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeApp(modalId);
      }
    });

    // Escape key to close
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeApp(modalId);
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);

    // App close event handler
    if (appData && appData.instance) {
      const container = document.getElementById(appData.containerId);
      if (container) {
        container.addEventListener('app-close', () => this.closeApp(modalId));
      }
    }

    // Store the escape handler for cleanup
    if (appData) {
      appData.escapeHandler = escapeHandler;
    }
  }

  closeApp(modalId) {
    const appData = this.loadedApps.get(modalId);
    if (!appData) return;

    console.log(`🔚 Closing interactive app: ${appData.appId}`);

    // Cleanup app instance
    if (appData.instance && typeof appData.instance.destroy === 'function') {
      appData.instance.destroy();
    }

    // Remove event listeners
    if (appData.escapeHandler) {
      document.removeEventListener('keydown', appData.escapeHandler);
    }

    // Remove modal from DOM
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.remove();
    }

    // Remove from loaded apps
    this.loadedApps.delete(modalId);
  }

  closeAllApps() {
    const modalIds = Array.from(this.loadedApps.keys());
    modalIds.forEach(modalId => this.closeApp(modalId));
  }

  showComingSoonModal(appConfig) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-4">
        <h3 class="text-xl font-semibold mb-4 text-gray-100">${appConfig.name}</h3>
        <p class="text-gray-300 mb-4">${appConfig.description}</p>
        <div class="bg-blue-900 p-4 rounded mb-4">
          <p class="text-blue-200 text-sm">
            🚧 This interactive tool is currently under development and will be available in a future update.
          </p>
        </div>
        <div class="flex gap-3">
          <button class="close-modal bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors">
            Close
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close handlers
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (modal.parentNode) modal.remove();
    }, 3000);
  }

  showErrorModal(appConfig, error) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-4">
        <h3 class="text-xl font-semibold mb-4 text-red-400">Error Loading App</h3>
        <p class="text-gray-300 mb-2">Failed to load: <strong>${appConfig.name}</strong></p>
        <p class="text-sm text-gray-400 mb-4">${error.message}</p>
        <button class="close-modal bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
          Close
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close handlers
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }

  getAvailableApps(specialty = null) {
    const apps = Array.from(this.appRegistry.entries()).map(([id, config]) => ({
      id,
      ...config,
      available: Boolean(config.module)
    }));

    if (specialty) {
      return apps.filter(app => app.specialty === specialty || app.specialty === 'general');
    }

    return apps;
  }

  getAppsBySpecialty() {
    const appsBySpecialty = {};
    
    this.appRegistry.forEach((config, id) => {
      const specialty = config.specialty;
      if (!appsBySpecialty[specialty]) {
        appsBySpecialty[specialty] = [];
      }
      appsBySpecialty[specialty].push({
        id,
        ...config,
        available: Boolean(config.module)
      });
    });

    return appsBySpecialty;
  }

  isAppLoaded(appId) {
    return Array.from(this.loadedApps.values()).some(app => app.appId === appId);
  }

  getLoadedApps() {
    return Array.from(this.loadedApps.values()).map(app => ({
      modalId: app.modalId,
      appId: app.appId,
      containerId: app.containerId
    }));
  }

  // Utility method to add CSS for interactive apps
  addInteractiveAppStyles() {
    if (document.getElementById('interactive-app-styles')) return;

    const style = document.createElement('style');
    style.id = 'interactive-app-styles';
    style.textContent = `
      .interactive-app {
        font-family: inherit;
        color: inherit;
      }

      .app-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #374151;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #f3f4f6;
        margin: 0;
      }

      .app-description {
        font-size: 0.875rem;
        color: #9ca3af;
        margin: 0.5rem 0 0 0;
      }

      .app-controls {
        display: flex;
        gap: 0.5rem;
      }

      .app-controls button {
        background: #374151;
        border: 1px solid #4b5563;
        color: #d1d5db;
        width: 2rem;
        height: 2rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .app-controls button:hover {
        background: #4b5563;
        color: #f3f4f6;
      }

      .form-field {
        margin-bottom: 1rem;
      }

      .form-label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: #d1d5db;
        margin-bottom: 0.5rem;
      }

      .form-input, .form-select {
        width: 100%;
        padding: 0.5rem;
        background: #374151;
        border: 1px solid #4b5563;
        border-radius: 0.375rem;
        color: #f3f4f6;
        font-size: 0.875rem;
      }

      .form-input:focus, .form-select:focus {
        outline: none;
        border-color: #0ea5e9;
        box-shadow: 0 0 0 1px #0ea5e9;
      }

      .checkbox-field, .radio-group {
        margin-bottom: 1rem;
      }

      .checkbox-label, .radio-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        color: #d1d5db;
      }

      .form-checkbox, .form-radio {
        margin: 0;
      }

      .app-disclaimer {
        text-align: center;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #374151;
      }
    `;

    document.head.appendChild(style);
  }
}

// Create global instance
if (typeof window !== 'undefined') {
  window.interactiveAppManager = new InteractiveAppManager();
  window.interactiveAppManager.addInteractiveAppStyles();
}