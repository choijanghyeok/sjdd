import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import EmpathySection from "@/components/sections/EmpathySection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProgramSection from "@/components/sections/ProgramSection";
import ServiceSection from "@/components/sections/ServiceSection";
import GuideSection from "@/components/sections/GuideSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <EmpathySection />
      <ProblemSection />
      <SolutionSection />
      <ProgramSection />
      <ServiceSection />
      <GuideSection />
      <PhilosophySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
