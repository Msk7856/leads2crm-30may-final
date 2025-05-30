'use client';

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
    name: string;
    title: string;
    text: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Wael",
        title: "Oppolia",
        image: "/images/dummyUser.jpg",
        text: "It was a great experience setting up our Oppolia branch in Riyadh and Jeddah with Sedra complete IT solutions and smart home systems. The team professionalism and support were highly appreciated. Looking forward to more collaborations!",
    },
    {
        name: "Amjad",
        title: "Confidential",
        image: "/images/dummyUser.jpg",
        text: "We had an excellent experience with the setup of our guest house management system. The teams attention to detail and smooth execution made the process hassle-free. Truly commendable work!",
    },
    {
        name: "Abdul bin Khattab",
        title: "Aron Holding",
        image: "/images/dummyUser.jpg",
        text: "I truly appreciate the team efforts in setting up our Zoho CRM. Migrating from Excel to a complete CRM system was handled seamlessly, along with implementing ERP solutions. Their expertise made the transition smooth and efficient.",
    },
    {
        name: "Salman Al Harbi",
        title: "QudraTech Solutions",
        image: "/images/dummyUser.jpg",
        text: "Our mobile app development project was successfully executed with excellent communication and technical skills. From initial concept to deployment, the team delivered a high-quality app that perfectly matched our business needs. Highly recommended!",
    },
    {
        name: "Noor Al Shammari",
        title: "AlNoor Industries",
        image: "/images/dummyUser.jpg",
        text: "A big thank you for leading our complete business digitization. From automating workflows to integrating cloud solutions, the entire process was handled with precision and care. The digital transformation has truly optimized our operations. Excellent job!",
    },
];


export default function Testimonial() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const { name, image, title, text } = testimonials[current];

    return (
        <section
            style={{
                backgroundImage:
                    "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
            }}
            className="py-10 lg:py-20 px-6 bg-gray-50 text-black">
            <div className="max-w-6xl mx-auto" >
                <h2 className="text-sm text-mai font-semibold uppercase mb-1 font-sans">
                    Our Testimonials
                </h2>
                <h3 className="text-3xl font-semibold mb-4 tracking-tight">
                    What They&lsquo;re Saying?
                </h3>

                <div data-aos="fade-up" className="relative bg-mai text-white px-6 py-12 lg:px-10 lg:pt-20 lg:pb-28  shadow-lg">
                    <div
                        key={current}
                        className="flex flex-col items-start gap-6 transition-all duration-300 ease-in-out"
                    >
                        <div className="relative">
                            <div className="bg-white px-1 py-2 rounded-md">
                                <Image
                                    src={image}
                                    alt={name}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div className="absolute top-0 left-0 translate-x-2 translate-y-2 w-full h-full border-2 border-mai rounded-md -z-10"></div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg font-sans">{name}</h4>
                            <p className="text-sm mb-4">{title}</p>
                            <p className="leading-relaxed text-md sm:text-base  md:text-base">{text}</p>
                        </div>
                    </div>

                    {/* Arrows */}
                    <div className="absolute top-4 right-4 flex gap-1 z-10">
                        <button
                            onClick={prevSlide}
                            className="bg-white text-black p-1 hover:bg-gray-200 transition"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white text-black p-1 hover:bg-gray-200 transition"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Optional Debug Index */}
                    <p className="absolute bottom-4 right-4 text-xs text-gray-300">
                        Slide {current + 1} of {testimonials.length}
                    </p>
                </div>
            </div>
        </section>
    );
}
