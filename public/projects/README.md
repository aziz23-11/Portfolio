## Adding screenshots to a project

1. Drop your image files into this folder, inside a subfolder named after the
   project's slug — e.g. `public/projects/khadamni/1.png`.
2. Open `src/data/projects.js` and fill in the `screenshots` array for that
   project:

   ```js
   screenshots: [
     { src: "/projects/khadamni/1.png", alt: "KHADAMNI dashboard" },
     { src: "/projects/khadamni/2.png", alt: "CV compatibility score screen" },
   ],
   ```

   The `src` path always starts with `/projects/...` — files in `public/` are
   served from the site root, not from `/public`.
3. The gallery section on the project page appears automatically once a
   project has at least one screenshot, and is skipped entirely if the array
   is empty.

Any image format the browser supports works (png, jpg, webp). Keep files
reasonably sized (compress large PNGs) so the project page stays fast.
