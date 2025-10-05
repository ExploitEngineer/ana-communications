"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
import { ModeToggle } from "./mode-toggle";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full transition-colors duration-150",
          scrolled && "bg-background/50 backdrop-blur-3xl",
        )}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo left */}
          <div className="flex items-center">
            <Link href="/" aria-label="home" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Links center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme toggle right */}
          <div className="flex items-center">
            <div className="lg:block hidden">
              <ModeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="ml-4 block lg:hidden p-2.5"
            >
              {menuState ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuState && (
          <div className="lg:hidden bg-background/90 backdrop-blur-md px-6 py-4 space-y-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ModeToggle />
          </div>
        )}
      </nav>
    </header>
  );
};
