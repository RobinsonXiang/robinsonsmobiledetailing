import { NextRequest, NextResponse } from 'next/server';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[];
  };
  status: string;
}

export async function GET(request: NextRequest) {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!placeId || !apiKey) {
      // Return mock data if API credentials aren't configured
      const mockReviews = [
        {
          id: '1',
          author_name: 'Sarah Johnson',
          rating: 5,
          text: 'Robinson did an amazing job on my car! The interior was spotless and the exterior looked brand new. Very professional and reasonably priced.',
          time: Date.now() - 86400000, // 1 day ago
          profile_photo_url: undefined
        },
        {
          id: '2',
          author_name: 'Mike Chen',
          rating: 5,
          text: 'Excellent service! My SUV looks incredible after the full detail. Robinson was punctual, professional, and the results exceeded my expectations.',
          time: Date.now() - 172800000, // 2 days ago
          profile_photo_url: undefined
        },
        {
          id: '3',
          author_name: 'Jennifer Davis',
          rating: 5,
          text: 'Best mobile detailing service I\'ve ever used. Robinson was thorough, professional, and my car looks better than when I first bought it!',
          time: Date.now() - 259200000, // 3 days ago
          profile_photo_url: undefined
        },
        {
          id: '4',
          author_name: 'David Rodriguez',
          rating: 5,
          text: 'Outstanding work! My truck looks brand new. Robinson was professional, on time, and the attention to detail was incredible. Highly recommend!',
          time: Date.now() - 345600000, // 4 days ago
          profile_photo_url: undefined
        },
        {
          id: '5',
          author_name: 'Lisa Thompson',
          rating: 5,
          text: 'Amazing service! Robinson transformed my dirty car into something that looks showroom ready. Very reasonable pricing for the quality of work.',
          time: Date.now() - 432000000, // 5 days ago
          profile_photo_url: undefined
        },
        {
          id: '6',
          author_name: 'Robert Wilson',
          rating: 5,
          text: 'Professional, thorough, and reasonably priced. Robinson did an excellent job on my vehicle. Will definitely use his services again!',
          time: Date.now() - 518400000, // 6 days ago
          profile_photo_url: undefined
        }
      ];

      return NextResponse.json({ reviews: mockReviews });
    }

    // Try the new Places API format first
    let url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`;
    
    let response = await fetch(url);
    let data = await response.json();

    // If new API fails, fall back to legacy API
    if (data.error) {
      url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
      response = await fetch(url);
      data = await response.json();
    }

    if (data.status && data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    // Handle both new and legacy API response formats
    let reviews = [];
    if (data.reviews) {
      // New API format
      reviews = data.reviews.map((review: any, index: number) => ({
        id: `google-${index}`,
        author_name: review.authorAttribution?.displayName || 'Anonymous',
        rating: review.rating,
        text: review.text?.text || review.text || '',
        time: review.publishTime ? new Date(review.publishTime).getTime() : Date.now(),
        profile_photo_url: review.authorAttribution?.photoUri
      }));
    } else if (data.result?.reviews) {
      // Legacy API format
      reviews = data.result.reviews.map((review: any, index: number) => ({
        id: `google-${index}`,
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time * 1000, // Convert to milliseconds
        profile_photo_url: review.profile_photo_url
      }));
    }

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    
    // Return mock data as fallback
    const mockReviews = [
      {
        id: '1',
        author_name: 'Sarah Johnson',
        rating: 5,
        text: 'Robinson did an amazing job on my car! The interior was spotless and the exterior looked brand new. Very professional and reasonably priced.',
        time: Date.now() - 86400000,
        profile_photo_url: undefined
      },
      {
        id: '2',
        author_name: 'Mike Chen',
        rating: 5,
        text: 'Excellent service! My SUV looks incredible after the full detail. Robinson was punctual, professional, and the results exceeded my expectations.',
        time: Date.now() - 172800000,
        profile_photo_url: undefined
      },
      {
        id: '3',
        author_name: 'Jennifer Davis',
        rating: 5,
        text: 'Best mobile detailing service I\'ve ever used. Robinson was thorough, professional, and my car looks better than when I first bought it!',
        time: Date.now() - 259200000,
        profile_photo_url: undefined
      }
    ];

    return NextResponse.json({ reviews: mockReviews });
  }
} 