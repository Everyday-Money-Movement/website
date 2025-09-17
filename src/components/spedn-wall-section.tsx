"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

// Video data - using the provided YouTube video as placeholder for all
const VIDEOS = [
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 1",
  },
  {
    id: "LRSQSkiil0M", 
    title: "Bitcoin Spending Video 2",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 3", 
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 4",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 5",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 6",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 7",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 8",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 9",
  },
  {
    id: "LRSQSkiil0M",
    title: "Bitcoin Spending Video 10",
  },
];

export function SpednWallSection() {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="spedn-wall-title"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Header Section */}
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-6">
            <h1 id="spedn-wall-title" className="heading-xl">
              SPEDN Wall
            </h1>
            <p className="text-muted-foreground text-lg">
              "SPEDN" is a play on famous "HODL" meme. Spending Bitcoin is as much powerful and important as savings in it. Enjoy those videos of people using the hardest money ever!
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video, index) => (
              <div key={index} className="group">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full rounded-lg border-0 transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <h3 className="mt-3 text-sm font-medium text-muted-foreground">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



