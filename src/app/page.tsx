"use client";

import Spotlight from "@/components/Spotlight";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageLoadAnimation } from "@/hooks/usePageLoadAnimation";
import PageLoadSection from "@/components/ui/PageLoadSection";

export default function Home() {
  const isVisible = usePageLoadAnimation();

  return (
    <>
      <Spotlight />
      <div className="max-w-[1400px] mx-auto min-h-screen border-x border-white/5 relative z-10 bg-[#050505]/80 backdrop-blur-[2px]">
        <Header />
        <PageLoadSection delay={0} isVisible={isVisible}>
          <Hero />
        </PageLoadSection>
        <PageLoadSection delay={100} isVisible={isVisible}>
          <Gallery />
        </PageLoadSection>
        <PageLoadSection delay={200} isVisible={isVisible}>
          <Services />
        </PageLoadSection>
        <PageLoadSection delay={300} isVisible={isVisible}>
          <Work />
        </PageLoadSection>
        <PageLoadSection delay={400} isVisible={isVisible}>
          <Contact />
        </PageLoadSection>
        <Footer />
      </div>
    </>
  );
}
