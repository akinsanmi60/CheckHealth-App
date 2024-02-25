-- AlterEnum
ALTER TYPE "UserGender" ADD VALUE 'other';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "country" TEXT;
