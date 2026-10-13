"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Lang = "en" | "es";
type Link = { label: string; href: string };

const UI = {
  en: { cmd: "Type a command or search…", print: "Print", actions: "Actions", links: "Links", toggle: "Switch to Spanish", other: "ES" },
  es: { cmd: "Escribí un comando o buscá…", print: "Imprimir", actions: "Acciones", links: "Enlaces", toggle: "Cambiar a inglés", other: "EN" },
};

export const TopActions = ({ language, links }: { language: Lang; links: Link[] }) => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const u = UI[language];

  const toggleLang = useCallback(() => {
    router.push(language === "en" ? `${pathname}?language=es` : pathname);
  }, [language, pathname, router]);

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

  const items = useMemo(
    () => [
      { group: u.actions, label: u.print, run: () => setTimeout(() => window.print(), 150) },
      { group: u.actions, label: u.toggle, run: toggleLang },
      ...links.map((l) => ({ group: u.links, label: l.label, run: () => window.open(l.href, "_blank") })),
    ],
    [u, links, toggleLang]
  );
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <span className="np">
        <button type="button" onClick={() => setOpen(true)} aria-label="Command menu">⌘K</button>
        <button type="button" onClick={toggleLang}>{u.other}</button>
      </span>
      {open && (
        <div id="k" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="kp" role="dialog" aria-modal="true">
            <input autoFocus placeholder={u.cmd} value={q} onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && filtered[0]) { setOpen(false); filtered[0].run(); } }} />
            <ul>
              {filtered.map((i, idx) => (
                <li key={i.label}>
                  {(idx === 0 || filtered[idx - 1].group !== i.group) && <div className="kg">{i.group}</div>}
                  <div className={`ki${idx === 0 ? " sel" : ""}`} onClick={() => { setOpen(false); i.run(); }}>{i.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
