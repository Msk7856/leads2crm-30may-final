'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    // {
    //     question: "Is the Zoho CRM audit really free?",
    //     answer: "Yes, the audit is completely free with no obligations or hidden costs.",
    // },
    {
        question: "How long does the audit process take?",
        answer: "Typically, you will receive your personalized audit report within 3-5 business days.",
    },
    {
        question: "What do I need to provide for the audit?",
        answer: "We will ask for basic details about your current CRM setup and business processes. No sensitive data required.",
    },
    {
        question: "Will someone follow up with me after the audit?",
        answer: "Yes, we will schedule a free consultation call to discuss your audit report and answer any questions.",
    },
    {
        question: "Who performs the CRM audit?",
        answer: "Our experienced Zoho CRM consultants with 5+ years in the GCC region conduct each audit personally.",
    },
    {
        question: "Can I request an audit if I use a CRM other than Zoho?",
        answer: "Absolutely! We audit all major CRMs and provide recommendations for Zoho CRM migration if relevant.",
    },
    {
        question: "Is my business data safe and confidential?",
        answer: "Your privacy is our priority. We only use your information for the audit and never share it.",
    },
    {
        question: "What happens after I receive my audit report?",
        answer: "You will get actionable recommendations and a free call to discuss next steps, but there is no obligation to buy anything.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="mb-16 max-w-4xl mx-auto text-gray-700 py-10 px-2">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <dl className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-sm hover:bg-gray-100 border-b-2 border-gray-100">
                        <dt>
                            <button
                                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-panel-${idx}`}
                            >
                                <span>{faq.question}</span>
                                <span>
                                    {openIndex === idx ? (
                                        <ChevronUp className="w-5 h-5 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                            </button>
                        </dt>
                        <dd
                            id={`faq-panel-${idx}`}
                            className={`px-5 pb-4 text-gray-600 text-base transition-all duration-300 ${openIndex === idx ? "block" : "hidden"
                                }`}
                        >
                            {faq.answer}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
