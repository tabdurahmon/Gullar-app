import React, { useState, useEffect } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function DarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <div className="ml-25 flex">
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5 text-gray-800" />
          ) : (
            <SunIcon className="h-5 w-5 text-yellow-500" />
          )}
        </button>
      </div>
    </ThemeProvider>
  );
}
