# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lion Law is a static HTML/CSS/JavaScript website for a personal injury law firm with an integrated AI chatbot. There is no build process and no framework - all files can be served directly. The chatbot requires a Vercel backend for API communication.

## Development

**Run locally:**
```bash
python -m http.server 8000
# or any static HTTP server
```

Open any `.html` file directly in a browser, or visit `http://localhost:8000` when using a server.

No build, lint, or test commands exist - changes appear immediately on browser refresh.

**Note:** The chatbot requires the Vercel backend (`/api/chat`) to function. For local chatbot testing, use `vercel dev`.

## Deployment

- **Platform:** Vercel (serverless)
- **Config:** `vercel.json` (CORS headers for API routes)
- **Environment variable:** `OPENAI_API_KEY` (required for chatbot)

## Architecture

**HTML Pages:** 11 self-contained pages with embedded CSS and JavaScript.

| File | Purpose |
|------|---------|
| `index.html` | Homepage with hero, features, testimonials |
| `about.html` | Firm history, team, values |
| `practice.html` | Practice area categories |
| `case-results.html` | Case results, verdicts and settlements |
| `blog.html` | Blog listing |
| `blog-single.html` | Individual blog post template |
| `contact.html` | Contact form, consultation request |
| `faq.html` | FAQ with accordion, search, category tabs, deep linking |
| `testimonials.html` | Client testimonials showcase |
| `privacy-policy.html` | Privacy policy |
| `disclaimer.html` | Legal disclaimer |

**JavaScript Files:**

| File | Purpose |
|------|---------|
| `chatbot.js` | AI chatbot widget - OpenAI GPT with streaming responses, page content scraping for context |
| `api/chat/index.js` | Vercel Edge Function - proxies requests to OpenAI API |

**Config Files:**

| File | Purpose |
|------|---------|
| `vercel.json` | Deployment config with CORS headers for `/api/*` routes |

## Design System

**CSS Custom Properties (defined in each page's `<style>` block):**
- Primary colors: `--gold` (#D4AF37), `--black` (#0A0A0A)
- Fonts: `--font-display` (Cormorant Garamond), `--font-body` (Outfit)
- Full palette includes gold, dark, gray, and light variants

**Responsive Breakpoints:**
- `768px` - Mobile/tablet threshold (hamburger menu, single-column layouts)
- `769px` - Desktop features enabled (hover dropdowns, multi-column grids)

## Shared Patterns

- **Navigation:** Fixed `#nav` with `.scrolled` class on scroll, mobile hamburger menu (`.nav-toggle`)
- **Desktop dropdowns:** Hover-triggered nav menus for Practice Areas/FAQ with keyboard support
- **Chatbot widget:** Floating AI assistant (bottom-right), loaded on all pages via `<script src="chatbot.js">`
- **FAQ features:** Accordion expand/collapse, real-time search filter, URL hash deep linking (`#fees`, `#process`, etc.)
- **Modals:** Consultation request forms with backdrop blur
- **Forms:** Client-side feedback only (no backend form submission)
- **Responsive design:** Uses `clamp()`, flexbox, and CSS Grid

## External Resources

- Google Fonts (Cormorant Garamond, Outfit)
- SVG logo: `lion-law-logo.svg`
- OpenAI API (chatbot backend via Vercel Edge Function)
