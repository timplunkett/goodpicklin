# Good Picklin'

Source for [goodpicklin.com](https://goodpicklin.com), the landing page for
Good Picklin’ Social Open Play, a Saturday facilitated pickleball open play.
See [AGENTS.md](AGENTS.md) for details on how the site is organized.

A small, unthemed Jekyll site served by GitHub Pages.

| Path | What it is |
| --- | --- |
| `index.html` | Homepage |
| `levels.md`, `assets/levels.js`, `assets/levels.css` | The skill-level quiz at `/levels` |
| `sign.html` | Printable court sign with QR codes, at `/sign` |
| `404.html` | Not-found page |
| `_layouts/default.html` | The only layout |
| `_config.yml` | Site settings, including the sign-up URL |

## Local development

```sh
bundle config set --local path vendor/bundle   # once; avoids needing sudo
bundle install
bundle exec jekyll serve
```

Always use `bundle exec`. The `github-pages` gem pins Jekyll, Kramdown, Sass and
the plugin versions to exactly what GitHub Pages runs; a bare `jekyll` on your
`PATH` will build something production won't.

GitHub Pages **ignores the `Gemfile`** and reads the `plugins:` list in
`_config.yml`. A plugin that works locally but isn't in that list will silently
do nothing in production.

## License

Source code: [ISC](LICENSE), © Tim Plunkett.
