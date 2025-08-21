const testimonials = [
    {
        quote:
            "The level of expertise and dedication is unmatched. Our CRM is now a powerful asset that drives our sales forward. The transformation has been incredible.",
        name: "Ahmed Al-Fahim",
        title: "CEO, Manufacturing Co.",
        avatar: "https://placehold.co/100x100.png",
        hint: "professional portrait man",
    },
    {
        quote:
            "We were struggling with data silos and inefficient processes. CRM Ascent not only integrated our systems but also automated key workflows, saving us countless hours.",
        name: "Priya Sharma",
        title: "Director of Operations, Service Firm",
        avatar: "https://placehold.co/100x100.png",
        hint: "professional portrait woman",
    },
    {
        quote:
            "A true partner who understands both the technology and our business needs. The custom dashboards they built give us insights we never had before.",
        name: "Fatima Khan",
        title: "Marketing Manager, Tech Startup",
        avatar: "https://placehold.co/100x100.png",
        hint: "business woman portrait",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-gray-100">
            <div className="container mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70">
                        Hear from businesses that have transformed their operations with our help.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between border bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {/* Quote */}
                            <p className="text-foreground/80 italic">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            {/* Footer */}
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    data-ai-hint={testimonial.hint}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold font-headline">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-foreground/70">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
