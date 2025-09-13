"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Loader2 } from "lucide-react";

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

export default function CreateBlogs() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [description, setDescription] = useState("");
    const [industries, setIndustries] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState<string[]>([]);

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
            setTitle("");
            setSubtitle("");
            setExcerpt("");
            setDescription("");
            setIndustries("");
            setCategory("");
            setTags([]);
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
        <div className="max-w-5xl mx-auto py-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📝 Create Blog</h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-gray-100"
            >
                {/* Blog Info */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 border-b border-pink-400 pb-2 mb-6">
                        Blog Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Blog Title" value={title} onChange={setTitle} />
                        <InputField
                            label="Subtitle"
                            value={subtitle}
                            onChange={setSubtitle}
                        />
                        <InputField
                            label="Excerpt"
                            value={excerpt}
                            onChange={setExcerpt}
                            className="md:col-span-2"
                        />
                        <TextAreaField
                            label="Blog Description"
                            value={description}
                            onChange={setDescription}
                            className="md:col-span-2"
                        />
                        <InputField
                            label="Industries"
                            value={industries}
                            onChange={setIndustries}
                        />
                        <InputField
                            label="Category"
                            value={category}
                            onChange={setCategory}
                        />
                        <InputField
                            label="Blog Image URL - https://leads2crm.com/blog/image1.jpg"
                            value={blogImageUrl}
                            onChange={setBlogImageUrl}
                            className="md:col-span-2"
                        />
                        <InputField
                            label="Tags (comma separated) Tag-1, Tag-2, Tag-3, ..."
                            onChange={(v) =>
                                setTags(v.split(",").map((t) => t.trim()).filter(Boolean))
                            }
                            className="md:col-span-2"
                        />
                    </div>
                </div>

                {/* Author Info */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-6">
                        Author Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Author Name"
                            value={authorName}
                            onChange={setAuthorName}
                        />
                        <InputField
                            label="Author Designation"
                            value={authorDesignation}
                            onChange={setAuthorDesignation}
                        />
                        <InputField
                            label="Author Image URL - https://authorImage/image.png"
                            value={authorImageUrl}
                            onChange={setAuthorImageUrl}
                            className="md:col-span-2"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:opacity-90 text-white py-3 px-6 rounded-xl font-medium shadow-lg transition disabled:opacity-50"
                    >
                        {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {loading ? "Saving..." : " Publish Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
}

/* ---- Reusable Components ---- */
const InputField = ({
    label,
    value,
    onChange,
    className = "",
}: {
    label: string;
    value?: string;
    onChange: (val: string) => void;
    className?: string;
}) => (
    <div className={`flex flex-col ${className}`}>
        <label className="text-md font-medium text-gray-600 mb-1">{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white shadow-sm"
        />
    </div>
);

const TextAreaField = ({
    label,
    value,
    onChange,
    className = "",
}: {
    label: string;
    value?: string;
    onChange: (val: string) => void;
    className?: string;
}) => (
    <div className={`flex flex-col ${className}`}>
        <label className="text-md font-medium text-gray-600 mb-1">{label}</label>
        <textarea
            rows={4}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white shadow-sm"
        />
    </div>
);
