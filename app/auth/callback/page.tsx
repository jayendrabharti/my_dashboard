"use client";

import { useEffect } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { useSession } from "@/providers/SessionProvider";

export default function AuthCallback() {
  const { refreshSession } = useSession();
  useEffect(() => {
    const checkSession = async () => {
      await refreshSession();
    };

    checkSession();
  }, [refreshSession]);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-4">
      <LoaderCircleIcon className="animate-spin size-20" />
      <span className="text-3xl font-bold">Loading...</span>
    </div>
  );
}
