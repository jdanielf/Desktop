<!-- .github/copilot-instructions.md
Repository: aula1 (simple Electron + static HTML/JS exercises)
Purpose: concise guidance so an AI code assistant can be immediately productive in this workspace.
-->

# Copilot instructions for this repo

This is a small teaching/demo project that packages a set of static HTML pages and a small Electron host. Keep edits minimal, explain changes, and prefer safe, low-risk improvements.

Key facts
- Project root: `aula1`.
- Electron entry: `package.json` -> script `start` runs `electron main.js`.
- Main process: `main.js` creates a BrowserWindow and loads `index.html`.
- Frontend: plain HTML files (`index.html`, `atividade2.html`, `qt3.html`) and a single JS file `funcao.js` used by all pages.

What to change and how
- Small fixes only: prefer non-breaking fixes to UI text, JS bugs, or accessibility improvements.
- When editing JS, keep functions in `funcao.js` and ensure they are safe for all pages that include it (multiple HTML files import it). If adding new exports, update `index.html` or `main.js` only when required.
- Avoid adding heavy build tooling or frameworks. This repo is intentionally simple and uses Electron to show local HTML files.

Common patterns and examples
- DOM-driven UI: functions read/write elements by id. Example: `pegarNome()` reads `#nome` and updates `#texto` in `funcao.js`.
- Multiple pages reuse the same `funcao.js`. Do not assume a variable or element exists on every page; check for null before using (defensive checks).

Developer workflows & commands
- Run locally with Electron: from `aula1` run npm install once, then `npm start` which executes `electron main.js` (see `package.json`).
  - On Windows PowerShell, use: npm install; npm start
- No tests or CI configured. Don't add tests unless you also add a minimal test runner and document why.

Conventions specific to this repo
- Use Portuguese (pt-BR) UI strings where present. Many files use Portuguese messages and ids (e.g., `Bem-vindo`, `atividade`).
- Styling is inline in the HTML files. If you add a new CSS file, link it in the HTML and avoid removing existing inline styles unless consolidating intentionally.

Integration points & external deps
- Only external dependency is `electron` declared in `package.json`.
- There are no back-end services or network calls; all logic runs in the browser (renderer) or main Electron process.

Safe edit checklist for pull requests
1. Confirm change is small and self-contained (UI text, one function fix, small refactor).
2. Verify pages continue to load in Electron with `npm start` and that console shows no runtime errors.
3. If modifying `funcao.js`, open `index.html`, `atividade2.html`, and `qt3.html` to confirm no missing ids or cross-page regressions.
4. Keep commit messages clear and in Portuguese when editing UI copy.

Examples of typical tasks
- Fix a JS bug: wrap document.getElementById(...) usage with null checks when an element is optional across pages.
- Improve UX: clear text inputs after use (consistent behavior already used in `pegarNome` / `limparButton`).
- Add a small helper: create a `utils.js` only if it will be reused by multiple functions and keep it referenced by HTML pages.

When to ask the repo owner
- When proposing to add build tooling (webpack, vite) or tests. This repo is intentionally minimal—confirm before major changes.
- When adding new npm dependencies beyond `electron`.

If you edit this file
- Merge existing instructions conservatively, preserve Portuguese UI guidance, and keep the file short (20–50 lines recommended).

---
End of instructions.
