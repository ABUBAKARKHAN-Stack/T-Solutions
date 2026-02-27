import { PageTransition } from "@/components/layout";
import PrivacySection from "@/components/sections/privacy/PrivacySection";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false }
}

const Privacy = () => {
    return (
        <PageTransition>
            <PrivacySection />
        </PageTransition>
    );
};

export default Privacy;
