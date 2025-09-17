"use client";

import { useState } from "react";
import { RichTextSection4 } from "@/components/pro-blocks/landing-page/rich-text-sections/rich-text-section-4";

export function HongKongPage() {
  const [activeSection, setActiveSection] = useState("general-info");

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tableOfContents = [
    { label: "General Info", href: "#general-info" },
    { label: "Over the Counter", href: "#over-the-counter" },
    { label: "Peer to Peer", href: "#peer-to-peer" },
    { label: "ATMs", href: "#atms" },
    { label: "Gift cards", href: "#gift-cards" },
    { label: "Debit cards", href: "#debit-cards" },
    { label: "Exchanges", href: "#exchanges" },
  ];

  return (
    <RichTextSection4
      title="Live on Bitcoin in Hong Kong 🇭🇰"
      subtitle="Living on Bitcoin in Hong Kong is difficult as there are very few merchants accepting Lightning payments."
      imageUrl="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=800&h=600&fit=crop"
      tableOfContents={tableOfContents}
      onScroll={handleScroll}
      activeSection={activeSection}
    >
      {/* General Info Section */}
      <section id="general-info" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">General Info</h2>
        <p className="text-muted-foreground leading-relaxed">
          Living on Bitcoin in Hong Kong is difficult as there are very few merchants accepting Lightning payments.
        </p>
      </section>

      {/* Over the Counter Section */}
      <section id="over-the-counter" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Over the Counter</h2>
        <p className="text-muted-foreground leading-relaxed">
          However, selling Bitcoin for cash is convenient at the many in-person exchange kiosks that exist throughout the city. Some companies will even accept Lightning deposits and cash out in Hong Kong Dollars, US dollars or Renminbi immediately.
        </p>
      </section>

      {/* Peer to Peer Section */}
      <section id="peer-to-peer" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Peer to Peer</h2>
        <p className="text-muted-foreground leading-relaxed">
          There is a small but robust peer-to-peer trading scene. Approach the Hong Kong Bitcoin Meetup for contacts and details. Trades are commonly conducted through cash deposits at ATMs or FPS transactions.
        </p>
      </section>

      {/* ATMs Section */}
      <section id="atms" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">ATMs</h2>
        <p className="text-muted-foreground leading-relaxed">
          Bitcoin ATMs are widespread but rarely dispense cash. They typically charge high fees.
        </p>
      </section>

      {/* Gift cards Section */}
      <section id="gift-cards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Gift cards</h2>
        <p className="text-muted-foreground leading-relaxed">
          The gift card economy is not strongly developed in Hong Kong, and gift cards sold for Bitcoin are uncommon.
        </p>
      </section>

      {/* Debit cards Section */}
      <section id="debit-cards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Debit cards</h2>
        <p className="text-muted-foreground leading-relaxed">
          Hong Kong Dollar denominated debit cards are not currently issued. USD denominated cards typically work in the city, including prepaid debit cards.
        </p>
      </section>

      {/* Exchanges Section */}
      <section id="exchanges" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
        <p className="text-muted-foreground leading-relaxed">
          Licensed local exchanges can deposit Hong Kong Dollars into local bank accounts reliably. Transfers from international exchanges are occasionally blocked by Hong Kong banks.
        </p>
      </section>
    </RichTextSection4>
  );
}
