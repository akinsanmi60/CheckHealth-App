/*
  Warnings:

  - A unique constraint covering the columns `[createdWeeklyBy]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[createdCheckinBy]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assessment_createdWeeklyBy_key" ON "Assessment"("createdWeeklyBy");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_createdCheckinBy_key" ON "Assessment"("createdCheckinBy");
