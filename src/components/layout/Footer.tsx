import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-12 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-display font-bold text-slate-900 text-lg">Sivaranjani C</span>
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="https://github.com/siva-ranjanic" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors font-medium text-sm">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/siva-ranjani-b9b489264" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors font-medium text-sm">
                        LinkedIn
                    </a>
                    <a href="https://wa.me/9626587290" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors font-medium text-sm">
                        WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
