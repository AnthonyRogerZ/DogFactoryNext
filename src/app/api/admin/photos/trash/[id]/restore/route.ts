import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);

    // Restaurer la photo
    const photo = await prisma.photo.update({
      where: { id },
      data: {
        isDeleted: false,
        deletedAt: null
      }
    });

    if (!photo) {
      return NextResponse.json(
        { success: false, error: 'Photo non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la restauration:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la restauration' },
      { status: 500 }
    );
  }
}
