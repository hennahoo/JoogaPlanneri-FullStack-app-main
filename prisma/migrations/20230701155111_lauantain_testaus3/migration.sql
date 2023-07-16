/*
  Warnings:

  - The primary key for the `hennan_testi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `TestName` on the `hennan_testi` table. All the data in the column will be lost.
  - You are about to drop the column `TestiId` on the `hennan_testi` table. All the data in the column will be lost.
  - Added the required column `testiid` to the `hennan_testi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testname` to the `hennan_testi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hennan_testi" DROP CONSTRAINT "hennan_testi_pkey",
DROP COLUMN "TestName",
DROP COLUMN "TestiId",
ADD COLUMN     "testiid" INTEGER NOT NULL,
ADD COLUMN     "testname" TEXT NOT NULL,
ADD CONSTRAINT "hennan_testi_pkey" PRIMARY KEY ("testiid");
