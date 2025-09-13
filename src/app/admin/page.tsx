"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import {
    LayoutDashboard,
    FileText,
    CheckCircle2,
    Loader2,
} from "lucide-react";

interface Blog {
    id: string;
    title: string;
    status?: string; // e.g., "draft" or "published"
    createdAt: string;
}

export default function AdminDashboardPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(10));
                const snapshot = await getDocs(q);

                const data: Blog[] = snapshot.docs.map((docSnap) => {
                    const d = docSnap.data();
                    return {
                        id: docSnap.id,
                        title: d.title || "Untitled",
                        status: d.status || "draft",
                        createdAt: d.createdAt?.toDate
                            ? d.createdAt.toDate().toLocaleDateString()
                            : "N/A",
                    };
                });

                setBlogs(data);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const totalBlogs = blogs.length;
    const liveBlogs = blogs.filter((b) => b.status === "published").length;

    return (
        <div className="p-6 space-y-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                <LayoutDashboard className="w-7 h-7 text-sky-600" /> Admin Dashboard
            </h1>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl shadow bg-gradient-to-r from-sky-500 to-sky-600 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Total Blogs</h2>
                        <FileText className="w-8 h-8 opacity-80" />
                    </div>
                    <p className="text-3xl font-bold mt-4">{loading ? "--" : totalBlogs}</p>
                </div>

                <div className="p-6 rounded-2xl shadow bg-gradient-to-r from-emerald-400 to-emerald-600 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Live Blogs</h2>
                        <CheckCircle2 className="w-8 h-8 opacity-80" />
                    </div>
                    <p className="text-3xl font-bold mt-4">{loading ? "--" : liveBlogs}</p>
                </div>

                <div className="p-6 rounded-2xl shadow bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Draft Blogs</h2>
                        <FileText className="w-8 h-8 opacity-80" />
                    </div>
                    <p className="text-3xl font-bold mt-4">
                        {loading ? "--" : totalBlogs - liveBlogs}
                    </p>
                </div>
            </div>

            {/* Top 10 Blogs */}
            <div className="bg-white shadow rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    📊 Top 10 Latest Blogs
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-sky-500" />
                    </div>
                ) : blogs.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {blogs.map((blog, idx) => (
                            <li
                                key={blog.id}
                                className="py-3 flex items-center justify-between hover:bg-gray-50 px-2 rounded-lg transition"
                            >
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {idx + 1}. {blog.title}
                                    </p>
                                    <span className="text-sm text-gray-500">
                                        {blog.createdAt} •{" "}
                                        <span
                                            className={`${blog.status === "published"
                                                ? "text-green-600"
                                                : "text-yellow-600"
                                                } font-medium`}
                                        >
                                            {blog.status}
                                        </span>
                                    </span>
                                </div>
                                <button className="text-sky-600  hover:underline text-sm">
                                    View
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-center py-8">
                        No blogs found. Start creating some 🚀
                    </p>
                )}
            </div>
        </div>
    );
}
