# Lundi Buswana — Personal Portfolio

I’m Lundi Buswana — a third-year Computer Science student at Nelson Mandela University. This personal portfolio documents my journey from Tsolo to NMU and showcases the web systems assignments [...]

## Live preview
Open the site locally in your browser:

- Double-click this file to view locally in your file browser:
  `LundiBuswana/LundiBuswana/s221519769Buswana/index.html`

- Or serve the repository and open the page (shortest path):

```bash
git clone https://github.com/LundiBuswana/PortFolio-Lundi.git
cd PortFolio-Lundi
python3 -m http.server 8000
# then open in your browser:
# http://localhost:8000/LundiBuswana/LundiBuswana/s221519769Buswana/index.html
```

You can also use the Live Server extension in VS Code for instant reload while editing.

## What’s in this repository
- `WRWV201 2026 Portfolio Instructions.pdf` — course instructions (PDF)
- `LundiBuswana/` — the portfolio site and assets

Site (key files)

- `LundiBuswana/LundiBuswana/s221519769Buswana/index.html` — Home / story overview
- `LundiBuswana/LundiBuswana/s221519769Buswana/about.html` — detailed personal story and skills table
- `LundiBuswana/LundiBuswana/s221519769Buswana/projects.html` — assignments gallery and preview modal
- `LundiBuswana/LundiBuswana/s221519769Buswana/contact.html` — contact details and form UI
- `LundiBuswana/LundiBuswana/s221519769Buswana/css/styles.css` — site styles
- `LundiBuswana/LundiBuswana/s221519769Buswana/js/portfolio.js` — client-side behaviour
- `LundiBuswana/LundiBuswana/s221519769Buswana/images/` — profile, screenshots, certificate, and photos

## Stack
- Languages: HTML, CSS, JavaScript
- Runtime: static site (no server-side code)
- Notable library: jQuery (loaded from CDN)

## How it works
- Pages use relative links so the `s221519769Buswana` folder can be opened directly or served by a static host.
- `projects.html` uses an iframe preview modal to show assignment pages from `assignments/` (e.g. `assignments/Assignment 2 Website/Home.html`).
- The contact form is client-side (action="#"); to accept submissions you can integrate a server endpoint or a form service (Formspree, Netlify Forms, etc.).

## Deployment
This is a static site; you can host it on:
- GitHub Pages — either move the site files to the repository root or configure Pages to serve from the `LundiBuswana/LundiBuswana/s221519769Buswana` folder (or use a branch / docs folder).
- Netlify, Vercel, or any static host — upload the `s221519769Buswana` folder as the publish directory.

## Contact
- Email: lundibuswana@gmail.com
- GitHub: `@lundibuswana`

## License
No license file is included. If you want others to reuse this site, add a LICENSE (MIT is a common choice).

---
