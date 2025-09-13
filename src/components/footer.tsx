"use client"

import { Footer3 } from "@/components/pro-blocks/landing-page/footers/footer-3";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Manifesto" },
  { href: "/medium-of-exchange", label: "Medium of Exchange" },
  { href: "/live", label: "Live on Bitcoin" },
  { href: "/blog", label: "Blog" },
  { href: "/contribute", label: "Contribute" },
];

export function Footer() {
  return <Footer3 items={navItems} />;
}

