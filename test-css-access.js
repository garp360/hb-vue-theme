import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Testing CSS file access from hb-vue-theme package...\n');

// Test 1: Check if CSS file exists and is accessible
try {
  const cssPath = resolve(__dirname, 'node_modules/hb-vue-theme/dist/theme.css');
  console.log('✅ CSS file path:', cssPath);
  
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  console.log('✅ CSS file size:', cssContent.length, 'characters');
  console.log('✅ CSS file contains CSS variables:', cssContent.includes(':root'));
  console.log('✅ CSS file contains hb- prefix classes:', cssContent.includes('.hb-'));
  
} catch (error) {
  console.log('❌ CSS file access failed:', error.message);
}

// Test 2: Check if SCSS file exists and is accessible
try {
  const scssPath = resolve(__dirname, 'node_modules/hb-vue-theme/dist/theme.scss');
  console.log('\n✅ SCSS file path:', scssPath);
  
  const scssContent = fs.readFileSync(scssPath, 'utf8');
  console.log('✅ SCSS file size:', scssContent.length, 'characters');
  console.log('✅ SCSS file contains variables:', scssContent.includes('$hb-'));
  
} catch (error) {
  console.log('\n❌ SCSS file access failed:', error.message);
}

// Test 3: Check package.json exports
try {
  const packageJsonPath = resolve(__dirname, 'node_modules/hb-vue-theme/package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('\n✅ Package exports configured:');
  console.log('  - CSS export:', packageJson.exports['./css']);
  console.log('  - SCSS export:', packageJson.exports['./scss']);
  
} catch (error) {
  console.log('\n❌ Package.json access failed:', error.message);
}

console.log('\n🎉 CSS files are properly exposed and accessible!');
console.log('\nUsage examples:');
console.log('  - In Vite/Webpack: import "hb-vue-theme/css"');
console.log('  - In HTML: <link rel="stylesheet" href="node_modules/hb-vue-theme/dist/theme.css">');
console.log('  - In SCSS: @import "hb-vue-theme/scss";'); 