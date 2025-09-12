'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Gem, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
    { href: "#services", label: "Solutions" },
    { href: "#results", label: "See Results" },
    { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        >
            <div className={` mx-auto flex h-20 items-center justify-between px-4 md:px-6 ${isScrolled ? "bg-white/50 shadow-md backdrop-blur-md" : "bg-transparent"}`}>
                {/* Logo */}
                <Link href="/" className="md:ml-20 flex  items-center gap-2 font-bold text-xl">
                    {/* <Gem className="h-6 w-6 text-blue-500" /> */}
                    {/* <span className="font-headline">CRM Ascent</span> */}
                    <Image src="/images/logo/logoTranparent.png" alt="Lead2crm logo" className="w-40" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex  items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-800 text-lg hover:text-blue transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    {/* <Link
                        href="#"
                        target="_blank"
                        className="hidden sm:inline-block rounded-full bg-mai text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition"
                    >
                        Book Free Consultation
                    </Link> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
                    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 py-6 flex flex-col z-50">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                                <Image src="/images/logo/logoTranparent.png" alt="Lead2crm logo" className="w-40" />
                            </Link>
                            <button
                                className="self-end p-2 rounded-md hover:bg-gray-100 transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6 bg-gray-100 text-black hover:bg-red-400 rounded-full p-1" />
                            </button>
                        </div>



                        <nav className="flex flex-col gap-4 mt-6 ml-2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-800 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded hover:text-blue transition text-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* <Link
                            href="#"
                            target="_blank"
                            className="mt-6 rounded-full bg-mai text-white px-4 py-2 text-center text-sm font-medium hover:bg-sky-600 transition"
                        >
                            Book Free Consultation
                        </Link> */}
                    </div>
                </div>
            )}
        </header>
    );
}
