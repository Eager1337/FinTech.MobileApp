# 📸 Step-by-Step Guide with Visual Descriptions

## 🎯 COMPLETE BEGINNER'S GUIDE

### PART 1: Installing Node.js

#### Step 1: Download Node.js
1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Go to: **https://nodejs.org**
3. You'll see TWO big buttons:
   - One says "LTS" (Recommended for Most Users) ← **CLICK THIS ONE**
   - One says "Current"
4. Click the **LTS button** (the left one)
5. A file will download (about 30MB)
6. Wait for download to complete

#### Step 2: Install Node.js
1. Find the downloaded file (usually in your Downloads folder)
2. The file is named something like: `node-v20.11.0-x64.msi`
3. **Double-click the file**
4. A window opens with "Node.js Setup Wizard"
5. Click **Next**
6. Click **I accept** (after reading the license)
7. Click **Next** (keep default installation location)
8. Click **Next** (keep all features selected)
9. ✅ **IMPORTANT:** Make sure the box says "Automatically install necessary tools" is CHECKED
10. Click **Next**
11. Click **Install** (may ask for administrator permission - click Yes)
12. Wait 2-3 minutes for installation
13. Click **Finish**
14. **RESTART YOUR COMPUTER** ← Very Important!

#### Step 3: Verify Installation
1. After restarting, press **Windows Key**
2. Type: `cmd`
3. Press **Enter** (black window opens)
4. Type: `node --version`
5. Press **Enter**
6. You should see: `v20.11.0` (or similar)
7. Type: `npm --version`
8. Press **Enter**
9. You should see: `10.2.4` (or similar)

✅ If you see version numbers, you're ready! If not, reinstall Node.js.

---

### PART 2: Preparing Your Project Folder

#### Step 1: Locate Your Project
1. Press **Windows Key + E** (opens File Explorer)
2. Look for your project folder. Common locations:
   - Desktop
   - Documents
   - Downloads
3. Find the folder named **FinTech.MobileApp**
4. Open it by double-clicking

#### Step 2: Verify Files Inside
Inside the folder, you should see:
- 📁 **app** (folder)
- 📁 **components** (folder)
- 📁 **public** (folder)
- 📄 **package.json** (file)
- 📄 **next.config.mjs** (file)
- And more files...

✅ If you see these, you're in the right place!

#### Step 3: Copy the Folder Path
1. Click on the **address bar at the top** (where it shows the path)
2. The text becomes highlighted (blue)
3. Press **Ctrl + C** to copy
4. The path looks like: `C:\Users\YourName\Desktop\FinTech.MobileApp`

---

### PART 3: Opening Command Prompt in Your Project

#### Method 1 (EASIEST - Recommended):
1. With your project folder open in File Explorer
2. Click on the **address bar** at the top
3. Delete everything in the address bar
4. Type: `cmd`
5. Press **Enter**
6. Command Prompt opens! It's already in your project folder! ✅

#### Method 2 (Using Shift + Right-Click):
1. With your project folder open in File Explorer
2. Click on empty space inside the folder
3. Hold **Shift** key and **Right-Click** at the same time
4. Select **"Open PowerShell window here"** or **"Open command window here"**
5. A blue (PowerShell) or black (Command Prompt) window opens ✅

#### Method 3 (Manual Navigation):
1. Press **Windows Key**
2. Type: `cmd`
3. Press **Enter**
4. Type: `cd ` (cd followed by a space)
5. Press **Ctrl + V** (paste the path you copied earlier)
6. Press **Enter**
7. Example: `cd C:\Users\YourName\Desktop\FinTech.MobileApp`

---

### PART 4: Installing Dependencies

#### What You'll Type:

In the Command Prompt window, type exactly:
\`\`\`
npm install
\`\`\`
Then press **Enter**

#### What You'll See:

**Phase 1 - First 10 seconds:**
\`\`\`
npm WARN deprecated some-package@1.0.0: This package is deprecated
npm WARN deprecated another-package@2.0.0: Use new-package instead
\`\`\`
✅ **Don't worry!** These warnings are normal.

**Phase 2 - Next 2-5 minutes:**
You'll see LOTS of text scrolling fast:
\`\`\`
added 1 package, and audited 2 packages in 1s
added 34 packages, and audited 35 packages in 5s
added 127 packages, and audited 162 packages in 15s
...
\`\`\`
✅ **This is normal!** Just wait...

**Phase 3 - Finally:**
\`\`\`
added 345 packages, and audited 346 packages in 3m

52 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
\`\`\`

✅ **SUCCESS!** You're done installing!

Your Command Prompt shows your folder path again:
\`\`\`
C:\Users\YourName\Desktop\FinTech.MobileApp>
\`\`\`

#### What Just Happened?
- npm downloaded 345+ packages (libraries/code) your app needs
- It created a folder called **node_modules** with all the code
- It created a file called **package-lock.json**

---

### PART 5: Starting the Application

#### What You'll Type:

In the same Command Prompt window, type:
\`\`\`
npm run dev
\`\`\`
Then press **Enter**

#### What You'll See:

**First few seconds:**
\`\`\`
> my-v0-project@0.1.0 dev
> next dev

  ▲ Next.js 14.2.16
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.3s
 ○ Compiling / ...
 ✓ Compiled / in 1.5s
\`\`\`

✅ **SUCCESS!** Your app is running!

**Key things to notice:**
- `Local: http://localhost:3000` ← This is your app's address
- `✓ Ready` ← Server is ready
- Window stays open with a blinking cursor

⚠️ **IMPORTANT:** DO NOT CLOSE THIS WINDOW! Keep it open while using the app.

---

### PART 6: Viewing Your App in the Browser

#### Step 1: Open Browser
1. Open **Google Chrome**, **Microsoft Edge**, or **Firefox**
2. Look at the address bar at the top

#### Step 2: Type the Address
1. Click in the address bar
2. Delete any existing text
3. Type exactly: `localhost:3000`
4. Press **Enter**

#### What You'll See:

The FinTech app appears! You'll see:
- Splash screen with the app logo
- Beautiful animations
- "Get Started" button

✅ **CONGRATULATIONS!** Your app is running!

---

### PART 7: Navigating to Different Pages

Just change the address in your browser:

| Page | Type This in Address Bar |
|------|-------------------------|
| Home/Splash | `localhost:3000` |
| Admin Panel | `localhost:3000/admin` |
| Login | `localhost:3000/auth/login` |
| Sign Up | `localhost:3000/auth/signup` |
| Dashboard | `localhost:3000/dashboard` |
| Send Money | `localhost:3000/send-money` |
| Transactions | `localhost:3000/transactions` |

---

### PART 8: Stopping the App

When you're done:

#### In Command Prompt Window:
1. Make sure the Command Prompt window is active (click on it)
2. Press **Ctrl + C** on your keyboard (hold Ctrl, then press C)
3. You'll see: `Terminate batch job (Y/N)?`
4. Type: `Y`
5. Press **Enter**

The app stops and you see your folder path again:
\`\`\`
C:\Users\YourName\Desktop\FinTech.MobileApp>
\`\`\`

---

## 🎓 Summary Checklist

- [ ] Node.js installed (check: `node --version`)
- [ ] Located project folder (FinTech.MobileApp)
- [ ] Opened Command Prompt in project folder
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Opened browser to `localhost:3000`
- [ ] Can see the FinTech app!

---

## 🆘 Quick Fixes

**Problem:** "npm is not recognized"
→ **Fix:** Restart computer after installing Node.js

**Problem:** "Cannot find module"
→ **Fix:** Make sure you're in the right folder (check with `dir` command)

**Problem:** "Port 3000 already in use"
→ **Fix:** Something else is using port 3000. Try: `npm run dev -- -p 3001`
   Then use: `localhost:3001` in browser

**Problem:** Nothing happens in browser
→ **Fix:** Make sure Command Prompt is still open and showing "Ready"

**Problem:** "Permission denied"
→ **Fix:** Run Command Prompt as Administrator (right-click → Run as administrator)
