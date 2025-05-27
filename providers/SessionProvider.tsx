"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { createSupabaseClient } from "@/supabase/client";
import { Session } from "@supabase/supabase-js";
import { getUser } from "@/supabase/server";

type SessionContextType = {
  session: Session | null;
  loading: boolean;
  error: string | null;
  refreshSession: () => Promise<void>;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createSupabaseClient();

  const refreshSession = useCallback(async () => {
    try {
      getUser(); // Ensure the user is fetched from the server
      setError(null);
      const { data, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }

      setSession(data.session ?? null);
    } catch (err) {
      console.error("Failed to refresh session:", err);
      setError(
        err instanceof Error ? err.message : "Failed to refresh session"
      );
      setSession(null);
    }
  }, [supabase]);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        setError(null);
        const { data, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          throw sessionError;
        }

        if (mounted) {
          setSession(data.session ?? null);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to initialize auth:", err);
        if (mounted) {
          setError(
            err instanceof Error ? err.message : "Failed to initialize auth"
          );
          setSession(null);
          setLoading(false);
        }
      }
    };

    initializeAuth();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (mounted) {
          setSession(session ?? null);
          setError(null);

          if (loading) {
            setLoading(false);
          }
        }
      }
    );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [supabase, loading]);

  const contextValue: SessionContextType = {
    session,
    loading,
    error,
    refreshSession,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
