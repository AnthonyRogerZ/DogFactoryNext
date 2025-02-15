import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJgwPkdMjx5UcR5YldmMmXGjI'; // Dog Factory Place ID

export async function GET() {
  try {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!API_KEY) {
      console.error('API key is missing');
      throw new Error('Google Places API key is not configured');
    }

    console.log('Starting Google Places API request...');
    console.log('Place ID:', PLACE_ID);
    console.log('API Key (first 10 chars):', API_KEY.substring(0, 10) + '...');
    
    // First, get the place details
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`;
    console.log('Request URL:', detailsUrl);

    const response = await fetch(detailsUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response error:', errorText);
      throw new Error(`Failed to fetch reviews: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('Raw API Response:', JSON.stringify(data, null, 2));
    
    if (!data.result) {
      console.error('No result in API response:', data);
      throw new Error('Invalid API response format');
    }

    // Récupérer et trier les avis par date
    const reviews = data.result.reviews || [];
    console.log('Number of reviews found:', reviews.length);
    reviews.sort((a, b) => b.time - a.time);

    const formattedReviews = reviews.map(review => ({
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      profile_photo_url: review.profile_photo_url
    }));

    console.log('Formatted reviews:', formattedReviews);

    return NextResponse.json({ 
      reviews: formattedReviews,
      place: {
        name: data.result.name,
        rating: data.result.rating,
        total_ratings: data.result.user_ratings_total
      }
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ 
      error: error.message,
      reviews: [] 
    });
  }
}
