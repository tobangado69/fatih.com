"use client";

const galleryItems = [
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e18797-a6da-4246-9868-7ae06d1d06a1_1600w.png",
    title: "Enterprise Core",
    subtitle: "Complex data orchestration dashboard",
    tag: "UI/UX",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b30ed36c-fa0a-48df-8d21-175beda06c03_1600w.png",
    title: "Nexus Wallet",
    subtitle: "Biometric-first mobile banking",
    tag: "Presets",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7448262-5258-4cf4-9b57-d8980c7ab406_800w.webp",
    title: "MetricFlow",
    subtitle: "Advanced visualization & tracking",
    tag: "Photography",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fafcbc-4d96-425a-a1fd-cb169399875b_1600w.webp",
    title: "System 01",
    subtitle: "Component-driven architectural tool",
    tag: "Branding",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1089fd3-4ee0-45a5-a682-917472e74824_1600w.png",
    title: "Global Connect",
    subtitle: "Collaborative workspace integration",
    tag: "UI/UX",
  },
];

const gridItems = [
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/286dcc4a-3b11-43d3-af80-a7b1c3aaaad1_1600w.webp",
    title: "Cinematic Warm",
    subtitle: "Lightroom & Capture One preset pack",
    tag: "Presets",
    badge: "Popular",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2785f53a-a46a-4482-9c3e-d09a2ddf4494_1600w.png",
    title: "Moody Tones",
    subtitle: "Dark & dramatic color grading",
    tag: "Presets",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb1b1152-57d5-4b49-b944-3a944ae87f0b_1600w.webp",
    title: "Urban Grain",
    subtitle: "Street photography film emulation",
    tag: "Photography",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7ffe8db-0c0b-4425-9c8a-a797d97e266e_1600w.webp",
    title: "Pastel Dreams",
    subtitle: "Soft, airy tones for lifestyle shoots",
    tag: "Photography",
  },
];

export default function Gallery() {
  const allItems = [...galleryItems, ...gridItems];

  return (
    <section id="gallery" className="bg-black relative">
      {/* Section Header */}
      <div className="px-6 md:px-10 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end text-center md:text-left gap-6 items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Gallery &amp; Presets
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
              A curated collection of photography, visual presets, and design
              work. Each piece represents a distinct approach to color, light,
              and composition.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="/gallery"
              className="px-4 py-2 rounded-full text-xs font-medium transition-all bg-white text-black hover:bg-zinc-200"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      {/* Expandable Card Row */}
      {allItems.length > 0 && (
        <div className="px-6 md:px-10 pb-8">
          <div className="flex overflow-hidden w-full h-[500px] md:h-[700px] rounded-2xl gap-1 items-stretch">
            {allItems.map((item, i) => (
              <div
                key={i}
                className="gallery-card overflow-hidden cursor-pointer flex relative group bg-zinc-900 rounded-sm items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm">{item.subtitle}</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
