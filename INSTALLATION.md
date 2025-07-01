# HB Vue Theme - Installation Guide

## 🚀 Quick Start

### Option 1: NPM Package (Recommended)

```bash
npm install @hb-vue/theme
```

```javascript
// In your main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { installHBTheme } from '@hb-vue/theme'

const app = createApp(App)

app.use(PrimeVue, {
  designTokens: true,
  prefix: 'hb'
})

// Install the theme
installHBTheme({
  autoInstall: true,
  customTokens: {
    '--hb-primary': '#your-brand-color'
  }
})

app.mount('#app')
```

### Option 2: Vue Plugin

```javascript
// In your main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin } from '@hb-vue/theme'

const app = createApp(App)

app.use(PrimeVue, {
  designTokens: true,
  prefix: 'hb'
})

app.use(HBThemePlugin, {
  autoInstall: true,
  customTokens: {
    '--hb-primary': '#your-brand-color'
  }
})

app.mount('#app')
```

### Option 3: CSS Import

```javascript
// Import the CSS directly
import '@hb-vue/theme/css'

// Then use in your components
<style>
.my-component {
  background-color: var(--hb-bg-primary);
  padding: var(--hb-spacing-6);
}
</style>
```

### Option 4: SCSS Import

```scss
// In your main SCSS file
@import '@hb-vue/theme/scss';

.my-component {
  background-color: $hb-bg-primary;
  padding: $hb-spacing-6;
}
```

## 📦 Package Structure

```
@hb-vue/theme/
├── dist/
│   ├── index.js              # CommonJS bundle
│   ├── index.esm.js          # ESM bundle
│   ├── index.d.ts            # TypeScript definitions
│   ├── theme.css             # CSS variables
│   └── theme.scss            # SCSS variables
├── src/
│   ├── styles/
│   │   ├── design-tokens.js  # Design token definitions
│   │   └── theme-installer.js # Theme installer
│   └── index.js              # Main exports
└── preset-installer.js       # Standalone installer
```

## 🎨 Available Exports

### Main Exports

```javascript
import {
  HBThemeInstaller,    // Theme installer class
  HBThemePlugin,       // Vue plugin
  installHBTheme,      // Quick install function
  hbPreset,           // Complete theme preset
  hbDesignTokens,     // Design tokens only
  hbPrimeVueTokens,   // PrimeVue token mappings
  createCustomPreset,  // Create custom preset
  exportAsCSS,        // Export as CSS
  exportAsSCSS        // Export as SCSS
} from '@hb-vue/theme'
```

### Subpath Exports

```javascript
// Import specific parts
import { installHBTheme } from '@hb-vue/theme/preset'
import { hbPreset } from '@hb-vue/theme/tokens'
import '@hb-vue/theme/css'    // CSS variables
import '@hb-vue/theme/scss'   // SCSS variables
```

## 🛠️ Usage Examples

### 1. Basic Installation

```javascript
import { installHBTheme } from '@hb-vue/theme'

// Install with default settings
const theme = installHBTheme()

// Install with custom options
const theme = installHBTheme({
  autoInstall: true,
  force: false,
  customTokens: {
    '--hb-primary': '#6366f1',
    '--hb-secondary': '#8b5cf6'
  }
})
```

### 2. Vue Plugin Installation

```javascript
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin } from '@hb-vue/theme'

const app = createApp(App)

app.use(PrimeVue, {
  designTokens: true,
  prefix: 'hb'
})

app.use(HBThemePlugin, {
  autoInstall: true,
  customTokens: {
    '--hb-primary': '#your-brand-color'
  }
})

app.mount('#app')
```

### 3. Using Design Tokens in Components

```vue
<template>
  <div class="custom-card">
    <h2 class="card-title">Design Token Example</h2>
    <p class="card-content">Using CSS custom properties</p>
  </div>
</template>

<style>
.custom-card {
  background-color: var(--hb-bg-primary);
  padding: var(--hb-spacing-6);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-md);
}

.card-title {
  font-size: var(--hb-font-size-xl);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin-bottom: var(--hb-spacing-4);
}

.card-content {
  font-size: var(--hb-font-size-base);
  color: var(--hb-text-secondary);
  line-height: var(--hb-line-height-relaxed);
}
</style>
```

### 4. Using PrimeFlex Utilities

```vue
<template>
  <div class="hb-p-6 hb-bg-secondary hb-rounded-lg hb-shadow-sm">
    <h3 class="hb-text-primary hb-font-bold hb-mb-3">Utility Classes</h3>
    <p class="hb-text-secondary">Built on top of PrimeFlex</p>
  </div>
</template>
```

### 5. Theme Management

```javascript
import { installHBTheme } from '@hb-vue/theme'

const theme = installHBTheme()

// Get theme information
const info = theme.getInfo()
console.log(info)
// {
//   name: 'hb-theme',
//   version: '1.0.0',
//   isInstalled: true,
//   tokenCount: 150,
//   utilityCount: 25
// }

// Update theme dynamically
theme.update({
  '--hb-primary': '#new-color',
  '--hb-spacing-4': '1.5rem'
})

// Uninstall theme
theme.uninstall()
```

### 6. Creating Custom Presets

```javascript
import { createCustomPreset } from '@hb-vue/theme'

const customTheme = createCustomPreset({
  // Custom color tokens
  '--hb-primary': '#6366f1',
  '--hb-secondary': '#8b5cf6',
  
  // Custom spacing
  '--hb-spacing-custom': '3rem',
  
  // Custom component tokens
  '--button-border-radius': '1rem'
}, {
  // Custom utilities
  'hb-gradient-bg': 'background: linear-gradient(45deg, #6366f1, #8b5cf6)'
})

// Install custom preset
installHBTheme({
  customTokens: customTheme.tokens,
  customUtilities: customTheme.utilities
})
```

### 7. Export Functions

```javascript
import { exportAsCSS, exportAsSCSS, hbPreset } from '@hb-vue/theme'

// Export as CSS variables
const css = exportAsCSS()
console.log(css)
// :root {
//   --hb-primary-50: #eff6ff;
//   --hb-primary-500: #3b82f6;
//   ...
// }

// Export as SCSS variables
const scss = exportAsSCSS()
console.log(scss)
// $hb-primary-50: #eff6ff;
// $hb-primary-500: #3b82f6;
// ...
```

## 🔧 Configuration Options

### Install Options

```javascript
installHBTheme({
  autoInstall: true,        // Auto-install theme (default: true)
  force: false,             // Force reinstallation (default: false)
  target: document.documentElement, // Target element (default: document.documentElement)
  customTokens: {},         // Custom tokens to merge
  customUtilities: {}       // Custom utilities to merge
})
```

### Vue Plugin Options

```javascript
app.use(HBThemePlugin, {
  autoInstall: true,        // Auto-install theme (default: true)
  force: false,             // Force reinstallation (default: false)
  customTokens: {},         // Custom tokens to merge
  customUtilities: {}       // Custom utilities to merge
})
```

## 🎯 Available Design Tokens

### Color Tokens

```css
/* Primary Colors */
--hb-primary-50: #eff6ff;
--hb-primary-500: #3b82f6;
--hb-primary-900: #1e3a8a;

/* Semantic Colors */
--hb-success: #22c55e;
--hb-warning: #f59e0b;
--hb-danger: #ef4444;
--hb-info: #0ea5e9;

/* Text Colors */
--hb-text-primary: #171717;
--hb-text-secondary: #525252;
--hb-text-muted: #737373;
```

### Typography Tokens

```css
/* Font Families */
--hb-font-family-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Font Sizes */
--hb-font-size-xs: 0.75rem;
--hb-font-size-base: 1rem;
--hb-font-size-2xl: 1.5rem;

/* Font Weights */
--hb-font-weight-normal: 400;
--hb-font-weight-medium: 500;
--hb-font-weight-bold: 700;
```

### Spacing Tokens

```css
/* Spacing Scale (4px grid) */
--hb-spacing-1: 0.25rem;
--hb-spacing-4: 1rem;
--hb-spacing-8: 2rem;
--hb-spacing-16: 4rem;
```

### Component Tokens

```css
/* Button Tokens */
--button-padding: var(--hb-spacing-3) var(--hb-spacing-4);
--button-border-radius: var(--hb-border-radius-md);
--button-font-weight: var(--hb-font-weight-medium);

/* Input Tokens */
--input-padding: var(--hb-spacing-3) var(--hb-spacing-4);
--input-border-radius: var(--hb-border-radius-md);
--input-border-color: var(--hb-border-medium);
```

## 🎨 Available Utilities

### Spacing Utilities

```css
.hb-p-1, .hb-p-2, .hb-p-3, .hb-p-4, .hb-p-5, .hb-p-6  /* Padding */
.hb-m-1, .hb-m-2, .hb-m-3, .hb-m-4, .hb-m-5, .hb-m-6  /* Margin */
```

### Color Utilities

```css
.hb-text-primary, .hb-text-secondary, .hb-text-muted    /* Text colors */
.hb-bg-primary, .hb-bg-secondary, .hb-bg-tertiary       /* Background colors */
```

### Border Radius Utilities

```css
.hb-rounded-sm, .hb-rounded, .hb-rounded-md, .hb-rounded-lg, .hb-rounded-xl, .hb-rounded-full
```

### Shadow Utilities

```css
.hb-shadow-sm, .hb-shadow, .hb-shadow-md, .hb-shadow-lg, .hb-shadow-xl
```

## 🔄 Migration from Other Themes

### From PrimeVue 3 Unstyled Mode

```javascript
// Before (PrimeVue 3)
app.use(PrimeVue, {
  unstyled: true,
  pt: {
    // Component-specific class mappings
  }
})

// After (PrimeVue 4 + HB Theme)
app.use(PrimeVue, {
  designTokens: true,
  prefix: 'hb'
})

installHBTheme()
```

### From Custom CSS Variables

```css
/* Before */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
}

/* After - Use HB theme tokens */
.my-component {
  background-color: var(--hb-primary);
  color: var(--hb-text-primary);
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Theme not applying**: Make sure PrimeVue is configured with `designTokens: true`
2. **Custom tokens not working**: Check that tokens are properly formatted with `--hb-` prefix
3. **Utilities not available**: Ensure PrimeFlex is installed and imported
4. **TypeScript errors**: Install the package and use the provided type definitions

### Debug Mode

```javascript
import { installHBTheme } from '@hb-vue/theme'

const theme = installHBTheme({
  autoInstall: true
})

// Enable debug logging
console.log('Theme Info:', theme.getInfo())
console.log('Applied Tokens:', Object.keys(theme.preset.tokens))
```

## 📚 Additional Resources

- [PrimeVue 4 Documentation](https://primevue.org/)
- [PrimeFlex Documentation](https://primevue.org/primeflex/)
- [CSS Custom Properties MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Check the [PrimeVue documentation](https://primevue.org/)
- Review the [Vue.js documentation](https://vuejs.org/)

---

**Happy theming with HB Vue Theme! 🎨** 