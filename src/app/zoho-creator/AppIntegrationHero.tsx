import { FaCheckCircle } from "react-icons/fa";

export default function AppIntegrationHero() {
    return (
        <section className="w-full py-10 px-2 bg-white">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                {/* Heading */}
                <h1 className="text-3xl text-gray-700 md:text-5xl font-extrabold mb-3">
                    Connect all your business apps without coding
                </h1>
                {/* Subheading */}
                <p className="text-gray-700 text-base md:text-lg mb-6">
                    Integrate your cloud apps to share data and perform actions automatically.
                </p>
                {/* Feature badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <span className="flex items-center gap-2 text-base font-semibold text-black">
                        <FaCheckCircle className="text-mai" />
                        1000+ application ecosystem
                    </span>
                    <span className="flex items-center gap-2 text-base font-semibold text-black">
                        <FaCheckCircle className="text-mai" />
                        Click and configure
                    </span>
                    <span className="flex items-center gap-2 text-base font-semibold text-black">
                        <FaCheckCircle className="text-mai" />
                        Zero backend configurations
                    </span>
                </div>
                {/* Button */}
                <button className="bg-blue-700 hover:bg-blue-800 text-white bg-mai font-bold px-8 py-3 rounded transition mb-6">
                    LEARN MORE
                </button>
            </div>
            {/* App Integration Diagram */}
            <div className="flex justify-center mt-6 w-9/12 mx-auto">
                {/* Replace the src below with your actual diagram image */}
                <img
                    src="/images/zoho/zoho-creator/business-app-code.jpg"
                    alt="App Integration Ecosystem"
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
}
