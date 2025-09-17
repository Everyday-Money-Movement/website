"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function HeroSection6() {
  return (
    <section
      className="section-padding-y relative overflow-hidden bg-[url('https://ui.shadcn.com/placeholder.svg')] bg-cover bg-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-black/80" />
      <div className="container-padding-x relative z-1 container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="m-auto flex max-w-2xl flex-1 flex-col items-center gap-6 text-center lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col items-center text-center">
            {/* Tagline */}
            <Tagline variant="white">Hero Section</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-white">
              Headline that solves user's main problem
            </h1>
            {/* Description */}
            <p className="text-base text-white/80 lg:text-lg">
              Follow with one or two sentences that expand on your value
              proposition. Focus on key benefits and address why users should
              take action now. Keep it scannable, short and benefit-driven.
            </p>
          </div>
          <Button>
            Get started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
