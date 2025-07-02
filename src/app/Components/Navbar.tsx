'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur z-50 shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-white">
                    Portfolio
                </Link>
                <nav className="hidden md:flex space-x-6 text-sm">
                    <Link href="/about" className="hover:text-blue-400 transition">About</Link>
                    <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
                    <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></nav>
                <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <Link href="/about" className="block py-1">About</Link>
                    <Link href="/projects" className="block py-1">Projects</Link>
                    <Link href="/contact" className="block py-1">Contact</Link>
                </div>
            )}
        </header>
    );
}