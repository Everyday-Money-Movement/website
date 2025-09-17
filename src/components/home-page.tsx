"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";

export function HomePage() {
  return (
    <section
      className="section-padding-y relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1920&h=1080&fit=crop')] bg-cover bg-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-black/80" />
      <div className="container-padding-x relative z-1 container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="m-auto flex max-w-2xl flex-1 flex-col items-center gap-6 text-center lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col items-center text-center">
            {/* Tagline */}
            <Tagline variant="white">Everyday Money Movement</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-white">
              Live on Bitcoin, Every Day
            </h1>
            {/* Description */}
            <p className="text-base text-white/80 lg:text-lg">
              Discover how Bitcoin works as a medium of exchange and explore 
              practical ways to live on Bitcoin in countries around the world. 
              Join the movement toward everyday Bitcoin adoption.
            </p>
          </div>
          
          {/* Two CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link href="/medium-of-exchange">
              <Button size="lg" className="w-full sm:w-auto">
                Learn About Medium of Exchange
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/live">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black">
                Live on Bitcoin
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
