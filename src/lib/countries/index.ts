import { CountryData } from "../country-data";
import { polandData } from "./pl";
import { usData } from "./us";
import { canadaData } from "./ca";
import { hongKongData } from "./hk";

// Registry of all country data
export const countryDataRegistry: Record<string, CountryData> = {
  PL: polandData,
  US: usData,
  CA: canadaData,
  HK: hongKongData,
  // Add more countries here as they're created
  // DE: germanyData,
  // etc.
};

// Helper function to get country data by code
export function getCountryData(countryCode: string): CountryData | null {
  return countryDataRegistry[countryCode.toUpperCase()] || null;
}

// Helper function to get all available country codes
export function getAvailableCountryCodes(): string[] {
  return Object.keys(countryDataRegistry);
}
