# Services Section - Split Layout Design

> **For Claude:** REQUIRED SUB-SKILL: Use writing-plans to implement this design.

**Goal:** Replace existing Services component with split-layout design (left sticky sidebar + right scrollable content) matching index2.html.

**Architecture:** Single React component using split-layout with responsive breakpoints. Left sidebar sticky at md:top-32, right content scrollable with project cards.

**Tech Stack:** Next.js, React, Tailwind CSS, Iconify

---

## Layout Structure

### Split Layout Container
```tsx
<div className="md:px-10 flex flex-col md:flex-row gap-12 lg:gap-24 max-w-screen-2xl mx-auto px-6">
  {/* Left Sidebar - 25% width */}
  <aside className="md:w-1/3 lg:w-1/4">
    <div className="md:sticky md:top-32 space-y-12">
      {/* Header, Filter, CTA */}
    </div>
  </aside>

  {/* Right Content - 75% width */}
  <div className="md:w-2/3 lg:w-3/4 space-y-24">
    {/* Featured, Grid, Process */}
  </div>
</div>
```

### Responsive Breakpoints
- **Mobile**: Single column, stacked layout
- **md (768px)**: Split layout, sidebar 33%, content 66%
- **lg (1024px)**: Split layout, sidebar 25%, content 75%

---

## Components

### Left Sidebar

1. **Header Block**
   - Badge: "Available for 2024" - `text-xs font-semibold tracking-[0.2em] uppercase text-blue-500`
   - Title: "DesignServices" - `lg:text-6xl md:text-4xl text-4xl font-semibold text-white tracking-tight`
   - Description: `text-zinc-500 text-sm leading-relaxed max-w-xs`

2. **Filter Navigation**
   - Section title: "Expertise" - `text-xs font-medium text-white uppercase tracking-wider`
   - Buttons with indicator dots (blue for active, border for inactive)
   - Categories: All Services, Product Design, Design Systems, Web Development

3. **CTA Button**
   - "Book a Discovery Call" with calendar icon
   - Hover: border-blue-500/50

### Right Content

1. **Featured Project (Full Width)**
   - Aspect ratio: 16/9 or 2/1
   - Image with gradient overlay
   - Title "Product Design" + description
   - Arrow button (hover: blue bg)

2. **Project Grid (2 columns)**
   - Marketing Websites, Design Systems, Mobile Apps, Brand Strategy
   - Each: image, tag (Popular), title, description, icon

3. **Design Process Table**
   - 4 phases with deliverables and time estimates
   - Hover: bg-white/5

4. **Download CTA**
   - "Download Rate Card" button

---

## Color Palette

| Element | Color |
|---------|-------|
| Background | `bg-black` |
| Primary Accent | `text-blue-500`, `bg-blue-500` |
| Headings | `text-white` |
| Muted Text | `text-zinc-500` |
| Borders | `border-white/10`, `border-white/5` |
| Hover States | `hover:text-white`, `hover:border-blue-500/50` |

---

## Implementation Notes

- Use existing gallery images from Supabase
- Keep filter buttons as visual only (no functionality)
- Match exact Tailwind classes from index2.html
- Use iconify-react for icons
