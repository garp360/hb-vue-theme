// =============================================================================
// HB VUE THEME - PRESET INSTALLER
// =============================================================================
// This file provides a simple way to install the HB theme in other projects
// Usage: import { installHBTheme } from './preset-installer.js'

import { hbPreset } from './src/styles/design-tokens.js'

// =============================================================================
// PRESET INSTALLER
// =============================================================================

/**
 * Install HB Theme preset in any Vue 3 + PrimeVue 4 project
 * @param {Object} options - Installation options
 * @param {boolean} options.autoInstall - Auto-install theme (default: true)
 * @param {boolean} options.force - Force reinstallation (default: false)
 * @param {string} options.target - Target element (default: document.documentElement)
 * @param {Object} options.customTokens - Custom tokens to merge
 * @returns {Object} - Theme installer instance
 */
export function installHBTheme(options = {}) {
  const {
    autoInstall = true,
    force = false,
    target = document.documentElement,
    customTokens = {}
  } = options

  // Merge custom tokens with base preset
  const mergedPreset = {
    ...hbPreset,
    tokens: {
      ...hbPreset.tokens,
      ...customTokens
    }
  }

  // Create installer instance
  const installer = {
    preset: mergedPreset,
    isInstalled: false,

    install() {
      if (this.isInstalled && !force) {
        console.warn('HB Theme is already installed. Use force: true to reinstall.')
        return false
      }

      try {
        // Apply design tokens
        Object.entries(this.preset.tokens).forEach(([property, value]) => {
          target.style.setProperty(property, value)
        })

        // Apply PrimeFlex utilities
        this.applyPrimeFlexUtilities()

        this.isInstalled = true
        console.log('✅ HB Theme installed successfully!')
        return true

      } catch (error) {
        console.error('❌ Failed to install HB Theme:', error)
        return false
      }
    },

    applyPrimeFlexUtilities() {
      const utilities = this.preset.utilities || {}
      
      let styleElement = document.getElementById('hb-primeflex-utilities')
      
      if (!styleElement) {
        styleElement = document.createElement('style')
        styleElement.id = 'hb-primeflex-utilities'
        document.head.appendChild(styleElement)
      }
      
      const cssRules = Object.entries(utilities)
        .map(([className, styles]) => `.${className} { ${styles} }`)
        .join('\n')
      
      styleElement.textContent = cssRules
    },

    uninstall() {
      try {
        // Remove design tokens
        Object.keys(this.preset.tokens).forEach(property => {
          target.style.removeProperty(property)
        })

        // Remove PrimeFlex utilities
        const styleElement = document.getElementById('hb-primeflex-utilities')
        if (styleElement) {
          styleElement.remove()
        }

        this.isInstalled = false
        console.log('✅ HB Theme uninstalled successfully!')
        return true

      } catch (error) {
        console.error('❌ Failed to uninstall HB Theme:', error)
        return false
      }
    },

    update(newTokens) {
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
    },

    getInfo() {
      return {
        name: this.preset.name,
        version: this.preset.version,
        description: this.preset.description,
        author: this.preset.author,
        license: this.preset.license,
        isInstalled: this.isInstalled,
        tokenCount: Object.keys(this.preset.tokens).length,
        utilityCount: Object.keys(this.preset.utilities || {}).length
      }
    }
  }

  // Auto-install if requested
  if (autoInstall) {
    installer.install()
  }

  return installer
}

// =============================================================================
// VUE PLUGIN
// =============================================================================

export const HBThemePlugin = {
  install(app, options = {}) {
    const installer = installHBTheme(options)
    
    // Make installer available globally
    app.config.globalProperties.$hbTheme = installer
    
    // Provide installer to components
    app.provide('hbTheme', installer)
  }
}

// =============================================================================
// PRESET CONFIGURATION
// =============================================================================

export const hbThemePreset = hbPreset

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Create a custom theme preset
 * @param {Object} customTokens - Custom design tokens
 * @param {Object} customUtilities - Custom PrimeFlex utilities
 * @returns {Object} - Custom theme preset
 */
export function createCustomPreset(customTokens = {}, customUtilities = {}) {
  return {
    ...hbPreset,
    tokens: {
      ...hbPreset.tokens,
      ...customTokens
    },
    utilities: {
      ...hbPreset.utilities,
      ...customUtilities
    },
    customTokens,
    customUtilities
  }
}

/**
 * Export theme as CSS variables
 * @param {Object} preset - Theme preset
 * @returns {string} - CSS variables string
 */
export function exportAsCSS(preset = hbPreset) {
  const cssVariables = Object.entries(preset.tokens)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join('\n')

  return `:root {\n${cssVariables}\n}`
}

/**
 * Export theme as SCSS variables
 * @param {Object} preset - Theme preset
 * @returns {string} - SCSS variables string
 */
export function exportAsSCSS(preset = hbPreset) {
  const scssVariables = Object.entries(preset.tokens)
    .map(([property, value]) => {
      const variableName = property.replace('--hb-', '$hb-').replace(/-/g, '-')
      return `${variableName}: ${value};`
    })
    .join('\n')

  return scssVariables
}

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

export default installHBTheme 