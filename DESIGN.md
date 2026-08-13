---
name: Carlos Ramírez — Preparador físico
description: Preparación física con intención para rendimiento, salud y procesos post-lesión.
colors:
  primary-blue: "#0955A1"
  electric-blue: "#0099FF"
  ink: "#181818"
  white: "#FFFFFF"
  paper: "#F5F7F9"
  line: "#D6DEE6"
  muted: "#666666"
  pale-blue: "#BEE7FF"
  hero-pale: "#86CAEE"
  placeholder-blue: "#0B4A88"
  placeholder-deep: "#052D5F"
  gallery-blue: "#114F88"
  gallery-deep: "#0A3D73"
  footer-muted: "#979797"
  footer-gray: "#A3A3A3"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Arial, sans-serif"
    fontSize: "clamp(57px, 8.4vw, 112px)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.085em"
  headline:
    fontFamily: "Archivo Variable, Archivo, Arial, sans-serif"
    fontSize: "clamp(48px, 6.3vw, 79px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.08em"
  title:
    fontFamily: "Archivo Variable, Archivo, Arial, sans-serif"
    fontSize: "25px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.06em"
  body:
    fontFamily: "Archivo Variable, Archivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo Variable, Archivo, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  circle: "50%"
spacing:
  container-desktop: "48px"
  container-tablet: "28px"
  container-mobile: "20px"
  section-desktop: "112px"
  section-mobile: "79px"
  card: "20px"
  grid: "13px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 19px"
    height: "49px"
  button-primary-hover:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "13px 19px"
    height: "49px"
  button-header:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
  card-study:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px"
  card-testimonial:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px"
---

# Design System: Carlos Ramírez — Preparador físico

## Overview

**Creative North Star: "The Precision Training Field"**

This is an editorial athletic system for a preparation practice that joins performance and health. The visual world is direct and disciplined: a blue field carries the first decision, black and white create editorial contrast, and electric blue marks evidence, action, and movement. Density is intentional rather than ornamental, with compact headings, registration-like labels, rules, and diagrams giving the page the feel of a training plan made visible.

The hero follows the live Framer composition: an ink-black field with an 80px opening spacer, a centered 960×600 rounded black card, a dark portrait placeholder on the left, oversized “LAFYD. Carlos Ramírez” copy on the right, and a full-width blue principles rail below. The remaining layout alternates between blue command surfaces, clinical paper surfaces, white reading surfaces, and an ink-black gallery. Missing client imagery and social destinations stay explicit placeholders; they are never disguised as finished photography or links.

**Key Characteristics:**
- Precision-led performance and health positioning
- Archivo in compact, high-contrast editorial hierarchy
- Blue / electric-blue signal system on white, paper, and ink surfaces
- Framer-matched black hero card, blue principles rail, circles, rules, and evidence cards
- Explicit, replaceable image, testimonial, WhatsApp, and social placeholders

## Colors

The palette is a four-color brand contract—deep primary blue, vivid electric blue, ink, and white—supported by cool paper, quiet rules, and blue-tinted placeholder surfaces.

### Primary
- **Deep Performance Blue** ({colors.primary-blue}): The dominant navigation, hero, benefits, and contact field. Use it for command surfaces and primary text links.
- **Electric Signal Blue** ({colors.electric-blue}): The action and evidence signal: button hover, emphasized words, checks, stamp, rules, and geometric accents. Keep it sparse enough to retain meaning.

### Secondary
- **Placeholder Cobalt** ({colors.placeholder-blue}): A recessed blue for portrait and image placeholders; it should not replace the primary brand field.
- **Placeholder Deep** ({colors.placeholder-deep}): The dark endpoint of placeholder gradients, reserved for image stand-ins.
- **Gallery Blue** ({colors.gallery-blue}): A cool gradient partner for gallery placeholders.
- **Gallery Deep** ({colors.gallery-deep}): The dark gradient partner for gallery placeholders.

### Neutral
- **Editorial Ink** ({colors.ink}): Body text, the gallery field, footer, large wordmark treatment, and high-contrast text.
- **Clinical White** ({colors.white}): Main reading surfaces, reversed text, and primary button surfaces.
- **Cool Paper** ({colors.paper}): The studies background and testimonial cards; it separates evidence without a shadow.
- **Quiet Line** ({colors.line}): Thin borders, table-like rules, and card dividers.
- **Muted Copy** ({colors.muted}): Supporting copy on light surfaces.
- **Pale Blue Note** ({colors.pale-blue}): Supporting copy on blue fields where white would be too loud.
- **Hero Pale Accent** ({colors.hero-pale}): The soft blue word in the hero title only.
- **Footer Muted** ({colors.footer-muted}) and **Footer Gray** ({colors.footer-gray}): Low-priority footer copy and social placeholder labels.

### Named Rules
**The Four-Color Contract Rule.** Brand fields, text, and actions stay within primary blue, electric blue, ink, white, and their documented cool support tones; do not introduce yellow or unrelated accent colors.

**The Signal-Blue Rule.** Electric blue is a signal, not a fill-everything color: reserve it for actions, emphasis, evidence markers, and motion cues.

## Typography

**Display Font:** Archivo Variable (self-hosted via `@fontsource-variable/archivo`, with Archivo, Arial, sans-serif fallbacks)  
**Body Font:** Archivo Variable (self-hosted via `@fontsource-variable/archivo`, with Archivo, Arial, sans-serif fallbacks)  
**Label/Mono Font:** Archivo (uppercase labels; no separate mono face)

**Character:** Archivo is compact, blunt, and athletic at heavy weights, while its regular weight keeps the factual copy calm and legible. Tight tracking and short line-heights make headings feel editorial and kinetic; body copy remains open enough for clinical explanation.

### Hierarchy
- **Display** (900, `clamp(57px, 8.4vw, 112px)`, `0.88`): Hero and contact headlines; compact, oversized statements with tight tracking.
- **Headline** (900, `clamp(48px, 6.3vw, 79px)`, `0.9`): Section statements such as services, studies, testimonials, and gallery.
- **Title** (700, `25px`, `1.1`): Evidence and service card titles; use the tighter `-0.06em` tracking from the card treatment.
- **Body** (400, `16px`, `1.45`; supporting large copy is `17px`): Explanatory and credential copy, generally constrained to readable narrow columns.
- **Label** (800, `10px`, `1.1`, `0.08em`, uppercase): Categories, actions, metadata, placeholder labels, and footer utility text.

### Named Rules
**The Editorial Compression Rule.** Headings may be tightly tracked and tightly led, but paragraphs and credential lists retain readable line-height and never inherit display styling.

**The Factual Emphasis Rule.** Use electric-blue emphasis sparingly inside a heading; never turn an entire paragraph into a decorative texture.

## Layout

The desktop canvas uses a centered container capped at `1200px` with `48px` side gutters. At tablet widths the container contracts to `calc(100% - 56px)` (roughly `28px` gutters), and at mobile it uses `calc(100% - 40px)` (`20px` gutters). Desktop sections use roughly `112–118px` vertical padding; mobile sections reduce to roughly `79–90px`.

The page is a single Spanish scrolling narrative: blue navigation, a black Framer-matched hero and blue principles rail, then white athlete proof/testimonials, white services, blue benefits, cool-paper credentials, and an ink gallery, blue contact, and ink footer. The studies surface separates four highlighted education/award cards under “Formación y experiencia destacada” from the complete numbered credential ledger under “Certificados.” At `760px`, the hero card stacks portrait over copy while retaining its exact content hierarchy; at `720px`, the navigation becomes a menu button, service cards become a 2×2 grid, and studies/testimonials stack to one column.

Thin horizontal rules and vertical card borders establish the evidence rhythm. Diagonal line overlays and the benefits orbit are absolute, pointer-inert decoration; content remains in normal flow and must stay readable without them.

## Elevation & Depth

The system is flat by default. Depth comes from tonal field changes (blue, paper, white, ink), thin borders, gradient placeholder surfaces, and geometry rather than layered cards. The only structural shadows are the mobile navigation drop shadow and the circular stamp’s crisp outline ring; do not add ambient card shadows to evidence surfaces.

### Shadow Vocabulary
- **Mobile menu lift** (`0 10px 20px rgba(0,0,0,.15)`): Separates the open mobile navigation from the hero.
- **Recognition stamp ring** (`0 0 0 4px #0955A1, 0 0 0 5px rgba(255,255,255,.5)`): A crisp registration outline around the INBA recognition stamp, not a soft drop shadow.

### Named Rules
**The Flat Evidence Rule.** Cards communicate structure through paper, white, rules, and spacing; shadows are not a substitute for hierarchy.

## Shapes

Most surfaces and controls are square (`0px` radius), reinforcing the training-plan and editorial-register character. Circular geometry is reserved for the 2026 recognition stamp, placeholder crosshairs, and benefits orbit (`50%`). Borders are usually one pixel, cool and quiet on light surfaces or translucent white on blue/ink fields. Diagonal clipping is created with skewed lines and rotated outlines, never with rounded pills.

Placeholder blocks use a visible border, labeled content, and a crosshair or diagonal motif. Preserve their rectangular silhouette and `data-placeholder` key so final assets can replace them without changing layout.

## Components

The component language is **tactile and confident**: square controls, clear text labels, crisp rules, and small purposeful motion. Lucide React supplies the interface icons (`ArrowUpRight`, `Menu`, `Check`, `Dumbbell`, `Stethoscope`, and `MessageCircle`) rather than custom icon drawings or emoji.

### Buttons
- **Shape:** Square, no corner radius (`0px`), compact all-caps Archivo label.
- **Primary:** White field with deep blue text, `13px 19px` padding, `49px` minimum height, and an `ArrowUpRight` icon. Used for the first WhatsApp/contact step and section CTAs.
- **Hover / Focus:** Hover shifts the field to electric blue and text to white; buttons lift `2px`. Every focusable control receives a visible `3px` electric-blue outline with `4px` offset.
- **Light:** The benefits CTA repeats the white-on-blue primary treatment on the blue section.
- **Header CTA:** Transparent blue-header control with a one-pixel translucent white border; it becomes the mobile menu’s filled white CTA.

### Cards / Containers
- **Service zig-zag:** Four full-width rows alternate a white copy panel with a blue or ink icon panel. The corresponding Lucide symbol is enlarged as the visual asset beside each service; even rows reverse the order. On mobile, every icon panel stacks above its copy panel.
- **Studies and certificates:** Both credential groups use flat numbered list rows with thin rules, blue category/index labels, and blue checks. “Formación y experiencia destacada” carries the four principal qualifications and awards; “Certificados” continues below as the complete professional-training ledger. Do not introduce card containers or shadows here.
- **Testimonial carousel:** One athlete proof slide is shown at a time in a scroll-snap carousel. Each slide pairs a 4:3 `placehold.it` image with the factual name and achievement. Previous/next Lucide controls, an aria-live position counter, keyboard arrow navigation, and touch scrolling provide access across input modes. Preserve the author block when replacing placeholder imagery.

### Inputs / Fields
- **Style:** No form fields are currently implemented. The contact surface is a direct WhatsApp link placeholder (`href="#"`) rather than a lead form.
- **Replacement contract:** When the final WhatsApp destination is supplied, replace the `href` and displayed number while keeping the label, underlined link shape, visible focus ring, and direct-contact hierarchy.

### Navigation
- **Desktop:** `84px` deep primary-blue header; white CR wordmark at left, compact white links, and a bordered “Hablemos” CTA at right.
- **Mobile:** `72px` header with a Menu icon. The nav opens below it as a full-width primary-blue column with bordered links, a filled white CTA, and a restrained drop shadow. `aria-expanded` and `aria-controls` track the state, and selecting a link closes the menu.

### Image & Proof Placeholders
- **Portrait:** The hero uses a dark, rectangular left-hand portrait slot inside the 960×600 Framer-matched black card. It carries the explicit “PLACEHOLDER · RETRATO DE CARLOS” label and insertion note until the client asset is supplied.
- **Gallery:** Three labeled rectangles (`gallery-01` through `gallery-03`) preserve the intended large/tall/small masonry rhythm without pretending to be final images.
- **Social / WhatsApp:** Social links and the contact number are explicitly marked “POR AGREGAR” and use `#` until destinations are approved.

## Do's and Don'ts

### Do:
- **Do** keep the visual thesis legible: preparation as a field of precision where performance and health are trained together.
- **Do** use the documented blue/ink/white palette and Archivo hierarchy before adding any new visual token.
- **Do** keep credentials, certifications, awards, and named athlete proof factual and easy to scan.
- **Do** preserve square evidence cards, one-pixel rules, diagonal/orbital geometry, and restrained electric-blue signals.
- **Do** keep `data-placeholder` hooks and explicit labels when an image, testimonial, social URL, or WhatsApp destination is missing.
- **Do** maintain semantic headings, keyboard-visible focus, sufficient contrast, mobile menu state semantics, and reduced-motion behavior.

### Don't:
- **Don't** introduce yellow, gradients unrelated to documented placeholder fields, rounded-pill UI, or decorative counters/numeric kickers.
- **Don't** present placeholder images, testimonial copy, phone numbers, or social links as real production assets.
- **Don't** add shadows to every card or use decoration to compete with the factual evidence.
- **Don't** replace the direct WhatsApp path with a multi-step form without an explicit product decision.
- **Don't** use emoji or a second icon library; interface iconography stays on Lucide React.
- **Don't** let responsive layouts hide the thesis, credentials, proof, or contact action; stack and simplify rather than omit.
