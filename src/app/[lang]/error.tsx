"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <div className="flex flex-col">
        <h2 className="text-center font-medium text-lg">
          Something went wrong!
        </h2>
        <p>Please, select a language to continue.</p>
      </div>
      <div className="flex gap-4">
        <Button variant={"outline"} asChild>
          <Link href="/en">Go to English version</Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href="/es">Ir a la versión en Español</Link>
        </Button>
      </div>
    </main>
  );
}
