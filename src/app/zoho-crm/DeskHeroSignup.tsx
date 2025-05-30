'use client'
// components/DeskHeroSignup.jsx
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function DeskHeroSignup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="bg-white py-12 px-2">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 relative">
                {/* Left: Headline and Description */}
                <div className="flex-1 z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
                        Built for how<br />
                        India delivers<br />
                        service
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl max-w-xl">
                        Power customer service at any scale, in any language, and at any hour. Zoho Desk adapts to the unique needs of the world fastest-growing economy, empowering companies across all industries and regions.
                    </p>
                </div>
                {/* Right: Signup Card */}
                <div className="flex-1 flex justify-center z-10">
                    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
                        <div className="text-gray-900 text-lg font-semibold mb-6 text-center">
                            Get 15-day free trial
                        </div>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18113c]"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18113c]"
                                required
                            />
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password *"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18113c] pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    tabIndex={-1}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    onClick={() => setShowPassword((v) => !v)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="flex">
                                <span className="bg-gray-100 border border-r-0 border-gray-300 rounded-l px-4 py-2 flex items-center text-gray-700 select-none">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number *"
                                    className="w-full border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18113c]"
                                    required
                                />
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                It looks like you’re in INDIA based on your IP.
                            </div>
                            <label className="flex items-center mt-2 text-xs text-gray-600">
                                <input type="checkbox" className="mr-2 accent-[#18113c]" required />
                                I agree to the&nbsp;
                                <a href="#" className="underline">Terms of Service</a> and&nbsp;
                                <a href="#" className="underline">Privacy Policy</a>.
                            </label>
                            <button
                                type="submit"
                                className="mt-3 w-full rounded bg-[#e53935] hover:bg-[#c62828] text-white font-bold py-3 text-base shadow transition"
                            >
                                SIGN UP FOR FREE
                            </button>
                        </form>
                        <div className="mt-4 text-xs text-gray-500 text-center">or sign in using</div>
                        <div className="flex justify-center gap-3 mt-2">
                            <button className="bg-white border rounded w-9 h-9 flex items-center justify-center shadow text-gray-700">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            </button>
                            <button className="bg-white border rounded w-9 h-9 flex items-center justify-center shadow text-gray-700">
                                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Decorative background images (optional) */}
                <img src="/images/desk-bg-1.png" className="absolute left-1/2 top-0 w-48 z-0 hidden md:block" alt="" />
                <img src="/images/desk-bg-2.png" className="absolute right-0 bottom-0 w-32 z-0 hidden md:block" alt="" />
            </div>
        </section>
    );
}
