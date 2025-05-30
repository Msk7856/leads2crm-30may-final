// components/ZiaHero.tsx

export default function ZiaHero() {
    return (
        <section className="w-full flex flex-col items-center justify-center pt-14 pb-10 bg-white">
            {/* Heading */}
            <h1 className="text-[48px] md:text-[64px] font-extrabold text-center leading-[1.1] text-black mb-6">
                Collaborate with Zia<br />to build smart apps
            </h1>
            {/* Subheading */}
            <p className="text-lg md:text-xl text-center text-[#222] max-w-2xl mb-8 font-semibold">
                Leverage the power of AI to create apps quickly and effortlessly<br className="hidden md:block" />
                —just tell Zia what you need and it delivers, whether its a simple field suggestion or a detailed process workflow.
            </p>
            {/* Button */}
            <a href="#explore" className="mb-10">
                <button className="bg-black text-white px-8 py-3 font-semibold text-lg flex items-center gap-2 hover:bg-[#222] transition">
                    Explore more
                    <span>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 11h12M13 7l4 4-4 4" />
                        </svg>
                    </span>
                </button>
            </a>
            {/* Screenshot/Browser Frame */}
            <div data-aos="fade-up" className="w-full flex justify-center ">
                <div className="rounded-xl border-4 border-mai  overflow-hidden w-11/12 md:w-7/12 shadow-2xl shadow-gray-400">

                    <div className="flex flex-col items-center justify-center bg-white ">
                        <video
                            autoPlay
                            loop
                            muted

                            src="/images/zoho/zoho-creator/create-app.mp4"

                            className="rounded"
                        >
                        </video>

                    </div>
                </div>
            </div>
        </section>
    );
}
