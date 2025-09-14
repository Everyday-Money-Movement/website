"use client";

import { AppLink } from "@/components/app-link";
import { CountryData } from "@/lib/country-data";

interface CountryPageSectionProps {
  data: CountryData;
}

export function CountryPageSection({ data }: CountryPageSectionProps) {
  return (
    <section className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-muted-foreground">{data.subtitle}</p>
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt=""
            className="mx-auto mt-6 rounded-md object-cover"
          />
        )}
      </header>

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
    </section>
  );
}
