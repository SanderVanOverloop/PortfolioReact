'use client';

import { useState } from 'react';
import Navbar from '../Components/Navbar';
import emailjs from 'emailjs-com';
import { useTheme } from '../Components/ThemeContext';

export default function ContactPage() {
    const { isDarkMode } = useTheme();
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
            <Navbar/>
            <br/>
            <main
                className={`min-h-screen px-6 py-12 ${
                    isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
                }`}
            >
                <section className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Me</h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Feel free to reach out to me by filling out the form below.
                    </p>
                </section>

                <section className="max-w-4xl mx-auto mt-12">
                    <form
                        onSubmit={handleSubmit}
                        className={`p-6 rounded-lg shadow-lg space-y-6 ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-100"
                        }`}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                                    isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-200 text-gray-900 border-gray-300"
                                }`}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                                    isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-200 text-gray-900 border-gray-300"
                                }`}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                                    isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-200 text-gray-900 border-gray-300"
                                }`}
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 ${
                                    isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-200 text-gray-900 border-gray-300"
                                }`}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`w-full px-6 py-3 rounded-lg font-medium transition ${
                                isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-400 hover:bg-blue-500 text-gray-900"
                            }`}
                        >
                            Send Message
                        </button>
                    </form>
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                    <div className="mt-8 text-center space-y-4">
                        <p className="text-lg">Connect with me:</p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://www.linkedin.com/in/sandervanoverloop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:sander.overloop@gmail.com"
                                className="hover:underline"
                            >
                                Email
                            </a>
                            <a
                                href="https://github.com/SanderVanOverloop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
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