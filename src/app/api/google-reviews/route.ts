import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJgwPkdMjx5UcR5YldmMmXGjI'; // Dog Factory Place ID

export async function GET() {
  try {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!API_KEY) {
      throw new Error('Google Places API key is not configured');
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    
    // Récupérer et trier les avis par date
    const reviews = data.result?.reviews || [];
    reviews.sort((a, b) => b.time - a.time);

    return NextResponse.json({ 
      reviews: reviews.map(review => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        profile_photo_url: review.profile_photo_url
      }))
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ reviews: [] });
  }
}
