# Advanced Calculator

A modern browser-based calculator with scientific functions, theme switching, and calculation history management.

## Overview

This project is a lightweight front-end calculator built with HTML, CSS, and vanilla JavaScript. It supports standard arithmetic, selected scientific operations, keyboard input, clipboard copy, and downloadable history files.

## Features

- Basic operations: `+`, `-`, `*`, `/`, decimal, parentheses
- Scientific inputs: `sin`, `cos`, `tan`, `sqrt`, `log`, `π`, `e`
- Keyboard support: numbers, operators, Enter, Backspace, Escape
- Light/Dark mode toggle with animated switch and mode label
- Calculation history with local persistence (`localStorage`)
- History controls:
	- Delete individual history rows
	- Clear all history
	- Clear all except latest result
	- Undo last deleted history item
- Export history as `.txt` and `.csv`
- Copy current display value to clipboard

## Project Structure

```text
calculater/
|-- index.html
|-- README.md
`-- assets/
		|-- css/
		|   `-- style.css
		`-- js/
				`-- script.js
```

## Tech Stack

- HTML5
- CSS3 (custom properties, animations)
- JavaScript (ES6, DOM APIs, Web Storage API)

## Getting Started

### Option 1: Open Directly

1. Open `index.html` in any modern browser.

### Option 2: VS Code Live Server

1. Open the project folder in VS Code.
2. Start Live Server from `index.html`.
3. Use the generated local URL to run with auto-reload.

## Usage

- Click buttons or use the keyboard to enter expressions.
- Press `=` or `Enter` to evaluate.
- Use `C` or `Escape` to clear the display.
- Use `Copy` to copy the display value.
- Use history controls to manage or export prior calculations.

## Notes

- History is stored in browser local storage under `calcHistory`.
- Theme state is controlled by the toggle switch in the UI.

## Author

Created for a front-end calculator project structure and UI practice.