"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SignInWithGoogle from "./SignInWithGoogle";
import ThemeSwitch from "./ThemeSwitch";
import UserButton from "./UserButton";
import { User } from "@supabase/supabase-js";
import { createSupabaseClient } from "@/supabase/client";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const { auth } = createSupabaseClient();

  auth.onAuthStateChange((event, session) => {
    setUser(session?.user || null);
  });

  return (
    <div className="p-2 flex flex-row items-center justify-between gap-2 bg-sidebar">
      <SearchBar />
      {user ? (
        <>
          <ThemeSwitch />
          <UserButton user={user} />
        </>
      ) : (
        <SignInWithGoogle />
      )}
    </div>
  );
}
