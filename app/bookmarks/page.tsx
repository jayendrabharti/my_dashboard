import { getBookmarksSectionsAction } from "@/actions/bookmarks";
import AddBookmarksSection from "@/components/AddBookmarksSection";
import BookmarksSection from "@/components/BookmarksSection";
import { cn } from "@/lib/utils";

export default async function BookmarksPage() {
  const { data: bookmarksSection, errorMessage } =
    await getBookmarksSectionsAction();

  if (errorMessage) {
    return <div className={cn("w-full h-full")}>Error: {errorMessage}</div>;
  }
  return (
    <div className={cn("w-full h-full")}>
      <div className="w-full mb-3 flex">
        <AddBookmarksSection className="ml-auto" />
      </div>
      {bookmarksSection?.length === 0 && (
        <div className={cn("p-4 text-center")}>
          <p className={cn("text-gray-500")}>No bookmarks found.</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-3">
        {bookmarksSection?.map((section) => (
          <BookmarksSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
