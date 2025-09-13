"use client"

import { ProFooter3 } from "@/components/problocks/footer-3";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Manifesto" },
  { href: "/medium-of-exchange", label: "Medium of Exchange" },
  { href: "/live", label: "Live on Bitcoin" },
  { href: "/blog", label: "Blog" },
  { href: "/contribute", label: "Contribute" },
];

export function Footer() {
  return <ProFooter3 items={navItems} />;
}

