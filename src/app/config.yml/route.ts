import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const configPath = path.join(process.cwd(), 'public', 'admin', 'config.yml');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    return new NextResponse(configContent, {
      headers: {
        'Content-Type': 'text/yaml',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    return new NextResponse('Config not found', { status: 404 });
  }
}
