# Bolding Family Dentistry — Website Project

## Overview
Static website rebuild for Bolding Family Dentistry (Columbia, TN) — migrated from WordPress to clean HTML/CSS/JS with no frameworks or build tools.

**Repo:** https://github.com/Marcus9135/BoldingFamilyDentistry (private)
**Hosting:** GitHub Pages (master branch, root)
**Live URL:** https://marcus9135.github.io/BoldingFamilyDentistry/

## Practice Info
- **Name:** Bolding Family Dentistry
- **Doctor:** Dr. Beau Bolding, DDS
- **Address:** 1300 Hatcher Ln, STE 1, Columbia, TN 38401
- **Phone:** 931-388-2279
- **Fax:** 931-223-5567
- **Email:** office@boldingfamilydentistry.com
- **Hours:** Mon–Thu 8 AM – 5 PM, Fri–Sun Closed

## Tech Stack
- Pure HTML5, CSS3, JavaScript (no frameworks)
- Google Fonts: Cormorant Garamond (headings), Open Sans (body)
- No build step — edit files directly and push

## Site Structure
```
BoldingFamilyDentistry/
├── index.html                    # Home page (hero with parallax, services overview, trust points)
├── about.html                    # About the practice + Dr. Bolding
├── services.html                 # All services overview grid
├── services/
│   ├── general-dentistry.html
│   ├── dental-bridges.html
│   ├── same-day-crowns.html
│   ├── root-canal-therapy.html
│   ├── teeth-whitening.html
│   ├── dental-veneers.html
│   ├── clear-aligners.html
│   ├── smile-makeovers.html      # Uses procedure-grid card layout
│   ├── full-mouth-reconstruction.html
│   ├── lasers-in-dentistry.html
│   ├── cad-cam-restorations.html
│   └── periodontal-disease.html
├── dental-emergencies.html
├── patient-info.html             # Hub page linking to sub-pages
├── patient-info/
│   ├── what-to-expect.html
│   ├── patient-forms.html        # OperaDDS registration form embed
│   ├── insurance-financial.html
│   └── instructions.html         # Accordion sections for all instructions
├── contact.html                  # Contact form + map placeholder
├── privacy-policy.html
├── css/styles.css                # Single stylesheet
├── js/main.js                    # Nav toggle, parallax, FABs, review modal
├── images/
├── sitemap.xml
├── robots.txt
├── demo-nav-categories.html      # DEMO: flyout nav with collapsible mobile categories
├── demo-nav-twocol.html          # DEMO: two-column mobile nav
└── demo-content-trimmed.html     # DEMO: trimmed content + accordion sections
```

## Design Decisions

### Color Palette
- Primary: Deep teal/navy (`--teal-800`, `--teal-700`)
- Accent: Warm gold (`--gold-400`, `--gold-300`)
- Background: Clean whites with subtle warm tones
- Dark elements: `#1a1a1a` for header/footer/dropdowns

### Layout Patterns
- **Service pages:** `content-grid` with `main-content` + `sidebar` (CTA + hours)
- **Home page:** Full sections — hero, mission, services cards, trust grid, CTA banner
- **All pages start with `<h2>`** — standardized to avoid inconsistent drop-cap styling

### Key Components
- **Sticky header** with logo left, nav right, phone CTA
- **Services dropdown** has 12 items (dentures was removed)
- **Parallax hero** on homepage using outside.png with JS translateY
- **Sub-page heroes** use flat teal gradient (lightened from original dark version)
- **Flower background overlay** on `.section--white` content areas via `::after` pseudo-element at `opacity: 0.16`
- **Floating action buttons (FABs):** "Leave a Review" + "Book Appointment" always visible bottom-right
- **Review modal:** Elfsight Google Reviews widget loaded on demand in a centered modal
- **Procedure cards:** Grid layout on smile-makeovers page with SVG icons
- **Patient instructions:** Accordion sections on instructions.html

### What Was Removed
- **Dentures** service page and all nav references to it
- **Emergency banner** (red bar on dental-emergencies.html — caused mobile overlap, content duplicated in page body)
- **Orphaned image references** (img tags with no actual image files)
- **Drop-cap first-letter styling** (caused inconsistency across pages)

## SEO
All 23 pages have:
- Optimized `<title>` with "Columbia, TN" keyword
- Meta description with CTA
- Canonical URL
- Open Graph tags (type, title, description, url, image, site_name)
- Twitter Card meta tags
- Geo region/placename meta tags
- `sitemap.xml` with priorities and change frequencies
- `robots.txt` with sitemap reference
- JSON-LD structured data (Dentist schema) on homepage

## Third-Party Integrations
- **OperaDDS:** Patient registration form iframe on patient-forms.html
- **Elfsight:** Google Reviews widget embed in modal (loaded dynamically via JS)
- **Google Fonts:** Cormorant Garamond + Open Sans

## In-Progress / Demo Pages
Three demo pages exist for nav and content experiments (not linked from main site):

1. **demo-nav-categories.html** — Desktop: vertical dropdown with flyout sub-menus to the right on hover. Mobile: collapsible accordion categories (Preventive, Restorative, Cosmetic, Advanced). Currently the leading candidate.

2. **demo-nav-twocol.html** — Two-column CSS grid dropdown on mobile. Simpler but less organized.

3. **demo-content-trimmed.html** — Periodontal disease page with trimmed content + accordion sections. First accordion open by default, independent toggle (can open all at once). Pattern to potentially apply across all service pages.

## Conventions
- All internal links use relative paths (`../` from sub-folders)
- Service pages in `/services/` use `../` prefix for shared assets
- Patient info pages in `/patient-info/` use `../` prefix for shared assets
- Header HTML is compressed to a single line on each page
- Footer HTML is compressed to a single line on each page
- SVG icons are inline (no external icon library)
- Phone links use `tel:9313882279` (no dashes) for the href
- Copyright year in footer: 2024

## Workflow
- Edit files directly, commit, push to `master`
- GitHub Pages auto-deploys from `master` branch root
- No build step, no CI/CD, no package.json
