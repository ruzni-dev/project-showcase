# DARKBEAST — Agency Landing Page

A polished, responsive static landing page template for a creative agency. This project demonstrates a clean structure for production-ready static sites, with separated asset folders and CDN-hosted dependencies for fonts and UI effects.

## Features
- Fully responsive layout and hero video background
- Smooth scrolling navigation and header scroll effects
- AOS scroll animations (CDN)
- Font Awesome icons and Google Fonts (CDN)
- Organized `assets/` folder for CSS, JS, and images

## Technologies
- HTML5
- CSS (custom)
- Vanilla JavaScript
- AOS (Animate On Scroll) — CDN
- Font Awesome & Google Fonts — CDN

## Project Structure

```
47-agency-landing-page/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── (optional images or extras)
```

- Main entry: [index.html](index.html)
- Styles: [assets/css/style.css](assets/css/style.css)
- Scripts: [assets/js/script.js](assets/js/script.js)

## Setup & Local Development

Quick options to preview the site locally:

1) Open directly

	 - Double-click `index.html` to open in your browser (suitable for simple static previews).

2) Serve with Python (recommended to avoid mixed-content and CORS issues):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

3) Serve with a lightweight Node static server:

```bash
npx serve . -l 8000
# or: npx http-server . -p 8000
```

## Development Notes
- Edit styles in [assets/css/style.css](assets/css/style.css).
- Edit scripts in [assets/js/script.js](assets/js/script.js).
- CDN links (AOS, Font Awesome, Google Fonts) are included directly in `index.html`; no build step is required.

## Deployment

This is a static site and can be deployed to any static host (GitHub Pages, Netlify, Vercel, Surge).

- GitHub Pages (quick):
	1. Create a repository and push this project.
	2. In repo Settings → Pages, set the source to the `main` branch and `/root` (or enable GitHub Pages for `gh-pages` branch if used).

- Netlify / Vercel: Drag-and-drop the `dist` (or project) folder, or connect your repo and set the publish directory to `/`.

## Contributing
- This template is small and focused. For changes: fork, create a branch, and open a PR. Suggest adding a license and CI if you plan to publish.

## Next steps I can do for you
- Add a `.gitignore` and minimal `package.json` for local tooling.
- Add a simple `README` badge or deployment action for GitHub Pages.

## Contact
If you want me to add tooling or CI, tell me which option you prefer and I'll scaffold it.

---
_(Generated on May 20, 2026)_
