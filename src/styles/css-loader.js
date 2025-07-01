/**
 * CSS Loader for hb-vue-theme
 * This module provides a way to import and inject CSS styles
 */

// CSS content as a string (will be replaced during build)
const CSS_CONTENT = `/* CSS will be injected here during build */`;

/**
 * Inject CSS into the document
 * @param {string} css - CSS content to inject
 * @param {string} id - Optional ID for the style element
 */
export function injectCSS(css, id = 'hb-vue-theme-styles') {
  if (typeof document === 'undefined') {
    console.warn('hb-vue-theme: Cannot inject CSS - document not available');
    return;
  }

  // Remove existing style element if it exists
  const existingStyle = document.getElementById(id);
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create new style element
  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}

/**
 * Load and inject the theme CSS
 * @param {string} id - Optional ID for the style element
 */
export function loadThemeCSS(id) {
  injectCSS(CSS_CONTENT, id);
}

/**
 * Remove the theme CSS
 * @param {string} id - ID of the style element to remove
 */
export function removeThemeCSS(id = 'hb-vue-theme-styles') {
  if (typeof document === 'undefined') return;
  
  const style = document.getElementById(id);
  if (style) {
    style.remove();
  }
}

// Auto-inject CSS when module is imported (in browser environments)
if (typeof document !== 'undefined') {
  loadThemeCSS();
}

export default {
  loadThemeCSS,
  removeThemeCSS,
  injectCSS
}; 