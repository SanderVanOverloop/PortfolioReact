'use client';
import { useState } from 'react';
import Navbar from '../Components/Navbar';

export default function Page() {
    const [activeTab, setActiveTab] = useState<'technical' | 'personal'>('technical');

    const categorizedSkills = {
        'Frontend': [

            'React',
            'Vue.js',
            'Angular',
            'Tailwind CSS',
            'Next.js',
        ],
        '.NET': ['C#', '.NET MAUI', 'Entity Framework Core', 'ASP.NET CORE'],
        Java: ['Java', 'Spring Boot'],
        Python: ['Python', 'Flask API'],
        Javascript: ['Node.js', 'Express.js', 'JavaScript', 'TypeScript',],
        'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
        'Version Control': ['Git', 'GitHub', 'Azure Repo', 'Bitbucket'],
        'Testing': ['JUnit', 'Mockito'],
        'Other technology' : ['Docker', 'RestAPI','RabbitMQ']
    };

    const personalSkills = [
        'Teamwork',
        'Communication',
        'Adaptability',
        'Problem Solving',
        'Continuous Learning',
        'Patience',

    ];

    const renderCategorizedSkillsAsScrollableCards = (categories: typeof categorizedSkills) => (
        <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 w-max">
                {Object.entries(categories).map(([category, skills]) => (
                    <div
                        key={category}
                        className="min-w-[250px] bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-2xl shadow-md flex-shrink-0"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white text-center">{category}</h3>
                        <ul className="grid grid-cols-1 gap-3 text-center">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="bg-white/10 border border-white/10 p-2 rounded-lg text-white font-medium shadow-sm hover:shadow-md transition-transform hover:scale-105"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPersonalSkills = (skills: string[]) => (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
                <li
                    key={skill}
                    className="bg-white/10 border border-white/10 backdrop-blur-sm p-4 rounded-xl text-white font-medium shadow-md text-center hover:shadow-lg transition-transform hover:scale-105"
                >
                    {skill}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-12">
                {/* About Section */}
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Me</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Hi, I’m Sander Van Overloop, a recent graduate in Applied Computer Science from Hogeschool PXL
                        and a full-stack developer with a strong interest in backend development, especially in Java.
                        I'm also open to frontend projects and enjoy building complete, user-focused applications.
                        Outside of coding, I’m passionate about Formula 1, gaming, walking in nature, and staying active.
                        I believe in continuous learning and always strive to grow both professionally and personally.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="max-w-6xl mx-auto mt-16 px-4">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg transition-all">
                        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

                        {/* Tabs */}
                        <div className="flex justify-center gap-4 mb-6">
                            {['technical', 'personal'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as 'technical' | 'personal')}
                                    className={`px-5 py-2 text-sm md:text-base font-medium rounded-md transition
                    ${
                                        activeTab === tab
                                            ? 'bg-white text-gray-900 shadow-md'
                                            : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                                    }`}
                                >
                                    {tab === 'technical' ? 'Technical Skills' : 'Personal Skills'}
                                </button>
                            ))}
                        </div>

                        {/* Skills Display */}
                        {activeTab === 'technical'
                            ? renderCategorizedSkillsAsScrollableCards(categorizedSkills)
                            : renderPersonalSkills(personalSkills)}
                    </div>
                </section>
            </main>
        </>
    );
}
