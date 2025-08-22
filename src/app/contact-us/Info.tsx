"use client";

import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function ContactInfo() {
    return (
        <section id="contact" className="py-16 max-w-6xl md:mx-auto sm:py-24 bg-white">
            <div className="container mx-auto  px-2 md:px-4">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Australia Office */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                            <Building className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Australia Office</h3>
                            <p className="text-gray-600 mt-1">
                                FI Digital 3 Tanunda Street, Vermont South, Victoria-3133,
                                Melbourne, Australia.
                            </p>
                        </div>
                    </div>

                    {/* Melbourne Office */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                            <Building className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Melbourne CBD Office</h3>
                            <p className="text-gray-600 mt-1">
                                FI Digital Level 9/440, Little Collins St. Melbourne VIC 3000,
                                Australia.
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 rounded-full bg-green-100 text-green-600">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-gray-600 mt-1">1300 921 280</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                        <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-gray-600 mt-1">support@fidigital.com.au</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12 w-full h-[400px] overflow-hidden rounded-lg shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509394!2d144.95592331531694!3d-37.81720997975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778b0b1f1a1b!2s440%20Little%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1682520000000!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
