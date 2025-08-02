import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json({ error: 'Missing environment variables' });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    // Show detailed review structure
    const firstReview = data.reviews?.[0];
    const reviewFields = firstReview ? Object.keys(firstReview) : [];

    return NextResponse.json({
      status: 'OK',
      place_name: data.displayName?.text,
      address: data.formattedAddress,
      reviews_count: data.reviews?.length || 0,
      has_reviews: !!data.reviews,
      url_called: url.replace(apiKey, '[API_KEY_HIDDEN]'),
      first_review_structure: firstReview,
      available_review_fields: reviewFields,
      sample_review: firstReview ? {
        id: firstReview.name,
        author_name: firstReview.authorName,
        rating: firstReview.rating,
        text: firstReview.text?.text,
        time: firstReview.createTime,
        profile_photo: firstReview.profilePhotoUri
      } : null
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to call Google Places API',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 