"use client";
import { StickyNotes } from "@/prisma/prismaClient";
import { formatTimestamp } from "@/utils/utils";
import { EditIcon, Loader2Icon, PinIcon, Trash2Icon } from "lucide-react";
import { COLOR_MAP } from "@/types/notes";
import { useTransition } from "react";
import { deleteNoteAction, updateNoteAction } from "@/actions/notes";
import { toast } from "sonner";
import { Button } from "./ui/button";
import NotesSheet from "./NotesSheet";

export default function NoteCard({ note }: { note: StickyNotes }) {
  const colorStyle = COLOR_MAP[note.color || "null"];

  const [deleting, startDeleting] = useTransition();
  const [pinning, startPinning] = useTransition();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering the sheet open
    e.preventDefault(); // Prevent default action if needed
    startDeleting(async () => {
      const { errorMessage } = await deleteNoteAction({ id: note.id });
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        toast.success(`Note deleted !!`, {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
    });
  };

  const handlePinToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering the sheet open
    e.preventDefault(); // Prevent default action if needed
    startPinning(async () => {
      const { errorMessage } = await updateNoteAction({
        id: note.id,
        pinned: !note.pinned,
      });
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        toast.success(note.pinned ? "Note Unpinned !!" : "Note Pinned !!");
      }
    });
  };

  const handleEdit = () => {};

  return (
    <NotesSheet note={note}>
      <div
        className={` ${colorStyle?.bg} ${colorStyle?.hover} relative rounded-md p-4 w-full max-w-xs 
      transform transition-all duration-300 ease-in-out cursor-pointer
      ${note.pinned ? "ring-2 ring-amber-400" : ""}
      shadow-lg ${colorStyle?.shadow}`}
        style={{
          transform: `translate(${note.x}px, ${note.y}px)`,
        }}
      >
        {/* Pin indicator at top corner */}
        {note.pinned && (
          <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1">
            <PinIcon size={14} className="text-white" />
          </div>
        )}

        <div className="flex flex-col h-full">
          {/* Header with title */}
          <div className="mb-2 border-b border-zinc-400 pb-2">
            {note.title ? (
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                {note.title}
              </h3>
            ) : (
              <h3 className="font-semibold text-lg text-gray-400 italic">
                Untitled Note
              </h3>
            )}
          </div>

          {/* Content */}
          <div className="flex-grow mb-4">
            {note.content ? (
              <div
                suppressHydrationWarning={true}
                className="text-gray-700 whitespace-pre-wrap line-clamp-6"
                dangerouslySetInnerHTML={{ __html: note.content }}
              />
            ) : (
              <p className="text-gray-400 italic">No content</p>
            )}
          </div>

          {/* Footer with timestamps and actions */}
          <div className="mt-auto pt-2 border-t border-gray-200/50">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <div>
                <span>{formatTimestamp(note.updatedAt)}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={"ghost"}
                  onClick={handlePinToggle}
                  disabled={deleting || pinning}
                >
                  {pinning ? (
                    <Loader2Icon className="animate-spin" />
                  ) : note.pinned ? (
                    <PinIcon className="text-amber-400" />
                  ) : (
                    <PinIcon />
                  )}
                </Button>

                <Button
                  variant={"ghost"}
                  onClick={handleDelete}
                  disabled={deleting || pinning}
                >
                  {deleting ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Trash2Icon />
                  )}
                </Button>

                <Button
                  variant={"ghost"}
                  disabled={deleting || pinning}
                  onClick={handleEdit}
                >
                  <EditIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotesSheet>
  );
}
