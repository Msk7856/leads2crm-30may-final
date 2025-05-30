// components/FAQ.jsx
'use client'
import { useEffect, useState } from "react";

const faqs = [
    {
        question: "How to choose a mobile app development platform?",
        answer:
            `Before choosing a mobile app development platform, consider answering these basic questions
1) Who is the target audience of your app?
2) What are the users expectations?
3) What are the development costs?
4) What are the security implications?
5) How well will the mobile app development platform integrate with other platforms`,
    },
    {
        question:
            "What is the difference between cross platform apps development and native mobile app development?",
        answer:
            "Native mobile apps are developed using the platforms own programming languages and tools (like Swift for iOS or Kotlin for Android), which means they can fully leverage the device’s features and deliver the best performance and user experience. However, this approach requires separate development for each platform, which can be time-consuming and expensive. Not to mention, locating a native app developer can be more challenging compared to a cross-platform app developer. Cross platform app development lets you write your code once and deploy it on both platforms using frameworks like React Native. This method speeds up development and reduces costs, as you avoid duplicating effort. While cross-platform apps strive for a near-native experience, they might not always match the performance of apps built specifically for each platform.",
    },
    {
        question: "Can cross-platform apps offer the same performance as native apps?",
        answer:
            "Cross-platform mobile apps have come a long way and can offer performance close to native mobile apps, especially with modern frameworks like React Native. While native apps are still the best in terms of performance and user experience, cross-platform development is a great alternative. It allows for quicker development, lower costs, and easier maintenance. For many businesses, the small drop in performance is worth these benefits, making cross-platform development a smart and efficient choice.",
    },
    {
        question: "Why choose Intellectsoft mobile app development services?",
        answer:
            "With over a decade of expertise and a team fluent in Swift, Kotlin, and React Native, we build standout mobile experiences that resonate with users. As your business evolves, scale up effortlessly with our highly skilled, motivated team that embodies a culture of excellence and delivery. We ensure you have the right resources at the right time and in the right region, adapting to your changing needs seamlessly. From initial concept to launch and beyond, our dedicated team partners with you every step of the way, delivering not just a product but a success story.",
    },
    {
        question: "How do we make sure mobile apps work well on all devices and screen sizes?",
        answer:
            "We use smart design techniques and test on a wide range of devices to ensure your app looks and works great everywhere. By checking it on both emulators and real devices, we ensure it adapts perfectly to different screen sizes and resolutions, so your app always delivers a smooth experience.",
    },
    {
        question: "What are some security considerations for mobile app development?",
        answer:
            "Our experts prioritize your app’s security by using encryption to protect sensitive data and employing secure authentication methods. We also adhere to industry standards like OWASP/ASVS and ensure compliance with regulations like GDPR and HIPAA.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);


    return (
        <section id="faq" className="max-w-6xl md:mx-auto mx-4 p-6 my-10 rounded-xl px-6 bg-gradient-to-b from-mai to-[#0000ff43]">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-700">F.A.Q.</h2>
            <div className="divide-y divide-gray-300 border-gray-300 border-t border-b">
                {faqs.map((faq, idx) => (
                    <div key={idx} data-aos="fade-up">
                        <button
                            className="flex justify-between items-center w-full py-5 text-left font-medium text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            aria-expanded={openIndex === idx}
                            aria-controls={`faq-answer-${idx}`}
                        >
                            <span className="hover:text-gray-100 md:text-lg text-sm">{faq.question}</span>
                            <svg
                                className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            id={`faq-answer-${idx}`}
                            // data-aos="fade-up"
                            className={`overflow-hidden transition-all pb-4 duration-300 text-gray-100 text-lg ${openIndex === idx ? "max-h-40 py-2" : "max-h-0"
                                }`}
                            aria-hidden={openIndex !== idx}
                        >
                            {openIndex === idx && <p className="text-sm ">{faq.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
