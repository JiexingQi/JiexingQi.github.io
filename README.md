# Jiexing Qi's Personal Website

This repository contains the source for [jiexingqi.github.io](https://jiexingqi.github.io), a personal academic website built with Jekyll and GitHub Pages.

## Main Content

- `_pages/about.md`: homepage and research overview
- `_pages/publications.md`: publication index
- `_pages/teaching.html`: teaching index
- `_pages/cv.md`: CV page
- `_publications/`: publication entries
- `_teaching/`: teaching entries
- `_config.yml`: site metadata and author profile
- `_data/navigation.yml`: top navigation
- `_data/profile.yml`: shared projects, awards, and patents
- `_sass/_academic.scss`: responsive academic layout and print styles

## Local Development

Use a separately installed Ruby 3.3 or newer, rather than macOS's system Ruby 2.6. Install dependencies:

```bash
bundle install
```

Run the site locally:

```bash
bundle exec jekyll serve --config _config.yml,_config.dev.yml --host 127.0.0.1 --port 4000
```

Then open `http://localhost:4000`.

On this Mac, Ruby 3.3 is installed at `/opt/homebrew/opt/ruby@3.3/bin`.
Prefix the commands above with `PATH=/opt/homebrew/opt/ruby@3.3/bin:$PATH`
when the shell still selects the system Ruby. No shell profile changes are needed.

## Maintaining Publications

Each paper lives in `_publications/`. Its front matter supplies the title,
authors (a YAML list), date, venue, and links. The homepage, publication index,
and CV use the same entries.

- `first_author: true` places a paper in the first-author group.
- `featured_order` sets the order within that group (RASAT, LoT, then SPARQL).
- Other papers are sorted explicitly by date, newest first.
- `selected: true` includes a coauthored paper on the homepage and CV.
- Optional `codeurl`, `talkurl`, `arxivurl`, and `venue_short` control resources and display.
- Keep `citation` for the expandable citation on a paper's detail page.

Publication search and year filters run locally in the browser. With JavaScript
disabled, the complete list remains readable. The CV's Print / PDF action opens
the browser print dialog.

## Build

```bash
bundle exec jekyll build
```

The output is written to `_site/`. Enable MathJax only on pages that need it
by adding `math: true` to their front matter.
