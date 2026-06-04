# 46-Restaurent

Modern, responsive restaurant landing page template built with HTML, CSS and vanilla JavaScript.

## Project Summary

This repository contains a single-page restaurant website (DARKBEAST) showcasing hero, about, menu, gallery, events, reservation form, and contact sections. It's a static front-end project intended as a portfolio or starter template.

## Features

- Responsive layout and components
- Mobile navigation with menu toggle
- Smooth scroll navigation
- Reservation form UI (client-side only)
- Re-usable CSS variables and organized asset folder

## Project Structure

- `index.html` — main HTML file
- `assets/`
  - `css/main.css` — compiled stylesheet used by the site
  - `js/main.js` — UI behavior and interactivity
  - `img/` — images (empty by default)
  - `fonts/` — local fonts (empty by default)
  - `vendors/` — vendor libraries if needed (empty by default)

## How to run (local preview)

The site is static — you can open `index.html` directly in a browser, but using a local HTTP server avoids mixed-content and CORS issues.

Using Python 3 (works in `cmd` or PowerShell):

```
python -m http.server 8000
```

Then open: http://localhost:8000

Using `npx` (Node installed):

```
npx http-server . -p 8000
```

Or install `live-server` globally for auto-reload during development:

```
npm i -g live-server
live-server
```

## Development notes

- CSS lives in `assets/css/main.css`. Keep styles modular and use the `:root` variables for theme colors.
- JS lives in `assets/js/main.js`. It contains header scroll, mobile toggle, smooth scrolling, reservation form handling, and menu tabs.
- Add images to `assets/img/` and reference them from `index.html` or CSS.
- If you add vendor libraries, place them under `assets/vendors/` and reference locally rather than via CDN when appropriate.

## Contribution

1. Fork the repository
2. Create a branch: `git checkout -b feat/my-change`
3. Make changes and test locally
4. Open a pull request with a concise description

## Credits

- Fonts: Google Fonts (`Playfair Display`, `Montserrat`)
- Icons: Font Awesome (CDN)
- Unsplash: placeholder images used in markup

## License

Add a `LICENSE` file to indicate the project license (e.g., MIT).

---
If you want, I can add a `LICENSE` file, a `package.json` with a `dev` script, or a short `CONTRIBUTING.md` next.
