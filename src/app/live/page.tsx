import WorldMap from "@/components/map/WorldMap";
import { getCountryCodes } from "@/lib/content";
import { ISO2_TO_NAME } from "@/lib/iso";
import { LivePageClient } from "./live-page-client";

export default function LivePage() {
  const codes = getCountryCodes();

  const countries = codes.map(code => ({
    code,
    name: ISO2_TO_NAME[code] || code
  }));

  return (
    <div>
      {/* Header Section */}
      <section className="bg-background section-padding-y" aria-labelledby="page-heading">
        <div className="container-padding-x container mx-auto">
          <div className="section-title-gap-xl mx-auto flex max-w-xl flex-1 flex-col items-center text-center">
            <div className="section-title-gap-xl flex flex-col items-center">
              <h1 id="page-heading" className="heading-xl text-foreground">
                Live on Bitcoin
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg" aria-description="page description">
                Explore countries where Bitcoin is legal tender or widely adopted. Discover how people around the world are living on Bitcoin.
              </p>
            </div>
            
            {/* Client Component for Interactive Elements */}
            <LivePageClient countries={countries} />
          </div>
        </div>
      </section>

      {/* Map Section - Aligned with Navbar */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <WorldMap />
        </div>
      </section>
    </div>
  );
}
