"use client"

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { StaggerChildren, itemVariants, SectionHeader } from "@/components/shared/";
import BeforeAfterSlider from "@/components/sections/landing/BeforeAfterSlider";
import { caseStudies } from "@/constants";
import { ContainerLayout } from "@/components/layout";
import Link from "next/link";

const CaseStudySection = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
      <ContainerLayout className="relative z-10">

        <SectionHeader
          eyebrow="Case Studies"
          title={<>Real impact, <span className="text-accent italic">real results</span></>}
          description="Drag the slider to see the transformation. We turn challenges into measurable outcomes."
        />

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {caseStudies.map((study) => (
            <motion.div key={study.title} variants={itemVariants}>
              <div className="group rounded-2xl overflow-hidden h-full flex flex-col bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                <BeforeAfterSlider
                  beforeImage={study.before}
                  afterImage={study.after}
                  className="h-56"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5 flex-1">{study.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div>
                      <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Key Result</p>
                      <p className="text-base font-bold text-accent">{study.result}</p>
                    </div>
                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default CaseStudySection;
