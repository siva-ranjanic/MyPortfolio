import { ArrowRight, Github, Linkedin, Mail, Cpu, Layout, Layers } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const HeroSection = () => {
    const { name } = portfolioData;

    const sections = [
        {
            title: "Frontend Architecture",
            skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
            icon: <Layout className="text-primary" size={18} />
        },
        {
            title: "Backend & Cloud",
            skills: ["Node.js", "PostgreSQL", "AWS Lambda", "GraphQL"],
            icon: <Cpu className="text-primary" size={18} />
        },
        {
            title: "DevOps & Tools",
            skills: ["Docker", "Git", "CI/CD", "Vercel"],
            icon: <Layers className="text-primary" size={18} />
        }
    ];

    const socialLinks = [
        { label: "Github", value: "/sivaranjani-c", url: "https://github.com/siva-ranjanic", icon: Github },
        { label: "Linkedin", value: "/in/sivaranjani-c", url: "https://linkedin.com/in/sivaranjani-c", icon: Linkedin },
        { label: "Email", value: "ranjanidream13@gmail.com", url: "mailto:ranjanidream13@gmail.com", icon: Mail },
    ];

    return (
        <section id="home" className="min-h-screen relative flex items-center overflow-hidden bg-white">
            {/* Split Background - Right Side clearly visible with a light tint */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-slate-50 hidden lg:block border-l border-slate-200" />
            
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 relative z-10 w-full h-full mt-8">

                {/* Left Column: Core Branding */}
                <div className="lg:col-span-7 flex flex-col justify-center py-20 pr-12">
                    <div className="space-y-8">

                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black font-display tracking-tighter text-slate-900 leading-[0.9] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Full-Stack <br />
                                <span className="text-primary/10" style={{ WebkitTextStroke: '1px #084d43' }}>Developer</span>
                            </h1>
                        </div>

                        <div className="pl-6 border-l-2 border-primary max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
  <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light italic">
    <span className="text-slate-900 font-bold not-italic">{name}.</span> — Crafting intelligent, scalable web experiences for over 2.5 years. 
    I combine performance-focused engineering, clean architecture principles, and thoughtful UI design to build digital products that solve real-world problems and scale with confidence.
  </p>
</div>

                        <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <button className="px-8 py-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-3 shadow-xl shadow-primary/10 active:scale-95">
                                View Work <ArrowRight size={14} />
                            </button>
                            <button className="px-8 py-4 border border-slate-200 text-slate-900 text-[9px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">
                                Resume
                            </button>
                        </div>
                    </div>

                    {/* Bottom stats */}
                    <div className="flex gap-12 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">2.5<span className="text-primary">+</span></div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Years Exp.</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">15<span className="text-primary">+</span></div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Major Works</div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Information Hierarchy (Clean & Defined) */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-12 lg:pl-16 py-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-primary" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Technical Arsenal</h3>
                        </div>

                        <div className="space-y-8">
                            {sections.map((section) => (
                                <div key={section.title} className="group">
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 bg-white border border-slate-200 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            {section.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                                                {section.title}
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {section.skills.map(skill => (
                                                    <span key={skill} className="text-[8px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-0.5 rounded-sm bg-white">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-primary" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Profiles</h3>
                        </div>
                        
                        <div className="grid gap-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group rounded-xl"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 flex items-center justify-center bg-slate-50 text-slate-400 group-hover:text-primary transition-colors rounded-lg">
                                                <Icon size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-900">{link.label}</div>
                                                <div className="text-[9px] text-slate-400 font-medium truncate max-w-[150px]">{link.value}</div>
                                            </div>
                                        </div>
                                        <ArrowRight size={14} className="text-slate-200 group-hover:text-primary transition-all" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            {/* Subtle background text decoration */}
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 text-[15vw] font-black text-slate-50/50 -z-10 leading-none select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
                {name.split(' ')[0]}
            </div>
        </section>
    );
};

export default HeroSection;
