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

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
    const { blogs } = await getBlogs();

    const blog = blogs.find((b) => slugify(b.title) === params.slug);

    if (!blog) {
        return <div className="container py-10">Blog not found</div>;
    }

    const formattedDateTime = new Date(blog.publishDate).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const relatedPosts = blogs
        .filter((b) => b.category === blog.category && slugify(b.slug) !== params.slug)
        .slice(0, 3);

    const authorName = blog.author?.name || "Unknown";
    const authorImage = blog.author?.image || "/default-avatar.png";
    const authorDesignation = blog.author?.designation || "";

    return (
        <section className="py-10 mt-10">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={900}
                        height={450}
                        className="rounded-lg mb-6"
                    />
                    <span className="inline-block bg-gray-800 text-white px-4 py-1 rounded-full mb-4">
                        {blog.tags?.[0]}
                    </span>
                    <h1 className="text-3xl text-mai font-bold mb-4">{blog.title}</h1>
                    <h1 className="text-xl text-gray-700 font-semibold mb-4">{blog.subtitle}</h1>
                    <p className="text-gray-600 text-justify text-base mb-8">{blog.description}</p>
                    <p className="text-gray-600 text-justify text-lg font-bold mb-8">{blog.excerpt}</p>

                    <div className="flex items-center gap-4 border-t border-b py-4 mb-8">
                        <div className="flex items-center gap-3">
                            <Image
                                src={authorImage}
                                alt={authorName}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-700">By {authorName}</p>
                                <p className="text-sm text-gray-500">{authorDesignation}</p>
                            </div>
                        </div>
                        <div className="ml-auto text-sm text-gray-500">
                            <div className="inline-block">
                                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                    Date
                                </h4>
                                <p className="text-xs text-body-color">{formattedDateTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="prose max-w-none">{blog.paragraph}</div>

                    {/* Tags */}
                    <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white">Tags:</h4>
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-primary text-gray-600 px-4 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-10">
                            <h2 className="text-xl text-gray-800 font-semibold mb-4">Related Posts</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {relatedPosts.map((post) => (
                                    <RelatedPost
                                        key={post.id}
                                        image={post.image}
                                        slug={`/blog/${slugify(post.title)}`}
                                        title={post.title}
                                        date={new Date(post.publishDate).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
