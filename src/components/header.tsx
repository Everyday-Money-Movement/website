import Link from "next/link";

export function Header() {
  return (
    <header className="p-4 border-b">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
