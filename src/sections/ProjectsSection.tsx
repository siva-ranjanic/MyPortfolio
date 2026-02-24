import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ProjectsSection = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="min-h-screen relative flex bg-white py-32 overflow-hidden">
            {/* Split Background - Right Side clearly visible with a light tint */}
            <div className="absolute top-0 right-0 w-[42%] h-full bg-slate-50 hidden lg:block border-l border-slate-200" />
            
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 relative z-10 w-full">
                
                {/* Left Column: Technical Header (Sticky for usability) */}
                <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32 h-fit space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-primary" />
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Project Index</h2>
                        </div>
                        <h3 className="text-5xl md:text-6xl xl:text-7xl font-black font-display text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            Selected <br />
                            <span className="text-primary/10" style={{ WebkitTextStroke: '1px #084d43' }}>Works</span>
                        </h3>
                    </div>

                    <p className="text-base text-slate-500 leading-relaxed font-light italic border-l-2 border-primary/20 pl-6 max-w-sm">
                        A curated showcase of technical architecture and high-confidence engineering solutions.
                    </p>

                    <div className="space-y-8 pt-8 border-t border-slate-100">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-black text-slate-900 tracking-tighter">{projects.length}</div>
                                <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mt-1">Deployments</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-slate-900 tracking-tighter">99<span className="text-primary">%</span></div>
                                <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mt-1">Uptime</div>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <button className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-primary hover:gap-6 transition-all group">
                                View Technical Documentation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: High-Density Project Grid (Clean & Usable) */}
                <div className="lg:col-span-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group bg-white border border-slate-200 p-8 flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 relative rounded-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:bg-primary/5 transition-all rounded-lg border border-slate-100">
                                        <Folder size={20} />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-200 group-hover:text-primary/10 transition-colors tracking-widest">NO. 0{index + 1}</span>
                                </div>

                                <div className="space-y-3 flex-1">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest group-hover:text-primary transition-colors leading-tight">
                                        {project.title}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-light line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="text-[8px] font-black uppercase tracking-[0.1em] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-2">
                                    {project.link && project.link !== '#' ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all"
                                        >
                                            View System Architecture <ExternalLink size={12} />
                                        </a>
                                    ) : (
                                        <span className="text-[8px] font-bold uppercase tracking-widest text-slate-300 italic">
                                            Architecture Confidential
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Subtle background text decoration */}
            <div className="absolute top-[5%] right-[2%] text-[10vw] font-black text-slate-50/80 -z-10 leading-none select-none pointer-events-none tracking-tighter uppercase overflow-hidden">
                Archive
            </div>
        </section>
    );
};

export default ProjectsSection;
