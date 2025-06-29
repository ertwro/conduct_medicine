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
    }
  },
  
  // Explicitly set public directory
  publicDir: 'public',
  
  // Preview server configuration (for production testing)
  preview: {
    port: 4173,
    host: true
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