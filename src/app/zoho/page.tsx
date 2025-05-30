"use client";

// interface Testimonial {
//   quote: string;
//   name: string;
//   position: string;
//   image: string;
//   region: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     quote: "You can be a startup, mid-sized company, or an enterprise—Zoho One is a boon for all.",
//     name: "Prakarsh Gagdani",
//     position: "CEO, 5paisa.com (an IIFL subsidiary)",
//     image: "/images/zh-video-poster-prakash.png",
//     region: "IN",
//   },

// ];

const services = [
  {
    title: "Customization Services",
    description:
      "Our team of Zoho experts will workclosely with you to understand your unique business needs and customizeZoho to meet those needs. Ourcustomization services include:",
    icon: "/images/zoho/customise_services.svg",
    points: [
      "Custom workflow automation",
      "Custom report generation",
      "Custom dashboard creation",
      "Custom integration  applications",
      "Custom module creation",
    ],
  },
  {
    title: "Integration Services",
    description: "Seamless integration with third-party services.",
    icon: "/images/zoho/Integration_services.svg",
    points: [
      "Microsoft 365",
      "Google Workspace",
      "Slack",
      "Zapier",
      "Custom APIs",
    ],
  },
  {
    title: "Implementation Services",
    description:
      "Our implementation services ensure a smooth transition to Zoho, minimizing disruption to your business. Our services include:",
    icon: "/images/zoho/Implementaion_services.svg",
    points: [
      "Data migration",
      "System configuration",
      "User training",
      "Ongoing support & maintenance",
    ],
  },
  {
    title: "Deployment Services",
    description:
      "Cloud deployment (Zoho Cloud) On-premise deployment (Zoho One) Hybrid deployment (combination of cloud and on-premise)",
    icon: "/images/zoho/deployment_services.svg",
    points: [
      "Cloud deployment (Zoho Cloud)",
      "Data backup and recovery",
      "Security and compliance",
      "Ongoing support & maintenance",
    ],
  },
];

import Image from "next/image";
import Head from "next/head";
import { useRef } from "react";
import Modal from '@/components/Modal';
import WebToLeadForm from '@/components/WebToLeadForm';
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ContactUs from "@/app/contact-us/ContactUs"
import Contact from "@/app/contact-us/Contact";



export default function Home() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || '';
  const [isModalOpen, setIsModalOpen] = useState(false);


  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    if (consultationRef.current) {
      consultationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (


    <>
      <Head>
        <title>Zoho with Lead2CRM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-[Poppins, sans-serif] min-h-screen bg-gray-100 pt-[61px]">
        <div
          className="flex w-full flex-col items-center p-4 lg:flex-row"
          style={{
            background: "linear-gradient(to right, #e8eef8, #ffffff)",
            color: "#000000",
          }}
        >
          <div className="p-4 space-y-10 lg:w-1/2">
            <div className="flex w-full justify-center">
              <Image
                src="/images/zoho/ZOHO_logo_2023.svg.png"
                alt="Zoho logo with colorful squares"
                width={250}
                height={250}
                className="mb-10"
              />
            </div>


            <h1 className="font-poppins text-4xl font-normal">
              Unlock the full potential of Zoho with Lead2CRM,
            </h1>

            {/* <p className="text-lg mb-6" style={{ fontFamily: 'Quicksand', fontWeight: 200 }}>
      Your trusted partner for Zoho projects, implementation, and management.
    </p> */}
            <p
              className="mb-6 text-lg"
              style={{ fontFamily: "Quicksand", fontWeight: 400 }}
            >
              Your trusted partner for Zoho projects, implementation, and
              management.
            </p>
            <button
              className="hover:bg-maihover bg-mai px-6 py-3 text-white shadow"
              onClick={() => router.push(`/contact-us?source=${encodeURIComponent("Book a free Consultation")}`)}
            >
              Book a free Consultation
            </button>

            {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <WebToLeadForm />
            </Modal> */}
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 lg:w-1/2">
            {[
              // 'nYNMV680JeyCMShIOdf28lpf2sIfsuY2WNWcxYttSgwz4r9PB',
              // 'oenvbaGmx4VACyeS6DkHsjW5V0U7qIf7TaSPTQAATLJK81ePB',
              // 'cNHpNoEbuM5eXqfU1jyRSW4z0NCVYQZjobmWmEnyheLU81ePB',
              // '88YSqw9wGEaxNtjGzH8rKsHKWRfVuHlvtHUIAYC8NKWDfafnA'

              "/images/zoho/crmimg1.png",
              "/images/zoho/crmimg3.png",
              "/images/zoho/crmimg4.png",
              "/images/zoho/crmimg5.jpeg",
            ].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Local project visual ${idx + 1}`}
                width={260}
                height={260}
                className="h-full w-full rounded object-cover shadow-lg"
              />
            ))}
          </div>

          {/* 
  <div className="grid grid-cols-2 gap-4 w-full">
    {[
      '/images/zoho/Zoho/Images/image1.png',
      '/images/zoho/Zoho/Images/image2.png',
      '/images/zoho/Zoho/Images/image3.png',
      '/images/zoho/Zoho/Images/image4.png',
  
    ].map((img, idx) => (
      <div
        key={idx}
        className="rounded shadow-lg flex-shrink-0"
        style={{ width: '80px', height: '80px', overflow: 'hidden' }}
      >
        <Image
          src={img}
          alt={`Local project visual ${idx + 1}`}
          width={80} // Adjust the image width
          height={80} // Adjust the image height
          className="object-cover"
        />
      </div>
    ))}
  </div> */}
        </div>

        {/* <section className="bg-white py-12 text-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-center font-poppins text-4xl font-medium">
              Get Started Today!
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-center font-poppins font-normal lg:max-w-full">
              Lead2CRM is a certified Zoho partner, offering expert
              customization, implementation, and deployment services to help
              businesses like yours get the most out of Zoho&#39;s suite of
              productivity applications.
            </p>

            <div className="mb-12 text-center">
              <button
                className="hover:bg-blue-600 rounded bg-[#0078d4ff] px-6 py-3 text-white shadow"
                onClick={scrollToConsultation}
              >
                Book a free Consultation
              </button>
            </div>

            <div className="mb-12 grid place-items-center">
              <Image
                src="https://storage.googleapis.com/a1aa/image/MxDrADgxKsJhFRV4QJNsnUp9uF2chhOxcQbY0QfI1RDnA1fTA.jpg"
                alt="People working on a flow chart with sticky notes and laptops"
                width={1200}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="relative grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative rounded-lg bg-[#0078d4ff] p-6 text-white shadow-lg"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-16 w-16 rounded-full bg-[#0078d4ff] p-2"
                    />
                  </div>
                  <div className="mb-4 mt-10 text-center">
                   

                    <h2 className="mb-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-poppins font-medium">
                      {service.title}
                    </h2>
                    

                    <div className="h-38 ">
                      <p className="font-poppins text-sm font-normal  text-[#f0f0f0]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="list-inside list-disc list-none space-y-2 font-[Poppins]">
                    {service.points.map((point, i) => (
                     

                      <li
                        key={i}
                        className="text-yellow-400 flex list-inside items-center"
                      >
                        <span className="mr-2 text-2xl text-maiy">•</span>{" "}
                        {point}
                      </li>

                     
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* new section */}

        <section className="bg-[#fffff8] pt-14">
          <div className="container mx-auto flex flex-col items-center gap-3 px-6 lg:flex-row ">
            {/* Left Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="mb-6 text-center text-3xl font-normal leading-tight text-gray-900 md:text-6xl lg:text-start">
                Your life&apos;s work,{" "}
                <span className="text-blue-600 block">
                  powered by our life&apos;s work
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-center text-lg text-gray-600 lg:text-start lg:text-xl">
                A unique and powerful software suite to transform the way you
                work. Designed for businesses of all sizes, built by a company
                that{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 underline "
                  href="/privacy-commitment.html?ireft=nhome&src=home"
                >
                  values your privacy
                </a>
                .
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <a
                  href="https://go.zoho.com/QGR"
                  target="_blank"
                  className="hover:bg-blue-700 bg-[#ee0014] px-6 py-3 font-semibold text-white transition"
                >
                  Get Started For Free
                </a>
                {/* <a
                  href="/all-products.html"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 rounded-sm border px-6 py-3 font-semibold transition hover:text-white"
                >
                  Access your apps
                </a> */}
              </div>
              <div className="pt-28">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="https://www.zoho.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.webp"
                  />
                  <img
                    className="w-full  max-w-[70rem]"
                    fetchPriority="high"
                    alt="Zoho Cloud Software Suite for Businesses"
                    src="https://www.zoho.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.png"
                    width={1030}
                    height={299}
                  />
                </picture>
              </div>
            </div>

            {/* Right Content */}
            <div className="max-w-96 flex-1 items-center justify-center rounded-lg bg-white p-8 shadow-lg xl:mb-10">
              <div className=" mb-4 text-xl font-light text-black">
                Featured apps
              </div>
              <ul className="space-y-6">
                {[
                  {
                    title: "CRM",
                    desc: "Comprehensive CRM platform for customer-facing teams.",
                    hrefimg: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg",
                    href: "/zoho-crm",

                  },
                  {
                    title: "Mail",
                    desc: "Secure email service for teams of all sizes.",
                    hrefimg: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.svg",
                    href: "https://go.zoho.com/DSh",
                  },
                  {
                    title: "Projects",
                    desc: "Manage, track, and collaborate on projects with teams.",
                    hrefimg: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.svg",
                    href: "https://go.zoho.com/jfj",

                  },
                  {
                    title: "Books",
                    desc: "Powerful accounting platform for growing businesses.",
                    hrefimg: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg",
                    href: "https://go.zoho.com/Zht",
                  },
                  {
                    title: "Creator",
                    desc: "Build custom apps to simplify business processes.",
                    hrefimg: "https://www.zoho.com/books/images/new/books-product-logo-black.svg",
                    href: "https://go.zoho.com/gMC",
                  },
                ].map((app) => (
                  <li key={app.title}>
                    <a
                      href={app.href}
                      target="_blank"
                      className="group flex items-start gap-4 text-black"
                    >
                      <div className="flex  items-center justify-center">
                        <img
                          className={`h-10 w-20 ${app.title === "Mail" ? "w-[4rem]" : ""
                            }`}
                          src={app.hrefimg}
                          alt={app.title}
                        />
                      </div>
                      <div>
                        <div className="text-xl font-medium group-hover:underline">
                          {app.title}
                        </div>
                        <small className="text-[1rem] leading-relaxed tracking-tight text-gray-500">
                          {app.desc}
                        </small>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="/all-products.html?ireft=nhome&src=home"
                  className="text-blue-600 inline-block font-semibold text-blue hover:underline"
                >
                  Explore all products
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* new section 2  */}

        <section className="relative overflow-hidden bg-[#ffd600]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 py-16 sm:px-6 md:flex-row md:py-24 lg:px-8">
            {/* Left Content */}
            <div className=" flex w-full flex-col items-center justify-center gap-4 sm:gap-6 md:w-1/2 md:flex-row md:items-start ">
              <Image
                alt="Zoho One Logo"
                className="flex-shrink-0"
                height={64}
                width={64}
                src="https://www.zosuccess.com/wp-content/uploads/2023/01/zoho-one-svg.png"
              />
              <div className="flex flex-col items-center text-center text-black md:items-start md:text-left">
                <p className="mb-1 text-sm font-normal leading-5">
                  All-in-one suite
                </p>
                <h1 className="mb-2 font-sans text-[2.5rem] font-normal leading-tight sm:text-[3rem] lg:text-[4rem]">
                  Zoho One
                </h1>
                <p className="mb-4 text-sm font-normal leading-5 sm:mb-6">
                  The operating system for business
                </p>
                <p className="mb-6 max-w-md text-base font-normal leading-7 sm:mb-8 sm:text-[1rem]">
                  Run your entire business on Zoho with our unified cloud
                  software, designed to help you break down silos between
                  departments and increase organizational efficiency.
                </p>




                <a
                  href="https://go.zoho.com/QGR"
                  type="button"
                  target="_blank"
                  className="flex items-center gap-2  bg-[#e60028] px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-[#b80020]"
                >
                  Try Zoho One
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>


              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex w-full max-w-lg flex-col justify-center border-l border-[#d9b600] pl-6 sm:pl-12 md:w-1/2 md:pl-20">
              <p className="mb-6 text-xl font-light  leading-8 text-gray-950 sm:mb-8 sm:text-[1.5rem]">
                &quot;You can be a startup, mid-sized company, or an
                enterprise—Zoho One is a boon for all.&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  alt="Prakarsh Gagdani"
                  className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
                  height={64}
                  width={64}
                  src="https://storage.googleapis.com/a1aa/image/12d136de-5647-461a-457d-630ac5c395cc.jpg"
                />
                <div className="text-black">
                  <p className="text-sm font-semibold leading-5">
                    Prakarsh Gagdani
                  </p>
                  <p className="text-xs font-normal leading-4 sm:text-[12px]">
                    CEO, 5paisa.com (an IIFL subsidiary)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Cube Image */}
          <Image
            alt="Decorative Cube"
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-52 hidden select-none lg:block"
            height={300}
            width={300}
            src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-one-bg.png"
            style={{ maxWidth: 800, maxHeight: 800 }}
          />

          <div className="mx-auto flex justify-center mb-10">
            <img src="/images/zoho/sales-screen.png" alt="" className="w-3/4" />
          </div>
        </section>

        <section className="bg-gray-800 py-12 text-white">
          <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="mb-4 font-poppins text-3xl font-medium">
                Managed Services
              </h2>
              <p className="mb-6 font-poppins text-lg font-normal">
                Ongoing support and management of your Zoho setup.
                <br /> Regular updates, backups, and security checks.
                <br /> Performance optimization and troubleshooting.
              </p>
              <h2 className="mb-4 font-poppins text-3xl font-medium">
                Support Services
              </h2>
              <p className="mb-6 text-lg">
                Priority support for Zoho-related issues.
                <br /> Timely resolution of errors and bugs.
                <br /> Guidance on best practices and usage.
              </p>
              <h2 className="mb-4 text-3xl font-semibold">
                Benefits of Our Zoho Services
              </h2>
              {/* <ul className="list-disc pl-5 space-y-3">
  <li className="text-yellow-400">Improved productivity and efficiency</li>
  <li className="text-yellow-400">Enhanced collaboration and communication</li>
  <li className="text-yellow-400">Customized solutions tailored to your business</li>
  <li className="text-yellow-400">Seamless integration with existing systems</li>
  <li className="text-yellow-400">Ongoing support and maintenance</li>
</ul> */}
              <ul className="list-none space-y-3 pl-1">
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Improved productivity and efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Enhanced collaboration and communication</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Customized solutions tailored to your business</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:w-1/2">
              <img
                src="https://storage.googleapis.com/a1aa/image/hFDTeIZSigxfkUMjIuu7owi2eZCsV7N1F2bhRAKx6fYjfN9fE.jpg"
                alt="A person working on multiple computer screens"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#fed600ff] py-16 text-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h1 className="mb-6 font-poppins text-3xl font-medium">
                  Zoho CRM
                </h1>
                <p className="mb-8 font-poppins">
                  Transform customer interactions with Zoho CRM. Automate sales,
                  marketing, and support processes. Enhance lead management,
                  pipeline visibility, and team collaboration. Make data-driven
                  decisions with real-time analytics. Deliver exceptional
                  customer experiences and drive business growth.
                </p>

                <h1 className=" mb-6 font-poppins text-3xl  font-medium">
                  Zoho Projects
                </h1>
                <p className="mb-8 font-poppins">
                  Simplify project execution with Zoho Projects. Plan, track,
                  and collaborate on projects with ease. Automate workflows, set
                  milestones, and allocate tasks. Enhance team productivity,
                  reduce timelines, and boost profitability. Make informed
                  decisions with real-time reports and analytics.
                </p>

                <h1 className="mb-6 font-poppins text-3xl font-medium">
                  Zoho Inventory
                </h1>
                <p className="mb-8 font-poppins">
                  Effortlessly manage your inventory with Zoho Inventory. Track
                  stock levels, automate orders, and optimize warehouse
                  operations. Streamline product management, shipping, and
                  fulfillment. Get real-time insights and make data-driven
                  decisions to reduce costs, improve efficiency, and boost
                  profitability.
                </p>

                <h1 className="mb-6 font-poppins text-3xl font-medium">
                  Zoho Books
                </h1>
                <p className="mb-8 font-poppins">
                  Streamline financial management with Zoho Books. Automate
                  invoicing, inventory, and expense tracking. Get realtime
                  insights into cash flow, profits, and expenses. Make informed
                  decisions with customizable reports and analytics. Ensure
                  compliance and scalability with secure, cloud-based accounting
                  solutions.
                </p>

                <h1 className="mb-6  font-poppins text-3xl font-medium">
                  Zoho People
                </h1>
                <p className="mb-8 font-poppins">
                  Revolutionize human resources with Zoho People. Automate
                  employee data, attendance, and leave management. Streamline
                  recruitment, performance tracking, and benefits
                  administration. Enhance employee engagement and self-service
                  capabilities. Make data-driven decisions with customizable
                  reports and analytics for a more productive workforce.
                </p>

                <h1 className="mb-6  font-poppins text-3xl font-medium">
                  Zoho Creator
                </h1>
                <p className="mb-8 font-poppins">
                  Custom application development using Zoho Creator Automate
                  workflows, streamline processes, and enhance productivity.
                </p>

                <h1 className="mb-6 font-poppins text-3xl  font-medium">
                  Zoho One
                </h1>
                <p className="mb-8 font-poppins">
                  Expert implementation and management of Zoho One, the
                  all-in-one suite Streamline your business operations with a
                  single, unified platform.
                </p>
              </div>

              {/* <div className="flex justify-center">
            <Image
              src="/images/zoho/Zoho/Images/ZohoProducts.png"
              alt="Zoho Products Image"
              width={400}
              height={400}
              className=" "
            />
          </div> */}
              <div className="flex justify-center">
                <Image
                  src="/images/zoho/Zoho/Images/ZohoProducts.png"
                  alt="Zoho Products Image"
                  width={500}
                  height={500}
                  className="lg:mt-80" // Adds top margin to push the image down
                />
              </div>
            </div>
          </div>
        </section>

        {/* why choose leads2crm  */}

        <section className="flex justify-center bg-[#71cbd1ff] py-12">
          <div className="container mx-auto flex flex-col items-center justify-between space-y-6 px-6 md:flex-row md:space-x-12 md:space-y-0">
            <div className="max-w-lg text-left">
              <h2 className="mb-4 font-poppins text-3xl font-medium text-black">
                Why choose Leads2CRM?
              </h2>
              <ul className="space-y-2 text-lg text-black ">
                <li>Proven expertise in Zoho implementation and management</li>
                <li>Customized solutions tailored to your business needs</li>
                <li>Responsive support and timely issue resolution</li>
                <li>
                  Cost-effective solutions without compromising on quality
                </li>
              </ul>
            </div>

            <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden bg-cover bg-center md:h-80  md:w-80">
              <img
                src="/images/zoho/Zoho/Images/speaker.png"
                alt="Why choose us image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* <section className="flex min-h-screen items-center justify-center bg-[#fed600ff] px-4 py-12"> */}
        {/* <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-lg md:grid-cols-2">
            
            <div className="h-full w-full">
              <img
                src="https://storage.googleapis.com/a1aa/image/Us2JN7WsDLaJNNJMIpqaYHzywSI4pbgUTaZqojgtWCQvr6fJA.jpg"
                alt="Consultation"
                className="h-full w-full object-cover"
              />
            </div>

            
            <div className="p-10">
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
                Book Your <span className="text-green-600">Free</span>{" "}
                Consultation
              </h2>
              <p className="mb-8 text-gray-600">
                Tell us a bit about your project and well get back to you
                within 24 hours.
              </p>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-black"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    className="focus:border-green-500 focus:ring-green-500 mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-none focus:ring-2"
                  />
                </div>

                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="focus:border-green-500 focus:ring-green-500 mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-none focus:ring-2"
                  />
                </div>

              
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+1 234 567 890"
                    className="focus:border-green-500 focus:ring-green-500 mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-none focus:ring-2"
                  />
                </div>

                
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-black"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="project"
                    placeholder="Describe your project needs..."
                    rows={4}
                    className="focus:border-green-500 focus:ring-green-500 mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-none focus:ring-2"
                  ></textarea>
                </div>

              
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 w-full rounded-md px-6 py-3 text-white bg-sky-600 transition duration-300"
                >
                  Submit Request
                </button>

                
                <p className="text-center text-xs text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-green-600 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div> */}
        <ContactUs />
        {/* <Contact /> */}
        {/* </section> */}
      </main>
    </>
  );
}
