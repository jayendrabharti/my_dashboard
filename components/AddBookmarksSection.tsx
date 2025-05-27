"use client";
import { createBookmarksSectionAction } from "@/actions/bookmarks";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { PlusIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function AddBookmarksSection({
  className = "",
}: {
  className?: string;
}) {
  const [name, setName] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleAddSection = () => {
    startTransition(async () => {
      const { errorMessage } = await createBookmarksSectionAction({ name });
      setOpen(false);
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        toast.success(`Created bookmark section - ${name}`, {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
      setName("");
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className={className}>
          <PlusIcon />
          Add Section
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Section</DialogTitle>
          <DialogDescription>Creating a section</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="section_name" className="text-right">
              Name
            </Label>
            <Input
              id="section_name"
              className="col-span-3"
              placeholder="Section Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isPending}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant={"destructive"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleAddSection}
            disabled={isPending || !name.trim()}
          >
            {isPending ? (
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
            ) : (
              <PlusIcon className="mr-2 h-4 w-4" />
            )}
            Add Section
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
