import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { ISO2_TO_NAME } from "@/lib/iso";
import { CountryPageSection } from "@/components/country-page-section";
import { getCountryData } from "@/lib/countries";
import { CanadaPage } from "@/components/countries/canada-page";
import { HongKongPage } from "@/components/countries/hong-kong-page";
import { PolandPage } from "@/components/countries/poland-page";

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const code = country.toUpperCase();
  const name = ISO2_TO_NAME[code] ?? code;
  return {
    title: `Live on Bitcoin — ${name}`,
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  
  // Try to find the country by ISO code first
  let code = country.toUpperCase();
  let name = ISO2_TO_NAME[code];
  
  // If not found by ISO code, try to find by URL-friendly name
  if (!name) {
    // Convert URL-friendly name back to country name
    const countryName = country
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Try to find ISO code by country name
    const foundCode = Object.entries(ISO2_TO_NAME).find(([_, countryNameValue]) => 
      countryNameValue.toLowerCase() === countryName.toLowerCase()
    )?.[0];
    
    if (foundCode) {
      code = foundCode;
      name = countryName;
    } else {
      // Use the formatted name as fallback
      name = countryName;
    }
  }

  // Check for specific country components first
  if (code === "CA") {
    return <CanadaPage />;
  }
  
  if (code === "HK") {
    return <HongKongPage />;
  }
  
  if (code === "PL") {
    return <PolandPage />;
  }

  // Check if we have structured data for this country
  const countryData = getCountryData(code);
  if (countryData) {
    return <CountryPageSection data={countryData} />;
  }

  // Fallback to MDX content if available
  const filePath = path.join(process.cwd(), "content", "countries", `${code}.mdx`);

  if (fs.existsSync(filePath)) {
    const source = fs.readFileSync(filePath, "utf8");
    const { content } = await compileMDX({
      source,
      options: { parseFrontmatter: true },
    });

    return (
      <div className="container mx-auto py-8">
        <h1 className="mb-4 text-3xl font-bold">Live on Bitcoin — {name}</h1>
        <article className="prose dark:prose-invert">{content}</article>
      </div>
    );
  }

  // If no structured data and no MDX file, show 404
  notFound();
}
