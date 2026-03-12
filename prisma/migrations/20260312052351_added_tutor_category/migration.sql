/*
  Warnings:

  - You are about to drop the column `tutorId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_tutorId_fkey";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "tutorId";

-- CreateTable
CREATE TABLE "tutor_category" (
    "id" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "tutor_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tutor_category" ADD CONSTRAINT "tutor_category_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "tutor_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tutor_category" ADD CONSTRAINT "tutor_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
