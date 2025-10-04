# 🍎 Mac/Linux Specific Guide

## Step 1: Open Terminal

### On Mac:
1. Press **Command + Space**
2. Type `terminal`
3. Press **Enter**

### On Linux:
1. Press **Ctrl + Alt + T**

---

## Step 2: Navigate to Your Project

Example if project is on Desktop:
\`\`\`bash
cd ~/Desktop/FinTech.MobileApp
\`\`\`

Example if project is in Documents:
\`\`\`bash
cd ~/Documents/FinTech.MobileApp
\`\`\`

**Not sure where your project is?**
1. Open Finder (Mac) or Files (Linux)
2. Navigate to your project folder
3. Drag the folder into Terminal
4. Type `cd ` (with a space) before the path

---

## Step 3: Verify Location

Type:
\`\`\`bash
ls
\`\`\`

You should see:
- app/
- components/
- public/
- package.json

---

## Step 4: Install Dependencies

\`\`\`bash
npm install
\`\`\`

Wait 2-5 minutes for installation.

---

## Step 5: Start Development Server

\`\`\`bash
npm run dev
\`\`\`

You'll see:
\`\`\`
▲ Next.js 14.2.16
- Local:        http://localhost:3000
✓ Ready in 2.3s
\`\`\`

---

## Step 6: Open Browser

Open browser and go to: `http://localhost:3000`

---

## Mac-Specific Issues

### Issue: "command not found: npm"

**Fix:**
1. Install Homebrew first:
\`\`\`bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`

2. Install Node.js:
\`\`\`bash
brew install node
\`\`\`

### Issue: Permission denied

**Fix:**
\`\`\`bash
sudo npm install
\`\`\`
Enter your Mac password when prompted.

---

## Useful Mac/Linux Commands

\`\`\`bash
# See current directory
pwd

# List files
ls

# List files with details
ls -la

# Navigate to home directory
cd ~

# Navigate to Desktop
cd ~/Desktop

# Go back one directory
cd ..

# Clear terminal
clear

# Stop server
Ctrl + C
