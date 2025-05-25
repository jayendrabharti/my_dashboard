-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preferences" (
    "id" TEXT NOT NULL,
    "emailUpdates" BOOLEAN NOT NULL DEFAULT true,
    "theme" TEXT NOT NULL DEFAULT 'dark',
    "bookmarksSortOrder" TEXT NOT NULL DEFAULT 'recent',
    "notesDisplay" TEXT NOT NULL DEFAULT 'canvas',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookmarksSection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookmarksSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmarks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "sectionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StickyNote" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "color" TEXT,
    "pinned" BOOLEAN NOT NULL DEFAULT false,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StickyNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoLists" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDoLists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoItem" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "listId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDoItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Preferences_userId_key" ON "Preferences"("userId");

-- AddForeignKey
ALTER TABLE "Preferences" ADD CONSTRAINT "Preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarksSection" ADD CONSTRAINT "BookmarksSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "BookmarksSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StickyNote" ADD CONSTRAINT "StickyNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoLists" ADD CONSTRAINT "ToDoLists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoItem" ADD CONSTRAINT "ToDoItem_listId_fkey" FOREIGN KEY ("listId") REFERENCES "ToDoLists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDoItem" ADD CONSTRAINT "ToDoItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
