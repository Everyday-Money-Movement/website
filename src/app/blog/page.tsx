import { allBlogs } from "contentlayer/generated";
import { BlogSection3 } from "@/components/pro-blocks/landing-page/blog-sections/blog-section-3";

export const metadata = {
  title: "Blog",
  description: "Read our latest articles about Bitcoin, everyday money, and living on Bitcoin",
};

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <BlogSection3 />;
}
