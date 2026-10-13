import { Inter as FontSans, Fraunces } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SITE_URL } from "@/data/resume-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diego Coscolla | Full-Stack Software Engineer",
  description: "Full-stack software engineer: TypeScript, React/Next.js, Node.js/NestJS, PostgreSQL.",
  authors: [{ name: "Diego Coscolla", url: SITE_URL }],
};

const fontSerif = Fraunces({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "600"], style: ["normal", "italic"] });

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
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
