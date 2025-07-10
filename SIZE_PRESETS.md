# HB Vue Theme - Global Size Presets

The HB Vue Theme now includes a powerful global size system that allows you to scale all components with a single CSS class or variable change.

## 🎯 Overview

Instead of modifying individual component sizes, you can now use **size presets** to scale the entire theme globally. This affects:

- **Spacing** (padding, margins, gaps)
- **Font sizes** (text, icons, labels)
- **Component dimensions** (button heights, input sizes, etc.)
- **Border radius** and other proportional elements

## 🚀 Quick Start

### Method 1: CSS Classes (Recommended)

Apply a size class to any container (including `:root` or `body`):

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

### Method 2: CSS Custom Properties

Modify the size multipliers directly:

```css
:root {
  --hb-size-multiplier: 1.25;      /* 25% larger spacing */
  --hb-font-size-multiplier: 1.125; /* 12.5% larger text */
}
```

## 📏 Available Size Presets

| Class | Size Multiplier | Font Multiplier | Description |
|-------|----------------|-----------------|-------------|
| `.hb-size-xs` | 0.75 (75%) | 0.875 (87.5%) | Extra Small - Compact UI |
| `.hb-size-sm` | 0.875 (87.5%) | 0.9375 (93.75%) | Small - Reduced size |
| `.hb-size-normal` | 1.0 (100%) | 1.0 (100%) | Normal - Default size |
| `.hb-size-lg` | 1.25 (125%) | 1.125 (112.5%) | Large - Enhanced size |
| `.hb-size-xl` | 1.5 (150%) | 1.25 (125%) | Extra Large - Maximum size |

## 🎨 Usage Examples

### 1. Global Application Size

```html
<!DOCTYPE html>
<html lang="en" class="hb-size-lg">
<head>
    <link rel="stylesheet" href="dist/theme.css">
</head>
<body>
    <!-- All components will be 25% larger -->
    <button class="hb-button hb-button-primary">Large Button</button>
    <input class="hb-input" placeholder="Large Input">
</body>
</html>
```

### 2. Responsive Size Changes

```css
/* Mobile: Smaller sizes for better touch targets */
@media (max-width: 640px) {
    :root {
        --hb-size-multiplier: 0.875;
        --hb-font-size-multiplier: 0.9375;
    }
}

/* Desktop: Larger sizes for better readability */
@media (min-width: 1025px) {
    :root {
        --hb-size-multiplier: 1.125;
        --hb-font-size-multiplier: 1.125;
    }
}
```

### 3. Accessibility Considerations

```css
/* High contrast mode - larger for better visibility */
@media (prefers-contrast: high) {
    :root {
        --hb-size-multiplier: 1.125;
        --hb-font-size-multiplier: 1.125;
    }
}

/* Reduced motion - remove animations */
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
    }
}
```

### 4. Component-Specific Overrides

```css
/* Override specific components while keeping global size */
.hb-size-lg .hb-button {
    /* Custom button styles for large size */
    min-height: 3.5rem;
    font-weight: 600;
}

.hb-size-sm .hb-input {
    /* Custom input styles for small size */
    min-height: 1.75rem;
}
```

## 🔧 Technical Implementation

### CSS Custom Properties

The size system uses these key variables:

```css
:root {
  /* Global size multipliers */
  --hb-size-multiplier: 1;        /* Affects spacing, padding, margins */
  --hb-font-size-multiplier: 1;   /* Affects text sizes */
  
  /* Calculated spacing values */
  --hb-spacing-1: calc(0.25rem * var(--hb-size-multiplier));
  --hb-spacing-2: calc(0.5rem * var(--hb-size-multiplier));
  --hb-spacing-3: calc(0.75rem * var(--hb-size-multiplier));
  --hb-spacing-4: calc(1rem * var(--hb-size-multiplier));
  /* ... more spacing values */
  
  /* Calculated font sizes */
  --hb-font-size-xs: calc(0.75rem * var(--hb-font-size-multiplier));
  --hb-font-size-sm: calc(0.875rem * var(--hb-font-size-multiplier));
  --hb-font-size-base: calc(1rem * var(--hb-font-size-multiplier));
  /* ... more font sizes */
}
```

### Size Preset Classes

```css
.hb-size-xs {
  --hb-size-multiplier: 0.75;
  --hb-font-size-multiplier: 0.875;
}

.hb-size-sm {
  --hb-size-multiplier: 0.875;
  --hb-font-size-multiplier: 0.9375;
}

.hb-size-normal {
  --hb-size-multiplier: 1;
  --hb-font-size-multiplier: 1;
}

.hb-size-lg {
  --hb-size-multiplier: 1.25;
  --hb-font-size-multiplier: 1.125;
}

.hb-size-xl {
  --hb-size-multiplier: 1.5;
  --hb-font-size-multiplier: 1.25;
}
```

## 🎮 Interactive Demo

Open `size-demo.html` in your browser to see the size presets in action. The demo includes:

- Interactive size controls
- Live preview of all components
- Responsive behavior demonstration
- Accessibility considerations

## 📱 Responsive Behavior

The theme automatically adjusts sizes based on screen size:

- **Mobile (< 640px)**: Smaller sizes for better touch targets
- **Tablet (641px - 1024px)**: Normal sizes
- **Desktop (> 1024px)**: Normal sizes (can be customized)

## ♿ Accessibility Features

- **High contrast mode**: Automatically increases sizes for better visibility
- **Reduced motion**: Removes animations for users with motion sensitivity
- **Focus indicators**: Maintained across all size presets

## 🔄 Migration Guide

### From Individual Component Sizing

**Before:**
```css
.hb-button-sm { padding: 0.5rem 1rem; font-size: 0.875rem; }
.hb-button-lg { padding: 1.5rem 2rem; font-size: 1.125rem; }
.hb-input-sm { padding: 0.5rem; font-size: 0.875rem; }
.hb-input-lg { padding: 1rem; font-size: 1.125rem; }
```

**After:**
```html
<div class="hb-size-sm">
  <button class="hb-button">Small Button</button>
  <input class="hb-input">Small Input</input>
</div>

<div class="hb-size-lg">
  <button class="hb-button">Large Button</button>
  <input class="hb-input">Large Input</input>
</div>
```

## 🎯 Best Practices

1. **Use size presets for global scaling** - Don't mix individual component sizes with global presets
2. **Consider accessibility** - Test with different size presets for users with visual impairments
3. **Mobile-first approach** - Start with smaller sizes and scale up for larger screens
4. **Consistent application** - Apply the same size preset to related components
5. **Performance** - Size presets use CSS custom properties for optimal performance

## 🐛 Troubleshooting

### Components not scaling properly?

1. Ensure the size class is applied to a parent element
2. Check that the component uses `hb-` prefixed classes
3. Verify that `dist/theme.css` includes the size presets
4. Clear browser cache and rebuild the theme

### Inconsistent scaling?

1. Some components may need specific overrides
2. Check for conflicting CSS rules
3. Ensure proper cascade order in your CSS

### Performance issues?

1. Size presets use efficient CSS custom properties
2. Avoid applying size classes to frequently changing elements
3. Use CSS containment for isolated components

## 📚 Related Documentation

- [Component Coverage](./COMPONENT_COVERAGE.md)
- [Installation Guide](./INSTALLATION.md)
- [Design Tokens](./PRIMEVUE4-DESIGN-TOKENS.md)
- [Styles Import Examples](./STYLES-IMPORT-EXAMPLES.md) 