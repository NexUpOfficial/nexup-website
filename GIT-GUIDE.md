# 🚀 NexUP — GIT-GUIDE.md

A single-file, complete Git & GitHub workflow guide for NexUP developers. Follow this exactly to avoid mistakes, conflicts, and lost work.

---

## 🔒 Safety First (Before Coding)

Always sync your local `main` with the remote `main`:

```
git checkout main
git fetch origin
git pull origin main
```

This ensures your branch starts from the latest stable code.

---

## 📦 Daily Quick Commands

```
git status
git add .
git commit -m "message"
git push
git pull
git checkout -b feature/my-feature
git checkout main
git log --oneline
```

---

## ✅ Full Workflow (Recommended)

### 1. Update the Local Main Branch

```
git checkout main
git fetch origin
git pull origin main
```

### 2. Create a New Descriptive Branch

```
git checkout -b feature/home-video
```

### 3. Make Small, Focused Commits

```
git add .
git commit -m "Add hero background video"
```

### Commit Message Example (Professional)

```
Add NexWorld background video component

Use Cloudinary mp4 as a responsive <video> background. Adds
nexworld-video-wrapper styles and ensures responsive aspect ratio.
```

---

### 4. Push Your Branch to GitHub

```
git push -u origin feature/home-video
```

---

### 5. Create a Pull Request (PR)

1. Go to GitHub → your repo
2. Click **Compare & pull request**
3. Add title + description
4. Submit PR

> Only Admin (Owner) merges into main.

---

### 6. After Merge → Update Main & Delete Branch

```
git checkout main
git fetch origin
git pull origin main
git branch -d feature/home-video
git push origin --delete feature/home-video
```

---

## ⚠️ Handling Merge Conflicts

### Rebase method (preferred):

```
git checkout feature/home-video
git fetch origin
git rebase origin/main
```

Resolve conflicts → `git add .` →

```
git rebase --continue
```

### Merge method (simpler):

```
git checkout feature/home-video
git fetch origin
git merge origin/main
```

Resolve → commit.

### Push after conflict resolution:

```
git push --force-with-lease
```

---

## 🧰 Useful Git Commands

### Status & Diff

```
git status
git diff
git diff --staged
```

### Branch Management

```
git branch
git branch -a
git checkout branch-name
git checkout -b new-branch
git branch -d branch-name
git branch -D branch-name
git push origin --delete branch-name
```

### Logs

```
git log --oneline --graph --decorate --all
```

### Remote

```
git remote -v
git fetch origin
git pull origin main
git push origin branch-name
```

### Reset / Undo

```
git reset HEAD file.js
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

### Remove Tracked File but Keep Locally

```
git rm --cached .env
git commit -m "Stop tracking .env"
```

---

## 🧩 Branch Naming (Summary)

Follow the rules in BRANCHING-RULES.md.

```
feature/home-video
fix/header-bug
update/ui-refresh
docs/setup-file
```

---

## 🧪 Testing Before PR

```
npm run lint
npm test
```

Ensure code builds with:

```
npm start
```

---

## 🔁 Rebase vs Merge

* **Rebase** → Clean history (use before PR)
* **Merge** → Keeps merge commit history

Never rebase a shared team branch.

---

## 🔍 Troubleshooting

### "Already up to date"

Means you already have the latest version.

### "Failed to push some refs"

Someone pushed before you.
Fix:

```
git pull --rebase
```

Resolve conflicts → push.

### Broken dependencies?

Follow SETUP.md instructions:

```
npm install --legacy-peer-deps
npm install --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## 🧾 Recommended Git Aliases (Optional)

```
git config --global alias.s "status -sb"
git config --global alias.l "log --oneline --graph --decorate"
git config --global alias.co checkout
git config --global alias.br branch
```

---

## 🧑‍💻 Team Best Practices

* Never push directly to main
* Keep PRs small
* Write clear commit messages
* Delete merged branches
* Sync main before starting new work
* Never commit `.env`, secrets, or node_modules

---

## 📞 Need Help?

Contact your team lead or open a PR comment with:

* Error message
* Branch name
* Screenshots

---

*End of GIT-GUIDE.md*
