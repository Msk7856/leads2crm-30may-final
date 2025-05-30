'use client'
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const faqs = [
    {
        question: "Can I integrate my favorite apps with Zoho CRM?",
        answer: (
            <>

                {/* <a href="#" className="text-sky-500 underline">Edition Selector</a> */}
                Try our Zoho CRM seamlessly integrates with over 1,000+ applications, and it takes no time to set up and get started. Check out Zoho Marketplace to find out which of your daily-drivers are ready to pair.
            </>
        ),
    },
    {
        question: "How do I know what is the right edition for me?",
        answer: (
            <>
                Try our <a href="#" className="text-sky-500 underline">Edition Selector</a> and answer a few questions about your requirements for a CRM. Based on your choices, well recommend the edition that aligns best with your business goals.
            </>
        ),
    },
    {
        question: "How flexible are the contracts?",
        answer: (
            <>
                You are not bound by any contracts or commitments. Zoho CRM is a pay-as-you-go service (monthly or yearly), so you can make changes to your plan whenever you need to, and upgrade or downgrade at will.
            </>
        ),
    },
    {
        question: "How do I migrate to Zoho CRM?",
        answer: (
            <>
                You can comfortably switch to Zoho from any popular CRM service–even spreadsheets. You can also avail our Jumpstart service that includes everything from requirement gathering to setup and onboarding. Alongside, we have a dedicated program Enterprises looking to move, and well help you get started in no time.
            </>
        ),
    },
    {
        question: "Is Zoho CRM available for my industry?",
        answer: (
            <>
                Zoho CRM is built to serve business of all kinds, and we cater to all industries and verticals. Explore our <a href="#" className="text-sky-500 underline"> industry-specific solutions</a> to learn more, and book a personalized demo to understand how Zoho CRM can be customized to meet your business needs.
            </>
        ),
    },
    {
        question: "Does Zoho CRM have a free plan?",
        answer: (
            <>
                Zoho CRMs freemium edition supports up to 3 users and comes with the essentials like leads, documents, and mobile apps, its a perfect fit for your home business. Alternatively, check out <a href="#" className="text-sky-500 underline">  Bigin by Zoho CRM,</a> built specifically for small businesses, freelancers, and entrepreneurs.
            </>
        ),
    },
    {
        question: "Can I get a demo of Zoho CRM?",
        answer: (
            <>
                Yes, we would be happy to demonstrate Zoho CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact <a href="#" className="text-sky-500 underline">sales@zohocorp.com</a>.
            </>
        ),
    },
];

export default function FAQSlider() {
    const [current, setCurrent] = useState(0);

    const goPrev = () => setCurrent(current === 0 ? faqs.length - 1 : current - 1);
    const goNext = () => setCurrent(current === faqs.length - 1 ? 0 : current + 1);

    return (
        <section className="bg-[#d9def7] min-h-[60vh] flex flex-col justify-center items-center px-4">
            <div className="max-w-6xl w-full mx-auto text-center">
                <h2 className="text-3xl md:text-4xl text-dark font-semibold mb-8">Frequently Asked Questions</h2>
                <div className="relative flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={goPrev}
                        aria-label="Previous FAQ"
                        className="absolute left-0 md:-left-12 top-1/4 -translate-y-1/2 bg-white/30 hover:bg-white shadow p-2 rounded-full transition"
                    >
                        <FaChevronLeft color="black" size={22} />
                    </button>
                    {/* FAQ Content */}
                    <div className="flex-1 px-4 md:px-20">
                        <h3 className="text-xl font-medium mb-4 text-gray-700">{faqs[current].question}</h3>
                        <div className="text-sm md:text-lg text-gray-700 mb-6">
                            {faqs[current].answer}
                        </div>
                    </div>
                    {/* Right Arrow */}
                    <button
                        onClick={goNext}
                        aria-label="Next FAQ"
                        className="absolute right-0 md:-right-12 top-1/4 -translate-y-1/2 bg-white/30 hover:bg-white shadow p-2 rounded-full transition"
                    >
                        <FaChevronRight color="black" size={22} />
                    </button>
                </div>
                {/* Dots */}
                <div className="flex justify-center gap-2 my-4">
                    {faqs.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to FAQ ${i + 1}`}
                            className={`w-3 h-3 rounded-full transition ${i === current ? "bg-gray-800" : "bg-gray-400/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
