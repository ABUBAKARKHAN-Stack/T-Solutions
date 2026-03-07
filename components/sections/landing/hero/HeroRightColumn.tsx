"use client"
import { useServices } from '@/context/ServiceContext'
import { heroContent } from '@/data/landing.data'
import { getIconByName } from '@/lib/icon-mapper'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const HeroRightColumn = () => {
    const {
        servicesOverview
    } = useServices()

    return (
        <div className="lgx:col-span-6 lgx:block hidden relative">

            <div className="space-y-5">
                {/* Mission card */}
                <div className="glass-card backdrop-blur-none! rounded-3xl p-8 md:p-10 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px]"
                    />

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.3em]">{heroContent.mission.title}</span>
                    </div>

                    <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed font-playfair mb-6 relative z-10" >
                        "{heroContent.mission.quote}"
                    </p>

                    <div className="space-y-4 relative z-10">
                        {servicesOverview.filter(s => s.featured).map((service, i) => {
                            const Icon = getIconByName(service.icon)
                            return (
                                <Link key={service._id} href={`/services/${service.slug}`}>
                                    <motion.div
                                        className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-accent/15 hover:bg-accent/5 transition-all duration-300"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: 0.75 + i * 0.05 }}
                                    >

                                        <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                                            <Icon className="size-4 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">{service.title}</p>
                                            <p className="text-xs text-muted-foreground line-clamp-3 ">{service.description}</p>
                                        </div>
                                        <ArrowUpRight className="size-3.5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Small accent cards row */}
                <div className="grid grid-cols-2 gap-4">
                    {
                        heroContent.accentCards.map((c, i) => (
                            <motion.div
                                key={c.sub}
                                className="glass-card backdrop-blur-none! rounded-2xl p-5 text-center"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: 0.75 + i * 0.05 }}
                            >
                                <c.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                                <p className="text-sm font-bold text-foreground">{c.label}</p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{c.sub}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroRightColumn