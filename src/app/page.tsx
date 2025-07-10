'use client';

import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Balatro from '../../reactbits/Balatro/Balatro';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Balatro
                    isRotate={false}
                    mouseInteraction={true}
                    pixelFilter={800}
                    color1="#000000"
                    color2="#ffffff"
                    color3="#888888"
                />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
            </div>


            <div className="relative z-10 pt-16 px-4 text-gray-900">
                <Navbar />
                <main className="min-h-screen">
                    <Hero />
                </main>
            </div>
        </div>
    );
}
