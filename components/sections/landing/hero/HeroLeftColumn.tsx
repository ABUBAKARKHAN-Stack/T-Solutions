"use client"

import ContactDrawer from "@/components/shared/ContactDrawer"
import MagneticButton from "@/components/shared/MagneticButton"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/data/landing.data"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const HeroLeftColumn = () => {
    return (
        <div className="lgx:col-span-6 col-span-full">

            {/* Eyebrow */}
            <motion.div
                className="flex relative w-fit py-2.25 px-4 bg-accent/20 dark:bg-accent/10  rounded-full items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >

                <BorderBeam
                    colorFrom="var(--color-accent)"
                    colorTo="var(--color-accent)"
                />

                <span className="min-[400px]:text-[10px] text-[8px] font-semibold text-accent uppercase tracking-[0.3em]">
                    {heroContent.eyebrow}
                </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-foreground leading-[0.92] tracking-[-0.01em] mb-8">
                {heroContent.headline.map((word, i) => (
                    <span key={word} className="block">
                        <motion.span
                            className="block"
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.15 + i * 0.1,
                            }}
                        >
                            {word.toLowerCase().trim().includes("future-ready") ? (
                                <motion.span
                                    className="text-accent text-nowrap  italic"
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.8, delay: 0.55 }}
                                >
                                    {word}
                                </motion.span>
                            ) : (
                                word
                            )}
                        </motion.span>
                    </span>
                ))}
            </h1>

            {/* Subtext Paragraphs */}

            {
                heroContent.subtexts.map((p, i) => (
                    <motion.p
                        key={i}
                        className="text-base md:text-lg text-muted-foreground max-w-xl leading-[1.8] font-light mb-4 "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {p}
                    </motion.p>
                ))
            }

            <div className="mb-10" />


            {/* CTAs */}
            <motion.div
                className="flex flex-wrap items-center gap-4 pb-8 border-b"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <MagneticButton>
                    <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm px-8 h-12 font-medium tracking-wide">
                        <Link href="/services">
                            {heroContent.cta.primary} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </MagneticButton>
                <ContactDrawer>
                    <MagneticButton>
                        <Button variant="outline" size="lg" className="rounded-full text-foreground hover:bg-accent/10 text-sm px-6 h-12 font-medium">
                            {heroContent.cta.secondary} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </MagneticButton>
                </ContactDrawer>
            </motion.div>

        </div>
    )
}

export default HeroLeftColumn