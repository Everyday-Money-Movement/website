"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { ReactNode } from "react";

interface RichTextSection1Props {
  title?: string;
  subtitle?: string;
  date?: string;
  category?: string;
  imageUrl?: string;
  authorName?: string;
  authorImage?: string;
  children?: ReactNode;
}

export function RichTextSection1({ 
  title = "Short and clear engaging headline for an article",
  subtitle = "Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.",
  date = "Nov 11, 2024",
  category = "Articles",
  imageUrl = "https://ui.shadcn.com/placeholder.svg",
  authorName = "John Doe",
  authorImage = "https://github.com/shadcn.png",
  children
}: RichTextSection1Props) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="article-title"
    >
      {/* Content Container - Centered with max width */}
      <div className="mx-auto max-w-3xl px-6">
        {/* Article Container with Vertical Layout */}
        <article className="flex flex-col gap-12 md:gap-16">
          {/* Article Header Section */}
          <div className="flex flex-col gap-8">
            {/* Title and Meta Information Block */}
            <div className="flex flex-col gap-4 md:gap-5">
              {/* Article Meta Information - Date and Category */}
              <div
                className="flex items-center gap-2"
                aria-label="Article metadata"
              >
                <p className="text-muted-foreground text-sm">{date}</p>
                <span
                  className="text-muted-foreground text-sm"
                  aria-hidden="true"
                >
                  ·
                </span>
                <p className="text-muted-foreground text-sm">{category}</p>
              </div>

              {/* Article Main Title */}
              <h1 id="article-title" className="heading-xl">
                {title}
              </h1>

              {/* Article Description/Summary */}
              <p className="text-muted-foreground text-lg">
                {subtitle}
              </p>
            </div>

            {/* Author Information Block */}
            <div
              className="flex items-center gap-4"
              aria-label="Article author"
            >
              {/* Author Avatar */}
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={authorImage}
                  alt={authorName}
                />
              </Avatar>
              {/* Author Details */}
              <div className="flex flex-col">
                <p className="text-sm font-medium">{authorName}</p>
                <p className="text-muted-foreground text-sm">
                  Author
                </p>
              </div>
            </div>

            {/* Featured Article Image Container */}
            {imageUrl && (
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={imageUrl}
                  alt="Article cover image"
                  fill
                  className="h-full w-full rounded-xl object-cover"
                  priority // Important image loads first
                />
              </AspectRatio>
            )}
          </div>

          {/* Article Content Section */}
          <div className="flex flex-col gap-6">
            {children}
          </div>
        </article>
      </div>
    </section>
  );
}
