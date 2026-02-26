"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageLoadAnimation } from "@/hooks/usePageLoadAnimation";
import PageLoadSection from "@/components/ui/PageLoadSection";

const projects = [
  {
    id: 1,
    featured: true,
    category: "Fintech",
    title: "Nova Fintech Dashboard",
    description:
      "Complete redesign of an institutional trading platform. Focused on data visualization clarity, reducing cognitive load for traders, and implementing a scalable design system.",
    tags: ["UX Research", "UI Design", "Design System"],
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1042d62-4402-4150-a295-c82f622f7b03_1600w.webp",
  },
  {
    id: 2,
    category: "Healthcare",
    title: "HealthTrack App",
    description: "Patient monitoring iOS & Android application with real-time health metrics.",
    tags: ["Mobile Design", "iOS", "Android"],
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9b217e-05c2-4e6e-8f35-3fcb7f5b5e0c_800w.webp",
  },
  {
    id: 3,
    category: "SaaS",
    title: "MetricFlow Analytics",
    description: "Data visualization dashboard for enterprise analytics.",
    tags: ["Dashboard", "Data Viz", "UX"],
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9497e84f-cd43-4bed-8735-bbc8bfb0606f_800w.webp",
  },
  {
    id: 4,
    category: "Web Design",
    title: "Architectural Digest",
    description: "Interactive portfolio website for architecture firm.",
    tags: ["Web Design", "Animation", "Portfolio"],
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_800w.webp",
  },
  {
    id: 5,
    category: "E-commerce",
    title: "ShopFlow Platform",
    description: "Modern e-commerce platform with seamless checkout experience.",
    tags: ["E-commerce", "UX", "Mobile"],
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e18797-a6da-4246-9868-7ae06d1d06a1_1600w.png",
  },
  {
    id: 6,
    category: "Productivity",
    title: "TaskFlow Pro",
    description: "Team collaboration and project management tool.",
    tags: ["SaaS", "Product Design", "Mobile"],
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b30ed36c-fa0a-48df-8d21-175beda06c03_1600w.png",
  },
];

const categories = ["All", "Fintech", "Healthcare", "SaaS", "Web Design", "E-commerce", "Productivity"];

const stats = [
  { value: "80+", label: "Projects Shipped" },
  { value: "6+", label: "Years Experience" },
  { value: "12", label: "Design Systems" },
  { value: "4", label: "Design Awards" },
];

export default function WorkContent() {
  const isVisible = usePageLoadAnimation();
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const otherProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-zinc-50" />
      </div>

      <div className="max-w-[1400px] mx-auto min-h-screen border-x border-zinc-200 relative z-10">
        <Header />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <PageLoadSection className="px-6 md:px-10 pt-16 pb-12" delay={0} isVisible={isVisible}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
                Selected Works
              </h1>
              <p className="text-zinc-600 text-base md:text-lg max-w-xl leading-relaxed">
                Featured case studies demonstrating problem-solving across fintech,
                healthcare, and e-commerce sectors.
              </p>
            </div>
          </PageLoadSection>

          {/* Filter Bar */}
          <PageLoadSection className="px-6 md:px-10 pb-8" delay={100} isVisible={isVisible}>
            <div className="flex items-center gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "bg-blue-600 text-white"
                      : "border border-zinc-200 text-zinc-600 hover:text-gray-900 hover:border-zinc-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </PageLoadSection>

          {/* Featured Project */}
          {featuredProject && (
            <PageLoadSection className="px-6 md:px-10 pb-12" delay={200} isVisible={isVisible}>
              <div className="overflow-hidden relative bg-white rounded-2xl shadow-lg border border-zinc-100">
                <div className="grid lg:grid-cols-2 items-center">
                  <div className="lg:h-[500px] h-96 overflow-hidden relative bg-zinc-100 flex items-center justify-center">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
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
                      {featuredProject.title}
                    </h3>
                    <p className="text-zinc-600 mb-6">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition"
                    >
                      View details
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </PageLoadSection>
          )}

          {/* Projects Grid */}
          {otherProjects.length > 0 && (
            <section className="px-6 md:px-10 pb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
                {otherProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group overflow-hidden bg-white rounded-xl relative shadow-lg border border-zinc-100"
                  >
                    <div className="overflow-hidden h-64 relative bg-zinc-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="bg-gradient-to-t from-white/90 via-transparent to-transparent absolute inset-0" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1 w-1 rounded-full bg-blue-600" />
                        <span className="text-xs font-medium text-blue-600">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-zinc-600">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {filteredProjects.length === 0 && (
            <section className="px-6 md:px-10 py-20">
              <div className="text-center">
                <p className="text-zinc-500">No projects found in this category.</p>
              </div>
            </section>
          )}

          {/* Stats */}
          <section className="px-6 md:px-10 py-12 border-t border-zinc-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
