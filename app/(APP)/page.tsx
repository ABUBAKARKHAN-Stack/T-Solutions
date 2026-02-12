import { PageTransition } from "@/components/layout/";
import { HeroSection } from "@/components/sections/landing";
import FeaturesSection from "@/components/sections/landing/FeaturesSection";

const Index = async () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />

      <FeaturesSection />

    </PageTransition>
  );
};

export default Index;
