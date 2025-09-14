import WorldMap from "@/components/map/WorldMap";
import { ISO2_TO_NAME } from "@/lib/iso";
import { LivePageClient } from "./live-page-client";

export default function LivePage() {
  // Get all countries from ISO mapping for search
  const countries = Object.entries(ISO2_TO_NAME).map(([code, name]) => ({
    code,
    name
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
                Get to know how can you live and travel using bitcoin as money. Read our general guide or find your country
              </p>
              <p className="text-xs text-muted-foreground/70 mt-2">
                Note: Map boundaries are for reference only. Some territories may be disputed.
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
