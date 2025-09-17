"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const TABLE_OF_CONTENTS = [
  { label: "Medium of Exchange — What does that mean?", href: "#medium-of-exchange-meaning" },
  { label: "Benefits of using bitcoin as Medium of Exchange", href: "#benefits-of-bitcoin-moe" },
  { label: "Spending Bitcoin myths", href: "#spending-bitcoin-myths" },
];

export function MediumOfExchangeSection() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
              Why Medium of Exchange Matters
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-lg">
              Add a concise value statement that captures reader interest and
              previews content value. Focus on benefits while keeping it under
              two lines. Align with your blog categories.
            </p>
          </div>
          
          <div className="flex flex-row gap-12">
            <div className="flex max-w-3xl flex-col gap-8">
              <AspectRatio ratio={16 / 10}>
                <Image
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="Medium of Exchange illustration"
                  fill
                  className="h-full w-full rounded-xl object-cover"
                />
              </AspectRatio>

              <h2
                id="medium-of-exchange-meaning"
                className="scroll-mt-16 border-b pb-2 text-3xl font-semibold"
              >
                Medium of Exchange — What does that mean?
              </h2>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h2
                id="benefits-of-bitcoin-moe"
                className="scroll-mt-16 border-b pb-2 text-3xl font-semibold"
              >
                Benefits of using bitcoin as Medium of Exchange
              </h2>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                Benefits for users
              </h3>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                Benefits for businesses
              </h3>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                Benefits for Bitcoin network
              </h3>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h2
                id="spending-bitcoin-myths"
                className="scroll-mt-16 border-b pb-2 text-3xl font-semibold"
              >
                Spending Bitcoin myths
              </h2>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                Myth #1
              </h3>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                Reality:
              </h3>

              <p className="leading-7">
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
              </p>
            </div>

            <aside className="hidden flex-col gap-5 lg:flex">
              <span className="text-foreground text-sm font-medium">
                On this page
              </span>
              <nav className="flex flex-col gap-3">
                {TABLE_OF_CONTENTS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-muted-foreground hover:text-foreground text-sm"
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



