import { PageTransition } from '@/components/layout'
import { 
  PortfolioCTASection,
  PortfolioGridSection,
    PortfolioPageHero,

 } from '@/components/sections/portfolio'

const PortfolioPage = () => {
  return (
   <PageTransition>

    {/* Page Hero  */}
    <PortfolioPageHero />

    {/* Portfolio Grid Section  */}
    <PortfolioGridSection />


    {/* Portfolio Cta Section  */}
    <PortfolioCTASection />


   </PageTransition>
  )
}

export default PortfolioPage