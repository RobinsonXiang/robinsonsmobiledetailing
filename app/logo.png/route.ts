import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect any requests to /logo.png to the correct logo file
  return NextResponse.redirect(new URL('/robinsons_mobile_detailing_logo.png', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
} 