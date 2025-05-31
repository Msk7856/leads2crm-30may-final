'use client'
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import FAQ from "@/components/FAQ/FAQ";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

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

const ContactUs = () => {
  const [country, setCountry] = useState<string>('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || '';
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
    <>
      <div
        id="contactUs"
        className="min-h-screen mt-10 flex items-center justify-center bg-gradient-to-b from-mai via-[#d6eaff]  to-[#ffffff] px-2 py-16"
      >
        <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-b from-[#ffffff]  to-[#ffffff84] relative md:p-8 overflow-hidden">
          {/* Browser bar mock */}
          <div className="flex items-center px-6 pt-6 pb-4">
            <div className="w-16 h-5 bg-mai rounded-full mr-auto"></div>
            <div className="flex gap-2 ml-auto">
              <div className="w-6 h-2 rounded-full bg-mai"></div>
              <div className="w-6 h-2 rounded-full bg-mai"></div>
              <div className="w-6 h-2 rounded-full bg-mai"></div>
            </div>
          </div>
          {/* Main form */}
          <form
            className="px-8 pb-8 pt-2 flex flex-col justify-center md:flex-row gap-8"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Left: Heading and labels */}
            <div className="flex-1 flex flex-col text-gray-700 pr-0 space-y-4 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">YOUR SUCCESS STORY STARTS HERE!</h2>
              <p className="mb-6 text-lg font-light">
                Were ready to turn your vision into reality with these key services:
              </p>
              <ul className="space-y-10 text-lg">
                <li className="flex items-start gap-4">
                  <img src="/images/icon/contactsvg/mobile.png" alt="" className="bg-mai rounded-full p-1" />
                  <span>
                    <span className="font-bold">Mobile App Development:</span> Intuitive, user-friendly apps your customers will love
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <img src="/images/icon/contactsvg/devops-cloud.png" alt="" className="bg-mai rounded-full p-1" />
                  <span>
                    <span className="font-bold">Cutting-Edge Technology:</span> Leverage AI, ML, and more to stay ahead of the competition.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <img src="/images/icon/contactsvg/team.png" alt="" className="bg-mai rounded-full p-1" />
                  <span>
                    <span className="font-bold">Dedicated Team:</span> Our experts seamlessly integrate with your team for fast, quality results
                  </span>
                </li>
              </ul>
            </div>
            {/* Right: Inputs */}
            <div className="flex-1 flex flex-col gap-4 justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-6 tracking-widest">
                GET IN TOUCH
              </h2>
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition"
                // required
                />
                {triedSubmit && errors.name && (
                  <div className="text-red-600 pl-2 text-xs mt-1">{errors.name}</div>
                )}
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition"
                // required
                />
                {triedSubmit && errors.email && (
                  <div className="text-red-600 pl-2 text-xs mt-1">{errors.email}</div>
                )}
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
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
                  <div className="text-red-600 pl-2 text-xs mt-1">{errors.phone}</div>
                )}
              </div>
              <div>
                <label className="sr-only" htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-1 py-2 text-lg focus:outline-none focus:border-black transition"
                >
                  <option value="">Select a service</option>
                  <option value="zoho crm">Zoho CRM</option>
                  <option value="zoho one">Zoho One</option>
                  <option value="zoho creator">Zoho Creator</option>
                  <option value="app development">App Development</option>
                  <option value="web development">Web Development</option>
                  <option value="other">Other</option>
                </select>
                {triedSubmit && errors.service && (
                  <div className="text-red-600 pl-2 text-xs mt-1">{errors.service}</div>
                )}
              </div>
              {showOtherInput && (
                <div>
                  <label className="sr-only" htmlFor="otherService">Other Service</label>
                  <input
                    id="otherService"
                    name="otherService"
                    value={form.otherService}
                    onChange={handleChange}
                    placeholder="Please specify your service"
                    className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition"
                  />
                  {triedSubmit && errors.otherService && (
                    <div className="text-red-600 pl-2 text-xs mt-1">{errors.otherService}</div>
                  )}
                </div>
              )}
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={3}
                  className="w-full border-b text-gray-700 border-gray-300 bg-transparent px-2 py-2 text-lg focus:outline-none focus:border-black transition resize-none"
                // required
                />
                {triedSubmit && errors.message && (
                  <div className="text-red-600 pl-2 text-xs mt-1">{errors.message}</div>
                )}
              </div>
              <input type="hidden" name="source" value={form.source} />
              <button
                type="submit"
                className="bg-mai text-white  px-6 py-2 mt-0 shadow hover:bg-maihover transition"
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
      <FAQ />
    </>
  );
};

export default ContactUs;
