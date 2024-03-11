-- CreateTable
CREATE TABLE "ContactMail" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "companyName" TEXT,
    "message" TEXT,

    CONSTRAINT "ContactMail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactMail_id_key" ON "ContactMail"("id");
