import { CountryData } from "../country-data";

// Template for creating new country data
// Copy this file and rename it to the country code (e.g., de.ts for Germany)
// Then update the data below and add the export to countries/index.ts

export const templateData: CountryData = {
  code: "XX", // Replace with country code (e.g., "DE", "FR", "GB")
  name: "Country Name", // Replace with full country name
  title: "Live on Bitcoin — Country Name", // Replace with country name
  subtitle: "Brief description of Bitcoin status in this country.", // Replace with relevant info
  imageUrl: "https://images.unsplash.com/photo-...", // Replace with relevant image URL
  tableOfContents: [
    { label: "General Info", href: "#general-info" },
    { label: "Taxation", href: "#taxation" },
    { label: "Apps & Services", href: "#apps-services" },
    { label: "Direct payments", href: "#direct-payments" },
  ],
  content: {
    generalInfo: "Replace with information about Bitcoin's legal status and general adoption in this country.",
    taxation: "Replace with information about how Bitcoin is taxed in this country.",
    directPayments: "Replace with information about Bitcoin acceptance for direct payments in this country.",
  },
  appCategories: [
    {
      title: "Exchanges", // You can rename categories as needed
      apps: [
        {
          name: "Exchange Name",
          description: "Description of the exchange and its services.",
          url: "#", // Replace with actual URL or keep as "#" for placeholder
        },
        // Add more exchanges as needed
      ],
    },
    {
      title: "Fintech Apps",
      apps: [
        {
          name: "App Name",
          description: "Description of the fintech app.",
          url: "#",
        },
        // Add more fintech apps as needed
      ],
    },
    {
      title: "P2P Services",
      apps: [
        {
          name: "P2P Service Name",
          description: "Description of the P2P service.",
          url: "#",
        },
        // Add more P2P services as needed
      ],
    },
    // Add more categories as needed (e.g., "ATMs", "Wallets", "Payment Processors")
  ],
};

// Steps to add a new country:
// 1. Copy this file and rename it to the country code (e.g., de.ts)
// 2. Replace all the placeholder data above with real data
// 3. Export the data with a descriptive name (e.g., export const germanyData = ...)
// 4. Import the new data in countries/index.ts
// 5. Add the country to the countryDataRegistry object



