import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import BusinessSection from "@/components/business";
import BrandsClient from "@/components/client";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact-us";
import ContactUs from "@/app/contact-us/ContactUs";
import Cookies from "@/components/cookie";
import FAQs from "@/components/Faqs";
import Features from "@/components/Features";
import DelayedForm from "@/components/form";
import RequestDemoForm from "@/components/form";
import Hero from "@/components/Hero";
import Homes from "@/components/home/index";
import FullScreenImage from "@/components/images-section";
import MeetClients from "@/components/meetclient/clinent";
import HRPopupModal from "@/components/model/index";
import PartnerSection from "@/components/partner";
import Pricing from "@/components/Pricing";
import StatsSection from "@/components/project";
import ProjectNumber from "@/components/project";
import ExpertiseSection from "@/components/secondcomp";
import Services from "@/components/services";
import NewServices from "@/components/servicess";
import TestimonialSection from "@/components/testim";
// import Testimonial from "@/components/Testimonials";
import Testimonials from "@/components/Testimonials";
import Testimonial from "@/components/Testimonials/Testimonial";
import Video from "@/components/Video";
import WhyUs from "@/components/whyus";
import { Metadata } from "next";
import { FaQq } from "react-icons/fa";
import FAQ from "@/components/FAQ/FAQ";
import FAQSlider from "./zoho-crm/FAQSlider";
import EstimateProjectBanner from "@/components/EstimateProjectBanner/EstimateProjectBanner";
import ZohoCRMIndustry from "./zoho-crm/ZohoCRMIndustry";
import InteriorDesignCRMHero from "./zoho-crm/InteriorDesignCRMHero";
import Login from '@/components/animate/Login'

import 'react-phone-input-2/lib/style.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leads2crm.com"),
  title: "Leads2CRM - Driven by Experience. Focused on Results.",
  description: "Dedicated to transforming businesses and accelerating success.",
  // other metadata
  openGraph: {

    title: "Leads2CRM - Driven by Experience. Focused on Results.",
    description:
      "Dedicated to transforming businesses and accelerating success.",
    url: "https://maiprosoft.com",
    type: "website",
    images: [
      {

        url: "/images/meta/android-chrome-512x512.png",
        // url: "/images/logo/newmaiprosoftLogo.png", // Replace with your actual image URL
        width: 700,
        height: 630,
        alt: "Dedicated to transforming businesses and accelerating success.",

      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function Home() {


  return (
    <>
      <ScrollUp />
      <Homes />
      <ExpertiseSection />
      <ZohoCRMIndustry />
      {/* <InteriorDesignCRMHero /> */}
      {/* <MeetClients/>
      <PartnerSection/> */}

      <FullScreenImage />
      {/* <BrandsClient/> */}
      {/* <Testimonial/> */}
      {/* <Services/> */}
      <Cookies />
      {/* <NewServices/> */}
      {/* <Hero /> */}

      {/* <WhyUs/> */}
      {/* <TestimonialSection/> */}
      {/* <BusinessSection/> */}


      {/* <ProjectNumber/> */}
      {/* <StatsSection/> */}
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <EstimateProjectBanner />
      <Testimonial />
      <FAQ />
      <ContactUs />
      {/* <Pricing />  */}
      {/* <FAQs/> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <RequestDemoForm/> */}
      {/* <DelayedForm/> */}

      {/* <HRPopupModal/> */}

    </>
  );
}
