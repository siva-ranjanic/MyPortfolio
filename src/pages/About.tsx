import React from 'react';
import PageTransition from '../components/layout/PageTransition';

const About: React.FC = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-16 px-6 bg-background">
                <div className="container mx-auto max-w-4xl space-y-16">
                    {/* Bio Section */}
                    <section className="space-y-8 text-center md:text-left animate-slide-up">
                        <div className="relative inline-block">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 drop-shadow-sm font-display">About Me</h1>
                            <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-primary/30 rounded-full"></div>
                        </div>
                        <div className="glass p-8 rounded-2xl border-white/50 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
                            <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed relative z-10">
                                <p>
                                    Hello! I'm <strong className="text-primary">C. SIVARANJANI</strong>, a Software Developer - Front End with <strong className="text-primary">2.5+ years</strong> of professional experience building modern web applications since June 2023.
                                    My journey in web development has been driven by a love for creating intuitive and visually appealing user interfaces.
                                </p>
                                <p>
                                    I specialize in the <strong className="text-slate-900">React</strong> and <strong className="text-slate-900">Angular</strong> ecosystems, leveraging <strong className="text-slate-900">TypeScript</strong> to write robust and scalable code.
                                    My expertise extends to crafting responsive layouts using <strong className="text-slate-900">Tailwind CSS</strong> and modern CSS techniques, ensuring that applications look great on devices of all sizes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                        <h2 className="text-3xl font-bold text-slate-900 pb-2 font-display">Professional Experience</h2>

                        <div className="space-y-6">
                            <div className="glass hover:bg-white/80 transition-colors duration-300 p-8 rounded-2xl border border-white/60 shadow-sm relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-accent rounded-l-2xl"></div>
                                <div className="space-y-3">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <h3 className="text-2xl font-bold text-slate-800">Software Developer - Front End</h3>
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full w-fit">June 2023 - Present</span>
                                    </div>
                                    <p className="text-slate-700 font-semibold text-lg">Skill mine, Sivakasi</p>
                                    <div className="text-slate-600 leading-relaxed pt-2">
                                        <p>Successfully delivered multiple web applications, ensuring high performance and responsive design across all devices.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass hover:bg-white/80 transition-colors duration-300 p-8 rounded-2xl border border-white/60 shadow-sm relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-l-2xl"></div>
                                <div className="space-y-3">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <h3 className="text-2xl font-bold text-slate-800">Software Developer Intern</h3>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full w-fit">Jan 2023 - June 2023</span>
                                    </div>
                                    <p className="text-slate-700 font-semibold text-lg">Cooldreamers</p>
                                    <p className="text-slate-600 leading-relaxed pt-2">
                                        Gained hands-on experience in full-stack development and collaborated with senior developers on key modules.
                                    </p>
                                </div>
                            </div>

                            <div className="glass hover:bg-white/80 transition-colors duration-300 p-8 rounded-2xl border border-white/60 shadow-sm relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-slate-300 to-slate-400 rounded-l-2xl"></div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-slate-800">Education</h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-slate-800">MCA</h4>
                                            <p className="text-slate-600 text-sm">Ayya Nadar JanakiAmmal College</p>
                                            <p className="text-slate-400 text-xs">2021-2023</p>
                                            <p className="text-primary font-bold mt-1">82%</p>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-slate-800">B.Sc (Computer Science)</h4>
                                            <p className="text-slate-600 text-sm">Ayya Nadar JanakiAmmal College</p>
                                            <p className="text-slate-400 text-xs">2018-2021</p>
                                            <p className="text-primary font-bold mt-1">77%</p>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-slate-800">12th Grade (HSC)</h4>
                                            <p className="text-slate-600 text-sm">SHNV Hr Sec School, Sivakasi</p>
                                            <p className="text-slate-400 text-xs">2017-2018</p>
                                            <p className="text-primary font-bold mt-1">82%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </PageTransition>
    );
};

export default About;
