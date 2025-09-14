import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="font-semibold">
              {post.title}
            </Link>
            <p className="m-0 text-sm text-muted-foreground">
              {post.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
