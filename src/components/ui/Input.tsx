import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    name?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, name, ...props }) => {
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                className={cn(
                    'w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400',
                    'focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    error && 'border-red-400 focus:ring-red-300 focus:border-red-400',
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
