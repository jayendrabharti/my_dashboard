import { HomeIcon, UserRoundXIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignInWithGoogle from "@/components/SignInWithGoogle";

export default async function UnauthorizedPage() {
  return (
    <>
      <span className="flex flex-col md:flex-row text-center items-center gap-2 text-xl md:text-5xl font-bold  text-destructive">
        <UserRoundXIcon className="size-16" />
        Unauthorized
      </span>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button variant={"outline"} className="active:scale-90">
          <HomeIcon className="size-4" />
          <Link href={"/"}>Homepage</Link>
        </Button>

        <SignInWithGoogle />
      </div>
    </>
  );
}
