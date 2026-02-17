"use client"
import ContactForm from './ContactForm'
import { ContainerLayout } from '@/components/layout'
import ContactInfo from './ContactInfo'

const ContactFormAndInfo = () => {
    return (
        <section className="section-padding bg-card/30 relative overflow-hidden">
            <div className="absolute top-0 -z-10 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px]" />
            <ContainerLayout>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                    {/* Contact Form  */}
                    <ContactForm />

                    {/* Contact Info */}
                    <ContactInfo />

                </div>
            </ContainerLayout>
        </section>
    )
}

export default ContactFormAndInfo