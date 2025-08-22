"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

interface FormData {
    firstName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    countryCode: string; // ✅ new
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
                const res = await fetch("https://ipapi.co/json/"); // or https://ipwho.is/
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
        if (!form.phone.trim()) newErrors.phone = "Phone Number is required.";
        if (!form.date) newErrors.date = "Please select a date.";
        if (!form.time) newErrors.time = "Please select a time.";
        return newErrors;
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
                fullPhone: `${form.countryCode}${form.phone}`, // ✅ store combined
            });
            setSubmitted(true);
            setForm({
                firstName: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                countryCode: form.countryCode, // keep detected code
            });
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section id="cta" className="py-16 sm:py-24 bg-mai text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-white">
                        Ready to Elevate Your CRM?
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        Let&apos;s discuss how we can tailor Zoho CRM to meet your specific
                        business goals. Unlock your business&apos;s full potential with a
                        personalized strategy.
                    </p>

                    <div className="mt-8">
                        <button
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-400 hover:text-accent shadow-lg text-lg font-medium px-8 py-4 transition-all duration-300 group"
                            aria-label="Book a 30-Minute Zoho CRM Strategy Call"
                        >
                            Book a 30 Minute Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>

                        <p className="mt-4 text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Powered by Lead2CRM </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* ✅ Popup Modal */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X className="h-5 w-5" />
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
                                        onChange={(e) =>
                                            setForm({ ...form, firstName: e.target.value })
                                        }
                                        className="mt-1 w-full rounded-md border outline-none p-2"
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
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        className="mt-1 w-full rounded-md border outline-none p-2"
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
                                            onChange={(e) =>
                                                setForm({ ...form, phone: e.target.value })
                                            }
                                            className="mt-0 w-full rounded-r-md border p-2"
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
                                            onChange={(e) =>
                                                setForm({ ...form, date: e.target.value })
                                            }
                                            className="mt-1 w-full rounded-md border outline-none p-2"
                                        />
                                        {errors.date && (
                                            <p className="text-red-500 text-sm">{errors.date}</p>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <label className="block text-sm font-medium">Time</label>
                                        <input
                                            type="time"
                                            value={form.time}
                                            onChange={(e) =>
                                                setForm({ ...form, time: e.target.value })
                                            }
                                            className="mt-1 w-full rounded-md border outline-none p-2"
                                        />
                                        {errors.time && (
                                            <p className="text-red-500 text-sm">{errors.time}</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-full bg-orange-500 text-white py-3 font-medium hover:bg-orange-400 transition disabled:opacity-50"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
