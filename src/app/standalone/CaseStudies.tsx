import { CheckCircle } from "lucide-react";

const results = [
    {
        value: "30%+",
        title: "Faster Sales Cycle",
        description:
            "Achieved for a leading manufacturing company through streamlined lead management and sales automation.",
    },
    {
        value: "70%",
        title: "Reduction in Manual Data Entry",
        description:
            "Realized by a professional service firm by implementing custom workflows and automated data capture.",
    },
];

export function CaseStudies() {
    return (
        <section id="results" className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl font-headline font-bold tracking-tight text-mai sm:text-4xl">
                        Delivering Measurable Results
                    </h1>
                    <p className="mt-4 text-xl text-center text-gray-700">
                        Our solutions are not just about technology; they are about driving
                        real business impact.
                    </p>
                </div>

                {/* Results Grid */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="flex flex-col border items-center text-center p-8 rounded-xl bg-white shadow hover:shadow-xl transition-transform hover:-translate-y-2"
                        >
                            <div className="flex items-baseline">
                                <span className="text-6xl md:text-7xl font-extrabold text-orange-400 font-headline">
                                    {result.value}
                                </span>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold font-headline">
                                {result.title}
                            </h3>
                            <p className="mt-2 text-foreground/70">{result.description}</p>
                            <div className="mt-4 flex items-center text-green">
                                <CheckCircle className="h-5 w-5 mr-2" />
                                <span className="font-semibold">Success Story</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
