-- CreateEnum
CREATE TYPE "AssessmentType" AS ENUM ('weekly', 'dailyCheckin');

-- CreateEnum
CREATE TYPE "SystemRole" AS ENUM ('superAdmin', 'admin', 'user', 'company');

-- CreateEnum
CREATE TYPE "UserGender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'pending', 'inactive');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('verified', 'unverified');

-- CreateEnum
CREATE TYPE "CircleStatus" AS ENUM ('ongoing', 'completed', 'unenrolled');

-- CreateEnum
CREATE TYPE "ActivityLevel" AS ENUM ('high', 'moderate', 'excellent', 'moderatelyHigh', 'low');

-- CreateEnum
CREATE TYPE "UserAccount" AS ENUM ('personalUser', 'clientUser');

-- CreateEnum
CREATE TYPE "MaitalStatus" AS ENUM ('married', 'single', 'divorce');

-- CreateTable
CREATE TABLE "EmpyloUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "role" "SystemRole" NOT NULL DEFAULT 'admin',
    "lastLogin" TIMESTAMP(3),
    "passportImg" TEXT,
    "isActive" BOOLEAN DEFAULT false,
    "updated_at" TIMESTAMP(3),
    "isEmailVerified" BOOLEAN DEFAULT false,
    "verificationCode" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'inactive',
    "gender" "UserGender",
    "maritalStatus" "MaitalStatus",
    "empyloID" TEXT,
    "permissions" TEXT[],
    "passwordResetCode" TEXT,
    "password" TEXT,

    CONSTRAINT "EmpyloUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT,
    "phoneNumber" TEXT,
    "password" TEXT,
    "passwordResetCode" TEXT,
    "lastLogin" TIMESTAMP(3),
    "passportImg" TEXT,
    "isActive" BOOLEAN DEFAULT false,
    "updated_at" TIMESTAMP(3),
    "isEmailVerified" BOOLEAN DEFAULT false,
    "verificationCode" TEXT,
    "industry" TEXT,
    "website" TEXT,
    "companyDescription" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'inactive',
    "role" "SystemRole" NOT NULL DEFAULT 'company',
    "address" TEXT,
    "addressCity" TEXT,
    "addressState" TEXT,
    "emailNotification" BOOLEAN DEFAULT false,
    "campaignNtification" BOOLEAN DEFAULT false,
    "termsConditions" BOOLEAN DEFAULT false,

    CONSTRAINT "CompanyUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyCircles" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "coyCircleName" TEXT,
    "coyCircleDescription" VARCHAR(1000),
    "coyCircleShareLink" TEXT,
    "wellbeingScore" TEXT,
    "activityLevel" "ActivityLevel" NOT NULL DEFAULT 'low',
    "companyUserId" TEXT,
    "coyCircleStatus" "UserStatus" NOT NULL DEFAULT 'inactive',
    "coyCircleNos" TEXT,
    "circleImg" TEXT,
    "circleStatus" "CircleStatus" DEFAULT 'ongoing',

    CONSTRAINT "CompanyCircles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "ageRange" TEXT,
    "ethnicity" TEXT,
    "gender" "UserGender",
    "maritalStatus" "MaitalStatus",
    "disability" TEXT,
    "DOB" TEXT,
    "accountType" "UserAccount" NOT NULL DEFAULT 'personalUser',
    "department" TEXT,
    "jobRole" TEXT,
    "password" TEXT,
    "role" "SystemRole" NOT NULL DEFAULT 'user',
    "passwordResetCode" TEXT,
    "createdBy" TEXT,
    "lastLogin" TIMESTAMP(3),
    "passportImg" TEXT,
    "isActive" BOOLEAN DEFAULT false,
    "updated_at" TIMESTAMP(3),
    "isEmailVerified" BOOLEAN DEFAULT false,
    "verificationCode" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'inactive',
    "address" TEXT,
    "bio" TEXT,
    "emailNotification" BOOLEAN DEFAULT false,
    "campaignNtification" BOOLEAN DEFAULT false,
    "termsConditions" BOOLEAN DEFAULT false,
    "addedBy" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCircles" (
    "id" TEXT NOT NULL,
    "circleImg" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "userCircleName" TEXT,
    "userCircleDescription" VARCHAR(1000),
    "userCircleShareLink" TEXT,
    "wellbeingScore" TEXT,
    "activityLevel" "ActivityLevel" NOT NULL DEFAULT 'low',
    "userId" TEXT,
    "createdBy" TEXT,
    "userCircleStatus" "UserStatus" NOT NULL DEFAULT 'inactive',
    "userCircleNos" TEXT,
    "circleStatus" "CircleStatus" DEFAULT 'ongoing',

    CONSTRAINT "UserCircles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "setNo" TEXT,
    "assessmentType" "AssessmentType",
    "setQuestion" TEXT[],

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyCirclesToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_memberInCrircle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmpyloUser_id_key" ON "EmpyloUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EmpyloUser_email_key" ON "EmpyloUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmpyloUser_phoneNumber_key" ON "EmpyloUser"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "EmpyloUser_verificationCode_key" ON "EmpyloUser"("verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "EmpyloUser_passwordResetCode_key" ON "EmpyloUser"("passwordResetCode");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_id_key" ON "CompanyUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_email_key" ON "CompanyUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_passwordResetCode_key" ON "CompanyUser"("passwordResetCode");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_verificationCode_key" ON "CompanyUser"("verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_id_key" ON "CompanyCircles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_coyCircleName_key" ON "CompanyCircles"("coyCircleName");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_coyCircleShareLink_key" ON "CompanyCircles"("coyCircleShareLink");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyCircles_coyCircleNos_key" ON "CompanyCircles"("coyCircleNos");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_passwordResetCode_key" ON "User"("passwordResetCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_verificationCode_key" ON "User"("verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_addedBy_key" ON "User"("addedBy");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_id_key" ON "UserCircles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_userCircleName_key" ON "UserCircles"("userCircleName");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_userCircleShareLink_key" ON "UserCircles"("userCircleShareLink");

-- CreateIndex
CREATE UNIQUE INDEX "UserCircles_userCircleNos_key" ON "UserCircles"("userCircleNos");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_id_key" ON "Assessment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyCirclesToUser_AB_unique" ON "_CompanyCirclesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyCirclesToUser_B_index" ON "_CompanyCirclesToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_memberInCrircle_AB_unique" ON "_memberInCrircle"("A", "B");

-- CreateIndex
CREATE INDEX "_memberInCrircle_B_index" ON "_memberInCrircle"("B");

-- AddForeignKey
ALTER TABLE "CompanyCircles" ADD CONSTRAINT "CompanyCircles_companyUserId_fkey" FOREIGN KEY ("companyUserId") REFERENCES "CompanyUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "CompanyUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCircles" ADD CONSTRAINT "UserCircles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCirclesToUser" ADD CONSTRAINT "_CompanyCirclesToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CompanyCircles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCirclesToUser" ADD CONSTRAINT "_CompanyCirclesToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_memberInCrircle" ADD CONSTRAINT "_memberInCrircle_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_memberInCrircle" ADD CONSTRAINT "_memberInCrircle_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCircles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
