import { FiUserCheck, FiClipboard, FiBookOpen, FiMessageCircle } from "react-icons/fi";

const whyChooseUsCards = [
    {
        title: "CRM Experts",
        desc: "Trusted Zoho CRM Experts with 5+ years experience",
        icon: <FiUserCheck className="w-9 h-9 text-[#1a2734] bg-[#bcd6b6] bg-opacity-30 rounded-full p-2" />,
        link: "/hire-talent",
        linkText: "Learn More",
    },
    {
        title: "100+ Audits",
        desc: "100+ successful CRM audits for GCC businesses",
        icon: <FiClipboard className="w-9 h-9 text-[#1a2734] bg-[#bcd6b6] bg-opacity-30 rounded-full p-2" />,
        link: "/blog",
        linkText: "Learn More",
    },
    {
        title: "Personalized Advice",
        desc: "Personalized recommendations, not generic advice",
        icon: <FiBookOpen className="w-9 h-9 text-[#1a2734] bg-[#bcd6b6] bg-opacity-30 rounded-full p-2" />,
        link: "/resource",
        linkText: "Learn More",
    },
    {
        title: "Free Follow-Up",
        desc: "Free follow-up consultation to discuss audit results",
        icon: <FiMessageCircle className="w-9 h-9 text-[#1a2734] bg-[#bcd6b6] bg-opacity-30 rounded-full p-2" />,
        link: "/resource",
        linkText: "Learn More",
    },
];

export default function WhyChooseUs() {
    return (
        <div className="bg-white p-6">
            <section className="bg-[#eaf2e3] rounded-2xl px-2 md:p-8 w-full max-w-7xl mx-auto my-6">
                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left: Heading and pattern */}
                    <div className="relative flex-shrink-0 flex flex-col items-start justify-center w-full md:w-1/4 pb-8 px-6 md:pr-0 md:pl-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-0 mt-4 leading-tight text-[#1a2734]">
                            Why Choose Us?
                        </h2>
                        {/* Subtle geometric pattern - SVG */}
                        <svg
                            className="absolute left-0 bottom-0 w-40 h-24 sm:w-56 sm:h-40 opacity-40 text-[#bcd6b6] pointer-events-none"
                            fill="none"
                            viewBox="0 0 224 160"
                        >
                            <defs>
                                <pattern id="pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                                    <path d="M16 0a16 16 0 1 1-16 16" stroke="currentColor" strokeWidth="1" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="224" height="160" fill="url(#pattern)" />
                        </svg>
                    </div>
                    {/* Right: Cards */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#dbead3]">
                        {whyChooseUsCards.map((card, idx) => (
                            <div key={idx} className="flex flex-col items-start px-6 py-8 bg-transparent">
                                <span className="mb-3">{card.icon}</span>
                                <h3 className="text-lg sm:text-xl font-bold text-[#1a2734] mb-1">{card.title}</h3>
                                <p className="text-[#4a5a53] text-base mb-4">{card.desc}</p>
                                <a href={card.link} className="flex items-center text-[#1a2734] font-semibold group">
                                    {card.linkText}
                                    <span className="ml-1 text-lg group-hover:translate-x-1 transition">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 9h8M11 5l4 4-4 4" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
