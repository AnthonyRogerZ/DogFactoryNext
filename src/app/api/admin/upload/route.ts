import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;
    const prestationType = formData.get('prestationType') as string;
    
    // Vérifier l'authentification
    const token = req.cookies.get('auth_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }
    
    const uploadDir = category === 'beforeAfter' 
      ? path.join(process.cwd(), 'public/images/avantapres')
      : category === 'epilation'
        ? path.join(process.cwd(), 'public/images/épilation')
        : path.join(process.cwd(), 'public/images/salon');

    // Créer le répertoire s'il n'existe pas
    await writeFile(path.join(uploadDir, '.gitkeep'), '');

    const files: { [key: string]: File } = {};
    if (category === 'beforeAfter') {
      const before = formData.get('before') as File;
      const after = formData.get('after') as File;
      if (before) files.before = before;
      if (after) files.after = after;
    } else {
      const photo = formData.get('before') as File;
      if (photo) files.photo = photo;
    }

    // Sauvegarder les fichiers
    const savedFiles: { [key: string]: string } = {};
    for (const [key, file] of Object.entries(files)) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Générer un nom de fichier unique
      const timestamp = Date.now();
      const filename = `${key}_${timestamp}_${file.name}`;
      const filepath = path.join(uploadDir, filename);
      
      await writeFile(filepath, buffer);
      savedFiles[key] = `/images/${category === 'beforeAfter' ? 'avantapres' : category === 'epilation' ? 'épilation' : 'salon'}/${filename}`;
    }

    // Sauvegarder dans la base de données
    if (category === 'beforeAfter' && savedFiles.before && savedFiles.after) {
      await prisma.photo.create({
        data: {
          category,
          beforeImage: savedFiles.before,
          afterImage: savedFiles.after,
          description,
          prestationType
        }
      });
    } else if (files.photo) {
      await prisma.photo.create({
        data: {
          category,
          image: savedFiles.photo,
          description
        }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}
