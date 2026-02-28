"use client"
import { motion } from "motion/react";
import { SectionHeader } from "@/components/shared";
import { StaggerChildren, itemVariants } from "@/components/shared/StaggerChildren";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { ContainerLayout } from "@/components/layout";
import { whyChooseUsReasons } from "@/data/landing.data";

const WhyChooseUsSection = () => {
  return (
    <ParallaxSection speed={0.1}>
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-150 h-150 bg-accent/5 rounded-full blur-[180px]" />
        <ContainerLayout className="relative z-10">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={<>Built on <span className="text-accent italic">trust</span> and results</>}
            description="We partner with your team to deliver scalable, high-performance solutions that drive measurable impact."
          />

          <StaggerChildren className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {whyChooseUsReasons.map((r) => (
              <motion.div key={r.title} variants={itemVariants}>
                <div className="group glass-card rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                    <r.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground  leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </ContainerLayout>
      </section>
    </ParallaxSection>
  );
};

export default WhyChooseUsSection;
