import { useState } from "react";

const faqs = [
    {
        question: "What is an enterprise architect?",
        answer:
            "Enterprise architects are responsible for conceptualizing and putting in place a standardized set of processes that help align a businesses IT infrastructure with their IT operations and strategic business goals. An enterprise architects role in charting the enterprise architecture is critical for digital transformation and IT modernization.",
    },
    {
        question: "Can I create an app on Creator for free?",
        answer:
            "Yes, and with Creator's low-code capabilities, you can either start from scratch, or with an existing database, to build, manage, and scale cloud-based applications. Explore available plans and the full set of features here.",
    },
    {
        question: "What is the goal of enterprise architecture?",
        answer: "Enterprise architecture was originally conceived to ensure synergy between a business IT infrastructure, operational processes, and business strategy. In the era of digital innovation, the goal of enterprise architecture has evolved to become even more pivotal. Today, enterprise architectures main purpose is to effect and further business objectives and competitiveness through the optimal use and application of digital technologies.",
    },
    {
        question: "What are enterprise architecture frameworks?",
        answer: "Enterprise architecture frameworks provide a broad set of principles, practices, and procedures to effectively design, develop, and apply the architecture. It acts as a guiding force to structure an enterprise architects approach, by breaking the architecture into meaningful tenets or layers. The framework helps manage the choice, scale, and complexities of digital technologies and their interplay.",
    },
    {
        question: "What is the future of enterprise architecture?",
        answer: "As per the IDC, by 2024, 80% of digitally advanced organizations will replace the walled garden, IT-as-an-enabler model with a self-service model. This means enterprise architects will need to be empowered with the right kind of technologies and customer-centric vendors to ensure their quick ascendancy from an enabler to a driver of digital innovation.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
            {/* Icon and Heading */}
            <div className="flex flex-col items-center mb-8">
                {/* Icon */}
                <span className="mb-2">
                    <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                        <rect width="48" height="48" rx="12" fill="#f6f0fa" />
                        <g stroke="#c33" strokeWidth="2">
                            <rect x="14" y="14" width="20" height="20" rx="4" />
                            <path d="M24 19v6M24 31h.01" strokeLinecap="round" />
                        </g>
                    </svg>
                </span>
                <h2 className="text-3xl font-extrabold text-center text-gray-700 my-4">Frequently Asked Questions</h2>
            </div>
            {/* FAQ List */}
            <div className="divide-y divide-gray-200">
                {faqs.map((faq, idx) => (
                    <div key={faq.question}>
                        <button
                            className={`w-full flex items-start gap-4 py-6 transition text-left select-text
                ${openIndex === idx ? "font-bold text-[#c33]" : "font-normal text-black"}
              `}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            aria-expanded={openIndex === idx}
                            aria-controls={`faq-panel-${idx}`}
                        >
                            <span className="mt-1 text-2xl font-bold transition" style={{ color: "#c33" }}>
                                {openIndex === idx ? "−" : "+"}
                            </span>
                            <span className="text-lg">{faq.question}</span>
                        </button>
                        {/* Answer */}
                        {openIndex === idx && faq.answer && (
                            <div
                                id={`faq-panel-${idx}`}
                                className="pl-9 pb-6 text-base text-gray-700 animate-fade-in"
                            >
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
