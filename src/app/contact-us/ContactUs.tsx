'use client'
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const ZohoServices = [
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg',
    },
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.svg',
    },
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.svg',
    },
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg',
    },
    {
        img: 'https://www.zoho.com/books/images/new/books-product-logo-black.svg',
    },
]

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
    service: string;
    otherService: string;
    source: string;
};

type ErrorState = {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    otherService?: string;
    message?: string;
};

const servicesList = [
    { value: "", label: "Select a service" },
    { value: "zoho crm", label: "Zoho CRM" },
    { value: "zoho one", label: "Zoho One" },
    { value: "zoho creator", label: "Zoho Creator" },
    { value: "app development", label: "App Development" },
    { value: "web development", label: "Web Development" },
    { value: "other", label: "Other" },
];

export default function ContactUs() {
    const [country, setCountry] = useState<string>('');
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const service = searchParams.get('service') || '';

    useEffect(() => {
        // Only fetch if country is not already set
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
        setForm((prev) => ({ ...prev, source: pathname }));
    }, [country, pathname]);




    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: service,
        otherService: "",
        source: pathname,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ErrorState>({});
    const [triedSubmit, setTriedSubmit] = useState(false);

    const showOtherInput = form.service === "other";

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        // if (!form.phone.trim()) newErrors.phone = "Phone is required.";
        if (!form.service) newErrors.service = "Please select a service.";
        if (form.service === "other" && !form.otherService.trim())
            newErrors.otherService = "Please specify your service.";
        // if (!form.message.trim()) newErrors.message = "Message is required.";
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
            // Save otherService as service if "Other" is selected
            const dataToSave = {
                ...form,
                service: form.service === "other" ? form.otherService : form.service,
            };
            delete dataToSave.otherService;

            await addDoc(collection(db, "contactRequests"), { dataToSave, created: new Date() });
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
                service: "",
                otherService: "",
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
        <div
            id="contactUs"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-mai via-[#d6eaff] to-[#ffffff] px-2 py-10"
        >
            <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#ffffff84] relative md:p-8 overflow-hidden">
                <form
                    className="px-4 sm:px-8 pb-8 pt-2 flex flex-col justify-center md:flex-row gap-8"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {/* Left: Heading and labels */}
                    <div className="flex-1 flex flex-col text-gray-700 pr-0 space-y-4 md:pr-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                            YOUR SUCCESS STORY STARTS HERE!
                        </h2>
                        <p className="mb-6 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                            We re ready to turn your vision into reality with these key services:
                        </p>
                        <div className="flex my-10 gap-2">
                            {ZohoServices.map((item, index) => (
                                <div key={index} className="flex gap-10 items-center w-full">
                                    <img src={item.img} alt="" className="w-20 h-10 shadow-sm p-2 bg-white rounded hover:bg-gray-100" />
                                </div>
                            ))}
                        </div>
                        <ul className="space-y-8 text-sm sm:text-base md:text-lg">
                            <li className="flex items-start gap-4">
                                <img src="/images/icon/contactsvg/mobile.png" alt="" className="bg-mai rounded-full p-1 w-8 h-8" />
                                <span>
                                    <span className="font-bold">Mobile App Development:</span> Intuitive, user-friendly apps your customers will love
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <img src="/images/icon/contactsvg/devops-cloud.png" alt="" className="bg-mai rounded-full p-1 w-8 h-8" />
                                <span>
                                    <span className="font-bold">Cutting-Edge Technology:</span> Leverage AI, ML, and more to stay ahead of the competition.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <img src="/images/icon/contactsvg/team.png" alt="" className="bg-mai rounded-full p-1 w-8 h-8" />
                                <span>
                                    <span className="font-bold">Dedicated Team:</span> Our experts seamlessly integrate with your team for fast, quality results
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* Right: Inputs */}
                    <div className="flex-1 flex flex-col gap-4 justify-center">
                        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-700 mb-6 tracking-widest">
                            GET IN TOUCH
                        </h2>
                        <div>
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-base sm:text-lg focus:outline-none focus:border-black transition"
                            // required
                            />
                            {triedSubmit && errors.name && (
                                <div className="text-red-600 pl-2 text-xs sm:text-sm mt-1">{errors.name}</div>
                            )}
                        </div>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-base sm:text-lg focus:outline-none focus:border-black transition"
                            // required
                            />
                            {triedSubmit && errors.email && (
                                <div className="text-red-600 pl-2 text-xs sm:text-sm mt-1">{errors.email}</div>
                            )}
                        </div>
                        <div>
                            <PhoneInput
                                country={country}
                                value={form.phone}
                                onChange={handlePhoneChange}
                                inputClass="!w-full !border-b !border-gray-300 bg-transparent !text-gray-700  !pl-10 !py-1 !focus:outline-none !focus:border-mai"
                                inputStyle={{
                                    background: "none",
                                    border: "none",
                                    borderBottom: "1px solid #d1d5db",
                                    borderRadius: 0,
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
                                <div className="text-red-600 pl-2 text-xs sm:text-sm mt-1">{errors.phone}</div>
                            )}
                        </div>
                        <div>
                            <select
                                id="service"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-1 py-2 text-base sm:text-lg focus:outline-none focus:border-black transition"
                            >
                                {servicesList.map((item) => (
                                    <option key={item.value} value={item.value}>{item.label}</option>
                                ))}
                            </select>
                            {triedSubmit && errors.service && (
                                <div className="text-red-600 pl-2 text-xs sm:text-sm mt-1">{errors.service}</div>
                            )}
                        </div>
                        {showOtherInput && (
                            <div>
                                <input
                                    id="otherService"
                                    name="otherService"
                                    value={form.otherService}
                                    onChange={handleChange}
                                    placeholder="Please specify your service"
                                    className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-base sm:text-lg focus:outline-none focus:border-black transition"
                                />
                                {triedSubmit && errors.otherService && (
                                    <div className="text-red-600 pl-2 text-xs sm:text-sm mt-1">{errors.otherService}</div>
                                )}
                            </div>
                        )}
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={3}
                                className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-base sm:text-lg focus:outline-none focus:border-black transition resize-none"
                            // required
                            />
                            {triedSubmit && errors.message && (
                                <div className="text-red-600 pl-2 text-xs sm:text-sm mt-1">{errors.message}</div>
                            )}
                        </div>
                        <input type="hidden" name="source" value={form.source} />
                        <button
                            type="submit"
                            className="bg-mai text-white px-5 sm:px-6 py-2 mt-0 shadow hover:bg-maihover transition text-base sm:text-lg rounded"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send message"}
                        </button>
                        {submitted && (
                            <div className="bg-teal-600 px-2 py-4 text-white rounded shadow text-center font-semibold mt-2">
                                Thank you for contacting us!<br />
                                We have received your message and will get back to you soon.
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
