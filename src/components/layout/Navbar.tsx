import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import { Home, Briefcase, User, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
        { name: 'About', path: '/about', icon: <User size={20} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4'
                        : 'bg-transparent py-6'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                        Portfolio<span className="text-primary">.</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-slate-600'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <Button size="sm">Hire Me</Button>
                        </Link>
                    </div>

                    {/* Mobile Top Header (Minimal) */}
                    <div className="md:hidden">
                        <Link to="/contact">
                            <Button size="sm" className="px-4 py-2 text-xs">Hire Me</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-3 pb-6 flex items-center justify-between shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={cn(
                            'flex flex-col items-center gap-1 transition-all duration-300 active:scale-90',
                            location.pathname === link.path
                                ? 'text-primary'
                                : 'text-slate-400'
                        )}
                    >
                        <div className={cn(
                            "p-1 rounded-xl transition-colors",
                            location.pathname === link.path ? "bg-primary/10" : "bg-transparent"
                        )}>
                            {link.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">{link.name}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
};

export default Navbar;

