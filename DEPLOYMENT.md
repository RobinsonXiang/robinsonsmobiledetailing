# Deployment Guide

## Environment Variables Setup

Your app requires the following environment variables to be set in your hosting platform:

### Required Environment Variables

```bash
GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
GOOGLE_PLACE_ID=your_google_place_id_here
```

### How to Get These Values

1. **Google Places API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the "Places API (New)"
   - Go to "Credentials" → "Create Credentials" → "API Key"
   - Copy the API key

2. **Google Place ID**:
   - Find your business on Google Maps
   - Look at the URL - it will contain your Place ID
   - Or use [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### Setting Environment Variables by Platform

#### Vercel
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable with the exact names above
4. Redeploy your app

#### Netlify
1. Go to your site dashboard
2. Click "Site settings" → "Environment variables"
3. Add each variable with the exact names above
4. Redeploy your site

#### Railway
1. Go to your project dashboard
2. Click "Variables" tab
3. Add each variable with the exact names above
4. Redeploy your app

#### Render
1. Go to your service dashboard
2. Click "Environment" tab
3. Add each variable with the exact names above
4. Redeploy your service

#### DigitalOcean App Platform
1. Go to your app dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable with the exact names above
4. Redeploy your app

### Local Development

For local development, create a `.env.local` file in your project root:

```bash
GOOGLE_PLACES_API_KEY=your_actual_api_key_here
GOOGLE_PLACE_ID=your_actual_place_id_here
```

### Security Notes

- Never commit your actual API keys to GitHub
- The `.env.local` file is automatically ignored by Git
- Always use environment variables for sensitive data
- Rotate your API keys regularly for security

### Testing

After setting up environment variables, test your deployment by:
1. Visiting your deployed site
2. Checking that Google Reviews load properly
3. Verifying that the API calls work in production 