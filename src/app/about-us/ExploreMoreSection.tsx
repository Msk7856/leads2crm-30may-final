export default function ExploreMoreSection() {
    return (
        <section className="bg-[#eaf2e3] rounded-2xl px-2 md:p-8 w-full max-w-7xl mx-auto my-6">
            <div className="flex flex-col md:flex-row items-stretch">
                {/* Left: Heading and pattern */}
                <div className="relative flex-shrink-0 flex flex-col items-start justify-center w-full md:w-1/4 pb-8 px-6 md:pr-0 md:pl-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-0 mt-4 leading-tight text-[#1a2734]">
                        Explore<br />More
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
                <div className="flex-1 flex flex-col md:grid md:grid-cols-3 md:divide-x divide-[#dbead3] space-y-6 md:space-y-0">
                    {/* Card 1: Careers */}
                    <div className="flex flex-col items-start px-6 py-8 bg-transparent">
                        <span className="mb-3">
                            {/* Careers Icon */}
                            <svg width="36" height="36" fill="none" stroke="#1a2734" strokeWidth="2">
                                <circle cx="18" cy="18" r="16" stroke="#bcd6b6" strokeWidth="2" />
                                <circle cx="18" cy="15" r="4" />
                                <path d="M10 28c1-4 13-4 14 0" />
                            </svg>
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a2734] mb-1">Careers</h3>
                        <p className="text-[#4a5a53] text-base mb-4">
                            Join a team thats out to change the way the world works.
                        </p>
                        <a href="/hire-talent" className="flex items-center text-[#1a2734] font-semibold group">
                            Learn More
                            <span className="ml-1 text-lg group-hover:translate-x-1 transition">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 9h8M11 5l4 4-4 4" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    {/* Card 2: Blog */}
                    <div className="flex flex-col items-start px-6 py-8 bg-transparent">
                        <span className="mb-3">
                            {/* Blog Icon */}
                            <svg width="36" height="36" fill="none" stroke="#1a2734" strokeWidth="2">
                                <rect x="8" y="10" width="20" height="16" rx="3" stroke="#bcd6b6" strokeWidth="2" />
                                <path d="M12 16h12M12 20h8" />
                                <rect x="14" y="6" width="8" height="4" rx="1" />
                            </svg>
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a2734] mb-1">Blog</h3>
                        <p className="text-[#4a5a53] text-base mb-4">
                            Learn about digital transformation, borderless hiring, and more.
                        </p>
                        <a href="/blog" className="flex items-center text-[#1a2734] font-semibold group">
                            Learn More
                            <span className="ml-1 text-lg group-hover:translate-x-1 transition">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 9h8M11 5l4 4-4 4" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    {/* Card 3: Resources */}
                    <div className="flex flex-col items-start px-6 py-8 bg-transparent">
                        <span className="mb-3">
                            {/* Resources Icon */}
                            <svg width="36" height="36" fill="none" stroke="#1a2734" strokeWidth="2">
                                <rect x="8" y="8" width="16" height="20" rx="3" stroke="#bcd6b6" strokeWidth="2" />
                                <rect x="12" y="12" width="8" height="12" rx="1" />
                                <path d="M16 16v4" />
                            </svg>
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a2734] mb-1">Resources</h3>
                        <p className="text-[#4a5a53] text-base mb-4">
                            Discover how to put Adaptive Hiring to work for your business.
                        </p>
                        <a href="/resource" className="flex items-center text-[#1a2734] font-semibold group">
                            Learn More
                            <span className="ml-1 text-lg group-hover:translate-x-1 transition">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 9h8M11 5l4 4-4 4" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
