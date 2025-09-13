export const ISO2_TO_NAME: Record<string, string> = {
  PL: "Poland",
  US: "United States of America",
  DE: "Germany",
  SV: "El Salvador",
  CR: "Costa Rica",
};

export const NAME_TO_ISO2: Record<string, string> = Object.fromEntries(
  Object.entries(ISO2_TO_NAME).map(([code, name]) => [name, code])
);
