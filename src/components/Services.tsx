"use client";

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

export default function Services() {
  return (
    <section id="services" className="bg-black relative pt-32 pb-20">
      <div className="md:px-10 flex flex-col md:flex-row gap-12 max-w-screen-2xl mx-auto px-6">
        {/* Left Sidebar */}
        <aside className="md:w-1/3">
          <div className="md:sticky md:top-32 space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
                Available for 2026
              </span>
              <h1 className="lg:text-6xl md:text-4xl text-4xl font-semibold text-white tracking-tight">
                DesignServices
              </h1>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Specialized in crafting digital experiences that blend aesthetic precision with functional depth for startups and enterprise.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                View All Services
              </a>
            </div>

            {/* Filter Navigation */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              <h3 className="text-xs font-medium text-white uppercase tracking-wider">Expertise</h3>
              <div className="flex flex-col gap-3 items-start text-sm">
                {filters.map((filter, i) => (
                  <button
                    key={i}
                    className={`flex items-center gap-3 group w-full ${
                      filter.active ? "text-white" : "text-zinc-500 hover:text-white transition-colors"
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
            </div>

            {/* Quick Contact */}
            <div className="pt-8 hidden md:block">
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
          </div>
        </aside>

        {/* Right Content */}
        <div className="md:w-2/3 space-y-24">
          {/* Featured Project */}
          <div className="group cursor-pointer">
            <div className="aspect-video md:aspect-2/1 overflow-hidden bg-zinc-900 w-full border border-white/5 rounded-sm mb-6 relative">
              <img
                src={projects[0].image}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                alt={projects[0].title}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                <h2 className="md:text-5xl lg:text-4xl text-4xl font-medium text-white tracking-tight">
                  {projects[0].title}
                </h2>
                <p className="text-zinc-400 text-sm md:text-base max-w-lg">{projects[0].description}</p>
              </div>
              <div className="absolute top-6 right-6">
                <div className="bg-black/40 backdrop-blur-md text-white border border-white/10 rounded-full h-10 w-10 flex items-center justify-center group-hover:text-black transition-all group-hover:bg-blue-500 group-hover:border-blue-500">
                  {icons.arrowUpRight}
                </div>
              </div>
            </div>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.slice(1).map((project, i) => (
              <div key={i} className="group cursor-pointer flex flex-col gap-4">
                <div className="relative w-full aspect-4/3 overflow-hidden bg-zinc-900 rounded-sm border border-white/5">
                  <img
                    src={project.image}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      project.tag ? "opacity-80 group-hover:opacity-100" : "opacity-70 group-hover:opacity-100"
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
                    <h3 className="text-xl font-semibold text-white tracking-tight mb-1">{project.title}</h3>
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
              <h2 className="text-4xl font-semibold text-white tracking-tight mb-1">Design Process</h2>
              <button className="text-sm text-zinc-500 hover:text-white transition flex items-center gap-1 group">
                View Detailed Guide
                <span className="group-hover:translate-x-1 transition-transform">{icons.arrowRight}</span>
              </button>
            </div>

            <div className="flex flex-col text-sm">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                <div className="col-span-5 md:col-span-4">Phase</div>
                <div className="col-span-4 md:col-span-5">Deliverables</div>
                <div className="col-span-3 md:col-span-3 text-right">Est. Time</div>
              </div>

              {/* Process Rows */}
              {process.map((row, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer"
                >
                  <div className="col-span-5 md:col-span-4 transition-colors flex items-center gap-2">
                    <span className="text-xs text-zinc-600 font-mono">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white font-medium group-hover:text-blue-500 transition-colors">{row.phase}</span>
                  </div>
                  <div className="col-span-4 md:col-span-5 text-zinc-400">{row.deliverables}</div>
                  <div className="col-span-3 md:col-span-3 text-right text-zinc-600 font-mono">{row.time}</div>
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
        </div>
      </div>
    </section>
  );
}
