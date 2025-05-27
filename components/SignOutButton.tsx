"use client";
import { Loader2Icon, LogOutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/supabase/client";

export default function SignOutButton({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();
  const [signingOut, startSignOut] = useTransition();
  const supabase = createSupabaseClient();
  return (
    <Button
      onClick={() => {
        startSignOut(async () => {
          await supabase.auth.signOut();
          router.refresh();
        });
      }}
      disabled={signingOut}
      variant={"outline"}
      className={cn(`active:scale-90 ${className}`)}
    >
      {signingOut ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <LogOutIcon className="size-4" />
      )}
      {signingOut ? "Signing Out..." : "Sign Out"}
    </Button>
  );
}
