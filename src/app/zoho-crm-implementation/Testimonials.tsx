import { Building, Building2, ComponentIcon } from "lucide-react";

const testimonials = [
    {
        quote:
            "The transformation has been beyond expectations. With the complete implementation of Zoho CRM and Zoho One, fully integrated with our portal, we now have full visibility across finance, sales, and operations. The automation has saved us countless hours, and our decision-making has become data-driven. Truly a game changer for our organization.",
        name: "Mr. Weal",
        title: "CFO.",
        avatar: "/images/userIcon.png",
        hint: "Opolia KSA",
    },
    {
        quote:
            "Before working with them, we were handling job requests manually on paper forms, which slowed down our business. With Zoho One and a custom app integrated with our Zoho CRM and Zoho Books, From Riyadh to Jeddah, our branches now run with efficiency, and our customers experience much faster service. This digital shift has transformed our company.",
        name: "Mr. Abdullah",
        title: "Head of Operations",
        avatar: "/images/userIcon.png",
        hint: "Jairat Al Wafa - Riyadh & Jeddah",
    },
    {
        quote:
            "Partnering with them has given us the right foundation to scale. From setting up Zoho CRM to automating sales and customer support workflows, everything now runs seamlessly. The dashboards and reports give us real-time insights, helping our team stay ahead and focused on growth.",
        name: "Sara Ahmed",
        title: "Marketing Manager",
        avatar: "/images/userIcon.png",
        hint: "NextGen Tech Solutions",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-gray-100">
            <div className="container mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl text-gray-950 font-headline text-center font-bold tracking-tight sm:text-5xl">
                        How We Have  <span className="text-mai">Helped Businesses</span> Like Yours

                    </h1>
                    <p className="mt-4 text-xl text-gray-700 text-center">
                        Hear from businesses that have transformed their operations with our help.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-12 grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between border border-gray-300 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-lg  transition-transform hover:-translate-y-2"
                        >

                            {/* Quote */}
                            <p className="text-gray-700 italic ">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            {/* company */}
                            <p className="uppercase my-2 flex text-gray-600 gap-2"><Building2 className="h-6 w-6 text-mai" />{testimonial.hint}</p>
                            {/* Footer */}
                            <div className="flex items-center gap-4 mt-2">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    data-ai-hint={testimonial.hint}
                                    className="h-12 w-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="font-semibold text-gray-950 font-headline">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-700">
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
