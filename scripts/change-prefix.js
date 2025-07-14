#!/usr/bin/env node

/**
 * HB Vue Theme - Prefix Changer Script
 * 
 * This script allows you to change the 'hb' prefix used throughout the codebase
 * to any other prefix of your choice. It will update:
 * - CSS class names (hb-*)
 * - CSS custom properties (--hb-*)
 * - JavaScript references
 * - Package.json and other configuration files
 * - Comments and documentation
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration
const OLD_PREFIX = 'hb';
const BACKUP_DIR = 'backup-prefix-change';

// File patterns to process
const FILE_PATTERNS = [
  'src/**/*.vue',
  'src/**/*.js',
  'src/**/*.css',
  'package.json',
  'README.md',
  'INSTALLATION.md',
  'LARA_PRESET_THEME.md',
  'PRIMEVUE4-DESIGN-TOKENS.md',
  'STYLES-IMPORT-EXAMPLES.md',
  'COMPONENT_COVERAGE.md',
  'SIZE_PRESETS.md',
  'FIXES.md'
];

// Files to exclude from processing
const EXCLUDE_PATTERNS = [
  'node_modules/**',
  'dist/**',
  'backup-prefix-change/**',
  '.git/**'
];

// Validation function for prefix
function validatePrefix(prefix) {
  if (!prefix || prefix.trim() === '') {
    return { valid: false, error: 'Prefix cannot be empty' };
  }
  
  const trimmedPrefix = prefix.trim();
  
  // Check for valid characters (letters, numbers, hyphens, underscores)
  if (!/^[a-zA-Z0-9_-]+$/.test(trimmedPrefix)) {
    return { valid: false, error: 'Prefix can only contain letters, numbers, hyphens, and underscores' };
  }
  
  // Check length
  if (trimmedPrefix.length > 20) {
    return { valid: false, error: 'Prefix is too long (max 20 characters)' };
  }
  
  // Check if it's the same as current prefix
  if (trimmedPrefix.toLowerCase() === OLD_PREFIX.toLowerCase()) {
    return { valid: false, error: `Prefix is already '${OLD_PREFIX}'` };
  }
  
  return { valid: true, prefix: trimmedPrefix };
}

// Function to get all files recursively
function getAllFiles(dir, patterns, excludePatterns = []) {
  const files = [];
  
  function shouldExclude(filePath) {
    return excludePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
      return regex.test(filePath);
    });
  }
  
  function walkDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (shouldExclude(fullPath)) {
        continue;
      }
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else {
        // Check if file matches any pattern
        const relativePath = path.relative(process.cwd(), fullPath);
        const matchesPattern = patterns.some(pattern => {
          const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
          return regex.test(relativePath);
        });
        
        if (matchesPattern) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Function to replace content in a file
function replaceInFile(filePath, oldPrefix, newPrefix) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let replacements = 0;
    
    // Replace different patterns
    const patterns = [
      // CSS classes: hb-* -> newPrefix-*
      { regex: new RegExp(`\\b${oldPrefix}-([a-zA-Z0-9_-]+)`, 'g'), replacement: `${newPrefix}-$1` },
      
      // CSS custom properties: --hb-* -> --newPrefix-*
      { regex: new RegExp(`--${oldPrefix}-([a-zA-Z0-9_-]+)`, 'g'), replacement: `--${newPrefix}-$1` },
      
      // Template literals: `hb-${var}` -> `newPrefix-${var}`
      { regex: new RegExp(`\`${oldPrefix}-\\$\\{([^}]+)\\}`, 'g'), replacement: `\`${newPrefix}-\${$1}` },
      
      // String concatenations: 'hb-' + var -> 'newPrefix-' + var
      { regex: new RegExp(`'${oldPrefix}-'\\s*\\+`, 'g'), replacement: `'${newPrefix}-' +` },
      { regex: new RegExp(`"${oldPrefix}-"\\s*\\+`, 'g'), replacement: `"${newPrefix}-" +` },
      
      // Package name references
      { regex: new RegExp(`hb-vue-theme`, 'g'), replacement: `${newPrefix}-vue-theme` },
      
      // Comments and documentation
      { regex: new RegExp(`\\b${oldPrefix}\\s+prefix`, 'gi'), replacement: `${newPrefix} prefix` },
      { regex: new RegExp(`\\b${oldPrefix}\\s+theme`, 'gi'), replacement: `${newPrefix} theme` },
      { regex: new RegExp(`\\b${oldPrefix}\\s+Vue\\s+Theme`, 'gi'), replacement: `${newPrefix} Vue Theme` },
      
      // CSS ID references
      { regex: new RegExp(`#${oldPrefix}-([a-zA-Z0-9_-]+)`, 'g'), replacement: `#${newPrefix}-$1` }
    ];
    
    for (const pattern of patterns) {
      const matches = content.match(pattern.regex);
      if (matches) {
        replacements += matches.length;
        content = content.replace(pattern.regex, pattern.replacement);
      }
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { success: true, replacements };
    }
    
    return { success: true, replacements: 0 };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Function to create backup
function createBackup() {
  const backupPath = path.join(process.cwd(), BACKUP_DIR);
  
  if (fs.existsSync(backupPath)) {
    console.log(`⚠️  Backup directory already exists. Removing old backup...`);
    fs.rmSync(backupPath, { recursive: true, force: true });
  }
  
  console.log(`📁 Creating backup in '${BACKUP_DIR}'...`);
  fs.mkdirSync(backupPath, { recursive: true });
  
  // Copy all source files to backup
  const sourceDir = path.join(process.cwd(), 'src');
  const backupSrcDir = path.join(backupPath, 'src');
  
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const items = fs.readdirSync(src);
    for (const item of items) {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyDir(sourceDir, backupSrcDir);
  
  // Copy other important files
  const filesToBackup = [
    'package.json',
    'README.md',
    'INSTALLATION.md',
    'LARA_PRESET_THEME.md',
    'PRIMEVUE4-DESIGN-TOKENS.md',
    'STYLES-IMPORT-EXAMPLES.md',
    'COMPONENT_COVERAGE.md',
    'SIZE_PRESETS.md',
    'FIXES.md'
  ];
  
  for (const file of filesToBackup) {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join(backupPath, file));
    }
  }
  
  console.log(`✅ Backup created successfully`);
}

// Function to restore backup
function restoreBackup() {
  const backupPath = path.join(process.cwd(), BACKUP_DIR);
  
  if (!fs.existsSync(backupPath)) {
    console.log(`❌ No backup found to restore`);
    return false;
  }
  
  console.log(`🔄 Restoring from backup...`);
  
  // Restore source files
  const sourceDir = path.join(process.cwd(), 'src');
  const backupSrcDir = path.join(backupPath, 'src');
  
  if (fs.existsSync(backupSrcDir)) {
    fs.rmSync(sourceDir, { recursive: true, force: true });
    fs.mkdirSync(sourceDir, { recursive: true });
    
    function copyDir(src, dest) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const items = fs.readdirSync(src);
      for (const item of items) {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }
    
    copyDir(backupSrcDir, sourceDir);
  }
  
  // Restore other files
  const filesToRestore = [
    'package.json',
    'README.md',
    'INSTALLATION.md',
    'LARA_PRESET_THEME.md',
    'PRIMEVUE4-DESIGN-TOKENS.md',
    'STYLES-IMPORT-EXAMPLES.md',
    'COMPONENT_COVERAGE.md',
    'SIZE_PRESETS.md',
    'FIXES.md'
  ];
  
  for (const file of filesToRestore) {
    const backupFile = path.join(backupPath, file);
    if (fs.existsSync(backupFile)) {
      fs.copyFileSync(backupFile, file);
    }
  }
  
  console.log(`✅ Backup restored successfully`);
  return true;
}

// Main function
async function main() {
  console.log(`🎨 HB Vue Theme - Prefix Changer`);
  console.log(`================================`);
  console.log(`Current prefix: '${OLD_PREFIX}'`);
  console.log(``);
  
  // Ask for new prefix
  const newPrefix = await new Promise((resolve) => {
    rl.question(`Enter new prefix (or 'cancel' to abort): `, (answer) => {
      resolve(answer.trim());
    });
  });
  
  if (newPrefix.toLowerCase() === 'cancel') {
    console.log(`❌ Operation cancelled`);
    rl.close();
    return;
  }
  
  // Validate prefix
  const validation = validatePrefix(newPrefix);
  if (!validation.valid) {
    console.log(`❌ ${validation.error}`);
    rl.close();
    return;
  }
  
  const finalPrefix = validation.prefix;
  
  // Confirm the change
  console.log(``);
  console.log(`📋 Summary:`);
  console.log(`   Current prefix: '${OLD_PREFIX}'`);
  console.log(`   New prefix: '${finalPrefix}'`);
  console.log(``);
  
  const confirm = await new Promise((resolve) => {
    rl.question(`Are you sure you want to proceed? (yes/no): `, (answer) => {
      resolve(answer.trim().toLowerCase());
    });
  });
  
  if (confirm !== 'yes' && confirm !== 'y') {
    console.log(`❌ Operation cancelled`);
    rl.close();
    return;
  }
  
  // Create backup
  createBackup();
  
  console.log(``);
  console.log(`🔄 Starting prefix replacement...`);
  
  // Get all files to process
  const files = getAllFiles(process.cwd(), FILE_PATTERNS, EXCLUDE_PATTERNS);
  
  let totalReplacements = 0;
  let processedFiles = 0;
  let errorFiles = [];
  
  // Process each file
  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file);
    const result = replaceInFile(file, OLD_PREFIX, finalPrefix);
    
    if (result.success) {
      if (result.replacements > 0) {
        console.log(`✅ ${relativePath} (${result.replacements} replacements)`);
        totalReplacements += result.replacements;
      }
      processedFiles++;
    } else {
      console.log(`❌ ${relativePath} - ${result.error}`);
      errorFiles.push({ file: relativePath, error: result.error });
    }
  }
  
  console.log(``);
  console.log(`📊 Summary:`);
  console.log(`   Files processed: ${processedFiles}`);
  console.log(`   Total replacements: ${totalReplacements}`);
  console.log(`   Errors: ${errorFiles.length}`);
  
  if (errorFiles.length > 0) {
    console.log(``);
    console.log(`❌ Files with errors:`);
    errorFiles.forEach(({ file, error }) => {
      console.log(`   ${file}: ${error}`);
    });
    
    const restore = await new Promise((resolve) => {
      rl.question(`\nWould you like to restore from backup? (yes/no): `, (answer) => {
        resolve(answer.trim().toLowerCase());
      });
    });
    
    if (restore === 'yes' || restore === 'y') {
      restoreBackup();
    }
  } else {
    console.log(``);
    console.log(`🎉 Prefix change completed successfully!`);
    console.log(`📝 Next steps:`);
    console.log(`   1. Review the changes in your code editor`);
    console.log(`   2. Test the application to ensure everything works`);
    console.log(`   3. Update any external documentation if needed`);
    console.log(`   4. Commit your changes to version control`);
    console.log(``);
    console.log(`💡 Tip: You can find a backup of the original files in the '${BACKUP_DIR}' directory`);
  }
  
  rl.close();
}

// Handle command line arguments
if (process.argv.includes('--restore')) {
  restoreBackup();
} else {
  main().catch((error) => {
    console.error(`❌ An error occurred:`, error);
    process.exit(1);
  });
} 