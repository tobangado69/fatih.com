"use client";

import { useState, useEffect, type FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Contact form is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("access_key", accessKey);
    formData.set("subject", `Contact from ${formData.get("first_name")} ${formData.get("last_name")}`);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const msg = result.message ?? "Something went wrong. Please try again.";
        setError(response.status === 429 ? "Too many requests. Please try later." : msg);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-zinc-50" />
      </div>

      <div className="max-w-[1400px] mx-auto min-h-screen border-x border-zinc-200 relative z-10">
        <Header />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section
            className={`px-6 md:px-10 pt-16 pb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-blue-600">
                  Let&apos;s Work Together
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
                Ready to build something great?
              </h1>
              <p className="text-zinc-600 text-base md:text-lg max-w-xl leading-relaxed">
                Whether you need a complete product redesign, a new mobile app, or
                design system consulting, I&apos;m here to help bring your vision to life.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Content */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="space-y-6 mb-8">
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
                      <div className="h-12 w-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-blue-600 font-bold text-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.label}
                        </div>
                        <div className="text-sm text-zinc-600">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
                  {[
                    { value: "24h", label: "Response time" },
                    { value: "Remote", label: "Preferred" },
                    { value: "Figma", label: "Expertise" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl font-semibold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-8 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-zinc-600">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            required
                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-gray-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition focus:bg-white"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            required
                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-gray-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition focus:bg-white"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-gray-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition focus:bg-white"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Project Type
                        </label>
                        <select
                          name="project_type"
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition focus:bg-white"
                        >
                          <option value="">Select project type</option>
                          <option value="webapp">Web Application</option>
                          <option value="mobile">Mobile App</option>
                          <option value="system">Design System</option>
                          <option value="marketing">Marketing Website</option>
                          <option value="preset">Photo Presets</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-gray-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none focus:bg-white"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-600">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
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
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
