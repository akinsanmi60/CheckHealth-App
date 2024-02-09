-- AlterTable
ALTER TABLE "CompanyCircles" ADD COLUMN     "circleStatus" "CircleStatus" DEFAULT 'ongoing';

-- AlterTable
ALTER TABLE "UserCircles" ADD COLUMN     "circleStatus" "CircleStatus" DEFAULT 'ongoing';
