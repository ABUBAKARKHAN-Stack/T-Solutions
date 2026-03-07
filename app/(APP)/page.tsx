import { PageTransition } from "@/components/layout/";
import {
  HeroSection,
  FeaturesSection,
  ServicesSection,
  AboutPreviewSection,
  ApproachSection,
  CTASection,
  FAQSection,
  TestimonialsSection,
  WhyChooseUsSection,
  BlogSection as _,
  PortfolioSection,
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

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Portfolio Section  */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blogs Section  */}
      {/* <BlogSection /> */}

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
