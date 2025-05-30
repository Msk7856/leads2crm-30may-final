import ZohoBanner from '@/app/zoho-crm/ZohoBanner'
import React from 'react'

const ZohoCrm = () => {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center mt-10" >

            <div className="min-h-screen w-full flex items-center justify-center bg-[#fdf4ea]">

                <div
                    className="w-full mx-auto flex-col justify-center items-center py-16"
                    style={{
                        background: "linear-gradient(90deg, #fbeee6 0%, #fbeee6 33%, #e6eafd 66%, #e6eafd 100%)",
                    }}
                >
                    <div className="w-full max-w-8xl px-4 md:px-10 lg:px-14 mx-auto">
                        <h1 className="text-sky-500 text-4xl sm:text-4xl md:text-6xl lg:text-9xl text-center font-bold leading-tight">
                            Your great Indian
                            <br />
                            growth story
                        </h1>
                        <p className="text-gray-700 text-lg pb-10 sm:text-2xl md:text-3xl text-center font-semibold mt-8 px-2 md:mt-14">
                            Convert more and grow your business in the world fastest growing economy,
                            with the magic of contextual AI and thoughtful UI.
                        </p>
                    </div>

                    <div className="w-full max-w-8xl flex flex-col md:flex-row items-stretch justify-center gap-8 relative">
                        {/* Gartner */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="bg-white rounded-full shadow w-20 h-20 flex items-center justify-center mb-4">
                                <img
                                    src="/images/zoho/gartner.jpg"
                                    alt="Gartner"
                                    className="w-16 h-16 rounded-full object-contain"
                                />
                            </div>
                            <div className="text-base text-black font-medium text-center md:text-left">
                                Visionary in 2024 Magic Quadrant™<br />
                                for Sales Force Automation Platforms<br />
                                <a href="#" className="text-sky-600 font-semibold underline hover:text-sky-800">Read more &gt;&gt;</a>
                            </div>
                        </div>

                        {/* Center Form */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="bg-[#fdf1df] rounded-[3rem] shadow-[0_-6px_6px_-0px_rgba(0,0,0,0.1)] px-8 py-10 w-full max-w-md mx-auto flex flex-col items-center">
                                <div className="font-semibold mb-6 text-black text-xl text-center">
                                    Get started with your<br />15-day free trial
                                </div>
                                <form className="w-full flex flex-col gap-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="rounded-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="rounded-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
                                    />
                                    <div className="relative">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="rounded-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white w-full pr-10"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer select-none">
                                            {/* Eye icon for show/hide password (optional) */}
                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="rounded-l-full px-5 py-2 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 select-none">
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            className="rounded-r-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white w-full"
                                        />
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        It looks like you’re in INDIA based on your IP.
                                    </div>
                                    <label className="flex items-center mt-1 text-xs text-gray-600">
                                        <input type="checkbox" className="mr-2 accent-sky-500" />
                                        I agree to the <a href="#" className="underline ml-1">Terms of Service</a> and <a href="#" className="underline ml-1">Privacy Policy</a>
                                    </label>
                                    <button
                                        type="submit"
                                        className="mt-2 w-full rounded-full bg-[#e53935] hover:bg-[#c62828] text-white font-semibold py-3 text-lg shadow transition"
                                    >
                                        GET STARTED
                                    </button>
                                </form>
                                <div className="mt-4 text-xs text-gray-500 text-center">or sign in using</div>
                                <div className="flex justify-center gap-4 mt-2">
                                    <button className="bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow text-[#db4437]">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 48 48"><path d="M44.5 20H24v8.5h11.7c-1.6 4.5-6 7.7-11.7 7.7-7 0-12.7-5.7-12.7-12.7S16 11.3 23 11.3c3.3 0 6.3 1.2 8.6 3.3l6.4-6.4C34.1 4.7 29.3 2.5 24 2.5 12.4 2.5 3 11.9 3 23.5S12.4 44.5 24 44.5c10.9 0 20-8.8 20-20 0-1.3-.1-2.2-.3-3.2z" /></svg>
                                    </button>
                                    <button className="bg-[#0077b5] border border-[#0077b5] rounded-full w-8 h-8 flex items-center justify-center shadow">
                                        <svg width="20" height="20" fill="white" viewBox="0 0 48 48"><path d="M42 4H6C4.9 4 4 4.9 4 6v36c0 1.1.9 2 2 2h36c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM14.5 38H9V19h5.5v19zM12 16.6c-1.8 0-3-1.2-3-2.7 0-1.6 1.2-2.7 3-2.7s3 1.2 3 2.7c0 1.5-1.2 2.7-3 2.7zm26 21.4h-5.5v-9.3c0-2.3-.8-3.8-2.9-3.8-1.6 0-2.5 1.1-2.9 2.1-.2.5-.2 1.2-.2 1.9V38H21V19h5.3v2.6c.7-1.1 2-2.6 4.9-2.6 3.6 0 6.3 2.4 6.3 7.4V38z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Nucleus Research */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="bg-white rounded-full shadow w-20 h-20 flex items-center justify-center mb-4">
                                <img
                                    src="/images/zoho/nucleus.jpg"
                                    alt="Nucleus Research"
                                    className="w-16 h-16 rounded-full object-contain"
                                />
                            </div>
                            <div className="text-base text-black font-medium text-center md:text-left">
                                Nucleus Research - Leader,<br />
                                SFA Technology Value Matrix 2025<br />
                                <a href="#" className="text-sky-600 font-semibold underline hover:text-sky-800">Read more &gt;&gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZohoCrm
