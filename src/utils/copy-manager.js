// src/utils/copy-manager.js - Copy-to-Clipboard Functionality for Medical Content

export class CopyManager {
  constructor() {
    this.lastCopiedElement = null;
    this.feedbackTimeout = null;
  }

  /**
   * Initialize copy functionality for the application
   */
  init() {
    this.setupGlobalEventListeners();
    console.log('✅ Copy Manager initialized');
  }

  /**
   * Set up global event listeners for copy buttons
   */
  setupGlobalEventListeners() {
    // Use event delegation for dynamically added copy buttons
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('copy-btn') || 
          event.target.closest('.copy-btn')) {
        this.handleCopyClick(event);
      }
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && 
          (event.target.classList.contains('copy-btn') || 
           event.target.closest('.copy-btn'))) {
        event.preventDefault();
        this.handleCopyClick(event);
      }
    });
  }

  /**
   * Handle copy button click events
   */
  async handleCopyClick(event) {
    event.preventDefault();
    event.stopPropagation();

    const copyBtn = event.target.closest('.copy-btn');
    if (!copyBtn) return;

    const sectionId = copyBtn.dataset.sectionId;
    const copyFormat = copyBtn.dataset.format || 'text';
    
    if (!sectionId) {
      console.error('Copy button missing section ID');
      return;
    }

    try {
      const success = await this.copySection(sectionId, copyFormat);
      if (success) {
        this.showCopyFeedback(copyBtn, 'success');
      } else {
        this.showCopyFeedback(copyBtn, 'error');
      }
    } catch (error) {
      console.error('Copy operation failed:', error);
      this.showCopyFeedback(copyBtn, 'error');
    }
  }

  /**
   * Copy content from a specific section
   */
  async copySection(sectionId, format = 'text') {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Section with ID ${sectionId} not found`);
      return false;
    }

    let textToCopy;
    
    switch (format) {
      case 'html':
        textToCopy = this.extractHTMLContent(section);
        break;
      case 'markdown':
        textToCopy = this.convertToMarkdown(section);
        break;
      case 'text':
      default:
        textToCopy = this.extractPlainText(section);
        break;
    }

    return await this.copyToClipboard(textToCopy, format);
  }

  /**
   * Extract plain text content from element
   */
  extractPlainText(element) {
    // Clone element to avoid modifying original
    const clone = element.cloneNode(true);
    
    // Remove copy buttons from cloned content
    const copyButtons = clone.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => btn.remove());
    
    // Get clean text content
    let text = clone.textContent || clone.innerText || '';
    
    // Clean up whitespace
    text = text.replace(/\s+/g, ' ').trim();
    
    return text;
  }

  /**
   * Extract HTML content while preserving medical formatting
   */
  extractHTMLContent(element) {
    // Clone element to avoid modifying original
    const clone = element.cloneNode(true);
    
    // Remove copy buttons from cloned content
    const copyButtons = clone.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => btn.remove());
    
    // Preserve medical indicators and links
    let html = clone.innerHTML;
    
    // Clean up unnecessary attributes while preserving medical classes
    html = html.replace(/\s+(id|data-section-id)="[^"]*"/g, '');
    
    return html;
  }

  /**
   * Convert HTML content to markdown format
   */
  convertToMarkdown(element) {
    // Clone element to avoid modifying original
    const clone = element.cloneNode(true);
    
    // Remove copy buttons
    const copyButtons = clone.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => btn.remove());
    
    let markdown = '';
    
    // Convert different HTML elements to markdown
    const processNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }
      
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        const content = Array.from(node.childNodes).map(processNode).join('');
        
        switch (tagName) {
          case 'h1':
            return `# ${content}\n\n`;
          case 'h2':
            return `## ${content}\n\n`;
          case 'h3':
            return `### ${content}\n\n`;
          case 'h4':
            return `#### ${content}\n\n`;
          case 'h5':
            return `##### ${content}\n\n`;
          case 'h6':
            return `###### ${content}\n\n`;
          case 'p':
            return `${content}\n\n`;
          case 'strong':
          case 'b':
            return `**${content}**`;
          case 'em':
          case 'i':
            return `*${content}*`;
          case 'ul':
            return `${content}\n`;
          case 'ol':
            return `${content}\n`;
          case 'li':
            return `- ${content}\n`;
          case 'a':
            const href = node.getAttribute('href');
            return href ? `[${content}](${href})` : content;
          case 'code':
            return `\`${content}\``;
          case 'pre':
            return `\`\`\`\n${content}\n\`\`\`\n\n`;
          case 'blockquote':
            return `> ${content}\n\n`;
          case 'br':
            return '\n';
          default:
            return content;
        }
      }
      
      return '';
    };
    
    markdown = processNode(clone);
    
    // Clean up extra whitespace
    markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();
    
    return markdown;
  }

  /**
   * Copy text to clipboard using modern API with fallback
   */
  async copyToClipboard(text, format = 'text') {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        if (format === 'html') {
          // Copy as both HTML and plain text
          const clipboardItem = new ClipboardItem({
            'text/html': new Blob([text], { type: 'text/html' }),
            'text/plain': new Blob([this.stripHTML(text)], { type: 'text/plain' })
          });
          await navigator.clipboard.write([clipboardItem]);
        } else {
          await navigator.clipboard.writeText(text);
        }
        return true;
      } else {
        // Fallback for older browsers
        return this.fallbackCopyToClipboard(text);
      }
    } catch (error) {
      console.error('Clipboard API failed, trying fallback:', error);
      return this.fallbackCopyToClipboard(text);
    }
  }

  /**
   * Fallback copy method for older browsers
   */
  fallbackCopyToClipboard(text) {
    try {
      // Create temporary textarea
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '-999px';
      textArea.style.left = '-999px';
      textArea.style.width = '1px';
      textArea.style.height = '1px';
      textArea.style.opacity = '0';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return successful;
    } catch (error) {
      console.error('Fallback copy failed:', error);
      return false;
    }
  }

  /**
   * Strip HTML tags from text
   */
  stripHTML(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  }

  /**
   * Show visual feedback for copy operation
   */
  showCopyFeedback(button, status) {
    // Clear any existing feedback timeout
    if (this.feedbackTimeout) {
      clearTimeout(this.feedbackTimeout);
    }

    // Reset previous button if different
    if (this.lastCopiedElement && this.lastCopiedElement !== button) {
      this.resetButtonState(this.lastCopiedElement);
    }

    // Store original content and title
    const originalHTML = button.innerHTML;
    const originalTitle = button.title;
    
    if (status === 'success') {
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      `;
      button.title = 'Copied!';
      button.classList.add('copy-success');
      button.classList.remove('copy-error');
    } else {
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      `;
      button.title = 'Copy failed';
      button.classList.add('copy-error');
      button.classList.remove('copy-success');
    }

    this.lastCopiedElement = button;

    // Reset after delay
    this.feedbackTimeout = setTimeout(() => {
      this.resetButtonState(button, originalHTML, originalTitle);
      this.lastCopiedElement = null;
    }, 2000);
  }

  /**
   * Reset button to original state
   */
  resetButtonState(button, originalHTML = null, originalTitle = 'Copy to clipboard') {
    if (originalHTML) {
      button.innerHTML = originalHTML;
    } else {
      // Default copy icon
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
        </svg>
      `;
    }
    button.title = originalTitle;
    button.classList.remove('copy-success', 'copy-error');
  }

  /**
   * Create a copy button element
   */
  createCopyButton(sectionId, format = 'text', customClass = '') {
    const button = document.createElement('button');
    button.className = `copy-btn ${customClass}`.trim();
    button.dataset.sectionId = sectionId;
    button.dataset.format = format;
    
    // Use Lucide copy icon SVG
    button.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
    `;
    
    button.title = 'Copy to clipboard';
    button.setAttribute('aria-label', 'Copy this section to clipboard');
    button.setAttribute('tabindex', '0');
    
    return button;
  }

  /**
   * Add copy functionality to processed content
   */
  addCopyButtons(htmlContent) {
    // Create a temporary container to parse HTML
    const container = document.createElement('div');
    container.innerHTML = htmlContent;
    
    // Find copyable sections
    const copyableSections = container.querySelectorAll('h2, h3, h4, h5, h6, p, ul, ol, blockquote, table, .medical-table-wrapper');
    
    let sectionCounter = 0;
    
    copyableSections.forEach(section => {
      // Skip very short content (less than 20 characters)
      const textContent = section.textContent || '';
      if (textContent.trim().length < 20) return;
      
      // Skip if already has a copy button
      if (section.querySelector('.copy-btn')) return;
      
      // Generate unique section ID
      const sectionId = `copyable-section-${Date.now()}-${sectionCounter++}`;
      section.id = sectionId;
      
      // Create copy button
      const copyButton = this.createCopyButton(sectionId, 'text', 'section-copy-btn');
      
      // Add copy button wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'copyable-section';
      wrapper.style.position = 'relative';
      
      // Clone section and add to wrapper
      const sectionClone = section.cloneNode(true);
      sectionClone.id = sectionId;
      
      wrapper.appendChild(sectionClone);
      wrapper.appendChild(copyButton);
      
      // Replace original section with wrapper
      section.parentNode.replaceChild(wrapper, section);
    });
    
    return container.innerHTML;
  }

  /**
   * Copy the entire page content
   */
  async copyPageContent(format = 'markdown') {
    const mainContent = document.querySelector('.actual-main-content');
    if (!mainContent) {
      console.error('Main content area not found');
      return false;
    }
    
    return await this.copySection(mainContent.id || 'main-content', format);
  }

  /**
   * Create a floating copy menu for complex sections
   */
  createCopyMenu(sectionId) {
    const menu = document.createElement('div');
    menu.className = 'copy-menu';
    menu.innerHTML = `
      <button class="copy-btn copy-text" data-section-id="${sectionId}" data-format="text" title="Copy as plain text">
        📄 Text
      </button>
      <button class="copy-btn copy-html" data-section-id="${sectionId}" data-format="html" title="Copy as HTML">
        🏷️ HTML
      </button>
      <button class="copy-btn copy-markdown" data-section-id="${sectionId}" data-format="markdown" title="Copy as Markdown">
        📝 MD
      </button>
    `;
    
    return menu;
  }

  /**
   * Destroy copy manager and clean up
   */
  destroy() {
    if (this.feedbackTimeout) {
      clearTimeout(this.feedbackTimeout);
    }
    
    // Could remove event listeners if needed
    console.log('Copy Manager destroyed');
  }
}