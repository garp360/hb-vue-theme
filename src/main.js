import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

// Import PrimeVue components
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import DatePicker from 'primevue/datepicker'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Message from 'primevue/message'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'
import Chip from 'primevue/chip'

// Import our linked theme library (as consumers would)
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

// Import PrimeFlex for utility classes
import 'primeflex/primeflex.css'

// Import PrimeIcons
import 'primeicons/primeicons.css'

// Import our linked theme styles (as consumers would)
import 'hb-vue-theme/css'

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
  ripple: false,
  
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

// Register PrimeVue components globally
app.component('Checkbox', Checkbox)
app.component('RadioButton', RadioButton)
app.component('Textarea', Textarea)
app.component('DatePicker', DatePicker)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Select', Select)
app.component('Message', Message)
app.component('Card', Card)
app.component('Panel', Panel)
app.component('Dialog', Dialog)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Paginator', Paginator)
app.component('Chip', Chip)

// Mount the app
app.mount('#app')

// Note: Theme installer and PassThrough configuration are now imported from the linked npm package
// This ensures the demo uses the same code that consumers will get from npm 