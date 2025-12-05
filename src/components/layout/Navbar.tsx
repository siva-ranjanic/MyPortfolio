import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

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
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
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
            </div>
        </nav>
    );
};

export default Navbar;
