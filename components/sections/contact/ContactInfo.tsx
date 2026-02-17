import { motion } from 'motion/react'
import { AnimatedSection } from '@/components/shared'
import { contactInfo } from '@/constants/navigation.constants'

const ContactInfo = () => {
    return (
        <AnimatedSection className="lg:col-span-2" direction="right" delay={0.2}>
            <div>
                <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">Get in Touch</p>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-10 text-sm font-light">
                    We're here to help. Reach out through any of the channels below, and our team will respond within 24 hours.
                </p>
            </div>

            <div className="space-y-6">
                {contactInfo.map((item, i) => (
                    <motion.div
                        key={item.link}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                    >
                        <a
                            href={item.link}
                            className="flex items-center group gap-4"
                        >
                            <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                                <item.icon className="h-4 w-4 text-accent" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                                <p className="text-sm font-medium text-foreground">{item.value}</p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    )
}

export default ContactInfo