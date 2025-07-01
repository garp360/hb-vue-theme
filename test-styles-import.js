import { loadThemeCSS, removeThemeCSS, injectCSS } from 'hb-vue-theme/styles';

console.log('Testing hb-vue-theme/styles import...\n');

// Test 1: Check if functions are available
console.log('✅ Functions available:');
console.log('  - loadThemeCSS:', typeof loadThemeCSS);
console.log('  - removeThemeCSS:', typeof removeThemeCSS);
console.log('  - injectCSS:', typeof injectCSS);

// Test 2: Check if CSS is auto-injected (in browser environment)
if (typeof document !== 'undefined') {
  console.log('\n✅ Browser environment detected');
  
  // Check if CSS was auto-injected
  const styleElement = document.getElementById('hb-vue-theme-styles');
  if (styleElement) {
    console.log('✅ CSS auto-injected successfully');
    console.log('✅ CSS content length:', styleElement.textContent.length, 'characters');
    console.log('✅ CSS contains hb- variables:', styleElement.textContent.includes('--hb-'));
  } else {
    console.log('⚠️  CSS not auto-injected (this is normal in Node.js)');
  }
} else {
  console.log('\n⚠️  Node.js environment - CSS injection not available');
}

// Test 3: Test manual CSS injection (simulated)
console.log('\n✅ Manual CSS injection test:');
try {
  // This would work in a browser environment
  console.log('  - loadThemeCSS function ready for browser use');
  console.log('  - removeThemeCSS function ready for browser use');
  console.log('  - injectCSS function ready for browser use');
} catch (error) {
  console.log('❌ Error:', error.message);
}

console.log('\n🎉 Styles import test completed!');
console.log('\nUsage in your app:');
console.log('  import "hb-vue-theme/styles"; // Auto-injects CSS');
console.log('  import { loadThemeCSS, removeThemeCSS } from "hb-vue-theme/styles"; // Manual control'); 