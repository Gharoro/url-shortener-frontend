import { useThemeStore } from "./store/themeStore";

function App() {
  const toggle = useThemeStore((s) => s.toggleTheme);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="flex gap-4">
        <button
          onClick={toggle}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
