# HB Vue Theme - Styles Import Examples

This document shows all the different ways to import and use the HB Vue Theme styles in your application.

## 1. Auto-Inject CSS (Recommended)

The simplest way to use the theme is to auto-inject the CSS:

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

// Auto-inject the theme CSS
import 'hb-vue-theme/styles'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

app.use(HBThemePlugin)
app.mount('#app')
```

## 2. Manual CSS Control

For more control over when and how CSS is injected:

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'
import { loadThemeCSS, removeThemeCSS, injectCSS } from 'hb-vue-theme/styles'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

app.use(HBThemePlugin)

// Manually load the theme CSS
loadThemeCSS()

// Later, you can remove it if needed
// removeThemeCSS()

// Or inject custom CSS
// injectCSS('your-custom-css-here')

app.mount('#app')
```

## 3. Direct CSS Import

Import the CSS file directly (useful for build tools):

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

// Import CSS directly
import 'hb-vue-theme/css'

const app = createApp(App)
// ... rest of setup
```

## 4. HTML Link Tag

Include the CSS via HTML link tag:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HB Vue Theme Demo</title>
  
  <!-- Include the theme CSS -->
  <link rel="stylesheet" href="node_modules/hb-vue-theme/dist/theme.css">
  
  <!-- Or use a CDN -->
  <!-- <link rel="stylesheet" href="https://unpkg.com/hb-vue-theme@1.0.6/dist/theme.css"> -->
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

## 5. SCSS Import

Import the SCSS file for custom styling:

```scss
// styles/main.scss
@import "hb-vue-theme/scss";

// Your custom styles here
.custom-component {
  background-color: $hb-primary;
  color: $hb-text-inverse;
}
```

## 6. Theme Installer with CSS Injection

Use the theme installer with built-in CSS injection:

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

// Install theme with CSS injection
app.use(HBThemePlugin, {
  autoInstall: true,
  force: false
})

app.mount('#app')
```

## 7. Conditional CSS Loading

Load CSS conditionally based on user preferences:

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'
import { loadThemeCSS, removeThemeCSS } from 'hb-vue-theme/styles'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

app.use(HBThemePlugin)

// Load theme based on user preference
const userPrefersTheme = localStorage.getItem('theme-preference')
if (userPrefersTheme === 'hb-theme') {
  loadThemeCSS()
}

// Theme switcher function
window.switchTheme = (themeName) => {
  removeThemeCSS() // Remove current theme
  
  if (themeName === 'hb-theme') {
    loadThemeCSS()
    localStorage.setItem('theme-preference', 'hb-theme')
  }
}

app.mount('#app')
```

## 8. SSR/SSG Compatible Import

For server-side rendering, use conditional imports:

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

app.use(HBThemePlugin)

// Only import styles on client side
if (typeof window !== 'undefined') {
  import('hb-vue-theme/styles')
}

app.mount('#app')
```

## 9. Vite/Webpack Configuration

Configure your build tool to handle the CSS:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "hb-vue-theme/scss";`
      }
    }
  }
})
```

## 10. Complete Example

Here's a complete example showing all the pieces working together:

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

// Import our published theme library
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

// Import PrimeFlex for utility classes
import 'primeflex/primeflex.css'

// Import PrimeIcons
import 'primeicons/primeicons.css'

// Import our published theme styles (auto-injects CSS)
import 'hb-vue-theme/styles'

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

## Summary

The recommended approach is **Method 1** (auto-inject CSS) for most applications, as it's the simplest and most reliable. Use **Method 2** (manual control) when you need more control over CSS injection timing or want to implement theme switching.

All methods will work with the published `hb-vue-theme@1.0.6` package and provide the same CSS variables and utility classes. 