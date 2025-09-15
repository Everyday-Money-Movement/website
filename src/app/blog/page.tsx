import Link from "next/link";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Read our latest articles about Bitcoin, everyday money, and living on Bitcoin",
};

export default async function BlogPage() {
  const { isEnabled } = await draftMode();
  const posts = await getAllPosts(isEnabled);
  
  return (
    <section className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
