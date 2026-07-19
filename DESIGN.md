---
name: Synthetic Intelligence Portfolio
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#8e9193'
  on-tertiary-container: '#272a2c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system is engineered for a high-end portfolio at the intersection of frontend engineering and artificial intelligence. The brand personality is clinical, sophisticated, and forward-looking, emphasizing technical precision through a **Futuristic Minimalist** aesthetic. 

The visual language utilizes **Glassmorphism** as its primary structural driver, creating a sense of depth and data-density without visual clutter. The interface should feel like a premium command center—utilizing high-contrast typography and neon accents to guide the eye through complex technical projects. The emotional response is one of trust in technical mastery and excitement for the future of AI.

## Colors

The palette is rooted in a deep, nocturnal base to minimize eye strain and emphasize glowing elements.

- **Main Background**: Deep Slate Dark (#020617) provides a canvas that feels infinite and high-contrast.
- **Primary Text**: Crisp Slate Light (#f8fafc) ensures maximum readability and a "retina-ready" appearance.
- **Accents**: 
  - **Electric Neon Blue (#3b82f6)**: Used for primary actions, logic flows, and technical highlights.
  - **Mint/Emerald Green (#10b981)**: Used for success states, active AI processes, and "live" project indicators.
- **Surface Strategy**: Use `surface_glass_hex` with a `backdrop-filter: blur(12px)` for all elevated components.

## Typography

The typography strategy leverages a trio of specialized typefaces to reinforce the "Engineer-Architect" persona:

1.  **Geist**: Used for large headlines. Its geometric precision and tight kerning evoke a modern, developer-centric aesthetic.
2.  **Inter**: The workhorse for body copy. It provides exceptional legibility at small sizes within glassmorphic cards.
3.  **JetBrains Mono**: Reserved for technical labels, badges, and small metadata. It signals "code" and "precision" instantly.

Text should primarily use the primary text color, with a secondary opacity of 60% for "muted" or "de-emphasized" information.

## Layout & Spacing

The design system utilizes a **Fluid Grid** approach with generous whitespace to prevent the glassmorphic elements from feeling cluttered.

- **Grid**: 12-column desktop grid with 24px gutters.
- **Rhythm**: Use a 4px baseline unit. Most vertical spacing should be multiples of 16px (4 units) or 32px (8 units).
- **Responsive Behavior**: 
  - **Desktop**: 64px outer margins, maximum container width of 1280px.
  - **Mobile**: 20px outer margins. Glassmorphic cards should stack vertically.
- **Sectioning**: Use `stack-lg` (80px) between major portfolio sections to give the "futuristic" content room to breathe.

## Elevation & Depth

Hierarchy is defined through **translucency and blurs** rather than traditional drop shadows.

- **Level 1 (Base)**: The #020617 background.
- **Level 2 (Cards/Navbar)**: Surface glass (60% opacity) with a 12px backdrop blur and a 1px solid border at 10% opacity.
- **Level 3 (Hover/Active)**: Increased backdrop blur (20px) and a subtle outer glow using the primary Blue or Green accent (blur: 15px, opacity: 20%).
- **Interactive Depth**: When a card is hovered, it should "lift" (translateY: -4px) and the border opacity should increase to 30% to catch the light.

## Shapes

The shape language is "Soft-Tech"—primarily rounded rectangles that feel approachable but structured.

- **Standard Radius**: 0.5rem (8px) for cards and input fields.
- **Pill Radius**: Used exclusively for tech badges, status indicators, and the primary scroll indicator dots.
- **Dividers**: 1px thin lines with a gradient fade (transparent -> border_glass -> transparent) to create a "scanning" or "laser-cut" appearance.

## Components

### Sticky Navbar
A top-fixed bar using the full glassmorphism spec. It should feature a 1px bottom border and blurred background. Navigation links use `label-mono` typography and animate a small neon dot below the text when active.

### Project Cards
The centerpiece of the system.
- **Background**: Translucent slate with 12px blur.
- **Border**: 1px slate-light at 10% opacity.
- **Hover**: 0.5s transition to a 1px Electric Blue border and a subtle blue glow.
- **Content**: Projects should feature a "Tech Stack" row of pill-shaped badges at the bottom.

### Tech Badges (Pills)
Small, fully rounded containers with `label-mono` text. Use a low-opacity version of the accent colors (e.g., Blue at 10% fill) with a solid 1px accent border.

### Vertical Dot Scroll Indicator
Fixed to the right side of the viewport. Small 8px circles. The active section dot grows to a 12px circle and glows with the Electric Blue accent.

### Interactive Inputs
Input fields should be transparent with a bottom border only. On focus, the border animates to a full 0.5rem rounded box with a Mint Green glow, signaling the "AI is ready" for input.