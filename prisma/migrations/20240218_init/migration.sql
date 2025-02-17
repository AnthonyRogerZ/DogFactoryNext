-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "beforeImage" TEXT,
    "afterImage" TEXT,
    "image" TEXT,
    "description" TEXT,
    "prestationType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false
);
