"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";

// ✅ Slugify helper
function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

export default function EditBlogPage() {
    const { id } = useParams();
    const router = useRouter();

    // Form state
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

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // ✅ Fetch blog by ID
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, "blogs", id as string);
                const snap = await getDoc(docRef);

                if (snap.exists()) {
                    const data = snap.data();

                    setTitle(data.title || "");
                    setSubtitle(data.subtitle || "");
                    setExcerpt(data.excerpt || "");
                    setDescription(data.description || "");
                    setIndustries(data.industries || "");
                    setCategory(data.category || "");
                    setTags(data.tags || []);
                    setBlogImageUrl(data.image || "");

                    if (data.author) {
                        setAuthorName(data.author.name || "");
                        setAuthorDesignation(data.author.designation || "");
                        setAuthorImageUrl(data.author.image || "");
                    }
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                alert("❌ Failed to load blog");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBlog();
    }, [id]);

    // ✅ Update blog
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const docRef = doc(db, "blogs", id as string);

            await updateDoc(docRef, {
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
                updatedAt: Timestamp.now(),
            });

            alert("✅ Blog updated!");
            router.push("/admin/blogs");
        } catch (err: any) {
            console.error("Error updating blog:", err);
            alert("❌ Failed to update blog: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">Loading blog...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Blog</h2>

            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
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

                {/* Industries & Category */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Industries"
                        value={industries}
                        onChange={(e) => setIndustries(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-mai outline-blue focus:border-l-lime-400 w-full p-2 bg-white text-gray-950 rounded"
                    />
                </div>

                {/* Blog Image & Tags */}
                <div className="flex gap-4">
                    <input
                        type="url"
                        placeholder="Blog Image URL"
                        value={blogImageUrl}
                        onChange={(e) => setBlogImageUrl(e.target.value)}
                        className="border w-6/12 border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Tags (comma separated)"
                        value={tags.join(", ")}
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
                    placeholder="Author Image URL"
                    value={authorImageUrl}
                    onChange={(e) => setAuthorImageUrl(e.target.value)}
                    className="border border-mai outline-blue focus:border-l-lime-400 p-2 bg-white text-gray-950 rounded"
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={saving}
                    className="bg-purple-600 font-semibold hover:bg-blue-700 text-white py-2 rounded disabled:opacity-50"
                >
                    {saving ? "Saving..." : "Update Blog"}
                </button>
            </form>
        </div>
    );
}
