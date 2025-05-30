"use client";
import { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone, Building, MessageCircle } from "lucide-react";
import { FaCheck } from "react-icons/fa";
// import ContactUs from "@/components/contact/ContactUs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const testimonialData = [
    {
      quote:
        "Sedra has been an incredible technology partner, offering reliable and forward-thinking solutions for our digital growth. Their team demonstrated an outstanding understanding of our challenges and delivered tailored solutions that boosted our performance. Their commitment to innovation and quality ensured everything ran smoothly.",
      name: "Faisal Al Qahtani",
      role: "IT Manager at Sedra",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "Their team delivered beyond expectations - fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
      name: "Sara Khan",
      role: "CTO at DigiCore",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "I have worked with several tech firms, but this one truly stands out for its dedication and knowledge. Sedra brings not just skills, but vision and commitment. They were responsive, professional, and very easy to collaborate with. The team handled everything with precision and care. Looking forward to many more projects together.",
      name: "Aisha Al Malki",
      role: "Director at CloudUnity",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "They supported us through every phase of our tech upgrade - highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed - on time and beyond expectation.",
      name: "James Holden",
      role: "Product Manager at LogicBridge",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "Our operations became 3x faster with their IT automation solutions. Game changer. The Sedra team took the time to understand our workflow. Their process improvements saved us significant time and cost. They empowered our staff with training and support. Partnering with Sedra has transformed our internal systems.",
      name: "Pooja Mehta",
      role: "Head of Ops at Infinitix",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-24 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid max-w-6xl items-center   md:grid-cols-2">
        <div className="xl:ml-10">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Data & IP Systems
          </h1>
          <p className="mb-4 text-gray-900">
            Data and IP Systems encompass the technologies that manage,
            transmit, and secure information across IP networks, including local
            area networks (LANs), wide area networks (WANs), and the internet.
            These systems enable seamless communication, data sharing, and
            access to cloud-based services and applications. Key technologies
            include:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Switches, Wi-Fi Access Points, and IP Telephones for robust network connectivity",
              "CCTV Systems integrated over IP networks for enhanced security",
              "LANs and WANs to connect devices within and across locations",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-900">
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-green">
                  <FaCheck size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-10">
            <button className="rounded-sm bg-blue px-6 py-3 text-sm text-white transition duration-300 hover:bg-sky-500 sm:text-base">
              START TODAY FOR FREE
            </button>
          </div>
        </div>

        <div className="relative mt-8   w-full rounded-xl bg-white p-6 shadow-xl md:ml-24 md:max-w-sm xl:ml-36">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Interested?
          </h2>
          <p className="mb-4 text-sm text-gray-500">
            Fill in this form to let us get back to you ASAP!
          </p>
          <form className="space-y-3">
            {[
              { icon: User, placeholder: "Full Name", type: "text" },
              { icon: Mail, placeholder: "Business Email", type: "email" },
              { icon: Phone, placeholder: "Mobile Number", type: "tel" },
              { icon: Building, placeholder: "Company Name", type: "text" },
            ].map(({ icon: Icon, ...props }, i) => (
              <div
                key={i}
                className="flex items-center rounded-lg border border-gray-300 bg-white px-3 shadow-sm"
              >
                <Icon size={18} className="text-gray-400" />
                <input
                  {...props}
                  className="w-full bg-transparent p-2 text-gray-900 outline-none"
                  required
                />
              </div>
            ))}
            <div className="flex items-start rounded-sm border border-gray-300 bg-white px-3 shadow-sm">
              <MessageCircle size={18} className="mt-3 text-gray-400" />
              <textarea
                placeholder="More details about your requirements"
                className="w-full bg-transparent p-2 text-gray-900 outline-none"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="w-full rounded-sm bg-blue p-2 text-white shadow-md transition duration-300 hover:bg-sky-500"
            >
              Talk to Sales
            </button>
          </form>
          {/* <Contact  /> */}
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl p-4 sm:p-10">
        <p className="text-blue-600 text-center text-sm font-bold">
          Whats included?
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mb-6 text-center text-gray-700">
          We provide end-to-end solutions for designing, installing, and
          maintaining Data and IP Systems - ensuring your networks are reliable,
          secure, and scalable to meet your business or residential needs.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Key Components of Data & IP Systems
            </h3>
            <p className="mb-4 text-gray-600">
              Our comprehensive approach ensures your network infrastructure
              supports current demands and future growth. Core components
              include:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Network Hardware – Switches, routers, Wi-Fi access points, and firewalls",
                "IP Telephony – Seamless voice communication over IP networks",
                "Surveillance Systems – IP-based CCTV integration for real-time security monitoring",
                "Cloud Connectivity – Secure access to cloud services and applications",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-900">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-green">
                    <FaCheck size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center xl:ml-14">
            <Image
              src="/images/zoho/Zoho/Images/image200.png"
              alt="IT Strategy"
              width={400}
              height={300}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl p-4 sm:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-1 flex items-center justify-center md:order-none xl:mr-8">
            <Image
              src="/images/zoho/Zoho/Images/image192.png"
              alt="Digital Planning"
              width={400}
              height={300}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Benefits of Implementing Data & IP Systems
            </h3>
            <p className="mb-4 text-gray-600">
              Effective Data and IP Systems offer essential advantages for
              homes, offices, educational institutions, and data centers:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Reliable Communication – Ensure uninterrupted voice, video, and data transmission",
                "Enhanced Collaboration – Enable teams to work together seamlessly across locations",
                "Scalability – Expand your network easily as your needs grow",
                "Improved Security – Protect data and devices through secure network designs",
                "Home and Business Integration – Connect multiple digital endpoints, from computers to smart home devices and printers",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-900">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-green">
                    <FaCheck size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          className="w-full"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-between overflow-hidden rounded-xl bg-black text-white md:flex-row "
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1581092334648-4b8b4d9fa0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-6 sm:p-10 md:w-2/3">
                  <p className="text-sm font-light leading-relaxed sm:text-[1rem]">
                    <span className="text-blue-400 text-3xl sm:text-4xl">
                      &quot;
                    </span>
                    {testimonial.quote}
                    <span className="text-blue-400 text-3xl sm:text-4xl">
                      &quot;
                    </span>
                  </p>
                  <p className="mt-4 font-semibold sm:mt-6">
                    {testimonial.name}
                    <span className="text-sm font-normal">
                      , {testimonial.role}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center p-6 sm:p-10 md:w-1/3">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.name} Logo`}
                    width={96}
                    height={96}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
