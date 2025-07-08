<template>
  <div class="advanced-showcase">
    <h2>Advanced Component Showcase</h2>
    <p>Demonstrating additional PrimeVue components with HB Vue Theme styling</p>

    <!-- AutoComplete Section -->
    <section class="showcase-section">
      <h3>AutoComplete Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Basic AutoComplete</h4>
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

        <div class="component-demo">
          <h4>AutoComplete with Icons</h4>
          <div class="hb-autocomplete hb-icon">
            <input 
              type="text" 
              class="hb-autocomplete-input" 
              placeholder="Search with icon..."
            />
            <i class="pi pi-search hb-autocomplete-loading-icon"></i>
          </div>
        </div>

        <div class="component-demo">
          <h4>Multiple Selection</h4>
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
    </section>

    <!-- InputGroup Section -->
    <section class="showcase-section">
      <h3>InputGroup Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Basic InputGroup</h4>
          <div class="hb-inputgroup">
            <span class="hb-inputgroup-addon">@</span>
            <input type="text" class="hb-inputgroup-input" placeholder="Username" />
          </div>
        </div>

        <div class="component-demo">
          <h4>InputGroup with Button</h4>
          <div class="hb-inputgroup">
            <input type="text" class="hb-inputgroup-input" placeholder="Search..." />
            <button class="hb-inputgroup-addon hb-button">
              <i class="pi pi-search"></i>
            </button>
          </div>
        </div>

        <div class="component-demo">
          <h4>InputGroup with Multiple Addons</h4>
          <div class="hb-inputgroup">
            <span class="hb-inputgroup-addon hb-success">$</span>
            <input type="number" class="hb-inputgroup-input" placeholder="0.00" />
            <span class="hb-inputgroup-addon">USD</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SelectButton Section -->
    <section class="showcase-section">
      <h3>SelectButton Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Basic SelectButton</h4>
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

        <div class="component-demo">
          <h4>SelectButton with Icons</h4>
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

        <div class="component-demo">
          <h4>Multiple Selection</h4>
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
    </section>

    <!-- ToggleSwitch Section -->
    <section class="showcase-section">
      <h3>ToggleSwitch Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Basic ToggleSwitch</h4>
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

        <div class="component-demo">
          <h4>ToggleSwitch with Icons</h4>
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

        <div class="component-demo">
          <h4>Different Sizes</h4>
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
    </section>

    <!-- PickList Section -->
    <section class="showcase-section">
      <h3>PickList Components</h3>
      <div class="component-demo full-width">
        <div class="hb-picklist">
          <div class="hb-picklist-source">
            <div class="hb-picklist-header">
              <span class="hb-picklist-header-title">Available Items</span>
              <span class="hb-picklist-header-count">{{ sourceItems.length }}</span>
            </div>
            <div class="hb-picklist-list">
              <div 
                v-for="item in sourceItems" 
                :key="item.id"
                class="hb-picklist-item"
                :class="{ 'hb-selected': selectedSourceItems.includes(item.id) }"
                @click="toggleSourceSelection(item.id)"
              >
                <div class="hb-picklist-item-content">
                  <div class="hb-picklist-item-title">{{ item.name }}</div>
                  <div class="hb-picklist-item-subtitle">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="hb-picklist-controls">
            <button class="hb-picklist-button" @click="moveToTarget">
              <i class="pi pi-chevron-right"></i>
            </button>
            <button class="hb-picklist-button" @click="moveToSource">
              <i class="pi pi-chevron-left"></i>
            </button>
          </div>

          <div class="hb-picklist-target">
            <div class="hb-picklist-header">
              <span class="hb-picklist-header-title">Selected Items</span>
              <span class="hb-picklist-header-count">{{ targetItems.length }}</span>
            </div>
            <div class="hb-picklist-list">
              <div 
                v-for="item in targetItems" 
                :key="item.id"
                class="hb-picklist-item"
                :class="{ 'hb-selected': selectedTargetItems.includes(item.id) }"
                @click="toggleTargetSelection(item.id)"
              >
                <div class="hb-picklist-item-content">
                  <div class="hb-picklist-item-title">{{ item.name }}</div>
                  <div class="hb-picklist-item-subtitle">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Drawer Section -->
    <section class="showcase-section">
      <h3>Drawer Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Left Drawer</h4>
          <button @click="showLeftDrawer = true" class="hb-button">
            Open Left Drawer
          </button>
        </div>

        <div class="component-demo">
          <h4>Right Drawer</h4>
          <button @click="showRightDrawer = true" class="hb-button">
            Open Right Drawer
          </button>
        </div>

        <div class="component-demo">
          <h4>Top Drawer</h4>
          <button @click="showTopDrawer = true" class="hb-button">
            Open Top Drawer
          </button>
        </div>
      </div>

      <!-- Left Drawer -->
      <div v-if="showLeftDrawer" class="hb-drawer hb-left hb-visible">
        <div class="hb-drawer-overlay" @click="showLeftDrawer = false"></div>
        <div class="hb-drawer-panel">
          <div class="hb-drawer-header">
            <div>
              <h3 class="hb-drawer-header-title">Left Drawer</h3>
              <p class="hb-drawer-header-subtitle">Navigation menu</p>
            </div>
            <button class="hb-drawer-close" @click="showLeftDrawer = false">
              <i class="pi pi-times"></i>
            </button>
          </div>
          <div class="hb-drawer-content">
            <nav>
              <ul>
                <li><a href="#" @click="showLeftDrawer = false">Dashboard</a></li>
                <li><a href="#" @click="showLeftDrawer = false">Profile</a></li>
                <li><a href="#" @click="showLeftDrawer = false">Settings</a></li>
                <li><a href="#" @click="showLeftDrawer = false">Help</a></li>
              </ul>
            </nav>
          </div>
          <div class="hb-drawer-footer">
            <button class="hb-button hb-secondary" @click="showLeftDrawer = false">
              Cancel
            </button>
            <button class="hb-button" @click="showLeftDrawer = false">
              Apply
            </button>
          </div>
        </div>
      </div>

      <!-- Right Drawer -->
      <div v-if="showRightDrawer" class="hb-drawer hb-right hb-visible">
        <div class="hb-drawer-overlay" @click="showRightDrawer = false"></div>
        <div class="hb-drawer-panel">
          <div class="hb-drawer-header">
            <div>
              <h3 class="hb-drawer-header-title">Right Drawer</h3>
              <p class="hb-drawer-header-subtitle">Settings panel</p>
            </div>
            <button class="hb-drawer-close" @click="showRightDrawer = false">
              <i class="pi pi-times"></i>
            </button>
          </div>
          <div class="hb-drawer-content">
            <div class="setting-group">
              <h4>Theme Settings</h4>
              <label class="hb-toggleswitch">
                <input type="checkbox" class="hb-toggleswitch-input" />
                <div class="hb-toggleswitch-track">
                  <div class="hb-toggleswitch-thumb"></div>
                </div>
                <span class="hb-toggleswitch-label">Dark mode</span>
              </label>
            </div>
          </div>
          <div class="hb-drawer-footer">
            <button class="hb-button hb-secondary" @click="showRightDrawer = false">
              Reset
            </button>
            <button class="hb-button" @click="showRightDrawer = false">
              Save
            </button>
          </div>
        </div>
      </div>

      <!-- Top Drawer -->
      <div v-if="showTopDrawer" class="hb-drawer hb-top hb-visible">
        <div class="hb-drawer-overlay" @click="showTopDrawer = false"></div>
        <div class="hb-drawer-panel">
          <div class="hb-drawer-header">
            <div>
              <h3 class="hb-drawer-header-title">Top Drawer</h3>
              <p class="hb-drawer-header-subtitle">Quick actions</p>
            </div>
            <button class="hb-drawer-close" @click="showTopDrawer = false">
              <i class="pi pi-times"></i>
            </button>
          </div>
          <div class="hb-drawer-content">
            <div class="quick-actions">
              <button class="hb-button hb-sm">New Project</button>
              <button class="hb-button hb-sm hb-secondary">Import</button>
              <button class="hb-button hb-sm hb-success">Export</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chip Section -->
    <section class="showcase-section">
      <h3>Chip Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Basic Chips</h4>
          <div class="hb-chip-group">
            <span class="hb-chip">Basic Chip</span>
            <span class="hb-chip hb-primary">Primary</span>
            <span class="hb-chip hb-success">Success</span>
            <span class="hb-chip hb-warning">Warning</span>
            <span class="hb-chip hb-danger">Danger</span>
          </div>
        </div>

        <div class="component-demo">
          <h4>Removable Chips</h4>
          <div class="hb-chip-group">
            <span 
              v-for="chip in removableChips" 
              :key="chip"
              class="hb-chip hb-removable hb-clickable"
              @click="removeChip(chip)"
            >
              {{ chip }}
              <button class="hb-chip-remove">×</button>
            </span>
          </div>
        </div>

        <div class="component-demo">
          <h4>Chips with Icons</h4>
          <div class="hb-chip-group">
            <span class="hb-chip">
              <i class="pi pi-user hb-chip-icon"></i>
              User Profile
            </span>
            <span class="hb-chip hb-primary">
              <i class="pi pi-star hb-chip-icon"></i>
              Featured
            </span>
            <span class="hb-chip hb-success">
              <i class="pi pi-check hb-chip-icon"></i>
              Completed
            </span>
          </div>
        </div>

        <div class="component-demo">
          <h4>Different Sizes</h4>
                      <div class="hb-chip-group">
              <span class="hb-chip hb-chip-sm">Small</span>
              <span class="hb-chip">Normal</span>
              <span class="hb-chip hb-chip-lg">Large</span>
            </div>
        </div>
      </div>
    </section>

    <!-- TreeTable Section -->
    <section class="showcase-section">
      <h3>TreeTable Components</h3>
      <div class="component-demo full-width">
        <div class="hb-treetable">
          <div class="hb-treetable-header">
            <div class="hb-treetable-header-row">
              <div class="hb-treetable-header-cell hb-sortable">
                Name
                <i class="pi pi-sort hb-treetable-sort-icon"></i>
              </div>
              <div class="hb-treetable-header-cell">Type</div>
              <div class="hb-treetable-header-cell">Size</div>
              <div class="hb-treetable-header-cell">Status</div>
            </div>
          </div>
          <div class="hb-treetable-body">
            <div 
              v-for="node in treeData" 
              :key="node.id"
              class="hb-treetable-row"
              :class="{ 'hb-selected': selectedNode === node.id }"
              @click="selectedNode = node.id"
            >
              <div class="hb-treetable-cell" :class="`hb-treetable-node-level-${node.level}`">
                <button 
                  v-if="node.children && node.children.length > 0"
                  class="hb-treetable-toggle"
                  :class="{ 'hb-expanded': expandedNodes.includes(node.id) }"
                  @click.stop="toggleNode(node.id)"
                >
                  <i class="pi pi-chevron-right"></i>
                </button>
                <div class="hb-treetable-node-content">
                  <i :class="node.icon" class="hb-treetable-node-icon"></i>
                  <span class="hb-treetable-node-label">{{ node.name }}</span>
                </div>
              </div>
              <div class="hb-treetable-cell">
                <span class="hb-treetable-cell-content">{{ node.type }}</span>
              </div>
              <div class="hb-treetable-cell">
                <span class="hb-treetable-cell-content">{{ node.size }}</span>
              </div>
              <div class="hb-treetable-cell">
                <div class="hb-treetable-node-status" :class="`hb-${node.status}`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PopOver Section -->
    <section class="showcase-section">
      <h3>PopOver Components</h3>
      <div class="component-grid">
        <div class="component-demo">
          <h4>Basic PopOver</h4>
          <button 
            ref="popoverTrigger1"
            @click.stop="showPopover1 = !showPopover1"
            class="hb-button"
          >
            Click for PopOver
          </button>
          <div 
            v-if="showPopover1"
            class="hb-popover hb-top"
            :style="getPopoverPosition('popoverTrigger1')"
            @click.stop
          >
            <div class="hb-popover-content">
              <div class="hb-popover-header">
                <h4 class="hb-popover-title">PopOver Title</h4>
                <button class="hb-popover-close" @click="showPopover1 = false">
                  <i class="pi pi-times"></i>
                </button>
              </div>
              <div class="hb-popover-body">
                <p>This is a basic popover with some content.</p>
              </div>
            </div>
            <div class="hb-popover-arrow"></div>
          </div>
        </div>

        <div class="component-demo">
          <h4>PopOver with Actions</h4>
          <button 
            ref="popoverTrigger2"
            @click.stop="showPopover2 = !showPopover2"
            class="hb-button hb-secondary"
          >
            Actions PopOver
          </button>
          <div 
            v-if="showPopover2"
            class="hb-popover hb-bottom"
            :style="getPopoverPosition('popoverTrigger2')"
            @click.stop
          >
            <div class="hb-popover-content">
              <div class="hb-popover-body">
                <p>Choose an action:</p>
                <div class="popover-actions">
                  <button class="hb-button hb-sm">Edit</button>
                  <button class="hb-button hb-sm hb-danger">Delete</button>
                </div>
              </div>
              <div class="hb-popover-footer">
                <button class="hb-button hb-sm hb-secondary" @click="showPopover2 = false">
                  Cancel
                </button>
              </div>
            </div>
            <div class="hb-popover-arrow"></div>
          </div>
        </div>

        <div class="component-demo">
          <h4>Different Positions</h4>
          <div class="popover-positions">
            <button 
              v-for="position in popoverPositions" 
              :key="position"
              :ref="`popoverTrigger${position}`"
              @click.stop="showPopoverPosition(position)"
              class="hb-button hb-sm"
            >
              {{ position }}
            </button>
          </div>
          <div 
            v-if="activePopoverPosition"
            class="hb-popover"
            :class="`hb-${activePopoverPosition}`"
            :style="getPopoverPosition(`popoverTrigger${activePopoverPosition}`)"
            @click.stop
          >
            <div class="hb-popover-content">
              <div class="hb-popover-body">
                <p>PopOver positioned to the {{ activePopoverPosition }}</p>
              </div>
            </div>
            <div class="hb-popover-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdvancedComponentShowcase',
  data() {
    return {
      // AutoComplete
      autocompleteValue: '',
      filteredCountries: [],
      selectedTags: ['Vue', 'PrimeVue'],
      tagInput: '',
      
      // SelectButton
      selectedButton: 'option1',
      selectedIcon: 'home',
      selectedTags: ['tag1', 'tag2'],
      
      // ToggleSwitch
      toggleValue1: false,
      toggleValue2: true,
      
      // PickList
      sourceItems: [
        { id: 1, name: 'Item 1', description: 'Description for item 1' },
        { id: 2, name: 'Item 2', description: 'Description for item 2' },
        { id: 3, name: 'Item 3', description: 'Description for item 3' },
        { id: 4, name: 'Item 4', description: 'Description for item 4' },
      ],
      targetItems: [],
      selectedSourceItems: [],
      selectedTargetItems: [],
      
      // Drawer
      showLeftDrawer: false,
      showRightDrawer: false,
      showTopDrawer: false,
      
      // Chip
      removableChips: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
      
      // TreeTable
      selectedNode: null,
      expandedNodes: [],
      
      // PopOver
      showPopover1: false,
      showPopover2: false,
      activePopoverPosition: null,
    }
  },
  computed: {
    countries() {
      return [
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'UK', name: 'United Kingdom' },
        { code: 'DE', name: 'Germany' },
        { code: 'FR', name: 'France' },
        { code: 'IT', name: 'Italy' },
        { code: 'ES', name: 'Spain' },
        { code: 'JP', name: 'Japan' },
        { code: 'CN', name: 'China' },
        { code: 'IN', name: 'India' },
      ]
    },
    selectButtonOptions() {
      return [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]
    },
    iconOptions() {
      return [
        { value: 'home', icon: 'pi pi-home' },
        { value: 'user', icon: 'pi pi-user' },
        { value: 'settings', icon: 'pi pi-cog' },
      ]
    },
    tagOptions() {
      return [
        { value: 'tag1', label: 'Tag 1' },
        { value: 'tag2', label: 'Tag 2' },
        { value: 'tag3', label: 'Tag 3' },
        { value: 'tag4', label: 'Tag 4' },
      ]
    },
    treeData() {
      return [
        {
          id: 1,
          name: 'Documents',
          type: 'Folder',
          size: '--',
          status: 'online',
          level: 0,
          icon: 'pi pi-folder',
          children: [
            {
              id: 2,
              name: 'Work',
              type: 'Folder',
              size: '--',
              status: 'online',
              level: 1,
              icon: 'pi pi-folder',
            },
            {
              id: 3,
              name: 'Personal',
              type: 'Folder',
              size: '--',
              status: 'warning',
              level: 1,
              icon: 'pi pi-folder',
            }
          ]
        },
        {
          id: 4,
          name: 'Pictures',
          type: 'Folder',
          size: '--',
          status: 'offline',
          level: 0,
          icon: 'pi pi-image',
        }
      ]
    },
    popoverPositions() {
      return ['top', 'bottom', 'left', 'right']
    }
  },
  mounted() {
    // Add click outside handler for popovers
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    // Remove click outside handler
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    // AutoComplete methods
    filterCountries() {
      if (!this.autocompleteValue) {
        this.filteredCountries = []
        return
      }
      this.filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(this.autocompleteValue.toLowerCase())
      )
    },
    selectCountry(country) {
      this.autocompleteValue = country.name
      this.filteredCountries = []
    },
    addTag() {
      if (this.tagInput && !this.selectedTags.includes(this.tagInput)) {
        this.selectedTags.push(this.tagInput)
        this.tagInput = ''
      }
    },
    removeTag(tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index > -1) {
        this.selectedTags.splice(index, 1)
      }
    },
    
    // SelectButton methods
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index > -1) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
    },
    
    // PickList methods
    toggleSourceSelection(id) {
      const index = this.selectedSourceItems.indexOf(id)
      if (index > -1) {
        this.selectedSourceItems.splice(index, 1)
      } else {
        this.selectedSourceItems.push(id)
      }
    },
    toggleTargetSelection(id) {
      const index = this.selectedTargetItems.indexOf(id)
      if (index > -1) {
        this.selectedTargetItems.splice(index, 1)
      } else {
        this.selectedTargetItems.push(id)
      }
    },
    moveToTarget() {
      this.selectedSourceItems.forEach(id => {
        const item = this.sourceItems.find(item => item.id === id)
        if (item) {
          this.targetItems.push(item)
          this.sourceItems = this.sourceItems.filter(item => item.id !== id)
        }
      })
      this.selectedSourceItems = []
    },
    moveToSource() {
      this.selectedTargetItems.forEach(id => {
        const item = this.targetItems.find(item => item.id === id)
        if (item) {
          this.sourceItems.push(item)
          this.targetItems = this.targetItems.filter(item => item.id !== id)
        }
      })
      this.selectedTargetItems = []
    },
    
    // Chip methods
    removeChip(chip) {
      const index = this.removableChips.indexOf(chip)
      if (index > -1) {
        this.removableChips.splice(index, 1)
      }
    },
    
    // TreeTable methods
    toggleNode(id) {
      const index = this.expandedNodes.indexOf(id)
      if (index > -1) {
        this.expandedNodes.splice(index, 1)
      } else {
        this.expandedNodes.push(id)
      }
    },
    
    // PopOver methods
    showPopoverPosition(position) {
      this.activePopoverPosition = this.activePopoverPosition === position ? null : position
    },
    getPopoverPosition(triggerRef) {
      if (!this.$refs[triggerRef]) return {}
      
      const rect = this.$refs[triggerRef].getBoundingClientRect()
      const popoverWidth = 250 // Approximate popover width
      const popoverHeight = 150 // Approximate popover height
      const offset = 10
      
      let top, left
      
      if (triggerRef.includes('popoverTrigger1')) {
        // Top position
        top = rect.top - popoverHeight - offset
        left = rect.left + (rect.width / 2) - (popoverWidth / 2)
      } else if (triggerRef.includes('popoverTrigger2')) {
        // Bottom position
        top = rect.bottom + offset
        left = rect.left + (rect.width / 2) - (popoverWidth / 2)
      } else if (this.activePopoverPosition === 'top') {
        top = rect.top - popoverHeight - offset
        left = rect.left + (rect.width / 2) - (popoverWidth / 2)
      } else if (this.activePopoverPosition === 'bottom') {
        top = rect.bottom + offset
        left = rect.left + (rect.width / 2) - (popoverWidth / 2)
      } else if (this.activePopoverPosition === 'left') {
        top = rect.top + (rect.height / 2) - (popoverHeight / 2)
        left = rect.left - popoverWidth - offset
      } else if (this.activePopoverPosition === 'right') {
        top = rect.top + (rect.height / 2) - (popoverHeight / 2)
        left = rect.right + offset
      } else {
        // Default to bottom
        top = rect.bottom + offset
        left = rect.left + (rect.width / 2) - (popoverWidth / 2)
      }
      
      // Ensure popover stays within viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      if (left < 0) left = 10
      if (left + popoverWidth > viewportWidth) left = viewportWidth - popoverWidth - 10
      if (top < 0) top = rect.bottom + offset
      if (top + popoverHeight > viewportHeight) top = rect.top - popoverHeight - offset
      
      return {
        position: 'fixed',
        top: `${Math.max(0, top)}px`,
        left: `${Math.max(0, left)}px`,
        zIndex: 1000
      }
    },
    handleClickOutside(event) {
      // Close popovers when clicking outside
      const isPopoverClick = event.target.closest('.hb-popover')
      const isTriggerClick = event.target.closest('[ref^="popoverTrigger"]')
      
      if (!isPopoverClick && !isTriggerClick) {
        this.showPopover1 = false
        this.showPopover2 = false
        this.activePopoverPosition = null
      }
    }
  }
}
</script>

<style scoped>
.advanced-showcase {
  padding: var(--hb-spacing-6);
  max-width: 1200px;
  margin: 0 auto;
}

.advanced-showcase h2 {
  color: var(--hb-text-primary);
  margin-bottom: var(--hb-spacing-2);
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-bold);
}

.advanced-showcase > p {
  color: var(--hb-text-secondary);
  margin-bottom: var(--hb-spacing-6);
  font-size: var(--hb-font-size-lg);
}

.showcase-section {
  margin-bottom: var(--hb-spacing-8);
  padding: var(--hb-spacing-6);
  background-color: var(--hb-bg-secondary);
  border-radius: var(--hb-border-radius-lg);
  border: 1px solid var(--hb-border-light);
}

.showcase-section h3 {
  color: var(--hb-text-primary);
  margin-bottom: var(--hb-spacing-4);
  font-size: var(--hb-font-size-xl);
  font-weight: var(--hb-font-weight-semibold);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--hb-spacing-4);
}

.component-demo {
  padding: var(--hb-spacing-4);
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-md);
  border: 1px solid var(--hb-border-light);
}

.component-demo.full-width {
  grid-column: 1 / -1;
}

.component-demo h4 {
  color: var(--hb-text-primary);
  margin-bottom: var(--hb-spacing-3);
  font-size: var(--hb-font-size-base);
  font-weight: var(--hb-font-weight-semibold);
}

.toggle-sizes {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-3);
}

.setting-group {
  margin-bottom: var(--hb-spacing-4);
}

.setting-group h4 {
  margin-bottom: var(--hb-spacing-2);
  color: var(--hb-text-primary);
}

.quick-actions {
  display: flex;
  gap: var(--hb-spacing-2);
  flex-wrap: wrap;
}

.popover-positions {
  display: flex;
  gap: var(--hb-spacing-2);
  flex-wrap: wrap;
}

.popover-actions {
  display: flex;
  gap: var(--hb-spacing-2);
  margin-top: var(--hb-spacing-2);
}

/* PopOver positioning fixes */
.component-demo {
  position: relative;
}

.hb-popover {
  position: fixed !important;
  z-index: 1000;
}

/* Navigation styles for drawer */
.hb-drawer-content nav ul {
  list-style: none;
  padding: 0;
}

.hb-drawer-content nav li {
  margin-bottom: var(--hb-spacing-2);
}

.hb-drawer-content nav a {
  display: block;
  padding: var(--hb-spacing-2) var(--hb-spacing-3);
  color: var(--hb-text-primary);
  text-decoration: none;
  border-radius: var(--hb-border-radius-sm);
  transition: background-color var(--hb-transition-base);
}

.hb-drawer-content nav a:hover {
  background-color: var(--hb-bg-tertiary);
}

/* Responsive design */
@media (max-width: 768px) {
  .advanced-showcase {
    padding: var(--hb-spacing-4);
  }
  
  .showcase-section {
    padding: var(--hb-spacing-4);
  }
  
  .component-grid {
    grid-template-columns: 1fr;
  }
  
  .component-demo {
    padding: var(--hb-spacing-3);
  }
  
  .popover-positions {
    flex-direction: column;
  }
  
  .quick-actions {
    flex-direction: column;
  }
}
</style> 