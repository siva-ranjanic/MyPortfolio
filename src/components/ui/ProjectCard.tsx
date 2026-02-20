import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    repoUrl?: string;
    className?: string;
    index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    repoUrl,
    className,
    index = 0
}) => {
    const accentColors = [
        '#7c3aed', '#06b6d4', '#059669', '#d97706', '#dc2626', '#9333ea', '#0ea5e9', '#16a34a'
    ];
    const color = accentColors[index % accentColors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            whileHover={{ y: -4 }}
            className={cn(
                'group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden',
                className
            )}
        >
            {/* Top color accent */}
            <div className="h-0.5 w-full flex-shrink-0" style={{ backgroundColor: color }} />

            <div className="flex-1 p-7 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-50 text-slate-500 border border-slate-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-6">
                    {description}
                </p>

                {/* Action */}
                <div className="mt-auto">
                    {repoUrl && repoUrl !== '#' ? (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
                        >
                            View Project
                            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 cursor-not-allowed">
                            Private Project
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
