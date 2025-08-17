"use client";

import { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import { Blog } from "@/types/blog";

interface BlogClientProps {
    blogs: Blog[];
    categories: string[];
    industries: string[];
}

export default function BlogClient({ blogs, categories, industries }: BlogClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    // Filter by category
    let filteredBlogs = blogs;
    if (selectedCategory) {
        filteredBlogs = filteredBlogs.filter((blog) => blog.category === selectedCategory);
    }
    if (selectedIndustry) {
        filteredBlogs = filteredBlogs.filter((blog) => blog.industries === selectedIndustry);
    }

    // Sort by date
    filteredBlogs = [...filteredBlogs].sort((a, b) => {
        const dateA = new Date(a.publishDate).getTime();
        const dateB = new Date(b.publishDate).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return (
        <section className="py-10 mt-20">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* LEFT: Sidebar */}
                <aside className="md:col-span-1 space-y-6">
                    <label className="block mb-2 text-lg font-semibold">Filter&apos;s</label>

                    {/* Category Filter as buttons */}
                    <div>
                        <label className="block mb-2 text-base font-semibold">Category</label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-1 rounded-full border ${selectedCategory === null ? "bg-primary text-white shadow-md" : "bg-white shadow-md"
                                    }`}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-1 rounded-full border ${selectedCategory === cat ? "bg-primary text-white shadow-md" : "bg-white shadow-md"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr />
                    {/* Industry Filter as buttons */}
                    <div>
                        <label className="block mb-2 text-base font-semibold">Industry</label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedIndustry(null)}
                                className={`px-4 py-1 rounded-full border ${selectedIndustry === null ? "bg-primary text-white shadow-md" : "bg-white shadow-md"
                                    }`}
                            >
                                All
                            </button>
                            {industries.map((ind) => (
                                <button
                                    key={ind}
                                    onClick={() => setSelectedIndustry(ind)}
                                    className={`px-4 py-1 rounded-full border ${selectedIndustry === ind ? "bg-primary text-white shadow-md" : "bg-white shadow-md"
                                        }`}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr />

                    {/* Date Sorting (still dropdown) */}
                    <div>
                        <label className="block mb-2 text-base font-semibold">Sort by Date</label>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSortOrder("newest")}
                                className={`px-4 py-1 rounded-lg border transition-colors ${sortOrder === "newest"
                                    ? "bg-primary text-white border-primary shadow-md"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 shadow-md"
                                    }`}
                            >
                                Recent
                            </button>
                            <button
                                onClick={() => setSortOrder("oldest")}
                                className={`px-4 py-1 rounded-lg border transition-colors ${sortOrder === "oldest"
                                    ? "bg-primary text-white border-primary shadow-md"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 shadow-md"
                                    }`}
                            >
                                Oldest
                            </button>
                        </div>
                    </div>

                </aside>

                {/* RIGHT: Blogs */}
                <div className="md:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredBlogs.map((blog) => (
                        <SingleBlog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
