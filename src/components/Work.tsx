export default function Work() {
  return (
    <section id="work" className="bg-zinc-50 border-gray-200 border-t relative">
      <div className="md:px-10 lg:py-28 max-w-7xl mx-auto pt-20 px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured case studies demonstrating problem-solving across fintech,
            healthcare, and e-commerce sectors.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {/* Featured Campaign */}
          <div className="overflow-hidden relative bg-white rounded-2xl shadow-lg">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="lg:h-[500px] h-96 overflow-hidden relative bg-gray-100 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1042d62-4402-4150-a295-c82f622f7b03_1600w.webp"
                  alt="Fintech dashboard UI"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    Featured Case Study
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4 text-gray-900">
                  Nova Fintech Dashboard
                </h3>
                <p className="text-gray-700 mb-6">
                  Complete redesign of an institutional trading platform. Focused
                  on data visualization clarity, reducing cognitive load for
                  traders, and implementing a scalable design system.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["UX Research", "UI Design", "Design System"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition"
                >
                  View details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Recent Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9b217e-05c2-4e6e-8f35-3fcb7f5b5e0c_800w.webp",
                label: "Mobile Health",
                title: "HealthTrack App",
                desc: "Patient monitoring iOS & Android",
              },
              {
                src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9497e84f-cd43-4bed-8735-bbc8bfb0606f_800w.webp",
                label: "SaaS Platform",
                title: "MetricFlow Analytics",
                desc: "Data visualization dashboard",
              },
              {
                src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_800w.webp",
                label: "Web Design",
                title: "Architectural Digest",
                desc: "Interactive portfolio website",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group overflow-hidden bg-white rounded-xl relative shadow-lg"
              >
                <div className="overflow-hidden h-64 relative bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="bg-gradient-to-t from-white/90 via-transparent to-transparent absolute inset-0" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-1 rounded-full bg-blue-600" />
                    <span className="text-xs font-medium text-blue-600">
                      {project.label}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-700">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "80+", label: "Projects Shipped" },
              { value: "6+", label: "Years Experience" },
              { value: "12", label: "Design Systems" },
              { value: "4", label: "Design Awards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
