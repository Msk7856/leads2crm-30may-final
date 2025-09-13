import RelatedPost from "@/components/Blog/RelatedPost";
import { getBlogs } from "@/lib/getBlogs";
import Image from "next/image";

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

interface BlogSlugPageProps {
    params: { slug: string };
}

export interface Author {
    name: string;
    designation: string;
    image: string;
}

// ✅ Helper: safely convert Firestore date (Timestamp | string) to Date
function toDateSafe(value: any): Date | null {
    if (!value) return null;
    if (typeof value === "string") return new Date(value);
    if (value?.toDate) return value.toDate();
    return null;
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
    const { blogs } = await getBlogs();

    const blog = blogs.find((b) => slugify(b.title) === params.slug);

    if (!blog) {
        return <div className="container py-10">Blog not found</div>;
    }

    // ✅ Handle publishDate or createdAt
    let formattedDateTime = "";
    const dateObj = blog.publishDate
        ? new Date(blog.publishDate)
        : toDateSafe(blog.createdAt);

    if (dateObj) {
        formattedDateTime = dateObj.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    // ✅ Related posts filter
    const relatedPosts = blogs
        .filter((b) => b.category === blog.category && slugify(b.title) !== params.slug)
        .slice(0, 3);

    // ✅ Author info (already normalized in getBlogs.ts)
    const authorName = blog.author?.name || "Unknown";
    const authorImage = blog.author?.image || "/images/userIcon.png";
    const authorDesignation = blog.author?.designation || "";

    return (
        <section className="py-10 mt-10">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Blog Image */}
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={900}
                        height={450}
                        className="rounded-lg mb-6"
                        unoptimized
                    />

                    <span className="inline-block bg-gray-800 text-white px-4 py-1 rounded-full mb-4">
                        {blog.tags?.[0]}
                    </span>

                    <h1 className="text-3xl text-mai font-bold mb-4">{blog.title}</h1>
                    <h2 className="text-xl text-gray-700 font-semibold mb-4">{blog.subtitle}</h2>

                    <p className="text-gray-600 text-justify text-base mb-8">{blog.description}</p>
                    <p className="text-gray-600 text-justify text-lg font-bold mb-8">{blog.excerpt}</p>

                    {/* Author Section */}
                    <div className="flex items-center gap-4 border-t border-b border-gray-500 py-4 mb-8">
                        <div className="flex items-center gap-3">
                            <Image
                                src={authorImage}
                                alt={authorName}
                                width={40}
                                height={40}
                                className="rounded-full"
                                unoptimized
                            />
                            <div>
                                <p className="font-medium text-gray-800">By {authorName}</p>
                                <p className="text-sm text-gray-500">{authorDesignation}</p>
                            </div>
                        </div>
                        <div className="ml-auto text-sm text-gray-500">
                            <div className="inline-block">
                                <h4 className="mb-1 text-sm font-medium text-gray-800 dark:text-white">Date</h4>
                                <p className="text-xs text-body-color">{formattedDateTime}</p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    {/* <div className="prose max-w-none">{blog.description}</div> */}

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <>
                            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">Tags:</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-10">
                            <h2 className="text-xl text-gray-800 font-semibold mb-4">Related Posts</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {relatedPosts.map((post) => {
                                    const postDate = post.publishDate
                                        ? new Date(post.publishDate)
                                        : toDateSafe(post.createdAt);

                                    return (
                                        <RelatedPost
                                            key={post.id}
                                            image={post.image}
                                            slug={`/blog/${slugify(post.title)}`}
                                            title={post.title}
                                            date={
                                                postDate
                                                    ? postDate.toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    })
                                                    : ""
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
