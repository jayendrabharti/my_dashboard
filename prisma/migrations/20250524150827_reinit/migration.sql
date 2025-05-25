/*
  Warnings:

  - You are about to drop the `BookmarksSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StickyNote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ToDoItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "BookmarksSection" DROP CONSTRAINT "BookmarksSection_userId_fkey";

-- DropForeignKey
ALTER TABLE "StickyNote" DROP CONSTRAINT "StickyNote_userId_fkey";

-- DropForeignKey
ALTER TABLE "ToDoItem" DROP CONSTRAINT "ToDoItem_listId_fkey";

-- DropForeignKey
ALTER TABLE "ToDoItem" DROP CONSTRAINT "ToDoItem_userId_fkey";

-- DropTable
DROP TABLE "BookmarksSection";

-- DropTable
DROP TABLE "StickyNote";

-- DropTable
DROP TABLE "ToDoItem";

-- CreateTable
CREATE TABLE "BookmarksSections" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookmarksSections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StickyNotes" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "color" TEXT,
    "pinned" BOOLEAN NOT NULL DEFAULT false,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StickyNotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoItems" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "listId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDoItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookmarksSections" ADD CONSTRAINT "BookmarksSections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "BookmarksSections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StickyNotes" ADD CONSTRAINT "StickyNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoItems" ADD CONSTRAINT "ToDoItems_listId_fkey" FOREIGN KEY ("listId") REFERENCES "ToDoLists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoItems" ADD CONSTRAINT "ToDoItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
