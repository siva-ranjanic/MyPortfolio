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

const skillIcons: Record<string, React.ReactNode> = {
  'React': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 0 0 0-4.278zm-5.992 6.394-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM12 2c1.317 0 2.586.108 3.821.333 3.018.604 5.18 1.98 5.18 3.602 0 1.67-2.2 3.105-5.317 3.745l-.46.094-.115-.457a24.207 24.207 0 0 0-1.244-3.492l-.1-.215.103-.214A23.718 23.718 0 0 0 15.04 2.37l.11-.37zM7.857 14.362a22.17 22.17 0 0 1 1.063-2.866A25.11 25.11 0 0 1 7.705 8.204C4.768 8.865 3.103 10.02 3.103 11.277c0 1.256 1.665 2.41 4.602 3.072l.152.013zM12 22c-1.317 0-2.585-.108-3.821-.333-3.018-.604-5.18-1.98-5.18-3.602 0-1.622 2.177-2.998 5.195-3.602a20.04 20.04 0 0 1 3.806-.333c1.303 0 2.57.108 3.821.333 3.018.604 5.18 1.98 5.18 3.602C21 19.687 18.823 21.063 15.805 21.667A20.051 20.051 0 0 1 12 22z" /></svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.579.246-.437.58-.804 1.004-1.1a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" /></svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>
  ),
  'Angular': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.586-5.242L23.32 3.982 11.999.0zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" /></svg>
  ),
  'NestJS': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.985 0C5.364 0 0 5.364 0 11.985S5.364 23.97 11.985 23.97s11.985-5.364 11.985-11.985S18.606 0 11.985 0zM5.81 14.787c-.47-.47-.47-1.232 0-1.702l4.242-4.242 1.702 1.702-4.242 4.242c-.47.47-1.232.47-1.702 0zm8.483 1.702-5.38-5.38 1.703-1.701 5.38 5.38c.47.47.47 1.231 0 1.701-.97.97-2.074.47-1.703 0z" /></svg>
  ),
  'MongoDB': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" /></svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.047-.139.146-.139.241v10.15c0 .097.055.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.604l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.604v10.15c0 .661-.354 1.275-.924 1.604l-8.794 5.076c-.28.163-.6.247-.925.247z" /></svg>
  ),
  'Express.js': (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c-.083-.659-.26-1.104-.26-1.826h.121zm1.114-.223h7.457c-.06-3.476-2.303-5.303-4.688-4.93-2.145.346-3.345 2.064-2.769 4.93z" /></svg>
  ),
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
                      <span className="text-white drop-shadow">
                        {skillIcons[skill] ?? <Code2 size={20} className="text-white" />}
                      </span>
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
