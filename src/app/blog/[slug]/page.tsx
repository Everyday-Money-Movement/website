import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout, Quote } from "@/components/shortcodes";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const post = await getPostBySlug(slug);
  if (!post || (!isEnabled && post.draft)) {
    notFound();
  }
  return (
    <article className="prose mx-auto py-10">
      <h1>{post.title}</h1>
      <MDXRemote source={post.content} components={{ Callout, Quote }} />
    </article>
  );
}
