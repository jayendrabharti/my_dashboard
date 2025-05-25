"use server";

import { createSupabaseClient } from "../supabase/server";
import { getErrorMessage } from "@/utils/utils";

export const signOutAction = async () => {
  try {
    const { auth } = await createSupabaseClient();

    const { error } = await auth.signOut();

    if (error) throw error;
    return { data: null, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};
