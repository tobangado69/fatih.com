import Spotlight from "@/components/Spotlight";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="max-w-[1400px] mx-auto min-h-screen border-x border-white/5 relative z-10 bg-[#050505]/80 backdrop-blur-[2px]">
        <Header />
        <Hero />
        <Gallery />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
