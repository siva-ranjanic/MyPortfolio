import React from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

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
                            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400" />
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                                <p>
                                    Hello! I'm <strong className="text-violet-700">C. Sivaranjani</strong>, a Front-End Developer with{' '}
                                    <strong className="text-slate-900">2.5+ years</strong> of professional experience building modern web applications since June 2023.
                                    My journey in web development has been driven by a love for creating intuitive and visually appealing interfaces.
                                </p>
                                <p>
                                    I specialize in the <strong className="text-slate-900">React</strong> and{' '}
                                    <strong className="text-slate-900">Angular</strong> ecosystems, leveraging{' '}
                                    <strong className="text-slate-900">TypeScript</strong> to write robust and scalable code, with responsive layouts using{' '}
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
                                            <div className={`absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-white hidden sm:block ${exp.current ? 'bg-violet-600 shadow-md shadow-violet-300' : 'bg-slate-300'}`} />

                                            <div className="card p-6 md:p-8">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                                    <div>
                                                        <h3 className="text-lg font-display font-bold text-slate-900">{exp.role}</h3>
                                                        <p className="text-violet-700 font-semibold mt-0.5">{exp.company}</p>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 flex-shrink-0">
                                                        {exp.current && (
                                                            <span className="badge badge-primary">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-1.5 animate-pulse" />
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
                                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="mb-4">
                                            <h4 className="font-display font-bold text-slate-900 text-base">{edu.degree}</h4>
                                            <p className="text-sm text-slate-500 mt-1">{edu.school}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{edu.year}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-display font-bold text-violet-600">{edu.score}</span>
                                            <GraduationCap size={20} className="text-slate-200" />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>

                </div>
            </div>
        </PageTransition>
    );
};

export default About;
