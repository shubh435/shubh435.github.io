import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type ThemeMode = "dark" | "light";

const storageKey = "portfolio-theme";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = window.localStorage.getItem(storageKey) as ThemeMode | null;
    if (stored) {
      return stored;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ml-3 flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-white transition hover:border-cyan-400 hover:text-cyan-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
      <span className="text-sm font-medium capitalize">{theme} mode</span>
    </button>
  );
};

export default ThemeToggle;
