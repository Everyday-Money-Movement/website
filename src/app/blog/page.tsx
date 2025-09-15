import Link from "next/link";
import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/posts";
import { BlogSection3 } from "@/components/pro-blocks/landing-page/blog-sections/blog-section-3";

export const metadata = {
  title: "Blog",
  description: "Read our latest articles about Bitcoin, everyday money, and living on Bitcoin",
};

export default async function BlogPage() {
  const { isEnabled } = await draftMode();
  const posts = await getAllPosts(isEnabled);
  
  // Transform posts to match BlogSection3 format
  const blogPosts = posts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    description: post.excerpt || "Read more about this topic...",
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    category: post.tags?.[0] || "Blog",
    image: post.cover?.src || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjhmYWZjIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjIiLz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAwLCAxNTApIj4KPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjQwIiBmaWxsPSIjZjc5MzFhIiBzdHJva2U9IiNlODgyMWEiIHN0cm9rZS13aWR0aD0iMyIvPgo8dGV4dCB4PSIwIiB5PSIxNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiPuKCrDwvdGV4dD4KPC9nPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjgwIiByPSI4IiBmaWxsPSIjZjc5MzFhIiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iMzIwIiBjeT0iODAiIHI9IjYiIGZpbGw9IiNmNzkzMWEiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjIyMCIgcj0iNiIgZmlsbD0iI2Y3OTMxYSIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjMyMCIgY3k9IjIyMCIgcj0iOCIgZmlsbD0iI2Y3OTMxYSIgb3BhY2l0eT0iMC4zIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjQ3NDhiIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiPkJpdGNvaW4gQmxvZyBQb3N0PC90ZXh0Pgo8L3N2Zz4K",
    slug: post.slug
  }));
  
  return <BlogSection3 posts={blogPosts} />;
}
