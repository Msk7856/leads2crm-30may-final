'use client'
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TakeUsForASpin from "./TakeUsForASpin";

const tabs = [
    "Teamspaces",
    "Zia Module Creation",
    "Zia Custom Design",
];

const videos = [
    {
        src: "/video/crm-for-everyone.mp4",
        alt: "Teamspaces video",
    },
    {
        src: "/video/zia-module-creation.mp4",
        alt: "Zia Module Creation video",
    },
    {
        src: "/video/ziachat-answers.mp4",
        alt: "Zia Custom Design video",
    },
];

export default function ZohoBanner() {
    const [activeTab, setActiveTab] = useState(2);

    // Optional: Arrow navigation (wraps around)
    const goPrev = () => setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
    const goNext = () => setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));

    return (
        <div className="bg-[#ffffff2f] min-h-screen flex flex-col items-center pt-10">
            <div className="max-w-8xl w-full pt-10">
                <div className="mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl text-center text-mai font-semibold">
                        Teams that work together,<br /> win together
                    </h1>
                    <p className="text-xl md:text-3xl mx-auto px-4 md:px-36 text-center text-black">
                        Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team — all with some AI assistance, of course. Start winning more, together.
                    </p>
                </div>
                <div className="flex justify-center gap-4 my-8">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(i)}
                            className={`px-4 py-2 rounded-full hidden md-block text-base font-medium transition ${activeTab === i
                                ? "bg-[#fff7ed] shadow text-black border border-[#f5c99c]"
                                : "bg-transparent text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="text-center text-black my-6 px-4 text-lg font-medium">
                    Set up a dedicated space for each team. Let teams work with the data they need and nothing else.
                </div>
                <div className="flex overflow-hidden justify-center items-center relative">
                    {/* Left Arrow */}
                    <button
                        onClick={goPrev}
                        aria-label="Previous video"
                        className="absolute left-4 md:left-16 z-10 bg-[#f5c99c] hover:bg-[#ffe3c1] text-[#232c4d] p-2 md:p-3 rounded-full shadow transition"
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    {/* Video */}
                    <video
                        key={videos[activeTab].src}
                        src={videos[activeTab].src}
                        autoPlay
                        loop
                        muted
                        // controls
                        className="w-10/12 h-full object-cover rounded-2xl"
                        poster="/video/placeholder.jpg" // Optional: poster image
                    >
                        Sorry, your browser does not support embedded videos.
                    </video>
                    {/* Right Arrow */}
                    <button
                        onClick={goNext}
                        aria-label="Next video"
                        className="absolute right-4 md:right-16 md:p-3 z-10 bg-[#f5c99c] hover:bg-[#ffe3c1] text-mai p-2 rounded-full shadow transition"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
                <TakeUsForASpin />
            </div>
        </div>
    );
}
