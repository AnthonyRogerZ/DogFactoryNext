import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function saveFile(file: File, directory: string): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Générer un nom de fichier unique
  const timestamp = Date.now();
  const filename = `${timestamp}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  
  // Créer le chemin complet du répertoire
  const fullDirectory = path.join(process.cwd(), 'public', directory);
  
  // Créer le répertoire s'il n'existe pas
  try {
    await mkdir(fullDirectory, { recursive: true });
  } catch (error) {
    console.error('Erreur lors de la création du répertoire:', error);
  }

  // Chemin complet du fichier
  const filepath = path.join(fullDirectory, filename);

  // Sauvegarder le fichier
  await writeFile(filepath, buffer);

  // Retourner le chemin relatif pour l'URL (en commençant par /)
  return '/' + directory + '/' + filename;
}
