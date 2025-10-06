import AboutSection from "@/components/about";
import Services from "@/components/services";
import TeamSection from "@/components/team";
import { ContactForm } from "@/components/contact-form";
import { notFound } from "next/navigation";

const sections: Record<string, React.ComponentType> = {
  about: AboutSection,
  services: Services,
  team: TeamSection,
  contact: ContactForm,
};

export default function Pages({ params }: { params: { id: string } }) {
  const { id } = params;
  const SelectedSection = sections[id];

  if (!SelectedSection) {
    notFound();
  }
  return (
    <div className="w-full min-h-screen">
      <SelectedSection />
    </div>
  );
}
