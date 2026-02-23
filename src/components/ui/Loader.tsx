import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
    const name = "SIVARANJANI";

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative flex flex-col items-center gap-12">
                {/* Background Text Glow */}
                <motion.div
                    className="absolute -inset-20 bg-primary/5 blur-[100px] rounded-full pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Name Reveal */}
                <div className="flex gap-1 md:gap-3">
                    {name.split('').map((char, i) => (
                        <motion.span
                            key={i}
                            className="text-4xl md:text-7xl font-display font-black tracking-tighter text-slate-900 italic uppercase inline-block"
                            initial={{ opacity: 0, y: 20, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Progress Indicator */}
                <div className="relative w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-primary"
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 0.5
                        }}
                    />
                </div>

                {/* Subtitle */}
                <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="w-8 h-[1px] bg-primary/30" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-400">
                        Frontend Developer
                    </span>
                    <span className="w-8 h-[1px] bg-primary/30" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
