import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Main from "@/components/Main";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/providers/SessionProvider";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "Bookmarks, Notes, and Tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={cn("h-dvh w-full")}>
        <ThemeProvider defaultTheme="dark">
          <SessionProvider>
            <Main className="w-full h-full grid grid-rows-[auto_1fr] bg-background text-foreground">
              <header>
                <Header />
                <NavBar />
              </header>
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full p-2 overflow-y-scroll">
                {children}
              </div>
            </Main>
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
