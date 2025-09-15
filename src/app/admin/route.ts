import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "admin", "index.html");
    const html = fs.readFileSync(filePath, "utf8");
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (err) {
    return new NextResponse("Admin UI not found", { status: 404 });
  }
}


