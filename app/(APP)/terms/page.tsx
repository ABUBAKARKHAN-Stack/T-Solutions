import { PageTransition } from "@/components/layout";
import TermsSection from "@/components/sections/terms/TermsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false }
}

const Terms = () => {
    return (
        <PageTransition>
            <TermsSection />
        </PageTransition>
    );
};

export default Terms;
