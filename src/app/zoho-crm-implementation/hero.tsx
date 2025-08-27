"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle, UserCheck, UserCheck2, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

interface FormData {
    firstName: string;
    email: string;
    phone: string;
    countryCode: string;
    date: string;
    time: string;
    description: string;
}

interface ErrorState {
    firstName?: string;
    email?: string;
    phone?: string;
    date?: string;
    time?: string;
    description?: string;
}

export default function StandalonePage() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<FormData>({
        firstName: "",
        email: "",
        phone: "",
        countryCode: "",
        date: "",
        time: "",
        description: "",
    });
    const [errors, setErrors] = useState<ErrorState>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // ✅ Auto-detect country code
    useEffect(() => {
        if (showForm) {
            fetch("https://ipapi.co/json/") // free IP API
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.country_calling_code) {
                        setForm((prev) => ({
                            ...prev,
                            countryCode: data.country_calling_code,
                            phone: data.country_calling_code, // pre-fill phone with code
                        }));
                    }
                })
                .catch(() => {
                    console.log("Country code fetch failed.");
                });
        }
    }, [showForm]);

    // ✅ Validation
    const validate = (): ErrorState => {
        const newErrors: ErrorState = {};
        if (!form.firstName.trim()) newErrors.firstName = "Full Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        if (!form.phone.trim()) {
            newErrors.phone = "Phone Number is required.";
        } else if (!/^\d{9,}$/.test(form.phone.replace(/\D/g, ""))) {
            // remove non-digits, check at least 10 digits
            newErrors.phone = "Phone Number must be at least 10 digits.";
        }
        // if (!form.date) newErrors.date = "Please select a date.";
        // if (!form.time) newErrors.time = "Please select a time.";
        return newErrors;
    };

    // ✅ Submit Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        try {
            await addDoc(collection(db, "CRM-Implementation"), form);
            setSubmitted(true);
            setForm({
                firstName: "",
                email: "",
                phone: "",
                countryCode: "",
                date: "",
                time: "",
                description: "",
            });
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

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
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-orange-400 hover:scale-105"
                        >
                            Schedule a Company Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>

                        <Link
                            href="https://wa.me/966559034101?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20a%20CRM%20Consultant."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-lg font-medium text-gray-700 transition hover:bg-gray-100 hover:scale-105"
                        >
                            <UserCheck2 className="mr-2 h-5 w-5" />
                            Talk to a CRM Consultant
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modal Popup Form */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded shadow-lg w-full max-w-sm p-6 relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 hover:text-gray-800"
                        >
                            <X className="h-6 w-6 bg-gray-200 text-gray-800 hover:bg-red-400 font-bold rounded-full p-1" />
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Book Your Strategy Call</h2>

                        {submitted ? (
                            <p className="text-green-600 font-medium">
                                ✅ Thank you! We&apos;ll contact you soon.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="text-gray-800">
                                    <label className="block text-sm text-gray-800 font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={form.firstName}
                                        onChange={(e) =>
                                            setForm({ ...form, firstName: e.target.value })
                                        }
                                        className="mt-1 w-full bg-white text-gray-950 border border-gray-500 outline-none p-2"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm">{errors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-800 font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        className="mt-1 w-full bg-white text-gray-950 border border-gray-500 outline-none p-2"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-800 font-medium">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                        className="mt-1 w-full bg-white text-gray-950 border border-gray-500 outline-none p-2"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-800 font-medium">
                                        Description
                                    </label>
                                    <textarea
                                        placeholder="Tell us more about your CRM needs..."
                                        value={form.description}
                                        onChange={(e) =>
                                            setForm({ ...form, description: e.target.value })
                                        }
                                        rows={3}
                                        className="mt-1 w-full bg-white text-gray-950 border border-gray-500 outline-none p-2"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm text-gray-800 font-medium">Date</label>
                                        <input
                                            type="date"
                                            value={form.date}
                                            onChange={(e) =>
                                                setForm({ ...form, date: e.target.value })
                                            }
                                            className="mt-1 w-full bg-gray-100  border placeholder:text-slate-500 border-gray-500 outline-none p-2"
                                        />
                                        {errors.date && (
                                            <p className="text-red-500 text-sm">{errors.date}</p>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <label className="block text-sm text-gray-800 font-medium">Time</label>
                                        <input
                                            type="time"
                                            value={form.time}
                                            onChange={(e) =>
                                                setForm({ ...form, time: e.target.value })
                                            }
                                            className="mt-1 w-full bg-gray-100 border placeholder:text-slate-500 border-gray-500 outline-none p-2"
                                        />
                                        {errors.time && (
                                            <p className="text-red-500 text-sm">{errors.time}</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-orange-500 text-white py-3 font-medium hover:bg-orange-400 transition disabled:opacity-50"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
