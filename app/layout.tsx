import "./globals.css";
import ReactQueryProvider from "@/lib/providers/react-query";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import AuthProvider from "@/components/auth/AuthProvider.server";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tarjemli - Premium Beats",
  description: "Discover and purchase unique beats crafted by tarjemli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white pb-20`}>
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>
            <main className="dark">{children}</main>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
