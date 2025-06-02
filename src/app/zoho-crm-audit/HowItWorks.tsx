import { FaClipboardList, FaSearch, FaPhoneAlt } from "react-icons/fa";

const steps = [
    {
        id: 1,
        icon: <FaClipboardList className="text-3xl text-indigo-600" />,
        title: "You submit your CRM details",
        description:
            "Share your CRM access or export files with us. This helps us understand how you currently manage leads, contacts, and workflows.",
    },
    {
        id: 2,
        icon: <FaSearch className="text-3xl text-indigo-600" />,
        title: "We analyze & audit your CRM",
        description:
            "Our team performs an in-depth audit to uncover gaps, inefficiencies, and missed opportunities in your CRM usage and setup.",
    },
    {
        id: 3,
        icon: <FaPhoneAlt className="text-3xl text-indigo-600" />,
        title: "Receive a personalized report & call",
        description:
            "You will get a tailored report with actionable insights, followed by a consultation call to walk through findings and recommendations.",
    },
];

export default function HowItWorks() {
    return (
        <div className="max-w-7xl mx-auto">
            <section className="md:my-16 my-10 max-w-4xl mx-auto bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">How it works</h2>
                <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
                    Our CRM audit process is simple and effective. Here how we help you unlock your CRMs full potential.
                </p>
                <div className="flex flex-col md:gap-20 gap-10">
                    {steps.map((step, idx) => (
                        <div data-aos="fade-up"
                            key={step.id}
                            className={`
              relative flex flex-col md:flex-row items-center md:items-stretch
              ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
              gap-8 md:gap-12
            `}
                        >
                            {/* Step number in background */}
                            <span className={`
              absolute text-[7rem] font-extrabold text-gray-200 select-none z-20 hidden md:block
               -translate-y-1/2
              ${idx % 2 === 1 ? "md:-right-24 md:left-auto left-1/2 -translate-x-1/2 md:translate-x-0" : "md:-left-24 md:right-auto left-1/2 -translate-x-1/2 md:translate-x-0"}
              pointer-events-none
            `}>
                                {String(step.id).padStart(2, "0")}
                            </span>
                            {/* Card */}
                            <div className="relative z-10 hover:bg-mai cursor-pointer bg-white shadow-lg rounded-md p-6 flex flex-col items-center w-full max-w-[300px] mx-auto md:mx-0">
                                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 shadow">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-700 mb-2 text-center">{step.title}</h3>
                            </div>
                            {/* Description */}
                            <div className="w-full md:w-1/3 flex flex-col justify-center z-10">
                                <p className={`
                text-gray-700 text-md
                ${idx % 2 === 1 ? "text-center md:text-right" : "text-center md:text-left"}
              `}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
