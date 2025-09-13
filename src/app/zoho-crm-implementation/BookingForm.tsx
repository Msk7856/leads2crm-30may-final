"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
    firstName: string;
    email: string;
    phone: string;
    countryCode: string;
    date: Date | null;
    time: Date | null;
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
        date: null,
        time: null,
        description: "",
    });
    const [errors, setErrors] = useState<ErrorState>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    // Auto-detect country code
    useEffect(() => {
        fetch("https://ipwho.is/")
            .then(res => res.json())
            .then(data => {
                if (data && data.country_code) {
                    const codes: Record<string, string> = {
                        IN: "+91",
                        SA: "+966",
                        AE: "+971",
                        US: "+1",
                    };
                    setForm(prev => ({
                        ...prev,
                        countryCode: codes[data.country_code] || "+966"
                    }));
                }
            })
            .catch(() => {
                // fallback if API fails
                setForm(prev => ({ ...prev, countryCode: "+966" }));
            });
    }, []);


    useEffect(() => {
        if (!submitted) return;

        // timerId type: number in browser environments
        const timerId = window.setTimeout(() => {
            // clear submitted flag (so message disappears if modal stays open)
            setSubmitted(false);

            // close the modal (calls parent onClose)
            try {
                onClose();
            } catch (err) {
                // fallback: ignore if onClose is not provided for some reason
                console.warn("onClose not available", err);
            }
        }, 5000); // 5000ms = 5s

        return () => {
            window.clearTimeout(timerId);
        };
    }, [submitted, onClose]);

    // Format date (local)
    const selectedDate = form.date
        ? form.date.toISOString().split("T")[0]  // this is fine for date
        : null;

    // Format time (local)
    const selectedTime = form.time
        ? `${form.time.getHours().toString().padStart(2, "0")}:${form.time
            .getMinutes()
            .toString()
            .padStart(2, "0")}`
        : null;

    // Helpers — format local date/time (no timezone-shift)
    const formatDateForStorage = (d: Date) => {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0"); // month is 0-indexed
        const dd = String(d.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`; // ISO-like date for storage
    };

    const formatTimeForStorage = (d: Date) => {
        const hh = String(d.getHours()).padStart(2, "0");
        const min = String(d.getMinutes()).padStart(2, "0");
        return `${hh}:${min}`; // 24-hour HH:MM
    };

    // Validation
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

    // Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        try {
            // Build payload — store both selectedDate/selectedTime and createdAt (server)
            const payload: any = {
                firstName: form.firstName.trim(),
                email: form.email.trim(),
                phone: `${form.countryCode}${form.phone}`,
                description: form.description.trim(),
                collection: collectionName,
                selectedDate,
                selectedTime,
                createdAt: serverTimestamp(), // Firestore server timestamp
            };

            if (form.date) payload.selectedDate = formatDateForStorage(form.date);
            else payload.selectedDate = null;

            if (form.time) payload.selectedTime = formatTimeForStorage(form.time);
            else payload.selectedTime = null;

            await addDoc(collection(db, collectionName), payload);

            setSubmitted(true);
            // reset (keep detected countryCode if you want)
            setForm({
                firstName: "",
                email: "",
                phone: "",
                countryCode: form.countryCode,
                date: null,
                time: null,
                description: "",
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative border border-gray-200">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                >
                    <X className="h-6 w-6 rounded-full p-1 bg-gray-100 hover:bg-red-500 hover:text-white" />
                </button>

                <h2 className="text-2xl font-bold mb-1 text-center text-gray-900">
                    📅 Schedule Your Free CRM Strategy Call
                </h2>
                <p className="text-sm text-center text-gray-500 mb-4">Trusted by 100+ businesses across KSA, UAE & India</p>

                {submitted ? (
                    <p className="text-white text-lg bg-green border border-emerald-200 p-3 rounded font-medium text-center">
                        ✅ Thank you! We&apos;ll contact you soon.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 text-gray-800">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                value={form.firstName}
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                placeholder="Enter your full name"
                                className="mt-1 w-full border border-gray-300 bg-white p-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                placeholder="example@email.com"
                                className="mt-1 w-full border border-gray-300 bg-white p-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium">Phone</label>
                            <div className="flex">
                                <span className="px-3 py-2 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md text-gray-700">
                                    {form.countryCode || "+966"}
                                </span>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    placeholder="XXXXXXXXX"
                                    className="w-full border border-gray-300 bg-white p-2 rounded-r-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                placeholder="e.g., Sales automation, Workflow fixes, Lead capture..."
                                rows={3}
                                className="mt-1 w-full border border-gray-300 bg-white p-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        {/* Date & Time */}
                        <div className="flex gap-4">
                            {/* Date Picker */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Select Date</label>
                                <DatePicker
                                    selected={form.date}
                                    onChange={(date: Date | null) => setForm({ ...form, date })}
                                    className="w-full border border-gray-300 bg-white p-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    dateFormat="dd-MM-yyyy" // show dd-mm-yyyy in the UI
                                    minDate={new Date()}
                                    placeholderText="Date"
                                />
                                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                            </div>

                            {/* Time Picker */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium">Select Time</label>
                                <DatePicker
                                    selected={form.time}
                                    onChange={(time: Date | null) => setForm({ ...form, time })}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    placeholderText="Time"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    className="w-full border border-gray-300 bg-white p-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                />
                                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "Schedule My Free Strategy Call"}
                        </button>

                        {/* Trust Note */}
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            🔒 Your information is safe & confidential. We respect your privacy.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
