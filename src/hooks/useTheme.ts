import { useCallback, useEffect, useState } from 'react';
import type { ThemeMode } from '../types';

/**
 * Manages light/dark theme. Defaults to the visitor's OS preference,
 * and applies the chosen theme as a `data-theme` attribute on <html>
 * (the CSS keys off that attribute for its color variables).
 */
export function useTheme(): [ThemeMode, () => void] {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return [theme, toggleTheme];
}
