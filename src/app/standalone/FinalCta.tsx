import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCta() {
    return (
        <section
            id="cta"
            className="py-20 sm:py-28 bg-mai text-primary-foreground"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-white">
                        Ready to Elevate Your CRM?
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        Let's discuss how we can tailor Zoho CRM to meet your specific
                        business goals. Unlock your business's full potential with a
                        personalized strategy.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="https://calendly.com/your-link"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-400 hover:text-accent shadow-lg text-lg font-medium px-8 py-4 transition-all duration-300 group"
                            aria-label="Book a 30-Minute Zoho CRM Strategy Call"
                        >
                            Book a 30-Minute Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <p className="mt-4 text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Powered by Calendly for easy scheduling</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
