/*
  Warnings:

  - A unique constraint covering the columns `[coyCircleShareLink]` on the table `CompanyCircles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userCircleShareLink]` on the table `UserCircles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_coyCircleShareLink_key" ON "CompanyCircles"("coyCircleShareLink");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_userCircleShareLink_key" ON "UserCircles"("userCircleShareLink");
