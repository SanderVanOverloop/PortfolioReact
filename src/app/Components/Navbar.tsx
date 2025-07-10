'use client';

import { useState } from 'react';
import Link from 'next/link';
import GlitchText from '../../../reactbits/GlitchText/GlitchText';
import ScrambledText from '../../../reactbits/ScrambledText/ScrambledText';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-lg transition-colors">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo/Title */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-wide text-gray-900 hover:text-blue-500 transition-colors"
                    aria-label="Home"
                >
                    <GlitchText
                        speed={2.5}
                        enableShadows={true}
                        enableOnHover={false}
                        className="custom-class"
                    >
                        Portfolio
                    </GlitchText>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm">
                    {['about', 'projects', 'contact'].map((page) => (
                        <Link
                            key={page}
                            href={`/${page}`}
                            className="hover:text-blue-500 transition-colors text-gray-900"
                            aria-label={page.charAt(0).toUpperCase() + page.slice(1)}
                        >
                            <ScrambledText
                                className="scrambled-text-demo"
                                radius={100}
                                duration={1.2}
                                speed={0.5}
                                scrambleChars=".:"
                            >
                                {page.charAt(0).toUpperCase() + page.slice(1)}
                            </ScrambledText>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Nav */}
            {menuOpen && (
                <div className="md:hidden w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
                    <nav className="px-4 py-4 space-y-2">
                        {['about', 'projects', 'contact'].map((page) => (
                            <Link
                                key={page}
                                href={`/${page}`}
                                className="block py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition text-gray-900"
                                aria-label={page.charAt(0).toUpperCase() + page.slice(1)}
                            >
                                <ScrambledText
                                    className="scrambled-text-black"
                                    radius={100}
                                    duration={1.2}
                                    speed={0.5}
                                    scrambleChars=".:"
                                >
                                    {page.charAt(0).toUpperCase() + page.slice(1)}
                                </ScrambledText>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}