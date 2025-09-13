import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { ISO2_TO_NAME } from "@/lib/iso";

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const code = country.toUpperCase();
  const name = ISO2_TO_NAME[code] ?? code;
  return {
    title: `Live on Bitcoin — ${name}`,
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const code = country.toUpperCase();
  const name = ISO2_TO_NAME[code] ?? code;
  const filePath = path.join(process.cwd(), "content", "countries", `${code}.mdx`);

  if (fs.existsSync(filePath)) {
    const source = fs.readFileSync(filePath, "utf8");
    const { content } = await compileMDX({
      source,
      options: { parseFrontmatter: true },
    });

    return (
      <div className="container mx-auto py-8">
        <h1 className="mb-4 text-3xl font-bold">Live on Bitcoin — {name}</h1>
        <article className="prose dark:prose-invert">{content}</article>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-4 text-3xl font-bold">Live on Bitcoin — {name}</h1>
      <p>Guide coming soon</p>
    </div>
  );
}
