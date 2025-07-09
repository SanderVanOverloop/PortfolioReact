'use client';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useTheme } from '../Components/ThemeContext';

export default function Page() {
    const { isDarkMode } = useTheme();
    const [activeTab, setActiveTab] = useState<'technical' | 'personal'>('technical');

    const categorizedSkills = {
        'Frontend': ['React', 'Vue.js', 'Angular', 'Tailwind CSS', 'Next.js'],
        '.NET': ['C#', '.NET MAUI', 'Entity Framework Core', 'ASP.NET CORE'],
        Java: ['Java', 'Spring Boot'],
        Python: ['Python', 'Flask API'],
        Javascript: ['Node.js', 'Express.js', 'JavaScript', 'TypeScript'],
        'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
        'Version Control': ['Git', 'GitHub', 'Azure Repo', 'Bitbucket'],
        'Testing': ['JUnit', 'Mockito'],
        'Other technology': ['Docker', 'RestAPI', 'RabbitMQ', 'Flutter'],
    };

    const personalSkills = {
        Interests: ['Formula 1', 'Gaming', 'Walking', 'Staying active', 'Football'],
        Traits: ['Teamwork', 'Communication', 'Adaptability', 'Problem Solving', 'Continuous Learning', 'Patience'],
        Languages: ['Dutch', 'English'],
    };

    const renderCategorizedSkillsAsScrollableCards = (categories: typeof categorizedSkills) => (
        <div className="overflow-y-auto max-h-[500px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(categories).map(([category, skills]) => (
                    <div
                        key={category}
                        className={`min-w-[250px] ${
                            isDarkMode
                                ? "bg-gray-900 border-gray-800"
                                : "bg-gray-200 border-gray-400"
                        } border backdrop-blur-sm p-5 rounded-2xl shadow-md`}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-center">{category}</h3>
                        <ul className="grid grid-cols-1 gap-3 text-center">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className={`p-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-transform hover:scale-105 ${
                                        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"
                                    }`}
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

    const renderPersonalSkills = (skills: typeof personalSkills) => (
        <div className="flex flex-col gap-8 items-center">
            {Object.entries(skills).map(([category, items]) => (
                <div
                    key={category}
                    className={`w-full max-w-3xl p-6 rounded-xl shadow-md ${
                        isDarkMode
                            ? "bg-gray-900 border border-gray-700 text-white"
                            : "bg-gray-100 border border-gray-300 text-gray-900"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-center mb-5">{category}</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {items.map((skill) => (
                            <li
                                key={skill}
                                className={`p-3 rounded-lg text-center text-sm font-medium shadow-sm transition-transform hover:scale-105 ${
                                    isDarkMode
                                        ? "bg-gray-800 text-white border border-gray-600"
                                        : "bg-gray-200 text-gray-800 border border-gray-400"
                                }`}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );


    return (
        <>
            <Navbar />
            <br/>
            <main
                className={`min-h-screen px-6 py-12 ${
                    isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
                }`}
            >
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Me</h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Hi, I’m Sander Van Overloop, a recent graduate in Applied Computer Science from Hogeschool PXL
                        and a full-stack developer with a strong interest in backend development, especially in Java.
                        I'm also open to frontend projects and enjoy building complete, user-focused applications.
                        Outside of coding, I’m passionate about Formula 1, gaming, walking in nature, and staying active.
                        I believe in continuous learning and always strive to grow both professionally and personally.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto mt-16 px-4">
                    <div
                        className={`rounded-2xl p-6 md:p-8 shadow-lg transition-all ${
                            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"
                        }`}
                    >
                        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
                        <div className="flex justify-center gap-4 mb-6">
                            {['technical', 'personal'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as 'technical' | 'personal')}
                                    className={`px-5 py-2 text-sm md:text-base font-medium rounded-md transition ${
                                        activeTab === tab
                                            ? isDarkMode
                                                ? "bg-gray-700 text-white"
                                                : "bg-gray-300 text-gray-900"
                                            : isDarkMode
                                                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                                    }`}
                                >
                                    {tab === 'technical' ? 'Technical Skills' : 'Personal Skills'}
                                </button>
                            ))}
                        </div>
                        {activeTab === 'technical'
                            ? renderCategorizedSkillsAsScrollableCards(categorizedSkills)
                            : renderPersonalSkills(personalSkills)}
                    </div>
                </section>
            </main>
        </>
    );
}