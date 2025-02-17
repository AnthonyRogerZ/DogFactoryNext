import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { uploadImage } from '@/lib/cloudinary';
import { prestationTypes } from '@/data/prestationTypes';

// Nouvelle façon de configurer les limites de taille dans Next.js 13+
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET() {
  try {
    console.log('Début GET /api/admin/photos');
    
    // Essayer de charger les photos de la base de données
    const dbPhotos = await prisma.photo.findMany({
      where: {
        category: 'beforeAfter',
        isDeleted: false
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Photos trouvées dans la base de données:', dbPhotos);

    // Convertir les photos de la base de données au bon format
    const formattedPhotos = dbPhotos.map(photo => {
      const prestationType = prestationTypes.find(type => type.id === photo.prestationType);
      
      return {
        id: photo.id,
        before: photo.beforeImage || '',
        after: photo.afterImage || '',
        description: prestationType?.name || photo.description || '',
        prestationType: photo.prestationType || 'toilettage-complet'
      };
    });

    console.log('Photos formatées:', formattedPhotos);

    return NextResponse.json({
      success: true,
      photos: formattedPhotos
    });
  } catch (error) {
    console.error('Erreur GET /api/admin/photos:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des photos' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('Début POST /api/admin/photos');
    
    const formData = await request.formData();
    const before = formData.get('before') as File;
    const after = formData.get('after') as File;
    const prestationType = formData.get('prestationType') as string;

    console.log('Données reçues:', { 
      beforeName: before?.name,
      afterName: after?.name,
      prestationType,
      beforeSize: before?.size,
      afterSize: after?.size
    });

    if (!before || !after) {
      return NextResponse.json(
        { success: false, error: 'Les photos avant et après sont requises' },
        { status: 400 }
      );
    }

    // Vérifier la taille des fichiers
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (before.size > maxSize || after.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'Les images doivent faire moins de 10MB chacune' },
        { status: 413 }
      );
    }

    console.log('Upload des fichiers sur Cloudinary...');
    
    // Convertir les fichiers en Buffer pour Cloudinary
    const beforeBuffer = Buffer.from(await before.arrayBuffer());
    const afterBuffer = Buffer.from(await after.arrayBuffer());

    // Upload sur Cloudinary
    const [beforeUrl, afterUrl] = await Promise.all([
      uploadImage(beforeBuffer, 'avantapres'),
      uploadImage(afterBuffer, 'avantapres')
    ]);

    console.log('URLs Cloudinary:', { beforeUrl, afterUrl });

    // Trouver le type de prestation
    const prestationTypeObj = prestationTypes.find(type => type.id === prestationType);

    console.log('Création de l\'entrée dans la base de données...');
    // Créer l'entrée dans la base de données
    const photo = await prisma.photo.create({
      data: {
        category: 'beforeAfter',
        beforeImage: beforeUrl,
        afterImage: afterUrl,
        description: prestationTypeObj?.name || '',
        prestationType
      }
    });
    console.log('Photo créée dans la base de données:', photo);

    // Retourner la photo avec le bon format
    const formattedPhoto = {
      id: photo.id,
      before: photo.beforeImage || '',
      after: photo.afterImage || '',
      description: prestationTypeObj?.name || '',
      prestationType: photo.prestationType || 'toilettage-complet'
    };

    return NextResponse.json({
      success: true,
      photo: formattedPhoto
    });
  } catch (error) {
    console.error('Erreur POST /api/admin/photos:', error);
    return NextResponse.json(
      { success: false, error: `Erreur lors de l'ajout de la photo: ${error.message}` },
      { status: 500 }
    );
  }
}
