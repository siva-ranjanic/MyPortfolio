import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Home, Briefcase, User, Mail, Code2 } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

const Navbar: React.FC = () => {
    const { name } = portfolioData;
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);

            // Track active section
            const sections = ['contact', 'about', 'projects', 'home'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Work', path: 'projects', icon: <Briefcase size={18} /> },
        { name: 'Experience', path: 'about', icon: <User size={18} /> },
        { name: 'Skills', path: 'skills', icon: <Home size={18} /> },
        { name: 'Contact', path: 'contact', icon: <Mail size={18} /> },
    ];

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-400 print:hidden',
                    scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3'
                        : 'bg-transparent py-5'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <button
                        onClick={() => handleNavClick('home')}
                        className="flex items-center gap-3 text-xl font-black font-display tracking-tight text-primary transition-colors group"
                    >
                        <div className="bg-primary text-white p-1.5 rounded-md group-hover:scale-110 transition-transform">
                            <Code2 size={20} />
                        </div>
                        <span className="text-slate-900 uppercase tracking-tighter">
                            {name}
                        </span>
                    </button>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.path)}
                                className={cn(
                                    'text-xs font-bold uppercase tracking-widest transition-all duration-200',
                                    activeSection === link.path
                                        ? 'text-primary'
                                        : 'text-slate-600 hover:text-slate-900'
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="bg-primary text-white px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-md shadow-primary/10"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-xl rounded-full px-6 py-3 flex items-center gap-4 shadow-2xl print:hidden border border-white/10">
                {navLinks.map((link) => {
                    const active = activeSection === link.path;
                    return (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.path)}
                            aria-label={`Navigate to ${link.name}`}
                            className={cn(
                                'flex items-center justify-center p-2 rounded-full transition-all duration-200 active:scale-90',
                                active ? 'bg-primary text-white' : 'text-slate-400'
                            )}
                        >
                            {link.icon}
                        </button>
                    );
                })}
            </nav>
        </>
    );
};

export default Navbar;

