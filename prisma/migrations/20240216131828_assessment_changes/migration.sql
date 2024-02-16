/*
  Warnings:

  - You are about to drop the column `setQuestion` on the `Assessment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[setNo]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assessmentType]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "setQuestion",
ADD COLUMN     "createdCheckinBy" TEXT,
ADD COLUMN     "createdWeeklyBy" TEXT,
ADD COLUMN     "setQuestions" TEXT[];

-- CreateTable
CREATE TABLE "ScoreDetail" (
    "id" TEXT NOT NULL,
    "ownerID" TEXT,
    "weeklyScore" INTEGER,
    "dailyScore" INTEGER,
    "wellbeingScore" INTEGER,
    "setNo" TEXT,
    "assessmentType" "AssessmentType",

    CONSTRAINT "ScoreDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScoreDetail_id_key" ON "ScoreDetail"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ScoreDetail_assessmentType_key" ON "ScoreDetail"("assessmentType");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_setNo_key" ON "Assessment"("setNo");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_assessmentType_key" ON "Assessment"("assessmentType");

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_createdWeeklyBy_fkey" FOREIGN KEY ("createdWeeklyBy") REFERENCES "EmpyloUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_createdCheckinBy_fkey" FOREIGN KEY ("createdCheckinBy") REFERENCES "EmpyloUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoreDetail" ADD CONSTRAINT "ScoreDetail_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
