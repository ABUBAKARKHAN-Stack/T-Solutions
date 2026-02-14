"use client"

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared";
import { testimonials } from "@/constants";
import { ContainerLayout } from "@/components/layout";

const TestimonialsSection = () => {
  const [active, setActive] = useState(2);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > Math.floor(testimonials.length / 2)) diff -= testimonials.length;
    if (diff < -Math.floor(testimonials.length / 2)) diff += testimonials.length;
    return diff;
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <ContainerLayout>

        <SectionHeader
          eyebrow="Testimonials"
          title={<>What our clients <span className="text-accent italic">say</span></>}
          centered
        />

        {/* Coverflow carousel */}
        <motion.div
          className="relative flex items-center justify-center h-95 md:h-85 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x > 60) prev();
            else if (info.offset.x < -60) next();
          }}
        >
          {testimonials.map((t, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            return (
              <motion.div
                key={t.name}
                className="absolute w-[90%] max-w-md cursor-pointer"
                onClick={() => setActive(i)}
                animate={{
                  x: `${offset * 60}%`,
                  scale: isActive ? 1 : 0.85 - absOffset * 0.05,
                  rotateY: offset * -15,
                  z: isActive ? 50 : -absOffset * 50,
                  opacity: isActive ? 1 : absOffset === 1 ? 0.6 : 0.3,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1200,
                  zIndex: 10 - absOffset,
                }}
              >
                <div
                  className={`bg-card/50 backdrop-blur-sm border border-border/30 rounded-3xl p-8 md:p-10 flex flex-col transition-shadow duration-500 ${isActive ? "shadow-2xl border-accent/30" : ""
                    }`}
                  style={{ willChange: "backdrop-filter" }}
                >
                  <Quote className="h-6 w-6 text-accent/30 mb-4" />
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-1 text-sm md:text-base">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <span className="text-xs font-semibold text-accent">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-accent" : "w-1.5 bg-border/60 hover:bg-accent/40"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TestimonialsSection;
