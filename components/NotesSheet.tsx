"use client";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState, useTransition } from "react";
import { PlusIcon, XIcon, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { updateNoteAction } from "@/actions/notes";
import { cn } from "@/lib/utils";
import { colors, COLOR_MAP } from "@/types/notes";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StickyNotes } from "@/prisma/prismaClient";

export default function NotesSheet({
  children,
  note,
}: {
  children: React.ReactNode;
  note: StickyNotes;
}) {
  const [updatedNote, setUpdatedNote] = useState<{
    title: string | null;
    content: string | null;
    color: string | null;
  }>({
    title: note.title,
    content: note.content,
    color: note.color,
  });
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const contentDiv = useRef<HTMLDivElement>(null);

  // const setContent = async () => {
  //   if (!contentDiv.current) return;
  //   {
  //     setUpdatedNote((prev) => ({
  //       ...prev,
  //       content: contentDiv.current ? contentDiv.current.innerHTML : "",
  //     }));
  //   }
  // };

  const handleUpdatedNote = () => {
    startTransition(async () => {
      const { data, errorMessage } = await updateNoteAction({
        id: note.id,
        title: updatedNote.title || undefined,
        content: contentDiv.current?.innerHTML || undefined,
        color: updatedNote.color || undefined,
      });
      setOpen(false);
      // setContent();
      if (errorMessage) {
        setOpen(false);
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        if (data) setUpdatedNote(data);
        toast.success(`Updated Note!!`, {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
    });
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className="flex flex-col max-h-dvh h-dvh overflow-hidden"
        // adjust max-h/h as needed for your design
      >
        <SheetHeader>
          <SheetTitle>Add Note</SheetTitle>
          <SheetDescription>
            Add a new note with a title, content, and color. You can also
            customize the note's appearance.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 gap-2 p-4 overflow-hidden">
          <div>
            <Label htmlFor="title" className="m-2">
              Title
            </Label>
            <Input
              id="title"
              value={updatedNote.title || ""}
              placeholder="Enter title here"
              onChange={(e) => {
                // setContent();
                setUpdatedNote((prev) => ({ ...prev, title: e.target.value }));
              }}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col">
            <Label className="m-2">Color</Label>
            <div className="flex gap-2 items-center my-2 mx-auto">
              <button
                type="button"
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors",
                  updatedNote.color === null
                    ? "border-black ring-2 ring-offset-2 ring-black"
                    : "border-gray-300",
                  COLOR_MAP["null"]?.bg
                )}
                onClick={() => {
                  // setContent();
                  setUpdatedNote((prev) => ({ ...prev, color: null }));
                }}
                style={{
                  backgroundImage: `url('https://www.shutterstock.com/image-vector/seamless-loopable-abstract-chess-png-260nw-608966447.jpg')`,
                  backgroundPosition: "center",
                }}
              ></button>
              {colors.map((color, index) => (
                <button
                  key={index}
                  type="button"
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors",
                    updatedNote.color === color
                      ? "border-black ring-2 ring-offset-2 ring-black"
                      : "border-gray-300",
                    COLOR_MAP[color]?.bg
                  )}
                  onClick={() => {
                    // setContent();
                    setUpdatedNote((prev) => ({ ...prev, color }));
                  }}
                ></button>
              ))}
            </div>
          </div>
          <div
            contentEditable
            dangerouslySetInnerHTML={{
              __html: updatedNote.content || "",
            }}
            onBlur={() =>
              setUpdatedNote((prev) => ({
                ...prev,
                content: contentDiv.current?.innerHTML ?? "",
              }))
            }
            className="flex-1 min-h-0 p-4 rounded-2xl border border-border outline-0 overflow-y-auto"
            ref={contentDiv}
          />
          <div className="flex flex-row justify-end gap-2 sticky bottom-0 pt-2">
            <Button onClick={() => setOpen(false)} variant={"destructive"}>
              <XIcon />
              Cancel
            </Button>
            <Button onClick={handleUpdatedNote} disabled={isPending}>
              {isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <PlusIcon />
              )}
              {isPending ? "Updating note..." : "Update note"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
