import { redirect } from "next/navigation";

export default function Home() {
  redirect("/bookmarks");
  return null;
}
