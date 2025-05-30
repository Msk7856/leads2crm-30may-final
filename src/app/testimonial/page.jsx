"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
      "Their team delivered beyond expectations — fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
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
      "They supported us through every phase of our tech upgrade — highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed — on time and beyond expectation.",
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

const Testimonial = () => {
  return (
    <div className="mx-auto mb-10 mt-20 w-full max-w-6xl px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="w-full"
      >
        {testimonialData.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-black text-white md:flex-row"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.95) 45%, rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1581092334648-4b8b4d9fa0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-10 md:w-2/3">
                <p className="text-lg font-light leading-relaxed text-white md:text-2xl">
                  <span className="text-blue-400 text-3xl">“</span>
                  {t.quote}
                  <span className="text-blue-400 text-3xl">”</span>
                </p>
                <p className="mt-6 font-semibold">
                  {t.name},{" "}
                  <span className="text-sm font-normal text-gray-300">
                    {t.role}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center p-10 md:w-1/3">
                <img
                  src={t.logo}
                  alt={`${t.name} logo`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
