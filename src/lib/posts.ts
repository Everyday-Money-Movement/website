import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseMarkdown } from "./markdown";

export interface Post {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  cover?: { src: string; alt: string };
  tags?: string[];
  author: string;
  draft?: boolean;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content", "posts");

function getPostPaths() {
  return fs
    .readdirSync(postsDirectory)
    .map((dir) => path.join(postsDirectory, dir, "index.md"))
    .filter((p) => fs.existsSync(p));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, slug, "index.md");
  if (!fs.existsSync(fullPath)) return null;
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const body = parseMarkdown(content);
  return { ...(data as Omit<Post, "content">), content: body } as Post;
}

export async function getAllPosts(includeDrafts = false): Promise<Post[]> {
  const posts: Post[] = [];
  for (const filePath of getPostPaths()) {
    const file = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(file);
    if (!includeDrafts && data.draft) continue;
    const body = parseMarkdown(content);
    posts.push({ ...(data as Omit<Post, "content">), content: body } as Post);
  }
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
