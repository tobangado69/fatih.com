"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* Ticker */}
      <div className="ticker-wrap border-b border-white/5 py-2 bg-black/40 relative z-20">
        <div className="ticker-content text-xs font-medium text-gray-500 tracking-wide uppercase">
          <span className="mx-6">Available for 2026 projects</span> &bull;
          <span className="mx-6">UX/UI Design &amp; Creative Direction</span> &bull;
          <span className="mx-6">Photography &amp; Visual Presets</span> &bull;
          <span className="mx-6">Brand Identity &amp; Systems</span> &bull;
          <span className="mx-6">Available for 2026 projects</span> &bull;
          <span className="mx-6">UX/UI Design &amp; Creative Direction</span> &bull;
          <span className="mx-6">Photography &amp; Visual Presets</span> &bull;
          <span className="mx-6">Brand Identity &amp; Systems</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Left: Typography */}
        <div className="p-8 lg:p-16 flex flex-col justify-center border-r border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] bg-[#0a0a0a] w-fit mb-8 animate-flicker">
            <div className="w-2 h-2 rounded-full bg-green-500 status-dot" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Open to Work
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-[-0.04em] leading-[0.9] mb-8 text-white">
            <span className="block">Create.</span>
            <span className="block text-gray-600">Design.</span>
            <span className="block">Inspire.</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-md leading-relaxed mb-10 font-light">
            Crafting digital experiences &amp; user interfaces. Specializing in
            complex web applications, design systems, and visual presets for
            modern brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <a
              href="#work"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              View Case Studies
            </a>
            <a
              href="#contact"
              className="border border-white/20 bg-white/5 px-8 py-4 rounded-xl text-sm text-white/90 backdrop-blur hover:bg-white/10 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Consultation
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="p-8 lg:p-12 bg-[#080808] flex items-center justify-center overflow-hidden relative group">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-125 animate-pulse"
            style={{
              backgroundImage:
                "url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a37bed4a-3482-4d77-8630-f16831c0d7a9_1600w.webp)",
              animationDuration: "4s",
            }}
          />

          <div className="relative w-full max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border border-[#222] cursor-pointer ring-1 ring-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16391788-f7da-4cd2-88de-e0421c307b8f_800w.webp"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Creator showcase"
            />

            {/* Overlay UI */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div className="glass-panel px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  LIVE
                </div>
                <div className="glass-panel w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </div>
              </div>

              {/* Face tracking box */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-40 h-40 border border-white/40 rounded-2xl flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5" />
                <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-mono uppercase tracking-widest">
                  Tracking
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-xl font-display font-bold text-yellow-400 text-center leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    &ldquo;Design is not just how it looks...&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating element */}
          <div className="absolute bottom-10 right-10 glass-panel p-4 rounded-2xl flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 z-20 animate-bounce" style={{ animationDuration: "3s" }}>
            <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400 animate-flicker">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Creativity Score</div>
              <div className="text-lg font-bold text-white tracking-tight">
                9.8<span className="text-gray-600 text-sm">/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
