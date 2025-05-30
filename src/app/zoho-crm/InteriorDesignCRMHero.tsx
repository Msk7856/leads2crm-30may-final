import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InteriorDesignCRMHero() {
    return (
        <section className="bg-white w-full py-10 px-4 md:px-0">
            <h1 className="text-2xl max-w-6xl mx-auto md:text-5xl md:py-10 py-4 text-center font-extrabold text-mai mb-4 leading-tight">
                Showroom CRM (Kitchen & Interiors),<br />
                Interior Design CRM
            </h1>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-700 mb-4">
                        Optimize client projects with showroom and interior design CRM software
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg mb-3">
                        Managing a showroom for kitchens and interiors involves coordinating multiple client interactions, vendor communications, and project timelines.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-3">
                        Our Showroom CRM is tailored to streamline these processes, providing a centralized platform to manage leads, appointments, and sales efficiently.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-6">
                        Interior Design CRM software integrates client data, project management, and communication tools to enhance customer experience and project delivery.
                    </p>

                </div>
                {/* Right: Image */}
                <div className="flex-1 flex items-center justify-center md:justify-end">
                    <div className="w-full max-w-full m-2 overflow-hidden ">
                        <Image
                            src="/images/zoho/zoho-crm/Customizable-reports.svg"
                            alt="Showroom CRM"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 mt-10">
                {/* Right: Image */}
                <div className="flex-1 flex items-center justify-center md:justify-end">
                    <div className="w-full max-w-full m-2 overflow-hidden ">
                        <Image
                            src="/images/zoho/zoho-crm/Segmentation-of-leads.svg"
                            alt="Customizable CRM"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                            priority
                        />
                        <Link href="/contact-us" className="mt-32 block w-fit">
                            <button
                                className="flex items-center border-4 px-8 py-3 text-lg font-bold bg-mai text-white transition animate-border-color-cycle"
                                style={{ borderColor: "#ffa9a6" }}
                            >
                                Try for free <ArrowRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Left: Text */}
                <div className="flex-1">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-700 mb-4">
                        Create unique client experiences with customizable CRM
                    </h2>
                    <p className="text-[#1a2734] text-base md:text-lg mb-4">
                        Every kitchen and interior design business has unique workflows and client needs.
                    </p>
                    <p className="text-[#1a2734] text-base md:text-lg mb-4">
                        A customizable CRM allows you to tailor pipelines, fields, and stages to fit your specific business processes.
                    </p>
                    <p className="text-[#1a2734] text-base md:text-lg mb-4">
                        Lead2CRM offers flexible customization options to help you nurture client relationships and deliver exceptional results.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-mai">Key Features</h3>
                        <ul className="list-disc ml-5 text-[#1a2734] text-base md:text-lg space-y-1">
                            <li>Lead and appointment management tailored for showrooms</li>
                            <li>Vendor and supplier tracking</li>
                            <li>Project timeline and milestone tracking</li>
                            <li>Customizable workflows and pipelines</li>
                            <li>Integrated communication tools</li>
                            <li>Reporting and analytics specific to interior design projects</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
