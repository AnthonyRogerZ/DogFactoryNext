import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const staticPhotos = [
  {
    category: 'beforeAfter',
    beforeImage: '/images/avantapres/output-1-1.png.webp',
    afterImage: '/images/avantapres/enhanced_after_montage-768x522.png.webp',
    description: 'Toilettage complet avec brushing',
    prestationType: 'toilettage-complet'
  },
  {
    category: 'beforeAfter',
    beforeImage: '/images/avantapres/output-2.png',
    afterImage: '/images/avantapres/enhanced_after_montage-768x522.png.webp',
    description: 'Mise en beauté et coupe',
    prestationType: 'mise-en-beaute'
  }
];

async function main() {
  console.log('Début de l\'importation des photos statiques...');

  for (const photo of staticPhotos) {
    await prisma.photo.create({
      data: photo
    });
  }

  console.log('Importation terminée !');
}

main()
  .catch((e) => {
    console.error('Erreur lors de l\'importation:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
