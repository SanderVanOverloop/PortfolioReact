'use client';

import Navbar from '../Components/Navbar';

export default function ProjectsPage() {
    const projects = [
        {
            title: 'Full-Stack Microservice Blog Platform',
            summary:
                'A full-stack blog platform built using a microservice architecture. The backend is split into services for config, gateway, discovery, posts, comments, and reviews. Frontend is developed in Angular 19 with a responsive UI and Docker-based deployment. It is a app where you can let people review articles and publish them on the platform.',
            tech: [
                'Java 21',
                'Spring Boot',
                'Spring Cloud (Config, Gateway, Discovery)',
                'Angular 19',
                'Angular Material',
                'Tailwind CSS',
                'Bootstrap',
                'Docker',
                'Maven',
            ],
        },
        {
            title: 'Steam Mobile Companion',
            summary:
                'An app where you can look at steam games and look at the reviews and rating of the games with description. It is built with Flutter and Dart, providing a smooth user experience with a focus on performance and responsiveness. it was a test project to learn Flutter.',
            tech: ['JavaScript', 'Team Collaboration', 'Flutter','REST API', 'Firebase'],
        },
        {
            title: 'Hacktopia (Hackathon Project)',
            summary:
                'Hacktopia is a hackathon project Where you can give some made up symptons and it will give you a list of diseases that you might have. then it wil give you the name of the needed medicine and the price of the medicine. It is built with Angular and Java Spring Boot, providing a responsive and interactive user interface. It was the first time we got 100% freedom to program what we wanted inside a specific theme',
            tech: ['Angular', 'JavaScript', 'Hackathon', 'Team Collaboration', 'Java', 'SpringBoot','REST API'],
        },
        {
            title: 'LogParser Tool',
            summary:
                'A developer tool to parse and visualize log files. Built with a Python backend that analyzes logs, and an Angular frontend that renders interactive charts using Chart.js and Tailwind CSS.',
            tech: ['Python', 'Angular 19', 'Angular', 'Tailwind CSS', 'Chart.js', 'REST API', 'FlaskAPI'],
        },
        {
            title: 'TrailTales App',
            summary:
                'A app where people can share buildings and areas they have visited, including photos and descriptions. The app is designed to be user-friendly and visually appealing, with a focus on community engagement.',
            tech: ['Team Project', 'Vue.js', 'Java', 'SpringBoot', 'crowdlin', 'Vitest'],
        },
    ];

    return (
        <>
            <Navbar />
            <br />
            <main className="min-h-screen px-6 py-12 bg-white text-gray-900">
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Projects</h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        I&apos;m currently working on some exciting projects! Stay tuned for updates.
                    </p>
                    <div className="mt-12 flex justify-center">
                        <div className="relative w-64 h-64 rounded-full animate-pulse bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    </div>
                    <button
                        className="mt-8 px-6 py-3 rounded-lg font-medium transition bg-blue-400 hover:bg-blue-500 text-gray-900"
                        onClick={() => alert('Check back soon!')}
                    >
                        Check Back Later
                    </button>
                </section>

                {/* Projects Cards Section */}
                <section className="max-w-6xl mx-auto mt-20 grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-6 shadow-lg transition-transform hover:scale-[1.02] bg-gray-100 border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{project.summary}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}