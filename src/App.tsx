import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const Loader = () => {
  const name = 'SIVARANJANI';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none animate-fade-out">
      <div className="relative flex flex-col items-center gap-12">
        <div className="absolute -inset-20 bg-primary/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />
        <div className="flex gap-1 md:gap-3">
          {name.split('').map((char, i) => (
            <span
              key={i}
              className="text-4xl md:text-7xl font-display font-black tracking-tighter text-slate-900 italic uppercase inline-block animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="relative w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-primary animate-slide-bar" />
        </div>
        <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <span className="w-8 h-[1px] bg-primary/30" />
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-400">Frontend Developer</span>
          <span className="w-8 h-[1px] bg-primary/30" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {loading && <Loader />}
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
