"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mobile top bar component
  const MobileTopBar = () => (
    <div
      className={`bg-background flex h-14 items-center justify-between px-4 ${
        !isMenuOpen ? "border-border border-b" : ""
      }`}
    >
      {/* Mobile menu toggle button */}
      <Button
        variant="ghost"
        onClick={toggleMenu}
        className="relative -ml-2 flex h-9 w-9 items-center justify-center [&_svg]:size-5"
      >
        <span
          className={`absolute transition-all duration-300 ${
            isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <Menu />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        >
          <X />
        </span>
      </Button>

      {/* Logo */}
      <Link href="/" className="absolute left-1/2 h-8 w-8 -translate-x-1/2 transform">
        <Logo className="h-8 w-8" />
      </Link>

      {/* Mobile menu toggle area */}
      <div className="absolute right-4 flex items-center">
        <ThemeToggle />
      </div>
    </div>
  );

  // Navigation items component
  const NavItems = ({ isMobile = false }) => {
    const getLinkClasses = (href: string) => {
      const isActive = pathname === href;
      const baseClasses = `font-medium ${isMobile ? "text-base" : "text-sm"} px-3 py-2 rounded-md`;
      const activeClasses = isActive ? "text-primary" : "text-muted-foreground";
      const hoverClasses = isMobile ? "" : "hover:bg-primary/5";
      
      return `${baseClasses} ${activeClasses} ${hoverClasses}`;
    };

    return (
      <>
        {/* Main navigation links */}
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
      </>
    );
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="border-border bg-background hidden h-16 border-b shadow-sm lg:block">
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          {/* Right section: Navigation items and theme toggle */}
          <div className="flex items-center gap-x-1">
            <NavItems />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden">
        <MobileTopBar />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="border-border bg-background border-b lg:hidden">
          <div className="flex flex-col">
            {/* Mobile menu content */}
            <div className="flex-grow overflow-y-auto p-2">
              <div className="flex flex-col">
                <NavItems isMobile={true} />
              </div>
            </div>
            <Separator />
            {/* Mobile user profile section */}
            <div className="p-2">
              {/* User info */}
              <div className="flex items-center space-x-3 p-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-muted-foreground text-sm">
                    hi@shadcndesign.com
                  </p>
                </div>
              </div>
              {/* User-related links */}
              <div>
                <Link
                  href="#"
                  className="text-muted-foreground block rounded-md px-2 py-2 font-medium"
                >
                  My profile
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground block rounded-md px-2 py-2 font-medium"
                >
                  Account settings
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground block rounded-md px-2 py-2 font-medium"
                >
                  Billing
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground block rounded-md px-2 py-2 font-medium"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
