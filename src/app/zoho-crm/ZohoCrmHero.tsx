'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import PhoneInput from "react-phone-input-2";

interface FormState {
    name: string;
    email: string;
    phone: string;
    page: string;
}

type ErrorState = {
    name?: string;
    email?: string;
    phone?: string;
};

export default function ZohoCrmHero() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [country, setCountry] = useState<string>('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {

        if (!country) {
            fetch('https://ipapi.co/json/')
                .then(res => res.json())
                .then(data => {
                    if (data && data.country_code) {
                        setCountry(data.country_code.toLowerCase());
                    } else {
                        setCountry('sa'); // fallback to Saudi Arabia
                    }
                })
                .catch(() => setCountry('sa')); // fallback on error
        }

    }, [country]);

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        page: pathname,
    });
    const [errors, setErrors] = useState<ErrorState>({});
    const [triedSubmit, setTriedSubmit] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handlePhoneChange = (value: string) => {
        setForm((prev) => ({ ...prev, phone: value }));
        setErrors((prev) => ({ ...prev, phone: undefined }));
    };

    const validate = (): ErrorState => {
        const newErrors: ErrorState = {};

        if (!form.name.trim()) newErrors.name = "Full Name is required.";

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone Number is required.";
        } else {
            const digits = form.phone.replace(/\D/g, "");
            if (digits.length < 10 || digits.length > 15) {
                newErrors.phone = "Please enter a valid phone number.";
            }
        }

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
            await addDoc(collection(db, "ZohoCrm"), form);
            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                phone: "",
                page: pathname,
            });
            setTriedSubmit(false);
            router.push("https://go.zoho.com/IId");
        } catch (err) {
            alert("Submission failed. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section className="bg-[#ffffff] mt-10 py-12 px-2">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left: Content */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1242] mb-4 leading-tight">
                        An Extensive System to Increase<br />
                        Your Productivity and Improve<br />
                        Customer Relationships
                    </h1>
                    <p className="text-gray-700 text-lg mb-4 max-w-2xl">
                        Achieve greater success with Zoho customized CRM system, where you can track all your customer interactions, enhance your communications, and boost your sales easily and efficiently.
                    </p>
                    <ul className="mb-6 space-y-2 text-base text-gray-700">
                        <li className="flex items-center gap-2 text-green-700">
                            <span className="text-xl">✔️</span>
                            <span>Sync emails with CRM.</span>
                        </li>
                        <li className="flex items-center gap-2 text-green-700">
                            <span className="text-xl">✔️</span>
                            <span>Track and nurture leads.</span>
                        </li>
                        <li className="flex items-center gap-2 text-green-700">
                            <span className="text-xl">✔️</span>
                            <span>Visualize sales pipeline stages.</span>
                        </li>
                    </ul>
                    <Link href="#contactUs">
                        <button className="bg-mai hover:bg-maihover text-white text-lg font-semibold px-8 py-3 transition">
                            START TODAY FOR FREE
                        </button>
                    </Link>
                </div>
                {/* Right: Form Card */}
                <div className="flex-1 mt-28 flex justify-end z-10"
                    style={{
                        backgroundImage: "url('/images/bg7.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="bg-[#ffffff92] rounded-2xl shadow-xl p-8 w-full max-w-sm">
                        <div className="text-gray-900 text-lg font-semibold my-6 text-center">
                            Get 15-day free trial
                        </div>
                        <form className="space-y-8 text-black" onSubmit={handleSubmit} noValidate>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name *"
                                    className="w-full border placeholder-slate-600 bg-[#ffffff7f] border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mai"
                                />
                                {triedSubmit && errors.name && (
                                    <div className="text-red-600 text-xs px-1 pt-1">{errors.name}</div>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email *"
                                    className="w-full border placeholder-slate-600 bg-[#ffffff7f] border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mai"
                                />
                                {triedSubmit && errors.email && (
                                    <div className="text-red-600 text-xs px-1 pt-1">{errors.email}</div>
                                )}
                            </div>
                            <div>
                                <PhoneInput
                                    country={country}
                                    value={form.phone}
                                    onChange={handlePhoneChange}
                                    inputClass="!w-full !border !border-gray-400 bg-transparent !text-gray-700  !pl-10 !py-1 !focus:outline-none !focus:border-mai"
                                    inputStyle={{
                                        background: "none",
                                        // border: "1px solid #d1d5db",
                                        borderRadius: 4,
                                    }}
                                    buttonStyle={{
                                        border: "none",
                                        background: "none",
                                    }}
                                    dropdownStyle={{
                                        zIndex: 9999,
                                        color: "#000"
                                    }}
                                    enableSearch
                                // required
                                />
                                {triedSubmit && errors.phone && (
                                    <div className="text-red-600 text-xs px-1 pt-1">{errors.phone}</div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full bg-[#e53935] hover:bg-[#c62828] text-white font-bold py-3 text-base shadow transition"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "SIGN UP FOR FREE"}
                            </button>
                            {submitted && (
                                <div className=" text-green-700 bg-emerald-400 px-2 py-1 rounded text-center font-semibold">
                                    Thank you! We have received your request.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
