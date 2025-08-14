import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,

}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  console.log("Slug in RelatedPost:", slug);
  return (
    <Link
      href={slug}
      className="flex items-center lg:block xl:flex hover:opacity-90 transition"
    >
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] border border-gray-100 w-[100px] overflow-hidden rounded-md sm:h-[75px] sm:w-[120px]">
          <Image src={image} alt={title} fill />
        </div>
      </div>
      <div className="w-full">
        <h5 className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary">
          {title}
        </h5>
        <p className="text-xs font-medium text-body-color">{date}</p>
      </div>
    </Link>
  );
};

export default RelatedPost;
