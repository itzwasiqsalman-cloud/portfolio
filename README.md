# Personal Portfolio Website

A static single-page portfolio — plain HTML, CSS, and vanilla JavaScript. No framework,
no build step: open `index.html` in a browser and it works.

## Files

```
index.html    — page structure (hero, about + tabs, certificates, projects, contact)
styles.css    — all styling; design tokens live at the top in :root
script.js     — content data arrays at the top, behaviour below
assets/
  photos/        — photography-tab images (6 SVG placeholders included)
  certificates/  — certificate images (4 SVG placeholders included)
  projects/      — project thumbnails (3 SVG placeholders included)
```

## Replacing the placeholders

Everything fake is wrapped in `[PLACEHOLDER: …]` or `[YOUR … HERE]` so nothing
accidental ships. Search the project for `PLACEHOLDER` to find every spot.

- **Name, bio, tab copy, contact line** — edit directly in `index.html`.
- **Email** — in `index.html`, update both the `mailto:` href and the visible text of
  the `.contact__email` link.
- **Page title & meta description** — in the `<head>` of `index.html`.

## Adding / editing photos, certificates, projects, socials

All repeating content lives in clearly-commented arrays at the **top of `script.js`**:

- **Photos** — drop images into `assets/photos/`, then add an entry to `PHOTOS` with
  `src`, `title`, `description`. Add or remove entries freely; the grid adapts. The
  flip cards appear in the Selected work section under the All and Photography
  filters.
- **About collage** — the four images live in `assets/collage/`; swap the files or
  edit the `<img>` tags inside `#about-collage` in `index.html`.
- **Certificates & achievements** — drop images into `assets/certificates/`, add an
  entry to `CERTIFICATES` with `title`, `issuer`, `description`, `image`. Set
  `image: null` for achievements without a visual yet (they render as text-only
  cards and don't open the lightbox); add the path later when you have one.
- **Projects** — add entries to `PROJECTS`. `tags` accepts any of `"build"`,
  `"write"`, `"perform"`, `"photography"` (used by the filter buttons). `stack` is
  an optional list of small chips (tech stack, credits, awards). `links` is an
  array of `{ label, url }` objects — leave it empty (`[]`) for no links. `thumb`
  is an optional thumbnail path, or `null`.
- **Social links** — update the `url` values in `SOCIAL_LINKS`. Icons are inline SVG
  in the `ICONS` map just below it.

## Swapping the utility font (IBM Plex Sans ↔ Instrument Sans)

1. In `index.html`, swap the Google Fonts `<link>` — the alternate is included as a
   comment right below the active one.
2. In `styles.css`, change the single `--font-utility` line at the top of `:root`.

## Deploying

### GitHub Pages
1. Create a repository and push these files to it (the site must sit at the repo root).
2. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick `main` and
   `/ (root)`, save.
3. The site appears at `https://<username>.github.io/<repo>/` in a minute or two.
   (Name the repo `<username>.github.io` to serve it at the bare domain.)

### Netlify
- Easiest: go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the
  project folder onto the page. Done.
- Or connect the GitHub repo in Netlify: **Add new site → Import an existing
  project**, leave the build command empty and the publish directory as the repo
  root.
