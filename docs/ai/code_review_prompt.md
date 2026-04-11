# Code Review Prompt — plan-salud

This file configures the `code-review` and `finish-branch` skills for this project.

## Project Context

A single-file HTML/JavaScript health plan app (`index.html`) using Firebase Realtime Database for calendar progress persistence. No build system or package manager.

## Quality / Pre-Flight Checks

This project has no automated test suite or linter yet. Manual verification steps:

1. **Open `index.html` directly in a browser** (file://) or via a local HTTP server.
2. **Check all nav tabs** (Salud, Hábitos, Menú, Recetas, Compras, Ejercicio, Calendario) render without blank sections.
3. **Check the Calendario tab**: should load days from Firebase and show checkboxes for Desayuno, Almuerzo, Cena, Agua, Ejercicio.
4. **Toggle a habit checkbox** and verify it persists after a page reload.
5. **Check browser console** for JavaScript errors (F12 → Console).

## Review Categories to Enforce

| Category | Rule |
|----------|------|
| **Complexity** | No inline JS block > 60 lines |
| **DOM structure** | All `.section` divs must be **inside** `.content` div |
| **Inline styles** | Avoid `style="display:none"` on `.section` divs — use CSS classes |
| **JS module scope** | All variables used across functions must be declared with `let`/`const` at module scope |
| **Firebase** | Reads/writes must be inside try/catch |
| **Accessibility** | All `<input>` elements must have an associated `<label>` |
