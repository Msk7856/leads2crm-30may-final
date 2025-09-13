"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { Loader2 } from "lucide-react";

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
    // const [tags, setTags] = useState<string[]>([]);
    const [tagsInput, setTagsInput] = useState("");
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
                    setTagsInput((data.tags || []).join(", "));
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
                tags: tagsInput
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
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
                <Loader2 className="w-6 h-6 animate-spin text-purple-600 mr-2" />
                <p className="text-gray-600">Loading blog...</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-2 py-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">✏️ Edit Blog</h2>

            <form
                onSubmit={handleUpdate}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-10 border border-gray-100"
            >
                {/* Blog Info */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 border-b border-purple-500 pb-2 mb-4">
                        Blog Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            label="Blog Image URL"
                            value={blogImageUrl}
                            onChange={setBlogImageUrl}
                            className="md:col-span-2"
                        />

                        <InputField
                            label="Tags (comma separated) - tag1, tag2, tag3, ..."
                            value={tagsInput}
                            onChange={setTagsInput}
                            className="md:col-span-2"
                        />
                    </div>
                </div>

                {/* Author Info */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
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
                            label="Author Image URL"
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
                        disabled={saving}
                        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white py-3 px-6 rounded-xl font-medium shadow-lg transition disabled:opacity-50"
                    >
                        {saving && <Loader2 className="w-5 h-5 animate-spin" />}
                        {saving ? "Saving..." : "💾 Update Blog"}
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
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-white shadow-sm"
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
            rows={5}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 text-md rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-white shadow-sm"
        />
    </div>
);
