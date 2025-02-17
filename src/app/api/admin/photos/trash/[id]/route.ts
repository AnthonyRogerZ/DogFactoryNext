import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log('Début DELETE /api/admin/photos/trash/[id]', params);
    const id = parseInt(params.id);

    // Supprimer définitivement la photo
    await prisma.photo.delete({
      where: { id }
    });

    console.log('Photo supprimée définitivement:', id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression définitive:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la suppression définitive' },
      { status: 500 }
    );
  }
}
