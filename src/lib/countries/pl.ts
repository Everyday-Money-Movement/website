import { CountryData } from "../country-data";

export const polandData: CountryData = {
  code: "PL",
  name: "Poland",
  title: "Live on Bitcoin in Poland",
  subtitle: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester.",
  imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  tableOfContents: [
    { label: "General Info", href: "#general-info" },
    { label: "Taxation", href: "#taxation" },
    { label: "Apps & Services", href: "#apps-services" },
    { label: "Direct payments", href: "#direct-payments" },
    { label: "Online shops & services", href: "#online-shops-services" },
    { label: "Exchanges", href: "#exchanges" },
    { label: "Fintech apps", href: "#fintech-apps" },
    { label: "Peer-to-peer", href: "#peer-to-peer" },
  ],
  content: {
    generalInfo: "The main currency in Poland is złoty (PLN or zł). Bitcoin adoption is quite low, nonetheless you can find several bars, restaurants, shops and services that take sats. Bitcoin payments are subject to capital gains tax which is 19%.",
    taxation: "In Poland, the taxation of Bitcoin and other cryptocurrencies for investment purposes from the sale of Bitcoin are considered income and are subject to capital gains tax which is a flat tax rate of 19% on the realized gains.\n\nWhen using Bitcoin as a means of payment at a merchant, the transaction is treated as a barter transaction. In such cases, the value of the goods or services received in exchange for Bitcoin must be reported, and the tax is calculated based on the difference between the acquisition cost of the Bitcoin and its value at the time of the transaction.",
    directPayments: "There's rather low Bitcoin adoption of merchants in Poland. You usually can find several businesses accepting Bitcoin in bigger cities.",
  },
  appCategories: [
    {
      title: "Direct payments",
      apps: [
        {
          name: "BTCMap",
          description: "Open source map of places accepting bitcoin around the world.",
          url: "#",
        },
      ],
    },
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
      title: "Fintech apps",
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
      title: "Peer-to-peer",
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
          description: "Swiss-based mobile app that offers P2P trading with EUR",
          url: "#",
        },
      ],
    },
    {
      title: "ATMs & currency exchanges",
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
