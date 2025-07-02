'use client';

import Navbar from '../Components/Navbar';

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Projects</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        I&apos;m currently working on some exciting projects! Stay tuned for updates.
                    </p>
                    <div className="mt-12 flex justify-center">
                        <div className="relative w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                    </div>
                    <button
                        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
                        onClick={() => alert('Check back soon!')}
                    >
                        Check Back Later
                    </button>
                </section>
            </main>
        </>
    );
}