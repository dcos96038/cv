"use client";

import { useId, useState } from "react";

export type PaletteItem = { group: string; label: string; run: () => void };

export default function KbarPalette({ items, placeholder, onClose }: { items: PaletteItem[]; placeholder: string; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const listId = useId();
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  const active = Math.min(sel, Math.max(filtered.length - 1, 0));

  const run = (i: PaletteItem) => { onClose(); i.run(); };

  return (
    <div id="k" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="kp" role="dialog" aria-modal="true" aria-label={placeholder}>
        <input
          autoFocus
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={filtered[active] ? `${listId}-${active}` : undefined}
          aria-label={placeholder}
          placeholder={placeholder}
          value={q}
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, filtered.length - 1)); }
            if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
            if (e.key === "Enter" && filtered[active]) run(filtered[active]);
          }}
        />
        <ul id={listId} role="listbox">
          {filtered.map((i, idx) => (
            <li key={i.label} role="presentation">
              {(idx === 0 || filtered[idx - 1].group !== i.group) && <div className="kg" aria-hidden="true">{i.group}</div>}
              <div id={`${listId}-${idx}`} role="option" aria-selected={idx === active} className={`ki${idx === active ? " sel" : ""}`} onMouseEnter={() => setSel(idx)} onClick={() => run(i)}>
                {i.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
