export interface App {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export interface AppCategory {
  title: string;
  apps: App[];
}

export interface CountryData {
  code: string;
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  tableOfContents: Array<{
    label: string;
    href: string;
  }>;
  content: {
    generalInfo: string;
    taxation: string;
    directPayments: string;
  };
  appCategories: AppCategory[];
}



