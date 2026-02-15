"use client"

import { Easing, motion } from "motion/react";
import { StaggerChildren, itemVariants, SectionHeader } from "@/components/shared/";
import { caseStudies } from "@/constants";
import { ContainerLayout } from "@/components/layout";
import { useRef, useState } from "react";

const PortfolioSection = () => {
    return (
        <section className="section-padding bg-card/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
            <ContainerLayout className="relative z-10">

                <SectionHeader
                    eyebrow="Portfolio"
                    title={<>Project that we're <span className="text-accent italic">proud of</span></>}
                    description="Drag the slider to see the transformation. We turn challenges into measurable outcomes."
                />

                <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
                    {caseStudies.map((study) => (
                        <PortfolioImageCard key={study.slug} />
                    ))}
                </StaggerChildren>
            </ContainerLayout>
        </section>
    );
};

export default PortfolioSection;


const PortfolioImageCard = () => {
    const cardRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [scrollAmount, setScrollAmount] = useState(0);
    const [duration, setDuration] = useState(6);
    const [ease, setEase] = useState<Easing>("easeOut");

    const easingOptions: Easing[] = [
        [0.43, 0.13, 0.23, 0.96],
        [0.25, 0.46, 0.45, 0.94],
        [0.33, 0.11, 0.27, 0.99],
        [0.39, 0.21, 0.29, 0.96]
    ];

    const getRandomEasing = () =>
        easingOptions[Math.floor(Math.random() * easingOptions.length)];

    const getRandomHoverDuration = () => Math.random() * 4 + 6; //* 6–10s
    const getRandomLeaveDuration = () => Math.random() * 3 + 1; //* 1-4s

    const handleHoverStart = () => {
        if (!cardRef.current || !containerRef.current) return;

        const imageHeight = cardRef.current.offsetHeight;
        const containerHeight = containerRef.current.offsetHeight;

        const distance = imageHeight - containerHeight;

        setDuration(getRandomHoverDuration());
        setEase(getRandomEasing());
        setScrollAmount(distance > 0 ? distance : 0);
    };

    const handleHoverEnd = () => {
        setDuration(getRandomLeaveDuration());
        setEase(getRandomEasing());
        setScrollAmount(0);
    };

    return (
        <motion.div
            ref={containerRef}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            variants={itemVariants}
            className="h-95 rounded-lg overflow-hidden relative bg-card"
        >
            <motion.img
                ref={cardRef}
                src="/assets/portfolio-1.png"
                className="absolute top-0 left-0 w-full"
                initial={{ y: 0 }}
                animate={{ y: -scrollAmount }}
                transition={{
                    duration,
                    ease
                }}
            />
        </motion.div>
    );
};
