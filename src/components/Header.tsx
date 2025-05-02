import { useThemeStore } from "../store/themeStore";

export default function Header() {
  const toggle = useThemeStore((s) => s.toggleTheme);
  const theme = useThemeStore((s) => s.theme);

  return (
    <header className="shadow-lg w-full z-10 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3.5">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="text-2xl font-bold text-primary-light dark:text-primary-dark"
          >
            Shortly
          </a>

          <div className="flex items-center">
            <button
              onClick={toggle}
              id="darkModeToggle"
              className="p-2 space-x-2 rounded-md border border-dark dark:border-white transition-colors duration-300 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <i className="fa-solid fa-sun text-amber-300"></i>
              ) : (
                <i className="fa-solid fa-moon dark:text-amber-300"></i>
              )}
              <span>Theme</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
