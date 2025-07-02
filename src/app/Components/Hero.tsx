export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <div className="flex flex-col items-center">
                <img
                    src="/me.jpg"
                    alt="My Picture"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-lg mb-6"
                />
                <h1 className="text-5xl md:text-7xl font-extrabold">
                    Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">blabla</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
                    I&apos;m a full-stack developer passionate about building fast and intuitive web experiences.
                </p>
                <a href="#projects" className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition">
                    View Projects
                </a>
            </div>
        </section>
    );
}