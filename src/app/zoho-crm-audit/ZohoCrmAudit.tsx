import Link from 'next/link'
import React from 'react'

const ZohoCrmAudit = () => {
    return (
        <div className='bg-white py-10'>
            {/* How It Works Section */}
            {/* <section className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center text-gray-700">
                    <div className="flex flex-col items-center max-w-xs">
                        <div className="mb-4 p-4 bg-blue-100 rounded-full">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <p className="font-semibold ">You submit your CRM details</p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs text-gray-700">
                        <div className="mb-4 p-4 bg-blue-100 rounded-full">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <p className="font-semibold">We analyze & audit your CRM</p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs">
                        <div className="mb-4 p-4 bg-blue-100 rounded-full">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="font-semibold">Receive a personalized report & call</p>
                    </div>
                </div>
            </section> */}

            <section className="relative w-full py-10 md:py-10 bg-[#5c5be5] overflow-hidden flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute left-4 top-8 w-5 h-5 rounded-full bg-white/80 opacity-80" />
                <div className="absolute left-1/4 top-1/4 w-6 h-6 rounded-full bg-[#a7b6f8] opacity-60" />
                <div className="absolute right-1/4 -top-16 w-64 h-64 rounded-full bg-[#6c6be8] opacity-20" />
                <div className="absolute right-20 top-10 w-28 h-28 rounded-full bg-[#7f8cf8] opacity-40" />
                <div className="absolute right-16 bottom-12 w-16 h-16 rounded-full bg-[#c6e2fa] opacity-80" />
                <div className="absolute left-2 bottom-10 w-4 h-4 rounded-full bg-white/70 opacity-70" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                    <div className="text-[#ffe066] text-lg font-semibold mb-2 text-center">Lets Work Together</div>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 text-center">
                        Ready to boost your CRM performance?
                    </h2>
                    <Link href="#zoho-audit">
                        <button className="bg-white px-4 py-2 rounded text-[#5c5be5] font-semibold md:text-lg text-sm  shadow-md hover:bg-gray-700 hover:text-white transition">
                            Request Your Free Audit Today
                        </button>
                    </Link>
                </div>
            </section>


        </div>
    )
}

export default ZohoCrmAudit
