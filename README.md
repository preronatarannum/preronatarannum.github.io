# Prerona Tarannum — personal academic website

A single-page static site (plain HTML and CSS, no build step) for GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All page content. Edit text here. |
| `style.css` | Colors, fonts and layout. |
| `script.js` | Publication topic filter and the highlighted link in the top bar. |
| `favicon.svg` | The browser-tab icon. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |
| `cv.pdf` | **You add this.** Linked from the "CV (PDF)" button. |

## Put it online (about 5 minutes)

1. Sign in to GitHub and create a new **public** repository named exactly
   `<your-username>.github.io` (for example `preronat.github.io`).
2. Click **Add file → Upload files**, drag in everything from this folder
   (including `.nojekyll`; on a Mac press Cmd+Shift+. to see hidden files), and commit.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. After a minute or two the site is live at `https://<your-username>.github.io`.

Prefer the command line?

```bash
git init
git add .
git commit -m "Personal website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

## Before you share the link

- **Add `cv.pdf`.** Use a public version of your CV *without* your home address and
  phone number. The website itself leaves both out on purpose.
- **Add your GitHub link (optional).** In `index.html`, copy one of the `<li>` lines in the
  `links` list and point it at `https://github.com/<your-username>`.

## Keeping it current

- New paper: copy an `<li>` block in the Publications section and edit the title, authors,
  venue and links. Wrap your own name in `<span class="me">…</span>`. Set `data-tags` to any of
  `misinfo`, `multilingual`, `llm` so the topic filter picks it up.
- News: add a new `<li>` at the top of the News list and drop the oldest when it gets past six or so.
- Update the paper counts in the facts strip under the hero when they change.
- To change your photo, replace `photo.jpg` (portrait, 4:5, about 800×1000 px).
- Your Bangla name above the English one is in the line with `class="bn-name"`; correct the spelling there if needed.
- When a chapter is accepted, move it from "Under review" into its year.
- Update the "Last updated" line in the footer.
- After you accept a PhD offer, change the "Applying to PhD programs for Fall 2027" line
  in the hero and the "Get in touch" paragraph.
