import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

// ✅ Slugify function
function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, subtitle } = blog;
  const slug = slugify(title);

  const formattedDateTime = new Date(blog.publishDate).toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const authorData = Array.isArray(author)
    ? {
      name: author.find((a: any) => a.Name)?.Name || "Unknown",
      image: author.find((a: any) => a.image)?.image || "/default-author.png",
      designation: author.find((a: any) => a.designation)?.designation || "",
    }
    : author;

  const firstTag = tags?.[0] || "General";

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <Link href={`/blog/${slug}`} className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-mai px-2 py-1 text-sm font-semibold capitalize text-white">
          {firstTag}
        </span>
        <Image className="object-cover h-full" src={image} alt={title || "blog"} fill unoptimized />
      </Link>

      <div className="p-2 sm:p-4 md:px-6 md:py-4 lg:p-4 xl:px-2 xl:py-5 2xl:p-6">
        <h3>
          <Link
            href={`/blog/${slug}`}
            className="mb-2 block text-xl font-bold text-black hover:text-mai dark:text-white dark:hover:text-mai sm:text-xl"
          >
            {title}
          </Link>
        </h3>

        <h3 className="text-base text-gray-600">
          {subtitle}
        </h3>

        <p className="mb-2 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-gray-700 dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>

        <div className="flex items-center">
          <div className="mr-2 flex items-center border-r border-gray-300 border-opacity-10 pr-2 dark:border-white dark:border-opacity-10 xl:mr-2 xl:pr-2 2xl:mr-2 2xl:pr-2">
            <div className="mr-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={authorData.image} alt={authorData.name} fill unoptimized />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-gray-700 dark:text-white">
                By {author?.name || "Unknown"}
              </h4>
              <p className="text-xs text-gray-700">{author?.designation || "creator"}</p>
            </div>

          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Date
            </h4>
            <p className="text-xs text-gray-700">{formattedDateTime}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
