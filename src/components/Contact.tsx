"use client";

const testimonials = [
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
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-zinc-100 border-gray-200 border-t"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-600">
                Let&apos;s Work Together
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-gray-900">
              Ready to build something great?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Whether you need a complete product redesign, a new mobile app, or
              design system consulting, I&apos;m here to help bring your vision
              to life.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "M", label: "Email", value: "Fatih@designstudio.com" },
                { icon: "C", label: "Availability", value: "Open for Q3 2026" },
                {
                  icon: "L",
                  label: "Based in",
                  value: "San Francisco, CA (Remote)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-blue-600 font-bold text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-600">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-500 transition-colors"
            >
              Get in Touch
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Right Content - Testimonials */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              What Clients Say
            </h3>
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <svg
                  className="w-8 h-8 text-blue-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
