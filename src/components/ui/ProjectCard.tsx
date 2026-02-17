import React from 'react';
import { cn } from '../../utils/cn';
import Button from './Button';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    repoUrl?: string;
    className?: string;
    index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    imageUrl,
    repoUrl,
    className,
    index = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group flex flex-col bg-white border border-slate-100/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2",
                className
            )}>
            {/* Image Placeholder */}
            <div className="h-48 relative overflow-hidden group-hover:hue-rotate-15 transition-all duration-700">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                    <div className={cn(
                        "w-full h-full flex flex-col items-center justify-center p-6 text-white bg-gradient-to-br transition-all duration-500",
                        // Refined gradients for new theme
                        title.length % 5 === 0 ? "from-indigo-500 to-blue-600" :
                            title.length % 5 === 1 ? "from-violet-500 to-purple-600" :
                                title.length % 5 === 2 ? "from-emerald-500 to-teal-500" :
                                    title.length % 5 === 3 ? "from-blue-500 to-cyan-500" :
                                        "from-rose-500 to-pink-600"
                    )}>
                        <h4 className="text-2xl font-bold text-center opacity-100 drop-shadow-md font-display tracking-tight group-hover:scale-105 transition-transform duration-300">{title}</h4>
                        <div className="mt-3 w-12 h-1 bg-white/40 rounded-full group-hover:w-16 transition-all duration-300" />
                    </div>
                )}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
            </div>

            <div className="flex-1 p-8 flex flex-col relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors font-display tracking-tight">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-[11px] font-bold uppercase tracking-wider border border-slate-200 group-hover:border-primary/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                    {tags.length > 4 && (
                        <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[11px] font-bold border border-slate-200">
                            +{tags.length - 4}
                        </span>
                    )}
                </div>

                <div className="flex gap-4 mt-auto">
                    {repoUrl && (
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="secondary" size="sm" className="w-full bg-slate-100 hover:bg-slate-200 border-transparent">Code</Button>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
