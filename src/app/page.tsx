'use client';

import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { useTheme } from './Components/ThemeContext';

export default function Home() {
    const { isDarkMode } = useTheme();

    return (
        <>
            <Navbar />
            <main
                className={`min-h-screen pt-16 ${
                    isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
                }`}
            >
                <Hero />
            </main>
        </>
    );
}