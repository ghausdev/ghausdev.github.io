import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { NewsSection } from "@/components/NewsSection";
import { ServiceSection } from "@/components/ServiceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white/20">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ResearchSection />
      <ProjectsSection />
      <NewsSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
