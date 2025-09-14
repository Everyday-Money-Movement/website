import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function ManifestoSection() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="manifesto-title"
    >
      {/* Content Container - Centered with max width */}
      <div className="mx-auto max-w-3xl px-6">
        {/* Manifesto Container with Vertical Layout */}
        <article className="flex flex-col gap-12 md:gap-16">
          {/* Title */}
          <h1 id="manifesto-title" className="heading-xl text-center">
            Bitcoin is Everyday Money
          </h1>

          {/* Featured Image Container */}
          <AspectRatio ratio={16 / 10}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Bitcoin as everyday money"
              fill
              className="h-full w-full rounded-xl object-cover"
              priority
            />
          </AspectRatio>

          {/* Manifesto Content */}
          <div className="flex flex-col gap-6">
            <p className="leading-7">
              If you're reading this, that means you understand that If Bitcoin crystallizes solely as a Store of Value, without a strong and real Medium of Exchange function, it risks failing in its transformative role.
            </p>

            <p className="leading-7">
              It may end up serving only institutions, governments and corporations, not common people, and may even lose lots of its permissionless and censorship-resistance qualities.
            </p>

            <p className="leading-7">
              If you're reading this, that also means you care deeply about bitcoin adoption as everyday money and are contributing for this vision to become reality. You may work in bitcoin companies that focus on payments, using or spending bitcoin. You may be engaged in communities, projects, educational initiatives or circular economies that facilitate realising mentioned vision. You may be a content creator, podcaster 2.0 or avid zapper on Nostr or stacker.news. Or you're just a pleb, noderunner or person living 100% on bitcoin and try to use it in everyday payments.
            </p>

            <p className="leading-7">
              There are more and more people like us. We know each other, meet on the web or in person and we are on the same wavelength when it comes to understanding bitcoin as money. We often see an issue growing influence of narratives about bitcoin that reduce it to Store of Value only, that come from figures like Michael Saylor, ETFs and new bitcoin treasury companies popping out.
            </p>

            <p className="leading-7">
              Let's join forces and find a way to change the direction the wind blows.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
