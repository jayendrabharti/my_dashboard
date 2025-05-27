"use server";

import { Bookmarks, BookmarksSections } from "@/prisma/prismaClient";
import { createSupabaseClient } from "../supabase/server";
import { getErrorMessage } from "@/utils/utils";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const getBookmarksSectionsAction = async () => {
  try {
    const supabase = await createSupabaseClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) throw userError;

    const data = await prisma.bookmarksSections.findMany({
      where: { userId: user?.id },
      include: {
        bookmarks: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return { data: data, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const createBookmarksSectionAction = async (data: {
  name: string;
}): Promise<{
  data: BookmarksSections | null;
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

    const section = await prisma.bookmarksSections.create({
      data: {
        name: data.name,
        userId: user.id,
      },
    });

    revalidatePath("/bookmarks");

    return { data: section as BookmarksSections, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const deleteBookmarksSectionAction = async (data: {
  id: string;
}): Promise<{
  data: BookmarksSections | null;
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

    const section = await prisma.bookmarksSections.delete({
      where: {
        id: data.id,
        userId: user?.id,
      },
    });

    revalidatePath("/bookmarks");

    return { data: section as BookmarksSections, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const updateBookmarksSectionAction = async (data: {
  id: string;
  name: string;
}): Promise<{
  data: BookmarksSections | null;
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

    const section = await prisma.bookmarksSections.update({
      where: {
        id: data.id,
        userId: user?.id,
      },
      data: {
        name: data.name,
      },
    });

    revalidatePath("/bookmarks");

    return { data: section as BookmarksSections, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const addBookmarkAction = async (data: {
  sectionId: string;
  name: string;
  url: string;
}): Promise<{
  data: Bookmarks | null;
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

    const bookmark = await prisma.bookmarks.create({
      data: {
        sectionId: data.sectionId,
        title: data.name,
        url: data.url,
        userId: user.id,
      },
    });

    revalidatePath("/bookmarks");

    return { data: bookmark as Bookmarks, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const updateBookmarkAction = async (data: {
  id: string;
  name: string;
  url: string;
}): Promise<{
  data: Bookmarks | null;
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

    const bookmark = await prisma.bookmarks.update({
      where: {
        id: data.id,
        userId: user?.id,
      },
      data: {
        title: data.name,
        url: data.url,
      },
    });

    revalidatePath("/bookmarks");

    return { data: bookmark as Bookmarks, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};

export const deleteBookmarkAction = async (data: {
  id: string;
}): Promise<{
  data: Bookmarks | null;
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

    const bookmark = await prisma.bookmarks.delete({
      where: {
        id: data.id,
        userId: user?.id,
      },
    });

    revalidatePath("/bookmarks");

    return { data: bookmark as Bookmarks, errorMessage: null };
  } catch (error) {
    return { data: null, errorMessage: getErrorMessage(error) };
  }
};
