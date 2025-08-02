import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  return NextResponse.json({
    placeId: placeId ? 'Set' : 'Not set',
    apiKey: apiKey ? 'Set' : 'Not set',
    allEnvVars: Object.keys(process.env).filter(key => key.includes('GOOGLE'))
  });
} 