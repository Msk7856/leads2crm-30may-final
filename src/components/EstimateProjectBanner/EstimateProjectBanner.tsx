// EstimateProjectBanner.jsx

import Link from "next/link";

export default function EstimateProjectBanner() {
    return (
        <section className="relative w-full py-10 md:py-20 bg-[#5c5be5] overflow-hidden flex items-center justify-center">
            {/* Decorative circles */}
            <div className="absolute left-4 top-8 w-5 h-5 rounded-full bg-white/80 opacity-80" />
            <div className="absolute left-1/4 top-1/4 w-6 h-6 rounded-full bg-[#a7b6f8] opacity-60" />
            <div className="absolute right-1/4 -top-16 w-64 h-64 rounded-full bg-[#6c6be8] opacity-20" />
            <div className="absolute right-20 top-10 w-28 h-28 rounded-full bg-[#7f8cf8] opacity-40" />
            <div className="absolute right-16 bottom-12 w-16 h-16 rounded-full bg-[#c6e2fa] opacity-80" />
            <div className="absolute left-2 bottom-10 w-4 h-4 rounded-full bg-white/70 opacity-70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <div className="text-[#ffe066] text-lg font-semibold mb-2 text-center">Lets Work Together</div>
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 text-center">
                    Need a successful project?
                </h2>
                <Link href="#contactUs">
                    <button className="bg-white rounded-2xl px-8 py-4 text-[#5c5be5] font-semibold text-lg shadow-md hover:bg-[#f4f4ff] transition">
                        Estimate Project
                    </button>
                </Link>
            </div>
        </section>
    );
}
