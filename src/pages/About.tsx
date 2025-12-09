import React from 'react';
import PageTransition from '../components/layout/PageTransition';

const About: React.FC = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-24 pb-16 px-6 bg-background">
                <div className="container mx-auto max-w-4xl space-y-16">
                    {/* Bio Section */}
                    <section className="space-y-8 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h1>
                        <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed">
                            <p>
                                Hello! I'm <strong className="text-primary">C. SIVARANJANI</strong>, a Software Developer - Front End with professional experience building modern web applications since June 2023.
                                My journey in web development has been driven by a love for creating intuitive and visually appealing user interfaces.
                            </p>
                            <p>
                                I specialize in the <strong className="text-slate-900">React</strong> and <strong className="text-slate-900">Angular</strong> ecosystems, leveraging <strong className="text-slate-900">TypeScript</strong> to write robust and scalable code.
                                My expertise extends to crafting responsive layouts using <strong className="text-slate-900">Tailwind CSS</strong> and modern CSS techniques, ensuring that applications look great on devices of all sizes.
                            </p>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900 border-b border-slate-200 pb-4">Professional Experience</h2>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-white"></div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-900">Software Developer - Front End</h3>
                                    <p className="text-primary font-semibold">Skill mine, Bangalore | June 2023 - Present</p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Worked on Key Projects:
                                        <br />• <strong>complyment</strong>
                                        <br />• <strong>CLick to cancel</strong>
                                        <br />• <strong>DMS (Document Management System)</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-slate-200 hover:border-slate-300 transition-colors duration-300">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-white"></div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900">Education</h3>

                                    <div className="space-y-1">
                                        <h4 className="text-lg font-semibold text-slate-800">MCA (Master of Computer Application)</h4>
                                        <p className="text-slate-600">Ayya Nadar JanakiAmmal College, Sivakasi | 2021-2023</p>
                                        <p className="text-primary font-medium">Percentage: 82%</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-lg font-semibold text-slate-800">B.Sc (Computer Science)</h4>
                                        <p className="text-slate-600">Ayya Nadar JanakiAmmal College, Sivakasi | 2018-2021</p>
                                        <p className="text-primary font-medium">Percentage: 77%</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-lg font-semibold text-slate-800">HSC</h4>
                                        <p className="text-slate-600">SHNV Hr. Sec. School, Sivakasi | 2017</p>
                                        <p className="text-primary font-medium">Percentage: 81.5%</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-lg font-semibold text-slate-800">SSLC</h4>
                                        <p className="text-slate-600">SHNV Hr. Sec. School | 2015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Philosophy Section */}
                    <section className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">My Philosophy</h2>
                        <blockquote className="text-xl text-slate-600 italic font-medium border-l-4 border-accent pl-6 py-2">
                            "I believe that great software is not just about code; it's about solving problems and creating experiences that delight users.
                            I strive to write clean, maintainable code and stay updated with the latest industry trends."
                        </blockquote>
                    </section>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
