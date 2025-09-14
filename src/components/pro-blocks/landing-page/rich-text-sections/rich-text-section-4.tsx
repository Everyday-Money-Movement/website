"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ReactNode } from "react";

interface RichTextSection4Props {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  tableOfContents?: Array<{ label: string; href: string }>;
  onScroll?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  activeSection?: string;
  children?: ReactNode;
}

export function RichTextSection4({ 
  title = "Short and clear engaging headline for an article",
  subtitle = "Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.",
  imageUrl = "https://ui.shadcn.com/placeholder.svg",
  tableOfContents = [
    { label: "The King's Plan", href: "#the-kings-plan" },
    { label: "The Joke Tax", href: "#the-joke-tax" },
    { label: "Jokester's Revolt", href: "#jokesters-revolt" },
    { label: "The People's Rebellion", href: "#the-peoples-rebellion" },
  ],
  onScroll,
  activeSection,
  children
}: RichTextSection4Props) {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (onScroll) {
      onScroll(e, href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="article-title"
    >
      <div className="container mx-auto px-6">
        <article className="flex flex-col gap-12 md:gap-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-6">
            {/* Title */}
            <h1 id="article-title" className="heading-xl">
              {title}
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-lg">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-12">
            <div className="flex max-w-3xl flex-col gap-8">
              {imageUrl && (
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src={imageUrl}
                    alt="Article cover image"
                    fill
                    className="h-full w-full rounded-xl object-cover"
                  />
                </AspectRatio>
              )}
              {children}
            </div>

            <aside className="hidden flex-col gap-5 lg:flex">
              <span className="text-foreground text-sm font-medium">
                On this page
              </span>
              <nav className="flex flex-col gap-3">
                {tableOfContents.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`text-sm ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}
