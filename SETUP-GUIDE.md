# 🚀 FinTech Mobile App - Complete Setup Guide

## Step 1: Install Node.js (Required First!)

1. Go to https://nodejs.org
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. Click "Next" through all the steps
5. Click "Finish"

To verify Node.js is installed:
- Open Command Prompt (Windows) or Terminal (Mac)
- Type: `node --version`
- You should see something like: `v20.11.0`

---

## Step 2: Download Your Project

### Option A: If you have the files on your computer
1. Put all the project files in a folder like: `C:\Users\YourName\FinTech.MobileApp`
2. Make sure all these folders are inside:
   - app/
   - components/
   - public/
   - And files like: package.json, next.config.mjs

### Option B: If you're using Git/GitHub
1. Open Command Prompt or Terminal
2. Navigate to where you want the project (e.g., Desktop):
   \`\`\`bash
   cd Desktop
   \`\`\`
3. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Eager1337/FinTech.MobileApp.git
   \`\`\`

---

## Step 3: Open the Project in Visual Studio Code

1. Open Visual Studio Code
2. Click **File** → **Open Folder**
3. Navigate to your project folder (e.g., `C:\Users\YourName\FinTech.MobileApp`)
4. Click **Select Folder**

---

## Step 4: Open the Terminal in VS Code

1. In Visual Studio Code, look at the top menu
2. Click **Terminal** → **New Terminal**
3. A terminal window will open at the bottom of VS Code

The terminal should show something like:
\`\`\`
PS C:\Users\YourName\FinTech.MobileApp>
\`\`\`

This means you're in the right folder!

---

## Step 5: Install All Dependencies

In the terminal at the bottom of VS Code, type:

\`\`\`bash
npm install
\`\`\`

Press **Enter**

**Wait 2-5 minutes** while it downloads everything. You'll see lots of text scrolling. This is normal!

When it's done, you'll see something like:
\`\`\`
added 345 packages in 3m
\`\`\`

---

## Step 6: Start the Application

In the same terminal, type:

\`\`\`bash
npm run dev
\`\`\`

Press **Enter**

**Wait 10-30 seconds**. You should see:
\`\`\`
▲ Next.js 14.2.16
- Local:        http://localhost:3000
- Ready in 2.3s
\`\`\`

---

## Step 7: View the Application in Your Browser

1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Type in the address bar: `http://localhost:3000`
3. Press **Enter**

You should see the **FinTech Splash Screen**! 🎉

---

## Step 8: Navigate to Different Pages

To see different pages, type these URLs in your browser:

- **Splash Screen**: `http://localhost:3000/`
- **Admin Panel**: `http://localhost:3000/admin`
  - Username: `eagerbeaverr`
  - Password: `admin123`
- **Login**: `http://localhost:3000/auth/login`
- **Sign Up**: `http://localhost:3000/auth/signup`
- **Dashboard**: `http://localhost:3000/dashboard`
- **Send Money**: `http://localhost:3000/send-money`
- **Receive Money**: `http://localhost:3000/receive-money`
- **Transactions**: `http://localhost:3000/transactions`
- **Top Up**: `http://localhost:3000/top-up`
- **Investments**: `http://localhost:3000/investments`
- **Profile**: `http://localhost:3000/profile`
- **Settings**: `http://localhost:3000/settings`
- **Support**: `http://localhost:3000/support`

---

## 🛑 Common Problems & Solutions

### Problem 1: "npm is not recognized"
**Solution**: You need to install Node.js first (Step 1)

### Problem 2: "Cannot find module"
**Solution**: Run `npm install` again in the terminal

### Problem 3: "Port 3000 is already in use"
**Solution**: 
- Close any other programs using port 3000
- OR run: `npm run dev -- -p 3001`
- Then open: `http://localhost:3001`

### Problem 4: Terminal shows "command not found"
**Solution**: Make sure you're in the right folder. The terminal should show your project name.

### Problem 5: Browser shows "This site can't be reached"
**Solution**: 
- Make sure `npm run dev` is still running in the terminal
- Check the terminal for the correct URL (usually `localhost:3000`)

---

## 🎯 Quick Reference - Terminal Commands

\`\`\`bash
# Navigate to Desktop
cd Desktop

# Navigate to your project folder
cd FinTech.MobileApp

# Go back one folder
cd ..

# See what's in the current folder
dir           # (Windows)
ls            # (Mac/Linux)

# Install dependencies
npm install

# Start the development server
npm run dev

# Stop the server
Ctrl + C      # Then type 'Y' and press Enter
\`\`\`

---

## 📝 Editing Files

To edit any page:
1. In VS Code, open the file explorer on the left
2. Navigate to the file you want to edit (e.g., `app/admin/page.tsx`)
3. Make your changes
4. Save the file (Ctrl + S or Cmd + S)
5. The browser will automatically refresh with your changes!

---

## 🆘 Need More Help?

If something doesn't work:
1. Make sure Node.js is installed: `node --version`
2. Make sure you're in the project folder (terminal shows project name)
3. Try closing terminal and running `npm install` again
4. Try restarting VS Code
5. Try restarting your computer

---

## ✅ Success Checklist

- [ ] Node.js installed
- [ ] Project folder opened in VS Code
- [ ] Terminal opened in VS Code
- [ ] `npm install` completed successfully
- [ ] `npm run dev` is running
- [ ] Browser shows the app at `localhost:3000`

If all boxes are checked, you're ready to develop! 🎉
