"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-32 rounded bg-gray-100 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <Link
      href="/"
      aria-label="Home"
      className="group relative flex items-center gap-3 px-3 py-1 transition-all duration-500"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute w-5 h-5 rounded-full border border-blue-500/40 animate-ping-slow"></div>
        <div className="absolute w-3 h-3 rounded-full border border-blue-500/70 animate-ping-slower"></div>
        <div className="relative w-2 h-2 rounded-full bg-blue-600"></div>
      </div>

      <h1
        className={cn(
          "relative text-2xl font-semibold tracking-tight transition-all duration-500 group-hover:tracking-wider",
          resolvedTheme === "dark" ? "text-white" : "text-gray-900",
        )}
      >
        <span
          className={cn(
            "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent font-extrabold transition-all duration-500 group-hover:opacity-90",
          )}
        >
          A
        </span>
        <span className="ml-[1px] font-semibold">na</span>

        <span
          className={cn(
            "ml-2 text-[0.9rem] font-medium tracking-widest text-muted-foreground transition-all duration-500 group-hover:text-blue-600",
          )}
        >
          Communications
        </span>
      </h1>

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full"></span>
    </Link>
  );
}
