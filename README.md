# Prerona Tarannum — personal academic website

A single-page static site (plain HTML and CSS, no build step) for GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All page content. Edit text here. |
| `style.css` | Colors, fonts and layout. |
| `favicon.svg` | The browser-tab icon. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |
| `cv.pdf` | **You add this.** Linked from the "CV (PDF)" button. |
| `photo.jpg` | **Optional.** Shown beside your name; hidden automatically if missing. |

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
- **Add a photo (optional).** Save a portrait as `photo.jpg` (roughly 4:5, at least 480×600 px).
- **Add your GitHub link (optional).** In `index.html`, copy one of the `<li>` lines in the
  `links` list and point it at `https://github.com/<your-username>`.

## Keeping it current

- New paper: copy an `<li>` block in the Publications section and edit the title, authors,
  venue and link. Wrap your own name in `<span class="me">…</span>`.
- When a chapter is accepted, move it from "Under review" into its year.
- Update the "Last updated" line in the footer.
- After you accept a PhD offer, change the "Applying to PhD programs for Fall 2027" line
  in the hero and the "Get in touch" paragraph.
