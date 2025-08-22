import { CaseStudies } from "./CaseStudies";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import StandalonePage from "./hero";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { TrustAuthority } from "./TrustAuthority";

export default function Standalone() {
    return (
        <div>
            <StandalonePage />
            <TrustAuthority />
            <Services />
            <CaseStudies />
            <Testimonials />
            <FinalCta />
            {/* <Footer /> */}
        </div>
    );
}
