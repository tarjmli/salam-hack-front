"use client";

import AboutSection from "@/components/landing/About";
import ContactSection from "@/components/landing/Contact";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/Hero";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import LicenseOptionsSection from "@/components/landing/LicenseOptionsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  // const [beats, setBeats] = useState([])

  // useEffect(() => {
  //   // In a real scenario, you'd fetch this data from the BeatStars API
  //   // For this example, we'll use mock data
  //   setBeats([
  //     { id: "1", name: "Urban Groove", audio: "/placeholder.mp3" },
  //     { id: "2", name: "Chill Vibes", audio: "/placeholder.mp3" },
  //     { id: "3", name: "Trap Fusion", audio: "/placeholder.mp3" },
  //   ])
  // }, [])

  return (
    <div className="min-h-screen text-white relative">
      <InteractiveBackground />
      <div className="relative z-10">
        {/* <Header /> */}
        <main className="container mx-auto px-4">
          <HeroSection />
          <LicenseOptionsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        {/* <FloatingPlayer beats={beats} /> */}
      </div>
    </div>
  );
}
