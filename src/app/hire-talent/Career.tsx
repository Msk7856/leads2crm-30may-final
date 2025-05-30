// components/CareersHero.tsx
import Image from "next/image";

export default function CareersHero() {
    return (
        <section className="bg-gray-100 rounded-2xl mx-4  mb-4 p-0 md:p-10 flex items-center min-h-[600px]">
            <div className="flex flex-col md:flex-row w-full h-full">
                {/* Left side: Text and Button */}
                <div className="flex-1 flex flex-col justify-center pl-10 pr-4 py-12">
                    <h1 className="text-6xl font-extrabold text-[#171717] mb-6 leading-tight">Careers</h1>
                    <p className="text-[#171717] text-lg mb-8 max-w-lg">
                        If you are looking for a job where you learn something new each day and getting bored is out of the question, then Lead2CRM is the perfect place for you. If you fit the bill, scroll down and see the openings we presently have!
                    </p>
                    <a href="#jobopening">
                        <button className="bg-mai hover:bg-maihover text-white font-semibold px-8 py-3  shadow transition text-lg mt-2"
                            style={{ boxShadow: "0 4px 12px 0 rgba(255,136,46,0.10)" }}>
                            See Openings
                        </button>
                    </a>
                </div>
                {/* Right side: Image */}
                <div className="flex-1 flex items-end justify-end relative pr-6 pb-6">
                    <div className="relative w-full h-full rounded-2xl  overflow-hidden">
                        <Image
                            src="/images/education.png" // Use your image path here
                            alt="Team working together"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
