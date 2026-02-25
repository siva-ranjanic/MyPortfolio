import { useState, useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import portfolioData from '../data/portfolio.json';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const ContactSection = () => {
    const { socials } = portfolioData;
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const emailSocial = socials.find((s) => s.platform === 'Email');
    const linkedinSocial = socials.find((s) => s.platform === 'LinkedIn');
    const githubSocial = socials.find((s) => s.platform === 'GitHub');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus(null);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
            setStatus({ type: 'success', message: "System response received. I will be in touch shortly." });
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus({ type: 'error', message: 'Transmission failure. Please use direct email.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen relative flex items-center bg-white py-32 overflow-hidden">
            {/* Split Background - Right Side clearly visible with a light tint */}
            <div className="absolute top-0 right-0 w-[42%] h-full bg-slate-50 hidden lg:block border-l border-slate-200" />
            
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 relative z-10 w-full">
                
                {/* Left Column: Direct Communication */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-16 lg:pr-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-primary" />
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Technical Inquiry</h2>
                        </div>
                        <h3 className="text-5xl md:text-6xl xl:text-7xl font-black font-display text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            Let's <br />
                            <span className="text-primary/10" style={{ WebkitTextStroke: '1px #084d43' }} aria-hidden="true">Connect</span>
                        </h3>
                    </div>

                    <p className="text-base text-slate-500 leading-relaxed font-light italic border-l-2 border-primary/20 pl-6 max-w-sm">
                        Available for architectural consultations, full-stack developments, and technical leadership roles.
                    </p>

                    <div className="space-y-8">
                        <div className="group flex items-start gap-4">
                            <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-primary/5 group-hover:text-primary transition-all text-slate-300 border border-slate-100">
                                <Mail size={18} />
                            </div>
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-1">Direct Protocol</h4>
                                <a href={emailSocial?.url} className="text-sm font-black text-slate-900 hover:text-primary transition-colors uppercase tracking-tight">
                                    {emailSocial?.url.replace('mailto:', '')}
                                </a>
                            </div>
                        </div>

                        <div className="group flex items-start gap-4">
                            <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-primary/5 group-hover:text-primary transition-all text-slate-300 border border-slate-100">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-1">Base Location</h4>
                                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">
                                    Tamil Nadu, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-slate-100">
                        <a href={linkedinSocial?.url} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile" className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all rounded-lg">
                            <Linkedin size={18} />
                        </a>
                        <a href={githubSocial?.url} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile" className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all rounded-lg">
                            <Github size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Column: Transmission Form (Within Tinted Side) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-white border border-slate-200 p-8 md:p-12 space-y-10 rounded-2xl shadow-2xl shadow-primary/5">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label htmlFor="contact-name" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">Identity</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-slate-50/50 border-b-2 border-slate-100 p-4 text-xs font-black uppercase tracking-widest focus:border-primary focus:outline-none transition-colors placeholder:text-slate-200"
                                />
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="contact-email" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">Credentials</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-slate-50/50 border-b-2 border-slate-100 p-4 text-xs font-black uppercase tracking-widest focus:border-primary focus:outline-none transition-colors placeholder:text-slate-200"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="contact-message" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">Transmission Data</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Details of your project or inquiry..."
                                required
                                rows={4}
                                className="w-full bg-slate-50/50 border-b-2 border-slate-100 p-4 text-xs font-black uppercase tracking-widest focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-slate-200"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary py-6 text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-slate-900 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4 group rounded-xl shadow-xl shadow-primary/10"
                            >
                                {isSubmitting ? 'In Transit...' : (
                                    <>
                                        Initiate Contact <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {status && (
                        <div className={`mt-8 p-4 text-[9px] font-black uppercase tracking-[0.3em] text-center rounded-lg border ${status.type === 'success' ? 'bg-primary/5 text-primary border-primary/20' : 'bg-red-50 text-red-500 border-red-100'}`}>
                            {status.message}
                        </div>
                    )}
                </div>

            </div>

            {/* Subtle background text decoration */}
            <div className="absolute top-[8%] right-[5%] text-[10vw] font-black text-slate-50/80 -z-10 leading-none select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap opacity-100">
                Contact
            </div>
        </section>
    );
};

export default ContactSection;
