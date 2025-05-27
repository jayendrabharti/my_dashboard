"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { createSupabaseClient } from "@/supabase/client";

export default function SignInWithGoogle() {
  const loginWithGoogle = async () => {
    const supabase = createSupabaseClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };

  return (
    <Button
      variant={"outline"}
      onClick={loginWithGoogle}
      className="active:scale-90"
    >
      Sign in
      <FcGoogle size={20} />
    </Button>
  );
}
