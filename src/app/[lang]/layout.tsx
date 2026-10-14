import { Inter as FontSans, Fraunces } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "./globals.css";
import "./editorial.css";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/data/resume-data";
import { LANGS, isLang } from "@/lib/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Diego Coscolla", url: SITE_URL }],
  creator: "Diego Coscolla",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6f1e7" };

const fontSerif = Fraunces({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "600"], style: ["normal", "italic"], display: "swap" });
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang}>
      <body className={cn("min-h-dvh bg-background font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        {children}
      </body>
    </html>
  );
}
