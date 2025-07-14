<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Form Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">Input Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Default Input</label>
          <InputText v-model="formData.text" placeholder="Enter text..." />
        </div>
        
        <div class="hb-example-item">
          <label>Small Input</label>
          <InputText v-model="formData.textSmall" placeholder="Small input..." size="small" />
        </div>
        
        <div class="hb-example-item">
          <label>Large Input</label>
          <InputText v-model="formData.textLarge" placeholder="Large input..." size="large" />
        </div>
        
        <div class="hb-example-item">
          <label>Disabled Input</label>
          <InputText v-model="formData.textDisabled" placeholder="Disabled input..." disabled />
        </div>
        
        <div class="hb-example-item">
          <label>Password Input</label>
          <InputText v-model="formData.password" type="password" placeholder="Enter password..." />
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Textarea Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Default Textarea</label>
          <Textarea v-model="formData.textarea" placeholder="Enter your message..." rows="3" />
        </div>
        
        <div class="hb-example-item">
          <label>Auto Resize Textarea</label>
          <Textarea v-model="formData.textareaAuto" placeholder="Auto resize textarea..." autoResize />
        </div>
        
        <div class="hb-example-item">
          <label>Disabled Textarea</label>
          <Textarea v-model="formData.textareaDisabled" placeholder="Disabled textarea..." disabled />
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Checkbox Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <Checkbox v-model="formData.checkbox1" :binary="true" />
          <label>Default Checkbox</label>
        </div>
        
        <div class="hb-example-item">
          <Checkbox v-model="formData.checkbox2" :binary="true" />
          <label>Disabled Checkbox</label>
        </div>
        
        <div class="hb-example-item">
          <Checkbox v-model="formData.checkbox3" :binary="true" />
          <label>Small Checkbox</label>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Radio Button Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <RadioButton v-model="formData.radio" name="radio1" value="option1" />
          <label>Option 1</label>
        </div>
        
        <div class="hb-example-item">
          <RadioButton v-model="formData.radio" name="radio1" value="option2" />
          <label>Option 2</label>
        </div>
        
        <div class="hb-example-item">
          <RadioButton v-model="formData.radio" name="radio1" value="option3" />
          <label>Option 3</label>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Chip Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Default Chips</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <Chip label="Default" />
            <Chip label="With Icon" icon="pi pi-user" />
            <Chip label="With Image" image="https://via.placeholder.com/32" />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Removable Chips</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <Chip label="Removable" removable />
            <Chip label="With Icon" icon="pi pi-user" removable />
            <Chip label="With Image" image="https://via.placeholder.com/32" removable />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Clickable Chips</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <Chip label="Clickable" clickable />
            <Chip label="With Icon" icon="pi pi-user" clickable />
            <Chip label="With Image" image="https://via.placeholder.com/32" clickable />
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Select Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Default Select</label>
          <Select v-model="formData.select" :options="selectOptions" optionLabel="name" placeholder="Select an option" />
        </div>
        
        <div class="hb-example-item">
          <label>Multiple Select</label>
          <Select v-model="formData.selectMultiple" :options="selectOptions" optionLabel="name" placeholder="Select multiple options" multiple />
        </div>
        
        <div class="hb-example-item">
          <label>Disabled Select</label>
          <Select v-model="formData.selectDisabled" :options="selectOptions" optionLabel="name" placeholder="Disabled select" disabled />
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Date Picker Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Default Date Picker</label>
          <DatePicker v-model="formData.date" placeholder="Select date" />
        </div>
        
        <div class="hb-example-item">
          <label>Date Range Picker</label>
          <DatePicker v-model="formData.dateRange" selectionMode="range" placeholder="Select date range" />
        </div>
        
        <div class="hb-example-item">
          <label>Disabled Date Picker</label>
          <DatePicker v-model="formData.dateDisabled" placeholder="Disabled date picker" disabled />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import Chip from 'primevue/chip'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'

const formData = ref({
  text: '',
  textSmall: '',
  textLarge: '',
  textDisabled: 'Disabled text',
  password: '',
  textarea: '',
  textareaAuto: '',
  textareaDisabled: 'Disabled textarea content',
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  radio: 'option1',
  select: null,
  selectMultiple: [],
  selectDisabled: null,
  date: null,
  dateRange: null,
  dateDisabled: null
})

const selectOptions = ref([
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
  { name: 'Option 4', value: 'option4' },
  { name: 'Option 5', value: 'option5' }
])
</script>

<style scoped>
/* =============================================================================
   FORM COMPONENTS SHOWCASE STYLES
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

/* Component-specific spacing */
.hb-component-examples .hb-inputtext,
.hb-component-examples .hb-select,
.hb-component-examples .hb-datepicker-input {
  min-width: 200px;
}

.hb-component-examples .hb-textarea {
  min-width: 300px;
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
  
  .hb-component-examples .hb-inputtext,
  .hb-component-examples .hb-select,
  .hb-component-examples .hb-datepicker-input,
  .hb-component-examples .hb-textarea {
    width: 100%;
  }
}
</style> 