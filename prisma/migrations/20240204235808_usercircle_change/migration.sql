/*
  Warnings:

  - You are about to drop the column `userCircleId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userCircleId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userCircleId";

-- CreateTable
CREATE TABLE "_memberInCrircle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_memberInCrircle_AB_unique" ON "_memberInCrircle"("A", "B");

-- CreateIndex
CREATE INDEX "_memberInCrircle_B_index" ON "_memberInCrircle"("B");

-- AddForeignKey
ALTER TABLE "_memberInCrircle" ADD CONSTRAINT "_memberInCrircle_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_memberInCrircle" ADD CONSTRAINT "_memberInCrircle_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCircles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
