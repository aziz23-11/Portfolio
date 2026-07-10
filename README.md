# E-ink portfolio

A multi-page React portfolio built with Tailwind CSS, React Router, and lucide-react icons, styled to look like an e-ink display. Each project has its own dedicated page.

## Setup

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
portfolio-project/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx           # app entry, wraps everything in BrowserRouter
    ├── App.jsx            # route definitions
    ├── index.css
    ├── components/
    │   └── Nav.jsx        # shared nav bar used on every page
    ├── data/
    │   └── projects.js    # all project content lives here
    └── pages/
        ├── Home.jsx        # hero, about, skills, experience, project grid, contact
        └── ProjectPage.jsx # individual project page (route: /projects/:slug)
```

## Editing content

- **Skills, experience:** edit the arrays at the top of `src/pages/Home.jsx`.
- **Projects:** edit `src/data/projects.js` — this single file feeds both the project grid on the home page and each project's own page. Add a new project by adding a new object with a unique `slug`; a new route is generated automatically.
- **Contact info / social links:** update the email address and social URLs in `src/pages/Home.jsx`.

## Deploying

Since this uses client-side routing (React Router), if you deploy to a static host make sure it redirects all paths to `index.html` so routes like `/projects/khadamni` work on a hard refresh.

This project already includes the config for the two easiest free options:

**Netlify** (recommended — free tier allows commercial use within usage limits)
1. Push this folder to a GitHub repo
2. Go to netlify.com → sign up with GitHub → "Add new site" → import the repo
3. Build command: `npm run build`, publish directory: `dist` (Netlify usually auto-detects this)
4. Deploy — `public/_redirects` (already included) handles the routing automatically

**Vercel**
1. Push this folder to a GitHub repo
2. Go to vercel.com → sign up with GitHub → import the repo
3. Vercel auto-detects Vite — no config needed, `vercel.json` (already included) handles routing

Both give you a free subdomain (`yourname.netlify.app` / `yourname.vercel.app`) immediately, with the option to add a custom domain later at no extra cost.
