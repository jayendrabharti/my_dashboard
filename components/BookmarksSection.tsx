"use client";
import { Bookmarks, BookmarksSections } from "@/prisma/prismaClient";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import { Loader2Icon, PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addBookmarkAction,
  deleteBookmarksSectionAction,
  updateBookmarksSectionAction,
} from "@/actions/bookmarks";
import BookmarksItem from "./BookmarksItem";
import { toast } from "sonner";

export default function BookmarksSection({
  section,
}: {
  section: BookmarksSections & { bookmarks: Bookmarks[] };
}) {
  const [deleting, startDeleting] = useTransition();
  const [updating, startUpdating] = useTransition();
  const [addingBookmark, setAddingBookmark] = useState<boolean>(false);
  const [updatingSection, setUpdating] = useState<boolean>(false);
  const [newSectionName, setNewSectionName] = useState(section.name);
  const [newBookmark, setNewBookmark] = useState({
    name: "",
    url: "",
  });

  const deleteSection = () => {
    startDeleting(async () => {
      const { errorMessage } = await deleteBookmarksSectionAction({
        id: section.id,
      });
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        toast.success("Deleted Section Successfully!!", {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
    });
  };

  const updateSection = async () => {
    startUpdating(async () => {
      const { data, errorMessage } = await updateBookmarksSectionAction({
        id: section.id,
        name: newSectionName,
      });
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        if (data) setNewSectionName(data.name);
        toast.success(`Updated bookmark section - ${name}`, {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
      setUpdating(false);
    });
  };

  const addBookmark = async () => {
    setAddingBookmark(false);

    const { errorMessage } = await addBookmarkAction({
      sectionId: section.id,
      name: newBookmark.name,
      url: newBookmark.url,
    });

    setNewBookmark({
      name: "",
      url: "",
    });
    if (errorMessage) {
      toast.error(errorMessage, {
        style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
      });
    } else {
      toast.success("Added bookmark successfully!! ", {
        style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
      });
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>{section.name}</span>

            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setUpdating(true)}
            >
              <PencilIcon />
            </Button>

            <Badge variant="secondary" className="ml-2">
              {section.bookmarks.length} bookmarks
            </Badge>

            <Button
              size={"sm"}
              variant={"outline"}
              className="ml-auto"
              onClick={() => setAddingBookmark(true)}
            >
              {addingBookmark ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <PlusIcon />
              )}
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size={"sm"} variant={"destructive"}>
                  {deleting ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Trash2Icon />
                  )}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive"
                    onClick={deleteSection}
                    disabled={deleting}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {section.bookmarks.length === 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              No bookmarks yet.
            </div>
          )}
          <div className="flex flex-col">
            {section.bookmarks.map((b: Bookmarks) => (
              <BookmarksItem key={b.id} bookmark={b} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={addingBookmark}
        onOpenChange={(open) => setAddingBookmark(open)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Bookmark</DialogTitle>
            <DialogDescription>Adding new bookmark.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={newBookmark.name}
                onChange={(e) =>
                  setNewBookmark((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="url" className="text-right">
                URL
              </Label>
              <Input
                id="url"
                className="col-span-3"
                value={newBookmark.url}
                onChange={(e) =>
                  setNewBookmark((prev) => ({ ...prev, url: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant={"destructive"}
              onClick={() => setAddingBookmark(false)}
            >
              Cancel
            </Button>
            <Button onClick={addBookmark}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={updatingSection} onOpenChange={(open) => setUpdating(open)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Bookmark</DialogTitle>
            <DialogDescription>Adding new bookmark.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant={"destructive"} onClick={() => setUpdating(false)}>
              Cancel
            </Button>
            <Button onClick={updateSection} disabled={updating || deleting}>
              {updating ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                "Save changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
