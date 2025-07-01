// =============================================================================
// HB VUE THEME - THEME INSTALLER FOR PRIMEVUE 4
// =============================================================================
// This file provides utilities to install and apply our custom theme
// using PrimeVue 4's design token system

import { hbPreset } from './design-tokens.js'

// =============================================================================
// THEME INSTALLER CLASS
// =============================================================================

export class HBThemeInstaller {
  constructor() {
    this.preset = hbPreset
    this.isInstalled = false
  }

  // =============================================================================
  // INSTALL THEME
  // =============================================================================
  
  /**
   * Install the HB theme by applying design tokens to the document
   * @param {Object} options - Installation options
   * @param {boolean} options.force - Force reinstallation even if already installed
   * @param {string} options.target - Target element to apply theme to (default: document.documentElement)
   * @param {boolean} options.injectCSS - Automatically inject the theme CSS (default: false)
   * @returns {boolean} - Success status
   */
  install(options = {}) {
    const { force = false, target = document.documentElement, injectCSS = false } = options
    
    if (this.isInstalled && !force) {
      console.warn('HB Theme is already installed. Use force: true to reinstall.')
      return false
    }

    try {
      // Inject CSS if requested
      if (injectCSS) {
        this.injectCSS()
      }
      
      // Apply all design tokens
      this.applyDesignTokens(target)
      
      // Apply PrimeFlex utilities
      this.applyPrimeFlexUtilities()
      
      // Apply component-specific tokens
      this.applyComponentTokens(target)
      
      this.isInstalled = true
      console.log('✅ HB Theme installed successfully!')
      return true
      
    } catch (error) {
      console.error('❌ Failed to install HB Theme:', error)
      return false
    }
  }

  // =============================================================================
  // INJECT CSS
  // =============================================================================
  
  /**
   * Inject the theme CSS into the document head
   */
  injectCSS() {
    // Check if CSS is already injected
    if (document.getElementById('hb-theme-css')) {
      return
    }
    
    try {
      // Create link element
      const link = document.createElement('link')
      link.id = 'hb-theme-css'
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = 'https://unpkg.com/hb-vue-theme@latest/dist/theme.css'
      
      // Add to head
      document.head.appendChild(link)
      
      console.log('✅ HB Theme CSS injected successfully!')
      
    } catch (error) {
      console.error('❌ Failed to inject HB Theme CSS:', error)
      
      // Fallback: try to inject from node_modules
      try {
        const link = document.createElement('link')
        link.id = 'hb-theme-css'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = './node_modules/hb-vue-theme/dist/theme.css'
        document.head.appendChild(link)
        console.log('✅ HB Theme CSS injected from node_modules!')
      } catch (fallbackError) {
        console.error('❌ Failed to inject CSS from node_modules:', fallbackError)
        console.warn('Please manually include the CSS file in your project.')
      }
    }
  }

  // =============================================================================
  // APPLY DESIGN TOKENS
  // =============================================================================
  
  /**
   * Apply design tokens to the target element
   * @param {HTMLElement} target - Target element
   */
  applyDesignTokens(target) {
    const tokens = this.preset.tokens
    
    Object.entries(tokens).forEach(([property, value]) => {
      target.style.setProperty(property, value)
    })
  }

  // =============================================================================
  // APPLY PRIMEFLEX UTILITIES
  // =============================================================================
  
  /**
   * Apply custom PrimeFlex utility classes
   */
  applyPrimeFlexUtilities() {
    const utilities = this.preset.utilities
    
    // Create a style element for custom utilities
    let styleElement = document.getElementById('hb-primeflex-utilities')
    
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = 'hb-primeflex-utilities'
      document.head.appendChild(styleElement)
    }
    
    // Generate CSS for utilities
    const cssRules = Object.entries(utilities)
      .map(([className, styles]) => `.${className} { ${styles} }`)
      .join('\n')
    
    styleElement.textContent = cssRules
  }

  // =============================================================================
  // APPLY COMPONENT TOKENS
  // =============================================================================
  
  /**
   * Apply component-specific design tokens
   * @param {HTMLElement} target - Target element
   */
  applyComponentTokens(target) {
    const components = this.preset.components
    
    Object.entries(components).forEach(([componentName, tokens]) => {
      const componentSelector = `.hb-${componentName}`
      const elements = target.querySelectorAll(componentSelector)
      
      elements.forEach(element => {
        Object.entries(tokens).forEach(([property, value]) => {
          element.style.setProperty(property, value)
        })
      })
    })
  }

  // =============================================================================
  // UNINSTALL THEME
  // =============================================================================
  
  /**
   * Uninstall the HB theme
   * @param {string} target - Target element
   * @returns {boolean} - Success status
   */
  uninstall(target = document.documentElement) {
    try {
      // Remove design tokens
      const tokens = this.preset.tokens
      Object.keys(tokens).forEach(property => {
        target.style.removeProperty(property)
      })
      
      // Remove PrimeFlex utilities
      const styleElement = document.getElementById('hb-primeflex-utilities')
      if (styleElement) {
        styleElement.remove()
      }
      
      // Remove injected CSS
      const cssElement = document.getElementById('hb-theme-css')
      if (cssElement) {
        cssElement.remove()
      }
      
      // Remove component tokens
      const components = this.preset.components
      Object.entries(components).forEach(([componentName, tokens]) => {
        const componentSelector = `.hb-${componentName}`
        const elements = target.querySelectorAll(componentSelector)
        
        elements.forEach(element => {
          Object.keys(tokens).forEach(property => {
            element.style.removeProperty(property)
          })
        })
      })
      
      this.isInstalled = false
      console.log('✅ HB Theme uninstalled successfully!')
      return true
      
    } catch (error) {
      console.error('❌ Failed to uninstall HB Theme:', error)
      return false
    }
  }

  // =============================================================================
  // UPDATE THEME
  // =============================================================================
  
  /**
   * Update theme with new tokens
   * @param {Object} newTokens - New design tokens
   * @param {string} target - Target element
   * @returns {boolean} - Success status
   */
  update(newTokens, target = document.documentElement) {
    try {
      Object.entries(newTokens).forEach(([property, value]) => {
        target.style.setProperty(property, value)
      })
      
      console.log('✅ HB Theme updated successfully!')
      return true
      
    } catch (error) {
      console.error('❌ Failed to update HB Theme:', error)
      return false
    }
  }

  // =============================================================================
  // GET THEME INFO
  // =============================================================================
  
  /**
   * Get theme information
   * @returns {Object} - Theme information
   */
  getInfo() {
    return {
      name: this.preset.name,
      version: this.preset.version,
      description: this.preset.description,
      author: this.preset.author,
      license: this.preset.license,
      isInstalled: this.isInstalled,
      tokenCount: Object.keys(this.preset.tokens).length,
      utilityCount: Object.keys(this.preset.utilities).length,
      componentCount: Object.keys(this.preset.components).length
    }
  }

  // =============================================================================
  // EXPORT THEME
  // =============================================================================
  
  /**
   * Export theme as a preset configuration
   * @returns {Object} - Theme preset configuration
   */
  export() {
    return JSON.parse(JSON.stringify(this.preset))
  }
}

// =============================================================================
// VUE PLUGIN
// =============================================================================
// Vue plugin for easy integration

export const HBThemePlugin = {
  install(app, options = {}) {
    const installer = new HBThemeInstaller()
    
    // Make installer available globally
    app.config.globalProperties.$hbTheme = installer
    
    // Auto-install if requested
    if (options.autoInstall !== false) {
      installer.install(options)
    }
    
    // Provide installer to components
    app.provide('hbTheme', installer)
  }
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Quick install function
 * @param {Object} options - Installation options
 * @returns {HBThemeInstaller} - Theme installer instance
 */
export function installHBTheme(options = {}) {
  const installer = new HBThemeInstaller()
  installer.install(options)
  return installer
}

/**
 * Create a theme preset for distribution
 * @param {Object} customTokens - Custom tokens to merge
 * @returns {Object} - Complete theme preset
 */
export function createHBThemePreset(customTokens = {}) {
  const basePreset = hbPreset
  
  return {
    ...basePreset,
    tokens: {
      ...basePreset.tokens,
      ...customTokens
    },
    customTokens
  }
}

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

export default HBThemeInstaller 