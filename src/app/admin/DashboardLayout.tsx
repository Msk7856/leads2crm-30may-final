"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, FileText, Users, Settings, PlusCircle } from "lucide-react";

interface DashboardLayoutProps {
    children: ReactNode;
}

const navItems = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: "/admin/create-blog", label: "Create Blog", icon: <PlusCircle className="w-5 h-5" /> },
    { href: "/admin/blogs", label: "Manage Blogs", icon: <FileText className="w-5 h-5" /> },
    { href: "/admin/users", label: "Users", icon: <Users className="w-5 h-5" /> },
    { href: "/admin/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-50 text-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white/90 backdrop-blur-lg border-r border-gray-200 shadow-sm flex flex-col">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-2xl font-bold   text-gray-700 ">
                        Admin Panel
                    </h2>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200"
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} Leads2CRM</p>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm sticky top-0 z-10">
                    <h1 className="text-lg font-semibold">Dashboard</h1>

                    <div className="flex items-center gap-6">
                        {/* Notification Bell */}
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            <svg
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.918 18 13V9c0-3.314-2.686-6-6-6S6 5.686 6 9v4c0 .918-.21 1.79-.595 2.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        {/* Profile */}
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-semibold">Admin</p>
                                <p className="text-xs text-gray-500">Superuser</p>
                            </div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-T6zY1cMc6ZYwv1L457gamQCZ9RcMVClYg&s"
                                alt="User"
                                className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm"
                            />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-2 bg-gray-50 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
