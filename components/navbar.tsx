"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { Menu, Moon, Sun, Search, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">GunaHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition">
              Beranda
            </Link>
            <Link href="/courses" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition">
              Mata Kuliah
            </Link>
            <Link href="/progress" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition">
              Progress
            </Link>
          </div>

          {/* Search & Theme */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700">
            <Link
              href="/"
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Beranda
            </Link>
            <Link
              href="/courses"
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Mata Kuliah
            </Link>
            <Link
              href="/progress"
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Progress
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
