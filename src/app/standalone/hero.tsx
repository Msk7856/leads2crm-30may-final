import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function StandalonePage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section
                id="hero"
                className="relative flex flex-1 items-center justify-center text-center px-6 py-20"
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-white to-orange-200 -z-10" />

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-headline text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                        Scale Your Business with a{" "}
                        <span className="text-mai">Zoho CRM</span> Partner You Can
                        Trust
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Stop letting inefficient processes and scattered data hold you back.
                        As a top 1% Zoho CRM consultant, we build scalable systems that
                        streamline operations, boost sales, and give you clarity for
                        confident decision-making.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://calendly.com/your-link"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-1 text-lg font-medium text-white shadow-lg transition hover:bg-orange-400 hover:scale-105"
                        >
                            Book Your Free Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>

                        <Link
                            href="#results"
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 transition hover:bg-gray-100 hover:scale-105"
                        >
                            <PlayCircle className="mr-2 h-5 w-5" />
                            See Our Results
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
