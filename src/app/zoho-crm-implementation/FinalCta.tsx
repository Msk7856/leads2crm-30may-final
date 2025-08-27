"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, UserCircle, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // ✅ add animations

interface FormData {
    firstName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    countryCode: string;
}

interface ErrorState {
    firstName?: string;
    email?: string;
    phone?: string;
    date?: string;
    time?: string;
}

export function FinalCta() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<FormData>({
        firstName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        countryCode: "",
    });
    const [errors, setErrors] = useState<ErrorState>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // ✅ Auto-fetch country code
    useEffect(() => {
        const fetchCountryCode = async () => {
            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                if (data.country_calling_code) {
                    setForm((prev) => ({
                        ...prev,
                        countryCode: data.country_calling_code,
                    }));
                }
            } catch (err) {
                console.error("Failed to fetch country code", err);
            }
        };
        fetchCountryCode();
    }, []);

    // ✅ Validation
    const validate = (): ErrorState => {
        const newErrors: ErrorState = {};
        if (!form.firstName.trim()) newErrors.firstName = "Full Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        if (!form.phone.trim()) {
            newErrors.phone = "Phone Number is required.";
        } else if (!/^\d{9,}$/.test(form.phone.replace(/\D/g, ""))) {
            newErrors.phone = "Phone Number must be at least 10 digits.";
        }
        return newErrors;
    };

    // ✅ Live validation on change
    const handleChange = (field: keyof FormData, value: string) => {
        setForm({ ...form, [field]: value });
        setErrors((prev) => {
            const updated = { ...prev };
            delete updated[field]; // clear error once fixed
            return updated;
        });
    };

    // ✅ Handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        try {
            await addDoc(collection(db, "CRM-Implementation"), {
                ...form,
                fullPhone: `${form.countryCode}${form.phone}`,
            });
            setSubmitted(true);
            setForm({
                firstName: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                countryCode: form.countryCode,
            });
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section
            id="cta"
            className="relative py-16 sm:py-24 bg-mai text-primary-foreground"
        >
            {/* ✅ Inline CSS fix for live issue */}
            <style jsx global>{`
                    input[type="date"]:not(:valid)::before {
                      content: attr(placeholder);
                      color: #aaaaaa;
                      margin-right: 2px;
                    }
                    input[type="time"]:not(:valid)::before {
                      content: attr(placeholder);
                      color: #aaaaaa;
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

                    <div className="mt-8 gap-2 flex items-center justify-center">
                        <button
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-400 shadow-lg text-lg font-medium px-6 py-3 transition-all duration-300 group"
                            aria-label="Book a 30-Minute Zoho CRM Strategy Call"
                        >
                            Request a Tailored Demo
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>

                        <Link
                            href="#testimonials"
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2 text-lg font-medium text-gray-100 hover:text-gray-700 transition hover:bg-gray-100 "
                        >
                            <UserCircle className="mr-2 h-5 w-5 hover:scale-105" />
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative"
                        >
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            >
                                <X className="h-6 w-6 bg-gray-200 hover:bg-red-400 rounded-full p-1" />
                            </button>

                            <h2 className="text-2xl text-gray-800 font-bold mb-4">
                                Book Your Strategy Call
                            </h2>

                            {submitted ? (
                                <p className="text-green font-medium">
                                    ✅ Thank you! We&apos;ll contact you soon.
                                </p>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                                    <div>
                                        <label className="block text-sm font-medium">Full Name</label>
                                        <input
                                            type="text"
                                            value={form.firstName}
                                            onChange={(e) => handleChange("firstName", e.target.value)}
                                            className="mt-1 w-full border p-2 rounded"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm">{errors.firstName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            className="mt-1 w-full border p-2 rounded"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* ✅ Phone with country code */}
                                    <div>
                                        <label className="block text-sm font-medium">Phone</label>
                                        <div className="flex">
                                            <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-gray-700">
                                                {form.countryCode || "+--"}
                                            </span>
                                            <input
                                                type="tel"
                                                value={form.phone}
                                                onChange={(e) => handleChange("phone", e.target.value)}
                                                className="w-full border p-2 rounded-r-md"
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium">Date</label>
                                            <input
                                                type="date"
                                                value={form.date}
                                                onChange={(e) => handleChange("date", e.target.value)}
                                                className="w-full border p-2 rounded"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="block text-sm font-medium">Time</label>
                                            <input
                                                type="time"
                                                value={form.time}
                                                onChange={(e) => handleChange("time", e.target.value)}
                                                className="w-full border p-2 rounded"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-orange-500 text-white py-3 font-medium rounded hover:bg-orange-400 transition disabled:opacity-50"
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>

                                    {/* ✅ Trust signals */}
                                    <p className="text-xs text-gray-500 mt-2 text-center">
                                        🔒 Your information is safe with us. We respect your privacy.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ✅ Sticky CTA for mobile */}
            <div className="fixed bottom-4 inset-x-0 flex justify-center sm:hidden z-40">
                <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg"
                >
                    📅 Book a Demo
                </button>
            </div>
        </section>
    );
}
