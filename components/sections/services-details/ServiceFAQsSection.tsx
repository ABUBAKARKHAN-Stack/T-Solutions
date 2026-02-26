"use client"
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ServiceFAQ } from '@/types/service.types'

type Props = {
    faqs: ServiceFAQ[]
}

const ServiceFAQsSection = ({
    faqs
}: Props) => {
    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeader eyebrow="FAQ" title={<>Common <span className="text-accent italic">questions</span></>} centered />
                <AnimatedSection className="max-w-2xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue='faq-0'
                        className="w-full space-y-3"
                    >
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`faq-${i}`}
                                className="glass-card rounded-xl px-6 border-none"
                            >
                                <AccordionTrigger className="text-sm cursor-pointer font-medium text-foreground hover:no-underline hover:text-accent duration-300 transition-colors py-5">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedSection>
            </div>
        </section>
    )
}

export default ServiceFAQsSection