"use client";

import { useSession } from "@/providers/SessionProvider";

export default function Home() {
  const session = useSession();
  return <div>{JSON.stringify(session)}</div>;
}
