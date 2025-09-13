import Link from "next/link";
import WorldMap from "@/components/map/WorldMap";
import { getCountryCodes } from "@/lib/content";
import { ISO2_TO_NAME } from "@/lib/iso";

export default function LivePage() {
  const codes = getCountryCodes();

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Live on Bitcoin</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <WorldMap />
        <div>
          {codes.length > 0 ? (
            <ul className="space-y-2">
              {codes.map((code) => (
                <li key={code}>
                  <Link
                    href={`/live/${code.toLowerCase()}`}
                    className="text-blue-600 hover:underline"
                  >
                    {ISO2_TO_NAME[code] ?? code}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">Guides coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
