import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const photos = await prisma.photo.findMany({
      where: {
        category: 'salon'
      },
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        image: true
      }
    });

    const images = photos.map(photo => photo.image);

    return NextResponse.json({
      success: true,
      images
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des images:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des images' },
      { status: 500 }
    );
  }
}
