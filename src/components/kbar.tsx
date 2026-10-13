"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { langPath, type Lang } from "@/lib/i18n";
import type { PaletteItem } from "./kbar-palette";

// The palette is only needed after Cmd/Ctrl+K or a click, so keep it out of the initial bundle.
const KbarPalette = dynamic(() => import("./kbar-palette"), { ssr: false });

type Link = { label: string; href: string };

const UI = {
  en: { cmd: "Type a command or search…", print: "Print", actions: "Actions", links: "Links", toggle: "Switch to Spanish", other: "ES", menu: "Open command menu", otherName: "Español" },
  es: { cmd: "Escribí un comando o buscá…", print: "Imprimir", actions: "Acciones", links: "Enlaces", toggle: "Cambiar a inglés", other: "EN", menu: "Abrir menú de comandos", otherName: "English" },
};

export const TopActions = ({ language, links }: { language: Lang; links: Link[] }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const u = UI[language];
  const other: Lang = language === "en" ? "es" : "en";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = useMemo<PaletteItem[]>(
    () => [
      { group: u.actions, label: u.print, run: () => setTimeout(() => window.print(), 150) },
      { group: u.actions, label: u.toggle, run: () => router.push(langPath(other)) },
      ...links.map((l) => ({ group: u.links, label: l.label, run: () => window.open(l.href, "_blank") })),
    ],
    [u, links, router, other]
  );

  return (
    <>
      <span className="np">
        <button type="button" onClick={() => setOpen(true)} aria-label={u.menu} aria-haspopup="dialog" aria-keyshortcuts="Meta+K Control+K">⌘K</button>
        <Link href={langPath(other)} hrefLang={other} lang={other} aria-label={u.otherName} className="lb">{u.other}</Link>
      </span>
      {open && <KbarPalette items={items} placeholder={u.cmd} onClose={() => setOpen(false)} />}
    </>
  );
};
