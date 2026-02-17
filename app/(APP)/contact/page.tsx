import { PageTransition } from '@/components/layout'
import { 
    ContactFormAndInfo,
    ContactPageHero,
 } from '@/components/sections/contact'

const ContactPage = () => {
  return (
   <PageTransition>

    <ContactPageHero />

    <ContactFormAndInfo />

   </PageTransition>
  )
}

export default ContactPage