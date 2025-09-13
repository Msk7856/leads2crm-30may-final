// lib/getBlogs.ts
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Blog } from "@/types/blog";

// ✅ Helper: convert Firestore Timestamp | string | undefined -> ISO string
function toISOStringSafe(value: any): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (value?.toDate) return value.toDate().toISOString();
  return "";
}

// ✅ Helper: normalize author whether object or array
function normalizeAuthor(data: any) {
  let rawAuthor: any = null;

  if (Array.isArray(data.author)) {
    rawAuthor = data.author[0]; // take first author
  } else if (typeof data.author === "object" && data.author !== null) {
    rawAuthor = data.author;
  }

  return {
    name: rawAuthor?.name ?? "Unknown",
    image: rawAuthor?.image ?? "/images/userIcon.png",
    designation: rawAuthor?.designation ?? "",
  };
}

export async function getBlogs(): Promise<{
  blogs: Blog[];
  categories: string[];
  industries: string[];
}> {
  const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const blogs: Blog[] = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title ?? "",
      subtitle: data.subtitle ?? "",
      category: data.category ?? "General",
      description: data.description ?? "",
      excerpt: data.excerpt ?? "",
      industries: data.industries ?? "",
      slug: typeof data.slug === "string" ? data.slug : "",
      image: data.image ?? "/images/dummyBlogImg.jpg",
      paragraph: data.paragraph ?? "",

      // ✅ normalized author
      author: normalizeAuthor(data),

      // ✅ tags fallback
      tags: Array.isArray(data.tags) ? data.tags : [data.category ?? "General"],

      // ✅ normalized dates
      publishDate: toISOStringSafe(data.publishDate ?? data.createdAt),
      createdAt: toISOStringSafe(data.createdAt),
      updatedAt: toISOStringSafe(data.updatedAt),
    };
  });

  // Plain JSON (removes any Firestore metadata)
  const plainBlogs: Blog[] = JSON.parse(JSON.stringify(blogs));

  // Unique categories
  const categories: string[] = Array.from(
    new Set(plainBlogs.map((b) => b.category)),
  );

  // Unique industries
  const industries: string[] = Array.from(
    new Set(
      plainBlogs
        .map((b) => b.industries)
        .filter((ind) => typeof ind === "string" && ind.trim() !== ""),
    ),
  );

  return {
    blogs: plainBlogs,
    categories,
    industries,
  };
}
