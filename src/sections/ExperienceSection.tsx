import { GraduationCap, Award, Calendar } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ExperienceSection = () => {
    const { experience, education } = portfolioData;

    return (
        <section id="experience" className="min-h-[85vh] relative flex items-center overflow-hidden bg-white py-20">
            {/* Split Background - Right Side clearly visible with a light tint */}
            <div className="absolute top-0 left-0 w-[42%] h-full bg-slate-50 hidden lg:block border-r border-slate-200" />
            
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 relative z-10 w-full h-full items-center">
                
                {/* Left Column: Education (Architectural background side) */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-12 lg:pr-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[1px] bg-primary/20" />
                            <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Education</h3>
                        </div>

                        <div className="grid gap-4">
                            {education.slice(0, 2).map((edu, i) => (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-xl space-y-6 group hover:border-primary/20 transition-all shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 bg-slate-50 text-slate-300 group-hover:text-primary transition-all rounded-lg">
                                            <GraduationCap size={20} />
                                        </div>
                                        <span className="text-3xl font-black text-slate-50 group-hover:text-primary/10 transition-colors">0{i+1}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base font-black font-display text-slate-900 uppercase tracking-tight">{edu.degree}</h4>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                            {edu.school}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={12} className="text-primary" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">{edu.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Grade</span>
                                            <span className="text-lg font-black text-slate-900 tracking-tighter">{edu.score}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Professional Journey (Main white side) */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-12 lg:pl-10">
                    <div className="space-y-4">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Technical Evolution</h2>
                        <h3 className="text-4xl md:text-5xl xl:text-6xl font-black font-display text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            Technical <br />
                            <span className="text-primary/10" style={{ WebkitTextStroke: '1px #084d43' }}>Experience</span>
                        </h3>
                    </div>

                    <div className="space-y-10 pl-6 border-l-2 border-slate-100">
                        {experience.map((exp, i) => (
                            <div key={i} className="group relative pl-10">
                                {/* Connector Dot */}
                                <div className="absolute left-[-31px] top-0 w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover:border-primary transition-all shadow-sm" />
                                
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                        <div className="space-y-1">
                                            <h4 className="text-xl md:text-2xl font-black font-display text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">{exp.role}</h4>
                                            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                                                {exp.company} <span className="text-primary opacity-30">•</span> {exp.location || "Remote"}
                                            </div>
                                        </div>
                                        <span className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    
                                    <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl font-light italic">
                                        {exp.description}
                                    </p>

                                    {exp.company === 'Skill mine' && (
                                        <div className="inline-flex items-center gap-2.5 px-3 py-2 bg-primary/5 border border-primary/10 rounded-lg">
                                            <Award size={14} className="text-primary" />
                                            <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Star Performer</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;
