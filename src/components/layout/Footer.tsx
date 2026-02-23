import React from 'react';
import portfolioData from '../../data/portfolio.json';

const Footer: React.FC = () => {
    const { name, socials } = portfolioData;

    return (
        <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-12 mt-auto print:hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-display font-bold text-slate-900 text-lg">{name}</span>
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8">
                    {socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary transition-colors font-medium text-sm"
                        >
                            {social.platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

