# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lion Law is a static HTML/CSS/JavaScript website for a personal injury law firm. There is no build process, no framework, and no dependencies - all files can be served directly.

## Development

**Run locally:**
```bash
python -m http.server 8000
# or any static HTTP server
```

Open any `.html` file directly in a browser, or visit `http://localhost:8000` when using a server.

No build, lint, or test commands exist - changes appear immediately on browser refresh.

## Architecture

**Structure:** 7 self-contained HTML pages with embedded CSS and JavaScript (no external stylesheets or script files).

| File | Purpose |
|------|---------|
| `index.html` | Homepage with hero, features, testimonials |
| `about.html` | Firm history, team, values |
| `practice.html` | Practice area categories |
| `case-results.html` | Case results, verdicts and settlements |
| `blog.html` | Blog listing |
| `blog-single.html` | Individual blog post template |
| `contact.html` | Contact form, consultation request |

**Design System (CSS Custom Properties):**
- Primary colors: `--gold` (#D4AF37), `--black` (#0A0A0A)
- Fonts: `--font-display` (Cormorant Garamond), `--font-body` (Outfit)
- Full palette defined in each page's `<style>` block

**Shared Patterns:**
- Fixed navigation with `#nav` that adds `.scrolled` class on scroll
- Mobile hamburger menu (`.nav-toggle` / `.nav-links.active`)
- Forms use client-side feedback only (no backend integration)
- Responsive design using `clamp()`, flexbox, and CSS Grid

**External Resources:**
- Google Fonts (Cormorant Garamond, Outfit)
- SVG logo: `lion-law-logo.svg`
