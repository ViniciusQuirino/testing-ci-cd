/*
  Warnings:

  - Changed the type of `launch_year` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "launch_year",
ADD COLUMN     "launch_year" INTEGER NOT NULL;
