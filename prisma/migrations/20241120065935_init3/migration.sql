/*
  Warnings:

  - Made the column `title` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Resource` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Training` required. This step will fail if there are existing NULL values in that column.
  - Made the column `url` on table `Training` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Training" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "url" SET NOT NULL;
