import React from 'react';
import { MessageCircle, Github, Linkedin } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const skills = [
        { name: 'Angular', level: 'Advanced', color: 'from-red-500 to-pink-500' },
        { name: 'React', level: 'Advanced', color: 'from-blue-500 to-cyan-500' },
        { name: 'Node.js', level: 'Advanced', color: 'from-green-500 to-emerald-500' },
        { name: 'TypeScript', level: 'Expert', color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', level: 'Intermediate', color: 'from-green-600 to-teal-600' },
        { name: 'HTML/CSS', level: 'Expert', color: 'from-orange-500 to-red-500' },
        { name: 'REST APIs', level: 'Advanced', color: 'from-purple-500 to-pink-500' },
        { name: 'Git', level: 'Advanced', color: 'from-gray-700 to-gray-900' },
    ];

    const socialLinks = [
        { icon: MessageCircle, href: 'https://wa.me/9626587290', label: 'WhatsApp', color: 'hover:text-green-500' },
        { icon: Github, href: 'https://github.com/siva-ranjanic', label: 'GitHub', color: 'hover:text-gray-900' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/siva-ranjani-b9b489264', label: 'LinkedIn', color: 'hover:text-blue-600' },
    ];

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-background font-sans">
            {/* Floating Social Icons */}
            <div className="fixed right-8 top-[35%] z-50 hidden lg:flex flex-col gap-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`group relative p-3 bg-white rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                        <social.icon className="w-5 h-5 text-slate-500 group-hover:text-current transition-colors" />
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
                            {social.label}
                        </span>
                    </a>
                ))}
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Section */}
            <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20 pt-24">
                <div className="max-w-5xl space-y-12 relative z-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-slate-600 font-semibold text-xs tracking-wide uppercase">
                                Available for hire
                            </span>
                        </div>

                        <div className="space-y-2">
                            <p className="text-2xl md:text-3xl font-medium text-slate-600 font-display">
                                Hi, I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Sivaranjani C</span>
                            </p>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-none font-display">
                                Full Stack Developer
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent mt-4 animate-gradient pb-2">
                                    MERN Stack Specialist
                                </span>
                            </h1>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Building scalable <span className="font-semibold text-slate-900">full-stack applications</span> with refined aesthetics.
                        <span className="block mt-2">Transforming complex problems into elegant digital solutions.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                        <button
                            onClick={() => navigate('/projects')}
                            className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <a
                            href="mailto:ranjanidream13@gmail.com"
                            className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold text-lg shadow-lg shadow-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-primary/50 hover:text-primary flex items-center justify-center">
                            Let's Connect
                        </a>
                    </div>

                    {/* Mobile Social Links */}
                    <div className="flex lg:hidden justify-center gap-6 pt-8">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={`p-3 bg-white rounded-full shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 ${social.color}`}
                            >
                                <social.icon className="w-6 h-6 text-slate-500" />
                            </a>
                        ))}
                    </div>
                </div>


            </section>

            {/* Skills Section */}
            <section className="relative py-32 px-6 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-display">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Arsenal</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                            Leveraging modern technologies to build exceptional web experiences
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-display group-hover:text-primary transition-colors">{skill.name}</h3>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-slate-600 bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                                        {skill.level}
                                    </span>
                                </div>
                                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skill.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                .animate-blob {
                    animation: blob 15s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 5s ease infinite;
                }
                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(12px); opacity: 0; }
                }
                .animate-scroll {
                    animation: scroll 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Home;