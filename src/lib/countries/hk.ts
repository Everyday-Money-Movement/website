import { CountryData } from "../country-data";

export const hongKongData: CountryData = {
  code: "HK",
  name: "Hong Kong",
  title: "Live on Bitcoin in Hong Kong",
  subtitle: "Living on Bitcoin in Hong Kong is difficult as there are very few merchants accepting Lightning payments.",
  imageUrl: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=800&h=600&fit=crop",
  tableOfContents: [
    { label: "General Info", href: "#general-info" },
    { label: "Over the Counter", href: "#over-the-counter" },
    { label: "Peer to Peer", href: "#peer-to-peer" },
    { label: "ATMs", href: "#atms" },
    { label: "Gift cards", href: "#gift-cards" },
    { label: "Debit cards", href: "#debit-cards" },
    { label: "Exchanges", href: "#exchanges" },
  ],
  content: {
    generalInfo: "Living on Bitcoin in Hong Kong is difficult as there are very few merchants accepting Lightning payments.",
    taxation: "Bitcoin taxation in Hong Kong is generally favorable, with no capital gains tax on cryptocurrency trading.",
    directPayments: "Very few merchants in Hong Kong accept Bitcoin payments directly.",
  },
  appCategories: [],
};
