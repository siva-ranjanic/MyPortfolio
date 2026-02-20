import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowRight, ExternalLink, Code2, Rocket, User } from 'lucide-react';


import portfolioData from '../data/portfolio.json';

const skillThemes: Record<string, { gradient: string; glow: string; shadow: string; dot: string }> = {
  'React': { gradient: 'from-cyan-400 to-blue-500', glow: 'group-hover:shadow-cyan-200/60', shadow: 'shadow-cyan-100', dot: 'bg-cyan-400' },
  'TypeScript': { gradient: 'from-blue-500 to-indigo-600', glow: 'group-hover:shadow-indigo-200/60', shadow: 'shadow-indigo-100', dot: 'bg-indigo-500' },
  'Tailwind CSS': { gradient: 'from-teal-400 to-cyan-500', glow: 'group-hover:shadow-teal-200/60', shadow: 'shadow-teal-100', dot: 'bg-teal-400' },
  'Angular': { gradient: 'from-red-500 to-pink-600', glow: 'group-hover:shadow-red-200/60', shadow: 'shadow-red-100', dot: 'bg-red-500' },
  'NestJS': { gradient: 'from-rose-500 to-red-600', glow: 'group-hover:shadow-rose-200/60', shadow: 'shadow-rose-100', dot: 'bg-rose-500' },
  'MongoDB': { gradient: 'from-green-500 to-emerald-600', glow: 'group-hover:shadow-green-200/60', shadow: 'shadow-green-100', dot: 'bg-green-500' },
  'Node.js': { gradient: 'from-lime-500 to-green-600', glow: 'group-hover:shadow-lime-200/60', shadow: 'shadow-lime-100', dot: 'bg-lime-500' },
  'Express.js': { gradient: 'from-slate-500 to-gray-700', glow: 'group-hover:shadow-gray-200/60', shadow: 'shadow-gray-100', dot: 'bg-slate-500' },
};

const Home = () => {
  const { name, role, bio, skills, socials, projects } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
    Mail: <Mail size={20} />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pb-16 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >

          {/* ─── Hero ─── */}
          <section className="relative pt-16 pb-8 flex flex-col items-center text-center">
            <motion.div variants={itemVariants} className="max-w-4xl">
              <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight">
                Creating <span className="text-gradient">Impactful</span> Digital Experiences.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Hi, I'm <span className="font-bold text-slate-900">{name}</span>. I'm a{' '}
                <span className="text-primary font-semibold">{role}</span>. {bio}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group cursor-pointer">
                  Start a Project
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                      title={social.platform}
                    >
                      {iconMap[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Scrolling skill ticker */}
            <motion.div variants={itemVariants} className="relative w-full overflow-hidden py-4">
              {/* fade edge masks */}
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="flex gap-3 animate-marquee whitespace-nowrap">
                {[...skills, ...skills, ...skills, ...skills].map((skill, i) => {
                  const t = skillThemes[skill] ?? { dot: 'bg-violet-500', gradient: '' };
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border border-slate-200 bg-white text-slate-500 shadow-sm flex-shrink-0"
                    >
                      <span className={`w-2 h-2 rounded-full ${t.dot} flex-shrink-0`} />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* ─── Skills Section ─── */}
          <section className="space-y-12">
            <motion.div variants={itemVariants} className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                Tech Stack
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-3">Core Technologies</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
                I specialize in a wide range of modern technologies to build high-performance applications.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {skills.map((skill) => {
                const t = skillThemes[skill] ?? {
                  gradient: 'from-violet-500 to-purple-600',
                  glow: 'group-hover:shadow-violet-200/60',
                  shadow: 'shadow-violet-100',
                  dot: 'bg-violet-500',
                };
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    className={`group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-md ${t.glow} hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-default`}
                  >
                    {/* Animated shine sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none z-10" />

                    {/* Top gradient accent bar */}
                    <div className={`absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Subtle background blob */}
                    <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${t.gradient} opacity-[0.08] group-hover:opacity-[0.15] blur-xl transition-opacity duration-300 pointer-events-none`} />

                    {/* Gradient icon bubble */}
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <Code2 size={20} className="text-white drop-shadow" />
                    </div>

                    {/* Skill label */}
                    <p className="font-bold text-slate-800 text-sm leading-snug mb-3">{skill}</p>

                    {/* Active badge */}
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${t.dot} animate-pulse`} />
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Active</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* ─── Featured Projects ─── */}
          <section className="space-y-12 max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-3xl font-display font-bold">Featured Projects</h2>
                <p className="text-slate-500 text-sm max-w-xl">A selection of my recent work that showcases my technical capabilities.</p>
              </div>
              <Link to="/projects" className="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                See all projects <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.slice(0, 2).map((project, index) => {
                const firstTech = project.tech[0] || 'React';
                const t = skillThemes[firstTech] || skillThemes['React'];

                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full ${t.glow}`}
                  >
                    {/* Abstract texture/gradient background */}
                    <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${t.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full blur-3xl -mr-32 -mt-32 transition-opacity duration-500`} />
                    <div className={`absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr ${t.gradient} opacity-[0.03] group-hover:opacity-[0.08] rounded-full blur-3xl -ml-24 -mb-24 transition-opacity duration-500`} />

                    {/* Top Accent Line */}
                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${t.gradient} opacity-80`} />

                    {/* Watermark Icon */}
                    <div className={`absolute -right-6 -bottom-6 text-slate-100/50 group-hover:text-slate-100/80 transition-colors duration-500 rotate-12 scale-150 pointer-events-none`}>
                      <Rocket size={180} strokeWidth={0.5} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-slate-50 border border-slate-100 text-slate-500 rounded-full group-hover:bg-white group-hover:text-slate-700 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className={`p-3 rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-white group-hover:bg-gradient-to-r ${t.gradient} group-hover:border-transparent transition-all duration-300 shadow-sm`}>
                          <ExternalLink size={20} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 transition-all">
                        {project.title}
                      </h3>

                      <p className="text-slate-500 leading-relaxed text-sm mb-8 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <span className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 hover:gap-3 transition-all`}>
                        View Project <ArrowRight size={16} className={`text-${t.gradient.split('-')[1]}-500`} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </section>

          {/* ─── CTA / About strip ─── */}
          <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Want to work together?</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  If you have a project that needs some creative refining, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-2xl text-primary">
                      <User size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">2.5+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link to="/contact">
                  <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    Say Hello
                  </button>
                </Link>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default Home;
