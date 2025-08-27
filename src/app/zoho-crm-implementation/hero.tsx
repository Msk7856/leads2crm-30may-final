"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle, UserCheck, UserCheck2, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";
import { BookingForm } from "./BookingForm";

// interface FormData {
//     firstName: string;
//     email: string;
//     phone: string;
//     countryCode: string;
//     date: string;
//     time: string;
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

export default function StandalonePage() {
    const [showForm, setShowForm] = useState(false);

    // const [form, setForm] = useState<FormData>({
    //     firstName: "",
    //     email: "",
    //     phone: "",
    //     countryCode: "",
    //     date: "",
    //     time: "",
    //     description: "",
    // });
    // const [errors, setErrors] = useState<ErrorState>({});
    // const [loading, setLoading] = useState(false);
    // const [submitted, setSubmitted] = useState(false);

    // // ✅ Auto-detect country code
    // useEffect(() => {
    //     if (showForm) {
    //         fetch("https://ipapi.co/json/") // free IP API
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data && data.country_calling_code) {
    //                     setForm((prev) => ({
    //                         ...prev,
    //                         countryCode: data.country_calling_code,
    //                         phone: data.country_calling_code, // pre-fill phone with code
    //                     }));
    //                 }
    //             })
    //             .catch(() => {
    //                 console.log("Country code fetch failed.");
    //             });
    //     }
    // }, [showForm]);

    // // ✅ Validation
    // const validate = (): ErrorState => {
    //     const newErrors: ErrorState = {};

    //     // Full Name
    //     if (!form.firstName.trim()) {
    //         newErrors.firstName = "Full Name is required.";
    //     } else if (!/^[a-zA-Z\s]+$/.test(form.firstName.trim())) {
    //         newErrors.firstName = "Full Name must contain only letters.";
    //     }
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
    //     // if (!form.date) newErrors.date = "Please select a date.";
    //     // if (!form.time) newErrors.time = "Please select a time.";
    //     return newErrors;
    // };

    // // ✅ Submit Handler
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const validationErrors = validate();
    //     setErrors(validationErrors);
    //     if (Object.keys(validationErrors).length > 0) return;

    //     setLoading(true);
    //     try {
    //         await addDoc(collection(db, "CRM-Implementation"), form);
    //         setSubmitted(true);
    //         setForm({
    //             firstName: "",
    //             email: "",
    //             phone: "",
    //             countryCode: "",
    //             date: "",
    //             time: "",
    //             description: "",
    //         });
    //     } catch (err) {
    //         alert("Something went wrong. Please try again.");
    //     }
    //     setLoading(false);
    // };

    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section
                id="hero"
                className="relative flex flex-1 items-center justify-center text-center px-6 py-20"
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
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-white to-orange-200 -z-10" />

                <div className="max-w-4xl mx-auto">
                    <h1 className="font-headline text-gray-900 text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                        Transform Your Business with Enterprise-Grade {" "}
                        <span className="text-mai">Zoho CRM</span> Implementation
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        We help organizations replace chaos with clarity — delivering streamlined sales, integrated operations, and real-time insights across teams.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full px-4">
                        {/* Demo Button */}
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base sm:text-lg font-medium text-white shadow-lg transition hover:bg-orange-400 hover:scale-105"
                        >
                            Schedule a Company Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>

                        {/* WhatsApp Link */}
                        <Link
                            href="https://wa.me/966559034101?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20a%20CRM%20Consultant."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-base sm:text-lg font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 hover:scale-105"
                        >
                            <UserCheck2 className="mr-2 h-5 w-5" />
                            Talk to a CRM Consultant
                        </Link>
                    </div>

                </div>
            </section>

            {/* Modal Popup Form */}
            <AnimatePresence>
                {showForm && (
                    <BookingForm
                        onClose={() => setShowForm(false)}
                        title="Book Your Strategy Call"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
