/*
  Warnings:

  - A unique constraint covering the columns `[companyUserId]` on the table `CompanyCircles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserCircles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_companyUserId_key" ON "CompanyCircles"("companyUserId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_userId_key" ON "UserCircles"("userId");
