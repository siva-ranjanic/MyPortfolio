import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Home, Briefcase, User, Mail } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

const Navbar: React.FC = () => {
    const { name } = portfolioData;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: 'home', icon: <Home size={18} /> },
        { name: 'Projects', path: 'projects', icon: <Briefcase size={18} /> },
        { name: 'About', path: 'about', icon: <User size={18} /> },
        { name: 'Contact', path: 'contact', icon: <Mail size={18} /> },
        // { name: 'Resume', path: 'resume', icon: <FileText size={18} /> },
    ];

    const handleNavClick = (sectionId: string) => {
        if (sectionId === 'resume') {
            window.location.href = '/resume';
            return;
        }

        // Trigger transition event for Home.tsx
        window.dispatchEvent(new CustomEvent('section-shift', { detail: { sectionId } }));

        // Smooth scroll
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const firstName = name.split(' ')[0];
    const lastName = name.split(' ').slice(1).join(' ');

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-400 print:hidden',
                    scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.06)] py-3'
                        : 'bg-transparent py-5'
                )}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('home');
                        }}
                        className="text-xl font-bold font-display tracking-tight text-slate-900 hover:text-primary transition-colors"
                    >
                        {firstName}
                        {lastName && <span className="text-primary"> {lastName}</span>}
                        <span className="text-primary">.</span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.path)}
                                className={cn(
                                    'px-4 py-2 rounded-none text-sm font-black uppercase tracking-widest transition-all duration-200',
                                    'text-slate-400 hover:text-slate-900'
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                        {/* <Link
                            to="/contact"
                            className="ml-4 px-5 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]"
                        >
                            Hire Me
                        </Link> */}
                    </div>

                    {/* Mobile top-right */}
                    {/* <div className="md:hidden">
                        <Link
                            to="/contact"
                            className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-md shadow-primary/20"
                        >
                            Hire Me
                        </Link>
                    </div> */}
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-100 px-2 py-2 pb-safe flex items-center justify-around shadow-[0_-4px_24px_rgba(0,0,0,0.06)] print:hidden">
                {navLinks.map((link) => {
                    const active = false; // logic will be different for SPA
                    return (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.path)}
                            className={cn(
                                'flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl transition-all duration-200 active:scale-90',
                                active ? 'text-primary' : 'text-slate-400'
                            )}
                        >
                            <div className={cn(
                                'p-1.5 rounded-xl transition-all duration-200',
                                active ? 'bg-primary/10' : ''
                            )}>
                                {link.icon}
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-wider">{link.name}</span>
                        </button>
                    );
                })}
            </nav>
        </>
    );
};

export default Navbar;
