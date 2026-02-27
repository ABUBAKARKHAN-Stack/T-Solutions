"use client"
import { ContainerLayout } from '@/components/layout';
import { SectionHeader } from '@/components/shared';
import { milestones } from '@/data/about.data';
import { motion } from 'motion/react';

const OurJourneySection = () => {
    return (
        <section className="section-padding border-y border-border/50 bg-muted/20">
            <ContainerLayout>
                
                <SectionHeader
                    eyebrow="Our Journey"
                    title="From Vision to Scalable Systems"
                    centered
                />

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-px" />
                    {milestones.map((m, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={m.year}
                                className={`relative flex items-start gap-6 mb-12 last:mb-0 md:w-1/2 ${isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
                                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                {/* Dot */}
                                <div className={`absolute top-1 ${isLeft ? "md:right-1.75 left-3.25 md:left-auto" : "md:left-1.75 left-3.25"} w-3.5 h-3.5 rounded-full bg-accent border-[3px] border-background z-10`} />
                                {/* Card */}
                                <div className="ml-10 md:ml-0 rounded-xl border border-border/30 bg-card/60 backdrop-blur-sm p-5 hover:border-accent/20 transition-colors duration-300">
                                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{m.year}</span>
                                    <h3 className="text-sm font-semibold text-foreground mt-1 mb-1.5">{m.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-light">{m.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </ContainerLayout>
        </section>
    )
}

export default OurJourneySection