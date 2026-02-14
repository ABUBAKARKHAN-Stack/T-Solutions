import { MagneticButton, CTASection as SharedCTASection } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const CTASection = () => {
    return (
        <SharedCTASection
            title={<>Let's build something<br /><span className="text-accent italic">extraordinary</span></>}
            description="Ready to transform your business? Schedule a free consultation and discover what's possible."
            extraActions={
                <MagneticButton>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-accent/10 text-sm px-8 h-12 font-medium">
                        <Link href="/about">
                            Learn About Us <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </MagneticButton>
            }
        />
    )
}

export default CTASection