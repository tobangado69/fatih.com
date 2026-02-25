export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Incredibly professional and detailed. The mobile app redesign completely revitalized our user engagement metrics.",
      name: "Sarah Laurent",
      role: "Founder, HealthStart",
      initials: "SL",
    },
    {
      quote:
        "Alex's ability to bridge the gap between design and engineering is rare. A true partner in product building.",
      name: "James Chen",
      role: "CTO, FinFlow",
      initials: "JC",
    },
    {
      quote:
        "Exceptional quality of work. The prototyping phase helped us validate our ideas before writing a single line of code.",
      name: "Amelia Noir",
      role: "Creative Director",
      initials: "AN",
    },
  ];

  const StarRow = () => (
    <div className="flex items-center gap-1 mb-4 text-blue-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      ))}
    </div>
  );

  return (
    <section className="bg-zinc-950 border-white/5 border-t relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-white">
            Client Feedback
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Trusted by startups, agencies, and enterprise product teams
            worldwide.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="overflow-hidden bg-zinc-900/50 ring-1 ring-slate-50/10 rounded-2xl mb-12 backdrop-blur">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="lg:p-12 order-2 lg:order-1 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-blue-400">
                  Head of Product
                </span>
              </div>
              <blockquote className="text-xl lg:text-2xl leading-relaxed font-medium text-white/90 mb-6">
                &ldquo;Alex transformed our complex data requirements into an
                intuitive dashboard. The design system delivered scaled our
                development speed by 2x.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">MR</span>
                </div>
                <div>
                  <div className="font-medium text-white">Marco Rodriguez</div>
                  <div className="text-sm text-white/60">
                    Product Director, TechCorp
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 overflow-hidden order-1 lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7c6e255-e784-4bd2-9b3e-d2b7246949e7_1600w.webp"
                alt="Team meeting"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-900/80 lg:to-zinc-900/50" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="overflow-hidden bg-zinc-900/50 ring-1 ring-slate-50/10 rounded-xl p-6 backdrop-blur"
            >
              <div className="mb-6">
                <StarRow />
                <blockquote className="text-white/90 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <span className="text-xs font-medium text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white/90 tracking-tight mb-10">
            Featured In
          </h3>
          <div className="flex flex-wrap gap-10 lg:gap-24 opacity-50 items-center justify-center text-white">
            {["NASA", "SpaceX", "Uber", "Visa", "Grab"].map((name) => (
              <span
                key={name}
                className="text-2xl font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
