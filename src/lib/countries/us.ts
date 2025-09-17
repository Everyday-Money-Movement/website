import { CountryData } from "../country-data";

export const usData: CountryData = {
  code: "US",
  name: "United States",
  title: "Live on Bitcoin — United States",
  subtitle: "Bitcoin adoption varies by state in the US. Here's how to live on Bitcoin in the United States.",
  imageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
  tableOfContents: [
    { label: "General Info", href: "#general-info" },
    { label: "Taxation", href: "#taxation" },
    { label: "Apps & Services", href: "#apps-services" },
    { label: "Direct payments", href: "#direct-payments" },
  ],
  content: {
    generalInfo: "Bitcoin is legal in the United States, though regulations vary by state. The federal government treats Bitcoin as property for tax purposes, and the SEC has been working on clearer regulations for cryptocurrency businesses. Some states like Wyoming and Texas are very Bitcoin-friendly, while others have more restrictive regulations.",
    taxation: "In the US, Bitcoin is treated as property for tax purposes. This means every transaction (buying, selling, trading, or spending Bitcoin) is a taxable event. You need to report capital gains or losses on your tax return. The tax rate depends on how long you held the Bitcoin and your income level. Short-term gains (held less than a year) are taxed as ordinary income, while long-term gains (held more than a year) have lower tax rates.",
    directPayments: "Bitcoin acceptance for direct payments is growing in the US, especially in tech hubs and Bitcoin-friendly cities. You can find Bitcoin-accepting merchants on platforms like BTCMap and Coinmap. Some major retailers and restaurants accept Bitcoin, and the Lightning Network is making small payments more practical.",
  },
  appCategories: [
    {
      title: "Exchanges",
      apps: [
        {
          name: "Coinbase",
          description: "One of the largest US-based cryptocurrency exchanges with a user-friendly interface.",
          url: "#",
        },
        {
          name: "Kraken",
          description: "Established exchange with strong security and regulatory compliance.",
          url: "#",
        },
        {
          name: "Gemini",
          description: "New York-based exchange founded by the Winklevoss twins.",
          url: "#",
        },
      ],
    },
    {
      title: "Fintech Apps",
      apps: [
        {
          name: "Cash App",
          description: "Popular mobile payment app that allows buying and selling Bitcoin.",
          url: "#",
        },
        {
          name: "Strike",
          description: "Lightning Network app for fast and cheap Bitcoin payments.",
          url: "#",
        },
        {
          name: "River",
          description: "Bitcoin-only financial services platform.",
          url: "#",
        },
      ],
    },
    {
      title: "P2P Services",
      apps: [
        {
          name: "Bisq",
          description: "Decentralized P2P exchange with no KYC requirements.",
          url: "#",
        },
        {
          name: "HodlHodl",
          description: "Global P2P Bitcoin exchange with multisig escrow.",
          url: "#",
        },
      ],
    },
  ],
};



