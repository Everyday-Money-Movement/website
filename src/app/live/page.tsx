"use client";

import { useState, useMemo } from "react";

// Sample country data - in a real app, this would come from your content/countries directory
const countries = [
  { code: "PL", name: "Poland", slug: "poland" },
  { code: "US", name: "United States", slug: "united-states" },
  { code: "DE", name: "Germany", slug: "germany" },
  { code: "SV", name: "El Salvador", slug: "el-salvador" },
  { code: "CR", name: "Central African Republic", slug: "central-african-republic" },
  { code: "AR", name: "Argentina", slug: "argentina" },
  { code: "BR", name: "Brazil", slug: "brazil" },
  { code: "CA", name: "Canada", slug: "canada" },
  { code: "FR", name: "France", slug: "france" },
  { code: "IT", name: "Italy", slug: "italy" },
  { code: "JP", name: "Japan", slug: "japan" },
  { code: "MX", name: "Mexico", slug: "mexico" },
  { code: "NL", name: "Netherlands", slug: "netherlands" },
  { code: "ES", name: "Spain", slug: "spain" },
  { code: "GB", name: "United Kingdom", slug: "united-kingdom" },
];

export default function LivePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) {
      return countries;
    }
    
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Live on Bitcoin</h1>
          <p className="text-muted-foreground">
            Explore countries where Bitcoin is legal tender or widely adopted.
          </p>
        </header>

        <div className="mb-8">
          <label 
            htmlFor="country-search" 
            className="block text-sm font-medium mb-2"
          >
            Search countries
          </label>
          <input
            id="country-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search countries..."
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
            aria-describedby="search-help"
          />
          <p id="search-help" className="text-xs text-muted-foreground mt-1">
            Search by country name or country code
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <a
                key={country.code}
                href={`/live/${country.slug}`}
                className="block p-4 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label={`View Bitcoin adoption in ${country.name}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono text-muted-foreground">
                    {country.code}
                  </span>
                  <div>
                    <h3 className="font-medium">{country.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      View details →
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">
                No countries found matching &ldquo;{searchTerm}&rdquo;
              </p>
            </div>
          )}
        </div>

        {filteredCountries.length > 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Showing {filteredCountries.length} of {countries.length} countries
          </div>
        )}
      </div>
    </div>
  );
}
