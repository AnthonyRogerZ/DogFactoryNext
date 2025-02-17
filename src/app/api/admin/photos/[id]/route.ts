import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadImage } from '@/lib/cloudinary';
import { prestationTypes } from '@/data/prestationTypes';

export const dynamic = 'force-dynamic';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log('Début DELETE /api/admin/photos/[id]', params);
    const id = parseInt(params.id);

    // Au lieu de supprimer, marquer comme supprimé
    const photo = await prisma.photo.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: new Date()
      }
    });

    console.log('Photo marquée comme supprimée:', photo);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la suppression' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const formData = await request.formData();
    
    const before = formData.get('before') as File;
    const after = formData.get('after') as File;
    const prestationType = formData.get('prestationType') as string;

    // Récupérer la photo existante
    const existingPhoto = await prisma.photo.findUnique({
      where: { id }
    });

    if (!existingPhoto) {
      return NextResponse.json(
        { success: false, error: 'Photo non trouvée' },
        { status: 404 }
      );
    }

    // Préparer les données de mise à jour
    const updateData: any = {
      prestationType,
      description: prestationType // Utiliser le type de prestation comme description
    };

    // Si de nouvelles images sont fournies, les uploader sur Cloudinary
    if (before) {
      const beforeBuffer = Buffer.from(await before.arrayBuffer());
      const beforeUrl = await uploadImage(beforeBuffer, 'avantapres');
      updateData.beforeImage = beforeUrl;
    }

    if (after) {
      const afterBuffer = Buffer.from(await after.arrayBuffer());
      const afterUrl = await uploadImage(afterBuffer, 'avantapres');
      updateData.afterImage = afterUrl;
    }

    // Mettre à jour la base de données
    const updatedPhoto = await prisma.photo.update({
      where: { id },
      data: updateData
    });

    // Retourner la photo avec le bon format
    const formattedPhoto = {
      id: updatedPhoto.id,
      before: updatedPhoto.beforeImage || '',
      after: updatedPhoto.afterImage || '',
      description: updatedPhoto.description || '',
      prestationType: updatedPhoto.prestationType || 'toilettage-complet'
    };

    return NextResponse.json({
      success: true,
      photo: formattedPhoto
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    );
  }
}
