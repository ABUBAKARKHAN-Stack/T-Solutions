import { PageTransition } from "@/components/layout/";
import {
  HeroSection,
  FeaturesSection,
  ServicesSection,
  AboutPreviewSection,
  ApproachSection,
  CTASection,
  FAQSection,
  PartnersSection,
  PortfolioSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/sections/landing";

const HomePage = async () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Partners Section  */}
      <PartnersSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Portfolio / Case Studies */}
      <PortfolioSection />

      {/* Our Approach */}
      <ApproachSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section  */}
      <CTASection />

    </PageTransition>
  );
};

export default HomePage;
