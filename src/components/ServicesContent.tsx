"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageLoadAnimation } from "@/hooks/usePageLoadAnimation";
import PageLoadSection from "@/components/ui/PageLoadSection";

const filters = [
  { name: "All Services", count: "04", active: true },
  { name: "Product Design", count: "UX/UI", active: false },
  { name: "Design Systems", count: "Ops", active: false },
  { name: "Web Development", count: "Code", active: false },
];

const projects = [
  {
    featured: true,
    title: "Product Design",
    description: "From complex SaaS dashboards to consumer mobile apps. I focus on retention, clarity, and delight.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b60e0d50-e5e1-4516-8629-6565f3bc1919_1600w.png",
  },
  {
    featured: false,
    title: "Marketing Websites",
    description: "High-conversion landing pages with Framer/Webflow.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/286dcc4a-3b11-43d3-af80-a7b1c3aaaad1_1600w.webp",
    tag: "Popular",
  },
  {
    featured: false,
    title: "Design Systems",
    description: "Scalable Figma component libraries & documentation.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2785f53a-a46a-4482-9c3e-d09a2ddf4494_1600w.png",
  },
  {
    featured: false,
    title: "Mobile Apps",
    description: "Native iOS & Android interface design.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb1b1152-57d5-4b49-b944-3a944ae87f0b_1600w.webp",
  },
  {
    featured: false,
    title: "Brand Strategy",
    description: "Visual identity, logos, and art direction.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7ffe8db-0c0b-4425-9c8a-a797d97e266e_1600w.webp",
  },
];

const process = [
  { phase: "Discovery & Strategy", deliverables: "User Research, Audit, Roadmap", time: "1 Week" },
  { phase: "UX & Wireframing", deliverables: "User Flows, Low-fi Prototypes", time: "2 Weeks" },
  { phase: "Visual Design", deliverables: "High-fidelity UI, Interactions", time: "2 Weeks" },
  { phase: "Handoff & Support", deliverables: "Figma Assets, QA, Dev Sync", time: "1 Week" },
];

const allTestimonials = [
  {
    quote: "Working with Fatih transformed our product. The attention to detail and user-centric approach resulted in a 40% increase in user engagement.",
    author: "Sarah Chen",
    role: "CEO, TechStart",
    avatar: "SC",
  },
  {
    quote: "The best designer I've ever worked with. Delivered beyond expectations and always maintaining clear communication throughout.",
    author: "Michael Ross",
    role: "Product Manager, FinFlow",
    avatar: "MR",
  },
  {
    quote: "Our design system is now scalable and consistent. Fatih's work has significantly improved our development workflow.",
    author: "Emily Watson",
    role: "CTO, DataSync",
    avatar: "EW",
  },
  {
    quote: "The redesign increased our conversion rate by 60%. Incredible results with minimal revisions needed.",
    author: "James Liu",
    role: "Founder, ShopFlow",
    avatar: "JL",
  },
  {
    quote: "Professional, creative, and deadline-driven. Our mobile app launch was a huge success thanks to the thoughtful UI design.",
    author: "Amanda Foster",
    role: "VP Product, HealthTrack",
    avatar: "AF",
  },
];

const icons = {
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 14v4"/><path d="m10 16 2 2 2-2"/>
    </svg>
  ),
  arrowUpRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
    </svg>
  ),
  laptop: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  layers: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  smartphone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  flag: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  ),
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
};

export default function ServicesContent() {
  const isVisible = usePageLoadAnimation();

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-zinc-900/10" />
      </div>

      <div className="max-w-[1400px] mx-auto min-h-screen border-x border-white/5 relative z-10">
        <Header />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <PageLoadSection className="px-6 md:px-10 pt-16 pb-12" delay={0} isVisible={isVisible}>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
                Available for 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mt-4 mb-4">
                Design Services
              </h1>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
                Specialized in crafting digital experiences that blend aesthetic precision
                with functional depth for startups and enterprise.
              </p>
            </div>
          </PageLoadSection>

          {/* Filter Bar */}
          <PageLoadSection className="px-6 md:px-10 pb-12" delay={100} isVisible={isVisible}>
            <div className="flex items-center gap-3 flex-wrap">
              {filters.map((filter, i) => (
                <button
                  key={i}
                  className={`flex items-center gap-3 group px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter.active
                      ? "bg-white text-black"
                      : "border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      filter.active
                        ? "shadow-[0_0_8px_rgba(59,130,246,0.8)] bg-blue-500"
                        : "bg-transparent border border-zinc-700 group-hover:border-zinc-500 transition-colors"
                    }`}
                  />
                  <span>{filter.name}</span>
                  <span className="ml-auto text-zinc-600 text-xs">{filter.count}</span>
                </button>
              ))}
            </div>
          </PageLoadSection>

          {/* Services Content */}
          <PageLoadSection className="px-6 md:px-10" delay={200} isVisible={isVisible}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Left Sidebar */}
              <aside className="lg:w-1/3">
                <div className="lg:sticky lg:top-32 space-y-8">
                  {/* Quick Contact */}
                  <div className="pt-8 lg:pt-0">
                    <a
                      href="mailto:hello@alex.design"
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm group hover:border-blue-500/50"
                    >
                      <span className="transition-colors text-blue-500 group-hover:text-blue-400">
                        {icons.calendar}
                      </span>
                      Book a Discovery Call
                    </a>
                  </div>

                  {/* How We Help You Grow - Enhanced sidebar */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-white mb-6">
                      How We Help You Grow
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Increase Conversions",
                          metric: "+40%",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                          ),
                          color: "from-green-500/20 to-green-600/10",
                          border: "border-green-500/20",
                        },
                        {
                          title: "Better Retention",
                          metric: "+60%",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                            </svg>
                          ),
                          color: "from-pink-500/20 to-pink-600/10",
                          border: "border-pink-500/20",
                        },
                        {
                          title: "Faster Delivery",
                          metric: "2x",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                          ),
                          color: "from-blue-500/20 to-blue-600/10",
                          border: "border-blue-500/20",
                        },
                        {
                          title: "Reduced Costs",
                          metric: "-50%",
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>
                            </svg>
                          ),
                          color: "from-purple-500/20 to-purple-600/10",
                          border: "border-purple-500/20",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-4`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-zinc-300 flex items-center gap-2">
                              <span className="text-zinc-500">{item.icon}</span>
                              {item.title}
                            </span>
                            <span className="text-lg font-bold text-white">{item.metric}</span>
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white/40 rounded-full" style={{ width: `${parseInt(item.metric) || 50}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-medium text-zinc-400 mb-4">Trusted by</h4>
                    <div className="flex items-center gap-3">
                      {["TechStart", "FinFlow", "DataSync", "ShopFlow"].map((brand, i) => (
                        <div key={i} className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                          <span className="text-xs text-zinc-500">{brand}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right Content */}
              <div className="lg:w-2/3 space-y-24">
                {/* Featured Project */}
                <div className="group cursor-pointer">
                  <div className="aspect-video lg:aspect-[2/1] overflow-hidden bg-zinc-900 w-full border border-white/5 rounded-sm mb-6 relative">
                    <img
                      src={projects[0].image}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                      alt={projects[0].title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
                      <h2 className="lg:text-5xl text-4xl font-medium text-white tracking-tight">
                        {projects[0].title}
                      </h2>
                      <p className="text-zinc-400 text-sm lg:text-base max-w-lg">
                        {projects[0].description}
                      </p>
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="bg-black/40 backdrop-blur-md text-white border border-white/10 rounded-full h-10 w-10 flex items-center justify-center group-hover:text-black transition-all group-hover:bg-blue-500 group-hover:border-blue-500">
                        {icons.arrowUpRight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
                  {projects.slice(1).map((project, i) => (
                    <div
                      key={i}
                      className="group cursor-pointer flex flex-col gap-4"
                    >
                      <div className="relative w-full aspect-4/3 overflow-hidden bg-zinc-900 rounded-sm border border-white/5">
                        <img
                          src={project.image}
                          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                            project.tag
                              ? "opacity-80 group-hover:opacity-100"
                              : "opacity-70 group-hover:opacity-100"
                          }`}
                          alt={project.title}
                        />
                        {project.tag && (
                          <div className="absolute top-4 left-4 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider bg-blue-500">
                            {project.tag}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-1 border-t border-white/10 pt-4 transition-colors group-hover:border-blue-500/50">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                            {project.title}
                          </h3>
                          <span className="text-zinc-500 group-hover:text-white transition-colors">
                            {project.title === "Marketing Websites"
                              ? icons.laptop
                              : project.title === "Design Systems"
                              ? icons.layers
                              : project.title === "Mobile Apps"
                              ? icons.smartphone
                              : icons.flag}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Design Process */}
                <div className="pt-12 border-t border-white/10">
                  <div className="flex justify-between items-end mb-8">
                    <h2 className="text-4xl font-semibold text-white tracking-tight mb-1">
                      Design Process
                    </h2>
                    <button className="text-sm text-zinc-500 hover:text-white transition flex items-center gap-1 group">
                      View Detailed Guide
                      <span className="group-hover:translate-x-1 transition-transform">
                        {icons.arrowRight}
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col text-sm">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                      <div className="col-span-5 lg:col-span-4">Phase</div>
                      <div className="col-span-4 lg:col-span-5">Deliverables</div>
                      <div className="col-span-3 lg:col-span-3 text-right">Est. Time</div>
                    </div>

                    {/* Process Rows */}
                    {process.map((row, i) => (
                      <div
                        key={i}
                        className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer"
                      >
                        <div className="col-span-5 lg:col-span-4 transition-colors flex items-center gap-2">
                          <span className="text-xs text-zinc-600 font-mono">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-white font-medium group-hover:text-blue-500 transition-colors">
                            {row.phase}
                          </span>
                        </div>
                        <div className="col-span-4 lg:col-span-5 text-zinc-400">
                          {row.deliverables}
                        </div>
                        <div className="col-span-3 lg:col-span-3 text-right text-zinc-600 font-mono">
                          {row.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download CTA */}
                <div className="flex justify-center pt-8">
                  <button className="text-zinc-500 hover:text-white transition-colors text-sm flex flex-col items-center gap-2">
                    {icons.download}
                    <span>Download Rate Card</span>
                  </button>
                </div>

                {/* Kind Words from Clients - Testimonial Carousel */}
                <div className="pt-20 border-t border-white/10">
                  <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
                    Kind Words from Clients
                  </h2>
                  <p className="text-zinc-400 mb-12 max-w-2xl">
                    Don't just take my word for it. Here's what clients have to say about working together.
                  </p>
                  <TestimonialCarousel />
                </div>
              </div>
            </div>
          </PageLoadSection>
        </main>

        <Footer />
      </div>
    </>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % allTestimonials.length);
    setTimeout(() => setIsAnimating(false), 700);
  };
  const prev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {allTestimonials.map((testimonial, i) => (
            <div key={i} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <svg
                  className="w-10 h-10 text-blue-500/30 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 flex items-center justify-center text-blue-400 font-semibold border border-blue-500/20">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {allTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => !isAnimating && setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-blue-500 w-8" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
