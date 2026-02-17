import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-rubid-red font-bold tracking-widest uppercase mb-4 text-sm"
                        >
                            Start the Transformation
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                        >
                            Ready to automate your dominance?
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg font-light"
                        >
                            Join the elite agencies and brands using Rubid.io. Request your invite today.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h4 className="text-2xl font-bold text-white mb-6">Contact Us</h4>

                            <div className="space-y-6">
                                <a href="mailto:hello@rubid.io" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-rubid-red/20 group-hover:text-rubid-red transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-sm md:text-base">hello@rubid.io</span>
                                </a>
                                <div className="flex items-center gap-4 text-gray-400 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="text-sm md:text-base">Madrid, Spain (HQ)</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-sm md:text-base">+34 91 123 45 67</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Trusted by</p>
                                <div className="font-mono text-gray-400 text-sm">
                                    ADG MEDIA GROUP / NEURAL.ONE / 50+ AGENCIES
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-500/10 rounded-xl border border-green-500/20"
                                >
                                    <CheckCircle size={48} className="text-green-500 mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">Request Received</h4>
                                    <p className="text-gray-400 text-sm">Our team will analyze your stack and contact you within 24 hours.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-6 text-xs text-gray-500 hover:text-white underline"
                                    >
                                        Send another request
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                        <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-rubid-red focus:ring-1 focus:ring-rubid-red transition-all placeholder-gray-700" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Work Email</label>
                                        <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-rubid-red focus:ring-1 focus:ring-rubid-red transition-all placeholder-gray-700" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company URL</label>
                                        <input type="url" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-rubid-red focus:ring-1 focus:ring-rubid-red transition-all placeholder-gray-700" placeholder="https://..." />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Goal</label>
                                        <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-rubid-red focus:ring-1 focus:ring-rubid-red transition-all text-sm">
                                            <option>Automate Media Buying</option>
                                            <option>Improve Attribution</option>
                                            <option>Creative Scaling</option>
                                            <option>Full Platform Demo</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-rubid-red hover:bg-red-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                    >
                                        {formStatus === 'submitting' ? 'Processing...' : 'Request Access'}
                                        {!formStatus && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
