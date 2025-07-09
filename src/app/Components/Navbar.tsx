'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header
            className={`fixed top-0 w-full ${
                isDarkMode ? "bg-gray-900" : "bg-white"
            } bg-opacity-90 backdrop-blur-md z-50 shadow-lg transition-colors`}
        >
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link
                    href="/"
                    className={`text-2xl font-bold tracking-wide ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    } hover:text-blue-500 transition-colors`}
                    aria-label="Home"
                >
                    Portfolio
                </Link>
                <nav className="hidden md:flex space-x-6 text-sm">
                    {['about', 'projects', 'contact'].map((page) => (
                        <Link
                            key={page}
                            href={`/${page}`}
                            className={`hover:text-blue-500 transition-colors ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                            aria-label={page.charAt(0).toUpperCase() + page.slice(1)}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className={`px-4 py-2 rounded-full font-medium transition ${
                            isDarkMode
                                ? "bg-gray-800 text-white hover:bg-gray-700"
                                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                        }`}
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                    <button
                        className={`md:hidden ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div
                    className={`absolute top-full left-0 w-full bg-opacity-90 backdrop-blur-md ${
                        isDarkMode ? "bg-gray-900" : "bg-white"
                    } shadow-lg transition-transform`}
                >
                    <nav className="px-4 py-4 space-y-2">
                        {['about', 'projects', 'contact'].map((page) => (
                            <Link
                                key={page}
                                href={`/${page}`}
                                className={`block py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                                aria-label={page.charAt(0).toUpperCase() + page.slice(1)}
                            >
                                {page.charAt(0).toUpperCase() + page.slice(1)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}