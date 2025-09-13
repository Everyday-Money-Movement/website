import fs from "fs";
import path from "path";

export function getCountryCodes(): string[] {
  const dir = path.join(process.cwd(), "content", "countries");
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
