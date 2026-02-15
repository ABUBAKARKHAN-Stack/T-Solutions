"use client"
import { motion } from "motion/react"
import { itemVariants } from "./StaggerChildren"
import { ArrowUpRight, Clock } from "lucide-react"
import Image from "next/image"
type Props = {
    post: {
        title: string;
        excerpt: string;
        category: string;
        date: string;
        readTime: string;
        slug: string;
        image: string;
    }
}
const BlogCard = ({ post }: Props) => {
    return (
        <motion.div key={post.slug} variants={itemVariants}>
            <article className="group relative h-full rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accent/25 hover:shadow-[0_8px_40px_-12px] hover:shadow-accent/15">

                {/* Top accent line */}
                <div className="h-px bg-linear-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card/80 via-card/20 to-transparent" />

                    {/* Category badge on image */}
                    <span className="absolute top-4 left-4 text-[10px] font-semibold text-accent uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border border-accent/20 bg-accent-foreground/70 backdrop-blur-md">
                        {post.category}
                    </span>
                </div>

                <div className="p-7 flex flex-col flex-1">

                    {/* Title */}
                    <h3
                        className="text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed font-light flex-1 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-border/30">
                        <div className="flex items-center gap-1.5 text-muted-foreground/50">
                            <Clock className="h-3 w-3" />
                            <span className="text-[11px] font-medium">{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground/40 group-hover:text-accent transition-colors duration-300">
                            <span className="text-xs">Read</span>
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </article>
        </motion.div>
    )
}

export default BlogCard