import { ContainerLayout } from "@/components/layout/";
import GrainNoiseOverlay from "./GrainNoiseOverlay";
import AnimatedGradientMesh from "./AnimatedGradientMesh";
import DecorativeVerticalLine from "./DecorativeVerticalLine";
import HeroLeftColumn from "./HeroLeftColumn";
import HeroRightColumn from "./HeroRightColumn";

const HeroSection = () => {

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Grain noise overlay */}
            <GrainNoiseOverlay />

            {/* Animated gradient mesh */}
            <AnimatedGradientMesh />

            {/* Decorative vertical line */}
            <DecorativeVerticalLine />

            <ContainerLayout className="relative z-10">
                <div>

                    <div className="pt-28 lgx:pt-32 mb-16 lgx:mb-20 grid grid-cols-1 lgx:grid-cols-12 gap-8 lgx:gap-16 items-start pb-16 lgx:pb-24">

                        {/* Left column — main content */}
                        <HeroLeftColumn />

                        {/* Right column — services preview + mission */}
                        <HeroRightColumn />

                    </div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default HeroSection