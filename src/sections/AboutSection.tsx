import { Star, Award, CheckCircle2 } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const AboutSection = () => {
    const { bio, recognition, skills } = portfolioData;

    return (
        <section id="about" className="min-h-screen relative bg-white py-32 flex flex-col justify-center">
            {/* Architectural Background Pattern - matching Hero split */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-slate-50 hidden lg:block border-l border-slate-200" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 relative z-10 w-full">

                {/* Left Column: My Story */}
                <div className="lg:col-span-7 space-y-20 py-12">

                    {/* Explicit About Me Header & Bio */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Identity & Mission</h2>
                            <h3 className="text-5xl md:text-7xl font-black font-display text-slate-900 uppercase leading-[0.9] tracking-tighter">
                                About <br />
                                <span className="text-primary">Myself</span>
                            </h3>
                        </div>
                        <div className="space-y-12">
                            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light italic max-w-2xl border-l-4 border-primary/20 pl-8">
                                {bio}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[1px] bg-primary" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Core Focus</h4>
                                    </div>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                                        Driving efficiency with clean code, scalable infrastructure, and intuitive user interfaces.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[1px] bg-primary" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Philosophy</h4>
                                    </div>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                                        Built on the principle that technical excellence is the result of precision and passion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Skills & Recognition (Tinted) */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-16 py-12 lg:pl-16">

                    {/* Best Skills Section */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-primary" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Best Skills</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {skills.frontend.slice(0, 7).map((skill, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg group hover:border-primary/30 transition-all">
                                    <CheckCircle2 size={16} className="text-primary/30 group-hover:text-primary transition-colors" />
                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Award Area */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-primary" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Awards</h3>
                        </div>

                        {recognition.map((rect, i) => (
                            <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl relative overflow-hidden group shadow-xl shadow-primary/5">
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:rotate-12 transition-transform">
                                    <Award size={120} className="text-primary" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/5 rounded-lg">
                                            <Star size={18} className="text-amber-500 fill-amber-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tighter">{rect.title}</h4>
                                            <p className="text-[8px] font-bold text-primary uppercase tracking-[0.3em]">{rect.company} • {rect.period}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light italic">
                                        "{rect.description}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
