"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 90, opacity: 0 },
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative cursor-pointer w-10 h-10 p-2"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {!isDark ? (
          <motion.div
            key="sun"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Moon className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
