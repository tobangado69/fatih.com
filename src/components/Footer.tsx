export default function Footer() {
  return (
    <footer className="bg-black/95 border-white/10 border-t relative backdrop-blur">
      <div className="md:px-10 lg:py-20 max-w-7xl mx-auto pt-16 px-6 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span className="text-lg font-semibold tracking-tight text-white">
                  ALEX
                </span>
              </div>
              <p className="text-white/60 max-w-md">
                Senior Product Designer crafting clean, functional, and scalable
                digital experiences for the modern web.
              </p>
            </div>

            <div className="flex items-center gap-4 text-white/60">
              <a href="#" className="hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6.5 11.65 7.5 21"/></svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM18.91 18.74h-3v-4.26c0-1.08-.43-1.58-1.28-1.58-.93 0-1.44.62-1.44 1.58v4.26h-3v-9h3v1.3a3.15 3.15 0 0 1 2.71-1.49c1.69 0 3.01 1.03 3.01 3.16Z"/></svg>
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-white/90">
                Start a project?
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500 transition"
                >
                  Get in touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-sm font-medium text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {[
                  "Product Design",
                  "Design Systems",
                  "Mobile Apps",
                  "Web Development",
                  "Photo Presets",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-4">Sitemap</h3>
              <ul className="space-y-3">
                {[
                  { label: "Work", href: "#work" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Services", href: "#services" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            &copy; 2025 ALEX Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">
              Case Studies
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
