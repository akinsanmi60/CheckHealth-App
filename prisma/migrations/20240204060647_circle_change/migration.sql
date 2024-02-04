-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_coyCircleAttachedTo_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "coyCircleAttachedTo" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coyCircleAttachedTo_fkey" FOREIGN KEY ("coyCircleAttachedTo") REFERENCES "CompanyCircles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
