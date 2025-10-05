import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about";
import Services from "@/components/services";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <Testimonials />
      <TeamSection />
    </>
  );
}
