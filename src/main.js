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

// Note: Theme installer and PassThrough configuration are now available from 'hb-vue-theme' package 