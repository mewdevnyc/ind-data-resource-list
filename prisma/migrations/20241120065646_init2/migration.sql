-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "title" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Training" ALTER COLUMN "description" SET DEFAULT '';
