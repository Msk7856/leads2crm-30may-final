'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface Industry {
    title: string;
    desc: string;
    image: string;
    bg: string;
    btn: string;
}

const industries = [
    {
        title: "Travel Agency CRM",
        desc: "Designed for travel companies to organize tours, leads, bookings, invoices, and vendor data with ease—streamlining trip management and improving customer experiences.",
        image: "/images/zoho/zoho-crm/industry-travel-agency-img.jpg",
        bg: "bg-sky-50",
        btn: "border-sky-300 text-sky-800 hover:bg-sky-200",
    },
    {
        title: "Real Estate Agency CRM",
        desc: "Helps property agents manage listings, buyer inquiries, sales activity, follow-ups, and deal flow from one place—ensuring no opportunity is missed during the sales journey.",
        image: "/images/zoho/zoho-crm/industry-realestate-agency-img.jpg",
        bg: "bg-violet-50",
        btn: "border-violet-300 text-violet-800 hover:bg-violet-200",
    },
    {
        title: "Real Estate Developer CRM",
        desc: "Enables developers to oversee client relationships, property deals, site offers, contracts, and project timelines efficiently—boosting coordination and sales outcomes.",
        image: "/images/zoho/zoho-crm/industry-realestate-developer-img.jpg",
        bg: "bg-amber-50",
        btn: "border-amber-300 text-amber-800 hover:bg-amber-200",
    },
    {
        title: "Training Provider CRM",
        desc: "Built for educational institutions and tutors to manage learners, course schedules, registrations, feedback, and communication—all from one smart dashboard.",
        image: "/images/zoho/zoho-crm/industry-training-provider-img.jpg",
        bg: "bg-red-50",
        btn: "border-red-300 text-red-800 hover:bg-red-200",
    },
    {
        title: "Law Firm CRM",
        desc: "Empowers lawyers and law firms to track case files, billing hours, client data, legal contracts, and court schedules—reducing admin work and improving accuracy.",
        image: "/images/zoho/zoho-crm/industry-law-firm-img.jpg",
        bg: "bg-purple-50",
        btn: "border-purple-300 text-purple-800 hover:bg-purple-200",
    },
    {
        title: "Entertainer CRM",
        desc: "Tailored for performers like DJs, singers, or speakers to handle leads, bookings, schedules, services, and invoicing—letting artists focus more on their performance.",
        image: "/images/zoho/zoho-crm/industry-entertainer-img.jpg",
        bg: "bg-orange-50",
        btn: "border-orange-300 text-orange-800 hover:bg-orange-200",
    },
    {
        title: "Kitchen & Interiors",
        desc: "Create unique client experiences with customizable CRM, Interior Design CRM software integrates client data, project management, and communication tools to enhance customer experience and project delivery.",
        image: "/images/zoho/zoho-crm/Segmentation-of-leads.svg",
        bg: "bg-orange-50",
        btn: "border-orange-300 text-orange-800 hover:bg-orange-200",
    },
    {
        title: "Interior Design CRM",
        desc: "Every kitchen and interior design business has unique workflows and client needs. A customizable CRM allows you to tailor pipelines, fields, and stages to fit your specific business processes.",
        image: "/images/zoho/zoho-crm/Customizable-reports.svg",
        bg: "bg-orange-50",
        btn: "border-orange-300 text-orange-800 hover:bg-orange-200",
    },
];

interface FormState {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface ErrorState {
    name?: string;
    email?: string;
    phone?: string;
}




export default function ZohoCRMIndustry() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState<string>("");
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<ErrorState>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const openModal = (industry: string) => {
        setSelectedIndustry(industry);
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setSubmitted(false);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handlePhoneChange = (value: string) => {
        setForm((prev) => ({ ...prev, phone: value }));
        setErrors((prev) => ({ ...prev, phone: undefined }));
    };

    const validate = (): ErrorState => {
        const errs: ErrorState = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) errs.email = "Email is required";
        if (!form.phone.trim()) errs.phone = "Mobile is required";
        return errs;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;
        setLoading(true);
        try {
            await addDoc(collection(db, "Enquiries"), {
                ...form,
                service: selectedIndustry, // Save as 'service'
                created: new Date(),
            });
            setSubmitted(true);
            setForm({ name: "", email: "", phone: "", message: "" });
            // setModalOpen(false);
        } catch (err) {
            alert("Failed to send. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section
            className="py-12 px-2"
            style={{
                backgroundImage:
                    "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
            }}
        >
            <div className="max-w-4xl mx-auto mb-10 text-center">
                <div className="text-lg text-mai font-semibold mb-2">Ready-to-use</div>
                <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-4">
                    Zoho CRM Industry Solutions
                </h2>
                <p className="text-gray-700 max-w-3xl text-center mx-auto">
                    Every industry is different, and so are their requirements from CRM. Based on our experience of deploying Zoho CRM for various industries, we have tailored industry-specific CRM solutions to give you maximum benefit with minimum customization.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {industries.map((item, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        className={`rounded-2xl mx-2 overflow-hidden shadow-sm flex flex-col md:flex-row ${item.bg}`}
                    >
                        {/* Left: Image */}
                        <div className="md:w-1/2 w-full h-56 md:h-auto">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Right: Content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between p-8">
                            <div>
                                <h3 className="font-bold text-gray-700 text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-700 mb-7">{item.desc}</p>
                            </div>
                            <button
                                className={`px-6 py-2 border font-medium transition ${item.btn}`}
                                onClick={() => openModal(item.title)}
                                type="button"
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-8 relative mx-2">
                        <button
                            className="absolute right-4 top-4 text-gray-400 hover:text-red-500 text-2xl"
                            onClick={closeModal}
                            aria-label="Close"
                            type="button"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl hidden font-bold mb-2 text-mai">{selectedIndustry}</h3>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
                            <div>
                                <label className="block text-gray-700 text-sm font-medium">Name<span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 bg-transparent text-gray-700  px-2 py-1 focus:outline-none focus:border-mai"
                                // required
                                />
                                {errors.name && <div className="text-red-600 text-xs mt-2">{errors.name}</div>}
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium ">Business Email<span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 bg-transparent text-gray-700 px-2 py-1 focus:outline-none focus:border-mai"
                                // required
                                />
                                {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Mobile<span className="text-red-500">*</span></label>
                                <PhoneInput
                                    country={'sa'}
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
                                {errors.phone && <div className="text-red-600 text-xs mt-1">{errors.phone}</div>}
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full border-b border-gray-300 bg-transparent text-gray-700  px-2 py-2 focus:outline-none focus:border-mai resize-none"
                                    placeholder="Write your message (optional)"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-mai text-white font-semibold py-2 hover:bg-maihover transition"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                            {submitted && (
                                <div className="bg-emerald-200 text-gray-700 text-center py-2 font-semibold">
                                    Thank you! Your enquiry has been submitted, we will connect you shortly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}