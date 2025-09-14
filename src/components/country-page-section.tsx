"use client";

import { useState } from "react";
import { RichTextSection4 } from "@/components/pro-blocks/landing-page/rich-text-sections/rich-text-section-4";
import { AppLink } from "@/components/app-link";
import { CountryData } from "@/lib/country-data";

interface CountryPageSectionProps {
  data: CountryData;
}

export function CountryPageSection({ data }: CountryPageSectionProps) {
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

  return (
    <RichTextSection4
      title={data.title}
      subtitle={data.subtitle}
      imageUrl={data.imageUrl}
      tableOfContents={data.tableOfContents}
      onScroll={handleScroll}
      activeSection={activeSection}
    >
      {/* General Info Section */}
      <section id="general-info" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">General Info</h2>
        <p className="text-muted-foreground leading-relaxed">
          {data.content.generalInfo}
        </p>
      </section>

      {/* Taxation Section */}
      <section id="taxation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Taxation</h2>
        <p className="text-muted-foreground leading-relaxed">
          {data.content.taxation}
        </p>
      </section>

      {/* Apps & Services Section */}
      <section id="apps-services" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Apps & Services</h2>
        <div className="space-y-8">
          {data.appCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.apps.map((app, appIndex) => (
                  <AppLink
                    key={appIndex}
                    name={app.name}
                    description={app.description}
                    url={app.url}
                    imageUrl={app.imageUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Payments Section */}
      <section id="direct-payments" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Direct Payments</h2>
        <p className="text-muted-foreground leading-relaxed">
          {data.content.directPayments}
        </p>
      </section>
    </RichTextSection4>
  );
}
