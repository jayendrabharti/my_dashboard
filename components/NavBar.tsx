"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Bookmark, HomeIcon, ListTodo, NotebookIcon } from "lucide-react";

const Links = [
  { name: "", href: "/", icon: HomeIcon },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Notes", href: "/notes", icon: NotebookIcon },
  { name: "Tasks", href: "/tasks", icon: ListTodo },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-sidebar p-2 flex flex-row items-center justify-center gap-2">
      {Links.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <Button key={index} variant={isActive ? "default" : "outline"}>
            <Link href={link.href} className="flex items-center gap-2">
              <link.icon />
              {link.name}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
