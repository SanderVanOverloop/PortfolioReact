'use client';

import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Particles from '../../../reactbits/Particles/Particles';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const notify = () =>
        toast.success('🙌 Thank you for contacting me', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send('service_o85moqt', 'template_n6ftd9r', formData, 'jwUZShhzhjO-FXaiD')
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
        <div className="relative min-h-screen overflow-hidden">
            {/* 🟣 Particles Background */}
            <div className="absolute inset-0 -z-10">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1}
                    alphaParticles={false}
                    sizeRandomness={1}
                    cameraDistance={20}
                    disableRotation={false}
                    className="w-full h-full"
                />
            </div>

            {/* 🌐 Content */}
            <div className="relative z-10">
                <Navbar />
                <main className="min-h-screen px-6 py-12">
                    <section className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Contact Me</h1>
                        <p className="text-lg md:text-xl leading-relaxed text-white">
                            Feel free to reach out to me by filling out the form below.
                        </p>
                    </section>

                    <section className="max-w-4xl mx-auto mt-12">
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 rounded-lg shadow-lg space-y-6 bg-white bg-opacity-80 backdrop-blur-md"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-900 border-gray-300"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-900 border-gray-300"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-900 border-gray-300"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-900 border-gray-300"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 rounded-lg font-medium transition bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={notify}
                            >
                                Send Message
                            </button>
                        </form>

                        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

                        <div className="mt-8 text-center space-y-4">
                            <p className="text-lg font-bold text-white">Connect with me:</p>
                            <div className="flex justify-center space-x-8 text-4xl text-white">
                                <a
                                    href="https://www.linkedin.com/in/sandervanoverloop/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="mailto:sander.overloop@gmail.com"
                                    className="hover:text-red-400 transition"
                                    aria-label="Email"
                                >
                                    <FaEnvelope />
                                </a>

                                <a
                                    href="https://github.com/SanderVanOverloop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 transition"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </section>

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </main>
            </div>
        </div>
    );
}
