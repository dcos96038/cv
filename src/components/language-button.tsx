"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

export const SwitchLanguageButton = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const router = useRouter()
  const language = searchParams.get("language") ?? "en";

  const handleLanguageChange = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (language === "en") {
      params.set("language", "es");
    } else {
      params.set("language", "en");
    }

    router.push(`${pathname}?${params.toString()}`)
  }


  return <Button onClick={handleLanguageChange} variant={"outline"} className="absolute right-0 top-0 print:hidden">{language === "en" ? "ES" : "EN"}</Button>;
};
