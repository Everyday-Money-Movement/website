"use client";

import { useState } from "react";
import { RichTextSection4 } from "@/components/pro-blocks/landing-page/rich-text-sections/rich-text-section-4";
import { AppLink } from "@/components/app-link";

export function PolandPage() {
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
    { label: "Taxation", href: "#taxation" },
    { label: "Apps & Services", href: "#apps-services" },
    { label: "Direct payments", href: "#direct-payments" },
    { label: "Online shops & services", href: "#online-shops-services" },
    { label: "Exchanges", href: "#exchanges" },
    { label: "Fintech apps", href: "#fintech-apps" },
    { label: "Peer-to-peer", href: "#peer-to-peer" },
  ];

  return (
    <RichTextSection4
      title="Live on Bitcoin in Poland 🇵🇱"
      subtitle="As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester."
      imageUrl="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
      tableOfContents={tableOfContents}
      onScroll={handleScroll}
      activeSection={activeSection}
    >
      {/* General Info Section */}
      <section id="general-info" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">General Info</h2>
        <p className="text-muted-foreground leading-relaxed">
          The main currency in Poland is złoty (PLN or zł). Bitcoin adoption is quite low, nonetheless you can find several bars, restaurants, shops and services that take sats. Bitcoin payments are subject to capital gains tax which is 19%.
        </p>
      </section>

      {/* Taxation Section */}
      <section id="taxation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Taxation</h2>
        <p className="text-muted-foreground leading-relaxed">
          In Poland, the taxation of Bitcoin and other cryptocurrencies for investment purposes from the sale of Bitcoin are considered income and are subject to capital gains tax which is a flat tax rate of 19% on the realized gains.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          When using Bitcoin as a means of payment at a merchant, the transaction is treated as a barter transaction. In such cases, the value of the goods or services received in exchange for Bitcoin must be reported, and the tax is calculated based on the difference between the acquisition cost of the Bitcoin and its value at the time of the transaction.
        </p>
      </section>

      {/* Apps & Services Section */}
      <section id="apps-services" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Apps & Services</h2>
        
        {/* Direct payments subsection */}
        <div id="direct-payments" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Direct payments</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There's rather low Bitcoin adoption of merchants in Poland. You usually can find several businesses accepting Bitcoin in bigger cities.
          </p>
          <AppLink
            name="BTCMap"
            description="Open source map of places accepting bitcoin around the world."
            url="#"
          />
        </div>

        {/* Exchanges subsection */}
        <div id="exchanges" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Exchanges</h3>
          <div className="space-y-2">
            <AppLink
              name="Swaply"
              description="Long time exchange run by Lech Wilczyński, a long time Bitcoin promoter in Poland."
              url="#"
            />
            <AppLink
              name="Zonda"
              description="Currently the biggest polish crypto exchange."
              url="#"
            />
            <AppLink
              name="Kanga Exchange"
              description="Second biggest polish crypto exchange."
              url="#"
            />
            <AppLink
              name="Pocket Bitcoin"
              description="Swiss-based bitcoin-only exchange that automatically exchanges your EUR transfers into bitcoin and sends them directly to your own bitcoin wallet."
              url="#"
            />
            <AppLink
              name="Relay"
              description="Another swiss-based exchange that offers EUR-BTC exchange."
              url="#"
            />
            <AppLink
              name="Kraken"
              description="Big American exchange with BTC-EUR market that offers instant SEPA deposits."
              url="#"
            />
          </div>
        </div>

        {/* Fintech apps subsection */}
        <div id="fintech-apps" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Fintech apps</h3>
          <div className="space-y-2">
            <AppLink
              name="Zen"
              description="Polish neobank that offers toping up your fiat balances with bitcoin deposits, including lightning network with good exchange rate. They issue debit cards."
              url="#"
            />
            <AppLink
              name="Bringin"
              description="Big American exchange with BTC-EUR market that offers instant SEPA deposits."
              url="#"
            />
            <AppLink
              name="Strike"
              description="American exchange with BTC-EUR market that offers instant SEPA deposits."
              url="#"
            />
          </div>
        </div>

        {/* Peer-to-peer subsection */}
        <div id="peer-to-peer" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Peer-to-peer</h3>
          <div className="space-y-2">
            <AppLink
              name="BitBlik"
              description="P2P exchange of Bitcoin and PLN using polish Blik fast payment system."
              url="#"
            />
            <AppLink
              name="Vexl"
              description="P2P app that only displays offers from your phone contacts and their contacts. Allows to exchange bitcoin with multiple currencies, including PLN."
              url="#"
            />
            <AppLink
              name="Robosats"
              description="TOR-based P2P market that offers exchanging Bitcoin with PLN."
              url="#"
            />
            <AppLink
              name="Peach Bitcoin"
              description="Swiss-based mobile app that offers P2P trading with EUR"
              url="#"
            />
          </div>
        </div>

        {/* ATMs & currency exchanges subsection */}
        <div id="atms-currency-exchanges" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">ATMs & currency exchanges</h3>
          <div className="space-y-2">
            <AppLink
              name="Quark"
              description="Polish franchise of crypto currency exchanges."
              url="#"
            />
            <AppLink
              name="ShitcoinsClub"
              description="Polish network of crypto ATMs and currency exchanges."
              url="#"
            />
            <AppLink
              name="Flying Atom"
              description="Polish network of crypto ATMs and currency exchanges."
              url="#"
            />
            <AppLink
              name="Cashify"
              description="Polish network of crypto ATMs and currency exchanges."
              url="#"
            />
          </div>
        </div>
      </section>
    </RichTextSection4>
  );
}
