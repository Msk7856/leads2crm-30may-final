"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import Loader from "@/app/Loader";
import { useRouter } from "next/navigation";

interface Blog {
    id: string; // Firestore doc id
    title: string;
    author: { name: string } | string;
    createdAt: string;
}

const ManageBlogsPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // ✅ Fetch blogs from Firestore
    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            const data: Blog[] = snapshot.docs.map((docSnap) => {
                const d = docSnap.data();

                return {
                    id: docSnap.id,
                    title: d.title || "Untitled",
                    author: typeof d.author === "string" ? d.author : d.author?.name || "Unknown",
                    createdAt: d.createdAt?.toDate
                        ? d.createdAt.toDate().toLocaleDateString()
                        : "N/A",
                };
            });
            setBlogs(data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // ✅ Delete blog
    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteDoc(doc(db, "blogs", id));
                setBlogs((prev) => prev.filter((b) => b.id !== id));
            } catch (err) {
                console.error("Error deleting blog:", err);
            }
        }
    };



    const handleEdit = (id: string) => {
        router.push(`/admin/blogs/${id}/edit`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Blogs</h2>

            {loading ? (
                <Loader />
            ) : (
                <table className="w-full bg-white shadow rounded-lg overflow-hidden">
                    <thead className="bg-sky-500 text-left text-white">
                        <tr>
                            <th className="p-3">Title</th>
                            <th className="p-3">Author</th>
                            <th className="p-3">Created At</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr >
                    </thead >
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.id} className="border-t text-gray-700 border-gray-200 hover:bg-gray-100">
                                <td className="p-3">{blog.title}</td>
                                <td className="p-3">
                                    {typeof blog.author === "string" ? blog.author : blog.author?.name}
                                </td>
                                <td className="p-3">{blog.createdAt}</td>
                                <td className="p-3 flex gap-2 justify-center">
                                    <button
                                        onClick={() => handleEdit(blog.id)}
                                        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-blue-700"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="px-3 py-1 bg-red-400 text-white rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {blogs.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center p-4 text-gray-500">
                                    No blogs available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table >
            )}
        </div >
    );
};

export default ManageBlogsPage;
