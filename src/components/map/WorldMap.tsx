"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter } from "next/navigation";
import { NAME_TO_ISO2 } from "@/lib/iso";

const geoUrl = "/maps/world-110m.json";

export function WorldMap() {
  const router = useRouter();

  type GeoFeature = { rsmKey: string; properties: { name: string } };
  const handleSelect = (geo: GeoFeature) => {
    const iso2 = NAME_TO_ISO2[geo.properties.name];
    if (iso2) {
      router.push(`/live/${iso2.toLowerCase()}`);
    }
  };

  return (
    <ComposableMap aria-label="World map">
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: unknown[] }) =>
          (geographies as GeoFeature[]).map((geo) => (
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
                  fill: "#E5E7EB",
                  stroke: "#9CA3AF",
                  outline: "none",
                },
                hover: {
                  fill: "#D1D5DB",
                  stroke: "#6B7280",
                  cursor: "pointer",
                },
                pressed: {
                  fill: "#9CA3AF",
                  stroke: "#6B7280",
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}

export default WorldMap;
