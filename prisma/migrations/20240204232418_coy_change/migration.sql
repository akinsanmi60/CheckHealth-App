/*
  Warnings:

  - You are about to drop the column `coyCircleAttachedTo` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_coyCircleAttachedTo_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "coyCircleAttachedTo";

-- CreateTable
CREATE TABLE "_CompanyCirclesToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyCirclesToUser_AB_unique" ON "_CompanyCirclesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyCirclesToUser_B_index" ON "_CompanyCirclesToUser"("B");

-- AddForeignKey
ALTER TABLE "_CompanyCirclesToUser" ADD CONSTRAINT "_CompanyCirclesToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CompanyCircles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCirclesToUser" ADD CONSTRAINT "_CompanyCirclesToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
