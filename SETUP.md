# 🚀 NexUP Project — Setup Guide

Welcome to the NexUP development environment setup guide.  
Follow these steps whenever you clone the project on a new system or reinstall dependencies.

This guide ensures your installation works even when dependency conflicts occur.

---

## 🔧 1️⃣ Install All Dependencies (Safe Mode)

Run this command first:



This installs packages while **ignoring peer dependency conflicts** (common in React, Framer-motion, and older libs).

---

## ⚠️ 2️⃣ If installation fails — Force Install

If you still see errors like:

- `ERESOLVE unable to resolve dependency tree`
- version mismatches
- peer dependency issues

Run:


This forces npm to install dependencies even if versions conflict.

---

## 🔥 3️⃣ If installation STILL fails — Reset everything

Sometimes your environment may contain corrupted packages.  
In that case:

### ❌ Delete `node_modules` and `package-lock.json`


(Windows users can delete them manually or use Git Bash)

### ✅ Reinstall again using the stable method:


This resolves 99% of installation issues.

---

## ▶️ 4️⃣ Start the Development Server

Once dependencies are installed, run:


---

## 🎯 Notes for Team Members

- `node_modules` is intentionally **NOT included** in GitHub. Always run `npm install` after cloning.
- Use **Node.js LTS version** (Recommended: Node 18 or above).
- If you install new packages, always commit:
  - `package.json`
  - `package-lock.json`  
  (NOT node_modules)

---

## ❤️ Need Help?

If your installation fails after all these steps, please contact the NexUP team or open an issue in the repository.

Happy coding!  
— **NexUP Development Team**



Summary:

# NexUP Installation Guide

If you clone this project on a new system, follow this installation order:

## 1️⃣ Install dependencies (ignore peer conflicts)
npm install --legacy-peer-deps

## 2️⃣ If installation fails, force install
npm install --force

## 3️⃣ If still failing:
Delete node_modules and package-lock.json

rm -rf node_modules package-lock.json

Then reinstall:
npm install --legacy-peer-deps
