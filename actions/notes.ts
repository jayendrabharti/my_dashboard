"use server";

import prisma from "@/prisma/client";
import { StickyNotes } from "@/prisma/prismaClient";
import { createSupabaseClient } from "@/supabase/server";
import { getErrorMessage } from "@/utils/utils";
import { revalidatePath } from "next/cache";

export const getNotesAction = async () => {
  try {
    const supabase = await createSupabaseClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) throw userError;

    const data = await prisma.stickyNotes.findMany({
      where: { userId: user?.id },
      orderBy: {
        createdAt: "asc",
      },
    });

    return { data: data, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const createNoteAction = async (data: {
  title?: string;
  content?: string;
  color?: string | null;
  x?: number;
  y?: number;
}): Promise<{
  data: StickyNotes | null;
  errorMessage: string | null;
}> => {
  try {
    const supabase = await createSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw error;
    if (!user || !user.id) throw new Error("User not authenticated");

    const note = await prisma.stickyNotes.create({
      data: {
        title: data.title,
        content: data.content,
        color: data.color,
        x: data.x || 0,
        y: data.y || 0,
        userId: user.id,
      },
    });

    revalidatePath("/notes");

    return { data: note as StickyNotes, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const deleteNoteAction = async (data: {
  id: string;
}): Promise<{
  data: StickyNotes | null;
  errorMessage: string | null;
}> => {
  try {
    const supabase = await createSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw error;
    if (!user || !user.id) throw new Error("User not authenticated");

    const note = await prisma.stickyNotes.delete({
      where: {
        id: data.id,
        userId: user?.id,
      },
    });

    revalidatePath("/notes");

    return { data: note as StickyNotes, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const updateNoteAction = async (data: {
  id: string;
  title?: string;
  content?: string;
  color?: string;
  x?: number;
  y?: number;
  pinned?: boolean;
  archived?: boolean;
}): Promise<{
  data: StickyNotes | null;
  errorMessage: string | null;
}> => {
  try {
    const supabase = await createSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw error;
    if (!user || !user.id) throw new Error("User not authenticated");

    const note = await prisma.stickyNotes.update({
      where: {
        id: data.id,
        userId: user?.id,
      },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.content !== undefined && { content: data.content }),
        ...(data.color !== undefined && { color: data.color }),
        ...(data.x !== undefined && { x: data.x }),
        ...(data.y !== undefined && { y: data.y }),
        ...(data.pinned !== undefined && { pinned: data.pinned }),
        ...(data.archived !== undefined && { archived: data.archived }),
      },
    });

    revalidatePath("/notes");

    return { data: note as StickyNotes, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};
