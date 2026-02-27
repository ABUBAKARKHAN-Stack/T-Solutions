import { PageTransition } from '@/components/layout'
import {
  ContactFormAndInfo,
  ContactPageHero,
} from '@/components/sections/contact'
import { APP_NAME, BASE_URL, TAGLINE } from '@/constants/app.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact T-Solutionz",
  description:
    "Get in touch with T-Solutionz, a scalable software development agency. Discuss your project, explore solutions, and start building high-performance systems.",
  keywords: [
    "Contact T-Solutionz",
    "Software Development Inquiry",
    "Digital Solutions Contact",
    "Scalable Systems Consultation",
    "Full-Stack Development Inquiry",
    "AI & LLM Project Contact"
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    siteName: APP_NAME,
    title: `Contact T-Solutionz | ${TAGLINE}`,
    description:
      "Reach out to T-Solutionz to discuss scalable web applications, AI integrations, and DevOps solutions built for long-term growth and high performance.",
    url: `${BASE_URL}/contact`,
    images: { url: "opengraph-image" },
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <PageTransition>

      <ContactPageHero />

      <ContactFormAndInfo />

    </PageTransition>
  )
}

export default ContactPage