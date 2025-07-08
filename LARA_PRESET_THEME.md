# HB Vue Theme - Lara Preset

## Overview

The HB Vue Theme is now based on PrimeVue's Lara preset with standard PrimeVue sizing. This provides a modern, clean design system that maintains PrimeVue's standard component sizes while using the beautiful Lara color palette.

## Key Features

### 🎨 **Lara Color Palette**
- **Primary**: Blue (#3b82f6) - Modern, professional blue
- **Secondary**: Slate (#64748b) - Neutral gray tones
- **Success**: Green (#22c55e) - Positive actions
- **Warning**: Amber (#f59e0b) - Caution states
- **Danger**: Red (#ef4444) - Error states
- **Info**: Sky (#0ea5e9) - Information states

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

## Component Coverage

The theme includes comprehensive styling for 35+ PrimeVue components:

### Core Components
- ✅ Button (all variants and sizes)
- ✅ Input (text, number, search, file)
- ✅ Select (dropdown, multi-select)
- ✅ Checkbox (binary, switch variants)
- ✅ RadioButton (standard, button variants)
- ✅ Card (elevated, outlined, flat variants)
- ✅ DataTable (with pagination, sorting, filtering)

### Form Components
- ✅ Textarea
- ✅ DatePicker
- ✅ InputGroup
- ✅ SelectButton
- ✅ ToggleButton
- ✅ ToggleSwitch

### Layout Components
- ✅ Panel
- ✅ Accordion
- ✅ TabView
- ✅ Dialog
- ✅ Drawer
- ✅ PopOver
- ✅ Tooltip

### Data Display
- ✅ Chip
- ✅ Badge
- ✅ Avatar
- ✅ ProgressBar
- ✅ TreeTable
- ✅ PickList

### Feedback Components
- ✅ Message
- ✅ Toast
- ✅ Menu
- ✅ Paginator

## Usage

### Installation

```bash
npm install hb-vue-theme
```

### Basic Setup

```javascript
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { installHBTheme } from 'hb-vue-theme'

const app = createApp(App)
app.use(PrimeVue)
installHBTheme(app)
```

### CSS Import

```javascript
import 'hb-vue-theme/dist/theme.css'
```

## Design Tokens

### Color System

```css
/* Primary Colors */
--hb-primary: #3b82f6;
--hb-primary-hover: #2563eb;
--hb-primary-active: #1d4ed8;

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

### Typography

```css
/* Font Sizes - PrimeVue Standard */
--hb-font-size-base: 1rem;      /* 16px */
--hb-font-size-sm: 0.875rem;    /* 14px */
--hb-font-size-lg: 1.125rem;    /* 18px */
--hb-font-size-xl: 1.25rem;     /* 20px */

/* Line Heights */
--hb-line-height-normal: 1.5;   /* PrimeVue standard */
```

### Spacing

```css
/* Spacing - PrimeVue Standard */
--hb-spacing-4: 1rem;           /* 16px - base unit */
--hb-spacing-3: 0.75rem;        /* 12px */
--hb-spacing-6: 1.5rem;         /* 24px */
--hb-spacing-8: 2rem;           /* 32px */
```

## Component Examples

### Button

```html
<button class="hb-button hb-button-primary">
  Primary Button
</button>

<button class="hb-button hb-button-secondary hb-button-sm">
  Small Secondary
</button>

<button class="hb-button hb-button-success hb-button-lg">
  Large Success
</button>
```

### Input

```html
<input type="text" class="hb-input" placeholder="Standard input">

<input type="text" class="hb-input hb-input-sm" placeholder="Small input">

<input type="text" class="hb-input hb-input-lg" placeholder="Large input">
```

### Card

```html
<div class="hb-card">
  <div class="hb-card-header">
    <h3 class="hb-card-header-title">Card Title</h3>
    <p class="hb-card-header-subtitle">Card subtitle</p>
  </div>
  <div class="hb-card-content">
    Card content goes here
  </div>
  <div class="hb-card-footer">
    <button class="hb-button hb-button-primary">Action</button>
  </div>
</div>
```

## Migration from Previous Version

### What Changed

1. **Reverted to Standard Sizes**: All components now use PrimeVue's standard sizing instead of compact sizes
2. **Maintained Lara Colors**: Kept the beautiful Lara color palette
3. **Improved Accessibility**: Better contrast ratios and focus states
4. **Enhanced Responsiveness**: Better mobile and tablet support

### Breaking Changes

- Component sizes are now standard PrimeVue sizes (not compact)
- Some class names have been updated for consistency
- Spacing values now match PrimeVue's standard scale

### Migration Steps

1. **Update Class Names**: Check for any custom class name usage
2. **Adjust Layouts**: Components may be slightly larger now
3. **Test Responsiveness**: Verify mobile layouts still work
4. **Update Custom Styles**: Any custom overrides may need adjustment

## Customization

### Overriding Variables

```css
:root {
  /* Customize primary color */
  --hb-primary: #your-color;
  
  /* Customize spacing */
  --hb-spacing-4: 1.25rem;
  
  /* Customize border radius */
  --hb-border-radius-md: 0.5rem;
}
```

### Component-Specific Customization

```css
/* Custom button styles */
.hb-button.hb-button-primary {
  background-color: var(--your-primary);
  border-color: var(--your-primary);
}

/* Custom input styles */
.hb-input {
  border-color: var(--your-border-color);
}
```

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Performance

- **CSS Size**: ~45KB (minified)
- **No JavaScript**: Pure CSS implementation
- **Tree-shakable**: Only import what you need
- **Optimized**: Efficient selectors and minimal specificity

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues: [Repository Issues](https://github.com/your-repo/issues)
- Documentation: [Full Documentation](https://your-docs-url.com)

---

**Note**: This theme is designed to work seamlessly with PrimeVue 4.x and follows PrimeVue's design patterns while providing a modern, professional appearance with the Lara color palette. 