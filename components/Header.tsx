"use client";
import { useSession } from "@/providers/SessionProvider";
import SearchBar from "./SearchBar";
import SignInWithGoogle from "./SignInWithGoogle";
import ThemeSwitch from "./ThemeSwitch";
import UserButton from "./UserButton";
export default function Header() {
  const { session } = useSession();

  return (
    <div className="p-2 flex flex-row items-center justify-between gap-2 bg-sidebar">
      <SearchBar />
      {session?.user ? (
        <>
          <ThemeSwitch />
          <UserButton />
        </>
      ) : (
        <SignInWithGoogle />
      )}
    </div>
  );
}
