import React from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { Briefcase, GraduationCap, MapPin, Calendar, Code2, ArrowRight, Star, Award } from 'lucide-react';

import angularCert from '../assets/certificates/angular.pdf';
import reactCert from '../assets/certificates/react .pdf';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const experiences = [
    {
        role: 'Software Developer — Front End',
        company: 'Skill mine',
        location: 'Sivakasi',
        duration: 'June 2023 – Present',
        type: 'Full-time',
        description: 'Successfully delivered multiple web applications, ensuring high performance and responsive design across all devices.',
        current: true,
    },
    {
        role: 'Software Developer Intern',
        company: 'Cooldreamers',
        location: '',
        duration: 'Jan 2023 – June 2023',
        type: 'Internship',
        description: 'Gained hands-on experience in full-stack development and collaborated with senior developers on key modules.',
        current: false,
    },
];

const education = [
    { degree: 'MCA', school: 'Ayya Nadar JanakiAmmal College', year: '2021–2023', score: '82%' },
    { degree: 'B.Sc (Computer Science)', school: 'Ayya Nadar JanakiAmmal College', year: '2018–2021', score: '77%' },
    { degree: '12th Grade (HSC)', school: 'SHNV Hr Sec School, Sivakasi', year: '2017–2018', score: '82%' },
];

const About: React.FC = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background pt-28 pb-28 md:pb-16 px-6">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* ─── Bio ─── */}
                    <FadeIn>
                        <div className="text-center mb-12">
                            <p className="section-label justify-center mb-2">About Me</p>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                                Crafting Experiences, <span className="text-gradient">Not Just Code</span>
                            </h1>
                        </div>
                        <div className="card p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary to-emerald-400" />
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                                <p>
                                    Hello! I'm <strong className="text-primary font-bold">C. Sivaranjani</strong>, a Front-End Developer with{' '}
                                    <strong className="text-slate-900">2.5+ years</strong> of professional experience building modern web applications since June 2023.
                                    My journey in web development has been driven by a love for creating intuitive and visually appealing interfaces.
                                </p>
                                <p>
                                    I specialize in the <strong className="text-slate-900">React</strong> and{' '}
                                    <strong className="text-slate-900">Angular</strong> ecosystems, leveraging{' '}
                                    <strong className="text-primary font-bold">TypeScript</strong> to write robust and scalable code, with responsive layouts using{' '}
                                    <strong className="text-slate-900">Tailwind CSS</strong>.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* ─── Experience Timeline ─── */}
                    <FadeIn delay={0.1}>
                        <p className="section-label mb-6">
                            <Briefcase size={12} />
                            Professional Experience
                        </p>
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Work History</h2>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

                            <div className="space-y-6">
                                {experiences.map((exp, i) => (
                                    <FadeIn key={i} delay={i * 0.1}>
                                        <div className="relative sm:pl-14">
                                            {/* Dot */}
                                            <div className={`absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-white hidden sm:block ${exp.current ? 'bg-primary shadow-md shadow-primary/30' : 'bg-slate-300'}`} />

                                            <div className="card p-6 md:p-8">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                                    <div>
                                                        <h3 className="text-lg font-display font-bold text-slate-900">{exp.role}</h3>
                                                        <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 flex-shrink-0">
                                                        {exp.current && (
                                                            <span className="badge badge-primary">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-1.5 animate-pulse" />
                                                                Current
                                                            </span>
                                                        )}
                                                        <span className="badge badge-muted">
                                                            <Calendar size={10} className="mr-1" />
                                                            {exp.duration}
                                                        </span>
                                                        {exp.location && (
                                                            <span className="badge badge-muted">
                                                                <MapPin size={10} className="mr-1" />
                                                                {exp.location}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* ─── Education ─── */}
                    <FadeIn delay={0.1}>
                        <p className="section-label mb-6">
                            <GraduationCap size={12} />
                            Education
                        </p>
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Academic Background</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {education.map((edu, i) => (
                                <FadeIn key={i} delay={i * 0.08}>
                                    <div className="card p-6 relative overflow-hidden group card-hover">
                                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary/40 to-emerald-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="mb-4">
                                            <h4 className="font-display font-bold text-slate-900 text-base">{edu.degree}</h4>
                                            <p className="text-sm text-slate-500 mt-1">{edu.school}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{edu.year}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-display font-bold text-primary">{edu.score}</span>
                                            <GraduationCap size={20} className="text-slate-200" />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>

                    {/* ─── Professional Certificates ─── */}
                    <FadeIn delay={0.2}>
                        <div className="space-y-10">
                            <div className="text-center">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-4">
                                    Verify My Skills
                                </span>
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-3">Certifications</h2>
                                <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                                    Technical specializations validated by global learning platforms.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-6">
                                {[
                                    { name: 'Angular Complete Guide', provider: 'Udemy', color: 'indigo', file: angularCert },
                                    { name: 'React - The Complete Guide', provider: 'Udemy', color: 'blue', file: reactCert },
                                    { name: 'Node.js, Express, MongoDB', provider: 'Udemy', color: 'green', file: '#' },
                                ].map((cert, i) => (
                                    <div key={i} className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                        <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                                            <Code2 size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm mb-1">{cert.name}</h3>
                                        <p className="text-xs text-slate-400 mb-6">{cert.provider}</p>
                                        <a
                                            href={cert.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-[10px] font-black text-primary hover:gap-3 transition-all uppercase tracking-widest"
                                        >
                                            DOWNLOAD PDF <ArrowRight size={14} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* ─── Rewards & Recognition ─── */}
                    <FadeIn delay={0.3}>
                        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="mb-10 text-left">
                                    <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Rewards & Recognition</h2>
                                    <p className="text-slate-500 text-sm max-w-xl">Milestones marking excellence in delivery and technical leadership.</p>
                                </div>

                                <div className="flex flex-col gap-6">

                                    {/* Star Performer Card */}
                                    <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200/70 rounded-[2.5rem] p-7 md:p-9 overflow-hidden group hover:shadow-2xl hover:shadow-amber-200/40 transition-all duration-500">
                                        <div className="absolute -top-14 -right-14 w-48 h-48 bg-amber-300/20 rounded-full blur-3xl group-hover:bg-amber-300/35 transition-all duration-700" />
                                        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-yellow-300/20 rounded-full blur-3xl group-hover:bg-yellow-300/35 transition-all duration-700" />
                                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-t-[2.5rem]" />

                                        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg shadow-amber-300/40">
                                                <Star size={24} className="text-white fill-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-700 text-[10px] font-black uppercase tracking-widest">
                                                        <Award size={10} /> Q1 · Jan 2026
                                                    </span>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">NV · Skill mine</span>
                                                </div>
                                                <h3 className="text-lg font-display font-black text-slate-900 mb-1">⭐ Star Performer</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                                    Awarded <span className="font-bold text-amber-700">Star Performer of the Quarter</span> (NV · Jan 2026) in recognition of outstanding contributions, consistent high-quality delivery, and dedication to team success.
                                                </p>
                                            </div>
                                            <div className="hidden lg:flex flex-col items-end gap-1 opacity-25 group-hover:opacity-50 transition-opacity duration-500">
                                                {[18, 12, 8].map((s, i) => (
                                                    <Star key={i} size={s} className="text-amber-400 fill-amber-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Impact Player Card */}
                                    {/* <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
                                        <div className="p-4 rounded-2xl bg-primary/5 text-primary">
                                            <Rocket size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-slate-900 text-base mb-1">Impact Player Award</h3>
                                            <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Skill mine</p>
                                            <p className="text-xs text-slate-500 leading-relaxed">Recognized for exceptional contribution to the CERSAI project delivery.</p>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </PageTransition>
    );
};

export default About;
