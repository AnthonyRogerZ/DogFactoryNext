import { NextResponse } from 'next/server';

const PLACE_ID = 'ChIJgwPkdMjx5UcR5YldmMmXGjI'; // Dog Factory Place ID

export async function GET() {
  try {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    console.log('Starting API request...');
    
    if (!API_KEY) {
      console.error('API key is missing');
      return NextResponse.json({ 
        error: 'Google Places API key is not configured',
        reviews: [],
        debug: {
          hasApiKey: false,
          solution: 'Add GOOGLE_PLACES_API_KEY to your .env file'
        }
      }, { status: 500 });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&language=fr&key=${API_KEY}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    const responseData = await response.text();
    let data;
    
    try {
      data = JSON.parse(responseData);
    } catch (e) {
      console.error('Failed to parse JSON response:', e);
      return NextResponse.json({ 
        error: 'Invalid JSON response from Google API',
        reviews: [],
        debug: {
          rawResponse: responseData,
          solution: 'Check if the API response is valid JSON'
        }
      }, { status: 500 });
    }

    if (data.status === 'REQUEST_DENIED') {
      console.error('API request denied:', data.error_message);
      return NextResponse.json({ 
        error: 'Google Places API request denied',
        reviews: [],
        debug: {
          googleError: data.error_message,
          solution: 'Your API key has referer restrictions that are not compatible with this API. Go to Google Cloud Console > APIs & Services > Credentials and either:\n1. Remove the referer restrictions\n2. Use IP restrictions instead\n3. Create a new API key without referer restrictions'
        }
      }, { status: 403 });
    }

    if (!data || !data.result) {
      console.error('No result in API response:', data);
      return NextResponse.json({ 
        error: 'Invalid API response format',
        reviews: [],
        debug: {
          data,
          solution: 'Ensure that the Place ID is correct and the API key has access to the Places API'
        }
      }, { status: 500 });
    }

    // Récupérer et trier les avis par date
    const reviews = data.result.reviews || [];
    reviews.sort((a, b) => b.time - a.time);

    const formattedReviews = reviews.map(review => ({
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      profile_photo_url: review.profile_photo_url
    }));

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
      error: 'Failed to fetch Google reviews',
      reviews: [],
      debug: {
        hasApiKey: !!process.env.GOOGLE_PLACES_API_KEY,
        error: error.toString(),
        solution: 'Check the error details and make sure your API key and Place ID are correct'
      }
    }, { status: 500 });
  }
}
