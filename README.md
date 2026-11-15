# Mohamed El-Haddady — Portfolio

Personal portfolio: a single static page, no build step.

- Three languages: English, French and Arabic (right-to-left)
- Light and dark mode (follows the device setting, then remembers the visitor's choice)
- Responsive from phones to desktops

## Files

- `index.html` — all content, styles and scripts
- `netlify.toml` — Netlify config (publishes the repo root)
- `favicon.svg`

## Add your photo

Put a portrait photo named `profile.jpg` next to `index.html` (4:5 ratio works best, e.g. 800×1000). It replaces the placeholder automatically.

## Edit the text

English is the text inside each element; French is in its `data-fr` attribute and Arabic in `data-ar`, so all three are edited in one place.

## Run locally

`python -m http.server`, then open http://localhost:8000.
