import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import PageTransition from '../components/layout/PageTransition';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'E-commerce Dashboard',
            description: 'A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization and dark mode.',
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task manager with drag-and-drop functionality, user authentication, and team workspaces.',
            tags: ['Angular', 'RxJS', 'Firebase', 'Material UI'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'Weather Forecast',
            description: 'A beautiful weather application providing 7-day forecasts, location detection, and dynamic background themes based on weather conditions.',
            tags: ['React', 'OpenWeather API', 'Styled Components'],
            demoUrl: '#',
            repoUrl: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website (this one!) designed to showcase skills and projects with a premium light theme.',
            tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
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
    );
};

export default Projects;
