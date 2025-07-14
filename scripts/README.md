# Scripts Directory

This directory contains utility scripts for the HB Vue Theme project.

## Prefix Change Script

The `change-prefix.js` script allows you to change the 'hb' prefix used throughout the codebase to any other prefix of your choice.

### Features

- **Interactive**: Prompts for new prefix with validation
- **Comprehensive**: Updates all file types (Vue, JS, CSS, JSON, MD)
- **Safe**: Creates automatic backup before making changes
- **Restorable**: Can restore from backup if something goes wrong
- **Validated**: Ensures prefix is valid and not empty

### What Gets Updated

The script will replace the 'hb' prefix in:

- **CSS Classes**: `hb-button` → `your-prefix-button`
- **CSS Custom Properties**: `--hb-primary` → `--your-prefix-primary`
- **JavaScript References**: Template literals, string concatenations
- **Package Names**: `hb-vue-theme` → `your-prefix-vue-theme`
- **Documentation**: Comments and README files
- **Configuration Files**: package.json and other config files

### Usage

#### Change Prefix
```bash
npm run change-prefix
```

#### Restore from Backup
```bash
npm run restore-prefix
```

Or directly:
```bash
node scripts/change-prefix.js --restore
```

### Interactive Flow

1. **Enter New Prefix**: Type your desired prefix (e.g., `my`, `custom`, `app`)
2. **Validation**: Script validates the prefix:
   - Must not be empty
   - Can only contain letters, numbers, hyphens, underscores
   - Maximum 20 characters
   - Must be different from current prefix
3. **Confirmation**: Review the change and confirm
4. **Backup**: Automatic backup created in `backup-prefix-change/`
5. **Processing**: All files updated with new prefix
6. **Summary**: Shows results and next steps

### Example Session

```bash
$ npm run change-prefix

🎨 HB Vue Theme - Prefix Changer
================================
Current prefix: 'hb'

Enter new prefix (or 'cancel' to abort): my

📋 Summary:
   Current prefix: 'hb'
   New prefix: 'my'

Are you sure you want to proceed? (yes/no): yes

📁 Creating backup in 'backup-prefix-change'...
✅ Backup created successfully

🔄 Starting prefix replacement...
✅ src/views/ComponentShowcase.vue (45 replacements)
✅ src/components/showcase/ButtonShowcase.vue (23 replacements)
✅ package.json (5 replacements)
...

📊 Summary:
   Files processed: 25
   Total replacements: 342
   Errors: 0

🎉 Prefix change completed successfully!
📝 Next steps:
   1. Review the changes in your code editor
   2. Test the application to ensure everything works
   3. Update any external documentation if needed
   4. Commit your changes to version control

💡 Tip: You can find a backup of the original files in the 'backup-prefix-change' directory
```

### Validation Rules

The script validates prefixes to ensure they are:

- **Not Empty**: Must provide a prefix
- **Valid Characters**: Only letters, numbers, hyphens, underscores
- **Reasonable Length**: Maximum 20 characters
- **Different**: Must be different from current 'hb' prefix

### Backup and Recovery

- **Automatic Backup**: Created before any changes
- **Location**: `backup-prefix-change/` directory
- **Contents**: Complete copy of source files and documentation
- **Restore**: Use `npm run restore-prefix` to restore from backup

### File Types Processed

- Vue components (`*.vue`)
- JavaScript files (`*.js`)
- CSS files (`*.css`)
- Package configuration (`package.json`)
- Documentation (`*.md`)
- Configuration files

### Excluded Files

- `node_modules/`
- `dist/`
- `backup-prefix-change/`
- `.git/`

### Safety Features

1. **Backup Creation**: Always creates backup before changes
2. **Validation**: Multiple validation checks
3. **Confirmation**: Requires explicit confirmation
4. **Error Handling**: Graceful error handling with restore option
5. **Dry Run**: Shows summary before making changes

### Troubleshooting

#### If something goes wrong:
1. Use `npm run restore-prefix` to restore from backup
2. Check the console output for specific error messages
3. Review the backup directory to see what was changed

#### Common Issues:
- **Permission Errors**: Ensure you have write permissions
- **File Locked**: Close any editors that might have files open
- **Invalid Prefix**: Use only valid characters (letters, numbers, hyphens, underscores)

### Tips

- **Test First**: Always test the application after changing the prefix
- **Version Control**: Commit your changes to version control
- **Documentation**: Update any external documentation that references the old prefix
- **Team Communication**: Inform team members about the prefix change 