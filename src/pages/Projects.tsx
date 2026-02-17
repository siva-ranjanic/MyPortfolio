import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import PageTransition from '../components/layout/PageTransition';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'CERSAI - KYC Management System',
            description: 'A high-security Government application submodule for managing KYC records. Integrated a complex multi-level approval hierarchy for deactivation, reactivation, suspension, and revocation of records.',
            tags: ['React', 'Redux', 'Security', 'Government'],
            repoUrl: '#'
        },
        {
            title: 'Sathi Bazar',
            description: 'A robust multi-vendor ecommerce platform similar to Amazon. Features a complex administrative flow with State and National admin roles and seller management.',
            tags: ['Next.js', 'NestJS', 'Ecommerce'],
            repoUrl: '#'
        },
        {
            title: 'Quick Commerce - Medical Platform',
            description: 'A specialized medical ecommerce platform focused on health services. Users can buy various medical tests like blood tests with a streamlined flow.',
            tags: ['React Vite', 'NestJS', 'Medical'],
            repoUrl: '#'
        },
        {
            title: 'complyment',
            description: 'A professional web application built for client business compliance needs.',
            tags: ['Angular', 'NestJS', 'Compliance'],
            repoUrl: '#'
        },
        {
            title: 'DMS (Document Management)',
            description: 'Secure system for organizing, securing, and managing business documents.',
            tags: ['React Vite', 'NestJS', 'Management'],
            repoUrl: '#'
        },
        {
            title: 'Click to cancel',
            description: 'A plain JavaScript bundle that can integrate into any project for streamlined service cancellation flows.',
            tags: ['JavaScript', 'Bundle', 'Retention'],
            repoUrl: '#'
        },
        {
            title: 'HR MANAGEMENT',
            description: 'A comprehensive HR management system built for client management.',
            tags: ['Angular', 'Appsmith', 'MongoDB'],
            repoUrl: '#'
        },
        {
            title: 'ANJAC College Portal',
            description: 'An educational institution website built for Ayya Nadar JanakiAmmal College.',
            tags: ['Angular', 'MongoDB', 'Education'],
            repoUrl: '#'
        },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-16 px-6 bg-background font-sans relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none animate-float"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none animate-float" style={{ animationDelay: '3s' }}></div>

                <div className="container mx-auto max-w-6xl space-y-12 relative z-10">
                    <div className="text-center space-y-4 animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-display drop-shadow-sm">Featured Projects</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            A selection of projects that demonstrate my passion for <span className="text-primary font-medium">building clean, performant</span>, and user-centric web applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                index={index}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                repoUrl={project.repoUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Projects;
