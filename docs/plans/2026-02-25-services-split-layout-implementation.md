# Services Split Layout - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace existing Services component with split-layout design (left sticky sidebar + right scrollable content).

**Architecture:** Single React component with responsive split layout. Left sidebar sticky on desktop, content scrolls independently. Uses Tailwind CSS for all styling.

**Tech Stack:** Next.js, React, Tailwind CSS, Iconify

---

## Tasks

### Task 1: Create Split Layout Structure

**Files:**
- Modify: `src/components/Services.tsx:1-10`

**Step 1: Read current Services.tsx**

Run: Read `src/components/Services.tsx`

**Step 2: Replace component with split layout structure**

```tsx
export default function Services() {
  return (
    <section id="services" className="bg-black relative pt-32 pb-20">
      <div className="md:px-10 flex flex-col md:flex-row gap-12 lg:gap-24 max-w-screen-2xl mx-auto px-6">
        {/* Left Sidebar */}
        <aside className="md:w-1/3 lg:w-1/4">
          <div className="md:sticky md:top-32 space-y-12">
            {/* Header, Filter, CTA */}
          </div>
        </aside>

        {/* Right Content */}
        <div className="md:w-2/3 lg:w-3/4 space-y-24">
          {/* Featured, Grid, Process */}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Verify component renders**

Run: `npm run dev` and check localhost:3000

---

### Task 2: Build Left Sidebar

**Files:**
- Modify: `src/components/Services.tsx:40-60`

**Step 1: Add header block**

```tsx
<div className="space-y-4">
  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
    Available for 2026
  </span>
  <h1 className="lg:text-6xl md:text-4xl text-4xl font-semibold text-white tracking-tight">
    DesignServices
  </h1>
  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
    Specialized in crafting digital experiences that blend aesthetic
    precision with functional depth for startups and enterprise.
  </p>
</div>
```

**Step 2: Add filter navigation**

```tsx
<div className="space-y-6 pt-4 border-t border-white/10">
  <h3 className="text-xs font-medium text-white uppercase tracking-wider">Expertise</h3>
  <div className="flex flex-col gap-3 items-start text-sm">
    <button className="text-white flex items-center gap-3 group w-full">
      <span className="h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] bg-blue-500"></span>
      <span>All Services</span>
      <span className="ml-auto text-zinc-600 text-xs">04</span>
    </button>
    {/* More filter buttons */}
  </div>
</div>
```

**Step 3: Add CTA button**

```tsx
<div className="pt-8 hidden md:block">
  <a href="mailto:hello@alex.design" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm group hover:border-blue-500/50">
    <iconify-icon icon="solar:calendar-add-linear" className="text-blue-500 group-hover:text-blue-400"></iconify-icon>
    Book a Discovery Call
  </a>
</div>
```

**Step 4: Verify sidebar renders**

Run: Check localhost:3000 for sidebar

---

### Task 3: Build Right Content - Featured Project

**Files:**
- Modify: `src/components/Services.tsx:90-120`

**Step 1: Add featured project card**

```tsx
<div className="group cursor-pointer">
  <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-zinc-900 w-full border-white/5 border rounded-sm mb-6 relative">
    <img src="..." className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80" alt="Product Design">
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
      <h2 className="md:text-5xl lg:text-4xl text-4xl font-medium text-white tracking-tight">Product Design</h2>
      <p className="text-zinc-400 text-sm md:text-base max-w-lg">From complex SaaS dashboards to consumer mobile apps.</p>
    </div>
    <div className="absolute top-6 right-6">
      <div className="bg-black/40 backdrop-blur-md text-white border border-white/10 rounded-full h-10 w-10 flex items-center justify-center group-hover:text-black transition-all group-hover:bg-blue-500 group-hover:border-blue-500">
        <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
      </div>
    </div>
  </div>
</div>
```

**Step 4: Verify featured project renders**

Run: Check localhost:3000

---

### Task 4: Build Project Grid

**Files:**
- Modify: `src/components/Services.tsx:130-180`

**Step 1: Add grid container**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
  {/* Project cards */}
</div>
```

**Step 2: Add project cards (4 items)**

Each card: image, title, description, icon, hover effects

**Step 3: Verify grid renders**

Run: Check localhost:3000

---

### Task 5: Build Design Process Table

**Files:**
- Modify: `src/components/Services.tsx:190-230`

**Step 1: Add process section header**

```tsx
<div className="pt-12 border-t border-white/10">
  <div className="flex justify-between items-end mb-8">
    <h2 className="text-4xl font-semibold text-white tracking-tight mb-1">Design Process</h2>
  </div>
  {/* Table rows */}
</div>
```

**Step 2: Add process rows (4 phases)**

- Discovery & Strategy - 1 Week
- UX & Wireframing - 2 Weeks
- Visual Design - 2 Weeks
- Handoff & Support - 1 Week

**Step 3: Verify process table renders**

Run: Check localhost:3000

---

### Task 6: Add Download CTA

**Files:**
- Modify: `src/components/Services.tsx:240-250`

**Step 1: Add download button**

```tsx
<div className="flex justify-center pt-8">
  <button className="text-zinc-500 hover:text-white transition-colors text-sm flex flex-col items-center gap-2">
    <iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
    <span>Download Rate Card</span>
  </button>
</div>
```

**Step 2: Verify final render**

Run: Check localhost:3000

---

### Task 7: Verify and Commit

**Step 1: Check for lint errors**

Run: `npm run lint`

**Step 2: Commit changes**

Run:
```bash
git add src/components/Services.tsx
git commit -m "feat: replace Services with split-layout design"
```

---

## Verification

- [ ] Left sidebar sticky on desktop
- [ ] Filter navigation visible
- [ ] Featured project with image and hover effects
- [ ] 2-column project grid
- [ ] Design process table with 4 phases
- [ ] Responsive layout works on mobile
- [ ] All hover effects working
- [ ] No console errors
