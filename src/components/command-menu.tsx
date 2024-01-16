"use client";

import * as React from "react";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface CommandDialogComponentProps {
  language: "en" | "es";
}

export const CommandMenu = ({ language }: CommandDialogComponentProps) => {
  const [open, setOpen] = React.useState(false);

  const options = React.useMemo(() => {
    return [
      {
        label: "Print",
        icon: <FileTextIcon className="mr-2 h-4 w-4" />,
        action: () => {
          setOpen(false);

          setTimeout(() => {
            window.print();
          }, 200);
        },
      },
      {
        label: "LinkedIn",
        icon: <LinkedInLogoIcon className="mr-2 h-4 w-4" />,
        action: () => {
          window.open("https://www.linkedin.com/in/diego-cos/", "_blank");
        },
      },
      {
        label: "GitHub",
        icon: <GitHubLogoIcon className="mr-2 h-4 w-4" />,
        action: () => {
          window.open("https://www.github.com/dcos96038", "_blank");
        },
      },
      {
        label: "Twitter",
        icon: <TwitterLogoIcon className="mr-2 h-4 w-4" />,
        action: () => {
          window.open("https://twitter.com/diego_cos96", "_blank");
        },
      },
    ];
  }, []);

  const content = React.useMemo(() => {
    const contentByLanguage = {
      en: {
        title: "Command Menu",
        placeholder: "Type a command or search...",
        optionsLabel: "Options",
        noResults: "No results found.",
        openCommandMenu: "to open command menu",
      },
      es: {
        title: "Menú de Comandos",
        placeholder: "Escribe un comando o busca...",
        optionsLabel: "Opciones",
        noResults: "No se encontraron resultados.",
        openCommandMenu: "para abrir el menú de comandos",
      },
    };

    return contentByLanguage[language];
  }, [language]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed text-sm text-muted-foreground bottom-0 left-0 right-0 py-2 bg-white border-t text-center print:hidden">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        {content.openCommandMenu}
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={content.placeholder} />
        <CommandList>
          <CommandEmpty>{content.noResults}</CommandEmpty>
          <CommandGroup heading={content.optionsLabel}>
            {options.map((option) => (
              <CommandItem key={option.label} onSelect={option.action}>
                {option.icon}
                <span>{option.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
