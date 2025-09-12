import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maiprosoft-Your software solution",
  description: "Maiprosoft- Software company in Saudi Arabia",  // other metadata
};

const AboutPage = () => {
  return (
    <>
      
      <Breadcrumb
        pageName="About Page"
        description="Transforming Ideas into Global Success Since 2011"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
