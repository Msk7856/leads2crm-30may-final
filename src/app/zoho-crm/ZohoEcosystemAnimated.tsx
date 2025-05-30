'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
    { name: "Zoho Survey", icon: "/images/zoho/zoho-crm/services-icons/servey.webp" },
    { name: "Zoho Desk", icon: "/images/zoho/zoho-crm/services-icons/desk.png" },
    { name: "Zoho Forms", icon: "/images/zoho/zoho-crm/services-icons/forms.png" },
    { name: "Zoho Mail", icon: "/images/zoho/zoho-crm/services-icons/mail.png" },
    { name: "Zoho Projects", icon: "/images/zoho/zoho-crm/services-icons/projects.png" },
    { name: "Zoho Campaigns", icon: "/images/zoho/zoho-crm/services-icons/campaigns.webp" },
    { name: "Zoho Analytics", icon: "/images/zoho/zoho-crm/services-icons/analytics.png" },
    { name: "Zoho SalesIQ", icon: "/images/zoho/zoho-crm/services-icons/salesIQ.png" },
];

export default function ZohoEcosystemAnimated() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-7xl rounded-lg my-10 mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-mai to-[#005fb8] px-2 md:px-6 py-8 md:py-20">
            <div className="w-full md:flex-1 flex flex-col  md:flex-row items-center justify-between gap-14">
                {/* Mobile: 2-column grid, Desktop: original animated layout */}
                <div className="w-full md:w-auto">
                    {/* Mobile grid */}
                    <div className="grid grid-cols-2 gap-6 md:hidden">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.name}
                                className="w-full h-24 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center select-none transition-all duration-300"
                                animate={{
                                    scale: i === activeIndex ? 1.08 : 1,
                                    zIndex: i === activeIndex ? 10 : 1,
                                    boxShadow:
                                        i === activeIndex
                                            ? "0 8px 24px 0 rgba(60,60,120,0.16)"
                                            : "0px 2px 12px 0px #0000000D",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                }}
                                style={{ transformOrigin: "center center" }}
                            >
                                <img src={service.icon} alt={service.name} className="w-8 h-8 mb-1" />
                                <span className="text-xs font-semibold text-gray-700">{service.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    {/* Desktop animated absolute layout */}
                    <div className="relative hidden md:block  w-[400px] h-[400px]">
                        {services.map((service, i) => {
                            // Arrange in a circle for desktop
                            const angle = (i / services.length) * 2 * Math.PI;
                            const radius = 130;
                            const x = Math.round(Math.cos(angle) * radius) + 170; // centerX
                            const y = Math.round(Math.sin(angle) * radius) + 170; // centerY
                            return (
                                <motion.div
                                    key={service.name}
                                    className="absolute w-28 h-28 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center select-none transition-all duration-300"
                                    style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                                    animate={{
                                        scale: i === activeIndex ? 1.15 : 1,
                                        zIndex: i === activeIndex ? 10 : 1,
                                        boxShadow:
                                            i === activeIndex
                                                ? "0 8px 24px 0 rgba(60,60,120,0.16)"
                                                : "0px 2px 12px 0px #0000000D",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20,
                                    }}
                                >
                                    <img src={service.icon} alt={service.name} className="w-8 h-8 mb-1" />
                                    <span className="text-xs font-semibold text-gray-700">{service.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                {/* Right: Text */}
                <div className="flex-1 w-full md:w-auto flex flex-col justify-center items-center md:pl-10 mt-8 md:mt-0">
                    <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-extrabold mb-4 leading-tight text-center md:text-left">
                        Enter the<br />Zoho Ecosystem
                    </h2>
                    <p className="text-[#e2e8f0] text-md md:text-base max-w-sm mb-2 text-center md:text-left">
                        Zoho is best used with Zoho. You can integrate the free editions of some of the best Zoho applications with Zoho CRM for customer support, marketing campaigns, surveys, and more. Sign up for one Zoho product and gain access to the entire portfolio with the same credentials.
                    </p>
                </div>
            </div>
        </section>
    );
}
