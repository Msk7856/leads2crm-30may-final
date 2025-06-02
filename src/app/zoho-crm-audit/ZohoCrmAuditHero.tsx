'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import ParticlesBackground from "@/components/animate/ParticlesBackground";

interface FormState {
    name: string;
    email: string;
    phone: string;
    company: string;
    currentCRM: string;
    page: string;
}

type ErrorState = {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    currentCRM?: string;
    page?: string;
};

const freeEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "gmx.com",
    "ymail.com",
    "zoho.com"
];


export default function ZohoCrmAuditHero() {
    const [country, setCountry] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
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
        company: "",
        currentCRM: "",
        page: pathname,
    });

    const [errors, setErrors] = useState<ErrorState>({});
    const [triedSubmit, setTriedSubmit] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
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
        } else {
            // Extract domain and check against free domains
            const domain = form.email.trim().split("@")[1]?.toLowerCase();
            if (domain && freeEmailDomains.includes(domain)) {
                newErrors.email = "Please use your business email address (not Gmail, Yahoo, etc.).";
            }
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
            await addDoc(collection(db, "zohoAudit"), form);
            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                currentCRM: "",
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
        <section id="zoho-creator" className="relative overflow-hidden min-h-screen pb-10 md:pt-5 pt-20">
            <ParticlesBackground />
            <div id="zoho-audit" className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 items-center gap-4">
                {/* Left: Content */}
                <div className="flex-1">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Get Your Free Zoho CRM Audit — Discover How to Boost Sales & Efficiency
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Personalized audit report highlighting gaps, improvements & ROI potential for your business.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <p><span className="text-xl pr-2">✔️</span>Identify CRM inefficiencies costing you sales</p>
                        <p><span className="text-xl pr-2">✔️</span>Get actionable recommendations tailored to your business</p>
                        <p><span className="text-xl pr-2">✔️</span>No cost, no commitment — just valuable insights</p>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700">Trusted by 100+ businesses in Saudi Arabia & UAE</span>
                        {/* Example: <img src="/client-logos.png" alt="Client logos" className="h-8" /> */}
                    </div>
                </div>
                {/* Right: Form Card */}
                <div className="flex-1 md:mt-20 mt-6 flex justify-end z-10">
                    <div className="bg-[#ffffffdf] rounded-2xl shadow-xl md:px-8 px-4 py-4 w-full max-w-sm">
                        <div className="text-gray-900 text-lg font-semibold my-4 text-center">
                            Request Your Free CRM Audit Now
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border text-gray-700 bg-transparent border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {triedSubmit && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Business Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border bg-transparent text-gray-700 border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {triedSubmit && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Mobile <span className="text-red-500">*</span>
                                </label>
                                <PhoneInput
                                    country={country}
                                    value={form.phone}
                                    onChange={handlePhoneChange}
                                    // inputStyle={{ width: "100%", padding: '8px 4px' }}
                                    inputClass="!w-full !border !border-gray-300 !bg-transparent !text-gray-700  !pl-10 !py-2 !focus:outline-none !focus:border-mai"
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
                                />
                                {triedSubmit && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border text-gray-700 bg-transparent border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                {triedSubmit && errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

                            </div>
                            <div>
                                <label htmlFor="currentCRM" className="block text-sm font-medium text-gray-700">
                                    Current CRM
                                </label>
                                <select
                                    id="currentCRM"
                                    name="currentCRM"
                                    value={form.currentCRM}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border bg-transparent text-gray-700 border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select or type</option>
                                    <option value="zoho crm">Zoho CRM</option>
                                    <option value="zoho one">Zoho One</option>
                                    <option value="zoho creator">Zoho Creator</option>
                                    <option value="salesforce">Salesforce</option>
                                    <option value="hubSpot">HubSpot</option>
                                    <option value="microsoft Dynamics">Microsoft Dynamics</option>
                                    <option value="other">Other</option>
                                </select>
                                {triedSubmit && errors.currentCRM && <p className="text-red-500 text-sm">{errors.currentCRM}</p>}

                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-700 text-white bg-mai hover:bg-maihover font-semibold py-3 rounded-md hover:bg-blue-700 transition"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Get My Free Audit"}
                            </button>

                            {submitted ? <div className=" text-green-700 bg-emerald-400 px-2 py-1 rounded text-center font-semibold">
                                Thank you! We have received your request.
                            </div> : <p className="text-xs text-gray-500 mt-2">
                                We respect your privacy. Your info is safe with us.
                            </p>}

                        </form>

                    </div>
                </div>
            </div>
            {/* <div data-aos="fade-up" className="md:my-20 my-10 rounded-lg shadow-2xl shadow-gray-400  border-4 border-black w-11/12 md:w-9/12 mx-auto ">
                <video controls loop autoPlay src="/images/zoho/zoho-creator/powerful-ai-apps.mp4" className="rounded-lg"></video>
            </div> */}
        </section>
    );
}
