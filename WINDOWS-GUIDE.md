# 📘 Windows Specific Guide - Step by Step with Screenshots Description

## Step 1: Find Your Project Folder Location

### Using File Explorer:
1. Press **Windows Key + E** to open File Explorer
2. Navigate to where you saved your project
3. Look at the address bar at the top
4. Example locations:
   - `C:\Users\YourName\Desktop\FinTech.MobileApp`
   - `C:\Users\YourName\Documents\FinTech.MobileApp`
   - `C:\Users\YourName\Downloads\FinTech.MobileApp`

5. **Copy this path!** (Click on the address bar and press Ctrl+C)

---

## Step 2: Open Command Prompt

### Method 1 (Easiest):
1. Open File Explorer to your project folder
2. Click on the address bar at the top
3. Type `cmd` and press **Enter**
4. Command Prompt opens directly in your project folder!

### Method 2:
1. Press **Windows Key**
2. Type `cmd`
3. Press **Enter**
4. Type: `cd ` (cd followed by a space)
5. Right-click and paste your folder path
6. Press **Enter**

Example:
\`\`\`cmd
cd C:\Users\YourName\Desktop\FinTech.MobileApp
\`\`\`

---

## Step 3: Verify You're in the Right Place

In Command Prompt, type:
\`\`\`cmd
dir
\`\`\`

Press **Enter**

You should see folders like:
- app
- components
- public
- node_modules (after installing)

And files like:
- package.json
- next.config.mjs

If you see these, you're in the right place! ✅

---

## Step 4: Install Dependencies

Type exactly:
\`\`\`cmd
npm install
\`\`\`

Press **Enter**

**What you'll see:**
- Lots of text scrolling (this is normal!)
- Lines like "added 345 packages"
- It takes 2-5 minutes

**When it's done:**
- The scrolling stops
- You see your folder path again: `C:\Users\YourName\FinTech.MobileApp>`

---

## Step 5: Start the Development Server

Type exactly:
\`\`\`cmd
npm run dev
\`\`\`

Press **Enter**

**What you'll see:**
\`\`\`
▲ Next.js 14.2.16
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 2.3s
\`\`\`

**IMPORTANT:** Keep this window open! Don't close it!

---

## Step 6: Open in Browser

1. Open **Google Chrome**, **Microsoft Edge**, or **Firefox**
2. In the address bar, type: `localhost:3000`
3. Press **Enter**

You should see your FinTech app! 🎉

---

## Step 7: Stop the Server (When You're Done)

In the Command Prompt window:
1. Press **Ctrl + C**
2. Type: `Y`
3. Press **Enter**

---

## Troubleshooting Windows Issues

### Issue: "npm is not recognized as an internal or external command"

**Fix:**
1. Restart your computer after installing Node.js
2. Verify Node.js is installed:
   - Open Command Prompt
   - Type: `node --version`
   - Should show: `v20.11.0` (or similar)

If still not working:
1. Uninstall Node.js
2. Download again from nodejs.org
3. Install with "Add to PATH" option checked
4. Restart computer

### Issue: "Access is denied" or "Permission denied"

**Fix:**
1. Right-click on Command Prompt
2. Select "Run as administrator"
3. Navigate to your project folder again
4. Run `npm install`

### Issue: Folder path has spaces

If your path is: `C:\Users\John Doe\FinTech App`

Use quotes:
\`\`\`cmd
cd "C:\Users\John Doe\FinTech App"
\`\`\`

---

## Quick Commands Reference

\`\`\`cmd
# See what folder you're in
cd

# See what's in the current folder
dir

# Navigate to Desktop
cd Desktop

# Navigate to a specific folder
cd FinTech.MobileApp

# Go back one folder
cd ..

# Go to C: drive
cd C:\

# Clear the screen
cls
\`\`\`

---

## Video Tutorial Steps (Do This):

1. **Install Node.js**
   - Open browser → nodejs.org → Download LTS → Install → Restart PC

2. **Open Project in VS Code**
   - Open VS Code → File → Open Folder → Select FinTech.MobileApp

3. **Open Terminal**
   - In VS Code: Terminal menu → New Terminal (Or press Ctrl + `)

4. **Install & Run**
   \`\`\`bash
   npm install
   npm run dev
   \`\`\`

5. **Open Browser**
   - Go to: `localhost:3000`

That's it! 🎉
