import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJgwPkdMjx5UcR5YldmMmXGjI'; // Dog Factory Place ID

export async function GET() {
  try {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!API_KEY) {
      console.error('API key is missing');
      throw new Error('Google Places API key is not configured');
    }

    console.log('Fetching reviews with API key:', API_KEY.substring(0, 10) + '...');
    
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    console.log('Request URL:', url);

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response error:', errorText);
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
    // Récupérer et trier les avis par date
    const reviews = data.result?.reviews || [];
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
      reviews: formattedReviews
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ reviews: [] });
  }
}
