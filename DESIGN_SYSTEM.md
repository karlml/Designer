# Withings Health App — Design System Documentation

A comprehensive reference implementation of the **"Soft Wellness"** mobile design aesthetic. This design language prioritizes warmth, approachability, and clarity while maintaining a premium, health-focused feel.

---

## 1. Design Philosophy & Aesthetic

### Core Principles

- **Soft Naturalism**: Warm, muted backgrounds with organic shapes create a calming, non-clinical health experience
- **Clarity Over Decoration**: Information hierarchy is achieved through typography weight and spacing, not borders or heavy visual treatments
- **Generous Whitespace**: Breathing room between elements creates a premium, uncluttered feel
- **Approachable Data Visualization**: Charts and metrics feel friendly rather than overwhelming
- **Category-Coded Color**: Semantic color associations help users navigate content types intuitively

### Atmosphere Keywords

`Warm` · `Approachable` · `Premium` · `Clean` · `Trustworthy` · `Calming` · `Modern` · `Minimal`

---

## 2. Color System

### Background Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#F7F6F4` | Main app background — warm off-white with slight cream undertone |
| `bg-secondary` | `#FFFFFF` | Card surfaces, modals |
| `bg-elevated` | `#EDEBE8` | Slightly darker backgrounds for depth, tab bars |
| `bg-modal-overlay` | `#9E9E9E` / 40% opacity | Modal backdrop dimming |

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-primary` | `#2B3A67` | Primary brand navy — avatar backgrounds, primary buttons, active states |
| `brand-accent` | `#4A6CF7` | Charts, progress indicators, interactive elements |

### Category/Semantic Colors

| Category | Background | Text/Icon | Usage |
|----------|------------|-----------|-------|
| **Activity** | `#F9F3DC` | `#8B7B3D` | Steps, workouts, movement content |
| **Body** | `#EDE4F3` | `#6B4D8A` | Weight, body composition, nutrition |
| **Heart** | `#FCE4EC` | `#C75B7A` | Blood pressure, cardiovascular health |
| **Sleep** | `#E3F2FD` | `#4A6FA5` | Sleep tracking, rest data |
| **Success/Connected** | `#E8F5E9` | `#4CAF50` | Enabled states, achievements, connected apps |

### Chart Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `chart-primary` | `#4A6CF7` | Steps, activity bars, primary data |
| `chart-secondary` | `#50C4A1` | Body composition (muscle) |
| `chart-tertiary` | `#9575CD` | Body composition (fat) |
| `chart-area-gradient-start` | `#4A6CF7` / 30% opacity | Area chart fill top |
| `chart-area-gradient-end` | `#4A6CF7` / 5% opacity | Area chart fill bottom |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#1A1A1A` | Headlines, primary content |
| `text-secondary` | `#5C5C5C` | Body text, descriptions |
| `text-tertiary` | `#9E9E9E` | Captions, timestamps, disabled |
| `text-inverse` | `#FFFFFF` | Text on dark/colored backgrounds |
| `text-link` | `#4A6CF7` | Interactive text, profile stats |

### UI Element Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `border-subtle` | `#E5E5E5` | Card borders, dividers |
| `border-separator` | `#F0F0F0` | List item separators |
| `toggle-track-on` | `#1A1A1A` | Active toggle background |
| `toggle-track-off` | `#E5E5E5` | Inactive toggle background |
| `toggle-thumb` | `#FFFFFF` | Toggle thumb |

---

## 3. Typography

### Font Family

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', sans-serif;
```

The app uses the iOS system font (SF Pro) which provides:
- Excellent legibility at all sizes
- Native feel on iOS
- Tabular number support for data display
- Variable weight support

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display` | 34px | Bold (700) | 1.1 | -0.5px | Large hero numbers (step counts) |
| `title-1` | 28px | Bold (700) | 1.2 | -0.3px | Screen titles ("Achieve", "Activity") |
| `title-2` | 22px | Bold (700) | 1.25 | -0.2px | Section headers ("My Focus", "Past 7 Days") |
| `title-3` | 20px | Semibold (600) | 1.3 | 0 | Card titles, category names |
| `headline` | 17px | Semibold (600) | 1.35 | 0 | List item titles, button text |
| `body` | 17px | Regular (400) | 1.4 | 0 | Primary body text |
| `body-small` | 15px | Regular (400) | 1.4 | 0 | Secondary descriptions |
| `caption` | 13px | Regular (400) | 1.3 | 0.2px | Timestamps, meta info |
| `caption-caps` | 11px | Semibold (600) | 1.2 | 1.5px | All-caps labels ("ACTIVITY", "PROFILE") |
| `metric-value` | 24px | Bold (700) | 1.1 | -0.3px | Data values in cards |
| `metric-unit` | 15px | Regular (400) | 1.1 | 0 | Units (kcal, km, %) |

### Special Typography Treatments

**Large Metrics Display**
```
6 343          ← 48px, Bold, -1px letter-spacing
steps          ← 13px, Regular, text-secondary
```

**Percentage with Goal**
```
63%            ← 28px, Bold, brand-accent color
10 000         ← 13px, Regular, text-tertiary
```

---

## 4. Spacing System

### Base Unit

The design uses an **8px base unit** with a 4px sub-unit for fine adjustments.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Icon-to-text gaps, fine adjustments |
| `space-sm` | 8px | Tight groupings, inline elements |
| `space-md` | 12px | Default component internal padding |
| `space-lg` | 16px | Card padding, section gaps |
| `space-xl` | 20px | Screen horizontal margins |
| `space-2xl` | 24px | Section vertical spacing |
| `space-3xl` | 32px | Major section separations |
| `space-4xl` | 40px | Hero spacing, modal top padding |

### Screen Margins

- **Horizontal margin**: 20px (both sides)
- **Safe area insets**: Respected on all edges
- **Bottom navigation clearance**: 90px minimum

### Card Internal Spacing

```
┌─────────────────────────────────────┐
│           16px padding              │
│  ┌─────────────────────────────┐    │
│  │         Content             │    │
│  └─────────────────────────────┘    │
│           16px padding              │
└─────────────────────────────────────┘
```

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-xs` | 4px | Small badges, tags |
| `radius-sm` | 8px | Buttons, inputs, small cards |
| `radius-md` | 12px | Standard cards, list containers |
| `radius-lg` | 16px | Large cards, feature cards |
| `radius-xl` | 20px | Modal sheets, hero cards |
| `radius-2xl` | 24px | Bottom sheet top corners |
| `radius-full` | 9999px | Avatars, circular buttons, pills |

---

## 6. Shadows & Elevation

### Shadow Scale

The app uses **minimal shadows** — elevation is primarily conveyed through background color contrast.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Flat cards on cream background |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.04)` | Subtle card lift |
| `shadow-md` | `0 2px 8px rgba(0,0,0,0.06)` | Floating elements, FABs |
| `shadow-lg` | `0 4px 16px rgba(0,0,0,0.08)` | Modals, bottom sheets |

### Elevation Hierarchy

1. **Base layer** — `bg-primary` (#F7F6F4)
2. **Card layer** — `bg-secondary` (#FFFFFF) with `shadow-sm` or no shadow
3. **Floating layer** — Bottom sheets, modals with `shadow-lg`
4. **Overlay layer** — Modal backdrops with 40% opacity

---

## 7. Components

### 7.1 Navigation Bar (Top)

```
┌─────────────────────────────────────────────────────┐
│  [Avatar]    Title Text              [Icon] [Icon]  │
│   44×44                               44×44  44×44  │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 56px (excluding safe area)
- Background: Transparent or `bg-primary`
- Avatar: 44×44px, `radius-full`
- Title: `title-3` style, centered or left-aligned
- Right icons: 44×44px touch targets, 24px icons

**Avatar Component:**
```
Background: brand-primary (#2B3A67)
Text: White, Bold, uppercase initials
Sizes:
  - sm: 32×32px, 12px font
  - md: 44×44px, 16px font (nav default)
  - lg: 80×80px, 28px font (profile)
  - xl: 150×150px, 48px font (profile hero)
```

### 7.1.1 Screen Header (Activity Style)

```
┌─────────────────────────────────────────────────────┐
│  (◀)              ACTIVITY                 (⋮)      │
│  44×44                                     44×44    │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: ~72px (with padding)
- Background: `bg-primary`
- Back button: 44×44px, `bg-elevated`, `radius-full`, `shadow-sm`
- Title: 13px, semibold, 2px letter-spacing, uppercase, centered
- More button: 44×44px, `bg-elevated`, `radius-full`, `shadow-sm`, vertical ellipsis

### 7.1.2 Navigation Header (Avatar Style)

```
┌─────────────────────────────────────────────────────┐
│  [Avatar]        My Health           [Bell] [Gear] │
│   44×44                               24px   24px   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 56px
- Avatar: 44×44px, left-aligned
- Title: 17px, regular, `text-secondary`, centered
- Right icons: 24px, with 8px gap

### 7.2 Tab Bar (Bottom)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   ┌──────┐  ┌──────┐  ┌─────────┐  ┌──────┐        │
│   │ 🏠   │  │ ⭐   │  │ 👥      │  │ ✨   │        │
│   │ Home │  │Achieve│ │ Share   │  │      │        │
│   └──────┘  └──────┘  └─────────┘  └──────┘        │
│                        ▲ Active                    │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `#EDEBE8` (warm gray)
- Height: 83px (including home indicator area)
- Border radius: 24px (top corners)
- Item spacing: Equal distribution
- Icon size: 24px
- Label: 11px, medium weight

**Active State:**
- Background pill: `#C8C5C0` with full opacity
- Text color: `brand-accent` (#4A6CF7)
- Icon: Filled variant

**Inactive State:**
- No background
- Text/icon: `text-secondary`
- Icon: Outlined variant

### 7.3 Segmented Control

```
┌─────────────────────────────────────────────────────┐
│  ┌───────────────┐                                  │
│  │     Day       │    Week         Month            │
│  └───────────────┘                                  │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `#E8E6E3` (subtle warm gray)
- Height: 36px
- Border radius: `radius-full` (pill shape)
- Padding: 4px

**Selected Segment:**
- Background: `#FFFFFF`
- Text: `text-primary`, Semibold
- Border radius: `radius-full`
- Shadow: `shadow-sm`

**Unselected Segment:**
- Background: Transparent
- Text: `text-secondary`, Regular

### 7.4 Date Navigation

```
┌─────────────────────────────────────────────────────┐
│   (◀)              Today                (▶)         │
│   44×44                                 44×44       │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Arrow buttons: 44×44px, `bg-secondary`, `radius-full`
- Arrow icons: 20px, `text-primary`
- Center text: 17px, semibold, centered
- Padding: 12px 20px
- Full width layout with space-between

### 7.4.1 Section Header

```
┌─────────────────────────────────────────────────────┐
│  Section Title                      [Badge] [+]    │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Title: 22px, bold, -0.2px letter-spacing
- Badge (optional): 13px semibold, `text-secondary`, pill with border
- Action (optional): Icon button or custom element
- Margin bottom: 16px

### 7.4.2 Page & Section Titles

**Page Title:**
- Font size: 34px
- Weight: Bold (700)
- Letter spacing: -0.5px
- Margin bottom: 20px

**Subsection Title:**
- Font size: 22px
- Weight: Bold (700)
- Letter spacing: -0.3px
- Margin bottom: 12px

### 7.5 Cards

#### Standard Data Card

```
┌─────────────────────────────────────────────────────┐
│  🏃 Daily Steps                          17:06 >   │
│                                                     │
│  6 343                       ┌─────────┐           │
│  63 % Goal                   │▅▂▆▇▃▁▂▅│           │
│  6 floors                    └─────────┘           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `bg-secondary` (#FFFFFF)
- Border radius: `radius-lg` (16px)
- Padding: 16px
- Shadow: None or `shadow-sm`

**Content Structure:**
- Header row: Icon (20px) + Label (`body-small`) + Timestamp (`caption`) + Chevron
- Metric: `display` or `metric-value` size
- Sub-metrics: `body-small`, `text-secondary`
- Mini chart: Right-aligned, ~100px width

#### Category Feature Card

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Stronger               ┌─────────────────────┐    │
│  Muscles,               │                     │    │
│  Healthier You   →      │   [Illustration]    │    │
│                         │                     │    │
│                         └─────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Category color (e.g., `#F9F3DC` for Activity)
- Border radius: `radius-lg` (16px)
- Aspect ratio: ~1.2:1 or flexible
- Padding: 20px

**Content:**
- Title: `title-3`, category text color, max 3 lines
- Arrow icon: 20px, right of title
- Illustration: Right-aligned or bottom, ~50% of card

### 7.6 List Items

#### Standard List Item

```
┌─────────────────────────────────────────────────────┐
│  [Icon]    Primary Text                             │
│   40×40    Secondary Text                    >      │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 60-72px
- Padding: 16px horizontal
- Icon container: 40×40px, `radius-md`, category background
- Icon: 20px, category color
- Separator: 1px, `border-separator`, full width or inset

#### Value List Item

```
┌─────────────────────────────────────────────────────┐
│  Walking asymmetry                           2 %   │
├─────────────────────────────────────────────────────┤
│  Walking double support time                29 %   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Label: `body`, `text-primary`
- Value: `headline`, `text-primary`, right-aligned
- Separator: 1px `border-separator`
- Padding: 16px

#### Settings Item (Editable)

```
┌─────────────────────────────────────────────────────┐
│  [Icon]    Weight                    75 kg    ✏️   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Icon container: 40×40px, `bg-elevated`, `radius-md`
- Title: 17px, regular
- Value: 17px, bold
- Edit button: 36×36px, no background

#### Settings Item (Plain - no icon background)

```
┌─────────────────────────────────────────────────────┐
│  🔔    Notifications                            >   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Icon: 24×24px, `text-primary`, no background
- Title: 17px, regular
- Chevron: 20px, `text-tertiary`

#### Settings Section Card

```
┌─────────────────────────────────────────────────────┐
│                    [48×48 Icon]                     │
│                                                     │
│                  Section Title                      │
│           Description text here...                  │
├─────────────────────────────────────────────────────┤
│  Setting Item 1                                 >   │
├─────────────────────────────────────────────────────┤
│  Setting Item 2                                 ○   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Header: Centered, `bg-secondary`
- Icon container: 48×48px, `bg-elevated`, `radius-md`
- Title: 22px, bold, -0.3px letter-spacing
- Description: 15px, `text-secondary`, max-width 280px
- Separator: 1px `border-separator`

#### Feature Toggle Row

```
┌─────────────────────────────────────────────────────┐
│  ┌──────────┐                                       │
│  │          │  Feature Title  [W+]                 │
│  │  Image   │  Description of feature...     ○──   │
│  │          │                                       │
│  └──────────┘                                       │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Image container: 80×80px, `bg-elevated`, `radius-lg`
- Title: 17px, semibold
- Badge: Optional, inline with title
- Description: 15px, `text-secondary`, line-height 1.4
- Toggle: Right-aligned, vertically centered

#### Selection Card

```
┌─────────────────────────────────────────────────────┐
│  [44×44 Icon]    Card Title                    ✏️   │
│                  Optional subtitle                  │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Icon container: 44×44px, category color, `radius-md`
- Title: 17px, semibold
- Subtitle: 15px, `text-secondary`
- Edit button: 44×44px, `brand-primary` color

### 7.7 Buttons

#### Primary Button (Filled)

```
┌─────────────────────────────────────────────────────┐
│              Set your Health Goal                   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `#1A1A1A` (near black)
- Text: `#FFFFFF`, `headline` style
- Height: 52px
- Border radius: `radius-full` (pill)
- Padding: 0 24px
- Full width or auto-width

#### Secondary Button (Outlined)

```
┌─────────────────────────────────────────────────────┐
│                    Invite                           │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Transparent
- Border: 1px `#1A1A1A`
- Text: `#1A1A1A`, `body` style
- Height: 36px
- Border radius: `radius-full`
- Padding: 0 16px

#### Icon Button (Circular)

**Specifications:**
- Size: 44×44px
- Background: `bg-secondary` or `#E8E6E3`
- Border radius: `radius-full`
- Icon: 20-24px, `text-primary`

#### Icon Button Dark (Circular)

**Specifications:**
- Size: 44×44px
- Background: `text-primary` (#1A1A1A)
- Border radius: `radius-full`
- Icon: 20-24px, `text-inverse` (white)

#### Floating Action Button (FAB)

**Specifications:**
- Size: 56×56px
- Background: `text-primary` (#1A1A1A) or `brand-accent` (#4A6CF7)
- Border radius: `radius-full`
- Icon: 24px, `text-inverse` (white)
- Shadow: `shadow-lg`

### 7.8 Toggle Switch

```
ON:  ━━━━━━━━●
OFF: ●━━━━━━━━
```

**Specifications:**
- Track width: 51px
- Track height: 31px
- Track radius: `radius-full`
- Thumb size: 27px
- Thumb offset: 2px from edge

**States:**
- ON: Track `#1A1A1A`, Thumb `#FFFFFF`
- OFF: Track `#E5E5E5`, Thumb `#FFFFFF`

### 7.9 Progress Indicators

#### Circular Progress

```
      ╭───────╮
     ╱    63%  ╲
    │   10 000  │
     ╲         ╱
      ╰───────╯
```

**Specifications:**
- Size: 80px diameter (compact), 120px (large)
- Track: 6px stroke, `#E5E5E5`
- Progress: 6px stroke, `brand-accent`
- Center text: Percentage `title-2`, Goal `caption`
- Stroke linecap: Round

#### Horizontal Progress (Stepped)

```
●───●───●───●───○───○
```

**Specifications:**
- Track: 4px height, `#E5E5E5`
- Progress: 4px height, category color
- Dots: 8px diameter, at regular intervals
- Active dot: Filled with progress color
- Inactive dot: `#E5E5E5` or `bg-secondary`

### 7.10 Charts

#### Bar Chart (Steps/Activity)

```
        ▇
    ▅   █
    █ ▃ █ ▅
  ▂ █ █ █ █ ▁
──────────────────
00  04  08  12  16  20  00
```

**Specifications:**
- Bar color: `brand-accent` (#4A6CF7)
- Bar width: 8-12px
- Bar spacing: 4px
- Bar radius: 2px top corners
- Axis line: 1px `border-subtle`
- Labels: `caption`, `text-tertiary`
- Background grid: Dashed, `#F0F0F0`

#### Area Chart (Floors/Trends)

**Specifications:**
- Line: 2px stroke, `brand-accent`
- Fill: Linear gradient, top 30% opacity → bottom 5% opacity
- Dot markers: 6px diameter, `brand-accent`, on key points
- Value label: `caption`, positioned near peak

### 7.11 Modals & Bottom Sheets

```
┌─────────────────────────────────────────────────────┐
│                    ───                              │ ← Handle
│  ✕    DEVICE SETTINGS               + Add          │ ← Header
├─────────────────────────────────────────────────────┤
│                                                     │
│                   [Content]                         │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `bg-secondary` (#FFFFFF)
- Top corners: `radius-2xl` (24px)
- Handle: 36×5px, `#D1D1D6`, centered, 8px from top
- Header height: 56px
- Header title: `caption-caps`, centered
- Close button: 44×44px, left side, `#1A1A1A` background, white icon
- Action button: Right side, pill style

### 7.12 Badges & Pills

#### Status Badge

```
┌──────────────────┐
│ ● Connected      │
└──────────────────┘
```

**Specifications:**
- Background: Category color or `#E8F5E9` for success
- Text: `caption`, category color
- Padding: 8px 12px
- Border radius: `radius-full`
- Status dot: 6px, filled
- Variants: `default`, `success`, `activity`, `body`, `heart`, `sleep`

#### Achievement Badge

```
┌─────────────────────────────────┐
│        [Illustration]           │
│                                 │
│         Mauna Kea               │
│          10 200 m               │
└─────────────────────────────────┘
```

**Specifications:**
- Background: `bg-secondary`
- Border radius: `radius-lg`
- Size: ~120×140px
- Image: Centered, 80×80px
- Title: `body-small`, semibold, centered
- Subtitle: `caption`, `text-secondary`, centered

#### W+ Premium Badge

**Specifications:**
- Background: Linear gradient `135deg, #F97316 → #EC4899`
- Text: White, 11px, bold
- Padding: 4px 8px
- Border radius: `radius-sm`
- Content: "W+"

#### Partner Badge (Circular)

**Specifications:**
- Size: 36×36px
- Background: `brand-accent` (#4A6CF7)
- Text: White, 16px, bold
- Border radius: `radius-full`
- Shadow: `shadow-md`

### 7.12.1 Appointment Card

```
┌─────────────────────────────────────────────────────┐
│  [48×48]    10:30 AM                            >   │
│   Image     Dr. Jane Smith                          │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `bg-secondary`
- Border radius: `radius-lg`
- Image: 48×48px, `radius-md`
- Time: 17px, semibold, `brand-primary`
- Name: 15px, `text-secondary`
- Chevron: 20px, `text-tertiary`

### 7.12.2 Challenge Card

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│            [Illustration Area]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│  Challenge Title                                >   │
│  Description text here...                           │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Illustration: Centered, with 20px vertical padding
- Separator: 1px `border-separator`
- Title: 17px, semibold
- Description: 15px, `text-secondary`, line-height 1.4
- Chevron: 20px, `text-tertiary`

### 7.12.3 Category Card

```
┌─────────────────────────────────────────────────────┐
│  [48×48]    Activity                                │
│   Icon      x12                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Icon container: 48×48px, `bg-elevated`, `radius-md`
- Label: 17px, medium weight
- Count: 15px, `text-tertiary`

### 7.12.4 Content Grid Card

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│            [Square Image]                           │
│                                                     │
│  ┌─────────────────┐                                │
│  │ 🏃 ACTIVITY     │                                │
│  └─────────────────┘                                │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Aspect ratio: 1:1
- Image: Cover fit
- Badge: Bottom-left, `bg-secondary`, `radius-full`, `shadow-md`
- Badge icon: Category color
- Badge text: 13px, semibold, uppercase, 0.5px letter-spacing

### 7.13 Chat Components

#### Chat Message Bubble

```
Received:                        Sent:
┌─────────────────┐              ┌─────────────────┐
│ Message text    │              │ Message text    │
└─────────────────┘              └─────────────────┘
   └── Avatar                         square corner ──┘
```

**Specifications:**
- Padding: 12px 16px
- Font size: 16px, line-height 1.45
- Background (received): `bg-secondary` (#FFFFFF)
- Background (sent): `bg-elevated` (#EDEBE8)
- Border radius: 16px on three corners, 4px on bottom-left (received) or bottom-right (sent)
- Max width: 85%
- Avatar (received only): 36×36px, `radius-full`

#### Chat Input (AI-Powered)

```
┌─────────────────────────────────────────────────────┐
│  [✨]    Your message...                      [↑]   │
└─────────────────────────────────────────────────────┘
  └── Gradient border: pink → purple → violet
```

**Specifications:**
- Border: 2px gradient `135deg, #E879A0 → #9B59B6 → #7C3AED`
- Border radius: `radius-full`
- Inner background: `bg-primary`
- AI sparkle icon: 40×40px, pink background (#FECDD3)
- Send button: 40×40px, `text-primary` when active, `bg-elevated` when disabled
- Input: 17px, no border

#### Chat Date Separator

**Specifications:**
- Font size: 13px
- Color: `text-tertiary`
- Text align: center
- Margin: 8px 0 16px

#### Chat Disclaimer

**Specifications:**
- Font size: 13px, line-height 1.5
- Color: `text-tertiary`
- Text align: center
- Padding: 0 16px

### 7.14 Charts & Data Visualization

#### Mini Bar Chart

```
    ▇
▅   █
█ ▃ █ ▅
────────
```

**Specifications:**
- Height: 40px default
- Bar width: Auto (flex)
- Bar spacing: 3px gap
- Bar color: `brand-accent` (#4A6CF7)
- Bar radius: 2px top corners

#### Bar Chart (Full)

```
        ▇                          10K
    ▅   █                           
    █ ▃ █ ▅                         5K
  ▂ █ █ █ █ ▁                       
────────────────────────            0
00  04  08  12  16  20  00
```

**Specifications:**
- Height: 200px default
- Bar width: Auto (flex)
- Bar spacing: 2px gap
- Bar color: `brand-accent` (#4A6CF7)
- Bar radius: 2px 2px 0 0
- Axis line: 1px dashed `border-subtle`
- Y-axis labels: 12px, `text-tertiary`, right-aligned
- X-axis labels: 12px, `text-tertiary`

#### Trend/Line Chart

```
                    ○───○
            ○───○──╱
       ○───○
──○───○
├───────────────────────────┤
Jan    Feb    Mar    Apr    May
```

**Specifications:**
- Line: 2.5px stroke, `brand-accent`
- Data points: 10×10px circles, white fill, 2.5px `brand-accent` border
- Projected section: Dashed line and border
- Grid lines: 1px `border-subtle`
- Y-axis labels: 12px, `text-tertiary`
- X-axis labels: 14px (primary), 12px (sub-label)
- Sub-label colors: `heart-text` for positive, `success-text` for negative

#### Area Chart (Stepped)

```
┌─────────────────────────────────────────┐
│    ┌──┐                                 │
│ ┌──┘  └──┐     ┌──┐                     │ ← gradient fill
│─┘        └─────┘  └─────────────────────│
└─────────────────────────────────────────┘
```

**Specifications:**
- Line: 2px stroke, `brand-accent`
- Fill: Linear gradient, top 25% opacity → bottom 2% opacity
- Style: Stepped (horizontal then vertical)
- Last value label: 12px, `text-secondary`, pill background

#### Trend Header

```
TREND
+2.3 kg
```

**Specifications:**
- Label: 13px, semibold, uppercase, 1px letter-spacing, `text-secondary`
- Value: 28px, bold
- Margin bottom: 16px

#### Chart Modal Header

```
┌─────────────────────────────────────────┐
│  (✕)    Jan 1 - Jan 31, 2026            │
└─────────────────────────────────────────┘
```

**Specifications:**
- Close button: 44×44px, `bg-elevated`, `radius-full`
- Date range: 17px, medium weight
- Gap: 16px
- Margin bottom: 20px

### 7.15 Metric & Stats Cards

#### Metric Card

```
┌─────────────────────────────────────────────────────┐
│  🏃 Daily Steps                          17:06 >   │
│                                                     │
│  6 343                       ┌─────────┐           │
│  63 % Goal                   │▅▂▆▇▃▁▂▅│           │
│  6 floors                    └─────────┘           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `bg-secondary`
- Border radius: `radius-lg` (16px)
- Padding: 20px
- Icon: Category color
- Label: 15px, `text-secondary`
- Timestamp: 13px, `text-tertiary`
- Value: 34px, bold, -0.5px letter-spacing
- Unit: 15px, `text-secondary`
- Subtitle: 15px, `text-secondary`
- Mini chart: 100px width, right-aligned

#### Stats Card

```
┌─────────────────────────────────────────────────────┐
│  Steps                           ╭───────╮         │
│  6 343                          ╱   63%  ╲         │
│                                │  10 000  │         │
│─────────────────────────────────╲         ╱         │
│  Active calories    1,234 kcal   ╰───────╯         │
│  Distance           4.2 km                          │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Label: 17px, `text-primary`
- Value: 42px, bold, -1px letter-spacing
- Circular progress: 90px diameter
- Info rows: 17px, separated by `border-separator`

### 7.16 Feature & Promo Cards

#### Feature Card

```
┌─────────────────────────────────────────────────────┐
│                                        ┌─────────┐ │
│        [Hero Image - 180px]            │ Covered │ │
│                                        └─────────┘ │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Feature Title                                      │
│  Description text here...                           │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │              Get Started                      │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Image height: 180px
- Title: 22px, bold, `brand-primary`, -0.2px letter-spacing
- Description: 15px, `text-secondary`, line-height 1.5
- Badge position: Top-right, 12px offset
- Button: Full-width primary button

#### Hero Card (Image Overlay)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Background Image]                     │
│              ░░░░░░░░░░░░░░░░░░                     │
│              ░░ Gradient Overlay░░                  │
│              ░░░░░░░░░░░░░░░░░░                     │
│                   Title                             │
│                  Subtitle                           │
│               [ View More > ]                       │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 220px
- Overlay: Linear gradient `to top, rgba(0,0,0,0.7) → rgba(0,0,0,0.15)`
- Title: 22px, bold, white
- Subtitle: 15px, rgba(255,255,255,0.8)
- Button: Secondary variant, centered

#### Promo Card

```
┌─────────────────────────────────────────────────────┐
│  [W+]                                               │
│                                                     │
│  Premium Feature Title                              │
│  Description of the feature and its benefits...    │
├─────────────────────────────────────────────────────┤
│  Learn more                                     >   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Badge: Optional, top-left
- Title: 20px, bold
- Description: 15px, `text-secondary`, line-height 1.5
- Link row: Bordered top, 17px medium weight

### 7.17 Discovery & Onboarding

#### Discovery Card

```
┌──────────────────────┐
│  ┌────────────────┐  │
│  │                │  │
│  │  [Illustration]│  │
│  │                │  │
│  └────────────────┘  │
│                      │
│  Card Title          │
│  2 min read          │
└──────────────────────┘
```

**Specifications:**
- Width: 180px
- Border radius: `radius-xl` (20px)
- Padding: 16px
- Illustration container: 120×120px, rounded 20px
- Title: 17px, semibold
- Status: 15px, `brand-accent` (incomplete) or `text-secondary` (completed)

#### Discovery Carousel

**Specifications:**
- Display: Horizontal scroll
- Gap: 12px
- Hide scrollbar (native scrollbar hidden)
- Overflow: Auto with hidden scrollbar

### 7.18 Profile Components

#### Profile Header

```
┌─────────────────────────────────────────────────────┐
│  ┌─────────┐                                        │
│  │         │                                        │
│  │   JD    │    John Doe                           │
│  │         │                                        │
│  └─────────┘                                        │
│    150×150                                          │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Avatar: 150×150px, 48px font
- Name: 34px, bold
- Gap: 20px
- Padding: 20px

#### Profile Info Button

```
┌─────────────────────────────────────────────────────┐
│  Learn about your profile benefits              >   │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: #E8F4F8 (light cyan)
- Text: #0891B2 (cyan)
- Font: 17px, medium weight
- Padding: 12px 16px
- Border radius: `radius-lg`

### 7.19 Empty & Loading States

#### Empty State Card

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              [Illustration]                         │
│                                                     │
│         No data available yet                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `bg-secondary`
- Border radius: `radius-lg`
- Padding: 20px
- Text: 17px, medium weight, centered
- Illustration: Centered, with 16px bottom margin

### 7.20 Device Components

#### Device Card

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ScanWatch 2                                        │
│                                                     │
│  ┌────────────────────────────────────────────────┐│
│  │ ↻ Synced 1d  |  🔋 85%                         ││
│  └────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Title: 28px, bold, -0.5px letter-spacing
- Status bar: `bg-elevated`, `radius-md`, 15px text
- Status icons: 20px, success green (#4CAF50)

#### Device Status Indicator

**Specifications:**
- Size: 44px default
- Border: 2px `border-subtle`
- Image: 70% of container
- Connected dot: 12×12px, `success-text`, top-right, 2px `bg-primary` border

#### Product Thumbnail

**Specifications:**
- Size: 80×80px
- Background: Linear gradient `135deg, #E8E6E3 → #D5D3D0`
- Border radius: `radius-md`
- Content: Centered icon/image

### 7.21 Phone Frame (Preview)

```
┌─────────────────────────────────────────────────────┐
│                   ═══════                           │ ← Dynamic Island
├─────────────────────────────────────────────────────┤
│                                                     │
│                                                     │
│                   Content                           │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Sizes: sm (280×560px), md (320×640px)
- Border radius: 32px (sm), 36px (md)
- Frame: 10px black border
- Dynamic Island: 100×28px, black, 16px radius
- Shadow: `0 25px 50px rgba(0,0,0,0.5)`

---

## 8. Iconography

### Icon Style

- **Style**: SF Symbols or equivalent outlined icons
- **Stroke width**: 1.5-2px
- **Corners**: Rounded
- **Grid**: 24×24px standard, 20px small, 28px large

### Common Icons

| Icon | Usage |
|------|-------|
| `chevron.right` | Navigation, disclosure |
| `bell` | Notifications |
| `plus` | Add action |
| `gear` | Settings |
| `xmark` | Close, dismiss |
| `arrow.left` | Back navigation |
| `ellipsis` | More options |
| `figure.walk` | Activity, steps |
| `scalemass` | Body, weight |
| `heart.fill` | Heart, cardiovascular |
| `wifi` | Connectivity |
| `checkmark` | Completion, success |

### Category Icons

Each content category has a consistent icon in a circular badge:
- Container: 40×40px, category background color
- Icon: 20px, category text color

---

## 9. Illustrations

### Style Guidelines

- **Aesthetic**: Flat vector illustrations with limited color palette
- **Characters**: Diverse, simplified human forms without facial details
- **Colors**: Match category color scheme plus skin tones
- **Shadows**: Minimal, using darker shade of base color
- **Lines**: Clean, no outlines, shape-based
- **Mood**: Active, positive, health-focused

### Illustration Sizes

| Context | Size |
|---------|------|
| Feature card | 120-180px height |
| Empty state | 200-240px |
| Onboarding | Full width |
| Achievement | 80×80px circular |

---

## 10. Motion & Animation

### Timing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-default` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Standard transitions |
| `ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | Symmetric animations |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy, playful |

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 150ms | Micro-interactions, toggles |
| `duration-normal` | 250ms | Standard transitions |
| `duration-slow` | 400ms | Modal enter/exit |
| `duration-slower` | 600ms | Page transitions |

### Common Animations

**Card Press:**
```css
transform: scale(0.98);
transition: transform 150ms ease-default;
```

**Modal Enter:**
```css
transform: translateY(100%) → translateY(0);
opacity: 0 → 1;
transition: all 400ms ease-spring;
```

**Progress Fill:**
```css
stroke-dashoffset: animate over 800ms;
transition-timing-function: ease-in-out;
```

**Tab Switch:**
```css
/* Active indicator slides to new position */
transform: translateX(calc(tab-index * tab-width));
transition: transform 250ms ease-default;
```

---

## 11. Accessibility

### Touch Targets

- **Minimum size**: 44×44px
- **Spacing**: 8px minimum between targets

### Color Contrast

- Text on backgrounds: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Clearly distinguishable states

### Dynamic Type Support

All text should scale with system accessibility settings:
- Minimum: 85% of base size
- Maximum: 135% of base size

---

## 12. Layout Patterns

### Screen Structure

```
┌─────────────────────────────────────────────────────┐
│                  Status Bar                         │
├─────────────────────────────────────────────────────┤
│                  Navigation                         │
│               (56px + safe area)                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│                                                     │
│                                                     │
│              Scrollable Content                     │
│                                                     │
│                                                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                   Tab Bar                           │
│               (83px + safe area)                    │
└─────────────────────────────────────────────────────┘
```

### Grid System

- **Columns**: 1 (mobile), 2 (tablets)
- **Gutter**: 12px
- **Margin**: 20px

### Card Grid (2-column)

```
┌──────────────┐  ┌──────────────┐
│              │  │              │
│   Card 1     │  │   Card 2     │
│              │  │              │
└──────────────┘  └──────────────┘
     Gap: 12px
```

---

## 13. Implementation Notes

### React Native / Expo

```javascript
// Theme configuration
export const theme = {
  colors: {
    background: {
      primary: '#F7F6F4',
      secondary: '#FFFFFF',
      elevated: '#EDEBE8',
    },
    brand: {
      primary: '#2B3A67',
      accent: '#4A6CF7',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#5C5C5C',
      tertiary: '#9E9E9E',
    },
    category: {
      activity: { bg: '#F9F3DC', text: '#8B7B3D' },
      body: { bg: '#EDE4F3', text: '#6B4D8A' },
      heart: { bg: '#FCE4EC', text: '#C75B7A' },
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
  },
};
```

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bg-primary: #F7F6F4;
  --color-bg-secondary: #FFFFFF;
  --color-brand-primary: #2B3A67;
  --color-brand-accent: #4A6CF7;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #5C5C5C;
  
  /* Spacing */
  --space-unit: 8px;
  --space-xs: calc(var(--space-unit) * 0.5);
  --space-sm: var(--space-unit);
  --space-md: calc(var(--space-unit) * 1.5);
  --space-lg: calc(var(--space-unit) * 2);
  --space-xl: calc(var(--space-unit) * 2.5);
  
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}
```

---

## 14. Do's and Don'ts

### ✅ Do

- Use generous whitespace to let content breathe
- Maintain warm, approachable color temperature
- Use category colors consistently for content types
- Keep data visualizations simple and readable
- Respect the established hierarchy of typography weights
- Use subtle shadows sparingly for elevation
- Make interactive elements obviously tappable (44px minimum)

### ❌ Don't

- Use harsh, pure whites (#FFFFFF everywhere)
- Add decorative borders to cards
- Use more than 2-3 colors in a single chart
- Mix icon styles (outlined vs filled) randomly
- Use small, difficult-to-tap buttons
- Add unnecessary animations
- Break the 8px spacing grid without reason
- Use cold, clinical blues for primary backgrounds

---

## 15. Component Reference Sheet

### Quick Measurements

| Element | Value |
|---------|-------|
| Screen horizontal margin | 20px |
| Card padding | 16px-20px |
| Card border radius | 16px |
| Button height (primary) | 52px |
| Button height (secondary) | 36px |
| Button height (icon) | 44px |
| FAB size | 56×56px |
| Nav bar height | 56px |
| Tab bar height | 83px |
| Avatar size (sm) | 32px |
| Avatar size (md/nav) | 44px |
| Avatar size (lg) | 80px |
| Avatar size (xl/profile) | 150px |
| Icon size (standard) | 24px |
| Icon size (small) | 20px |
| Touch target minimum | 44×44px |
| Segmented control padding | 12px 20px |
| Toggle dimensions | 51×31px |
| List item height | 60-72px |
| Chat bubble max width | 85% |
| Chat avatar size | 36px |
| Mini chart height | 40px |
| Bar chart height | 200px |
| Feature card image | 180px |
| Hero card height | 220px |
| Discovery card width | 180px |
| Circular progress (compact) | 80px |
| Circular progress (large) | 90-120px |
| Phone frame (sm) | 280×560px |
| Phone frame (md) | 320×640px |

### Component Categories

| Category | Components |
|----------|------------|
| Navigation | NavHeader, NavigationHeader, ScreenHeader, TabBar, DateNavigator |
| Buttons | Button (primary/secondary/icon/icon-dark), FAB, FilledButton |
| Cards | Card, FeatureCard, HeroCard, MetricCard, StatsCard, PromoCard, ChallengeCard, EmptyStateCard, DiscoveryCard, DeviceCard, SelectionCard, AppointmentCard, CategoryCard, ContentGridCard |
| Lists | ListItem, SettingsItem, SettingsItemEditable, SettingsItemPlain, InfoRow |
| Forms | Toggle, SegmentedControl, DropdownSelect, ChatInput |
| Progress | CircularProgress, ProgressBar |
| Charts | MiniChart, BarChart, TrendChart, AreaChart |
| Badges | Badge, PartnerBadge, WPlusBadge |
| Chat | ChatMessage, ChatDate, ChatInput, ChatDisclaimer |
| Profile | Avatar, ProfileHeader, ProfileInfoButton |
| Modals | Modal, ModalHeader, ChartModalHeader |
| Layout | SectionHeader, PageTitle, SubsectionTitle, DiscoveryCarousel, PhoneFrame |
| Device | DeviceCard, DeviceStatusIndicator, ProductThumbnail |
| Composite | FeatureToggleRow, SettingsSectionCard |

---

*Last updated: January 2026*
*Based on Withings Health Mate app analysis*
