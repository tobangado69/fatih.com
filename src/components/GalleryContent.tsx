"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageLoadAnimation } from "@/hooks/usePageLoadAnimation";
import PageLoadSection from "@/components/ui/PageLoadSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

const categories = ["All", "Presets", "Photography", "UI/UX", "Branding"];

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  badge?: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e18797-a6da-4246-9868-7ae06d1d06a1_1600w.png",
    title: "Enterprise Core",
    subtitle: "Complex data orchestration dashboard",
    tag: "UI/UX",
    aspectRatio: "landscape",
  },
  {
    id: 2,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b30ed36c-fa0a-48df-8d21-175beda06c03_1600w.png",
    title: "Nexus Wallet",
    subtitle: "Biometric-first mobile banking",
    tag: "Presets",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7448262-5258-4cf4-9b57-d8980c7ab406_800w.webp",
    title: "MetricFlow",
    subtitle: "Advanced visualization & tracking",
    tag: "Photography",
    aspectRatio: "landscape",
  },
  {
    id: 4,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fafcbc-4d96-425a-a1fd-cb169399875b_1600w.webp",
    title: "System 01",
    subtitle: "Component-driven architectural tool",
    tag: "Branding",
    aspectRatio: "square",
  },
  {
    id: 5,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1089fd3-4ee0-45a5-a682-917472e74824_1600w.png",
    title: "Global Connect",
    subtitle: "Collaborative workspace integration",
    tag: "UI/UX",
    aspectRatio: "landscape",
  },
  {
    id: 6,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/286dcc4a-3b11-43d3-af80-a7b1c3aaaad1_1600w.webp",
    title: "Cinematic Warm",
    subtitle: "Lightroom & Capture One preset pack",
    tag: "Presets",
    badge: "Popular",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2785f53a-a46a-4482-9c3e-d09a2ddf4494_1600w.png",
    title: "Moody Tones",
    subtitle: "Dark & dramatic color grading",
    tag: "Presets",
    aspectRatio: "square",
  },
  {
    id: 8,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb1b1152-57d5-4b49-b944-3a944ae87f0b_1600w.webp",
    title: "Urban Grain",
    subtitle: "Street photography film emulation",
    tag: "Photography",
    aspectRatio: "landscape",
  },
  {
    id: 9,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7ffe8db-0c0b-4425-9c8a-a797d97e266e_1600w.webp",
    title: "Pastel Dreams",
    subtitle: "Soft, airy tones for lifestyle shoots",
    tag: "Photography",
    aspectRatio: "portrait",
  },
  {
    id: 10,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a1c2b3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d_1600w.webp",
    title: "Neon Nights",
    subtitle: "Cyberpunk-inspired color presets",
    tag: "Presets",
    aspectRatio: "landscape",
  },
  {
    id: 11,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e_1600w.webp",
    title: "Minimalist Spaces",
    subtitle: "Architectural photography collection",
    tag: "Photography",
    aspectRatio: "portrait",
  },
  {
    id: 12,
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f_1600w.webp",
    title: "Brand Identity",
    subtitle: "Complete visual identity systems",
    tag: "Branding",
    aspectRatio: "square",
  },
];

function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const current = items[currentIndex];

  useEffect(() => {
    setIsImageLoaded(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}

      {/* Image container */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <img
          src={current.src}
          alt={current.title}
          className={`max-w-full max-h-[75vh] object-contain rounded-lg transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="mt-4 text-center">
          <h3 className="text-white text-xl font-semibold">{current.title}</h3>
          <p className="text-zinc-400 text-sm mt-1">{current.subtitle}</p>
        </div>
        <div className="mt-2 text-zinc-500 text-xs">
          {currentIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  );
}

export default function GalleryContent() {
  const isVisible = usePageLoadAnimation();
  const [active, setActive] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.tag === active);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [filteredItems.length]);

  const getAspectRatioClass = (ratio: string) => {
    switch (ratio) {
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[16/10]";
      default:
        return "aspect-square";
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-zinc-900/10" />
      </div>

      <div className="max-w-[1400px] mx-auto min-h-screen border-x border-white/5 relative z-10">
        <Header />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <PageLoadSection className="px-6 md:px-10 pt-16 pb-12" delay={0} isVisible={isVisible}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
                Gallery
              </h1>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
                A curated collection of photography, visual presets, and design work.
                Each piece represents a distinct approach to color, light, and composition.
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
                      ? "bg-white text-black"
                      : "border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm text-zinc-500">
              {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </div>
          </PageLoadSection>

          {/* Masonry Grid */}
          <section className="px-6 md:px-10">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredItems.map((item, index) => (
                <PageLoadSection
                  key={item.id}
                  delay={(index % 8) * 50}
                  className="break-inside-avoid"
                  isVisible={isVisible}
                >
                  <AnimatedCard
                    className={`relative overflow-hidden rounded-xl bg-zinc-900 ${getAspectRatioClass(
                      item.aspectRatio
                    )}`}
                    onClick={() => openLightbox(index)}
                    overlayContent={
                      <>
                        {item.badge && (
                          <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            {item.badge}
                          </span>
                        )}
                        <h3 className="text-white font-semibold text-sm">
                          {item.title}
                        </h3>
                        <p className="text-zinc-300 text-xs mt-0.5">{item.subtitle}</p>
                        <span className="mt-2 inline-flex self-start text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                          {item.tag}
                        </span>
                      </>
                    }
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </AnimatedCard>
                </PageLoadSection>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-zinc-500">No items found in this category.</p>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}
