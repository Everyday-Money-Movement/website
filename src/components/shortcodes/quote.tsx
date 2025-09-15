interface QuoteProps {
  author?: string;
  children: React.ReactNode;
}

export function Quote({ author, children }: QuoteProps) {
  return (
    <blockquote className="border-l-4 pl-4 italic">
      <p>{children}</p>
      {author && <footer className="mt-2 text-sm">— {author}</footer>}
    </blockquote>
  );
}
