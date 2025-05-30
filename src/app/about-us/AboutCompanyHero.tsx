'use client'
import { useState } from "react";

const valuesContent = (
    <div className="grid grid-cols-2 gap-x-12 gap-y-6 my-2">
        <div className="flex items-center text-white text-lg font-normal">
            <span className="inline-block w-5 text-center text-[#bdbdbd] mr-2">—</span>
            Innovation
        </div>
        <div className="flex items-center text-white text-lg font-normal">
            <span className="inline-block w-5 text-center text-[#bdbdbd] mr-2">—</span>
            Commitment
        </div>
        <div className="flex items-center text-white text-lg font-normal">
            <span className="inline-block w-5 text-center text-[#bdbdbd] mr-2">—</span>
            Customer Focus
        </div>
        <div className="flex items-center text-white text-lg font-normal">
            <span className="inline-block w-5 text-center text-[#bdbdbd] mr-2">—</span>
            Excellence
        </div>
        <div className="flex items-center text-white text-lg font-normal">
            <span className="inline-block w-5 text-center text-[#bdbdbd] mr-2">—</span>
            Empowering Talent
        </div>
        <div className="flex items-center text-white text-lg font-normal">
            <span className="inline-block w-5 text-center text-[#bdbdbd] mr-2">—</span>
            Teamwork
        </div>
    </div>
);

const missionContent = (
    <div className="my-2 text-white text-lg font-normal max-w-sm">
        Our mission is to empower businesses with innovative CRM solutions that streamline operations, enhance customer relationships, and drive sustainable growth.
    </div>
);

const visionContent = (
    <div className="my-2 text-white text-lg font-normal max-w-sm">
        Our vision is to be a global leader in CRM technology, renowned for excellence, customer focus, and a commitment to empowering talent and teamwork.
    </div>
);

export default function AboutCompanyHero() {
    const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values" | null>("values");

    return (
        <section className="relative mt-16 w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background video with dark overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/video/crm-for-everyone-home-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6">
                {/* Left: Heading and Play */}
                <div className="flex flex-col justify-center h-full md:w-1/4 w-full mb-8 md:mb-0">
                    <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-8 tracking-wide">
                        ABOUT COMPANY
                    </h2>
                    <p className="text-white text-base "> Lead2CRM is a Saudi-based tech company offering expert Zoho CRM solutions, mobile apps, web apps, and custom software development. We help businesses automate, scale, and grow by providing tailored digital solutions that meet their specific needs.</p>

                </div>
                {/* Center: Values List (only show on large screens) */}

                {/* Right: Mission, Vision, Values */}
                <div className="flex hidden md:block flex-col items-end md:w-1/5 space-y-2 w-full my-6 md:mt-0">
                    <button
                        className={`uppercase text-sm font-semibold mb-3 tracking-wider px-6 py-2 rounded-full transition
    ${activeTab === "mission"
                                ? "bg-[#bdbdbd] text-[#222] shadow"
                                : "bg-transparent text-[#bdbdbd] hover:text-white"
                            }
  `}
                        onClick={() => setActiveTab(activeTab === "mission" ? null : "mission")}
                    >
                        OUR MISSION
                    </button>
                    <button
                        className={`uppercase text-sm font-semibold mb-3 tracking-wider px-6 py-2 rounded-full transition
    ${activeTab === "vision"
                                ? "bg-[#bdbdbd] text-[#222] shadow"
                                : "bg-transparent text-[#bdbdbd] hover:text-white"
                            }
  `}
                        onClick={() => setActiveTab(activeTab === "vision" ? null : "vision")}
                    >
                        OUR VISION
                    </button>
                    <button
                        className={`uppercase text-sm font-semibold mb-3 tracking-wider px-6 py-2 rounded-full transition
    ${activeTab === "values"
                                ? "bg-[#bdbdbd] text-[#222] shadow"
                                : "bg-transparent text-[#bdbdbd] hover:text-white"
                            }
  `}
                        onClick={() => setActiveTab(activeTab === "values" ? null : "values")}
                    >
                        OUR VALUES
                    </button>
                    {/* Toggleable Content Panel */}
                    {activeTab && (
                        <div className="absolute hidden md:block right-1/4 top-1/2 transform -translate-y-1/2 bg-black/10 rounded-sm p-6 mt-6 max-w-full z-20">
                            {activeTab === "values" && valuesContent}
                            {activeTab === "mission" && missionContent}
                            {activeTab === "vision" && visionContent}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
