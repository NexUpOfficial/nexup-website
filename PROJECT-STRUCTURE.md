# 🏗️ NexUP — PROJECT-STRUCTURE.md

This document explains the **exact structure** of the `src/` folder in the NexUP website project based on your actual directory tree.

It helps new developers understand where files live, why they exist, and how the project is organized.

---

# 📁 **Root Files (src/)**

```
App.css
App.jsx
main.jsx
```

### ✔ `App.jsx` — Main application wrapper (routes, layout)

### ✔ `main.jsx` — React entry point (ReactDOM rendering)

### ✔ `App.css` — Global styles

---

# 🎨 **animations/**

```
animations/
│   RisingSmoke.jsx
│   SmokeBackground.jsx
│   SmokeGlow.jsx
```

### Used for:

* Background smoke effects
* Visual enhancements
* Reusable animation components

---

# 🧩 **components/**

Reusable UI building blocks.

```
components/
│   Header.jsx
│   Main.jsx
│   PageTransition.jsx
│   ScrollToTop.jsx
│   Sidebar.jsx
│
├── Footer/
│     Footer.css
│     Footer.jsx
│
├── styles/
│     Header.css
│     Main.css
│     Sidebar.css
│
└── TopLoader/
      Loader.css
      Loader.jsx
```

### Contains:

* **Header / Sidebar** → Navigation UI
* **PageTransition** → Page animations
* **ScrollToTop** → Auto-scroll on route change
* **Footer** → Global footer component
* **TopLoader** → Loading animation

---

# 🔁 **hooks/**

```
hooks/
└── refresh/
        refresh.css
        RefreshPage.jsx
```

### Custom hooks and utilities:

* `RefreshPage` → Forces refresh or animation reset

---

# 🧱 **layout/**

```
layout/
│   PageLayout.css
│   PageLayout.jsx
```

### Defines global page layout structure:

* Wrapper around all pages
* Standard spacing, alignment, safes zones

---

# 🎨 **page-styles/**

Dedicated CSS for each page.

```
page-styles/
│   Contact.css
│   Home.css
│   Login.css
│
├── About/
│     About.css
│     Career.css
│     Company.css
│     News.css
│     Stories.css
│     Team.css
│     Vision.css
│
├── Account/
│     DNS.css
│
├── Ecosystem/
│     Ecosystem.css
│     NexEngine.css
│     NexHousing.css
│     NexNodes.css
│     NexSearch.css
│     NexWorld.css
│
├── Safety/
│     Approach.css
│     Privacy.css
│     Transparency.css
│     Trust.css
│
├── Search/
│     Search.css
│
└── Support/
      Guidelines.css
      Help.css
```

### Purpose:

* Keeps styles modular
* Makes pages easy to manage
* Professional separation by category (About, Ecosystem, Safety, Support)

---

# 📄 **pages/**

All route-based pages live here.

```
pages/
│   Contact.jsx
│   Home.jsx
│   Login.jsx
│
├── About/
│     About.jsx
│     Career.jsx
│     Company.jsx
│     News.jsx
│     Stories.jsx
│     Team.jsx
│     Vision.jsx
│
├── Account/
│     DNS.jsx
│
├── Ecosystem/
│     Ecosystem.jsx
│     NexEngine.jsx
│     NexHousing.jsx
│     NexNodes.jsx
│     NexSearch.jsx
│     NexWorld.jsx
│
├── Safety/
│     Approach.jsx
│     Privacy.jsx
│     Transparency.jsx
│     Trust.jsx
│
├── Search/
│     Search.jsx
│
└── Support/
      Guidelines.jsx
      Help.jsx
```

### Page Categories:

#### **Home / Contact / Login** → Main entry pages

#### **About** → Company sections

#### **Ecosystem** → NeX UP platform products (NexWorld, NexNodes, NexEngine etc.)

#### **Safety** → Privacy, Transparency, Trust pages

#### **Support** → Help guides

#### **Search & Account** → User tools

---

# 🧠 Summary (For New Developers)

The project is structured to be:

* **Clean** → Clear separation of pages, components, layouts
* **Scalable** → Easy to add new products/pages
* **Maintainable** → Each section has its own CSS and JSX
* **Professional** → Industry-standard file architecture

---

# 📌 Final Notes

If you create new pages, follow the same structure:

* Add page in `pages/<Category>/<Page>.jsx`
* Add CSS in `page-styles/<Category>/<Page>.css`
* Add needed components under `components/`

---

*End of PROJECT-STRUCTURE.md*
