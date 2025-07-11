'use client';

import ProfileCard from '../../../reactbits/ProfileCard/ProfileCard';
import GradientText from '../../../reactbits/GradientText/GradientText'

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
                    behindGradient={null}
                    innerGradient={null}
                    miniAvatarUrl={null}
                    onContactClick={() => {}}

                />

                {/* 🧠 Name and description */}
                <h1 className="text-5xl md:text-7xl font-extrabold mt-8 text-gray-900">
                    Hi, I&apos;m{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Sander Van Overloop
          </span>
                </h1>
                <GradientText
                    colors={["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)"]}
                    animationSpeed={20}
                    showBorder={false}
                    className="custom-class"
                >
                    I&apos;m a full-stack software developer. I love programming because it lets me turn ideas into
                    working solutions and solve real-world problems.
                </GradientText>


                {/* 🔗 Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <a
                        href="./Sander-Van-Overloop-CV.pdf"
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