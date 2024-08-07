import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CodeModal from "@/components/code-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zerojin Anime",
  description: "My Collection of Animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CodeModal />
        {children}
      </body>
    </html>
  );
}
