"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, UserCircle, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // ✅ add animations
import { BookingForm } from "./BookingForm";

// interface FormData {
//     firstName: string;
//     email: string;
//     phone: string;
//     date: string;
//     time: string;
//     countryCode: string;
//     description: string;
// }

// interface ErrorState {
//     firstName?: string;
//     email?: string;
//     phone?: string;
//     date?: string;
//     time?: string;
//     description?: string;
// }

export function FinalCta() {
    const [showForm, setShowForm] = useState(false);

    // const [form, setForm] = useState<FormData>({
    //     firstName: "",
    //     email: "",
    //     phone: "",
    //     date: "",
    //     time: "",
    //     countryCode: "",
    //     description: "",
    // });

    // const [errors, setErrors] = useState<ErrorState>({});
    // const [loading, setLoading] = useState(false);
    // const [submitted, setSubmitted] = useState(false);


    // // ✅ Auto-fetch country code
    // useEffect(() => {
    //     const fetchCountryCode = async () => {
    //         try {
    //             const res = await fetch("https://ipapi.co/json/");
    //             const data = await res.json();
    //             if (data.country_calling_code) {
    //                 setForm((prev) => ({
    //                     ...prev,
    //                     countryCode: data.country_calling_code,
    //                 }));
    //             }
    //         } catch (err) {
    //             console.error("Failed to fetch country code", err);
    //         }
    //     };
    //     fetchCountryCode();
    // }, []);

    // // ✅ Validation
    // const validate = (): ErrorState => {
    //     const newErrors: ErrorState = {};
    //     // Full Name
    //     if (!form.firstName.trim()) {
    //         newErrors.firstName = "Full Name is required.";
    //     } else if (!/^[a-zA-Z\s]+$/.test(form.firstName.trim())) {
    //         newErrors.firstName = "Full Name must contain only letters.";
    //     }
    //     // if (!form.firstName.trim()) newErrors.firstName = "Full Name is required.";

    //     // Email
    //     if (!form.email.trim()) {
    //         newErrors.email = "Email is required.";
    //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    //         newErrors.email = "Please enter a valid email address.";
    //     }

    //     // Phone
    //     if (!form.phone.trim()) {
    //         newErrors.phone = "Phone Number is required.";
    //     } else if (!/^\d+$/.test(form.phone)) {
    //         newErrors.phone = "Phone Number must contain only digits.";
    //     } else if (form.phone.length < 10) {
    //         newErrors.phone = "Phone Number must be at least 10 digits.";
    //     }

    //     return newErrors;
    // };

    // // ✅ Live validation on change
    // const handleChange = (field: keyof FormData, value: string) => {
    //     setForm({ ...form, [field]: value });
    //     setErrors((prev) => {
    //         const updated = { ...prev };
    //         delete updated[field]; // clear error once fixed
    //         return updated;
    //     });
    // };

    // // ✅ Handle submit
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const validationErrors = validate();
    //     setErrors(validationErrors);
    //     if (Object.keys(validationErrors).length > 0) return;

    //     setLoading(true);
    //     try {
    //         await addDoc(collection(db, "CRM-Implementation"), {
    //             ...form,
    //             fullPhone: `${form.countryCode}${form.phone}`,
    //         });
    //         setSubmitted(true);
    //         setForm({
    //             firstName: "",
    //             email: "",
    //             phone: "",
    //             date: "",
    //             time: "",
    //             countryCode: form.countryCode,
    //             description: "",
    //         });
    //     } catch (err) {
    //         alert("Something went wrong. Please try again.");
    //     }
    //     setLoading(false);
    // };

    return (
        <section
            id="cta"
            className="relative py-16 sm:py-24 bg-mai text-primary-foreground"
        >
            {/* ✅ Inline CSS fix for live issue */}
            <style jsx global>{`
                    input[type="date"]:not(:valid)::before {
                      content: attr(placeholder);
                      color: #000000;
                      margin-right: 2px;
                    }
                    input[type="time"]:not(:valid)::before {
                      content: attr(placeholder);
                      color: #000000;
                      margin-right: 2px;
                    }
                  `}</style>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-white">
                        Ready to Scale Smarter with Zoho CRM?
                    </h2>
                    <p className="mt-4 text-lg text-center text-white">
                        Whether you&apos;re a growing enterprise or an established leader,
                        we&apos;ll design and implement a Zoho CRM solution tailored for
                        your entire organization.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center w-full px-4">
                        {/* Demo Button */}
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-400 shadow-lg text-base sm:text-lg font-medium px-6 py-3 transition-all duration-300 group"
                            aria-label="Book a 30-Minute Zoho CRM Strategy Call"
                        >
                            Request a Tailored Demo
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>

                        {/* WhatsApp Link */}
                        <Link
                            href="https://wa.me/966538834362?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20a%20CRM%20Consultant."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-base sm:text-lg font-medium  text-white hover:text-gray-900 transition hover:bg-gray-100 hover:scale-105 shadow-sm"
                        >
                            <UserCircle className="mr-2 h-5 w-5" />
                            Talk to a CRM Consultant
                        </Link>
                    </div>


                    {/* ✅ Urgency / social proof */}
                    <p className="mt-4 text-sm italic text-center text-orange-200 font-medium">
                        🫴🏻 Join 100+ businesses already scaling with Zoho CRM
                    </p>

                    <p className="mt-2 text-sm text-gray-300 flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Powered by Lead2CRM </span>
                    </p>
                </div>
            </div>

            {/* ✅ Popup Modal with animation */}
            <AnimatePresence>
                {showForm && (
                    <BookingForm
                        onClose={() => setShowForm(false)}
                        title="Book Your Strategy Call"
                    />
                )}
            </AnimatePresence>

            {/* ✅ Sticky CTA for mobile */}
            <div className="fixed bottom-4 inset-x-0 flex justify-center sm:hidden z-40">
                <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-orange-400  text-black rounded-full shadow-lg"
                >
                    📅 Book a Demo
                </button>
            </div>
        </section>
    );
}
