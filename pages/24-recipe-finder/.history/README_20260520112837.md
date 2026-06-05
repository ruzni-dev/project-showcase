# Recipe Finder

A polished static recipe discovery app built with HTML, CSS, and JavaScript. It includes a premium hero layout, featured recipe cards, search and filtering, favorites, recipe collections, and a detailed modal view for each recipe.

## Features

- Search recipes by title, ingredients, or cuisine.
- Filter by vegetarian, vegan, gluten-free, dessert, quick meals, light meals, and favorites.
- Sort results by featured, rating, time, calories, or title.
- Save recipes to favorites with persistent browser storage.
- Open a rich recipe modal with ingredients, instructions, and share/copy support.
- Explore curated recipe collections and a quick kitchen guide section.
- Responsive layout optimized for desktop, tablet, and mobile screens.

## Project Structure

```text
24-recipe-finder/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── README.md
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts

## How To Run

This is a static project, so no build step is required.

1. Open the project folder in VS Code or your file explorer.
2. Open [index.html](index.html) in a browser.
3. Use the search bar, filters, and recipe cards to explore the app.

## Main Sections

- Hero section with summary stats and quick actions.
- Search and sorting controls for narrowing recipes.
- Recipe collections for quick goal-based browsing.
- Kitchen guide with practical cooking tips.
- Popular recipes grid with featured cards and favorites.
- Modal recipe details with ingredients and instructions.

## Notes

- Favorites are stored in the browser using `localStorage`.
- The recipe data is defined in [assets/js/script.js](assets/js/script.js).
- Visual styling and responsive behavior live in [assets/css/style.css](assets/css/style.css).