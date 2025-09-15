"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/pro-blocks/logo";

export function Header() {
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    const baseClasses = "font-medium text-sm px-3 py-2 rounded-md transition-colors";
    const activeClasses = isActive ? "text-primary" : "text-muted-foreground hover:text-foreground";
    
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-8" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-x-1">
          <Link href="/" className={getLinkClasses("/")}>
            Manifesto
          </Link>
          <Link href="/medium-of-exchange" className={getLinkClasses("/medium-of-exchange")}>
            Medium of Exchange
          </Link>
          <Link href="/live" className={getLinkClasses("/live")}>
            Live on Bitcoin
          </Link>
          <Link href="/spedn-wall" className={getLinkClasses("/spedn-wall")}>
            SPEDN Wall
          </Link>
          <Link href="/blog" className={getLinkClasses("/blog")}>
            Blog
          </Link>
          <Link href="#" className={getLinkClasses("#")}>
            Contribute
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
