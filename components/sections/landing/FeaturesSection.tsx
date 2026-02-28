"use client"
import { ContainerLayout } from '@/components/layout'
import {
    ParallaxSection,
    SectionHeader,
    StaggerChildren,
    itemVariants
} from '@/components/shared/'
import { featuresContent } from '@/data/landing.data'
import { motion } from 'motion/react'

const FeaturesSection = () => {
    return (
        <ParallaxSection speed={0.15}>
            <section className="section-padding bg-background relative">

                <ContainerLayout>

                    <SectionHeader
                        eyebrow="What We Offer"
                        title="Core Capabilities That Scale"
                        className="mb-16"
                    />

                    <StaggerChildren className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuresContent.map((feature) => (
                            <motion.div key={feature.title} variants={itemVariants}>
                                <div className="group glass-card rounded-2xl p-8 h-full cursor-default">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                                            <feature.icon className="h-5 w-5 text-accent" />
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground/40">{feature.num}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </StaggerChildren>
                </ContainerLayout>
            </section>
        </ParallaxSection>
    )
}

export default FeaturesSection