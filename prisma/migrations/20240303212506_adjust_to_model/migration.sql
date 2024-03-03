-- AlterTable
ALTER TABLE "ScoreDetail" ADD COLUMN     "assessmentID" TEXT,
ADD COLUMN     "coyCirleID" TEXT,
ADD COLUMN     "userCirleID" TEXT;

-- AddForeignKey
ALTER TABLE "ScoreDetail" ADD CONSTRAINT "ScoreDetail_coyCirleID_fkey" FOREIGN KEY ("coyCirleID") REFERENCES "CompanyCircles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoreDetail" ADD CONSTRAINT "ScoreDetail_userCirleID_fkey" FOREIGN KEY ("userCirleID") REFERENCES "UserCircles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoreDetail" ADD CONSTRAINT "ScoreDetail_assessmentID_fkey" FOREIGN KEY ("assessmentID") REFERENCES "Assessment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
