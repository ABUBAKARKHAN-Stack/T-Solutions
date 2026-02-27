import { PageHero } from '@/components/shared'

const ServicesPageHero = () => {
  return (
    <PageHero
      eyebrow="Our Services"
      title={<>What we <span className="text-accent italic">do best</span></>}
      description="We design and build scalable software systems, AI-powered applications, and cloud infrastructure that perform, grow, and deliver measurable results."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
    />
  )
}

export default ServicesPageHero