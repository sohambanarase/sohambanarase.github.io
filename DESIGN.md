---
name: Aura Luminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c6c6cb'
  on-secondary: '#2f3034'
  secondary-container: '#46464b'
  on-secondary-container: '#b5b4ba'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  background-pure: '#000000'
  surface-border: '#ffffff1a'
  electric-glow: rgba(0, 122, 255, 0.15)
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The brand identity is engineered for a high-level Software Engineer specializing in AI and Cloud Architecture. It evokes a sense of "digital precision"—blending the cold, focused efficiency of a development environment with the polished, premium feel of high-end consumer technology. The target audience is technical recruiters and engineering leads at top-tier firms who value clarity, technical depth, and modern aesthetics.

The design system employs a **Modern Dark Mode** aesthetic rooted in **Minimalism** and **Glassmorphism**. It utilizes deep charcoal and true black surfaces to create infinite depth, while vibrant electric blue accents represent energy and intelligence. The interface is characterized by generous whitespace, microscopic attention to detail, and a "living" UI that feels reactive and high-fidelity.

## Colors

This design system uses a high-contrast dark palette to maximize readability and focus. 

- **Primary (#007AFF):** An electric, vibrant blue used sparingly for interactive elements, progress indicators, and key AI-related highlights.
- **Secondary (#8E8E93):** A muted slate used for secondary text, metadata, and non-active icons to establish hierarchy.
- **Neutral (#0F0F0F & #000000):** Pure black is reserved for the base background layer to create an "endless" feel on OLED screens, while Deep Charcoal is used for cards and elevated surfaces.
- **Accents:** High-contrast white is used for primary headings and body copy. Transparent white (#ffffff1a) is strictly used for 1px borders to define shapes without adding visual bulk.

## Typography

The typography system relies on **Inter** to deliver a systematic, utilitarian, yet modern feel. The scale emphasizes clear differentiation between "Statement" headlines and "Information" body text.

- **Headlines:** Feature tight letter-spacing and heavy weights to appear impactful and architectural.
- **Body:** Utilizes a generous line-height (1.6) to ensure long-form technical project descriptions are easy to scan and digest.
- **Labels:** Used for skills, tags, and category headers. These should often be presented in uppercase with slight letter spacing to act as UI anchors.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** for desktop and a **Fluid Grid** for mobile. It prioritizes "breathing room" to reflect a premium, uncluttered experience.

- **Grid Model:** A 12-column grid is used for desktop (1200px max-width). Content should often be centered with wide margins to create a gallery-like focus on portfolio items.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Large vertical gaps (120px+) between major sections (Experience, Projects, Education) help the user transition between different types of information.
- **Mobile:** Breakpoints at 768px (Tablet) and 480px (Mobile). On mobile, 12 columns collapse to 4, and section padding reduces to 64px.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

- **Surface Tiers:** The base layer is pure black (#000000). Cards and modals use deep charcoal (#0F0F0F).
- **Glass Effect:** Floating elements (like navigation bars or hovering cards) must use a `backdrop-blur` (min 12px) with a semi-transparent background (#0F0F0Fcc).
- **Borders:** Depth is defined by thin, 1px solid borders (#ffffff1a). This "ghost border" technique provides structure without interrupting the dark aesthetic.
- **Glows:** Subtle, low-opacity radial gradients (Primary blue at 5-10% opacity) can be placed behind key project cards to suggest a "backlit" effect.

## Shapes

The shape language is consistently "Rounded" to soften the technical edge of the dark theme. 

- **Cards/Containers:** Use a 16px (1rem) radius to feel modern and approachable.
- **Interactive Elements:** Buttons and input fields follow the 8px-12px range.
- **Media:** Images and project thumbnails must strictly adhere to the container's roundedness to maintain a cohesive "encapsulated" look.

## Components

- **Buttons:** Primary buttons use a solid Electric Blue background with white text. Secondary buttons are "ghost" style with a 1px border (#ffffff1a) and a subtle hover fill.
- **Chips/Tags:** Used for "Digital Skills" (Python, React, AI). These should be small, low-contrast capsules (Dark gray background, slate text) to prevent them from distracting from primary content.
- **Cards:** The core of the portfolio. Cards feature a 1px border, 16px corner radius, and a subtle lift on hover (increase border opacity or add a faint blue glow).
- **Input Fields:** Minimalist design with only a bottom border or a very faint outlined box. Focus states must trigger the Primary Blue border.
- **AI Indicator:** A custom component—a small, pulsing blue dot or a subtle gradient shimmer—used alongside AI-specific projects (LLMs, RAG) to denote "active" intelligence.
- **Timeline:** A vertical 1px line (Slate Gray) for the Work Experience section, using small circular nodes to anchor dates and roles.