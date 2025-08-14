// app/blog/page.tsx
import BlogClient from "@/components/Blog/BlogClient";
import { getBlogs } from "@/lib/getBlogs";

export default async function BlogPage() {
  const { blogs, categories, industries } = await getBlogs();


  return <BlogClient blogs={blogs} categories={categories} industries={industries} />;
}
