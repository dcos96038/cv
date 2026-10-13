"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { langPath, type Lang } from "@/lib/i18n";
import type { PaletteItem } from "./kbar-palette";

// Palette is desktop-only (Tailwind md and up). On smaller screens every action is a visible link
// (link row + language switch), so the palette and its lazy chunk are never loaded there.
const DESKTOP = "(min-width: 768px)";
const isDesktop = () => typeof window !== "undefined" && window.matchMedia(DESKTOP).matches;

// The palette is only needed after Cmd/Ctrl+K or a click, so keep it out of the initial bundle.
const KbarPalette = dynamic(() => import("./kbar-palette"), { ssr: false });

type Link = { label: string; href: string };

const UI = {
  en: { cmd: "Type a command or search…", actions: "Actions", links: "Links", toggle: "Switch to Spanish", other: "ES", menu: "Open command menu", otherName: "Español" },
  es: { cmd: "Escribí un comando o buscá…", actions: "Acciones", links: "Enlaces", toggle: "Cambiar a inglés", other: "EN", menu: "Abrir menú de comandos", otherName: "English" },
};

export const TopActions = ({ language, links, cv }: { language: Lang; links: Link[]; cv: Link }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const u = UI[language];
  const other: Lang = language === "en" ? "es" : "en";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        if (!isDesktop()) return;
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    // Close the palette if the viewport shrinks below md while it's open.
    const mq = window.matchMedia(DESKTOP);
    const onMq = () => { if (!mq.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { window.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, []);

  const items = useMemo<PaletteItem[]>(
    () => [
      { group: u.actions, label: u.toggle, run: () => router.push(langPath(other)) },
      { group: u.actions, label: cv.label, run: () => { const a = document.createElement("a"); a.href = cv.href; a.download = ""; a.click(); } },
      ...links.map((l) => ({ group: u.links, label: l.label, run: () => window.open(l.href, "_blank") })),
    ],
    [u, links, router, other, cv]
  );

  return (
    <>
      <span className="np">
        <button type="button" className="kb" onClick={() => isDesktop() && setOpen(true)} aria-label={u.menu} aria-haspopup="dialog" aria-keyshortcuts="Meta+K Control+K">⌘K</button>
        <Link href={langPath(other)} hrefLang={other} lang={other} aria-label={u.otherName} className="lb">{u.other}</Link>
      </span>
      {open && <KbarPalette items={items} placeholder={u.cmd} onClose={() => setOpen(false)} />}
    </>
  );
};
