import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface SkillCardProps {
    name: string;
    level?: string;
    className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cn(
                "group flex flex-col items-center justify-center p-6 bg-surface border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
                className
            )}>
            <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-primary">{name.charAt(0)}</span>
            </div>
            <span className="text-lg font-semibold text-slate-800">{name}</span>
            {level && <span className="text-sm text-slate-500 mt-1 font-medium">{level}</span>}
        </motion.div>
    );
};

export default SkillCard;
