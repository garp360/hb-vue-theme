# HB Vue Theme - Complete Usage Guide

## Table of Contents

1. [Overview](#overview)
2. [Design Principles](#design-principles)
3. [Installation](#installation)
4. [Quick Start](#quick-start)
5. [Component Coverage](#component-coverage)
6. [Usage Examples](#usage-examples)
7. [PassThrough Configuration](#passthrough-configuration)
8. [Design Tokens](#design-tokens)
9. [Size Presets](#size-presets)
10. [Customization](#customization)
11. [Scripts & Tools](#scripts--tools)
12. [Best Practices](#best-practices)
13. [Troubleshooting](#troubleshooting)
14. [Migration Guide](#migration-guide)

## Overview

The HB Vue Theme is a comprehensive design system for PrimeVue 4 that provides:

- **Complete component coverage** for 35+ PrimeVue components
- **Consistent design tokens** based on PrimeVue's Lara preset
- **Flexible PassThrough configuration** for complete styling control
- **Multiple size presets** for accessibility and responsive design
- **Easy customization** with CSS custom properties
- **Production-ready** with optimized builds and TypeScript support

## Design Principles

### 🎨 **Lara Color Palette**
Based on PrimeVue's Lara preset with a modern, professional color scheme:

```css
/* Primary Colors */
--hb-primary: #3b82f6;      /* Modern blue */
--hb-secondary: #64748b;     /* Neutral slate */
--hb-success: #22c55e;       /* Positive green */
--hb-warning: #f59e0b;       /* Caution amber */
--hb-danger: #ef4444;        /* Error red */
--hb-info: #0ea5e9;          /* Information sky */
```

### 📏 **Standard PrimeVue Sizing**
- **Font Sizes**: Standard PrimeVue scale (16px base)
- **Spacing**: Standard PrimeVue spacing (16px base unit)
- **Component Heights**: Standard PrimeVue component sizes
- **Padding**: Standard PrimeVue padding values

### 🎯 **Design Principles**
- **Consistency**: All components follow PrimeVue's standard sizing
- **Accessibility**: WCAG 2.1 AA compliant color contrast
- **Modern**: Clean, professional appearance
- **Flexible**: Easy to customize and extend

## Installation

### Basic Installation

```bash
npm install hb-vue-theme
```

### Peer Dependencies

```json
{
  "dependencies": {
    "vue": "^3.0.0",
    "primevue": "^4.0.0"
  }
}
```

## Quick Start

### 1. Basic Setup

```javascript
// main.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { HBThemePlugin, passthroughConfig } from 'hb-vue-theme'

// Import styles
import 'hb-vue-theme/css'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  prefix: 'hb',
  pt: passthroughConfig
})

app.use(HBThemePlugin)
app.mount('#app')
```

### 2. Component Usage

```vue
<template>
  <div class="app-container">
    <!-- Basic components with theme styling -->
    <Button label="Primary Action" severity="primary" />
    <InputText v-model="text" placeholder="Enter text..." />
    <Card>
      <template #title>Card Title</template>
      <template #content>Card content goes here</template>
    </Card>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
</script>
```

## Component Coverage

### ✅ **Core Components (100% Coverage)**

#### Form Components
- **Button** - All variants, sizes, and states
- **InputText** - Text, number, search, file inputs
- **Select** - Dropdown, multi-select, filterable
- **Checkbox** - Binary, switch variants
- **RadioButton** - Standard, button variants
- **Textarea** - Auto-resize, validation states
- **DatePicker** - Date, time, range selection
- **Chip** - Text, icon, image, removable

#### Layout Components
- **Panel** - Collapsible, toggleable panels
- **Card** - Elevated, outlined, flat variants
- **Dialog** - Modal, responsive, draggable
- **Drawer** - Side navigation panels
- **Popover** - Contextual overlay panels
- **Tooltip** - Hover tooltips with positions

#### Data Display
- **DataTable** - Sorting, filtering, pagination
- **Message** - Info, success, warning, error
- **Toast** - Notification system
- **ProgressBar** - Linear, circular progress
- **Badge** - Status indicators
- **Avatar** - User avatars with images/text

#### Navigation
- **Menu** - Horizontal, vertical, popup menus
- **TabView** - Tabbed interfaces
- **Accordion** - Collapsible content sections
- **Paginator** - Data pagination controls

### 🎨 **Component Variants**

Each component supports multiple variants:

```vue
<!-- Button Variants -->
<Button label="Primary" severity="primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Warning" severity="warning" />
<Button label="Danger" severity="danger" />
<Button label="Info" severity="info" />

<!-- Button Sizes -->
<Button label="Small" size="small" />
<Button label="Normal" />
<Button label="Large" size="large" />

<!-- Button Styles -->
<Button label="Outlined" outlined />
<Button label="Text" text />
<Button label="Link" link />
```

## Usage Examples

### Form Components

```vue
<template>
  <div class="form-container">
    <!-- Input Components -->
    <div class="form-group">
      <label>Username</label>
      <InputText v-model="form.username" placeholder="Enter username" />
    </div>
    
    <div class="form-group">
      <label>Email</label>
      <InputText v-model="form.email" type="email" placeholder="Enter email" />
    </div>
    
    <!-- Select Component -->
    <div class="form-group">
      <label>Role</label>
      <Select v-model="form.role" :options="roleOptions" optionLabel="name" placeholder="Select role" />
    </div>
    
    <!-- Checkbox -->
    <div class="form-group">
      <Checkbox v-model="form.agreement" :binary="true" />
      <label>I agree to the terms</label>
    </div>
    
    <!-- Submit Button -->
    <Button label="Submit" severity="success" @click="submitForm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = ref({
  username: '',
  email: '',
  role: null,
  agreement: false
})

const roleOptions = ref([
  { name: 'Admin', value: 'admin' },
  { name: 'User', value: 'user' },
  { name: 'Editor', value: 'editor' }
])

const submitForm = () => {
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
</style>
```

### Data Display Components

```vue
<template>
  <div class="data-display">
    <!-- DataTable -->
    <DataTable :value="products" :paginator="true" :rows="10" 
               :rowsPerPageOptions="[5, 10, 20]" responsiveLayout="scroll">
      <Column field="name" header="Name" sortable></Column>
      <Column field="category" header="Category" sortable></Column>
      <Column field="price" header="Price" sortable>
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" text size="small" @click="editProduct(slotProps.data)" />
          <Button icon="pi pi-trash" text severity="danger" size="small" @click="deleteProduct(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
    
    <!-- Messages -->
    <Message v-if="message" :severity="message.severity" :closable="true" @close="message = null">
      {{ message.text }}
    </Message>
    
    <!-- Progress Bar -->
    <ProgressBar :value="progress" :showValue="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Message from 'primevue/message'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const products = ref([
  { id: 1, name: 'Product 1', category: 'Electronics', price: 299.99 },
  { id: 2, name: 'Product 2', category: 'Clothing', price: 49.99 },
  // ... more products
])

const message = ref(null)
const progress = ref(75)

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

const editProduct = (product) => {
  message.value = { severity: 'info', text: `Editing ${product.name}` }
}

const deleteProduct = (product) => {
  message.value = { severity: 'warn', text: `Deleting ${product.name}` }
}
</script>
```

### Layout Components

```vue
<template>
  <div class="layout-example">
    <!-- Card Layout -->
    <div class="card-grid">
      <Card v-for="item in items" :key="item.id" class="item-card">
        <template #header>
          <img :src="item.image" :alt="item.title" class="card-image" />
        </template>
        <template #title>{{ item.title }}</template>
        <template #content>
          <p>{{ item.description }}</p>
        </template>
        <template #footer>
          <Button label="Learn More" text />
          <Button label="Buy Now" severity="success" />
        </template>
      </Card>
    </div>
    
    <!-- Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Product Details" :style="{ width: '50vw' }">
      <div v-if="selectedItem">
        <h3>{{ selectedItem.title }}</h3>
        <p>{{ selectedItem.description }}</p>
        <div class="dialog-actions">
          <Button label="Close" text @click="showDialog = false" />
          <Button label="Add to Cart" severity="success" @click="addToCart" />
        </div>
      </div>
    </Dialog>
    
    <!-- Tooltip -->
    <Button label="Hover for info" v-tooltip.top="'This is a helpful tooltip'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Tooltip from 'primevue/tooltip'

const items = ref([
  { id: 1, title: 'Product 1', description: 'Description 1', image: '/image1.jpg' },
  { id: 2, title: 'Product 2', description: 'Description 2', image: '/image2.jpg' },
])

const showDialog = ref(false)
const selectedItem = ref(null)

const addToCart = () => {
  // Add to cart logic
  showDialog.value = false
}
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.item-card {
  transition: transform 0.2s;
}

.item-card:hover {
  transform: translateY(-2px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.dialog-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
```

## PassThrough Configuration

The theme uses PrimeVue's PassThrough system to map component structure to custom CSS classes.

### Basic PassThrough Usage

```javascript
// main.js
import { passthroughConfig } from 'hb-vue-theme'

app.use(PrimeVue, {
  unstyled: true,
  pt: passthroughConfig
})
```

### Custom PassThrough Configuration

```javascript
import { passthroughConfig, mergePassthroughConfig } from 'hb-vue-theme'

// Merge with custom configuration
const customPassthrough = mergePassthroughConfig({
  button: {
    root: { class: 'my-custom-button' },
    label: { class: 'my-custom-button-label' }
  }
})

app.use(PrimeVue, {
  unstyled: true,
  pt: customPassthrough
})
```

### Component-Specific Configuration

```javascript
import { getPassthroughConfig } from 'hb-vue-theme'

// Get configuration for specific components only
const datatableConfig = getPassthroughConfig(['datatable', 'column'])

app.use(PrimeVue, {
  unstyled: true,
  pt: datatableConfig
})
```

### Available PassThrough Mappings

```javascript
// Example of available mappings
const passthroughConfig = {
  button: {
    root: ({ props }) => {
      const classes = ['hb-button']
      if (props.severity === 'primary') classes.push('hb-button-primary')
      if (props.size === 'small') classes.push('hb-button-sm')
      return { class: classes.join(' ') }
    }
  },
  inputtext: {
    root: { class: 'hb-inputtext' }
  },
  datatable: {
    root: { class: 'hb-datatable' },
    header: { class: 'hb-datatable-header' },
    body: { class: 'hb-datatable-body' }
  }
  // ... more components
}
```

## Design Tokens

The theme provides comprehensive design tokens for consistent styling.

### Color Tokens

```css
/* Primary Colors */
--hb-primary: #3b82f6;
--hb-primary-50: #eff6ff;
--hb-primary-100: #dbeafe;
--hb-primary-500: #3b82f6;
--hb-primary-600: #2563eb;
--hb-primary-700: #1d4ed8;

/* Semantic Colors */
--hb-success: #22c55e;
--hb-warning: #f59e0b;
--hb-danger: #ef4444;
--hb-info: #0ea5e9;

/* Neutral Colors */
--hb-text-primary: #1e293b;
--hb-text-secondary: #64748b;
--hb-text-muted: #94a3b8;
--hb-bg-primary: #ffffff;
--hb-bg-secondary: #f8fafc;
--hb-bg-tertiary: #f1f5f9;
```

### Spacing Tokens

```css
/* Spacing Scale */
--hb-spacing-1: 0.25rem;   /* 4px */
--hb-spacing-2: 0.5rem;    /* 8px */
--hb-spacing-3: 0.75rem;   /* 12px */
--hb-spacing-4: 1rem;      /* 16px */
--hb-spacing-5: 1.25rem;   /* 20px */
--hb-spacing-6: 1.5rem;    /* 24px */
--hb-spacing-8: 2rem;      /* 32px */
--hb-spacing-10: 2.5rem;   /* 40px */
--hb-spacing-12: 3rem;     /* 48px */
```

### Typography Tokens

```css
/* Font Sizes */
--hb-font-size-xs: 0.75rem;    /* 12px */
--hb-font-size-sm: 0.875rem;   /* 14px */
--hb-font-size-base: 1rem;     /* 16px */
--hb-font-size-lg: 1.125rem;   /* 18px */
--hb-font-size-xl: 1.25rem;    /* 20px */
--hb-font-size-2xl: 1.5rem;    /* 24px */
--hb-font-size-3xl: 1.875rem;  /* 30px */

/* Font Weights */
--hb-font-weight-normal: 400;
--hb-font-weight-medium: 500;
--hb-font-weight-semibold: 600;
--hb-font-weight-bold: 700;
```

### Border Tokens

```css
/* Border Radius */
--hb-border-radius-sm: 0.25rem;   /* 4px */
--hb-border-radius-base: 0.375rem; /* 6px */
--hb-border-radius-md: 0.5rem;     /* 8px */
--hb-border-radius-lg: 0.75rem;    /* 12px */
--hb-border-radius-xl: 1rem;       /* 16px */
--hb-border-radius-full: 9999px;   /* Full round */

/* Border Colors */
--hb-border-light: #e2e8f0;
--hb-border-medium: #cbd5e1;
--hb-border-dark: #94a3b8;
--hb-border-focus: #3b82f6;
```

### Shadow Tokens

```css
/* Shadow Scale */
--hb-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--hb-shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--hb-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--hb-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--hb-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

## Size Presets

The theme includes multiple size presets for accessibility and responsive design.

### Available Presets

```css
/* Default (Standard) */
.hb-size-default {
  --hb-size-multiplier: 1;
  --hb-font-size-multiplier: 1;
}

/* Small */
.hb-size-sm {
  --hb-size-multiplier: 0.875;
  --hb-font-size-multiplier: 0.875;
}

/* Large */
.hb-size-lg {
  --hb-size-multiplier: 1.125;
  --hb-font-size-multiplier: 1.125;
}

/* Extra Large */
.hb-size-xl {
  --hb-size-multiplier: 1.25;
  --hb-font-size-multiplier: 1.25;
}
```

### Applying Size Presets

```vue
<template>
  <div class="size-examples">
    <!-- Small size -->
    <div class="hb-size-sm">
      <Button label="Small Button" />
      <InputText placeholder="Small input" />
    </div>
    
    <!-- Default size -->
    <div class="hb-size-default">
      <Button label="Default Button" />
      <InputText placeholder="Default input" />
    </div>
    
    <!-- Large size -->
    <div class="hb-size-lg">
      <Button label="Large Button" />
      <InputText placeholder="Large input" />
    </div>
  </div>
</template>
```

### Dynamic Size Switching

```javascript
// Switch size preset dynamically
const setSizePreset = (size) => {
  document.documentElement.className = `hb-size-${size}`
}

// Usage
setSizePreset('lg') // Apply large size
setSizePreset('sm') // Apply small size
setSizePreset('default') // Apply default size
```

## Customization

### Custom CSS Variables

```css
/* Override theme variables */
:root {
  --hb-primary: #6366f1;        /* Custom primary color */
  --hb-border-radius-base: 8px; /* Custom border radius */
  --hb-spacing-4: 1.25rem;      /* Custom spacing */
}

/* Component-specific overrides */
.hb-button {
  --hb-button-padding: 1rem 2rem;
  --hb-button-font-weight: 600;
}
```

### Custom Component Styles

```vue
<template>
  <Button class="custom-button" label="Custom Button" />
</template>

<style scoped>
.custom-button {
  background: linear-gradient(135deg, var(--hb-primary), var(--hb-primary-600));
  border: none;
  box-shadow: var(--hb-shadow-lg);
  transition: all 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--hb-shadow-xl);
}
</style>
```

### Theme Extension

```javascript
// Extend the theme with custom components
import { HBThemePlugin } from 'hb-vue-theme'

const customTheme = {
  ...HBThemePlugin,
  install(app, options = {}) {
    // Add custom theme logic
    app.provide('customTheme', {
      customColor: '#ff6b6b',
      customSpacing: '2rem'
    })
  }
}

app.use(customTheme)
```

## Scripts & Tools

### Change Prefix Script

Change the theme prefix from `hb-` to any custom prefix:

```bash
# Run the script
npm run change-prefix

# Or run directly
node scripts/change-prefix.js
```

**Example Usage:**
```bash
$ npm run change-prefix
Enter new prefix (e.g., 'my-', 'custom-'): my-
Validating prefix...
Creating backup...
Replacing 'hb-' with 'my-' in files...
✅ Prefix change completed successfully!
```

**What it updates:**
- All CSS files
- JavaScript configuration files
- Vue component templates
- Documentation files
- Creates backup for restoration

### CSS Generation Script

Generate optimized CSS files:

```bash
npm run generate:css
```

**Generated files:**
- `dist/theme.css` - Main theme CSS
- `dist/css-loader.js` - CSS loader for dynamic imports
- `dist/css-loader.esm.js` - ESM version of CSS loader

### Build Scripts

```bash
# Build all distribution files
npm run build

# Build JavaScript only
npm run build:dist

# Generate CSS only
npm run generate:css
```

## Best Practices

### 1. Component Organization

```vue
<!-- Good: Organized component structure -->
<template>
  <div class="user-profile">
    <Card class="profile-card">
      <template #header>
        <Avatar :image="user.avatar" size="large" />
      </template>
      <template #title>{{ user.name }}</template>
      <template #content>
        <div class="profile-info">
          <div class="info-item">
            <label>Email:</label>
            <span>{{ user.email }}</span>
          </div>
          <div class="info-item">
            <label>Role:</label>
            <Badge :value="user.role" severity="primary" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Edit Profile" icon="pi pi-pencil" />
        <Button label="Delete" severity="danger" text />
      </template>
    </Card>
  </div>
</template>
```

### 2. Consistent Spacing

```css
/* Use theme spacing tokens */
.form-container {
  padding: var(--hb-spacing-6);
  margin-bottom: var(--hb-spacing-8);
}

.form-group {
  margin-bottom: var(--hb-spacing-4);
}

.form-group label {
  margin-bottom: var(--hb-spacing-2);
  font-size: var(--hb-font-size-sm);
  font-weight: var(--hb-font-weight-medium);
}
```

### 3. Responsive Design

```vue
<template>
  <div class="responsive-layout">
    <div class="sidebar">
      <Menu :model="menuItems" />
    </div>
    <div class="main-content">
      <DataTable :value="data" responsiveLayout="stack" />
    </div>
  </div>
</template>

<style scoped>
.responsive-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--hb-spacing-6);
}

@media (max-width: 768px) {
  .responsive-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    order: 2;
  }
}
</style>
```

### 4. Accessibility

```vue
<template>
  <!-- Use semantic HTML and ARIA labels -->
  <div role="main" aria-label="User Dashboard">
    <h1 id="dashboard-title">Dashboard</h1>
    
    <Button 
      label="Add User" 
      icon="pi pi-plus"
      aria-describedby="add-user-help"
      @click="addUser"
    />
    
    <div id="add-user-help" class="sr-only">
      Opens a dialog to add a new user to the system
    </div>
  </div>
</template>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
```

### 5. Performance Optimization

```javascript
// Lazy load components for better performance
const DataTable = defineAsyncComponent(() => import('primevue/datatable'))
const Chart = defineAsyncComponent(() => import('primevue/chart'))

// Use v-memo for expensive components
<DataTable 
  v-memo="[data, filters, sortField, sortOrder]"
  :value="data"
  :filters="filters"
  :sortField="sortField"
  :sortOrder="sortOrder"
/>
```

## Troubleshooting

### Common Issues

#### 1. Styles Not Applying

**Problem:** Component styles not appearing
```bash
# Check if styles are imported
import 'hb-vue-theme/css'

# Verify PrimeVue configuration
app.use(PrimeVue, {
  unstyled: true,
  pt: passthroughConfig
})
```

**Solution:** Ensure proper import order and configuration

#### 2. PassThrough Not Working

**Problem:** Custom classes not being applied
```javascript
// Check PassThrough configuration
console.log(passthroughConfig.button.root({ props: { severity: 'primary' } }))
```

**Solution:** Verify PassThrough mapping and component registration

#### 3. Size Presets Not Working

**Problem:** Size changes not affecting components
```css
/* Ensure size preset is applied to root element */
:root.hb-size-lg {
  --hb-size-multiplier: 1.125;
}
```

**Solution:** Apply size class to document root or container

#### 4. Build Errors

**Problem:** Build fails with module errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Solution:** Clear cache and reinstall dependencies

### Debug Tools

#### 1. Theme Inspector

```javascript
// Add to your app for debugging
const themeInspector = {
  getTokens() {
    return getComputedStyle(document.documentElement)
  },
  getComponentClasses(component) {
    return document.querySelector(`.${component}`)?.className
  }
}

// Usage
console.log(themeInspector.getTokens())
console.log(themeInspector.getComponentClasses('hb-button'))
```

#### 2. CSS Debug Mode

```css
/* Add to your CSS for debugging */
.hb-debug * {
  outline: 1px solid red !important;
}

.hb-debug .hb-button {
  outline: 2px solid blue !important;
}
```

## Migration Guide

### From PrimeVue Default Styling

**Before:**
```vue
<template>
  <Button class="p-button-primary p-button-lg" label="Button" />
</template>
```

**After:**
```vue
<template>
  <Button severity="primary" size="large" label="Button" />
</template>
```

### From Custom CSS Classes

**Before:**
```css
.custom-button {
  background: #3b82f6;
  border-radius: 8px;
  padding: 12px 24px;
}
```

**After:**
```css
.custom-button {
  background: var(--hb-primary);
  border-radius: var(--hb-border-radius-lg);
  padding: var(--hb-spacing-3) var(--hb-spacing-6);
}
```

### From Other Theme Libraries

1. **Install HB Vue Theme**
2. **Update imports**
3. **Replace component classes**
4. **Update CSS custom properties**
5. **Test and refine**

---

## Support & Resources

- **Documentation**: [GitHub Repository](https://github.com/your-repo/hb-vue-theme)
- **Examples**: [Demo Application](https://demo.hb-vue-theme.com)
- **Issues**: [GitHub Issues](https://github.com/your-repo/hb-vue-theme/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/hb-vue-theme/discussions)

For additional support, please refer to the [PrimeVue Documentation](https://primevue.org/) for component-specific information. 