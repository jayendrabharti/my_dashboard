import { NextResponse } from "next/server";
import { createSupabaseClient } from "@/supabase/server";
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/bookmarks";

  if (code) {
    const supabase = await createSupabaseClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    } else {
      console.error("Error exchanging code for session:", error);
      return NextResponse.redirect(
        `${origin}/auth/error?message=${error.message}`
      );
    }
  }

  return NextResponse.redirect(`${origin}/auth/error?message=No code provided`);
}
