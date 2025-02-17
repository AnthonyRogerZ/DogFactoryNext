import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { unlink } from 'fs/promises';
import path from 'path';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);

    // Récupérer la photo
    const photo = await prisma.photo.findUnique({
      where: { id }
    });

    if (!photo) {
      return NextResponse.json(
        { success: false, error: 'Photo non trouvée' },
        { status: 404 }
      );
    }

    // Supprimer les fichiers physiques
    if (photo.beforeImage) {
      const beforePath = path.join(process.cwd(), 'public', photo.beforeImage.replace(/^\//, ''));
      await unlink(beforePath).catch(console.error);
    }
    if (photo.afterImage) {
      const afterPath = path.join(process.cwd(), 'public', photo.afterImage.replace(/^\//, ''));
      await unlink(afterPath).catch(console.error);
    }

    // Supprimer définitivement de la base de données
    await prisma.photo.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression définitive:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la suppression définitive' },
      { status: 500 }
    );
  }
}
