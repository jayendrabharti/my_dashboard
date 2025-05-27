"use client";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SignInWithGoogle from "./SignInWithGoogle";
import ThemeSwitch from "./ThemeSwitch";
import UserButton from "./UserButton";
import { User } from "@supabase/supabase-js";
import { createSupabaseClient } from "@/supabase/client";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  const supabase = createSupabaseClient();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [supabase.auth]);

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
