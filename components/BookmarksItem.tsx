"use client";

import {
  ExternalLink,
  MoreHorizontal,
  Edit,
  Trash2,
  LoaderCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useTransition } from "react";
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
import { Bookmarks } from "@/prisma/prismaClient";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  deleteBookmarkAction,
  updateBookmarkAction,
} from "@/actions/bookmarks";
import { toast } from "sonner";

export default function BookmarkItem({ bookmark }: { bookmark: Bookmarks }) {
  const [showEditBookmark, setShowEditBookmark] = useState(false);
  const [deleting, startDeleting] = useTransition();
  const [updating, startUpdating] = useTransition();
  const [newBookmark, setNewBookmark] = useState({
    name: bookmark.title,
    url: bookmark.url,
  });

  // Get favicon from URL or use default
  const getFaviconUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`;
    } catch {
      return null;
    }
  };

  const deleteBookmark = () => {
    startDeleting(async () => {
      const { errorMessage } = await deleteBookmarkAction({
        id: bookmark.id,
      });
      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        toast.success("Deleted bookmark!!", {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }
    });
  };
  const updateBookmark = () => {
    startUpdating(async () => {
      const { data, errorMessage } = await updateBookmarkAction({
        id: bookmark.id,
        name: newBookmark.name,
        url: newBookmark.url,
      });

      if (errorMessage) {
        toast.error(errorMessage, {
          style: { background: "#ef4444", color: "#fff" }, // Tailwind red-500
        });
      } else {
        if (data) setNewBookmark({ name: data.title, url: data.url });
        toast.success("Updated bookmark!!", {
          style: { background: "#22c55e", color: "#fff" }, // Tailwind green-500
        });
      }

      setNewBookmark({
        name: bookmark.title,
        url: bookmark.url,
      });

      setShowEditBookmark(false);
    });
  };
  const faviconUrl = getFaviconUrl(bookmark.url);

  return (
    <>
      <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent/50 group transition-colors">
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 flex-1 text-sm"
        >
          {faviconUrl && (
            <Image
              src={faviconUrl}
              alt=""
              width={50}
              height={50}
              className="w-4 h-4 object-contain"
            />
          )}
          <span className="truncate">{bookmark.title}</span>
        </a>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" className="h-7 w-7">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setShowEditBookmark(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    variant={"destructive"}
                  >
                    {deleting ? (
                      <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
                    ) : (
                      <Trash2 className="mr-2 h-4 w-4" />
                    )}
                    Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete the bookmark -{" "}
                      {bookmark.title}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteBookmark}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Dialog
        open={showEditBookmark}
        onOpenChange={(open) => setShowEditBookmark(open)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Bookmark</DialogTitle>
            <DialogDescription>Updating bookmark.</DialogDescription>
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
              onClick={() => setShowEditBookmark(false)}
              disabled={updating}
            >
              Cancel
            </Button>
            <Button onClick={updateBookmark} disabled={updating || deleting}>
              {updating ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
