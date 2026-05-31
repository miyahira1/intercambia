# PRD: Intercambia — Language Exchange Platform (Static Site)

## Introduction

Intercambia is an AI-first language exchange platform for Argentina, connecting Spanish speakers with native speakers of English, Portuguese, Italian, and other languages.

This PRD covers **Phase 0 only: a fully static website deployed to GitHub Pages.** No backend, no database, no auth. All interactive functionality (matching, chat, video, payments, AI agents) will be added in later phases. The goal of this phase is to establish the visual identity, information architecture, and UI shells so the product is presentable to early users and investors and the waitlist can grow.

---

## Goals

- Deploy a working static site to GitHub Pages by end of Phase 0
- Collect waitlist email signups before launch
- Communicate the product value proposition clearly to the target Argentine audience
- Build out the full UI shell (all pages, layouts, and components) ready to be wired to a backend later
- Establish the visual brand: colors, typography, tone

---

## User Stories

---

### US-001: Project setup and GitHub Pages deployment
**Description:** As a developer, I need the project scaffolded and deployed to GitHub Pages so every subsequent story is built on a deployable base.

**Acceptance Criteria:**
- [ ] Repository initialized with a Next.js project using `create-next-app` (TypeScript, Tailwind CSS, App Router)
- [ ] `next.config.js` configured with `output: 'export'` and `basePath` set to the repo name for GitHub Pages compatibility
- [ ] `package.json` has a `deploy` script: `next build && touch out/.nojekyll && gh-pages -d out`
- [ ] Running `npm run build` produces a static `out/` directory with no errors
- [ ] Site is live at `https://[username].github.io/[repo-name]/`
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-002: Global layout — header and footer
**Description:** As a visitor, I want to see a consistent header and footer on every page so I can navigate the site and understand the brand.

**Acceptance Criteria:**
- [ ] Header: Intercambia logo (text or SVG), nav links (Inicio, Cómo funciona, Precios, Iniciar sesión), and a "Únete gratis" CTA button
- [ ] On mobile (< 768px), nav links collapse into a hamburger menu that opens a full-width drawer
- [ ] Footer: logo, tagline, links (Privacidad, Términos, Contacto), and social icons (Instagram, TikTok, LinkedIn) — all links are `#` placeholders for now
- [ ] Active nav link is highlighted based on current route
- [ ] Header is sticky (stays visible on scroll)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-003: Landing page — hero section
**Description:** As a prospective user, I want to land on a compelling hero section so I immediately understand what Intercambia does and feel motivated to sign up.

**Acceptance Criteria:**
- [ ] Headline in Spanish (example: "Aprendé inglés con nativos. Gratis."), subheadline (2–3 sentences explaining the exchange model), and a primary CTA button ("Unirme a la lista de espera") that scrolls to the waitlist form
- [ ] Secondary CTA: "Ver cómo funciona" that scrolls to the how-it-works section
- [ ] Hero includes a visual element: either an illustration of a video call exchange or a mockup screenshot of the app UI
- [ ] Hero is full-viewport-height on desktop, auto-height on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-004: Landing page — "Cómo funciona" section
**Description:** As a prospective user, I want to understand how the exchange model works in 3 steps so I know what to expect before signing up.

**Acceptance Criteria:**
- [ ] Section has a title ("Cómo funciona") and exactly 3 steps displayed as numbered cards:
  1. Creá tu perfil — define your native language, what you're learning, and your interests
  2. Te encontramos el compañero ideal — IA matches you with a compatible native speaker
  3. Practicá en sesiones 50/50 — 30 min in each language, every session
- [ ] Each step has an icon, a title, and 2–3 sentences of description
- [ ] Section is responsive: 3 columns on desktop, 1 column stacked on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-005: Landing page — social proof section
**Description:** As a prospective user, I want to see who this platform is for so I can identify with the target audience and trust the product.

**Acceptance Criteria:**
- [ ] Section titled "¿Para quién es Intercambia?" with 3–4 persona cards matching the target users: El Profesional (remote work), La Heredera (Italian citizenship), El Estudiante (university exchange), El Nativo (learn Argentine Spanish)
- [ ] Each card shows: persona name, emoji or icon, 1-sentence description of their goal
- [ ] Cards displayed as a horizontal scroll on mobile, 2×2 grid on desktop
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-006: Landing page — waitlist signup form
**Description:** As a prospective user, I want to enter my email to join the waitlist so I'm notified when the platform launches.

**Acceptance Criteria:**
- [ ] Form with a single email input and a "Quiero unirme" submit button
- [ ] Form submits to [Formspree](https://formspree.io) (free tier) via a POST fetch call — no backend needed
- [ ] On success: input is replaced with a thank-you message ("¡Listo! Te avisamos cuando abramos.")
- [ ] On error (network failure or invalid email): inline error message shown below the input
- [ ] Email input is validated client-side (must contain `@` and a domain) before submission
- [ ] Form works correctly with JavaScript disabled (Formspree's default HTML form fallback)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-007: Landing page — pricing section
**Description:** As a prospective user, I want to see the pricing tiers so I know the platform has a free option and understand what Plus offers.

**Acceptance Criteria:**
- [ ] Two pricing cards side by side: Free (ARS 0) and Plus (ARS 4.900/mes)
- [ ] Free card lists features: 4 sesiones/mes, match básico, chat, videollamada
- [ ] Plus card lists features: Sesiones ilimitadas, match prioritario, resumen IA post-sesión, HD video, sin publicidad; CTA button "Próximamente"
- [ ] Plus card is visually highlighted (border accent, "Recomendado" badge)
- [ ] Both CTA buttons on free card link to the waitlist form anchor (`#waitlist`)
- [ ] Section note: "Precios en pesos ajustados trimestralmente al tipo de cambio oficial"
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-008: "Cómo funciona" page (standalone)
**Description:** As a prospective user who wants more detail, I want a dedicated page explaining the platform in depth so I can build confidence before signing up.

**Acceptance Criteria:**
- [ ] Route: `/como-funciona`
- [ ] Sections: The exchange model (50/50 split explained), AI matching overview (no technical details), safety & trust (verification badge, moderation), and a FAQ with 5–6 common questions (accordion component)
- [ ] FAQ questions written in Spanish; at least: "¿Es realmente gratis?", "¿Cómo me aseguro de que mi compañero sea serio?", "¿Qué idiomas puedo aprender?", "¿Necesito instalar algo?"
- [ ] Page ends with a waitlist CTA section
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-009: Pricing page (standalone)
**Description:** As a prospective user, I want a dedicated pricing page so I can compare tiers in detail before deciding.

**Acceptance Criteria:**
- [ ] Route: `/precios`
- [ ] Same pricing cards as the landing page section (US-007) but with a full feature comparison table below: rows = features, columns = Free / Plus
- [ ] Feature comparison table includes at least 8 rows covering: sessions/month, match priority, AI summary, video quality, vocabulary export, group rooms, ads, session recording
- [ ] "Preguntas frecuentes" section at the bottom with 3–4 billing-related questions
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-010: App shell — dashboard page (static mockup)
**Description:** As a developer, I need a static dashboard page with realistic placeholder content so the app's main screen is visible and the layout can be reviewed.

**Acceptance Criteria:**
- [ ] Route: `/app/dashboard`
- [ ] Layout includes: sidebar nav (Dashboard, Mensajes, Sesiones, Vocabulario, Perfil), main content area
- [ ] Main content shows static mockup of: "Tus matches recomendados" (3 partner cards with avatar placeholder, name, language pair, CEFR badge), "Próximas sesiones" (1–2 placeholder session cards with date/time/partner), and a "Tu progreso" widget (XP bar, session count, streak)
- [ ] Partner cards have "Conectar" and "Ver perfil" buttons (no functionality, `href="#"`)
- [ ] Layout is responsive: sidebar collapses to bottom nav on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-011: App shell — profile page (static mockup)
**Description:** As a developer, I need a static profile page so the layout and fields are finalized before backend wiring.

**Acceptance Criteria:**
- [ ] Route: `/app/profile`
- [ ] Page shows: avatar (placeholder image), display name, native language flag + label, target language flag + label, CEFR level badge, interests tags, bio text, "Verificado" badge (placeholder), session count, average rating (stars), and XP/streak widget
- [ ] "Editar perfil" button links to `/app/profile/edit`
- [ ] Edit page (`/app/profile/edit`) has the full profile form: all fields from the profile definition (name, avatar, languages, CEFR, interests checkboxes, bio textarea, availability grid)
- [ ] Form has "Guardar" and "Cancelar" buttons — no submit functionality, just static
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-012: App shell — session/call page (static mockup)
**Description:** As a developer, I need a static session call page so the in-call UI is designed before Agora.io is integrated.

**Acceptance Criteria:**
- [ ] Route: `/app/session/[id]`
- [ ] Page shows: two video panels (placeholder gray boxes with avatar overlays), control bar at the bottom (mute, camera, end call, screen share — all static buttons), 50/50 session timer (static display showing "00:28:45 — Español"), and a side panel with the chat input (static, no send functionality)
- [ ] "Fin de sesión" button links to `/app/session/[id]/summary`
- [ ] Summary page shows: post-session summary static mockup (vocabulary words list, key phrases, 2 "practicá esto" suggestions), 5-star rating widget (static), and "Volver al dashboard" link
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-013: App shell — messages page (static mockup)
**Description:** As a developer, I need a static messages/chat page so the conversation UI is designed before real-time functionality is added.

**Acceptance Criteria:**
- [ ] Route: `/app/messages`
- [ ] Left panel: list of 3–4 placeholder conversations with avatar, name, last message preview, and timestamp
- [ ] Right panel: selected conversation showing a static chat thread (alternating sent/received bubbles, timestamps, read receipts)
- [ ] Message input bar at the bottom with a send icon button (static, no functionality)
- [ ] Hovering a word in the chat shows a static tooltip mockup (translation + example sentence, no API call)
- [ ] Layout: two-panel on desktop, full-screen conversation on mobile with back button to list
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-014: Mobile responsiveness pass
**Description:** As a mobile user, I want every page to display correctly on a phone screen so I can use the site on the go.

**Acceptance Criteria:**
- [ ] All pages tested at 375px (iPhone SE), 390px (iPhone 14), and 768px (tablet) widths
- [ ] No horizontal scroll on any page at 375px
- [ ] Touch targets (buttons, links) are minimum 44×44px
- [ ] Images and illustrations do not overflow their containers
- [ ] App shell pages use bottom navigation (not sidebar) on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-015: SEO and meta tags
**Description:** As the product owner, I want correct meta tags on every page so the site ranks on Google and looks good when shared on WhatsApp or LinkedIn.

**Acceptance Criteria:**
- [ ] Every page has a unique `<title>` and `<meta name="description">` in Spanish
- [ ] Open Graph tags on all pages: `og:title`, `og:description`, `og:image` (1200×630px placeholder), `og:url`
- [ ] `robots.txt` allows all crawlers
- [ ] `sitemap.xml` lists all static routes
- [ ] Landing page title: "Intercambia — Intercambio de idiomas con nativos | Argentina"
- [ ] Typecheck passes

---

## Functional Requirements

- FR-1: The site must be fully static — zero server-side code, zero database calls, zero auth. Every page exports as a plain HTML file.
- FR-2: The waitlist form is the only form that makes a network request; it POSTs to Formspree. All other forms are display-only mockups.
- FR-3: All internal links must work correctly with the GitHub Pages `basePath` prefix — no broken relative links.
- FR-4: All `href="#"` placeholder links must not cause page scroll-to-top; use `href="javascript:void(0)"` or `e.preventDefault()` where needed.
- FR-5: The site must load in under 3 seconds on a 4G mobile connection (use Next.js Image component for all images; no unoptimized large assets).
- FR-6: Language is Spanish (es-AR) throughout all public-facing copy. Code and comments are in English.
- FR-7: No login wall — all pages including app shell mockups are publicly accessible (for demo purposes).
- FR-8: No cookies, no tracking scripts, no analytics in this phase (add PostHog in Phase 1).

---

## Non-Goals

- No user authentication or registration (deferred to Phase 1)
- No database or Supabase integration (deferred to Phase 1)
- No real-time chat, video calls, or WebRTC (deferred to Phase 1)
- No AI features or API calls beyond the static waitlist form (deferred to Phase 1)
- No payments or subscription logic (deferred to Phase 3)
- No AI agents (MatchAgent, SupportAgent, etc.) — deferred to Phase 2
- No server-side rendering — static export only
- No native app or PWA manifest in this phase
- No custom domain setup (use default GitHub Pages URL)
- No A/B testing or feature flags

---

## Design Considerations

- **Color palette:** Primary blue `#1E40AF`, accent indigo `#4F46E5`, success green `#16A34A`, neutral gray `#6B7280`, white background
- **Typography:** Inter (Google Fonts) — 400 for body, 600 for headings, 700 for CTAs
- **Tone:** Warm, direct, Argentine. Use *vos* (not *tú*). Avoid corporate-speak. Sound like a friend, not a startup pitch.
- **Illustrations:** Use free SVG illustrations from undraw.co or similar; no stock photography
- **Language flags:** Use `react-country-flag` for language badge icons (🇦🇷 🇺🇸 🇧🇷 🇮🇹 🇫🇷)
- **Spacing:** Tailwind's default spacing scale; sections separated by `py-16` (desktop), `py-10` (mobile)
- **Components to build once and reuse:** `LanguageBadge`, `PersonaCard`, `PricingCard`, `PartnerCard`, `SectionHeader`, `CTABanner`

---

## Technical Considerations

- **Framework:** Next.js 14 (App Router) with `output: 'export'` for static generation
- **Styling:** Tailwind CSS v3; no CSS Modules or styled-components
- **Deployment:** GitHub Pages via `gh-pages` npm package; deploy from `out/` directory
- **Images:** All images go in `public/`; use Next.js `<Image>` component with `unoptimized={true}` (required for static export)
- **Forms:** Waitlist form uses [Formspree](https://formspree.io) free tier — create a free account and drop the form endpoint into an env variable (`NEXT_PUBLIC_FORMSPREE_ID`)
- **Fonts:** Load Inter via `next/font/google` to avoid FOUT
- **`basePath`:** Set `basePath: '/intercambia'` (or repo name) in `next.config.js`; all internal `<Link>` hrefs are relative — Next.js handles the prefix automatically
- **Node version:** 18+ required for Next.js 14
- **Deploy script in `package.json`:**
  ```json
  "deploy": "next build && touch out/.nojekyll && gh-pages -d out"
  ```

---

## Success Metrics

- Site deploys to GitHub Pages with zero broken links
- Waitlist form successfully submits to Formspree and shows confirmation
- All 15 user stories pass their acceptance criteria
- Google PageSpeed Insights mobile score > 85 on the landing page
- Site renders correctly at 375px, 768px, and 1280px viewport widths

---

## Decisions

1. **App shell demo banner:** All `/app/*` pages show a fixed top banner: `"Vista previa — esta demo no tiene funcionalidad aún"` in amber (`bg-amber-100 text-amber-800`), 36px tall, dismissed on click. Keeps the mockup realistic while being honest with visitors.

2. **Repo name / basePath:** `intercambia` — matches the existing working directory. Set `basePath: '/intercambia'` in `next.config.js`.

3. **Waitlist form fields:** Email only. Fewer fields = higher conversion rate. Language preferences will be collected during onboarding in Phase 1.

4. **Logo:** Text-only logotype for Phase 0 — "Intercambia" in Inter 700, color `#1E40AF`, with a small inline SVG icon of two opposing arrows (⇄) to the left. No custom logo work needed to start building.

5. **"Iniciar sesión" nav link:** Points to `/app/dashboard` (the static mockup). Makes the site feel complete for demos and investor walkthroughs. The demo banner on that page makes it clear it's not live.

---

## Change Log

### 2026-05-30 — US-002: Active nav link highlighting

**What changed:** Added `usePathname()` from `next/navigation` to `components/Header.tsx`. Created a `navClass(href)` helper that compares the current pathname against each nav link's href and applies `text-[#1E40AF] font-semibold` when active. Applied to both desktop nav and mobile drawer links.

**Commands run:**
- `npm run typecheck` — passed with no errors
- `npm run build` — passed, all 11 static pages generated successfully

**Chrome verification:** Navigated to `/intercambia/como-funciona`. "Cómo funciona" nav link rendered bold and blue while other links remained gray. No console errors. Footer with logo, tagline, privacy/terms/contact links, and social icons visible.

### 2026-05-30 — US-006: Waitlist form JS-disabled fallback

**What changed:** Added `action` and `method="POST"` attributes to the `<form>` element in `components/landing/WaitlistForm.tsx` so the form works via Formspree's HTML fallback when JavaScript is disabled. Added `name="email"` to the email input so Formspree can identify the field in HTML form submissions.

**Commands run:**
- `npm run typecheck` — passed with no errors

**Chrome verification:** Navigated to `/intercambia`. Home page loads, "Inicio" nav link bold/blue. Waitlist form renders correctly with email input and "Quiero unirme" button. No console errors.
