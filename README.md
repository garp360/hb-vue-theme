# HB Vue Theme - PrimeVue 4 Design Token System

A custom theme for PrimeVue 4 using the new **Design Token System** and **PrimeFlex** utilities. This theme demonstrates how to create installable presets that can be easily integrated into any Vue 3 + PrimeVue 4 project.

## 🚀 Features

- **PrimeVue 4 Design Tokens**: Uses the new design token system for consistent theming
- **PrimeFlex Integration**: Custom utility classes built on top of PrimeFlex
- **Installable Preset**: Easy installation in any Vue 3 + PrimeVue 4 project
- **Custom Prefix**: Uses 'hb' prefix for all components and utilities
- **Comprehensive Design System**: Complete color palette, typography, spacing, and component tokens
- **Global Size Presets**: Scale all components with a single CSS class or variable
- **TypeScript Support**: Full TypeScript support for design tokens
- **Responsive Design**: Mobile-first responsive design system
- **Accessibility Features**: Built-in support for high contrast and reduced motion

## 📦 Installation

### 1. Install Dependencies

```bash
npm install primevue@^4.0.0 primeflex@^3.3.1 primeicons@^6.0.0
```

### 2. Install HB Theme

```bash
npm install hb-vue-theme
```

### 3. Setup in Your Vue App

#### Option A: Using the Published Library (Recommended)

This is the exact configuration used in the demo app:

```javascript
// In your main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

// Import our published theme library
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

// Import PrimeFlex for utility classes
import 'primeflex/primeflex.css'

// Import PrimeIcons
import 'primeicons/primeicons.css'

// Import our published theme CSS (choose one method below)
import 'hb-vue-theme/css'  // Method 1: Direct import (works with Vite/Webpack)
// OR
import 'hb-vue-theme/dist/theme.css'  // Method 2: Direct path import
// OR
import 'hb-vue-theme/scss'  // Method 3: SCSS import (if using SCSS)

// Import our main App component
import App from './App.vue'

// Create Vue app
const app = createApp(App)

// Configure PrimeVue with unstyled mode and PassThrough
app.use(PrimeVue, {
  // Use unstyled mode to completely replace CSS classes
  unstyled: true,
  
  // Configure component prefix
  prefix: 'hb',
  
  // Enable ripple effects
  ripple: true,
  
  // Configure input styles
  inputStyle: 'filled',
  
  // PassThrough configuration to map our custom classes
  pt: passthroughConfig
})

// Install our custom theme
app.use(HBThemePlugin, {
  autoInstall: true,
  force: false
})

// Register global directives
app.directive('tooltip', Tooltip)

// Mount the app
app.mount('#app')
```

**Alternative CSS Import Methods:**

If the direct CSS import doesn't work in your environment, you can use these alternatives:

1. **HTML Link Tag** (works in any environment):
```html
<!-- In your index.html -->
<link rel="stylesheet" href="node_modules/hb-vue-theme/dist/theme.css">
```

2. **Copy CSS to your project**:
```bash
# Copy the CSS file to your public directory
cp node_modules/hb-vue-theme/dist/theme.css public/hb-theme.css
```
Then import it in your HTML:
```html
<link rel="stylesheet" href="/hb-theme.css">
```

3. **Import in your main CSS file**:
```css
/* In your main.css or App.vue style section */
@import 'hb-vue-theme/dist/theme.css';
```

4. **Using the theme installer with CSS**:
```javascript
import { installHBTheme } from 'hb-vue-theme/preset'

// This will automatically inject the CSS
installHBTheme({
  autoInstall: true,
  injectCSS: true  // Automatically injects the CSS
})
```

#### Option B: Using Design Tokens Only

```javascript
// Import just the design tokens
import { hbPreset } from 'hb-vue-theme/tokens'

// Apply tokens to document
Object.entries(hbPreset.tokens).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value)
})
```

#### Option C: Using Preset Installer

```javascript
// Import the preset installer
import { installHBTheme } from 'hb-vue-theme/preset'

// Install the theme
const theme = installHBTheme({
  autoInstall: true,
  customTokens: {
    // Add your custom tokens here
    '--hb-primary': '#your-custom-color'
  }
})
```

## 🎨 Design Token System

### Color Tokens

The theme includes a comprehensive color system:

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

## 🛠️ Usage

### Using Design Tokens in Components

```vue
<template>
  <div class="custom-component">
    <h1 class="title">My Component</h1>
    <p class="description">Using design tokens</p>
  </div>
</template>

<style>
.custom-component {
  background-color: var(--hb-bg-primary);
  padding: var(--hb-spacing-6);
  border-radius: var(--hb-border-radius-lg);
}

.title {
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin-bottom: var(--hb-spacing-4);
}

.description {
  font-size: var(--hb-font-size-base);
  color: var(--hb-text-secondary);
  line-height: var(--hb-line-height-relaxed);
}
</style>
```

### Using PrimeFlex Utilities

```vue
<template>
  <div class="hb-p-6 hb-bg-primary hb-rounded-lg hb-shadow-md">
    <h2 class="hb-text-primary hb-font-bold hb-mb-4">Card Title</h2>
    <p class="hb-text-secondary">Card content using PrimeFlex utilities</p>
  </div>
</template>
```

## 📏 Global Size Presets

The HB Vue Theme includes a powerful global size system that allows you to scale all components with a single CSS class or variable change.

### Quick Usage

```html
<!-- Apply to entire page -->
<html class="hb-size-lg">
  <body>
    <!-- All components will be 25% larger -->
  </body>
</html>

<!-- Apply to specific section -->
<div class="hb-size-sm">
  <!-- Only components in this div will be smaller -->
</div>
```

### Available Size Presets

| Class | Size Multiplier | Font Multiplier | Description |
|-------|----------------|-----------------|-------------|
| `.hb-size-xs` | 0.75 (75%) | 0.875 (87.5%) | Extra Small - Compact UI |
| `.hb-size-sm` | 0.875 (87.5%) | 0.9375 (93.75%) | Small - Reduced size |
| `.hb-size-normal` | 1.0 (100%) | 1.0 (100%) | Normal - Default size |
| `.hb-size-lg` | 1.25 (125%) | 1.125 (112.5%) | Large - Enhanced size |
| `.hb-size-xl` | 1.5 (150%) | 1.25 (125%) | Extra Large - Maximum size |

### Responsive Size Changes

```css
/* Mobile: Smaller sizes for better touch targets */
@media (max-width: 640px) {
    :root {
        --hb-size-multiplier: 0.875;
        --hb-font-size-multiplier: 0.9375;
    }
}
```

### Accessibility Features

```css
/* High contrast mode - larger for better visibility */
@media (prefers-contrast: high) {
    :root {
        --hb-size-multiplier: 1.125;
        --hb-font-size-multiplier: 1.125;
    }
}
```

For complete documentation, see [SIZE_PRESETS.md](./SIZE_PRESETS.md).

## 🛠️ Usage

### Using PassThrough Configuration

The theme includes a comprehensive PassThrough configuration that maps PrimeVue's internal component structure to our custom `hb-` prefixed classes. This ensures complete control over styling while maintaining the same component structure.

#### Basic Usage

```javascript
// In your main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { passthroughConfig } from '@hb-vue/theme'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

app.mount('#app')
```

#### Customizing PassThrough Configuration

```javascript
import { passthroughConfig, mergePassthroughConfig } from '@hb-vue/theme'

// Merge with custom configuration
const customPassthrough = mergePassthroughConfig({
  button: {
    root: { class: 'my-custom-button' },
    label: { class: 'my-custom-button-label' }
  }
})

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: customPassthrough
})
```

#### Using Specific Component Configurations

```javascript
import { getPassthroughConfig } from '@hb-vue/theme'

// Get configuration for specific components only
const datatableConfig = getPassthroughConfig(['datatable', 'column'])

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: datatableConfig
})
```

#### Available PassThrough Mappings

The PassThrough configuration includes mappings for all major PrimeVue components:

- **DataTable**: `datatable`, `column`
- **Form Components**: `button`, `inputtext`, `select`, `inputnumber`, `checkbox`, `radiobutton`, `textarea`, `password`, `multiselect`
- **Layout Components**: `panel`, `card`, `divider`
- **Overlay Components**: `dialog`, `overlaypanel`, `sidebar`, `tooltip`
- **Navigation Components**: `menu`, `tabview`, `accordion`
- **Data Display**: `message`, `toast`, `confirmdialog`
- **File Upload**: `fileupload`
- **Input Components**: `rating`, `slider`, `togglebutton`, `tristatecheckbox`
- **Tree Components**: `tree`, `treetable`

### Customizing the Theme

```javascript
// Create a custom preset
import { createCustomPreset } from './preset-installer.js'

const customPreset = createCustomPreset({
  // Custom color tokens
  '--hb-primary': '#6366f1',
  '--hb-secondary': '#8b5cf6',
  
  // Custom spacing
  '--hb-spacing-custom': '3rem',
  
  // Custom component tokens
  '--button-border-radius': '1rem'
}, {
  // Custom PrimeFlex utilities
  'hb-custom-utility': 'background: linear-gradient(45deg, #6366f1, #8b5cf6)'
})

// Install custom preset
installHBTheme({
  customTokens: customPreset.tokens,
  customUtilities: customPreset.utilities
})
```

## 📁 Project Structure

```
hbvue-theme-1/
├── src/
│   ├── styles/
│   │   ├── design-tokens.js          # Design token definitions
│   │   ├── theme-installer.js        # Theme installer for Vue
│   │   └── variables.scss            # Legacy SASS variables
│   ├── components/
│   │   └── DataTableDemo.vue         # Example component
│   ├── App.vue                       # Main app component
│   └── main.js                       # App entry point
├── preset-installer.js               # Standalone preset installer
├── package.json                      # Dependencies
└── README.md                         # This file
```

## 🔧 Configuration

### PrimeVue Configuration

```javascript
app.use(PrimeVue, {
  // Enable design tokens
  designTokens: true,
  
  // Set component prefix
  prefix: 'hb',
  
  // Enable ripple effects
  ripple: true,
  
  // Configure input styles
  inputStyle: 'filled'
})
```

### Vite Configuration

```javascript
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
}
```

## 🎯 Available Utilities

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

## 🔄 Theme Management

### Getting Theme Information

```javascript
// Get theme info
const themeInfo = theme.getInfo()
console.log(themeInfo)
// {
//   name: 'hb-theme',
//   version: '1.0.0',
//   isInstalled: true,
//   tokenCount: 150,
//   utilityCount: 25
// }
```

### Updating Theme

```javascript
// Update specific tokens
theme.update({
  '--hb-primary': '#new-color',
  '--hb-spacing-4': '1.5rem'
})
```

### Uninstalling Theme

```javascript
// Remove theme completely
theme.uninstall()
```

## 📤 Exporting Themes

### Export as CSS Variables

```javascript
import { exportAsCSS } from './preset-installer.js'

const cssVariables = exportAsCSS()
console.log(cssVariables)
// :root {
//   --hb-primary-50: #eff6ff;
//   --hb-primary-500: #3b82f6;
//   ...
// }
```

### Export as SCSS Variables

```javascript
import { exportAsSCSS } from './preset-installer.js'

const scssVariables = exportAsSCSS()
console.log(scssVariables)
// $hb-primary-50: #eff6ff;
// $hb-primary-500: #3b82f6;
// ...
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hbvue-theme-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View the demo**
   Open `http://localhost:5173` to see the themed DataTable component.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [PrimeVue](https://primevue.org/) for the excellent component library
- [PrimeFlex](https://primevue.org/primeflex/) for the utility-first CSS framework
- [Vue.js](https://vuejs.org/) for the progressive JavaScript framework

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the [PrimeVue documentation](https://primevue.org/)
- Review the [Vue.js documentation](https://vuejs.org/)

---

**Built with ❤️ using Vue 3, PrimeVue 4, and Design Tokens** 