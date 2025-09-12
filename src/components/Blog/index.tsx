import BlogPage from "@/app/blog/page";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
// import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <BlogPage />

      </div>
    </section>
  );
};

export default Blog;
