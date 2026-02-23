import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import PageTransition from '../components/layout/PageTransition';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus(null);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            });
            setStatus({ type: 'success', message: '✅ Message sent! I\'ll get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: '❌ Failed to send. Please try again or email me directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-16 px-6 bg-background font-sans relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none animate-float"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Contact Info */}
                        <div className="space-y-8 animate-slide-up">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight drop-shadow-sm">Get in Touch</h1>
                                <p className="text-lg text-slate-600 leading-relaxed font-light">
                                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="glass-hover p-4 rounded-2xl flex items-center gap-4 text-slate-600 group transition-all duration-300">
                                    <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <span className="font-medium">Email</span>
                                </div>
                                <a href="https://www.linkedin.com/in/siva-ranjani-b9b489264" target="_blank" rel="noopener noreferrer" className="glass-hover p-4 rounded-2xl flex items-center gap-4 text-slate-600 group hover:text-primary transition-all duration-300 cursor-pointer">
                                    <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 flex items-center justify-center text-primary group-hover:text-current">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </div>
                                    <span className="font-medium">LinkedIn</span>
                                </a>
                                <a href="https://github.com/siva-ranjanic" target="_blank" rel="noopener noreferrer" className="glass-hover p-4 rounded-2xl flex items-center gap-4 text-slate-600 group hover:text-primary transition-all duration-300 cursor-pointer">
                                    <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 flex items-center justify-center text-primary group-hover:text-current">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </div>
                                    <span className="font-medium">GitHub</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden animate-slide-up" style={{ animationDelay: '200ms' }}>
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
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className="flex min-h-[120px] w-full rounded-xl border border-slate-200 bg-white/50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
                                    placeholder="How can I help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </div>

                            {/* Status Message */}
                            {status && (
                                <div className={`text-sm px-4 py-3 rounded-xl font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {status.message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full  bg-[#0D9488] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>

                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
