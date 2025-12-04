import React from 'react';
import Button from '../components/ui/Button';
import SkillCard from '../components/ui/SkillCard';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';

const Home: React.FC = () => {
    const skills = [
        { name: 'React', level: 'Advanced' },
        { name: 'Angular', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS3', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Expert' },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col pt-16">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
                    <div className="max-w-4xl space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-primary font-semibold text-sm tracking-wide uppercase">
                                Available for hire
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
                                Frontend Developer
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
                                    Angular & React Specialist
                                </span>
                            </h1>
                        </div>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Crafting pixel-perfect, responsive, and user-friendly interfaces with 2.5 years of professional experience.
                            Turning complex problems into elegant solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Link to="/about">
                                <Button size="lg" className="w-full sm:w-auto">About Me</Button>
                            </Link>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => alert('Contact form coming soon!')}>
                                Contact Me
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-24 px-6 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                A comprehensive toolset for building modern web applications.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {skills.map((skill) => (
                                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
