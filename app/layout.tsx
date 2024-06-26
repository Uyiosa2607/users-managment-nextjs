import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Users Management",
  description: "Hobby Project",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children, session }: any) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="container w-full mx-auto px-[20px]">
          <SessionProvider session={session}>
            {children}
            <Toaster />
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
