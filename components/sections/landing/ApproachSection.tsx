"use client"

import { motion } from "framer-motion";
import {SectionHeader} from "@/components/shared";
import { StaggerChildren, itemVariants } from "@/components/shared/StaggerChildren";
import { ContainerLayout } from "@/components/layout";
import { approachSteps } from "@/data/landing.data";

const ApproachSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
      <ContainerLayout className="relative z-10">

          <SectionHeader
            eyebrow="Our Approach"
            title={<>A proven path to <span className="text-accent italic">results</span></>}
            centered
          />

        <StaggerChildren className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {approachSteps.map((step, i) => (
            <motion.div key={step.title} variants={itemVariants} className="relative">
              {i < approachSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px border-t border-dashed border-border/40" />
              )}
              <div className="glass-card rounded-2xl p-8 h-full text-center group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors duration-500 relative">
                  <step.icon className="h-5 w-5 text-accent" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-background text-[10px] font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </ContainerLayout>
    </section>
  );
};

export default ApproachSection;
