'use client'
import { Mail, MapPin, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase"; // Adjust path as needed
import { collection, addDoc } from "firebase/firestore";


const ContactUs = () => {

    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    // Get service from URL if present
    const searchParams = useSearchParams();
    const source = searchParams.get('source') || '';
    const service = searchParams.get('service') || '';

    // Form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: service,
        source: pathname,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "contactRequests"), form);
            // Reset the form fields after submit
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
                service: service,
                source: source,
            });
            setSubmitted(true);
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen px-8 py-24 bg-white text-gray-700 font-sans"
            style={{
                backgroundImage:
                    "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
            }}
        >
            <div className="py-10">
                <h1 className="text-blue-700 mb-6 text-center text-4xl font-bold">
                    CONTACT US
                </h1>
                <p className="mx-auto mb-4 max-w-4xl text-center text-lg">
                    Feel free to reach out to us with any inquiries or to discuss your project needs, our dedicated team is ready to assist you and provide the support you require.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Left: Contact Info */}
                <div className="gap gap-y-10" data-aos="fade-right">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 tracking-widest">
                        INFORMATION
                    </h2>
                    <div className="flex items-start gap-6 mb-4">
                        <MapPin className="text-cyan-600 w-6 h-6" />
                        <p className="mb-4 leading-relaxed text-gray-700">
                            Kingdom of Saudi Arabia<br />
                            AL Madinah Al Monwarah street, <br /> Al Bawadi Dis, Al Madina Plaza Building,
                            Floor 5, Office 505
                        </p></div>
                    <div className="flex items-start gap-6 mb-4">
                        <Phone className="text-cyan-600 w-6 h-6" />
                        <p>
                            Tel: 00 966 114 229 922<br />
                            Fax: 00 966 11 211 411
                        </p>
                    </div>
                    <div className="flex items-start gap-6 mb-4">
                        <Mail className="text-cyan-600 w-6 h-6" />
                        <p>info@sedra.net.sa</p>
                    </div>
                    <div className="flex items-start gap-6 mb-4">
                        <MapPin className="text-cyan-600 w-6 h-6" />
                        <p>www.sedra.net.sa</p>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 tracking-widest">
                        GET IN TOUCH
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full name"
                                className="w-full border border-gray-700 bg-transparent px-4 py-2 rounded outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full border border-gray-700 bg-transparent px-4 py-2 rounded outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className="w-full border border-gray-700 bg-transparent px-4 py-2 rounded outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                        </div>
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-700 bg-transparent px-4 py-2 rounded outline-none text-gray-800 focus:ring-2 focus:ring-cyan-500"
                        >
                            <option value="">Select a service</option>
                            <option value="zoho crm">Zoho CRM</option>
                            <option value="zoho one">Zoho One</option>
                            <option value="zohoOne step">Zoho One Step</option>
                            <option value="app development">App Development</option>
                            <option value="other">Other</option>
                        </select>

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Message"
                            className="w-full border border-gray-700 bg-transparent px-4 py-2 rounded outline-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                            required
                        ></textarea>
                        <input
                            type="hidden"
                            name="source"
                            value={form.source}
                        />
                        <button
                            type="submit"
                            className="mt-4 px-8 py-2 bg-[#4763ad] font-semibold rounded shadow hover:bg-[#5b75be] text-white transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "SEND"}
                        </button>
                    </form>
                    {/* Thank you message at the bottom */}
                    {submitted && (
                        <div className="mt-6 p-4 bg-green-50 rounded-lg text-green-700 text-center font-semibold shadow-lg">
                            Thank you for contacting us!<br />
                            We have received your message and will get back to you soon.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
