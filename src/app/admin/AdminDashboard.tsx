"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// ✅ Slugify helper
function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

export default function AdminDashboard() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [industries, setIndustries] = useState("");
    const [category, setCategory] = useState("");

    const [authorName, setAuthorName] = useState("");
    const [authorDesignation, setAuthorDesignation] = useState("");
    const [authorImageUrl, setAuthorImageUrl] = useState("");

    const [blogImageUrl, setBlogImageUrl] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "blogs"), {
                title,
                subtitle,
                excerpt,
                description,
                industries,
                category,
                tags,
                slug: slugify(title),
                image: blogImageUrl || "/images/dummyBlogImg.jpg",
                author: {
                    name: authorName || "Unknown",
                    designation: authorDesignation || "",
                    image: authorImageUrl || "/images/userIcon.png",
                },
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
                publishDate: Timestamp.now(),
            });

            alert("✅ Blog created successfully!");

            // reset form
            setTitle("");
            setSubtitle("");
            setExcerpt("");
            setDescription("");
            setIndustries("");
            setCategory("");
            setTags([""]);
            setAuthorName("");
            setAuthorDesignation("");
            setAuthorImageUrl("");
            setBlogImageUrl("");
        } catch (err: any) {
            console.error("🔥 Firestore Error:", err);
            alert("Error saving blog: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 ">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Blog</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex gap-4">
                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                        required
                    />

                    {/* Subtitle */}
                    <input
                        type="text"
                        placeholder="Subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />
                </div>

                {/* Excerpt */}
                <input
                    type="text"
                    placeholder="Excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="border border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                />

                {/* Description */}
                <textarea
                    placeholder="Blog Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                    rows={4}
                    required
                />

                {/* Industries */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Industries"
                        value={industries}
                        onChange={(e) => setIndustries(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />

                    {/* Category */}
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />
                </div>

                <div className="flex gap-4">
                    {/* Blog Image */}
                    <input
                        type="url"
                        placeholder="Blog Image URL (https://example.com/img.png)"
                        value={blogImageUrl}
                        onChange={(e) => setBlogImageUrl(e.target.value)}
                        className="border w-6/12  border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                    />

                    {/* Tags */}
                    <input
                        type="text"
                        placeholder="Tags (comma separated) - one, two, three, ..."
                        onChange={(e) =>
                            setTags(
                                e.target.value
                                    .split(",")
                                    .map((t) => t.trim())
                                    .filter(Boolean)
                            )
                        }
                        className="border w-6/12 border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                    />


                </div>

                {/* Author Info */}
                <h3 className="font-semibold mt-2 text-gray-900">Author Info</h3>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Author Name"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Author Designation"
                        value={authorDesignation}
                        onChange={(e) => setAuthorDesignation(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />
                </div>
                <input
                    type="url"
                    placeholder="Author Image URL (https://example.com/author.png)"
                    value={authorImageUrl}
                    onChange={(e) => setAuthorImageUrl(e.target.value)}
                    className="border border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-mai hover:bg-blue-700 text-white py-2 rounded disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Blog"}
                </button>
            </form>
        </div>
    );
}
