import { PageHero } from '@/components/shared'

const PortfolioPageHero = () => {
    return (
        <PageHero
            eyebrow="Our Work"
            title={<>Our <span className="text-accent italic">Portfolio</span></>}
            description="Every project is a story of collaboration, innovation, and measurable impact. Explore the work we're proud of."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        />
    )
}

export default PortfolioPageHero