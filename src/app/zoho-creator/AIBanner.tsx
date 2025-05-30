// components/AIBannerExact.tsx

export default function AIBannerExact() {
    return (
        <section className="w-full   justify-center items-center py-8 px-2">
            <div className="w-full max-w-7xl mx-auto rounded-xl bg-[#120b4b] flex flex-col md:flex-row items-center justify-between px-10 py-10 shadow-lg gap-8 md:gap-0">
                {/* Left: Icon and headline */}
                <div className="flex items-center gap-8 w-full md:w-auto justify-center md:justify-start">
                    {/* Glowing icon */}
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#1b0e6e] w-16 h-16 shadow-[0_0_40px_10px_rgba(123,123,255,0.25)]">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g filter="url(#a)">
                                <rect x="8" y="8" width="20" height="20" rx="10" fill="#1b0e6e" />
                                <path d="M18 13.5l1.5 3h3l-2.25 2.25L21 21l-3-1.5L15 21l.75-2.25L13.5 16.5h3L18 13.5z" fill="#fff" />
                            </g>
                            <defs>
                                <filter id="a" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse">
                                    <feGaussianBlur stdDeviation="4" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    {/* Headline */}
                    <h2 className="text-2xl md:text-6xl font-extrabold text-white md:leading-tight">
                        Witness the{" "}
                        <span className="bg-gradient-to-r from-mai to-[#0535d4] text-transparent bg-clip-text">
                            power of<br className="hidden md:block" /> app creation
                        </span>{" "}
                        with AI
                    </h2>
                </div>
                {/* Right: Button */}
                <div data-aos="fade-up" className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
                    <a href="/zoho-creator" className="relative group">
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7b7bff] to-[#7be0ff] opacity-70 blur-[8px] group-hover:opacity-90 transition" style={{ zIndex: 1 }} />
                        <button
                            className="relative z-10 bg-white text-[#120b4b] font-semibold rounded px-4 py-3 text-lg shadow hover:shadow-xl transition flex items-center gap-2"
                            style={{ minWidth: 240 }}
                        >
                            Try Launchpad now
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 11h12M13 7l4 4-4 4" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
