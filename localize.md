# Localization & Multi-Country SEO Plan

Plan for turning blackfoxdigital.com into a multi-language, multi-country site with country-specific SEO.

---

## 1. Goals

- Detect user's country/language and serve locale-appropriate content
- Rank in country-specific Google results (not just global English)
- Keep a single domain with consolidated authority (no ccTLD fragmentation)
- Build once so new locales can be added cheaply (1-2 weeks each)

---

## 2. URL Structure — Subdirectories with `language-COUNTRY`

**Chosen format:** `blackfoxdigital.com/en-us/...`, `/ru-ru/...`, `/de-de/...`

| Structure | Example | SEO | Cost | Verdict |
|---|---|---|---|---|
| ccTLD | `blackfoxdigital.ru` | Strongest country signal | High (fragmented auth, separate hosting) | Skip |
| Subdomain | `ru.blackfoxdigital.com` | Medium (split authority) | Medium | Skip |
| **Subdirectory** | **`blackfoxdigital.com/ru-ru/`** | **Strong + consolidated auth** | **Low** | **WIN** |

**Why `language-COUNTRY` (not just `/ru/` or `/en/`):**
- Lets us target US vs UK English differently (different keywords, currency, phone format)
- Lets us add a second Russian-speaking market (ru-kz, ru-by) later without conflict
- Matches how Google's hreflang expects locale codes

---

## 3. SEO Non-Negotiables

### hreflang tags
Every page must declare all its locale siblings:

```html
<link rel="alternate" hreflang="en-us" href="https://blackfoxdigital.com/en-us/services/photo-editing" />
<link rel="alternate" hreflang="ru-ru" href="https://blackfoxdigital.com/ru-ru/services/photo-editing" />
<link rel="alternate" hreflang="x-default" href="https://blackfoxdigital.com/en-us/services/photo-editing" />
```

Miss this → Google serves wrong-language pages in search results.

### Per-locale sitemaps
- `/sitemap-en-us.xml`
- `/sitemap-ru-ru.xml`
- Referenced from a `/sitemap.xml` index

### x-default
Fallback hreflang for unmatched users (typically English).

### Canonical URLs per locale
Each locale version is its own canonical — not pointing at the English one.

---

## 4. Do NOT Auto-Redirect Based on IP

Google (John Mueller) has repeatedly warned against this — it breaks crawling because Googlebot crawls from the US and would only ever see the English version.

**Correct pattern:**
1. First visit → detect IP (Vercel `x-vercel-ip-country` header, free)
2. If user's country has a matching locale → show a **banner** ("Looks like you're in Russia — switch to Russian?")
3. User picks → save choice in cookie
4. Honor cookie on future visits
5. URLs stay canonical — `/ru-ru/services` never changes based on IP

---

## 5. Localization ≠ Translation

This is where most multilingual sites fail. True country SEO requires:

- **Keyword research per country** — Russians search "ретушь фото" not "photo retouching." Use Ahrefs/SEMrush with country filter.
- **Localized case studies** — Russian testimonials for `/ru-ru/`, not translated US ones
- **Currency, phone, address format** per locale
- **Local schema markup** — `LocalBusiness` schema with country-specific data (address, phone, opening hours)
- **Country-specific backlinks** — a link from a .ru site carries more weight for Russian rankings than a .com link

---

## 6. Tech Stack (Next.js 15 App Router)

- **`next-intl`** — best i18n library for App Router in 2026. Handles routing, translations, hreflang generation.
- **Vercel geo headers** — `x-vercel-ip-country`, `x-vercel-ip-country-region` (free, no extra service)
- **Directory structure:** `app/[locale]/...` with `generateStaticParams` for each locale
- **Middleware** (`middleware.ts`) handles locale detection + cookie persistence + banner logic
- **Translation files:** `messages/en-us.json`, `messages/ru-ru.json`, etc.

---

## 7. Timing — Build BEFORE Launch, Not After

### Why "after launch" is a trap

1. **URL restructure = SEO disaster.** Moving `/services/photo-editing` → `/en-us/services/photo-editing` post-launch means 301 redirects on every page, ranking drops for weeks, lost link equity. Day-1 cost = zero.
2. **Every hardcoded string becomes a refactor.** Service pages, `lib/mock-data.js`, form labels, email templates, meta tags, alt text — all need extraction. Build-time: ~2 weeks. Retrofit: 6-8 weeks.
3. **Forms, emails, schema need locale-awareness.** Since the 3 forms aren't wired yet, build them locale-aware from the start.
4. **Google rewards age.** A `/ru-ru/` path launched today starts earning Russian ranking signals immediately. Launch late, start late.

### What "complete" must mean before starting i18n

- English content is **final** (no more copy churn)
- Page structure is **locked** (no more reshuffling sections)
- Launch locales are **decided** (1-2 to start, e.g., en-us + ru-ru)

Translating draft content = translating twice.

---

## 8. Phased Execution

### Phase 0 — Prerequisites
- [ ] Finish English content, lock page structure
- [ ] Wire up forms (Resend/EmailJS) — already on todo
- [ ] Decide launch locales (recommend: `en-us` + 1 second locale)
- [ ] Country-level keyword research for target market

### Phase 1 — i18n Foundation
- [ ] Install `next-intl`
- [ ] Restructure routes under `app/[locale]/...`
- [ ] Create `messages/en-us.json` with all strings extracted
- [ ] Add `middleware.ts` for locale detection + cookie
- [ ] Generate hreflang tags in layout/metadata
- [ ] Per-locale sitemap generation
- [ ] IP-based locale suggestion banner (not redirect)

### Phase 2 — Content Localization (per locale)
- [ ] Translate + culturally adapt service copy
- [ ] Localize case studies (use country-relevant examples)
- [ ] Localize form labels, validation, success messages
- [ ] Localize email templates (sent via Resend/EmailJS)
- [ ] Localize meta tags, OG images, schema markup
- [ ] Localize alt text on all images
- [ ] Currency, phone, address format per locale

### Phase 3 — Country-Specific SEO
- [ ] Per-country keyword research → map to pages
- [ ] Country-specific `LocalBusiness` schema
- [ ] Google Search Console: set country targeting per locale directory
- [ ] Country-specific link building outreach
- [ ] Per-locale analytics segmentation

### Phase 4 — Launch + Iterate
- [ ] QA hreflang with Merkle's hreflang tool
- [ ] Submit per-locale sitemaps to GSC
- [ ] Monitor country-level rankings in Ahrefs/SEMrush
- [ ] Add more locales on same foundation (cheap — 1-2 weeks each)

---

## 9. The Safe-Hatch Option

If uncertain whether international is worth the investment → **launch single-locale, but use `/en-us/` URLs from day 1.**

Adding locales later becomes additive, not a restructure. Zero SEO cost, tiny build cost. This is the minimum insurance if international might happen.

---

## 10. Codebase Touch-Points (current site)

Components and files that will need locale-awareness when Phase 1 begins:

- `app/(site)/**/*.jsx` — all routes move under `app/[locale]/(site)/...`
- `lib/mock-data.js` — services copy needs translation strategy (likely move to `messages/*.json`)
- All form components (free trial, contact, get-quote) — labels, validation, success states
- Email templates (once Resend/EmailJS is wired)
- `metadata` exports in every page — title, description, OG per locale
- Schema markup (`LocalBusiness`, `Service`, `FAQPage`) — country-specific fields
- Sitemap generation
- `robots.txt` — reference per-locale sitemaps

---

## 11. Open Decisions

- [ ] Which second locale first? (Russian, German, Spanish, other?)
- [ ] Translation approach: professional translator, native contractor, or AI-assisted with human review?
- [ ] Will we accept multi-currency on pricing, or quote in USD + local display only?
- [ ] Country-specific phone numbers (Twilio), or single international number?
- [ ] Separate case studies per country, or tag existing ones by relevance?
