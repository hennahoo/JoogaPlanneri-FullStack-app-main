/*
  Warnings:

  - You are about to drop the `Hennan_Testi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hennan_Testi";

-- CreateTable
CREATE TABLE "hennan_testi" (
    "TestiId" INTEGER NOT NULL,
    "TestName" TEXT NOT NULL,

    CONSTRAINT "hennan_testi_pkey" PRIMARY KEY ("TestiId")
);
