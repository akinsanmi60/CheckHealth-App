/*
  Warnings:

  - You are about to drop the `Circles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Circles" DROP CONSTRAINT "circles_company_user_fkey";

-- DropForeignKey
ALTER TABLE "Circles" DROP CONSTRAINT "circles_user_fkey";

-- AlterTable
ALTER TABLE "CompanyUser" ADD COLUMN     "addressCity" TEXT,
ADD COLUMN     "addressState" TEXT,
ADD COLUMN     "companyDescription" TEXT,
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "isEmailVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "coyCircleAttachedTo" TEXT,
ADD COLUMN     "userCircleId" TEXT;

-- DropTable
DROP TABLE "Circles";

-- CreateTable
CREATE TABLE "CompanyCircles" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "coyCircleName" TEXT,
    "coyCircleDescription" VARCHAR(1000),
    "coyCircleShareLink" TEXT,
    "wellbeingScore" TEXT,
    "activityLevel" "ActivityLevel" NOT NULL,
    "companyUserId" TEXT,
    "createdBy" TEXT,
    "coyCircleStatus" "UserStatus" NOT NULL DEFAULT 'inactive',
    "coyCircleNos" TEXT,

    CONSTRAINT "CompanyCircles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCircles" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userCircleName" TEXT,
    "userCircleDescription" VARCHAR(1000),
    "userCircleShareLink" TEXT,
    "wellbeingScore" TEXT,
    "activityLevel" "ActivityLevel" NOT NULL,
    "userId" TEXT,
    "createdBy" TEXT,
    "coyCircleStatus" "UserStatus" NOT NULL DEFAULT 'inactive',
    "coyCircleNos" TEXT,

    CONSTRAINT "UserCircles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_id_key" ON "CompanyCircles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_coyCircleName_key" ON "CompanyCircles"("coyCircleName");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_id_key" ON "UserCircles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_userCircleName_key" ON "UserCircles"("userCircleName");

-- AddForeignKey
ALTER TABLE "CompanyCircles" ADD CONSTRAINT "circles_company_user_fkey" FOREIGN KEY ("companyUserId") REFERENCES "CompanyUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userCircleId_fkey" FOREIGN KEY ("userCircleId") REFERENCES "UserCircles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coyCircleAttachedTo_fkey" FOREIGN KEY ("coyCircleAttachedTo") REFERENCES "CompanyCircles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCircles" ADD CONSTRAINT "UserCircles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
