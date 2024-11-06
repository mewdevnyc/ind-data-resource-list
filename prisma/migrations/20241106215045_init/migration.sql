-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dateEstablished" TIMESTAMP(3),
    "dateUpdated" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingResource" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "dateEstablished" TIMESTAMP(3),
    "dateUpdated" TIMESTAMP(3),
    "resourceId" INTEGER NOT NULL,

    CONSTRAINT "TrainingResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Nation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttributeTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AttributeTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeographicTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GeographicTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ResourceAuthorities" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ResourceStewards" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ResourceMavens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ResourceNationTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ResourceAttributeTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ResourceGeographicTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Nation_name_key" ON "Nation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AttributeTag_name_key" ON "AttributeTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GeographicTag_name_key" ON "GeographicTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceAuthorities_AB_unique" ON "_ResourceAuthorities"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceAuthorities_B_index" ON "_ResourceAuthorities"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceStewards_AB_unique" ON "_ResourceStewards"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceStewards_B_index" ON "_ResourceStewards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceMavens_AB_unique" ON "_ResourceMavens"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceMavens_B_index" ON "_ResourceMavens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceNationTags_AB_unique" ON "_ResourceNationTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceNationTags_B_index" ON "_ResourceNationTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceAttributeTags_AB_unique" ON "_ResourceAttributeTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceAttributeTags_B_index" ON "_ResourceAttributeTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceGeographicTags_AB_unique" ON "_ResourceGeographicTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceGeographicTags_B_index" ON "_ResourceGeographicTags"("B");

-- AddForeignKey
ALTER TABLE "TrainingResource" ADD CONSTRAINT "TrainingResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceAuthorities" ADD CONSTRAINT "_ResourceAuthorities_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceAuthorities" ADD CONSTRAINT "_ResourceAuthorities_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceStewards" ADD CONSTRAINT "_ResourceStewards_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceStewards" ADD CONSTRAINT "_ResourceStewards_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceMavens" ADD CONSTRAINT "_ResourceMavens_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceMavens" ADD CONSTRAINT "_ResourceMavens_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceNationTags" ADD CONSTRAINT "_ResourceNationTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Nation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceNationTags" ADD CONSTRAINT "_ResourceNationTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceAttributeTags" ADD CONSTRAINT "_ResourceAttributeTags_A_fkey" FOREIGN KEY ("A") REFERENCES "AttributeTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceAttributeTags" ADD CONSTRAINT "_ResourceAttributeTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceGeographicTags" ADD CONSTRAINT "_ResourceGeographicTags_A_fkey" FOREIGN KEY ("A") REFERENCES "GeographicTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceGeographicTags" ADD CONSTRAINT "_ResourceGeographicTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
