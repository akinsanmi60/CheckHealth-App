-- AlterTable
ALTER TABLE "CompanyUser" ADD COLUMN     "socialId" TEXT,
ADD COLUMN     "socialProvider" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "socialId" TEXT,
ADD COLUMN     "socialProvider" TEXT;
