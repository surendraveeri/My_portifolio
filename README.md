# Veeri Jay Durga Surendra Gowda — Portfolio (React + TypeScript)

Same portfolio site, rebuilt as a React + TypeScript project using Vite. No CSS framework —
the original hand-written stylesheet is used as-is (`src/index.css`).

## Folder structure

```
.
├── index.html                  ← Vite HTML entry (fonts + <div id="root">)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx                 ← React entry point
    ├── App.tsx                  ← composes all sections on the page
    ├── index.css                ← all styling (colors, layout, fonts, animations)
    ├── types.ts                 ← shared TypeScript interfaces
    ├── vite-env.d.ts            ← asset/module type declarations
    ├── components/
    │   ├── Nav.tsx               ← nav bar, icons, section links, theme toggle
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Experience.tsx
    │   ├── Projects.tsx
    │   ├── Education.tsx
    │   ├── Certifications.tsx
    │   ├── Contact.tsx           ← contact list + "Send Message" form
    │   ├── Footer.tsx
    │   ├── ResumeModal.tsx       ← résumé preview/download popup
    │   ├── ProgressBar.tsx       ← top scroll-progress bar
    │   ├── BackToTop.tsx
    │   ├── CustomCursor.tsx      ← desktop magic-cursor effect
    │   └── Toast.tsx             ← small confirmation toast
    ├── hooks/
    │   ├── useScrollProgress.ts
    │   ├── useReveal.ts          ← fade-in-on-scroll animation
    │   ├── useNavSpy.ts          ← highlights the active nav link
    │   ├── useTheme.ts           ← light/dark mode
    │   ├── useCursorFX.ts
    │   └── toastBus.ts           ← lets any component trigger a toast
    ├── utils/
    │   ├── clipboard.ts
    │   └── mail.ts               ← opens Gmail web compose (see note below)
    ├── data/                     ← all page content, fully typed
    │   ├── siteConfig.ts         ← name, email, phone, social links
    │   ├── navLinks.ts
    │   ├── skills.ts
    │   ├── experience.ts
    │   ├── projects.ts
    │   └── education.ts          ← education + certifications
    └── assets/
        ├── portrait.jpg
        ├── resume.pdf
        └── resume-preview.jpg
```

## Editing content

Everything you're likely to want to change lives in **`src/data/`**:

- **Name, email, phone, social links** → `src/data/siteConfig.ts`
- **Skills** → `src/data/skills.ts`
- **Work experience** → `src/data/experience.ts`
- **Projects** → `src/data/projects.ts`
- **Education & certifications** → `src/data/education.ts`
- **Nav menu items** → `src/data/navLinks.ts`

Each file is a typed array — add, remove, or edit an object and the page updates automatically; TypeScript will flag it if you miss a required field.

- **Colors / fonts / spacing** → `src/index.css`. Theme colors are CSS variables near the top (`--accent`, `--c-violet`, `--c-pink`, etc.)
- **Photo / résumé** → replace files in `src/assets/` (keep the same filenames, or update the `import` paths in `About.tsx` / `ResumeModal.tsx` if you rename them)

## Running locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a `dist/` folder containing static HTML/CSS/JS — ready to deploy anywhere.

```bash
npm run preview   # serves the dist/ build locally, to sanity-check it
```

## Deploying

### Vercel (recommended for React/Vite)
1. Push this project to a GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Vercel auto-detects Vite — no config needed. Deploy.

### Netlify
1. Push to GitHub, or drag-and-drop the built `dist/` folder onto https://app.netlify.com/drop
2. If deploying from Git: build command `npm run build`, publish directory `dist`

### GitHub Pages
1. `npm run build`
2. Push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package)
3. Enable Pages in repo settings, pointing at that branch

## Notes

- The "Send Message" form and mail icons open **Gmail's web compose window** in a new tab
  (`src/utils/mail.ts`) — this works in any browser without needing a local mail app installed.
  Your email address is also copied to the clipboard as a backup, with a toast confirming it.
- Theme defaults to the visitor's OS light/dark preference and can be toggled manually via the
  nav bar button (session-only, not persisted across visits).
