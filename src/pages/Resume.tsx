import React from 'react';
import { motion } from 'framer-motion';
import { Printer, ArrowLeft, Mail, Linkedin, MapPin, Award, Code2, Sparkles, Binary, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const Resume: React.FC = () => {
    const { name, role, bio, experience, education, projects, certifications, languages, skills, recognition } = portfolioData as any;

    const handlePrint = () => {
        window.print();
    };

    React.useEffect(() => {
        if (window.location.hash === '#download') {
            const timer = setTimeout(() => {
                handlePrint();
                window.history.replaceState(null, '', window.location.pathname);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] pt-32 pb-20 px-4 print:pt-0 print:pb-0 print:px-0 print:bg-white text-slate-800 font-sans selection:bg-primary/10">
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
                
                @media print {
                    @page { 
                        margin: 0; 
                        size: A4;
                    }
                    html, body {
                        height: auto;
                        margin: 0 !important; 
                        padding: 0 !important;
                        overflow: visible;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        font-family: 'Outfit', sans-serif !important;
                    }
                    .resume-container {
                        box-shadow: none !important;
                        border: none !important;
                        border-radius: 0 !important;
                        width: 210mm;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .resume-page {
                        height: 297mm;
                        padding: 15mm 20mm 28mm 20mm !important;
                        page-break-after: always;
                        position: relative;
                        background: white !important;
                        display: block;
                        box-sizing: border-box;
                    }
                    .resume-page:last-child {
                        page-break-after: avoid;
                    }
                    .print-hidden { display: none !important; }
                    .page-footer {
                        position: absolute;
                        bottom: 8mm;
                        left: 20mm;
                        right: 20mm;
                        border-top: 1px solid #f1f5f9;
                        padding-top: 4mm;
                        display: flex;
                        justify-content: space-between;
                        font-size: 7pt;
                        color: #94a3b8;
                    }
                }

                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}} />

            <div className="max-w-[850px] mx-auto print:max-w-none">
                {/* Controls - Premium Web View */}
                <div className="flex justify-between items-center mb-12 print:hidden px-4">
                    <Link to="/" className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-all font-bold text-xs uppercase tracking-[0.2em]">
                        <div className="p-2 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all">
                            <ArrowLeft size={16} />
                        </div>
                        Back to Portfolio
                    </Link>
                    <button
                        onClick={handlePrint}
                        className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-primary transition-all shadow-xl hover:shadow-primary/40 active:scale-95"
                    >
                        <Printer size={18} /> Download Premium PDF
                    </button>
                </div>

                {/* Resume Document */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="resume-container space-y-10 print:space-y-0 font-outfit"
                >
                    {/* PAGE 1 */}
                    <div className="bg-white shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-100 rounded-[2rem] print:rounded-none resume-page p-12 md:p-20">
                        {/* Elegant Header */}
                        <div className="relative mb-12 print:mb-10">
                            <div className="flex flex-row justify-between items-center gap-8">
                                <div className="space-y-1">
                                    <h1 className="text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
                                        {name.split(' ')[0]} <span className="text-primary">{name.split(' ')[1]}</span>
                                    </h1>
                                    <div className="flex items-center gap-4">
                                        <div className="h-[2px] w-8 bg-primary/30" />
                                        <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px]">
                                            Professional {role}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    <div className="flex items-center justify-end gap-3 group">
                                        <span className="group-hover:text-primary transition-colors">ranjanidream13@gmail.com</span>
                                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all"><Mail size={14} /></div>
                                    </div>
                                    <div className="flex items-center justify-end gap-3 group">
                                        <span className="group-hover:text-primary transition-colors">linkedin.com/in/sivaranjani-c</span>
                                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all"><Linkedin size={14} /></div>
                                    </div>
                                    <div className="flex items-center justify-end gap-3 group">
                                        <span className="group-hover:text-primary transition-colors">Sivakasi, Tamil Nadu, India</span>
                                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all"><MapPin size={14} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-16 print:gap-12">
                            {/* Main Content Area */}
                            <div className="col-span-12 md:col-span-8 print:col-span-8 space-y-12 print:space-y-8">
                                {/* Profile */}
                                <section>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary"><Sparkles size={18} /></div>
                                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900">Executive Summary</h2>
                                    </div>
                                    <p className="text-slate-600 text-[14px] leading-[1.8] font-medium text-justify">
                                        {bio} Specialized in modern high-performance web architecture and user-centric systems. Proven track record in delivering scalable enterprise solutions with technical precision and creative problem-solving.
                                    </p>
                                </section>

                                {/* Work Experience */}
                                <section>
                                    <div className="flex items-center gap-4 mb-10 print:mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary"><Binary size={20} /></div>
                                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900">Professional Experience</h2>
                                    </div>
                                    <div className="space-y-12 print:space-y-8">
                                        {experience.map((exp: any, i: number) => (
                                            <div key={i} className="relative pl-8 print:pl-6 border-l-2 border-slate-50 hover:border-primary/20 transition-colors">
                                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-primary group-hover:bg-primary transition-all" />
                                                <div className="flex justify-between items-baseline mb-2">
                                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{exp.role}</h3>
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{exp.duration}</span>
                                                </div>
                                                <p className="text-primary font-bold text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    {exp.company} <span className="w-1 h-1 rounded-full bg-primary/30" /> {exp.location || 'Remote'}
                                                </p>
                                                <p className="text-slate-600 text-[13px] leading-relaxed font-medium mb-4">
                                                    {exp.description} Leading technical initiatives to optimize delivery pipelines and user interaction patterns across cross-platform environments.
                                                </p>

                                                {/* Integrated Recognition Highlight */}
                                                {exp.company === 'Skill mine' && recognition && (
                                                    <div className="mt-6 print:mt-4 p-5 print:p-4 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 relative overflow-hidden group max-w-[500px]">
                                                        <div className="flex items-center gap-5 relative z-10">
                                                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                                                <Star size={24} className="fill-[#FFD700] text-[#FFD700]" />
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-1">
                                                                    <span className="text-[9px] font-black bg-white/20 px-3 py-1 rounded-full uppercase tracking-[0.2em]">{recognition.period}</span>
                                                                    <h4 className="text-[13px] font-black uppercase tracking-[0.1em]">{recognition.title}</h4>
                                                                </div>
                                                                <p className="text-white/90 text-[11px] font-medium leading-relaxed italic">
                                                                    "Recognized for outstanding technical contributions and consistent high-quality delivery."
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* Decorative background element */}
                                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                            <Star size={60} className="fill-white" />
                                                        </div>
                                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Area */}
                            <div className="col-span-12 md:col-span-4 print:col-span-4 space-y-14">
                                {/* Stack / Expertise */}
                                <section>
                                    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 mb-8 border-b border-primary/20 pb-4">Core Ecosystem</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill: string) => (
                                            <div key={skill} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100/50 flex items-center justify-between group hover:bg-primary/5 hover:border-primary/10 transition-all cursor-default">
                                                <span className="text-[10px] font-bold text-slate-600 group-hover:text-primary transition-colors tracking-widest uppercase">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Academic */}
                                <section>
                                    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 mb-8 print:mb-4 border-b border-primary/20 pb-4">Academic Background</h2>
                                    <div className="space-y-8 print:space-y-4">
                                        {education.map((edu: any, i: number) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase">
                                                    <span>{edu.year}</span>
                                                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded italic font-black">{edu.score}</span>
                                                </div>
                                                <h4 className="text-[13px] font-bold text-slate-800 tracking-tight leading-snug">{edu.degree}</h4>
                                                <p className="text-slate-500 text-[10px] font-semibold tracking-wide border-l border-slate-200 pl-3">{edu.school}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Page Footer Print */}
                        <div className="page-footer hidden print:flex">
                            <div>{name} — Confidential Candidate Profile</div>
                            <div>Page 1 / 2</div>
                        </div>
                    </div>

                    {/* PAGE 2 */}
                    <div className="bg-white shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-100 rounded-[2rem] print:rounded-none resume-page p-12 md:p-20">
                        <section className="mb-12 print:mb-8">
                            <div className="flex items-center gap-4 mb-10 print:mb-6">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary"><Code2 size={20} /></div>
                                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900">Project Ecosystem</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-12 gap-y-12 print:gap-x-8">
                                {projects.map((project: any, i: number) => (
                                    <div key={i} className="group relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-base font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h4>
                                            <div className="flex gap-2">
                                                {project.tech.slice(0, 2).map((t: string) => (
                                                    <span key={t} className="text-[7px] font-black text-slate-400 group-hover:text-primary/50 transition-colors uppercase tracking-[0.2em]">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-[13px] leading-relaxed font-medium mb-4 text-justify">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[9px] font-bold text-slate-400 capitalize italic">Built with:</span>
                                            {project.tech.map((t: string) => (
                                                <span key={t} className="text-[9px] font-bold text-slate-500">{t} ·</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="grid grid-cols-12 gap-16">
                            <div className="col-span-12 md:col-span-7">
                                <section>
                                    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 mb-10 border-b border-primary/20 pb-4">Professional Certifications</h2>
                                    <div className="space-y-6">
                                        {certifications.map((cert: any, i: number) => (
                                            <div key={i} className="flex gap-6 items-start group">
                                                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                    <Award size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[14px] font-bold text-slate-900 tracking-tight">{cert.title}</h4>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{cert.issuer} Academy • {cert.year}</p>
                                                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">Validation of expert-level technical proficiency and architectural design capabilities.</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="col-span-12 md:col-span-5">
                                <section>
                                    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 mb-10 print:mb-6 border-b border-primary/20 pb-4">Linguistic Proficiency</h2>
                                    <div className="space-y-3">
                                        {languages.map((lang: string) => (
                                            <div key={lang} className="p-5 print:p-3 rounded-2xl border border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">{lang.split(' (')[0]}</span>
                                                </div>
                                                <span className="text-[9px] font-black text-primary uppercase italic opacity-60 tracking-widest">{lang.split(' (')[1]?.replace(')', '')}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <div className="mt-20 print:mt-4 p-8 print:p-4 rounded-[2rem] bg-slate-50 border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 print:mb-1">Declarative Statement</p>
                                    <p className="text-slate-500 text-[11px] print:text-[10px] font-medium leading-[1.8] italic">
                                        Active professional ready for global mobility and immediate contribution to high-impact technical teams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Page Footer Print */}
                        <div className="page-footer hidden print:flex">
                            <div>Elite Developer Profile — {name}</div>
                            <div>Page 2 / 2</div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center print:hidden px-4">
                    <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6">
                        <div className="w-12 h-px bg-slate-200" /> Designer Component System <div className="w-12 h-px bg-slate-200" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
