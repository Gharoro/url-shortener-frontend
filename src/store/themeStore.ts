import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  effectiveTheme: "light" | "dark";
}

const getResolvedTheme = (theme: Theme): "light" | "dark" => {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
};

export const useThemeStore = create<ThemeStore>((set, get) => {
  const initialTheme = (localStorage.getItem("theme") as Theme) ?? "system";
  const effective = getResolvedTheme(initialTheme);

  // Apply immediately
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", effective === "dark");
  }

  return {
    theme: initialTheme,
    effectiveTheme: effective,
    setTheme: (newTheme: Theme) => {
      const resolved = getResolvedTheme(newTheme);
      if (newTheme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", newTheme);
      }
      document.documentElement.classList.toggle("dark", resolved === "dark");
      set({ theme: newTheme, effectiveTheme: resolved });
    },
    toggleTheme: () => {
      const current = get().effectiveTheme;
      const newTheme = current === "dark" ? "light" : "dark";
      get().setTheme(newTheme);
    },
  };
});
