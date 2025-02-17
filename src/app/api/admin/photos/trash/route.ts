import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Début GET /api/admin/photos/trash');
    
    // Charger les photos supprimées
    const deletedPhotos = await prisma.photo.findMany({
      where: {
        category: 'beforeAfter',
        isDeleted: true
      },
      orderBy: {
        deletedAt: 'desc'
      }
    });

    console.log('Photos supprimées trouvées:', deletedPhotos);

    // Formater les photos pour l'affichage
    const formattedPhotos = deletedPhotos.map(photo => ({
      id: photo.id,
      before: photo.beforeImage || '',
      after: photo.afterImage || '',
      description: photo.description || '',
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
      { success: false, error: 'Erreur lors de la récupération des photos supprimées' },
      { status: 500 }
    );
  }
}
