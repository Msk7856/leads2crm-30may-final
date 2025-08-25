import Image from "next/image";

const logos = [
    { src: "https://placehold.co/150x60.png", alt: "Zoho Logo", hint: "zoho logo" },
    { src: "https://placehold.co/150x60.png", alt: "Partner Company 1", hint: "tech company" },
    { src: "https://placehold.co/150x60.png", alt: "Partner Company 2", hint: "saas logo" },
    { src: "https://placehold.co/150x60.png", alt: "Partner Company 3", hint: "software logo" },
    { src: "https://placehold.co/150x60.png", alt: "Partner Company 4", hint: "enterprise software" },
];

export function TrustAuthority() {
    return (
        <section id="trust" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl  text-center sm:text-4xl font-headline font-bold tracking-tight text-mai">
                        Trusted by Businesses in Saudi Arabia, Dubai, Indai, <br />  and Beyond
                    </h2>
                    <p className="mt-4 text-center  text-lg text-foreground/70">
                        Top 1% Zoho CRM Consultant recognized for delivering scalable solutions that drive growth and efficiency.
                    </p>
                </div>

                {/* Logos */}
                {/* <div className="mt-12 max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 items-center justify-items-center">
                        {logos.map((logo, index) => (
                            <Image
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={60}
                                data-ai-hint={logo.hint}
                                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
                 */}
                <div className="mt-12 max-w-5xl mx-auto">
                    <video
                        src="/video/crm-for-everyone-home-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-xl shadow-2xl"
                    /></div>

            </div>
        </section>
    );
}
