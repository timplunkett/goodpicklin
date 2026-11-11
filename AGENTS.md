# AGENTS.md

Guidance for AI coding agents (and humans) working in this repo.

## What this is

Source for [goodpicklin.com](https://goodpicklin.com), a landing page for
**Good Picklin’ Social Open Play**, a Saturday facilitated pickleball open play
hosted by Tim and Megh Plunkett. It is a small, unthemed Jekyll site served by
GitHub Pages.

### Who visits, and what they need

1. **In-person attendees at the courts** who want to find their skill level.
   They arrive on a phone (often via the QR code on the printed sign), take the
   quiz at `/levels`, and **tell the host their result**. Courts are not mapped
   to levels; the host uses the result to organize games.
2. **Prospective attendees** who want the details and the sign-up link.

### Sign-ups are on a third-party site

Sign-ups, dates, times, location and price live on Ballers
(`site.signup_url` in `_config.yml`), which we don't control. That site is the
source of truth: **do not copy schedules, addresses or prices onto this site**,
because they will go stale. Link to `{{ site.signup_url }}` instead of
hard-coding the URL.

## Layout of the repo

| Path | Purpose |
| --- | --- |
| `_config.yml` | Site settings, `signup_url`, plugins, defaults, excludes |
| `_layouts/default.html` | The only layout. Pages can set `stylesheets:`, `scripts:`, `body_class:` and `noindex:` in front matter. |
| `index.html` | Homepage (persona 2) |
| `levels.md`, `assets/levels.js`, `assets/levels.css` | Skill level quiz at `/levels` (persona 1) |
| `sign.html`, `assets/sign.css`, `assets/qr-*.svg` | Printable court sign at `/sign` (noindex, not linked) |
| `assets/main.css` | Site-wide styles (plain CSS, light + dark via CSS variables) |
| `404.html` | Not-found page |

## Conventions

- **No theme, no CSS framework, no build step beyond Jekyll.** Plain CSS in
  `assets/`; colors and radii come from the variables at the top of
  `assets/main.css`. Mobile first: most quiz traffic is on phones at the courts.
- **Only GitHub Pages-supported plugins**, listed under `plugins:` in
  `_config.yml` (Pages ignores the `Gemfile`). Currently: `jekyll-seo-tag`.
- Use the typographic apostrophe in the name: **Good Picklin’**.
- New files that shouldn't be published (tooling, docs) must be added to
  `exclude:` in `_config.yml`.
- The QR code SVGs are static. If the domain or the `/levels` path changes,
  regenerate them (any QR generator; error correction M).

## The skill level quiz

- Five sections of six statements (`first` … `fifth`), mapped to levels in
  `assets/levels.js`: Cucumber (2.0), Gherkin (2.5), Sweet Pickle (3.0), Bread
  and Butter (3.5), Dill (4.0), Spicy Pickle (4.5+).
- A section is "passed" with **5 or more** statements checked. The result is
  the first level not passed. Sections are revealed one at a time.
- A DUPR rating ≥ 4.4 counts as one checked statement in the `fifth` section.
- Append `?admin` to the URL to get a "Show all" button that reveals every
  section.
- The quiz relies on `.questions`, `.level--results` and `#level-show-all`
  starting hidden (`assets/levels.css`); keep those rules.

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Always use `bundle exec`. `.bundle/config` (not committed) installs gems into
`vendor/bundle` so system Ruby doesn't need `sudo`.

Lint JavaScript with `npm run lint`.
