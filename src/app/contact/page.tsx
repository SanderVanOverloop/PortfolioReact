'use client';

import { useState } from 'react';
import Navbar from '../Components/Navbar';
import emailjs from 'emailjs-com';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                'service_o85moqt',
                'template_n6ftd9r',
                formData,
                'jwUZShhzhjO-FXaiD'
            )
            .then(
                () => {
                    setSuccessMessage('Your message has been sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                },
                () => {
                    setErrorMessage('Failed to send your message. Please try again later.');
                }
            );
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Me</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Feel free to reach out to me by filling out the form below.
                    </p>
                </section>

                <section className="max-w-4xl mx-auto mt-12">
                    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
                        >
                            Send Message
                        </button>
                    </form>
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                    {/* Contact Links */}
                    <div className="mt-8 text-center space-y-4">
                        <p className="text-lg text-gray-300">
                            Connect with me:
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://www.linkedin.com/in/sandervanoverloop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:sander.overloop@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                Email
                            </a>
                            <a
                                href="https://github.com/SanderVanOverloop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}