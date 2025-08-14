// lib/getBlogs.ts
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Blog } from "@/types/blog";

export async function getBlogs(): Promise<{
  blogs: Blog[];
  categories: string[];
  industries: string[];
}> {
  const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const blogs = snapshot.docs.map((doc) => {
    const data = doc.data();
    // console.log("Blog doc data:", doc.id, data);

    let authorName = "Unknown";
    let authorImage = "/images/userIcon.png";
    let authorDesignation = "";

    if (Array.isArray(data.author)) {
      data.author.forEach((item) => {
        if (item.name) authorName = item.name;
        if (item.image) authorImage = item.image;
        if (item.designation) authorDesignation = item.designation;
      });
    }

    const blog: Blog = {
      id: doc.id,
      title: data.title ?? "",
      subtitle: data.subtitle ?? "",
      category: data.category ?? "General",
      description: data.description ?? "",
      excerpt: data.excerpt ?? "",
      industries: data.industries ?? "",
      // slug: data.slug ?? "",
      slug: typeof data.slug === "string" ? data.slug : "",

      image: data.image ?? "/images/dummyBlogImg.jpg",
      paragraph: data.paragraph ?? "",
      author: {
        name: authorName,
        image: authorImage,
        designation: authorDesignation,
      },
      tags: Array.isArray(data.tags) ? data.tags : [data.category ?? "General"],
      publishDate: data.createdAt?.toDate
        ? data.createdAt.toDate().toISOString()
        : "",
      createdAt: data.createdAt?.toDate
        ? data.createdAt.toDate().toISOString()
        : "",
      updatedAt: data.updatedAt?.toDate
        ? data.updatedAt.toDate().toISOString()
        : "",
    };

    return blog;
  });

  // Convert to plain JSON to strip prototypes
  const plainBlogs: Blog[] = JSON.parse(JSON.stringify(blogs));

  // Type-safe categories
  const categories: string[] = Array.from(
    new Set<string>(plainBlogs.map((b) => b.category)),
  );

  const industries: string[] = Array.from(
    new Set<string>(
      plainBlogs
        .map((b) => b.industries)
        .filter((ind) => typeof ind === "string" && ind.trim() !== ""),
    ),
  );

  return {
    blogs: plainBlogs, // ✅ return plain objects
    categories,
    industries,
  };
}
