import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import PageTransition from '../components/layout/PageTransition';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'complyment',
            description: 'A professional web application built for client business compliance needs.',
            tags: ['Client Project'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'CLick to cancel',
            description: 'A streamlined service cancellation platform with focus on user retention flows.',
            tags: ['Client Project'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'DMS (Document Management)',
            description: 'Secure system for organizing, securing, and managing business documents.',
            tags: ['Client Project', 'Management'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'QMAZE',
            description: 'A website developed for QMAZE client using basic web technologies.',
            tags: ['HTML', 'CSS', 'Bootstrap'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'HR MANAGEMENT',
            description: 'A comprehensive HR management system built for client management.',
            tags: ['Angular', 'Appsmith', 'MongoDB'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'ANJAC College Portal',
            description: 'An educational institution website built for Ayya Nadar JanakiAmmal College.',
            tags: ['Angular', 'Appsmith', 'MongoDB'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'Authentication System',
            description: 'Academic project focusing on secure user authentication flows.',
            tags: ['Academic Project'],
            demoUrl: '#',
            repoUrl: '#'
        }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 pb-16 px-6 bg-background">
                <div className="container mx-auto max-w-6xl space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Projects</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A selection of projects that demonstrate my passion for building clean, performant, and user-centric web applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                demoUrl={project.demoUrl}
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
