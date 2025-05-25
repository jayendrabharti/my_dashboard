/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_userId_fkey";

-- DropForeignKey
ALTER TABLE "BookmarksSections" DROP CONSTRAINT "BookmarksSections_userId_fkey";

-- DropForeignKey
ALTER TABLE "Preferences" DROP CONSTRAINT "Preferences_userId_fkey";

-- DropForeignKey
ALTER TABLE "StickyNotes" DROP CONSTRAINT "StickyNotes_userId_fkey";

-- DropForeignKey
ALTER TABLE "ToDoItems" DROP CONSTRAINT "ToDoItems_userId_fkey";

-- DropForeignKey
ALTER TABLE "ToDoLists" DROP CONSTRAINT "ToDoLists_userId_fkey";

-- DropTable
DROP TABLE "Users";
