"use client"

import { ArrowRight } from "lucide-react";
import {
    SectionHeader,
    MagneticButton,
    StaggerChildren,
    BlogCard
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/data/landing.data";
import { ContainerLayout } from "@/components/layout";

const BlogSection = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-[20%] w-100 h-100 bg-accent/5 rounded-full blur-[150px]" />

            <ContainerLayout className="relative z-10">

                <SectionHeader
                    eyebrow="Insights & Ideas"
                    title={<>From our <span className="text-accent italic">blog</span></>}
                    description="Perspectives on technology, strategy, and sustainable growth."
                    action={
                        <MagneticButton>
                            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-accent/10 text-sm px-6 h-10 font-medium">
                                <Link href="/blogs">
                                    All Articles <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </MagneticButton>
                    }
                />

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
                    {blogPosts.map((post) => <BlogCard post={post} />)}
                </StaggerChildren>
            </ContainerLayout>
        </section>
    );
};

export default BlogSection;
