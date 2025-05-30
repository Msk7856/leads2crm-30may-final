// components/HireReactSteps.tsx
const steps = [
    {
        title: "Requirement Gathering",
        desc: "We understand your technical needs and project goals.",
        icon: (
            <span className="bg-[#f46a4e] text-white rounded-full p-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="16" r="14" />
                    <path d="M16 10v6l4 2" />
                </svg>
            </span>
        ),
    },
    {
        title: "Profile Sharing",
        desc: "Our team provides pre-vetted React.js developers that match your requirements.",
        icon: (
            <span className="bg-[#f46a4e] text-white rounded-full p-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="16" r="14" />
                    <path d="M16 10v6l4 2" />
                </svg>
            </span>
        ),
    },
    {
        title: "Interview & Selection",
        desc: "Based on the profiles you can interview the candidates to finalize the perfect fit.",
        icon: (
            <span className="bg-[#f46a4e] text-white rounded-full p-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="16" r="14" />
                    <path d="M16 10v6l4 2" />
                </svg>
            </span>
        ),
    },
    {
        title: "Quick Onboarding",
        desc: "Seamlessly onboard the React.js developer(s) into your team within 24 hours.",
        icon: (
            <span className="bg-[#f46a4e] text-white rounded-full p-4">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="16" cy="16" r="14" />
                    <path d="M16 10v6l4 2" />
                </svg>
            </span>
        ),
    },
];

export default function HireReactSteps() {
    return (
        <section className="py-12 px-2 md:px-0">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl text-gray-700 font-bold mb-2">Hire React Developers in a mere 24 hours</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    We value your time and ensure a swift onboarding process for your convenience.
                </p>
            </div>
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200 z-0" />
                <div className="space-y-10">
                    {steps.map((step, idx) => (
                        <div key={step.title} className="relative flex items-start z-10">
                            <div className="flex flex-col items-center mr-6">
                                <div className={`w-5 h-5 rounded-full ${idx === 0 ? 'bg-[#222]' : 'bg-gray-300'} mb-2`} />
                                {idx !== steps.length - 1 && (
                                    <div className="flex-1 w-0.5 bg-gray-200" />
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                {step.icon}
                                <div>
                                    <div className="text-lg font-bold mb-1 text-gray-700">Step-{idx + 1} <span className="font-normal">{step.title}</span></div>
                                    <div className="text-gray-600 text-sm">{step.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
