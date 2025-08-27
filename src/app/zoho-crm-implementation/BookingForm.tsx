"use client";

import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { X, XCircleIcon } from "lucide-react";

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

interface BookingFormProps {
    onClose: () => void;
    collectionName?: string;
    title?: string;
}

export function BookingForm({
    onClose,
    collectionName = "CRM-Implementation",
    title = "Book Your Strategy Call",
}: BookingFormProps) {
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
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.country_calling_code) {
                    setForm((prev) => ({
                        ...prev,
                        countryCode: data.country_calling_code,
                    }));
                }
            })
            .catch(() => console.log("Country code fetch failed"));
    }, []);

    // ✅ Validation
    const validate = (): ErrorState => {
        const newErrors: ErrorState = {};

        if (!form.firstName.trim()) {
            newErrors.firstName = "Full Name is required.";
        } else if (!/^[a-zA-Z\s]+$/.test(form.firstName.trim())) {
            newErrors.firstName = "Full Name must contain only letters.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            newErrors.email = "Enter a valid email.";
        }

        // Phone Number
        if (!form.phone.trim()) {
            newErrors.phone = "Phone Number is required.";
        } else if (!/^\d+$/.test(form.phone)) {
            newErrors.phone = "Phone must contain only digits.";
        } else {
            if (form.countryCode === "+91" && form.phone.length !== 10) {
                newErrors.phone = "Indian phone number must be 10 digits.";
            }
            if (form.countryCode === "+966" && form.phone.length !== 9) {
                newErrors.phone = "Saudi phone number must be 9 digits.";
            }
        }

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
            await addDoc(collection(db, collectionName), {
                ...form,
                fullPhone: `${form.countryCode}${form.phone}`,
            });
            setSubmitted(true);
            setForm({
                firstName: "",
                email: "",
                phone: "",
                countryCode: form.countryCode, // keep countryCode
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            {/* <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative"> */}
            <div className="bg-gradient-to-r from-orange-300 via-pink-200 to-purple-400 text-white rounded-md shadow-lg w-full max-w-md p-6 relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    <X className="h-6 w-6 bg-gray-200 hover:bg-red-500 font-bold rounded-full p-1" />
                </button>

                <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>

                {submitted ? (
                    <p className="text-white bg-green p-3 rounded font-medium">
                        ✅ Thank you! We&apos;ll contact you soon.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 text-gray-800">
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                value={form.firstName}
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                className="mt-1 w-full outline-none border bg-white p-2 rounded"
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
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="mt-1 w-full outline-none border bg-white p-2 rounded"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone with country code */}
                        <div>
                            <label className="block text-sm font-medium">Phone</label>
                            <div className="flex">
                                <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-gray-700">
                                    {form.countryCode || "+966"}
                                </span>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="w-full outline-none border bg-white p-2 rounded-r-md"
                                />
                            </div>
                            {errors.phone && (
                                <p className="text-red-500 text-sm">{errors.phone}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                                placeholder="Tell us a bit about your CRM needs..."
                                rows={3}
                                className="mt-1 outline-none w-full border bg-white p-2 rounded"
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Date</label>
                                <input
                                    type="date"
                                    value={form.date}
                                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                                    className="w-full outline-none border bg-gray-100 p-2 rounded"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Time</label>
                                <input
                                    type="time"
                                    value={form.time}
                                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                                    className="w-full outline-none border bg-gray-100 p-2 rounded"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-600 text-white py-3 font-medium rounded hover:bg-orange-500 transition disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>

                        <p className="text-sm text-gray-500 mt-2 text-center">
                            🔒 Your information is safe with us. We respect your privacy.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
