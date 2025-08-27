import { TrendingUp, BarChart3, Globe } from "lucide-react";

const results = [
    {
        value: "30%+",
        title: "Faster Sales Cycle",
        description:
            "Achieved for a leading manufacturing company through streamlined lead management and sales automation.",
        icon: TrendingUp,
    },
    {
        value: "70%",
        title: "Reduction in Manual Data Entry",
        description:
            "Realized by a professional service firm by implementing custom workflows and automated data capture.",
        icon: BarChart3,
    },
    {
        value: "100%",
        title: "Visibility Across Teams",
        description:
            "Delivered for an enterprise group by unifying reporting dashboards and cross-departmental access.",
        icon: Globe,
    },
];

export function CaseStudies() {
    return (
        <section id="results" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl font-headline font-bold tracking-tight text-mai sm:text-5xl">
                        Delivering Measurable Results
                    </h1>
                    <p className="mt-4 text-xl text-center text-gray-700">
                        Our solutions are not just about technology — they drive real
                        business impact across industries.
                    </p>
                </div>

                {/* Regional Trust */}
                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-center italic text-gray-800">
                        " 🌍 Trusted by Businesses in <span className="text-orange-500">Saudi Arabia</span>,{" "}
                        <span className="text-orange-500">Dubai</span>, and Beyond "
                    </p>
                </div>

                {/* Results Grid */}
                <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {results.map((result, index) => {
                        const Icon = result.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col border border-gray-200 items-center text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-4">
                                    <Icon className="h-7 w-7 text-orange-500" />
                                </div>
                                <span className="text-6xl md:text-7xl font-extrabold text-orange-500 font-headline">
                                    {result.value}
                                </span>
                                <h3 className="mt-4 text-2xl text-black font-bold font-headline">
                                    {result.title}
                                </h3>
                                <p className="mt-2 text-center text-gray-700">{result.description}</p>
                            </div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}
