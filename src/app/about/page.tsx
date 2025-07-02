import Navbar from '../Components/Navbar';

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        About Me
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Hi, I’m Sander Van Overloop a recent graduate in Applied Computer Science from Hogeschool PXL and a full-stack developer
                        with a strong interest in backend development, especially in Java.
                        I'm also open to working on frontend projects and enjoy building complete, user-focused applications.
                        Outside of coding, I’m passionate about Formula 1, gaming, walking in nature, and staying active.
                        I believe in continuous learning and always strive to grow both professionally and personally.
                    </p>
                </section>

                <section className="max-w-4xl mx-auto mt-12">
                    <h2 className="text-3xl font-bold mb-4">Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        {[
                            {skill: 'JavaScript', color: 'from-yellow-400 to-yellow-600'},
                            {skill: 'TypeScript', color: 'from-blue-400 to-blue-600'},
                            {skill: 'React', color: 'from-cyan-400 to-cyan-600'},
                            {skill: 'Node.js', color: 'from-green-400 to-green-600'},
                            {skill: 'Tailwind CSS', color: 'from-teal-400 to-teal-600'},
                            {skill: 'Next.js', color: 'from-gray-400 to-gray-600'},
                            {skill: 'C#', color: 'from-purple-400 to-purple-600'},
                            {skill: 'Entity Framework Core', color: 'from-indigo-400 to-indigo-600'},
                            {skill: '.NET MAUI', color: 'from-pink-400 to-pink-600'},
                            {skill: 'Java', color: 'from-red-400 to-red-600'},
                            {skill: 'Spring Boot', color: 'from-orange-400 to-orange-600'},
                            {skill: 'Python', color: 'from-blue-300 to-blue-500'},
                            {skill: 'Flask API', color: 'from-green-300 to-green-500'},
                            {skill: 'Vue.js', color: 'from-emerald-400 to-emerald-600'},
                            {skill: 'Angular', color: 'from-red-500 to-red-700'},
                            {skill: 'Express.js', color: 'from-gray-500 to-gray-700'},
                        ].map(({skill, color}) => (
                            <li
                                key={skill}
                                className={`bg-gradient-to-r ${color} p-4 rounded-lg shadow-lg text-white font-medium hover:shadow-xl transition transform hover:scale-105`}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

            </main>
        </>
    );
}