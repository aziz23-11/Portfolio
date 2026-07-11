# Personal portfolio

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
