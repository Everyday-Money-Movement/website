"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export function RichTextSection1() {
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
                <p className="text-muted-foreground text-sm">Nov 11, 2024</p>
                <span
                  className="text-muted-foreground text-sm"
                  aria-hidden="true"
                >
                  ·
                </span>
                <p className="text-muted-foreground text-sm">Articles</p>
              </div>

              {/* Article Main Title */}
              <h1 id="article-title" className="heading-xl">
                Short and clear engaging headline for an article
              </h1>

              {/* Article Description/Summary */}
              <p className="text-muted-foreground text-lg">
                Add a concise value statement that captures reader interest and
                previews content value. Focus on benefits while keeping it under
                two lines. Align with your blog categories.
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
                  src="https://github.com/shadcn.png"
                  alt="Lando Norris"
                />
              </Avatar>
              {/* Author Details */}
              <div className="flex flex-col">
                <p className="text-sm font-medium">Lando Norris</p>
                <p className="text-muted-foreground text-sm">
                  Product Designer
                </p>
              </div>
            </div>

            {/* Featured Article Image Container */}
            <AspectRatio ratio={16 / 10}>
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="Article cover image"
                fill
                className="h-full w-full rounded-xl object-cover"
                priority // Important image loads first
              />
            </AspectRatio>
          </div>

          {/* Article Content Section */}
          <div className="flex flex-col gap-6">
            {/* Introduction Paragraph */}
            <p className="leading-7">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>

            {/* First Section - The King's Plan */}
            <h2
              className="border-b pb-2 text-3xl font-semibold"
              id="the-kings-plan"
            >
              The King's Plan
            </h2>

            <p className="leading-7">
              The king thought long and hard, and finally came up with a
              brilliant plan: he would tax the jokes in the kingdom.
            </p>

            {/* Quote Block - King's Statement */}
            <blockquote className="border-l-2 pl-6 italic">
              "After all," he said, "everyone enjoys a good joke, so it's only
              fair that they should pay for the privilege."
            </blockquote>

            {/* Second Section - The Joke Tax */}
            <h3 className="mt-8 text-2xl font-semibold" id="the-joke-tax">
              The Joke Tax
            </h3>

            <p className="leading-7">
              The king's subjects were not amused. They grumbled and complained,
              but the king was firm:
            </p>

            {/* Tax Rates List */}
            <ul
              className="ml-6 list-disc space-y-2"
              aria-label="Joke tax rates"
            >
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners: 20 gold coins</li>
            </ul>

            {/* Story Continuation */}
            <p className="leading-7">
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king's foolishness get him down: a court jester named Jokester.
            </p>

            {/* Third Section - Jokester's Revolt */}
            <h3 className="mt-8 text-2xl font-semibold">Jokester's Revolt</h3>

            <p className="leading-7">
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester.
            </p>

            <p className="leading-7">
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn't help but
              laugh. And once they started laughing, they couldn't stop.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              The People's Rebellion
            </h3>

            <p className="leading-7">
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
            </p>

            <p className="leading-7">
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>

            <p className="leading-7">
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
