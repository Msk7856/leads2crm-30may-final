// components/CRMHomeBuyerJourney.tsx

export default function CRMHomeBuyerJourney() {
    return (
        <section className="w-full py-12 px-4 bg-white">
            {/* Heading and Subheading */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl md:text-5xl text-gray-700 font-extrabold mb-4">
                    One CRM for Every Stage of Your<br className="hidden md:inline" /> Home Buyer Journey
                </h1>
                <p className="text-gray-700 text-base text-center md:text-lg">
                    An automated solution to sell properties faster. From lead capture to distribution, site-visit, and conversion, ensure 100% buyer engagement.
                </p>
            </div>

            {/* Journey Flow */}
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl">
                    {/* Left: Property & Channel Partner */}
                    <img src="/images/zoho/zoho-crm/Buyer-journey-Real-Estate-CRM.svg" alt="" />
                </div>

            </div>
        </section>
    );
}
