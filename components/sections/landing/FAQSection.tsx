import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader, AnimatedSection, MagneticButton } from "@/components/shared";
import { faqs } from "@/constants";
import { ContainerLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">

      <div
        className="absolute bottom-0 right-0 w-100 h-100 bg-accent/5 rounded-full blur-[150px]" />

      <ContainerLayout className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    <div>
                
          <SectionHeader
            eyebrow="FAQs"
            title={<>Questions? <br /><span className="text-accent italic">We've got answers</span></>}
            description="Everything you need to know about working with us. Can't find what you're looking for? Feel free to reach out."
          />
          <MagneticButton strength={0.1}>
            <Link href={'/contact'} className="bg-transparent flex items-center hover:bg-transparent text-accent" >
              Contact us for more <ArrowRight className="ml-2 size-4" />
            </Link>
          </MagneticButton>
    </div>

          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-3">
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
      </ContainerLayout>
    </section>
  );
};

export default FAQSection;
