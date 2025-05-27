"use client";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { PlusIcon, XIcon, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { createNoteAction } from "@/actions/notes";
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

export default function AddNote({ className = "" }: { className?: string }) {
  const [note, setNote] = useState<{
    title: string;
    content: string;
    color: string | null;
  }>({
    title: "",
    content: "",
    color: null,
  });
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleAddNote = () => {
    startTransition(async () => {
      const { errorMessage } = await createNoteAction({
        title: note.title,
        content: note.content,
        color: note.color,
      });
      setOpen(false);
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        toast.success(`Created Note!!`, {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
      setNote({
        title: "",
        content: "",
        color: null,
      });
    });
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={className}>
          <PlusIcon />
          Add Notes
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Note</SheetTitle>
          <SheetDescription>
            Add a new note with a title, content, and color. You can also
            customize the note's appearance.
          </SheetDescription>
        </SheetHeader>
        <div className="w-full h-full max-h-full grid grid-rows-[auto_auto_1fr_auto] gap-2 p-4">
          <div>
            <Label htmlFor="title" className="m-2">
              Title
            </Label>
            <Input
              id="title"
              value={note.title}
              placeholder="Enter title here"
              onChange={(e) =>
                setNote((prev) => ({ ...prev, title: e.target.value }))
              }
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
                  note.color === null
                    ? "border-black ring-2 ring-offset-2 ring-black"
                    : "border-gray-300",
                  COLOR_MAP["null"]?.bg
                )}
                onClick={() => setNote((prev) => ({ ...prev, color: null }))}
                style={{
                  backgroundImage: `url('https://www.shutterstock.com/image-vector/seamless-loopable-abstract-chess-png-260nw-608966447.jpg')`,
                  backgroundPosition: "center",
                }}
              >
                {/* {note.color === null && (
                  <span className="block w-2 h-2 bg-white rounded-full" />
                )} */}
              </button>
              {colors.map((color, index) => (
                <button
                  key={index}
                  type="button"
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors",
                    note.color === color
                      ? "border-black ring-2 ring-offset-2 ring-black"
                      : "border-gray-300",
                    COLOR_MAP[color]?.bg
                  )}
                  onClick={() => setNote((prev) => ({ ...prev, color }))}
                >
                  {/* {note.color === color && (
                    <span className="block w-2 h-2 bg-white rounded-full" />
                  )} */}
                </button>
              ))}
            </div>
          </div>
          <div
            contentEditable
            className="min-h-full h-full p-4 rounded-2xl border border-border outline-0 overflow-y-scroll"
            onInput={(e) => {
              setNote((prev) => ({
                ...prev,
                content: (e.target as HTMLDivElement)?.innerHTML,
              }));
            }}
          />
          <div className="flex flex-row justify-end gap-2">
            <Button onClick={() => setOpen(false)} variant={"destructive"}>
              <XIcon />
              Cancel
            </Button>
            <Button onClick={handleAddNote} disabled={isPending}>
              {isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <PlusIcon />
              )}
              {isPending ? "Adding note..." : "Add note"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
