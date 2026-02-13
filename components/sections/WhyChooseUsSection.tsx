import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { StaggerChildren, itemVariants } from "@/components/shared/StaggerChildren";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { whyChooseUsReasons } from "@/constants";

const WhyChooseUsSection = () => {
  return (
    <ParallaxSection speed={0.1}>
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={<>Built on <span className="text-accent italic">trust</span> & expertise</>}
            description="We don't just consult — we become an extension of your team, committed to delivering excellence at every step."
            className="mb-20"
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {whyChooseUsReasons.map((r) => (
              <motion.div key={r.title} variants={itemVariants}>
                <div className="group glass-card rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                    <r.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default WhyChooseUsSection;
