import { PageHero } from '@/components/shared'
import React from 'react'

const ContactPageHero = () => {
    return (
        <PageHero
            eyebrow="Contact"
            title={<>Let's <span className="text-accent italic">talk</span></>}
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            description="Have a question or ready to start a project? We’re here to help. Share your ideas with us, and let’s explore how we can build something meaningful together."
        />
    )
}

export default ContactPageHero