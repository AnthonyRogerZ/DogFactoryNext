import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { prestationTypes } from '@/data/prestationTypes';

export const dynamic = 'force-dynamic';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log('Début POST /api/admin/photos/trash/[id]/restore', params);
    const id = parseInt(params.id);

    // Restaurer la photo
    const photo = await prisma.photo.update({
      where: { id },
      data: {
        isDeleted: false,
        deletedAt: null
      }
    });

    console.log('Photo restaurée:', photo);

    // Formater la photo pour l'affichage
    const prestationType = prestationTypes.find(type => type.id === photo.prestationType);
    const formattedPhoto = {
      id: photo.id,
      before: photo.beforeImage || '',
      after: photo.afterImage || '',
      description: prestationType?.name || photo.description || '',
      prestationType: photo.prestationType || 'toilettage-complet'
    };

    return NextResponse.json({ 
      success: true,
      photo: formattedPhoto
    });
  } catch (error) {
    console.error('Erreur lors de la restauration:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la restauration' },
      { status: 500 }
    );
  }
}
