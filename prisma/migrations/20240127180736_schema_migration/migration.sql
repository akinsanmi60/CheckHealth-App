-- CreateEnum
CREATE TYPE "SystemRole" AS ENUM ('superAdmin', 'admin', 'user');

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
    "verificationCode" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'inactive',
    "address" TEXT,
    "emailNotification" BOOLEAN DEFAULT false,
    "campaignNtification" BOOLEAN DEFAULT false,
    "termsConditions" BOOLEAN DEFAULT false,

    CONSTRAINT "CompanyUser_pkey" PRIMARY KEY ("id")
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
    "maritalStatus" TEXT,
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
    "verificationCode" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'inactive',
    "address" TEXT,
    "bio" TEXT,
    "emailNotification" BOOLEAN DEFAULT false,
    "campaignNtification" BOOLEAN DEFAULT false,
    "termsConditions" BOOLEAN DEFAULT false,
    "addedBy" TEXT,
    "circleName" TEXT,
    "circleId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circles" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "circleName" TEXT,
    "circleDescription" VARCHAR(1000),
    "circleShareLink" TEXT,
    "wellbeingScore" TEXT,
    "activityLevel" "ActivityLevel" NOT NULL,
    "companyUserId" TEXT,
    "userId" TEXT,
    "createdBy" TEXT,
    "circleStatus" "UserStatus" NOT NULL DEFAULT 'inactive',
    "circleNos" TEXT,

    CONSTRAINT "Circles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_id_key" ON "CompanyUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_email_key" ON "CompanyUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_passwordResetCode_key" ON "CompanyUser"("passwordResetCode");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyUser_verificationCode_key" ON "CompanyUser"("verificationCode");

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
CREATE UNIQUE INDEX "Circles_id_key" ON "Circles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Circles_circleName_key" ON "Circles"("circleName");

-- CreateIndex
CREATE UNIQUE INDEX "Circles_id_circleName_key" ON "Circles"("id", "circleName");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "CompanyUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circles" ADD CONSTRAINT "circles_company_user_fkey" FOREIGN KEY ("companyUserId") REFERENCES "CompanyUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circles" ADD CONSTRAINT "circles_user_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
