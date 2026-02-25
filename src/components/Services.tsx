export default function Services() {
  const services = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      ),
      title: "Product Design",
      description: "From complex SaaS dashboards to consumer mobile apps. I focus on retention, clarity, and delight.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      ),
      title: "Marketing Websites",
      description: "High-conversion landing pages with Framer/Webflow. Beautiful, fast, and optimized for results.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      ),
      title: "Design Systems",
      description: "Scalable Figma component libraries & documentation that accelerate development speed by 2x.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      ),
      title: "Mobile Apps",
      description: "Native iOS & Android interface design with fluid, gesture-driven experiences.",
    },
  ];

  const process = [
    { phase: "Discovery & Strategy", deliverables: "User Research, Audit, Roadmap", time: "1 Week" },
    { phase: "UX & Wireframing", deliverables: "User Flows, Low-fi Prototypes", time: "2 Weeks" },
    { phase: "Visual Design", deliverables: "High-fidelity UI, Interactions", time: "2 Weeks" },
    { phase: "Handoff & Support", deliverables: "Figma Assets, QA, Dev Sync", time: "1 Week" },
  ];

  return (
    <section id="services" className="bg-black relative pt-20 pb-20">
      <div className="md:px-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
            Available for 2025
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mt-4">
            Design Services
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-lg mt-4">
            Specialized in crafting digital experiences that blend aesthetic
            precision with functional depth for startups and enterprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group cursor-pointer flex flex-col gap-4 p-8 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-zinc-400 group-hover:text-blue-400 transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                {svc.title}
              </h3>
              <p className="text-sm text-zinc-500">{svc.description}</p>
            </div>
          ))}
        </div>

        {/* Design Process */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Design Process
            </h2>
          </div>

          <div className="flex flex-col text-sm">
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
              <div className="col-span-5 md:col-span-4">Phase</div>
              <div className="col-span-4 md:col-span-5">Deliverables</div>
              <div className="col-span-3 md:col-span-3 text-right">
                Est. Time
              </div>
            </div>

            {process.map((row, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors -mx-2 px-2 rounded cursor-pointer"
              >
                <div className="col-span-5 md:col-span-4 text-white font-medium transition-colors flex items-center gap-2 group-hover:text-blue-500">
                  <span className="text-xs text-zinc-600 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {row.phase}
                </div>
                <div className="col-span-4 md:col-span-5 text-zinc-400">
                  {row.deliverables}
                </div>
                <div className="col-span-3 md:col-span-3 text-right text-zinc-600 font-mono">
                  {row.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
