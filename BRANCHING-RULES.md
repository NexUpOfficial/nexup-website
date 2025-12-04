# 🌿 NexUP — BRANCHING-RULES.md

A clean, professional branching strategy for all NexUP developers.
Follow these rules to keep the repository organized, scalable, and conflict-free.

---

# ⭐ 1. Branch Naming Format

All branches **must** follow this structure:

```
<prefix>/<short-description>
```

### Allowed Prefixes

```
feature    → New features, pages, UI components
fix        → Bug fixes
update     → UI/layout/content updates
refactor   → Code restructuring without new features
docs       → Documentation updates
hotfix     → Emergency urgent fixes for main
```

### Examples

```
feature/home-video
feature/nexworld-video-background
fix/header-overflow-bug
update/about-page-spacing
refactor/sidebar-structure
docs/git-guide-update
hotfix/login-error
```

---

# ⭐ 2. Rules for Naming Branches

* Use **lowercase only**
* Use **hyphens (-)** instead of spaces
* Keep names **short but meaningful**
* One branch = one purpose
* Do NOT use long sentences
* Avoid vague names like:

  * `branch1`
  * `test`
  * `kiran-work`

---

# ⭐ 3. Main Branch Strategy

### `main` Branch

* Always stable
* Only contains **production-ready** code
* Only admin merges into main
* No direct commits allowed

### Feature / Fix Branches

* Always branch **from main**
* Always create PR before merging

---

# ⭐ 4. Branch Life Cycle

### 1. Create branch from main

```
git checkout main
git pull
git checkout -b feature/home-video
```

### 2. Work & commit

```
git add .
git commit -m "Add hero background video"
```

### 3. Push to GitHub

```
git push -u origin feature/home-video
```

### 4. Open Pull Request

Admin reviews → approves → merges into main.

### 5. Delete merged branch

```
git branch -d feature/home-video
git push origin --delete feature/home-video
```

---

# ⭐ 5. When to Create Each Type of Branch

### ✔ feature/

When adding:

* New pages
* New UI components
* Animations
* Video backgrounds
* New sections

### ✔ fix/

When repairing bugs:

* CSS errors
* Logic bugs
* Wrong paths
* Crashes

### ✔ update/

When improving something *already existing*:

* Layout improvements
* Color or spacing changes
* Content updates
* Style fixes

### ✔ docs/

When writing or updating documentation:

* README
* SETUP.md
* Git guides

### ✔ refactor/

When reorganizing code:

* Clean-up
* Folder restructuring
* Splitting components

### ✔ hotfix/

Emergency fixes directly for production.

---

# ⭐ 6. Forbidden Branch Names

* `main` (don’t create new main)
* `master` (not used in NexUP)
* Names with spaces
* Random names like:

```
mybranch
newwork
testing
abc
```

---

# ⭐ 7. Best Practices

* Always sync main before making a branch
* Delete branches once merged
* Never reuse old branches
* Keep PRs small and focused
* Always follow prefix structure
* Avoid long-lived branches

---

# ⭐ 8. Quick Reference Table

| Type     | Purpose                  | Example                       |
| -------- | ------------------------ | ----------------------------- |
| feature  | New features/pages       | feature/nexsearch-ui          |
| fix      | Bug fixes                | fix/sidebar-overlap           |
| update   | UI/content updates       | update/home-responsive        |
| docs     | Documentation            | docs/setup-update             |
| refactor | Code rewrite/cleanup     | refactor/components-structure |
| hotfix   | Emergency production fix | hotfix/build-crash            |

---

# 📌 Final Notes

Following this branching strategy ensures:

* Clean Git history
* Easy PR reviews
* No naming confusion
* Smooth team collaboration
* Professional workflow

---

*End of BRANCHING-RULES.md*
