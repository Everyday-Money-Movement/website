import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allBlogs.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <MDXRemote source={post.body.raw} />
    </article>
  );
}
