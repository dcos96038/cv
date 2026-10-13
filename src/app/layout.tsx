import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SITE_URL } from "@/data/resume-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diego Coscolla | Full-Stack Software Engineer",
  description: "Full-stack software engineer: TypeScript, React/Next.js, Node.js/NestJS, PostgreSQL.",
  authors: [{ name: "Diego Coscolla", url: SITE_URL }],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
