"use client";

import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function ContactInfo() {
    return (
        <section id="contact" className="py-8 max-w-6xl md:mx-auto sm:py-16 bg-white">
            <div className="container mx-auto  px-2 md:px-2">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Australia Office */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border hover:shadow-xl hover:scale-105 transition">
                        <div className="p-3 rounded-full bg-sky-200 text-sky-600">
                            <Building className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Dubai Office / Jeedah Office</h3>
                            <p className="text-gray-600 mt-1">
                                Commercial-5 Building,
                                Plot No. 176-0, Saih Shuaib 2,
                                Dubai, United Arab Emirates
                            </p>
                        </div>
                    </div>



                    {/* Melbourne Office */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border hover:shadow-xl hover:scale-105 transition">
                        <div className="p-3 rounded-full bg-sky-200 text-sky-600">
                            <Building className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">New Delhi Office</h3>
                            <p className="text-gray-600 mt-1">
                                P3, world Trade tower
                                Sector 16, Noida, Uttar Pradesh.
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border hover:shadow-xl hover:scale-105 transition">
                        <div className="p-3 rounded-full bg-lime-200 text-green">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-gray-600 mt-1">+966-559034101, +91 9470244795</p>
                            {/* <p className="text-gray-600 mt-1">+91 9470244795</p> */}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border hover:shadow-xl hover:scale-105 transition">
                        <div className="p-3 rounded-full bg-amber-200 text-yellow">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-gray-600 mt-1">info@leads2crm.com</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12 flex w-full h-[340px] overflow-hidden rounded bg-gray-200 p-4 shadow-md gap-4">
                    <div className="w-full rounded">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327625.5045178468!2d54.87284314767266!3d24.970168720512184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0be7f7f1555d%3A0x956692a9f6a923da!2sSaih%20Shuaib%202%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1756105256760!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="w-full rounded">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.865688333837!2d77.31459607450776!3d28.576929186605277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b22a79785%3A0xac760eff02b41b9a!2sWorld%20Trade%20Tower!5e1!3m2!1sen!2sin!4v1756105389226!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
