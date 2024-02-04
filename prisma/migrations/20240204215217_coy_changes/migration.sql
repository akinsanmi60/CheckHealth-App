/*
  Warnings:

  - You are about to drop the column `userAttachedID` on the `CompanyCircles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyCircles" DROP CONSTRAINT "CompanyCircles_userAttachedID_fkey";

-- AlterTable
ALTER TABLE "CompanyCircles" DROP COLUMN "userAttachedID";
