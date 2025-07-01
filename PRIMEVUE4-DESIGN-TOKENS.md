# PrimeVue 4 Design Token System - HB Theme Implementation

## 🎯 Overview

This document explains how we've converted our custom PrimeVue theme to use **PrimeVue 4's new Design Token System** instead of the old unstyled mode approach. This provides a more modern, maintainable, and installable theme solution.

## 🔄 Migration from Unstyled Mode to Design Tokens

### Before (PrimeVue 3 + Unstyled Mode)
```javascript
// Old approach - Unstyled mode
app.use(PrimeVue, {
  unstyled: true,
  pt: {
    // Component-specific class mappings
  }
})
```

### After (PrimeVue 4 + Design Tokens)
```javascript
// New approach - Design tokens
app.use(PrimeVue, {
  designTokens: true,
  prefix: 'hb'
})
```

## 🏗️ Architecture Overview

### 1. Design Token Definition (`src/styles/design-tokens.js`)

```javascript
export const hbDesignTokens = {
  // Color tokens
  '--hb-primary-500': '#3b82f6',
  '--hb-secondary-500': '#64748b',
  
  // Typography tokens
  '--hb-font-family-primary': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  '--hb-font-size-base': '1rem',
  
  // Spacing tokens
  '--hb-spacing-4': '1rem',
  '--hb-spacing-8': '2rem',
  
  // Component tokens
  '--button-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--input-border-radius': 'var(--hb-border-radius-md)'
}
```

### 2. PrimeVue Token Mapping

```javascript
export const hbPrimeVueTokens = {
  // Map our tokens to PrimeVue's expected names
  '--primary-color': 'var(--hb-primary)',
  '--surface-ground': 'var(--hb-bg-secondary)',
  '--text-color': 'var(--hb-text-primary)',
  '--border-radius': 'var(--hb-border-radius-md)'
}
```

### 3. Theme Installer (`src/styles/theme-installer.js`)

```javascript
export class HBThemeInstaller {
  install(options = {}) {
    // Apply design tokens to document
    this.applyDesignTokens(target)
    
    // Apply PrimeFlex utilities
    this.applyPrimeFlexUtilities()
    
    // Apply component-specific tokens
    this.applyComponentTokens(target)
  }
}
```

## 🎨 Design Token Categories

### 1. Color System
- **Primary Colors**: 10 shades (50-900)
- **Secondary Colors**: 10 shades (50-900)
- **Semantic Colors**: Success, Warning, Danger, Info
- **Neutral Colors**: 10 shades (50-900)
- **Text Colors**: Primary, Secondary, Muted, Disabled
- **Background Colors**: Primary, Secondary, Tertiary, Overlay

### 2. Typography System
- **Font Families**: Primary, Mono
- **Font Sizes**: XS to 4XL (8 sizes)
- **Font Weights**: Light to Bold (5 weights)
- **Line Heights**: Tight, Normal, Relaxed

### 3. Spacing System
- **4px Grid**: 0 to 24 spacing units
- **Consistent Scale**: 0.25rem to 6rem

### 4. Component System
- **Border Radius**: None to Full (8 sizes)
- **Shadows**: SM to XL (5 levels)
- **Transitions**: Fast, Base, Slow
- **Z-Index**: Dropdown to Tooltip (7 levels)

## 🛠️ Implementation Benefits

### 1. **Installable Presets**
```javascript
// Easy installation in any project
import { installHBTheme } from './preset-installer.js'

const theme = installHBTheme({
  autoInstall: true,
  customTokens: {
    '--hb-primary': '#your-brand-color'
  }
})
```

### 2. **PrimeFlex Integration**
```css
/* Custom utility classes */
.hb-p-4 { padding: var(--hb-spacing-4); }
.hb-bg-primary { background-color: var(--hb-bg-primary); }
.hb-rounded-lg { border-radius: var(--hb-border-radius-lg); }
```

### 3. **Component-Specific Tokens**
```javascript
components: {
  button: {
    '--button-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
    '--button-border-radius': 'var(--hb-border-radius-md)'
  },
  input: {
    '--input-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
    '--input-border-color': 'var(--hb-border-medium)'
  }
}
```

## 📦 Package Structure

```
hbvue-theme-1/
├── src/
│   ├── styles/
│   │   ├── design-tokens.js          # 🎨 Design token definitions
│   │   ├── theme-installer.js        # 🔧 Vue plugin installer
│   │   └── variables.scss            # 📝 Legacy SASS (for reference)
│   └── components/
│       └── DataTableDemo.vue         # 📊 Example component
├── preset-installer.js               # 📦 Standalone installer
├── package.json                      # 📋 Dependencies
└── README.md                         # 📖 Documentation
```

## 🚀 Usage Examples

### 1. Basic Installation
```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin } from './src/styles/theme-installer.js'

const app = createApp(App)

app.use(PrimeVue, {
  designTokens: true,
  prefix: 'hb'
})

app.use(HBThemePlugin, {
  autoInstall: true
})

app.mount('#app')
```

### 2. Using Design Tokens in Components
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

### 3. Using PrimeFlex Utilities
```vue
<template>
  <div class="hb-p-6 hb-bg-secondary hb-rounded-lg hb-shadow-sm">
    <h3 class="hb-text-primary hb-font-bold hb-mb-3">Utility Classes</h3>
    <p class="hb-text-secondary">Built on top of PrimeFlex</p>
  </div>
</template>
```

### 4. Custom Theme Creation
```javascript
import { createCustomPreset } from './preset-installer.js'

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
```

## 🔧 Advanced Features

### 1. Theme Management
```javascript
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

### 2. Export Functions
```javascript
import { exportAsCSS, exportAsSCSS } from './preset-installer.js'

// Export as CSS variables
const css = exportAsCSS()
// :root {
//   --hb-primary-50: #eff6ff;
//   --hb-primary-500: #3b82f6;
//   ...
// }

// Export as SCSS variables
const scss = exportAsSCSS()
// $hb-primary-50: #eff6ff;
// $hb-primary-500: #3b82f6;
// ...
```

## 🎯 Key Advantages

### 1. **Modern Architecture**
- Uses CSS custom properties (CSS variables)
- Leverages PrimeVue 4's design token system
- Integrates with PrimeFlex utility framework

### 2. **Easy Distribution**
- Single preset file for installation
- No complex build processes
- Works in any Vue 3 + PrimeVue 4 project

### 3. **Flexible Customization**
- Easy token overrides
- Component-specific customization
- Dynamic theme updates

### 4. **Better Performance**
- No runtime CSS-in-JS overhead
- Leverages native CSS custom properties
- Efficient utility class generation

### 5. **Developer Experience**
- TypeScript support
- IntelliSense for design tokens
- Clear documentation and examples

## 🔮 Future Enhancements

### 1. **Dark Mode Support**
```javascript
// Future implementation
const darkModeTokens = {
  '--hb-bg-primary': '#1a1a1a',
  '--hb-text-primary': '#ffffff',
  '--hb-border-light': '#333333'
}
```

### 2. **Theme Variants**
```javascript
// Future implementation
const themeVariants = {
  modern: { /* modern design tokens */ },
  classic: { /* classic design tokens */ },
  minimal: { /* minimal design tokens */ }
}
```

### 3. **Design Token Validation**
```javascript
// Future implementation
import { validateTokens } from './token-validator.js'

const isValid = validateTokens(customTokens)
```

## 📚 Resources

- [PrimeVue 4 Documentation](https://primevue.org/)
- [PrimeFlex Documentation](https://primevue.org/primeflex/)
- [CSS Custom Properties MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)

---

**This implementation demonstrates the power and flexibility of PrimeVue 4's design token system, providing a modern, maintainable, and installable theme solution.** 