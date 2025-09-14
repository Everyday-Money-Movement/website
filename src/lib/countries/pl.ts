import { CountryData } from "../country-data";

export const polandData: CountryData = {
  code: "PL",
  name: "Poland",
  title: "Live on Bitcoin — Poland",
  subtitle: "Bitcoin is legal in Poland. You can buy, sell, and use it freely. Here's how to live on Bitcoin in Poland.",
  imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  tableOfContents: [
    { label: "General Info", href: "#general-info" },
    { label: "Taxation", href: "#taxation" },
    { label: "Apps & Services", href: "#apps-services" },
    { label: "Direct payments", href: "#direct-payments" },
  ],
  content: {
    generalInfo: "Bitcoin is legal in Poland. You can buy, sell, and use it freely. The Polish government has clarified that Bitcoin is not considered legal tender, but it's not illegal to use it as a means of payment. The Polish Financial Supervision Authority (KNF) has issued guidelines for cryptocurrency businesses, but individuals can use Bitcoin without restrictions.",
    taxation: "In Poland, Bitcoin transactions are subject to taxation. If you're trading Bitcoin as an individual, you may be subject to capital gains tax. The tax rate depends on your total income and can range from 18% to 32%. For businesses, Bitcoin transactions are treated as regular business income. It's important to keep records of all your Bitcoin transactions for tax purposes. The Polish tax authorities are becoming more familiar with cryptocurrency taxation, so it's advisable to consult with a tax professional.",
    directPayments: "While Bitcoin is not widely accepted for direct payments in Poland, there are some businesses that accept it. You can find Bitcoin-accepting merchants on platforms like BTCMap. Some restaurants, cafes, and online stores in major cities like Warsaw and Krakow accept Bitcoin payments. The adoption is still limited, but it's growing slowly as more people become aware of Bitcoin's benefits.",
  },
  appCategories: [
    {
      title: "Exchanges",
      apps: [
        {
          name: "Swaply",
          description: "Long time exchange run by Lech Wilczyński, a long time Bitcoin promoter in Poland.",
          url: "#",
        },
        {
          name: "Zonda",
          description: "Currently the biggest polish crypto exchange.",
          url: "#",
        },
        {
          name: "Kanga Exchange",
          description: "Second biggest polish crypto exchange.",
          url: "#",
        },
        {
          name: "Pocket Bitcoin",
          description: "Swiss-based bitcoin-only exchange that automatically exchanges your EUR transfers into bitcoin and sends them directly to your own bitcoin wallet.",
          url: "#",
        },
        {
          name: "Relay",
          description: "Another swiss-based exchange that offers EUR-BTC exchange.",
          url: "#",
        },
        {
          name: "Kraken",
          description: "Big American exchange with BTC-EUR market that offers instant SEPA deposits.",
          url: "#",
        },
      ],
    },
    {
      title: "Fintech Apps",
      apps: [
        {
          name: "Zen",
          description: "Polish neobank that offers toping up your fiat balances with bitcoin deposits, including lightning network with good exchange rate. They issue debit cards.",
          url: "#",
        },
        {
          name: "Bringin",
          description: "Big American exchange with BTC-EUR market that offers instant SEPA deposits.",
          url: "#",
        },
        {
          name: "Strike",
          description: "American exchange with BTC-EUR market that offers instant SEPA deposits.",
          url: "#",
        },
      ],
    },
    {
      title: "P2P Services",
      apps: [
        {
          name: "BitBlik",
          description: "P2P exchange of Bitcoin and PLN using polish Blik fast payment system.",
          url: "#",
        },
        {
          name: "Vexl",
          description: "P2P app that only displays offers from your phone contacts and their contacts. Allows to exchange bitcoin with multiple currencies, including PLN.",
          url: "#",
        },
        {
          name: "Robosats",
          description: "TOR-based P2P market that offers exchanging Bitcoin with PLN.",
          url: "#",
        },
        {
          name: "Peach Bitcoin",
          description: "Swiss-based mobile app that offers P2P trading with EUR.",
          url: "#",
        },
      ],
    },
    {
      title: "ATMs & Exchanges",
      apps: [
        {
          name: "Quark",
          description: "Polish franchise of crypto currency exchanges.",
          url: "#",
        },
        {
          name: "ShitcoinsClub",
          description: "Polish network of crypto ATMs and currency exchanges.",
          url: "#",
        },
        {
          name: "Flying Atom",
          description: "Polish network of crypto ATMs and currency exchanges.",
          url: "#",
        },
        {
          name: "Cashify",
          description: "Polish network of crypto ATMs and currency exchanges.",
          url: "#",
        },
      ],
    },
  ],
};
