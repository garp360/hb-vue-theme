<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Advanced Form Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">AutoComplete Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic AutoComplete</label>
          <div class="hb-autocomplete">
            <input 
              type="text" 
              class="hb-autocomplete-input" 
              placeholder="Search countries..."
              v-model="autocompleteValue"
              @input="filterCountries"
            />
            <div v-if="filteredCountries.length > 0" class="hb-autocomplete-panel">
              <div 
                v-for="country in filteredCountries" 
                :key="country.code"
                class="hb-autocomplete-item"
                @click="selectCountry(country)"
              >
                {{ country.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="hb-example-item">
          <label>AutoComplete with Icons</label>
          <div class="hb-autocomplete hb-icon">
            <input 
              type="text" 
              class="hb-autocomplete-input" 
              placeholder="Search with icon..."
            />
            <i class="pi pi-search hb-autocomplete-loading-icon"></i>
          </div>
        </div>

        <div class="hb-example-item">
          <label>Multiple Selection</label>
          <div class="hb-autocomplete hb-multiple">
            <div class="hb-autocomplete-tokens">
              <span 
                v-for="tag in selectedTags" 
                :key="tag"
                class="hb-autocomplete-token"
              >
                {{ tag }}
                <button 
                  class="hb-autocomplete-token-remove"
                  @click="removeTag(tag)"
                >
                  ×
                </button>
              </span>
            </div>
            <input 
              type="text" 
              class="hb-autocomplete-input" 
              placeholder="Add tags..."
              v-model="tagInput"
              @keydown.enter="addTag"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">InputGroup Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic InputGroup</label>
          <div class="hb-inputgroup">
            <span class="hb-inputgroup-addon">@</span>
            <input type="text" class="hb-inputgroup-input" placeholder="Username" />
          </div>
        </div>

        <div class="hb-example-item">
          <label>InputGroup with Button</label>
          <div class="hb-inputgroup">
            <input type="text" class="hb-inputgroup-input" placeholder="Search..." />
            <button class="hb-inputgroup-addon hb-button">
              <i class="pi pi-search"></i>
            </button>
          </div>
        </div>

        <div class="hb-example-item">
          <label>InputGroup with Multiple Addons</label>
          <div class="hb-inputgroup">
            <span class="hb-inputgroup-addon hb-success">$</span>
            <input type="number" class="hb-inputgroup-input" placeholder="0.00" />
            <span class="hb-inputgroup-addon">USD</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">SelectButton Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic SelectButton</label>
          <div class="hb-selectbutton">
            <button 
              v-for="option in selectButtonOptions" 
              :key="option.value"
              class="hb-selectbutton-item"
              :class="{ 'hb-selected': selectedButton === option.value }"
              @click="selectedButton = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="hb-example-item">
          <label>SelectButton with Icons</label>
          <div class="hb-selectbutton hb-rounded">
            <button 
              v-for="icon in iconOptions" 
              :key="icon.value"
              class="hb-selectbutton-item hb-icon"
              :class="{ 'hb-selected': selectedIcon === icon.value }"
              @click="selectedIcon = icon.value"
            >
              <i :class="icon.icon"></i>
            </button>
          </div>
        </div>

        <div class="hb-example-item">
          <label>Multiple Selection</label>
          <div class="hb-selectbutton hb-multiple">
            <button 
              v-for="tag in tagOptions" 
              :key="tag.value"
              class="hb-selectbutton-item"
              :class="{ 'hb-selected': selectedTags.includes(tag.value) }"
              @click="toggleTag(tag.value)"
            >
              {{ tag.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">ToggleSwitch Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic ToggleSwitch</label>
          <label class="hb-toggleswitch">
            <input 
              type="checkbox" 
              class="hb-toggleswitch-input"
              v-model="toggleValue1"
            />
            <div class="hb-toggleswitch-track">
              <div class="hb-toggleswitch-thumb"></div>
            </div>
            <span class="hb-toggleswitch-label">Enable notifications</span>
          </label>
        </div>

        <div class="hb-example-item">
          <label>ToggleSwitch with Icons</label>
          <label class="hb-toggleswitch hb-icon">
            <input 
              type="checkbox" 
              class="hb-toggleswitch-input"
              v-model="toggleValue2"
            />
            <div class="hb-toggleswitch-track">
              <div class="hb-toggleswitch-thumb"></div>
              <i class="pi pi-check hb-toggleswitch-icon hb-on"></i>
              <i class="pi pi-times hb-toggleswitch-icon hb-off"></i>
            </div>
            <span class="hb-toggleswitch-label">Dark mode</span>
          </label>
        </div>

        <div class="hb-example-item">
          <label>Different Sizes</label>
          <div class="toggle-sizes">
            <label class="hb-toggleswitch hb-sm">
              <input type="checkbox" class="hb-toggleswitch-input" />
              <div class="hb-toggleswitch-track">
                <div class="hb-toggleswitch-thumb"></div>
              </div>
              <span class="hb-toggleswitch-label">Small</span>
            </label>
            
            <label class="hb-toggleswitch">
              <input type="checkbox" class="hb-toggleswitch-input" />
              <div class="hb-toggleswitch-track">
                <div class="hb-toggleswitch-thumb"></div>
              </div>
              <span class="hb-toggleswitch-label">Normal</span>
            </label>
            
            <label class="hb-toggleswitch hb-lg">
              <input type="checkbox" class="hb-toggleswitch-input" />
              <div class="hb-toggleswitch-track">
                <div class="hb-toggleswitch-thumb"></div>
              </div>
              <span class="hb-toggleswitch-label">Large</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// AutoComplete data
const autocompleteValue = ref('')
const countries = ref([
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Japan', code: 'JP' },
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' }
])

const filteredCountries = computed(() => {
  if (!autocompleteValue.value) return []
  return countries.value.filter(country => 
    country.name.toLowerCase().includes(autocompleteValue.value.toLowerCase())
  )
})

const selectCountry = (country) => {
  autocompleteValue.value = country.name
}

// Multiple selection data
const selectedTags = ref(['Vue', 'PrimeVue'])
const tagInput = ref('')

const addTag = () => {
  if (tagInput.value.trim() && !selectedTags.value.includes(tagInput.value.trim())) {
    selectedTags.value.push(tagInput.value.trim())
    tagInput.value = ''
  }
}

const removeTag = (tag) => {
  selectedTags.value = selectedTags.value.filter(t => t !== tag)
}

// SelectButton data
const selectButtonOptions = ref([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
])
const selectedButton = ref('option1')

const iconOptions = ref([
  { value: 'home', icon: 'pi pi-home' },
  { value: 'user', icon: 'pi pi-user' },
  { value: 'cog', icon: 'pi pi-cog' }
])
const selectedIcon = ref('home')

const tagOptions = ref([
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' }
])

const toggleTag = (tagValue) => {
  const index = selectedTags.value.indexOf(tagValue)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tagValue)
  }
}

// ToggleSwitch data
const toggleValue1 = ref(false)
const toggleValue2 = ref(true)
</script>

<style scoped>
/* =============================================================================
   ADVANCED FORM SHOWCASE STYLES
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
  min-width: 250px;
}

.hb-example-item label {
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
  font-size: var(--hb-font-size-sm);
}

/* AutoComplete Styles */
.hb-autocomplete {
  position: relative;
  min-width: 250px;
}

.hb-autocomplete-input {
  width: 100%;
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-md);
  font-size: var(--hb-font-size-base);
  background-color: var(--hb-bg-primary);
  color: var(--hb-text-primary);
  transition: border-color 0.2s ease;
}

.hb-autocomplete-input:focus {
  outline: none;
  border-color: var(--hb-primary-500);
  box-shadow: 0 0 0 2px var(--hb-primary-100);
}

.hb-autocomplete.hb-icon {
  position: relative;
}

.hb-autocomplete-loading-icon {
  position: absolute;
  right: var(--hb-spacing-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--hb-text-secondary);
  font-size: var(--hb-font-size-lg);
}

.hb-autocomplete-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--hb-bg-primary);
  border: 1px solid var(--hb-border-light);
  border-top: none;
  border-radius: 0 0 var(--hb-border-radius-md) var(--hb-border-radius-md);
  box-shadow: var(--hb-shadow-lg);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}

.hb-autocomplete-item {
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  cursor: pointer;
  color: var(--hb-text-primary);
  transition: background-color 0.2s ease;
}

.hb-autocomplete-item:hover {
  background-color: var(--hb-bg-hover);
}

.hb-autocomplete.hb-multiple {
  min-height: 42px;
  padding: var(--hb-spacing-1);
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-md);
  background-color: var(--hb-bg-primary);
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-1);
  align-items: center;
}

.hb-autocomplete-tokens {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-1);
}

.hb-autocomplete-token {
  display: inline-flex;
  align-items: center;
  gap: var(--hb-spacing-1);
  padding: var(--hb-spacing-1) var(--hb-spacing-2);
  background-color: var(--hb-primary-100);
  color: var(--hb-primary-700);
  border-radius: var(--hb-border-radius-sm);
  font-size: var(--hb-font-size-sm);
}

.hb-autocomplete-token-remove {
  background: none;
  border: none;
  color: var(--hb-primary-700);
  cursor: pointer;
  font-size: var(--hb-font-size-sm);
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.hb-autocomplete-token-remove:hover {
  background-color: var(--hb-primary-200);
}

.hb-autocomplete.hb-multiple .hb-autocomplete-input {
  border: none;
  padding: var(--hb-spacing-2);
  background: none;
  flex: 1;
  min-width: 100px;
}

/* InputGroup Styles */
.hb-inputgroup {
  display: flex;
  min-width: 250px;
}

.hb-inputgroup-input {
  flex: 1;
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  border: 1px solid var(--hb-border-light);
  border-left: none;
  border-radius: 0 var(--hb-border-radius-md) var(--hb-border-radius-md) 0;
  font-size: var(--hb-font-size-base);
  background-color: var(--hb-bg-primary);
  color: var(--hb-text-primary);
}

.hb-inputgroup-input:focus {
  outline: none;
  border-color: var(--hb-primary-500);
  box-shadow: 0 0 0 2px var(--hb-primary-100);
}

.hb-inputgroup-addon {
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  background-color: var(--hb-bg-secondary);
  border: 1px solid var(--hb-border-light);
  border-right: none;
  border-radius: var(--hb-border-radius-md) 0 0 var(--hb-border-radius-md);
  color: var(--hb-text-secondary);
  font-weight: var(--hb-font-weight-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
}

.hb-inputgroup-addon.hb-button {
  background-color: var(--hb-primary-500);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.hb-inputgroup-addon.hb-button:hover {
  background-color: var(--hb-primary-600);
}

.hb-inputgroup-addon.hb-success {
  background-color: var(--hb-success-500);
  color: white;
}

/* SelectButton Styles */
.hb-selectbutton {
  display: flex;
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-md);
  overflow: hidden;
  min-width: 250px;
}

.hb-selectbutton.hb-rounded {
  border-radius: var(--hb-border-radius-full);
}

.hb-selectbutton-item {
  flex: 1;
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  background: none;
  border: none;
  color: var(--hb-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--hb-font-size-base);
  font-weight: var(--hb-font-weight-medium);
  border-right: 1px solid var(--hb-border-light);
}

.hb-selectbutton-item:last-child {
  border-right: none;
}

.hb-selectbutton-item:hover {
  background-color: var(--hb-bg-hover);
}

.hb-selectbutton-item.hb-selected {
  background-color: var(--hb-primary-500);
  color: white;
}

.hb-selectbutton-item.hb-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}

.hb-selectbutton.hb-multiple {
  flex-wrap: wrap;
  gap: var(--hb-spacing-1);
  padding: var(--hb-spacing-1);
}

.hb-selectbutton.hb-multiple .hb-selectbutton-item {
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-sm);
  flex: none;
}

/* ToggleSwitch Styles */
.hb-toggleswitch {
  display: inline-flex;
  align-items: center;
  gap: var(--hb-spacing-3);
  cursor: pointer;
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
}

.hb-toggleswitch-input {
  display: none;
}

.hb-toggleswitch-track {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: var(--hb-neutral-300);
  border-radius: var(--hb-border-radius-full);
  transition: background-color 0.2s ease;
}

.hb-toggleswitch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s ease;
  box-shadow: var(--hb-shadow-sm);
}

.hb-toggleswitch-input:checked + .hb-toggleswitch-track {
  background-color: var(--hb-primary-500);
}

.hb-toggleswitch-input:checked + .hb-toggleswitch-track .hb-toggleswitch-thumb {
  transform: translateX(20px);
}

.hb-toggleswitch.hb-icon .hb-toggleswitch-track {
  width: 52px;
}

.hb-toggleswitch.hb-icon .hb-toggleswitch-input:checked + .hb-toggleswitch-track .hb-toggleswitch-thumb {
  transform: translateX(28px);
}

.hb-toggleswitch-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--hb-font-size-sm);
  color: white;
  z-index: 1;
}

.hb-toggleswitch-icon.hb-on {
  left: 6px;
}

.hb-toggleswitch-icon.hb-off {
  right: 6px;
}

.hb-toggleswitch.hb-sm .hb-toggleswitch-track {
  width: 36px;
  height: 20px;
}

.hb-toggleswitch.hb-sm .hb-toggleswitch-thumb {
  width: 16px;
  height: 16px;
}

.hb-toggleswitch.hb-sm .hb-toggleswitch-input:checked + .hb-toggleswitch-track .hb-toggleswitch-thumb {
  transform: translateX(16px);
}

.hb-toggleswitch.hb-lg .hb-toggleswitch-track {
  width: 56px;
  height: 32px;
}

.hb-toggleswitch.hb-lg .hb-toggleswitch-thumb {
  width: 28px;
  height: 28px;
}

.hb-toggleswitch.hb-lg .hb-toggleswitch-input:checked + .hb-toggleswitch-track .hb-toggleswitch-thumb {
  transform: translateX(24px);
}

.toggle-sizes {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-4);
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
  
  .hb-autocomplete,
  .hb-inputgroup,
  .hb-selectbutton {
    min-width: auto;
    width: 100%;
  }
}
</style> 