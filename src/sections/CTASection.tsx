const CTASection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight italic uppercase tracking-tighter">
            Want to work <br /> together?
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm">
            If you have a project that needs some creative refining, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
