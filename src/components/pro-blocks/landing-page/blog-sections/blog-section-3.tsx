"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  slug?: string;
}

interface BlogSection3Props {
  posts?: BlogPost[];
  title?: string;
  subtitle?: string;
  tagline?: string;
}

export function BlogSection3({ 
  posts = [], 
  title = "Latest Articles",
  subtitle = "Read our latest articles about Bitcoin, everyday money, and living on Bitcoin",
  tagline = "Blog"
}: BlogSection3Props) {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="blog-section-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-start gap-10 md:gap-12">
          {/* Section Title */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            {/* Tagline */}
            <Tagline>{tagline}</Tagline>

            {/* Main Heading */}
            <h1 id="blog-section-heading" className="heading-lg">
              {title}
            </h1>

            {/* Section Description */}
            <p className="text-muted-foreground">
              {subtitle}
            </p>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6"
            role="list"
          >
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <Link href={post.slug ? `/blog/${post.slug}` : '#'}>
                  <Card
                    className="group flex cursor-pointer flex-col justify-between gap-6 rounded-none border-none bg-transparent p-0 shadow-none hover:bg-muted/5 transition-colors"
                    role="listitem"
                  >
                    {/* Post Content */}
                    <CardContent className="flex flex-col gap-3 p-0">
                      {/* Post Meta */}
                      <div className="flex items-center gap-2 text-left">
                        <span className="text-muted-foreground text-sm">
                          {post.date}
                        </span>
                        <span className="text-muted-foreground text-sm">·</span>
                        <span className="text-muted-foreground text-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h3 className="text-base leading-normal font-semibold hover:underline">
                        {post.title}
                      </h3>

                      {/* Post Summary */}
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-normal">
                        {post.description}
                      </p>
                    </CardContent>

                    {/* Image Container */}
                    <CardFooter className="p-0">
                      <AspectRatio
                        ratio={4 / 3}
                        className="w-full overflow-hidden rounded-xl"
                      >
                        <Image
                          src={post.image}
                          alt={`${post.title} thumbnail`}
                          fill
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      </AspectRatio>
                    </CardFooter>
                  </Card>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
