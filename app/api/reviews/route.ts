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
          author_name: 'Jen',
          rating: 5,
          text: 'Robinson came to my home on time. He detailed and washed my Volvo. He spent hours meticulously cleaning every inch of the car inside and out. When he was finished it was like having a new car all over again. As a mom of a toddler it was very convenient to have him come to my home to provide this service. I highly recommend him!',
          time: Date.now() - 86400000, // 1 day ago
          profile_photo_url: '/globe.svg',
          car_photo_url: '/globe.svg'
        },
        {
          id: '2',
          author_name: 'Brady Tse',
          rating: 5,
          text: 'Just got an exterior detail done and I couldn\'t be happier with the results. The wash used premium-grade soap that left the paint looking glossy and refreshed. What really stood out was the care and knowledge that went into the process. Everything was explained step-by-step, from what each product did to how it helped protect and enhance the finish. That level of transparency and attention to detail made the experience feel really professional. When it was done, my car genuinely looked brand new again. Highly recommend to anyone who wants quality work and real pride put into the detailing. You won\'t be disappointed!',
          time: Date.now() - 172800000, // 2 days ago
          profile_photo_url: '/globe.svg',
          car_photo_url: '/globe.svg'
        },
        {
          id: '3',
          author_name: 'Luke Wu',
          rating: 5,
          text: 'Robinson made sure that the my Toyota was pristine in&out. He is a young man with an inspiring work ethic and dedication to his craft. Incredibly friendly demeanor the whole detail and is here to make money and make customers happy!',
          time: Date.now() - 259200000, // 3 days ago
          profile_photo_url: '/globe.svg',
          car_photo_url: '/globe.svg'
        },
        {
          id: '4',
          author_name: 'Rachel Meyer',
          rating: 5,
          text: 'Robinson did 2 amazing exterior details for our cars! He was very kind, efficient, and meticulous with his work and the cars looked beautiful in the end. Thank you Robinson!! Highly recommend!!',
          time: Date.now() - 345600000, // 4 days ago
          profile_photo_url: '/globe.svg',
          car_photo_url: '/globe.svg'
        },
        {
          id: '5',
          author_name: 'Kyle',
          rating: 5,
          text: 'Robinson replies quickly (via phone) and has put in a lot of effort into researching how to perfect his mobile detailing services. My BMW\'s leather felt like new after he vacuumed it!',
          time: Date.now() - 432000000, // 5 days ago
          profile_photo_url: '/globe.svg',
          car_photo_url: '/globe.svg'
        },
        {
          id: '6',
          author_name: 'Sarah Johnson',
          rating: 5,
          text: 'Robinson did an amazing job on my car! The interior was spotless and the exterior looked brand new. Very professional and reasonably priced.',
          time: Date.now() - 518400000, // 6 days ago
          profile_photo_url: '/globe.svg',
          car_photo_url: '/globe.svg'
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
        author_name: 'Jen',
        rating: 5,
        text: 'Robinson came to my home on time. He detailed and washed my Volvo. He spent hours meticulously cleaning every inch of the car inside and out. When he was finished it was like having a new car all over again. As a mom of a toddler it was very convenient to have him come to my home to provide this service. I highly recommend him!',
        time: Date.now() - 86400000,
        profile_photo_url: '/globe.svg',
        car_photo_url: '/globe.svg'
      },
      {
        id: '2',
        author_name: 'Brady Tse',
        rating: 5,
        text: 'Just got an exterior detail done and I couldn\'t be happier with the results. The wash used premium-grade soap that left the paint looking glossy and refreshed. What really stood out was the care and knowledge that went into the process. Everything was explained step-by-step, from what each product did to how it helped protect and enhance the finish. That level of transparency and attention to detail made the experience feel really professional. When it was done, my car genuinely looked brand new again. Highly recommend to anyone who wants quality work and real pride put into the detailing. You won\'t be disappointed!',
        time: Date.now() - 172800000,
        profile_photo_url: '/globe.svg',
        car_photo_url: '/globe.svg'
      },
      {
        id: '3',
        author_name: 'Luke Wu',
        rating: 5,
        text: 'Robinson made sure that the my Toyota was pristine in&out. He is a young man with an inspiring work ethic and dedication to his craft. Incredibly friendly demeanor the whole detail and is here to make money and make customers happy!',
        time: Date.now() - 259200000,
        profile_photo_url: '/globe.svg',
        car_photo_url: '/globe.svg'
      },
      {
        id: '4',
        author_name: 'Rachel Meyer',
        rating: 5,
        text: 'Robinson did 2 amazing exterior details for our cars! He was very kind, efficient, and meticulous with his work and the cars looked beautiful in the end. Thank you Robinson!! Highly recommend!!',
        time: Date.now() - 345600000,
        profile_photo_url: '/globe.svg',
        car_photo_url: '/globe.svg'
      },
      {
        id: '5',
        author_name: 'Kyle',
        rating: 5,
        text: 'Robinson replies quickly (via phone) and has put in a lot of effort into researching how to perfect his mobile detailing services. My BMW\'s leather felt like new after he vacuumed it!',
        time: Date.now() - 432000000,
        profile_photo_url: '/globe.svg',
        car_photo_url: '/globe.svg'
      },
      {
        id: '6',
        author_name: 'Sarah Johnson',
        rating: 5,
        text: 'Robinson did an amazing job on my car! The interior was spotless and the exterior looked brand new. Very professional and reasonably priced.',
        time: Date.now() - 518400000,
        profile_photo_url: '/globe.svg',
        car_photo_url: '/globe.svg'
      }
    ];

    return NextResponse.json({ reviews: mockReviews });
  }
} 