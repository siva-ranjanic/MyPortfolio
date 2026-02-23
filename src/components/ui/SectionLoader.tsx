import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionLoader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md pointer-events-none"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Rotating Logo/Circle */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="w-16 h-16 border-4 border-slate-100 border-t-primary rounded-full shadow-lg shadow-primary/20"
                        />

                        {/* Floating particles */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                                style={{
                                    top: '-30%',
                                    left: `${20 + i * 20}%`,
                                }}
                            />
                        ))}

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
                        >
                            Shifting...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SectionLoader;
