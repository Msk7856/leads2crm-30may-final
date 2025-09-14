// lib/getBlogs.ts
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Blog } from "@/types/blog";

// ✅ Convert Firestore Timestamp | string | undefined -> ISO string
function toISOStringSafe(value: any): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (value?.toDate) return value.toDate().toISOString();
  return "";
}

// ✅ Normalize string values (trim + fallback)
function normalizeString(val: any, fallback = ""): string {
  if (!val) return fallback;
  return String(val).trim();
}

// ✅ Normalize author whether object or array
function normalizeAuthor(data: any) {
  let rawAuthor: any = null;

  if (Array.isArray(data.author)) {
    rawAuthor = data.author[0]; // take first author if array
  } else if (typeof data.author === "object" && data.author !== null) {
    rawAuthor = data.author;
  }

  return {
    name: normalizeString(rawAuthor?.name, "Unknown"),
    image: rawAuthor?.image || "/images/userIcon.png",
    designation: normalizeString(rawAuthor?.designation),
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
      title: normalizeString(data.title),
      subtitle: normalizeString(data.subtitle),
      category: normalizeString(data.category, "General"),
      description: normalizeString(data.description),
      excerpt: normalizeString(data.excerpt),
      industries: normalizeString(data.industries),
      slug: normalizeString(data.slug),
      image: data.image || "/images/dummyBlogImg.jpg",
      paragraph: normalizeString(data.paragraph),

      // ✅ normalized author
      author: normalizeAuthor(data),

      // ✅ tags fallback
      tags: Array.isArray(data.tags)
        ? data.tags.map((t: any) => normalizeString(t)).filter(Boolean)
        : [normalizeString(data.category, "General")],

      // ✅ normalized dates
      publishDate: toISOStringSafe(data.publishDate ?? data.createdAt),
      createdAt: toISOStringSafe(data.createdAt),
      updatedAt: toISOStringSafe(data.updatedAt),
    };
  });

  // ✅ Collect unique categories & industries (no empty strings)
  const categories: string[] = Array.from(
    new Set(blogs.map((b) => b.category).filter(Boolean)),
  );

  const industries: string[] = Array.from(
    new Set(blogs.map((b) => b.industries).filter(Boolean)),
  );

  return {
    blogs,
    categories,
    industries,
  };
}
