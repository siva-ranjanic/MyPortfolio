import React from 'react';
import { Code2 } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const skillThemes: Record<string, { gradient: string }> = {
  React: { gradient: 'from-[#61DAFB] to-[#0081a7]' },
  Remix: { gradient: 'from-[#000000] to-[#E82424]' },
  Redux: { gradient: 'from-[#764ABC] to-[#543b8a]' },
  TypeScript: { gradient: 'from-[#3178C6] to-[#004b8d]' },
  'Tailwind CSS': { gradient: 'from-[#06B6D4] to-[#0891b2]' },
  'Next.js': { gradient: 'from-[#000000] to-[#444444]' },
  Angular: { gradient: 'from-[#DD0031] to-[#a6120d]' },
  'Node.js': { gradient: 'from-[#339933] to-[#215721]' },
  'Express.js': { gradient: 'from-[#000000] to-[#444444]' },
  NestJS: { gradient: 'from-[#E0234E] to-[#9a1b3a]' },
  MongoDB: { gradient: 'from-[#47A248] to-[#3f8a3f]' },
  Cloudflare: { gradient: 'from-[#F38020] to-[#faad3f]' },
  Vercel: { gradient: 'from-[#000000] to-[#444444]' },
  Git: { gradient: 'from-[#F05032] to-[#c13017]' },
};

const skillIcons: Record<string, React.ReactNode> = {
  React: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB"><path d="M24 10.518a1.03 1.03 0 0 0-.256-.697 1.05 1.05 0 0 0-.712-.348c-3.14-.306-6.195-1.296-8.814-2.856a16.892 16.892 0 0 0-4.225-1.898 13.88 13.88 0 0 0-1.87-.417.844.844 0 0 0-.782.35.857.857 0 0 0-.083.821c.54 1.503 1.34 2.895 2.373 4.128-1.554-.875-3.045-1.86-4.463-2.95-.29-.224-.653-.33-1.018-.3a1.442 1.442 0 0 0-.96.483 1.256 1.256 0 0 0-.258 1.155c.42 1.956 1.336 3.763 2.645 5.253a15.22 15.22 0 0 0-3.328 1.256 12.28 12.28 0 0 0-2.348 1.396.86.86 0 0 0-.263.858c.081.28.27.514.526.65a.86.86 0 0 0 .84-.017c2.377-1.378 5.152-2.316 8.02-2.71a17.43 17.43 0 0 0 1.03-.12 11.2 11.2 0 0 1-.363 4.887.855.855 0 0 0 .373.964.84.84 0 0 0 .463.136.85.85 0 0 0 .546-.2c1.782-1.488 3.193-3.342 4.102-5.432a18.3 18.3 0 0 0 5.483 1.15.864.864 0 0 0 .895-.698 1.1 1.1 0 0 0-.214-.88 15.65 15.65 0 0 1-2.972-4.04 16.03 16.03 0 0 0 3.793-1.455 1.026 1.026 0 0 0 .532-1.002zM12 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" /></svg>,
  TypeScript: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#3178C6"><path d="M22.662 0H1.338A1.338 1.338 0 0 0 0 1.338v21.324A1.338 1.338 0 0 0 1.338 24h21.324A1.338 1.338 0 0 0 24 22.662V1.338A1.338 1.338 0 0 0 22.662 0zM12 18.995h-2.122v-6.903H5.986v-1.802h7.828v1.802h-1.814v6.903zm8.397-2.652c0 2.583-3.66 2.152-3.66 2.652s.87.164 1.132.164c.83 0 1.58-.337 2.147-.947l1.328 1.205c-.93 1.144-230 1.486-3.475 1.486-2.5 0-3.844-1.332-3.844-3.078 0-2.484 3.666-2.096 3.666-2.593 0-.498-.79-.163-1.077-.163-.646 0-1.288.232-1.78.68l-1.328-1.217c.884-1.038 2.378-1.41 3.525-1.41 2.3 0 3.366 1.26 3.366 2.872v-.001z" /></svg>,
  'Tailwind CSS': <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>,
  Angular: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#DD0031"><path d="M11.99 0l-11 3.89 1.7 14.78 9.3 5.33 9.3-5.33 1.7-14.78-11-3.89zm6.06 17.65h-2.12l-1.42-3.82h-4.94l-1.42 3.82H5.94l6-13.65 6.06 13.65zM9.07 11.83h5.86l-2.93-7.14-2.93 7.14z" /></svg>,
  NestJS: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#E0234E"><path d="M22.5 13.5v-11l-9 13.5h9zm-13.5 9v-11l-9 13.5h9zm13.5-9l-9 13.5h9v-13.5z" /></svg>,
  MongoDB: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" /></svg>,
  'Node.js': <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#339933"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.047-.139.146-.139.241v10.15c0 .097.055.189.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.604l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.604v10.15c0 .661-.354 1.275-.924 1.604l-8.794 5.076c-.28.163-.6.247-.925.247z" /></svg>,
  'Express.js': <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c-.083-.659-.26-1.104-.26-1.826h.121zm1.114-.223h7.457c-.06-3.476-2.303-5.303-4.688-4.93-2.145.346-3.345 2.064-2.769 4.93z" /></svg>,
};

const nodePositions = [
  { x: '10%', y: '15%', scale: 1.1, delay: 0.1 },
  { x: '35%', y: '10%', scale: 0.9, delay: 0.3 },
  { x: '60%', y: '12%', scale: 1.2, delay: 0.5 },
  { x: '85%', y: '18%', scale: 1.0, delay: 0.2 },
  { x: '15%', y: '45%', scale: 0.8, delay: 0.4 },
  { x: '45%', y: '40%', scale: 1.3, delay: 0.6 },
  { x: '75%', y: '42%', scale: 1.1, delay: 0.1 },
  { x: '25%', y: '75%', scale: 0.9, delay: 0.3 },
  { x: '55%', y: '70%', scale: 1.2, delay: 0.5 },
  { x: '80%', y: '78%', scale: 1.0, delay: 0.2 },
  { x: '30%', y: '90%', scale: 0.8, delay: 0.4 },
  { x: '65%', y: '92%', scale: 1.1, delay: 0.6 },
];

const TechSection = () => {
  const { skills } = portfolioData;
  const allSkills = [...skills.frontend, ...skills.backend, ...skills.tools];

  const techNodes = allSkills.slice(0, 12).map((skill, i) => ({
    name: skill,
    ...nodePositions[i],
  }));

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="text-center space-y-4 mb-20 relative z-10">
        <h3 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">Tech Ecosystem</h3>
        <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
          An interactive visualization of my core technical architecture and specialized skill sets.
        </p>
      </div>

      <div className="relative h-[600px] max-w-6xl mx-auto px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full blur-[120px] -z-10" />

        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 200 150 Q 400 100 600 150 T 800 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30 animate-draw-line" />
          <path d="M 150 400 Q 350 350 550 400 T 750 450" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20 animate-draw-line" style={{ animationDelay: '1s' }} />
        </svg>

        {techNodes.map((node) => {
          const theme = skillThemes[node.name] || skillThemes['React'];
          return (
            <div
              key={node.name}
              style={{ left: node.x, top: node.y, transform: `scale(${node.scale})`, animationDelay: `${node.delay}s` }}
              className="absolute animate-fade-in-scale"
            >
              <div
                className="group relative cursor-pointer animate-float-node"
                style={{ animationDuration: `${4 + Math.random() * 2}s` }}
              >
                <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${theme.gradient}`} />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:border-primary/20">
                    <div className="scale-125 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {skillIcons[node.name] ?? <Code2 size={32} className="text-slate-400" />}
                    </div>
                  </div>
                  <div className="px-5 py-2 rounded-2xl bg-white/40 backdrop-blur-md border border-slate-200/50 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:border-primary/30 group-hover:-translate-y-1">
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-800 whitespace-nowrap">{node.name}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechSection;
