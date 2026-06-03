# Admission Form

A responsive multi-step admission form built with plain HTML, CSS, and JavaScript. The form includes a progress bar, step navigation, floating labels, and a final submission state.

## Features

- Four-step application flow
- Progress indicator with step counter
- Previous and Next navigation buttons
- Responsive two-column layout on larger screens
- Floating labels for inputs, selects, and textareas
- Basic submit/reset handling in JavaScript

## Project Structure

```text
38-admision-form/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## How To Run

1. Open `index.html` in your browser, or
2. Use a local live server extension in VS Code for the best preview experience.

## Notes

- The form is currently front-end only and does not submit data to a backend.
- The Previous button is hidden on the first step and appears after moving forward.
- The progress bar updates automatically as you move through the form steps.