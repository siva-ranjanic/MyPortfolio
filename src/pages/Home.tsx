import { Rocket, Code2, ArrowRight, ExternalLink, Star, Mail, Linkedin, Github, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionLoader from '../components/ui/SectionLoader';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';


import portfolioData from '../data/portfolio.json';

const skillThemes: Record<string, { gradient: string; glow: string; shadow: string; dot: string; bg: string; text: string }> = {
  'React': { gradient: 'from-[#61DAFB] to-[#0081a7]', glow: 'group-hover:shadow-[#61DAFB]/40', shadow: 'shadow-[#61DAFB]/10', dot: 'bg-[#61DAFB]', bg: 'bg-[#61DAFB]/5', text: 'text-[#0081a7]' },
  'TypeScript': { gradient: 'from-[#3178C6] to-[#004b8d]', glow: 'group-hover:shadow-[#3178C6]/40', shadow: 'shadow-[#3178C6]/10', dot: 'bg-[#3178C6]', bg: 'bg-[#3178C6]/5', text: 'text-[#004b8d]' },
  'Tailwind CSS': { gradient: 'from-[#06B6D4] to-[#0891b2]', glow: 'group-hover:shadow-[#06B6D4]/40', shadow: 'shadow-[#06B6D4]/10', dot: 'bg-[#06B6D4]', bg: 'bg-[#06B6D4]/5', text: 'text-[#0891b2]' },
  'Angular': { gradient: 'from-[#DD0031] to-[#a6120d]', glow: 'group-hover:shadow-[#DD0031]/40', shadow: 'shadow-[#DD0031]/10', dot: 'bg-[#DD0031]', bg: 'bg-[#DD0031]/5', text: 'text-[#a6120d]' },
  'NestJS': { gradient: 'from-[#E0234E] to-[#9a1b3a]', glow: 'group-hover:shadow-[#E0234E]/40', shadow: 'shadow-[#E0234E]/10', dot: 'bg-[#E0234E]', bg: 'bg-[#E0234E]/5', text: 'text-[#9a1b3a]' },
  'MongoDB': { gradient: 'from-[#47A248] to-[#3f8a3f]', glow: 'group-hover:shadow-[#47A248]/40', shadow: 'shadow-[#47A248]/10', dot: 'bg-[#47A248]', bg: 'bg-[#47A248]/5', text: 'text-[#3f8a3f]' },
  'Node.js': { gradient: 'from-[#339933] to-[#215721]', glow: 'group-hover:shadow-[#339933]/40', shadow: 'shadow-[#339933]/10', dot: 'bg-[#339933]', bg: 'bg-[#339933]/5', text: 'text-[#215721]' },
  'Express.js': { gradient: 'from-[#000000] to-[#444444]', glow: 'group-hover:shadow-black/20', shadow: 'shadow-black/5', dot: 'bg-black', bg: 'bg-slate-50', text: 'text-black' },
};

const techNodes = [
  { name: 'React', x: '15%', y: '20%', scale: 1.2, delay: 0.1 },
  { name: 'TypeScript', x: '40%', y: '10%', scale: 0.9, delay: 0.3 },
  { name: 'Tailwind CSS', x: '70%', y: '15%', scale: 1.1, delay: 0.5 },
  { name: 'Angular', x: '25%', y: '55%', scale: 0.8, delay: 0.2 },
  { name: 'NestJS', x: '50%', y: '45%', scale: 1.3, delay: 0.4 },
  { name: 'MongoDB', x: '75%', y: '50%', scale: 1.0, delay: 0.6 },
  { name: 'Node.js', x: '35%', y: '80%', scale: 1.1, delay: 0.7 },
  { name: 'Express.js', x: '65%', y: '75%', scale: 0.9, delay: 0.8 },
];

const skillIcons: Record<string, React.ReactNode> = {
  'React': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB"><path d="M24 10.518a1.03 1.03 0 0 0-.256-.697 1.05 1.05 0 0 0-.712-.348c-3.14-.306-6.195-1.296-8.814-2.856a16.892 16.892 0 0 0-4.225-1.898 13.88 13.88 0 0 0-1.87-.417.844.844 0 0 0-.782.35.857.857 0 0 0-.083.821c.54 1.503 1.34 2.895 2.373 4.128-1.554-.875-3.045-1.86-4.463-2.95-.29-.224-.653-.33-1.018-.3a1.442 1.442 0 0 0-.96.483 1.256 1.256 0 0 0-.258 1.155c.42 1.956 1.336 3.763 2.645 5.253a15.22 15.22 0 0 0-3.328 1.256 12.28 12.28 0 0 0-2.348 1.396.86.86 0 0 0-.263.858c.081.28.27.514.526.65a.86.86 0 0 0 .84-.017c2.377-1.378 5.152-2.316 8.02-2.71a17.43 17.43 0 0 0 1.03-.12 11.2 11.2 0 0 1-.363 4.887.855.855 0 0 0 .373.964.84.84 0 0 0 .463.136.85.85 0 0 0 .546-.2c1.782-1.488 3.193-3.342 4.102-5.432a18.3 18.3 0 0 0 5.483 1.15.864.864 0 0 0 .895-.698 1.1 1.1 0 0 0-.214-.88 15.65 15.65 0 0 1-2.972-4.04 16.03 16.03 0 0 0 3.793-1.455 1.026 1.026 0 0 0 .532-1.002zM12 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" /></svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#3178C6"><path d="M22.662 0H1.338A1.338 1.338 0 0 0 0 1.338v21.324A1.338 1.338 0 0 0 1.338 24h21.324A1.338 1.338 0 0 0 24 22.662V1.338A1.338 1.338 0 0 0 22.662 0zM12 18.995h-2.122v-6.903H5.986v-1.802h7.828v1.802h-1.814v6.903zm8.397-2.652c0 2.583-3.66 2.152-3.66 2.652s.87.164 1.132.164c.83 0 1.58-.337 2.147-.947l1.328 1.205c-.93 1.144-230 1.486-3.475 1.486-2.5 0-3.844-1.332-3.844-3.078 0-2.484 3.666-2.096 3.666-2.593 0-.498-.79-.163-1.077-.163-.646 0-1.288.232-1.78.68l-1.328-1.217c.884-1.038 2.378-1.41 3.525-1.41 2.3 0 3.366 1.26 3.366 2.872v-.001z" /></svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>
  ),
  'Angular': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#DD0031"><path d="M11.99 0l-11 3.89 1.7 14.78 9.3 5.33 9.3-5.33 1.7-14.78-11-3.89zm6.06 17.65h-2.12l-1.42-3.82h-4.94l-1.42 3.82H5.94l6-13.65 6.06 13.65zM9.07 11.83h5.86l-2.93-7.14-2.93 7.14z" /></svg>
  ),
  'NestJS': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#E0234E"><path d="M22.5 13.5v-11l-9 13.5h9zm-13.5 9v-11l-9 13.5h9zm13.5-9l-9 13.5h9v-13.5z" /></svg>
  ),
  'MongoDB': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" /></svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#339933"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.047-.139.146-.139.241v10.15c0 .097.055.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.604l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.604v10.15c0 .661-.354 1.275-.924 1.604l-8.794 5.076c-.28.163-.6.247-.925.247z" /></svg>
  ),
  'Express.js': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c-.083-.659-.26-1.104-.26-1.826h.121zm1.114-.223h7.457c-.06-3.476-2.303-5.303-4.688-4.93-2.145.346-3.345 2.064-2.769 4.93z" /></svg>
  ),
};

const Home = () => {
  const { projects, experience, education, socials } = portfolioData;
  const [isShifting, setIsShifting] = useState(false);

  useEffect(() => {
    const handleShift = () => {
      setIsShifting(true);
      setTimeout(() => setIsShifting(false), 800);
    };

    window.addEventListener('section-shift', handleShift);
    return () => window.removeEventListener('section-shift', handleShift);
  }, []);

  // Contact form state
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Replace with your actual service IDs
      // await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY');
      setStatus({ type: 'success', message: '✅ Message sent! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Failed to send. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const }}
        className={className}
      >
        {children}
      </motion.div>
    );
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

      <SectionLoader isVisible={isShifting} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pb-16 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-40"
        >

          {/* ─── Hero ─── */}
          <section id="home" className="relative min-h-[85vh] flex items-center pt-20 pb-20">
            {/* Particles Background */}
            <div className="absolute inset-0 -z-10 bg-white">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-slate-200 rounded-full"
                  initial={{
                    x: Math.random() * 2000,
                    y: Math.random() * 1000,
                    opacity: 0.1
                  }}
                  animate={{
                    y: [null, Math.random() * 1000],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: Math.random() * 20 + 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center px-4 md:px-8 relative">

              {/* Floating Social Pillar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden xl:flex absolute right-[-60px] top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20"
              >
                <div className="w-px h-20 bg-gradient-to-t from-primary to-transparent opacity-20" />
                <div className="flex flex-col gap-4 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  {socials.map((social) => {
                    const Icon = social.platform === 'GitHub' ? Github :
                      social.platform === 'LinkedIn' ? Linkedin :
                        social.platform === 'Email' ? Mail : null;
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white transition-all group"
                        title={social.platform}
                      >
                        <Icon size={18} className="group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
                <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent opacity-20" />
                {/* <div className="[writing-mode:vertical-lr] text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 mt-4">Follow my journey</div> */}
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col items-start relative lg:pl-16 xl:pl-0">
                <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.85] italic uppercase text-slate-900">
                  <span className="text-primary tracking-[-0.05em]">FULL-STACK</span> <br />
                  <span className="text-slate-300">DEVELOPER</span>
                </h1>

                <p className="text-base md:text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
                  Hi! I'm <span className="text-slate-900 font-bold underline decoration-primary/30 decoration-2 underline-offset-4">Sivaranjani</span>.
                  A creative Full Stack Developer with 2.5+ years of experience in building
                  high-performance, scalable, and responsive web solutions.
                </p>

                {/* Mobile/Small Screen Social Links */}
                <div className="flex xl:hidden items-center gap-4 mb-10">
                  {socials.map((social) => {
                    const Icon = social.platform === 'GitHub' ? Github :
                      social.platform === 'LinkedIn' ? Linkedin :
                        social.platform === 'Email' ? Mail : null;
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto mt-4">
                  <Link to="/projects" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                    >
                      View Projects <ArrowRight size={16} />
                    </motion.button>
                  </Link>

                  <Link to="/resume#download" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-10 py-5 border-2 border-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-200"
                    >
                      View Resume <FileText size={16} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* Right Stats */}
              <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-12 lg:items-end relative">
                <div className="flex flex-col gap-8 lg:items-end w-full">
                  {[
                    { value: '2.5+', label: 'Years of Experience' },
                    { value: '6+', label: 'Completed Projects' },
                    { value: '6K+', label: 'Hours Worked' },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-start lg:items-end gap-1 group">
                      <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary/90 group-hover:text-primary transition-colors">{stat.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ─── My Stack Section (Redesigned Galaxy) ─── */}
          <section className="relative py-20 overflow-hidden">
            <motion.div variants={itemVariants} className="text-center space-y-4 mb-20 relative z-10">
              <h3 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">Tech Ecosystem</h3>
              <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
                An interactive visualization of my core technical architecture and specialized skill sets.
              </p>
            </motion.div>

            <div className="relative h-[600px] max-w-6xl mx-auto px-4">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur-[120px] -z-10" />

              {/* Connection Lines (SVGs) */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M 200 150 Q 400 100 600 150 T 800 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                  d="M 150 400 Q 350 350 550 400 T 750 450"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                />
              </svg>

              {techNodes.map((node) => {
                const theme = skillThemes[node.name] || skillThemes['React'];
                return (
                  <motion.div
                    key={node.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: node.scale }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: node.delay,
                      opacity: { duration: 0.5 }
                    }}
                    style={{ left: node.x, top: node.y }}
                    className="absolute"
                  >
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.1, zIndex: 50 }}
                      className="group relative cursor-pointer"
                    >
                      {/* Aura Effect */}
                      <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${theme.gradient}`} />

                      {/* Node Body */}
                      <div className="relative flex flex-col items-center gap-4">
                        <div className={`w-20 h-20 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:border-primary/20`}>
                          <div className="scale-125 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            {skillIcons[node.name] ?? <Code2 size={32} className="text-slate-400" />}
                          </div>
                        </div>
                        <div className="px-5 py-2 rounded-2xl bg-white/40 backdrop-blur-md border border-slate-200/50 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:border-primary/30 group-hover:-translate-y-1">
                          <span className="text-[11px] font-black uppercase tracking-widest text-slate-800 whitespace-nowrap">{node.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ─── Featured Projects ─── */}
          <section id="projects" className="space-y-12 max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-display font-bold">Featured Projects</h2>
                <p className="text-slate-500 text-sm max-w-xl">A selection of my recent work that showcases my technical capabilities.</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => {
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
                        <div className="p-3 rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-white group-hover:bg-primary group-hover:border-transparent transition-all duration-300 shadow-sm">
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
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-primary opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all">
                        View Project <ArrowRight size={16} className="text-primary" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </section>



          {/* ─── About Section (Merged) ─── */}
          <section id="about" className="space-y-32">
            {/* Bio */}
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase">About Me</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                  Crafting Experiences, <span className="text-primary tracking-tight">Not Just Code</span>
                </h2>
                <div className="bg-white/40 backdrop-blur-md rounded-[3rem] border border-slate-200/50 p-8 lg:p-12 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 text-left">
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-lg">
                    <p>
                      Hello! I'm <strong className="text-primary font-bold">C. Sivaranjani</strong>, a Front-End Developer with{' '}
                      <strong className="text-slate-900">2.5+ years</strong> of professional experience building modern web applications.
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
              </div>
            </FadeIn>

            {/* Experience & Education Grid */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-12">
                {/* Experience */}
                <section className="space-y-8">
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Work Experience</h2>
                  <div className="space-y-8">
                    {experience.map((exp, i) => (
                      <div key={i} className="group flex gap-6">
                        <div className="relative flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/10 group-hover:scale-125 transition-transform" />
                          {i !== experience.length - 1 && <div className="w-0.5 flex-1 bg-slate-100 my-2" />}
                        </div>
                        <div className="pb-8 w-full">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{exp.duration}</span>
                          </div>
                          <p className="text-primary text-sm font-bold mb-2">{exp.company} {exp.location && `• ${exp.location}`}</p>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                          {/* Integrated Recognition Highlight */}
                          {exp.company === 'Skill mine' && (
                            <div className="mt-4 p-4 rounded-2xl bg-primary/[0.03] border border-primary/20 relative overflow-hidden group/award">
                              <div className="flex items-start gap-4 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                  <Star size={20} className="fill-amber-400 text-amber-400" />
                                </div>
                                <div>
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="text-[9px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-widest leading-none">NOVEMBER - JAN 2026</span>
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Star Performer</h4>
                                  </div>
                                  <p className="text-slate-500 text-xs leading-relaxed italic">
                                    "Recognized for outstanding technical contributions and consistent high-quality delivery."
                                  </p>
                                </div>
                              </div>
                              <div className="absolute inset-0 border border-primary/10 rounded-2xl pointer-events-none" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Education */}
              <div className="lg:col-span-5 space-y-12">
                <section className="space-y-6">
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Education</h2>
                  <div className="space-y-6">
                    {education.map((edu, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-bold text-slate-900">{edu.degree}</p>
                          <span className="text-[10px] font-bold text-primary">{edu.score}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">{edu.school}</p>
                        <p className="text-[10px] text-slate-400">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>



          {/* ─── Contact Section (Merged) ─── */}
          <section id="contact" className="space-y-16">
            <FadeIn>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight">Get in Touch</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4 text-slate-600 transition-all hover:shadow-md hover:border-primary/20 group">
                      <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail size={20} />
                      </div>
                      <span className="font-medium">ranjani****@gmail.com</span>
                    </div>

                    <a href="https://linkedin.com/in/sivaranjani-c" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4 text-slate-600 transition-all hover:shadow-md hover:border-primary/20 group">
                      <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Linkedin size={20} />
                      </div>
                      <span className="font-medium">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={handleContactSubmit} className="bg-white/40 backdrop-blur-md p-8 rounded-[3rem] border border-slate-200/50 space-y-6 relative overflow-hidden transition-all hover:border-primary/20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  <Input
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      name="message"
                      className="flex min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white/50 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {status && (
                    <div className={`text-sm px-4 py-3 rounded-xl font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </FadeIn>
          </section>

          {/* CTA Section (Original) */}
          <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight italic uppercase tracking-tighter">Want to work <br /> together?</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm">
                  If you have a project that needs some creative refining, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/contact">
                    <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      Say Hello
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div >
  );
};

export default Home;
