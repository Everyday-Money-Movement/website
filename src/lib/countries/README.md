# Country Data Management

This directory contains structured data for all country pages on the "Live on Bitcoin" section.

## How to Add a New Country

### 1. Create Country Data File

Copy the template file and rename it to the country code:

```bash
cp template.ts de.ts  # For Germany
```

### 2. Update the Data

Edit the new file and replace all placeholder data:

```typescript
export const germanyData: CountryData = {
  code: "DE",
  name: "Germany",
  title: "Live on Bitcoin — Germany",
  subtitle: "Bitcoin is legal in Germany...",
  // ... rest of the data
};
```

### 3. Register the Country

Add the new country to `index.ts`:

```typescript
import { germanyData } from "./de";

export const countryDataRegistry: Record<string, CountryData> = {
  PL: polandData,
  US: usData,
  DE: germanyData, // Add this line
  // ...
};
```

### 4. Test the Page

Visit `/live/de` to see your new country page!

## Data Structure

Each country file exports a `CountryData` object with:

- **Basic Info**: `code`, `name`, `title`, `subtitle`, `imageUrl`
- **Navigation**: `tableOfContents` array for sidebar navigation
- **Content**: `content` object with text sections
- **Apps**: `appCategories` array with organized app listings

## App Categories

You can create custom categories for each country. Common categories include:

- **Exchanges**: Centralized trading platforms
- **Fintech Apps**: Banking and payment apps
- **P2P Services**: Peer-to-peer trading platforms
- **ATMs**: Bitcoin ATM networks
- **Wallets**: Bitcoin wallet applications
- **Payment Processors**: Merchant payment solutions

## Tips

- Use placeholder URLs (`#`) for apps that don't have public links yet
- Keep descriptions concise but informative
- Use high-quality images from Unsplash or similar services
- Test the page after adding new data to ensure everything renders correctly

