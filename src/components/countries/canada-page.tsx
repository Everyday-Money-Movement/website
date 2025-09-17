"use client";

import { useState } from "react";
import { RichTextSection4 } from "@/components/pro-blocks/landing-page/rich-text-sections/rich-text-section-4";

export function CanadaPage() {
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
    { label: "Merchants", href: "#merchants" },
    { label: "Over the Counter", href: "#over-the-counter" },
    { label: "Peer to Peer", href: "#peer-to-peer" },
    { label: "ATMs", href: "#atms" },
    { label: "Gift cards", href: "#gift-cards" },
    { label: "Debit cards", href: "#debit-cards" },
    { label: "Brokers and Exchanges", href: "#brokers-and-exchanges" },
  ];

  return (
    <RichTextSection4
      title="Live on Bitcoin in Canada 🇨🇦"
      subtitle="Living on Bitcoin in Canada is increasingly easy with growing merchant adoption, a lively Bitcoin community and improving integration with existing payment systems."
      imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      tableOfContents={tableOfContents}
      onScroll={handleScroll}
      activeSection={activeSection}
    >
      {/* General Info Section */}
      <section id="general-info" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">General Info</h2>
        <p className="text-muted-foreground leading-relaxed">
          Living on Bitcoin in Canada is increasingly easy with growing merchant adoption, a lively Bitcoin community and improving integration with existing payment systems.
        </p>
      </section>

      {/* Merchants Section */}
      <section id="merchants" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Merchants</h2>
        <p className="text-muted-foreground leading-relaxed">
          Especially Western Canada is seeing accelerating merchant adoption, allowing you to spend your Bitcoin directly at grocers, butchers, restaurants and other service providers.
        </p>
      </section>

      {/* Over the Counter Section */}
      <section id="over-the-counter" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Over the Counter</h2>
        <p className="text-muted-foreground leading-relaxed">
          Currency exchanges that buy Bitcoin for cash exist but are not widespread and may charge high fees.
        </p>
      </section>

      {/* Peer to Peer Section */}
      <section id="peer-to-peer" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Peer to Peer</h2>
        <p className="text-muted-foreground leading-relaxed">
          Buying and selling Bitcoin directly is common in the active Bitcoin communities of large cities in Canada. Apps are rarely used as buyers and sellers coordinate directly. You may find the contacts of your local Bitcoin meetup to be helpful.
        </p>
      </section>

      {/* ATMs Section */}
      <section id="atms" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">ATMs</h2>
        <p className="text-muted-foreground leading-relaxed">
          ATMs are widespread but rarely dispense cash. They almost always charge prohibitive fees.
        </p>
      </section>

      {/* Gift cards Section */}
      <section id="gift-cards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Gift cards</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Canadian gift card economy is well developed and most gift cards are sold for Bitcoin, occasionally at a small discount. For groceries, online shopping, petrol and large retailers, gift cards are a convenient way to spend Bitcoin.
        </p>
      </section>

      {/* Debit cards Section */}
      <section id="debit-cards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Debit cards</h2>
        <p className="text-muted-foreground leading-relaxed">
          Reloadable and one-time Prepaid debit cards are common and convenient. Reloadable cards typically require a verified account, while non-reloadable cards don't.
        </p>
      </section>

      {/* Brokers and Exchanges Section */}
      <section id="brokers-and-exchanges" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Brokers and Exchanges</h2>
        <p className="text-muted-foreground leading-relaxed">
          While proper Bitcoin exchanges are rare in Canada, there are plenty of reputable online brokers that can be used to pay bills or make wire transfers for Bitcoin, even to accounts not in your name. This can be useful when paying invoices, purchasing expensive goods or paying rent.
        </p>
      </section>
    </RichTextSection4>
  );
}
