"use client"

import { Navbar1 } from "@/components/pro-blocks/application/navbars/navbar-1";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Manifesto" },
  { href: "/medium-of-exchange", label: "Medium of Exchange" },
  { href: "/live", label: "Live on Bitcoin" },
  { href: "/blog", label: "Blog" },
  { href: "/contribute", label: "Contribute" },
];

export function Header() {
  return <Navbar1 items={navItems} className="justify-center" />;
}

