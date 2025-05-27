import { getNotesAction } from "@/actions/notes";
import AddNote from "@/components/AddNote";
import NoteCard from "@/components/NoteCard";
import { cn } from "@/lib/utils";

export default async function NotesPage() {
  const { data, errorMessage } = await getNotesAction();
  const notes = data ?? [];
  const pinnedNotes = notes.filter((note) => note.pinned);
  const unpinnedNotes = notes.filter((note) => !note.pinned);

  if (errorMessage) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-red-500">{errorMessage}</div>
      </div>
    );
  }
  return (
    <div className={cn("w-full h-full")}>
      <div className="w-full mb-3 flex">
        <AddNote className="ml-auto" />
      </div>
      {notes.length === 0 && (
        <div className="text-center text-gray-500">
          No notes available. Please add a note.
        </div>
      )}
      {pinnedNotes.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 ml-4">Pinned Notes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 space-y-4">
            {pinnedNotes.map((note) => (
              <div
                key={note.id}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <NoteCard key={note.id} note={note} />
              </div>
            ))}
          </div>
        </div>
      )}

      {unpinnedNotes.length > 0 && (
        <div>
          {!!pinnedNotes.length && (
            <h2 className="text-xl font-bold mb-2 ml-4">Other Notes</h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 space-y-4">
            {unpinnedNotes.map((note) => (
              <div
                key={note.id}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <NoteCard key={note.id} note={note} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
