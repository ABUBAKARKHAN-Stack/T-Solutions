import { PageTransition } from '@/components/layout'
import {
    ServicesCTASection,
    ServicesGridSection,
    ServicesPageHero
} from '@/components/sections/services'
import { APP_NAME, BASE_URL } from '@/constants/app.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: `Software Development Services | ${APP_NAME}` },

    description:
        "T-Solutionz provides full stack development, Agentic-AI & LLM integrations, app development, and DevOps & cloud infrastructure services engineered for scalability, performance, and long-term business growth.",

    keywords: [
        "Software Development Services",
        "Full Stack Development Services",
        "Agentic-AI & LLM Integration",
        "App Development Services",
        "DevOps and Cloud Infrastructure",
        "Scalable Software Development Agency"
    ],

    alternates: {
        canonical: `${BASE_URL}/services`,
    },

    openGraph: {
        siteName: APP_NAME,
        title: `Software Development Services | ${APP_NAME}`,
        description:
            "T-Solutionz delivers full-stack development, Agentic-AI & LLM integrations, app development, and DevOps cloud solutions engineered for scalability, high performance, and measurable business impact.",
        url: `${BASE_URL}/services`,
        images: { url: "opengraph-image" },
        type: "website"
    },
};

const ServicesPage = () => {
    return (
        <PageTransition>
            <ServicesPageHero />
            <ServicesGridSection />
            <ServicesCTASection />
        </PageTransition>
    )
}

export default ServicesPage