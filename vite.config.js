import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Plugin to copy content directory during build
function copyContentPlugin() {
  return {
    name: 'copy-content',
    generateBundle() {
      const copyDir = (src, dest) => {
        mkdirSync(dest, { recursive: true })
        const entries = readdirSync(src, { withFileTypes: true })
        
        for (const entry of entries) {
          const srcPath = join(src, entry.name)
          const destPath = join(dest, entry.name)
          
          if (entry.isDirectory()) {
            copyDir(srcPath, destPath)
          } else {
            copyFileSync(srcPath, destPath)
          }
        }
      }
      
      try {
        copyDir('content', 'dist/content')
        console.log('✅ Content directory copied to dist')
      } catch (error) {
        console.warn('⚠️ Failed to copy content directory:', error.message)
      }
    }
  }
}

export default defineConfig({
  // GitHub Pages deployment configuration
  base: '/conduct_medicine/',
  
  plugins: [
    // Support for older browsers
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // Copy content directory during build
    copyContentPlugin()
  ],
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for debugging
    sourcemap: true,
    // Optimize for production
    minify: 'terser',
    // Handle large chunks
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor libraries
          vendor: ['marked', 'dompurify']
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 3000,
    host: true, // Allow external connections
    open: true, // Auto-open browser
    // Ensure Vite serves files from public directory
    fs: {
      strict: false
    },
  },
  
  // Explicitly set public directory
  publicDir: 'public',
  
  // Preview server configuration (for production testing)
  preview: {
    port: 4173,
    host: true,
    // Configure preview to handle SPA routing like GitHub Pages
    configure: (server) => {
      server.use((req, res, next) => {
        // Skip actual files and assets - let them be served normally or return 404
        if (req.url.includes('/assets/') || req.url.includes('/api/') || 
            req.url.includes('/content/') || // Don't serve index.html for content files
            req.url.includes('.js') || req.url.includes('.css') || 
            req.url.includes('.json') || req.url.includes('.html') ||
            req.url.includes('.md') || req.url.includes('.svg')) {
          return next();
        }
        
        // Only serve index.html for SPA routes (no file extension)
        if (!req.url.includes('.')) {
          req.url = '/';
        }
        next();
      });
    }
  },
  
  // Asset handling
  assetsInclude: ['**/*.md'], // Include markdown files as assets
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  },
  
  // CSS configuration
  css: {
    devSourcemap: true
  },
  
  // Resolve configuration for imports
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/assets',
      '@components': '/src/components',
      '@utils': '/src/utils'
    }
  }
})