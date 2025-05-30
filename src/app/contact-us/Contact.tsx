'use client'
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

// Define error state type for TypeScript
type ErrorState = {
    firstName?: string;
    email?: string;
    phone?: string;
    service?: string;
};

const ContactUs = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialService = searchParams.get('service') || '';

    const [form, setForm] = useState({
        firstName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: initialService,
        source: pathname,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ErrorState>({});
    const [triedSubmit, setTriedSubmit] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validate = (): ErrorState => {
        const newErrors: ErrorState = {};
        if (!form.firstName.trim()) newErrors.firstName = "Full Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        if (!form.phone.trim()) newErrors.phone = "Phone Number is required.";
        if (!form.service) newErrors.service = "Please select a service.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTriedSubmit(true);
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        try {
            await addDoc(collection(db, "contactRequests"), form);
            setForm({
                firstName: "",
                email: "",
                phone: "",
                company: "",
                message: "",
                service: initialService,
                source: pathname,
            });
            setSubmitted(true);
            setTriedSubmit(false);
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mai to-[#4a7dfd] px-2 py-16">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
                {/* Left: Content */}
                <div className="flex-1 flex flex-col text-white pr-0 space-y-4 md:pr-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">YOUR SUCCESS STORY STARTS HERE!</h2>
                    <p className="mb-6 text-lg font-light">
                        Were ready to turn your vision into reality with these key services:
                    </p>
                    <ul className="space-y-8 text-lg">
                        <li className="flex items-start gap-4">
                            <img src="/images/icon/contactsvg/mobile.png" alt="" />
                            <span>
                                <span className="font-bold">Mobile App Development:</span> Intuitive, user-friendly apps your customers will love
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <img src="/images/icon/contactsvg/devops-cloud.png" alt="" />
                            <span>
                                <span className="font-bold">Cutting-Edge Technology:</span> Leverage AI, ML, and more to stay ahead of the competition.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <img src="/images/icon/contactsvg/team.png" alt="" />
                            <span>
                                <span className="font-bold">Dedicated Team:</span> Our experts seamlessly integrate with your team for fast, quality results
                            </span>
                        </li>
                    </ul>
                </div>
                {/* Right: Form */}
                <div className="flex-1 flex justify-center">
                    <form
                        className="bg-white text-gray-700 rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-5"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">CONTACT US</h3>
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="Full Name*"
                                className="w-full border border-gray-200 rounded px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            {triedSubmit && errors.firstName && (
                                <div className="text-red-600 text-xs mt-1">{errors.firstName}</div>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Business Email*"
                                className="w-full border border-gray-200 rounded px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            {triedSubmit && errors.email && (
                                <div className="text-red-600 text-xs mt-1">{errors.email}</div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center border border-gray-200 rounded px-2 bg-gray-50">
                                <span className="flex items-center pr-2">
                                    <img src="https://flagcdn.com/sa.svg" alt="SA" className="w-6 h-4 rounded" />
                                    <span className="ml-1 text-gray-500">+96</span>
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="(201) 555-5555"
                                    className="flex-1 py-2 px-2 text-base bg-gray-50 border-none focus:outline-none"
                                />
                            </div>
                            {triedSubmit && errors.phone && (
                                <div className="text-red-600 text-xs mt-1">{errors.phone}</div>
                            )}
                        </div>
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="w-full border border-gray-200 rounded px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        <div>
                            <select
                                id="service"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full border  text-gray-400 rounded border-gray-200 bg-gray-50 px-1 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                            >
                                <option value="">Select a service</option>
                                <option value="zoho crm">Zoho CRM</option>
                                <option value="zoho one">Zoho One</option>
                                <option value="app development">App Development</option>
                                <option value="web development">Web Development</option>
                                <option value="other">Other</option>
                            </select>
                            {triedSubmit && errors.service && (
                                <div className="text-red-600 text-xs mt-1">{errors.service}</div>
                            )}
                        </div>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="How we can help you?"
                            rows={3}
                            className="w-full border border-gray-200 rounded px-4 py-2 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        <button
                            type="submit"
                            className="w-full rounded bg-[#fc5c5c] hover:bg-[#e74c3c] text-white font-bold py-3 text-base shadow transition mt-2"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "SEND"}
                        </button>
                        {submitted && (
                            <div className="mt-4 text-green-700 bg-green-50 p-2 rounded text-center font-semibold">
                                Thank you! We have received your request.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
