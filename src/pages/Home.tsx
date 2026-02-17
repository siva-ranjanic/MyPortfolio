import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowRight, ExternalLink, Code2, Rocket, User } from 'lucide-react';


import portfolioData from '../data/portfolio.json';

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Typographic Hero Section */}
          <section className="relative pt-16 pb-8 flex flex-col items-center text-center">
            <motion.div variants={itemVariants} className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-primary/5 rounded-full border border-primary/10"
              >
                Available for new opportunities
              </motion.span>

              <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 leading-tight">
                Creating <span className="text-gradient">Impactful</span> Digital Experiences.
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Hi, I'm <span className="font-bold text-slate-900">{name}</span>. I'm a <span className="text-primary font-semibold">{role}</span>. {bio}
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
                      className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                      title={social.platform}
                    >
                      {iconMap[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Abstract Tech Stack Pill Cloud */}
            <motion.div
              variants={itemVariants}
              className="relative w-full overflow-hidden py-10"
            >
              <div className="flex flex-wrap justify-center gap-3 opacity-30">
                {skills.map((skill, i) => (
                  <span key={skill} className={`px-4 py-2 rounded-full border border-slate-300 text-[10px] font-bold tracking-widest uppercase ${i % 2 === 0 ? 'bg-slate-100' : 'bg-white'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>


          {/* Skills Section */}
          <section className="space-y-10">
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Core Technologies</h2>
              <p className="text-slate-600 max-w-xl mx-auto">I specialize in a wide range of modern technologies to build high-performance applications.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 lg:gap-6"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 flex items-center gap-3 group"
                >
                  <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Code2 size={20} />
                  </div>
                  <span className="font-semibold text-slate-700">{skill}</span>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Featured Projects Section */}
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
              {projects.slice(0, 2).map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                      <Rocket size={60} className="text-slate-200" />
                    </div>
                    {/* Project link overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <a href={project.link} className="p-3 bg-white rounded-full text-primary shadow-xl hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[9px] uppercase tracking-wider font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>


          {/* Quick Stats/About Intro */}
          <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Want to work together?</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative refining, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-2xl text-primary">
                      <User size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">2+</div>
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
