"use client"
import { ContainerLayout } from '@/components/layout'
import { AnimatedSection } from '@/components/shared'
import { Quote } from 'lucide-react'

const FounderQuoteSection = () => {
  return (
    <section className="section-padding bg-muted/20 border-y border-border/50">
        <ContainerLayout>
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Quote className="h-8 w-8 text-accent/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-playfair text-foreground font-light leading-relaxed italic mb-6">
              "We started T-Solutions because we saw a gap between strategic advice and technical execution. Too many organisations receive recommendations they can't act on. We exist to close that gap."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border/30">
                <img src="/team-alexandra.jpg" alt="Alexandra Reed" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Alexandra Reed</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Managing Director</p>
              </div>
            </div>
          </AnimatedSection>
        </ContainerLayout>
      </section>
  )
}

export default FounderQuoteSection