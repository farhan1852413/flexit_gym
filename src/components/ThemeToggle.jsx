import React, { useEffect, useState } from 'react';

// Simple toggle component that switches between 'light' and 'dark' themes.
// It stores the preference in localStorage and adds the appropriate class to the document element.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Initial theme: check localStorage or fallback to system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme class to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm font-label-bold uppercase bg-white/10 text-white backdrop-blur-md rounded-full hover:bg-white/20 transition"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
