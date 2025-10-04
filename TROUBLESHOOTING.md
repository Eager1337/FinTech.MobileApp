# 🔧 Troubleshooting Guide

## Before Running npm install - Checklist

### 1. Check if Node.js is Installed

Open Command Prompt and type:
\`\`\`cmd
node --version
\`\`\`

**Expected Result:** Should show something like `v20.11.0` or `v18.17.0`

**If you see:** `'node' is not recognized as an internal or external command`
- **Solution:** Node.js is not installed or not in PATH
- Go to https://nodejs.org and download the LTS version
- Run the installer
- **IMPORTANT:** During installation, make sure "Add to PATH" is checked
- Restart your computer after installation
- Try `node --version` again

### 2. Check if npm is Installed

In Command Prompt, type:
\`\`\`cmd
npm --version
\`\`\`

**Expected Result:** Should show something like `10.2.4` or `9.8.1`

**If you see:** `'npm' is not recognized as an internal or external command`
- **Solution:** npm comes with Node.js, so reinstall Node.js
- Make sure to restart your computer after installation

### 3. Check Your Current Directory

In Command Prompt, type:
\`\`\`cmd
cd
\`\`\`

This shows where you are currently located.

**Expected Result:** Should show your project folder path like:
\`\`\`
C:\Users\YourName\Desktop\FinTech.MobileApp
\`\`\`

**If you're in the wrong folder:**
\`\`\`cmd
cd path\to\your\FinTech.MobileApp
\`\`\`

### 4. Verify package.json Exists

In Command Prompt, type:
\`\`\`cmd
dir package.json
\`\`\`

**Expected Result:** Should show the file details

**If you see:** `File Not Found`
- **Solution:** You're in the wrong folder
- Navigate to the correct project folder where package.json exists

---

## Common npm install Errors & Solutions

### Error 1: "npm ERR! code ENOENT"
\`\`\`
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path C:\Users\...\package.json
npm ERR! errno -4058
\`\`\`

**What it means:** package.json file not found

**Solution:**
1. Make sure you're in the correct project folder
2. Type `dir` to see files in current folder
3. You should see `package.json` in the list
4. If not, navigate to the correct folder using `cd`

### Error 2: "npm ERR! code EACCES" or "Permission denied"

**Solution:**
1. Close Command Prompt
2. Right-click on Command Prompt
3. Select "Run as administrator"
4. Navigate to your project folder again
5. Run `npm install` again

### Error 3: "npm ERR! network" or "ETIMEDOUT"

**What it means:** Network/Internet connection issue

**Solution:**
1. Check your internet connection
2. Try again after a few minutes
3. If you're behind a firewall/proxy, you may need to configure npm:
\`\`\`cmd
npm config set registry https://registry.npmjs.org/
\`\`\`

### Error 4: "npm ERR! Unsupported engine"

**What it means:** Your Node.js version is too old or too new

**Solution:**
1. Check your Node.js version: `node --version`
2. This project needs Node.js 18.18 or later
3. Download the latest LTS version from nodejs.org
4. Install it and restart your computer

### Error 5: "EPERM: operation not permitted"

**Solution:**
1. Close VS Code if it's open
2. Close any other programs that might be using the project files
3. Run Command Prompt as administrator
4. Try `npm install` again

### Error 6: "npm WARN deprecated"

**What it means:** Some packages are outdated but will still work

**Solution:** These are just warnings, not errors. You can ignore them. The installation will continue.

---

## Clean Install (If Nothing Works)

If you keep getting errors, try a clean install:

### Step 1: Delete node_modules and package-lock.json

\`\`\`cmd
rmdir /s node_modules
del package-lock.json
\`\`\`

Type `Y` when asked to confirm

### Step 2: Clear npm cache

\`\`\`cmd
npm cache clean --force
\`\`\`

### Step 3: Try installing again

\`\`\`cmd
npm install
\`\`\`

---

## Still Having Issues?

### Check npm logs

After a failed `npm install`, type:
\`\`\`cmd
npm-debug.log
\`\`\`

This will show detailed error information.

### Alternative: Use yarn instead of npm

1. Install yarn globally:
\`\`\`cmd
npm install -g yarn
\`\`\`

2. Then use yarn instead:
\`\`\`cmd
yarn install
yarn dev
\`\`\`

---

## Verify Everything is Working

After successful `npm install`, verify:

### 1. Check if node_modules folder was created
\`\`\`cmd
dir node_modules
\`\`\`

You should see many folders (dependencies)

### 2. Try running the dev server
\`\`\`cmd
npm run dev
\`\`\`

You should see:
\`\`\`
▲ Next.js 14.2.16
- Local:        http://localhost:3000
✓ Ready in 2.3s
\`\`\`

### 3. Open browser to localhost:3000

You should see the FinTech splash screen

---

## Quick Command Reference

\`\`\`cmd
# Check Node.js version
node --version

# Check npm version  
npm --version

# See current folder path
cd

# List files in current folder
dir

# Navigate to project folder
cd C:\path\to\FinTech.MobileApp

# Install dependencies
npm install

# Start development server
npm run dev

# Stop the server
Ctrl + C (then type Y and press Enter)

# Clear screen
cls
\`\`\`

---

## Getting Help

If you're still stuck, please provide:

1. **Your Node.js version:** Output of `node --version`
2. **Your npm version:** Output of `npm --version`
3. **Your current directory:** Output of `cd`
4. **The exact error message:** Copy the entire error from Command Prompt
5. **Your operating system:** Windows 10/11, Mac, Linux

With this information, I can provide specific help!
