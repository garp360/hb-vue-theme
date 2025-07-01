// =============================================================================
// HB VUE THEME - MAIN EXPORT
// =============================================================================
// This is the main entry point for the NPM package

// Export the theme installer
export { HBThemeInstaller, HBThemePlugin, installHBTheme } from './styles/theme-installer.js'

// Export the design tokens
export { hbPreset, hbDesignTokens, hbPrimeVueTokens } from './styles/design-tokens.js'

// Export PassThrough configuration
export { passthroughConfig, mergePassthroughConfig, getPassthroughConfig } from './styles/passthrough-config.js'

// Export utility functions
export { createCustomPreset, exportAsCSS, exportAsSCSS } from '../preset-installer.js'

// Export CSS loader functions (will be replaced during build)
export { loadThemeCSS, removeThemeCSS, injectCSS } from './styles/css-loader.js'

// Default export
export { default as HBTheme } from './styles/theme-installer.js'

// =============================================================================
// VUE PLUGIN INSTALLER
// =============================================================================

/**
 * Vue plugin installer for easy integration
 * @param {Object} app - Vue app instance
 * @param {Object} options - Plugin options
 */
export async function install(app, options = {}) {
  const { HBThemePlugin } = await import('./styles/theme-installer.js')
  app.use(HBThemePlugin, options)
}

// =============================================================================
// AUTO-INSTALL FOR BROWSER
// =============================================================================

// Auto-install if used in browser with script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install })
}

// =============================================================================
// VERSION INFO
// =============================================================================

export const version = '1.0.0'
export const name = '@hb-vue/theme' 