"use client"
import { motion } from "motion/react"
import { itemVariants } from "./StaggerChildren"
import Link from "next/link"
import { IPortfolioOverview } from "@/types/portfolio.types"
import Image from "next/image"
import { APP_NAME } from "@/constants/app.constants"
import { ArrowUpRight } from "lucide-react"
import { getPreviewImageUrl } from "@/lib/transformed-img-urls"
import CardTopBadge from "./CardsTopBadge"

type Props = {
    project: IPortfolioOverview
}

const PortfolioCard = ({
    project
}: Props) => {
    return (
        <motion.div key={project.slug} variants={itemVariants}>
            <Link href={`/portfolio/${project.slug}`} className="group block">
                <article className="relative h-full rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accent/25 hover:shadow-[0_8px_40px_-12px] shadow-accent/15">

                    {/* Top accent line */}
                    <div className="h-px bg-linear-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    {/* Image */}
                    <div className="relative h-52 md:h-56 overflow-hidden">
                        <Image
                            src={getPreviewImageUrl(project.image.source)}
                            alt={`Screenshot of ${project.title} project created by ${APP_NAME}`}
                            fill
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />

                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-card/60 to-transparent" />

                        {/* Category badge */}
                        <CardTopBadge
                            label={project.category}
                            className="absolute top-4 left-4"
                        />

                        {/* Year */}
                        <CardTopBadge className="absolute top-4 right-4 px-2 py-1"
                            label={project.year}
                        />

                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col">
                        <h3
                            className="text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors font-playfair duration-300"
                        >
                            {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-medium text-muted-foreground/70 bg-muted/50 px-2 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 3 && (
                                <span className="text-[10px] font-medium text-muted-foreground/50 px-1 py-0.5">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end pt-4 border-t border-border/30">
                            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>)
}

export default PortfolioCard