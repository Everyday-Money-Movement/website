import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { RichTextSection1 } from "@/components/pro-blocks/landing-page/rich-text-sections/rich-text-section-1";

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

  // Format date for display
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <RichTextSection1
      title={post.title}
      subtitle={post.description}
      date={formattedDate}
      category="Blog"
      authorName={post.author || "Author"}
      authorImage="https://github.com/shadcn.png"
    >
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.body.raw} />
      </div>
    </RichTextSection1>
  );
}
