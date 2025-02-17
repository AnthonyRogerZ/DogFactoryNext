import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Récupérer les photos supprimées
    const deletedPhotos = await prisma.photo.findMany({
      where: {
        category: 'beforeAfter',
        isDeleted: true
      },
      orderBy: {
        deletedAt: 'desc'
      }
    });

    // Formater les photos
    const formattedPhotos = deletedPhotos.map(photo => ({
      id: photo.id,
      before: photo.beforeImage?.startsWith('/') ? photo.beforeImage : `/${photo.beforeImage}`,
      after: photo.afterImage?.startsWith('/') ? photo.afterImage : `/${photo.afterImage}`,
      description: photo.description || photo.prestationType || '',
      prestationType: photo.prestationType || 'toilettage-complet',
      deletedAt: photo.deletedAt
    }));

    return NextResponse.json({
      success: true,
      photos: formattedPhotos
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des photos supprimées:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des photos' },
      { status: 500 }
    );
  }
}
