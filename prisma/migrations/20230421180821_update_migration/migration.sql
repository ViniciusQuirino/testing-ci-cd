/*
  Warnings:

  - You are about to drop the column `is_active` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_active",
ADD COLUMN     "expires_in" TIMESTAMP(3),
ADD COLUMN     "reset_token" TEXT;
