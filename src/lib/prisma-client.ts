import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL;
// Ajouter les paramètres SSL si pas déjà présents
const sslDatabaseUrl = databaseUrl?.includes('?') 
  ? `${databaseUrl}&sslmode=require` 
  : `${databaseUrl}?sslmode=require`;

export const prismaClient = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'error', 'warn', 'info'],
  datasources: {
    db: {
      url: sslDatabaseUrl,
    },
  },
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prismaClient;
}
