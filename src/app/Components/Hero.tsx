'use client';

import ProfileCard from '../../../reactbits/ProfileCard/ProfileCard';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <div className="flex flex-col items-center">
                {/* 👤 Profile Card instead of static image */}
                <ProfileCard
                    name="Sander"
                    title="Full-Stack Developer"
                    avatarUrl="./me.jpg"
                    showUserInfo={false}
                    showBehindGradient={false}
                    enableTilt={true}
                    className="space-y-4"
                    behindGradient={null} /* Default value */
                    innerGradient={null} /* Default value */
                    miniAvatarUrl={null} /* Default value */
                    onContactClick={() => {}} /* Empty function */

                />

                {/* 🧠 Name and description */}
                <h1 className="text-5xl md:text-7xl font-extrabold mt-8">
                    Hi, I&apos;m{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Sander Van Overloop
          </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
                    I&apos;m a full-stack software developer. I love programming because it lets me turn ideas into working solutions and solve real-world problems.
                </p>

                {/* 🔗 Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <a
                        href="#projects"
                        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="/Sander-Van-Overloop-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition"
                    >
                        Open CV
                    </a>
                </div>
            </div>
        </section>
    );
}
