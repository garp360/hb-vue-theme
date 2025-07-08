<template>
  <div class="hb-component-showcase">
    <div class="hb-showcase-header">
      <h2 class="hb-showcase-title">HB Vue Theme - Component Showcase</h2>
      <p class="hb-showcase-description">
        Comprehensive showcase of all themed components with 'hb' prefix
      </p>
    </div>

    <div class="hb-showcase-grid">
      <!-- Form Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Form Components</h3>
        
        <!-- Checkbox Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Checkbox Components</h4>
          <div class="hb-component-examples">
            <div class="hb-checkbox">
              <input type="checkbox" id="checkbox1" class="hb-checkbox-input" />
              <div class="hb-checkbox-box">
                <i class="pi pi-check hb-checkbox-icon"></i>
              </div>
              <label for="checkbox1" class="hb-checkbox-label">Default Checkbox</label>
            </div>
            
            <div class="hb-checkbox hb-switch">
              <input type="checkbox" id="checkbox2" class="hb-checkbox-input" />
              <div class="hb-checkbox-box"></div>
              <label for="checkbox2" class="hb-checkbox-label">Switch Style</label>
            </div>
            
            <div class="hb-checkbox hb-sm">
              <input type="checkbox" id="checkbox3" class="hb-checkbox-input" />
              <div class="hb-checkbox-box">
                <i class="pi pi-check hb-checkbox-icon"></i>
              </div>
              <label for="checkbox3" class="hb-checkbox-label">Small Size</label>
            </div>
          </div>
        </div>

        <!-- RadioButton Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">RadioButton Components</h4>
          <div class="hb-component-examples">
            <div class="hb-radiobutton">
              <input type="radio" id="radio1" name="radio-group" class="hb-radiobutton-input" />
              <div class="hb-radiobutton-box">
                <div class="hb-radiobutton-icon"></div>
              </div>
              <label for="radio1" class="hb-radiobutton-label">Option 1</label>
            </div>
            
            <div class="hb-radiobutton">
              <input type="radio" id="radio2" name="radio-group" class="hb-radiobutton-input" />
              <div class="hb-radiobutton-box">
                <div class="hb-radiobutton-icon"></div>
              </div>
              <label for="radio2" class="hb-radiobutton-label">Option 2</label>
            </div>
            
            <div class="hb-radiobutton hb-lg">
              <input type="radio" id="radio3" name="radio-group" class="hb-radiobutton-input" />
              <div class="hb-radiobutton-box">
                <div class="hb-radiobutton-icon"></div>
              </div>
              <label for="radio3" class="hb-radiobutton-label">Large Size</label>
            </div>
          </div>
        </div>

        <!-- Textarea Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Textarea Components</h4>
          <div class="hb-component-examples">
            <div class="hb-textarea-wrapper">
              <label class="hb-textarea-label">Default Textarea</label>
              <textarea class="hb-textarea" placeholder="Enter your message here..."></textarea>
            </div>
            
            <div class="hb-textarea-wrapper">
              <label class="hb-textarea-label">Small Textarea</label>
              <textarea class="hb-textarea hb-sm" placeholder="Small textarea..."></textarea>
            </div>
            
            <div class="hb-textarea-wrapper">
              <label class="hb-textarea-label">Large Textarea</label>
              <textarea class="hb-textarea hb-lg" placeholder="Large textarea..."></textarea>
            </div>
          </div>
        </div>

        <!-- DatePicker Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">DatePicker Components</h4>
          <div class="hb-component-examples">
            <div class="hb-datepicker">
              <input type="text" class="hb-datepicker-input" placeholder="Select date..." />
            </div>
            
            <div class="hb-datepicker hb-sm">
              <input type="text" class="hb-datepicker-input" placeholder="Small datepicker..." />
            </div>
            
            <div class="hb-datepicker hb-lg">
              <input type="text" class="hb-datepicker-input" placeholder="Large datepicker..." />
            </div>
          </div>
        </div>
      </div>

      <!-- Layout Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Layout Components</h3>
        
        <!-- Card Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Card Components</h4>
          <div class="hb-component-examples">
            <div class="hb-card">
              <div class="hb-card-header">
                <div class="hb-card-header-content">
                  <h5 class="hb-card-title">Default Card</h5>
                  <p class="hb-card-subtitle">Card subtitle</p>
                </div>
                <div class="hb-card-header-actions">
                  <button class="hb-button hb-text">
                    <i class="pi pi-ellipsis-v"></i>
                  </button>
                </div>
              </div>
              <div class="hb-card-content">
                <p>This is a default card with header, content, and footer sections.</p>
              </div>
              <div class="hb-card-footer">
                <div class="hb-card-footer-content">
                  <span class="hb-text-muted">Last updated: 2 hours ago</span>
                </div>
                <div class="hb-card-footer-actions">
                  <button class="hb-button hb-primary">Action</button>
                </div>
              </div>
            </div>

            <div class="hb-card hb-elevated">
              <div class="hb-card-content">
                <h5 class="hb-card-title">Elevated Card</h5>
                <p>This card has enhanced shadow and hover effects.</p>
              </div>
            </div>

            <div class="hb-card hb-outlined">
              <div class="hb-card-content">
                <h5 class="hb-card-title">Outlined Card</h5>
                <p>This card has a prominent border and minimal shadow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlay Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Overlay Components</h3>
        
        <!-- Tooltip Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Tooltip Components</h4>
          <div class="hb-component-examples">
            <div class="hb-tooltip-trigger" ref="tooltip1">
              <button class="hb-button hb-button-primary">
                Hover for Tooltip
              </button>
              <div class="hb-tooltip hb-top" :class="{ 'hb-show': tooltipStates.tooltip1 }">
                <div class="hb-tooltip-content">
                  <div class="hb-tooltip-text">This is a top tooltip</div>
                </div>
              </div>
            </div>

            <div class="hb-tooltip-trigger" ref="tooltip2">
              <button class="hb-button hb-button-info">
                Info Tooltip
              </button>
              <div class="hb-tooltip hb-bottom hb-info" :class="{ 'hb-show': tooltipStates.tooltip2 }">
                <div class="hb-tooltip-content">
                  <div class="hb-tooltip-text">Information tooltip</div>
                </div>
              </div>
            </div>

            <div class="hb-tooltip-trigger" ref="tooltip3">
              <button class="hb-button hb-button-success">
                Success Tooltip
              </button>
              <div class="hb-tooltip hb-left hb-success" :class="{ 'hb-show': tooltipStates.tooltip3 }">
                <div class="hb-tooltip-content">
                  <div class="hb-tooltip-text">Success message</div>
                </div>
              </div>
            </div>

            <div class="hb-tooltip-trigger" ref="tooltip4">
              <button class="hb-button hb-button-warning">
                Warning Tooltip
              </button>
              <div class="hb-tooltip hb-right hb-warning" :class="{ 'hb-show': tooltipStates.tooltip4 }">
                <div class="hb-tooltip-content">
                  <div class="hb-tooltip-text">Warning message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Existing Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Existing Components</h3>
        
        <!-- Button Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Button Components</h4>
          <div class="hb-component-examples">
            <button class="hb-button hb-button-primary">Primary</button>
            <button class="hb-button hb-button-secondary">Secondary</button>
            <button class="hb-button hb-button-success">Success</button>
            <button class="hb-button hb-button-warning">Warning</button>
            <button class="hb-button hb-button-danger">Danger</button>
            <button class="hb-button hb-button-info">Info</button>
            <button class="hb-button hb-button-text">Text</button>
          </div>
        </div>

        <!-- Input Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Input Components</h4>
          <div class="hb-component-examples">
            <input type="text" class="hb-inputtext" placeholder="Default input" />
            <input type="text" class="hb-inputtext hb-sm" placeholder="Small input" />
            <input type="text" class="hb-inputtext hb-lg" placeholder="Large input" />
          </div>
        </div>

        <!-- Select Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Select Components</h4>
          <div class="hb-component-examples">
            <div class="hb-select">
              <div class="hb-select-trigger">
                <span>Select an option</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Message Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Message Components</h4>
          <div class="hb-component-examples">
            <div class="hb-message hb-info">
              <div class="hb-message-text">This is an info message</div>
            </div>
            <div class="hb-message hb-success">
              <div class="hb-message-text">This is a success message</div>
            </div>
            <div class="hb-message hb-warning">
              <div class="hb-message-text">This is a warning message</div>
            </div>
            <div class="hb-message hb-error">
              <div class="hb-message-text">This is an error message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentShowcase',
  data() {
    return {
      tooltipStates: {
        tooltip1: false,
        tooltip2: false,
        tooltip3: false,
        tooltip4: false
      }
    }
  },
  mounted() {
    // Add some interactivity for demonstration
    this.setupCheckboxInteractions()
    this.setupRadioInteractions()
    this.setupTooltipInteractions()
  },
  methods: {
    setupCheckboxInteractions() {
      const checkboxes = document.querySelectorAll('.hb-checkbox input[type="checkbox"]')
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
          console.log('Checkbox changed:', e.target.checked)
        })
      })
    },
    setupRadioInteractions() {
      const radios = document.querySelectorAll('.hb-radiobutton input[type="radio"]')
      radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
          console.log('Radio changed:', e.target.id)
        })
      })
    },
    setupTooltipInteractions() {
      // Setup tooltip hover events
      const tooltipRefs = ['tooltip1', 'tooltip2', 'tooltip3', 'tooltip4']
      
      tooltipRefs.forEach((ref, index) => {
        const trigger = this.$refs[ref]
        if (trigger) {
          trigger.addEventListener('mouseenter', () => {
            this.tooltipStates[`tooltip${index + 1}`] = true
          })
          
          trigger.addEventListener('mouseleave', () => {
            this.tooltipStates[`tooltip${index + 1}`] = false
          })
        }
      })
    }
  }
}
</script>

<style scoped>
/* =============================================================================
   COMPONENT SHOWCASE STYLES
   ============================================================================= */

.hb-component-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--hb-spacing-6);
  font-family: var(--hb-font-family-primary);
}

.hb-showcase-header {
  text-align: center;
  margin-bottom: var(--hb-spacing-8);
  padding: var(--hb-spacing-6);
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-sm);
}

.hb-showcase-title {
  font-size: var(--hb-font-size-3xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-2) 0;
}

.hb-showcase-description {
  font-size: var(--hb-font-size-lg);
  color: var(--hb-text-secondary);
  margin: 0;
}

.hb-showcase-grid {
  display: grid;
  gap: var(--hb-spacing-8);
}

.hb-showcase-section {
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  padding: var(--hb-spacing-6);
  box-shadow: var(--hb-shadow-sm);
}

.hb-section-title {
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-6) 0;
  padding-bottom: var(--hb-spacing-3);
  border-bottom: 2px solid var(--hb-border-light);
}

.hb-component-group {
  margin-bottom: var(--hb-spacing-6);
}

.hb-group-title {
  font-size: var(--hb-font-size-lg);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-4) 0;
}

.hb-component-examples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-4);
  align-items: flex-start;
}

/* Component-specific spacing */
.hb-component-examples .hb-checkbox,
.hb-component-examples .hb-radiobutton {
  margin-right: var(--hb-spacing-4);
}

.hb-component-examples .hb-textarea-wrapper {
  width: 100%;
  max-width: 300px;
}

.hb-component-examples .hb-datepicker {
  width: 200px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-card {
  width: 100%;
  max-width: 350px;
  margin-bottom: var(--hb-spacing-4);
}

.hb-component-examples .hb-button {
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-inputtext {
  width: 200px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-select {
  width: 200px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-message {
  width: 100%;
  margin-bottom: var(--hb-spacing-2);
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-component-showcase {
    padding: var(--hb-spacing-4);
  }
  
  .hb-showcase-header {
    padding: var(--hb-spacing-4);
  }
  
  .hb-showcase-title {
    font-size: var(--hb-font-size-2xl);
  }
  
  .hb-showcase-description {
    font-size: var(--hb-font-size-base);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-component-examples .hb-inputtext,
  .hb-component-examples .hb-select {
    width: 100%;
  }
}
</style> 