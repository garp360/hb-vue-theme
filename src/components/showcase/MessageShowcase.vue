<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Message Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">Message Severities</h3>
      <div class="hb-component-examples">
        <Message severity="info" text="This is an informational message" />
        <Message severity="success" text="This is a success message" />
        <Message severity="warn" text="This is a warning message" />
        <Message severity="error" text="This is an error message" />
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Message with Content</h3>
      <div class="hb-component-examples">
        <Message severity="info">
          <template #messageicon>
            <i class="pi pi-info-circle"></i>
          </template>
          <strong>Info:</strong> This message has custom content and an icon.
        </Message>
        
        <Message severity="success">
          <template #messageicon>
            <i class="pi pi-check-circle"></i>
          </template>
          <strong>Success:</strong> Operation completed successfully!
        </Message>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Toast Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Toast Severities</label>
          <div class="hb-toast-examples">
            <div class="hb-toast hb-info">
              <i class="pi pi-info-circle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Information</div>
                <div class="hb-toast-detail">This is an info toast message</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <div class="hb-toast hb-success">
              <i class="pi pi-check-circle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Success</div>
                <div class="hb-toast-detail">Operation completed successfully</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <div class="hb-toast hb-warning">
              <i class="pi pi-exclamation-triangle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Warning</div>
                <div class="hb-toast-detail">Please review your input</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <div class="hb-toast hb-error">
              <i class="pi pi-times-circle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Error</div>
                <div class="hb-toast-detail">Something went wrong</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">ProgressBar Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic ProgressBar</label>
          <div class="hb-progressbar-wrapper">
            <div class="hb-progressbar hb-with-label">
              <div class="hb-progressbar-value" style="width: 75%"></div>
              <div class="hb-progressbar-label">75%</div>
            </div>
          </div>
        </div>

        <div class="hb-example-item">
          <label>Success ProgressBar</label>
          <div class="hb-progressbar-wrapper">
            <div class="hb-progressbar hb-success hb-striped">
              <div class="hb-progressbar-value" style="width: 60%"></div>
              <div class="hb-progressbar-label">60%</div>
            </div>
          </div>
        </div>

        <div class="hb-example-item">
          <label>Warning ProgressBar</label>
          <div class="hb-progressbar-wrapper">
            <div class="hb-progressbar hb-warning hb-gradient">
              <div class="hb-progressbar-value" style="width: 45%"></div>
              <div class="hb-progressbar-label">45%</div>
            </div>
          </div>
        </div>

        <div class="hb-example-item">
          <label>Danger ProgressBar</label>
          <div class="hb-progressbar-wrapper">
            <div class="hb-progressbar hb-danger hb-lg">
              <div class="hb-progressbar-value" style="width: 30%"></div>
              <div class="hb-progressbar-label">30%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Badge Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Badge Severities</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <span class="hb-badge hb-primary">Primary</span>
            <span class="hb-badge hb-secondary">Secondary</span>
            <span class="hb-badge hb-success">Success</span>
            <span class="hb-badge hb-warning">Warning</span>
            <span class="hb-badge hb-danger">Danger</span>
            <span class="hb-badge hb-info">Info</span>
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Badge Sizes</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <span class="hb-badge hb-sm hb-primary">Small</span>
            <span class="hb-badge hb-primary">Normal</span>
            <span class="hb-badge hb-lg hb-primary">Large</span>
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Badge with Icons</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <span class="hb-badge hb-primary">
              <i class="pi pi-user"></i>
              Users
            </span>
            <span class="hb-badge hb-success">
              <i class="pi pi-check"></i>
              Active
            </span>
            <span class="hb-badge hb-warning">
              <i class="pi pi-exclamation-triangle"></i>
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Message from 'primevue/message'
// Note: Toast and ProgressBar are shown as styled examples since they require service setup
</script>

<style scoped>
/* =============================================================================
   MESSAGE SHOWCASE STYLES
   ============================================================================= */

.hb-showcase-section {
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  padding: var(--hb-spacing-8);
  box-shadow: var(--hb-shadow-md);
}

.hb-section-title {
  font-size: var(--hb-font-size-3xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-8) 0;
  padding-bottom: var(--hb-spacing-4);
  border-bottom: 3px solid var(--hb-border-light);
}

.hb-component-group {
  margin-bottom: var(--hb-spacing-8);
}

.hb-group-title {
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-6) 0;
}

.hb-component-examples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-6);
  align-items: flex-start;
}

.hb-example-item {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-2);
  min-width: 200px;
}

.hb-example-item label {
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
  font-size: var(--hb-font-size-sm);
}

/* Toast Styles */
.hb-toast-examples {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-3);
  min-width: 300px;
}

.hb-toast {
  display: flex;
  align-items: flex-start;
  gap: var(--hb-spacing-3);
  padding: var(--hb-spacing-4);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-lg);
  min-width: 300px;
  position: relative;
}

.hb-toast.hb-info {
  background-color: var(--hb-info-50);
  border: 1px solid var(--hb-info-200);
  color: var(--hb-info-800);
}

.hb-toast.hb-success {
  background-color: var(--hb-success-50);
  border: 1px solid var(--hb-success-200);
  color: var(--hb-success-800);
}

.hb-toast.hb-warning {
  background-color: var(--hb-warning-50);
  border: 1px solid var(--hb-warning-200);
  color: var(--hb-warning-800);
}

.hb-toast.hb-error {
  background-color: var(--hb-danger-50);
  border: 1px solid var(--hb-danger-200);
  color: var(--hb-danger-800);
}

.hb-toast-icon {
  font-size: var(--hb-font-size-lg);
  flex-shrink: 0;
  margin-top: 2px;
}

.hb-toast-content {
  flex: 1;
  min-width: 0;
}

.hb-toast-summary {
  font-weight: var(--hb-font-weight-semibold);
  font-size: var(--hb-font-size-base);
  margin-bottom: var(--hb-spacing-1);
}

.hb-toast-detail {
  font-size: var(--hb-font-size-sm);
  line-height: var(--hb-line-height-relaxed);
}

.hb-toast-close {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: var(--hb-spacing-1);
  border-radius: var(--hb-border-radius-sm);
  flex-shrink: 0;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.hb-toast-close:hover {
  opacity: 1;
}

/* ProgressBar Styles */
.hb-progressbar-wrapper {
  min-width: 200px;
}

.hb-progressbar {
  position: relative;
  height: 20px;
  background-color: var(--hb-neutral-200);
  border-radius: var(--hb-border-radius-full);
  overflow: hidden;
}

.hb-progressbar.hb-lg {
  height: 24px;
}

.hb-progressbar-value {
  height: 100%;
  background-color: var(--hb-primary-500);
  border-radius: var(--hb-border-radius-full);
  transition: width 0.3s ease;
}

.hb-progressbar.hb-success .hb-progressbar-value {
  background-color: var(--hb-success-500);
}

.hb-progressbar.hb-warning .hb-progressbar-value {
  background-color: var(--hb-warning-500);
}

.hb-progressbar.hb-danger .hb-progressbar-value {
  background-color: var(--hb-danger-500);
}

.hb-progressbar.hb-striped .hb-progressbar-value {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: progress-bar-stripes 1s linear infinite;
}

.hb-progressbar.hb-gradient .hb-progressbar-value {
  background: linear-gradient(45deg, var(--hb-warning-400), var(--hb-warning-600));
}

.hb-progressbar-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--hb-font-size-xs);
  font-weight: var(--hb-font-weight-semibold);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@keyframes progress-bar-stripes {
  0% { background-position: 1rem 0; }
  100% { background-position: 0 0; }
}

/* Badge Styles */
.hb-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--hb-spacing-1);
  padding: var(--hb-spacing-1) var(--hb-spacing-3);
  border-radius: var(--hb-border-radius-full);
  font-size: var(--hb-font-size-xs);
  font-weight: var(--hb-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.025em;
  line-height: 1;
}

.hb-badge.hb-sm {
  padding: var(--hb-spacing-1) var(--hb-spacing-2);
  font-size: var(--hb-font-size-xs);
}

.hb-badge.hb-lg {
  padding: var(--hb-spacing-2) var(--hb-spacing-4);
  font-size: var(--hb-font-size-sm);
}

.hb-badge.hb-primary {
  background-color: var(--hb-primary-100);
  color: var(--hb-primary-700);
  border: 1px solid var(--hb-primary-200);
}

.hb-badge.hb-secondary {
  background-color: var(--hb-neutral-100);
  color: var(--hb-neutral-700);
  border: 1px solid var(--hb-neutral-200);
}

.hb-badge.hb-success {
  background-color: var(--hb-success-100);
  color: var(--hb-success-700);
  border: 1px solid var(--hb-success-200);
}

.hb-badge.hb-warning {
  background-color: var(--hb-warning-100);
  color: var(--hb-warning-700);
  border: 1px solid var(--hb-warning-200);
}

.hb-badge.hb-danger {
  background-color: var(--hb-danger-100);
  color: var(--hb-danger-700);
  border: 1px solid var(--hb-danger-200);
}

.hb-badge.hb-info {
  background-color: var(--hb-info-100);
  color: var(--hb-info-700);
  border: 1px solid var(--hb-info-200);
}

.hb-badge i {
  font-size: var(--hb-font-size-xs);
}

/* Component-specific spacing */
.hb-component-examples .hb-message {
  width: 100%;
  margin-bottom: var(--hb-spacing-2);
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-showcase-section {
    padding: var(--hb-spacing-6);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-example-item {
    width: 100%;
  }
  
  .hb-toast-examples {
    min-width: auto;
  }
  
  .hb-toast {
    min-width: auto;
  }
}
</style> 