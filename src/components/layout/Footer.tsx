import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="https://github.com/siva-ranjanic" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/siva-ranjani-b9b489264" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://wa.me/9626587290" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
