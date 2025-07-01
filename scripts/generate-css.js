// =============================================================================
// CSS GENERATOR FOR DISTRIBUTION
// =============================================================================

import { hbPreset } from '../src/styles/design-tokens.js'
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { dirname, join } from 'path'

// =============================================================================
// GENERATE CSS VARIABLES
// =============================================================================

function generateCSS() {
  const cssVariables = Object.entries(hbPreset.tokens)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join('\n')

  // Read component-specific CSS
  const componentCSS = readComponentCSS()

  const cssContent = `/* =============================================================================
   HB VUE THEME - CSS VARIABLES
   =============================================================================
   Generated from design tokens
   ============================================================================= */

:root {
${cssVariables}
}

/* =============================================================================
   PRIMEFLEX UTILITIES
   ============================================================================= */

${Object.entries(hbPreset.utilities || {})
  .map(([className, styles]) => `.${className} { ${styles} }`)
  .join('\n')}

/* =============================================================================
   COMPONENT STYLES
   ============================================================================= */

${componentCSS}
`

  return cssContent
}

// =============================================================================
// READ COMPONENT CSS
// =============================================================================

function readComponentCSS() {
  try {
    // Read the compiled theme CSS file that contains all component styles
    const themeCSSPath = join(process.cwd(), 'src', 'styles', 'hb-theme.css')
    const componentCSS = readFileSync(themeCSSPath, 'utf8')
    
    // Extract only the component styles (skip CSS variables section)
    const componentStylesMatch = componentCSS.match(/\/\* =============================================================================\s*\n\s*DATATABLE COMPONENT OVERRIDES\s*\n\s*= ============================================================================\s*\n\n([\s\S]*)/)
    
    if (componentStylesMatch) {
      return componentStylesMatch[1]
    } else {
      // If no component styles section found, return everything after CSS variables
      const afterRootMatch = componentCSS.match(/:root\s*\{[\s\S]*?\}\s*\n\s*([\s\S]*)/)
      return afterRootMatch ? afterRootMatch[1] : componentCSS
    }
  } catch (error) {
    console.warn('Warning: Could not read component CSS:', error.message)
    return '/* Component styles not found */'
  }
}



// =============================================================================
// GENERATE CSS LOADER
// =============================================================================

function generateCSSLoader(cssContent) {
  // Escape the CSS content for JavaScript
  const escapedCSS = cssContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')

  const loaderContent = `/**
 * CSS Loader for hb-vue-theme
 * This module provides a way to import and inject CSS styles
 */

// CSS content as a string
const CSS_CONTENT = \`${escapedCSS}\`;

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
`

  return loaderContent
}

// =============================================================================
// GENERATE CSS LOADER (CommonJS)
// =============================================================================

function generateCSSLoaderCJS(cssContent) {
  // Escape the CSS content for JavaScript
  const escapedCSS = cssContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')

  const loaderContent = `/**
 * CSS Loader for hb-vue-theme (CommonJS)
 * This module provides a way to import and inject CSS styles
 */

// CSS content as a string
const CSS_CONTENT = \`${escapedCSS}\`;

/**
 * Inject CSS into the document
 * @param {string} css - CSS content to inject
 * @param {string} id - Optional ID for the style element
 */
function injectCSS(css, id = 'hb-vue-theme-styles') {
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
function loadThemeCSS(id) {
  injectCSS(CSS_CONTENT, id);
}

/**
 * Remove the theme CSS
 * @param {string} id - ID of the style element to remove
 */
function removeThemeCSS(id = 'hb-vue-theme-styles') {
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

module.exports = {
  loadThemeCSS,
  removeThemeCSS,
  injectCSS
};

module.exports.loadThemeCSS = loadThemeCSS;
module.exports.removeThemeCSS = removeThemeCSS;
module.exports.injectCSS = injectCSS;
`

  return loaderContent
}

// =============================================================================
// GENERATE TYPESCRIPT DEFINITIONS
// =============================================================================

function generateTypeScript() {
  const tokenTypes = Object.keys(hbPreset.tokens)
    .map(property => `  '${property}': string;`)
    .join('\n')

  const utilityTypes = Object.keys(hbPreset.utilities || {})
    .map(className => `  '${className}': string;`)
    .join('\n')

  const tsContent = `// =============================================================================
// HB VUE THEME - TYPESCRIPT DEFINITIONS
// =============================================================================

export interface HBDesignTokens {
${tokenTypes}
}

export interface HBUtilities {
${utilityTypes}
}

export interface HBThemePreset {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  tokens: HBDesignTokens;
  utilities: HBUtilities;
  components: Record<string, Record<string, string>>;
}

export class HBThemeInstaller {
  constructor();
  install(options?: { force?: boolean; target?: HTMLElement }): boolean;
  uninstall(target?: HTMLElement): boolean;
  update(newTokens: Partial<HBDesignTokens>, target?: HTMLElement): boolean;
  getInfo(): {
    name: string;
    version: string;
    description: string;
    author: string;
    license: string;
    isInstalled: boolean;
    tokenCount: number;
    utilityCount: number;
  };
  export(): HBThemePreset;
}

export const HBThemePlugin: {
  install(app: any, options?: any): void;
};

export function installHBTheme(options?: {
  autoInstall?: boolean;
  force?: boolean;
  target?: HTMLElement;
  customTokens?: Partial<HBDesignTokens>;
}): HBThemeInstaller;

export function createCustomPreset(
  customTokens?: Partial<HBDesignTokens>,
  customUtilities?: Partial<HBUtilities>
): HBThemePreset;

export function exportAsCSS(preset?: HBThemePreset): string;

export const hbPreset: HBThemePreset;
export const hbDesignTokens: HBDesignTokens;
export const hbPrimeVueTokens: Record<string, string>;

// CSS Loader exports
export function loadThemeCSS(id?: string): void;
export function removeThemeCSS(id?: string): void;
export function injectCSS(css: string, id?: string): void;

export default HBThemeInstaller;
`

  return tsContent
}

// =============================================================================
// WRITE FILES
// =============================================================================

function writeFiles() {
  // Ensure dist directory exists
  const distDir = './dist'
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }

  // Generate CSS content
  const cssContent = generateCSS()
  
  // Write CSS file
  writeFileSync('./dist/theme.css', cssContent)
  console.log('✅ Generated dist/theme.css')

  // Generate and write CSS loader (ESM)
  const loaderContent = generateCSSLoader(cssContent)
  writeFileSync('./dist/css-loader.esm.js', loaderContent)
  console.log('✅ Generated dist/css-loader.esm.js')

  // Generate and write CSS loader (CommonJS)
  const loaderCJSContent = generateCSSLoaderCJS(cssContent)
  writeFileSync('./dist/css-loader.js', loaderCJSContent)
  console.log('✅ Generated dist/css-loader.js')

  // Generate and write TypeScript definitions
  const tsContent = generateTypeScript()
  writeFileSync('./dist/index.d.ts', tsContent)
  console.log('✅ Generated dist/index.d.ts')

  console.log('🎉 All distribution files generated successfully!')
}

// Run the generator
writeFiles() 