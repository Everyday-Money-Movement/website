"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from "next/navigation";
import { NAME_TO_ISO2 } from "@/lib/iso";
import { getAvailableCountryCodes } from "@/lib/countries";

const geoUrl = "/maps/world-110m.json";

export function WorldMap() {
  const router = useRouter();
  const availableCountries = getAvailableCountryCodes();

  type GeoFeature = { rsmKey: string; properties: { name: string } };
  const handleSelect = (geo: GeoFeature) => {
    const countryName = geo.properties.name;
    const iso2 = NAME_TO_ISO2[countryName];
    
    if (iso2) {
      // Navigate to country page - will show 404 if no data
      router.push(`/live/${iso2.toLowerCase()}`);
    } else {
      // For countries without ISO2 mapping, try to create a URL from the country name
      // Convert country name to a URL-friendly format
      const urlFriendlyName = countryName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
      // Try to navigate to the country page
      router.push(`/live/${urlFriendlyName}`);
    }
  };

  return (
    <div className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
      <ComposableMap 
        aria-label="World map"
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 200,
          center: [0, 0]
        }}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: unknown[] }) =>
            (geographies as GeoFeature[]).map((geo) => {
              const iso2 = NAME_TO_ISO2[geo.properties.name];
              const hasData = iso2 && availableCountries.includes(iso2);
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  tabIndex={0}
                  aria-label={geo.properties.name}
                  onClick={() => handleSelect(geo)}
                  onKeyDown={(e: React.KeyboardEvent<SVGPathElement>) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelect(geo);
                    }
                  }}
                  style={{
                    default: {
                      fill: hasData ? "#E5E7EB" : "#F3F4F6",
                      stroke: "#9CA3AF",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: hasData ? "#D1D5DB" : "#E5E7EB",
                      stroke: "#6B7280",
                      strokeWidth: 1,
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: hasData ? "#9CA3AF" : "#D1D5DB",
                      stroke: "#6B7280",
                      strokeWidth: 1,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default WorldMap;
