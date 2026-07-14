# Angon — Site Structure (Information Architecture)

This document defines the homepage navigation tree. Update this file first whenever
a section, subsection, or route changes — then mirror the change in `content/` and
`src/app/`.

```
Homepage
│
├── 1. Tourism & Exploring Regions          → /travel
│   ├── 1.1 Destination Info                → /travel?type=destination
│   ├── 1.2 Tour Info & Support              → /travel?type=support
│   ├── 1.3 Experiences & Stories            → /travel?type=stories
│   └── 1.4 Passport & Visa Helpline         → /travel?type=visa-help
│
├── 2. Music & Instruments                  → /music
│   ├── 2.1 Bangla Folk                     → /music?type=folk
│   │   └── Lyrics & Sargam                 → /music/[slug]#lyrics
│   ├── 2.2 Learning Section                → /music?type=learn
│   │   ├── Dotara Lessons                  → /music/dotara-lessons
│   │   └── Tabla Lessons                   → /music/tabla-lessons
│   └── 2.3 Artist History                  → /music?type=artists
│
└── 3. Culinary Section                     → /food
    ├── 3.1 Bengali
    │   ├── Old Traditional                 → /food?cuisine=bengali&category=old-traditional
    │   └── New Generation                  → /food?cuisine=bengali&category=new-generation
    └── 3.2 Asian Subcontinent               → /food?cuisine=subcontinent
        └── (expand per country/region as needed)
```

## Notes on Implementation

- **Top-level routes stay fixed**: `/travel`, `/music`, `/food` — these map directly
  to the three `content/` folders and satisfy the MVP's static export requirement.
- **Sub-branches (1.1, 2.1, 3.1, etc.) are frontmatter fields, not new routes.**
  Add a `type`, `category`, or `cuisine` field to a post's frontmatter (see examples
  in `content/*/*.md`), then filter client-side or via query param — this avoids
  needing new dynamic segments for every subsection while keeping the tree flexible.
- **To add a new leaf** (e.g. a new instrument lesson): drop a new `.md` file into
  the matching `content/` folder with the right frontmatter tag. No code changes
  needed — `generateStaticParams` picks it up automatically on next build.
- **To add a new branch** (e.g. a 4th top-level section): create `content/<new>/`,
  copy the `travel` page/detail-page pair, and add a `CategoryCard` on the homepage.

## Change Log

| Date       | Change                                      |
|------------|----------------------------------------------|
| 2026-07-14 | Initial structure drafted from outline        |
