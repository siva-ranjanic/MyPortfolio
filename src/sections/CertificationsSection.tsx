import { Award, Download, FileText } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const CertificationsSection = () => {
    const { certifications } = portfolioData;

    const handleDownload = (fileName: string, title: string) => {
        if (!fileName) return;
        const link = document.createElement('a');
        link.href = `/src/assets/certificates/${fileName}.pdf`;
        link.download = `${title.replace(/\s+/g, '_')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="certifications" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Validated Expertise</h2>
                        <h3 className="text-4xl md:text-6xl font-black font-display text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            Professional <br />
                            <span className="text-primary/10" style={{ WebkitTextStroke: '1px #084d43' }} aria-hidden="true">Certifications</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <div key={i} className="group bg-white border border-slate-200 p-8 rounded-2xl hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col justify-between h-full">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-slate-50 text-slate-300 group-hover:text-primary transition-all rounded-xl">
                                        <Award size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{cert.year}</span>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-black font-display text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                                        {cert.title}
                                    </h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cert.issuer}</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FileText size={14} className="text-slate-300" />
                                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Official PDF</span>
                                </div>
                                {cert.file ? (
                                    <button
                                        onClick={() => handleDownload(cert.file, cert.title)}
                                        className="flex items-center gap-2 text-primary opacity-80 hover:opacity-100 transition-opacity"
                                    >
                                        <span className="text-[9px] font-black uppercase tracking-widest">Download</span>
                                        <Download size={14} />
                                    </button>
                                ) : (
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Processing</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-200/20 -z-0 pointer-events-none select-none uppercase tracking-tighter">
                Proof
            </div>
        </section>
    );
};

export default CertificationsSection;
