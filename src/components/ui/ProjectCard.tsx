import React from 'react';
import { cn } from '../../utils/cn';
import Button from './Button';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    imageUrl,
    demoUrl,
    repoUrl,
    className
}) => {
    return (
        <div className={cn(
            "group flex flex-col bg-surface border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
            className
        )}>
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-100 relative overflow-hidden">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                        <span className="text-4xl font-light">Image</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto">
                    {demoUrl && (
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" className="w-full">Live Demo</Button>
                        </a>
                    )}
                    {repoUrl && (
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="secondary" size="sm" className="w-full">Code</Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
