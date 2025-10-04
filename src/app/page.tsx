import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about";
import Features from "@/components/features";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Features />
      <Testimonials />
      <TeamSection />
      <FooterSection />
    </>
  );
}
