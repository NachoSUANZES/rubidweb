import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
const Contact = () => {

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
                                    <span className="text-sm md:text-base">+34 910 053 553</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Trusted by</p>
                                <div className="font-mono text-gray-400 text-sm">
                                    ADG MEDIA GROUP / NEURAL.ONE / 50+ AGENCIES
                                </div>
                            </div>
                        </div>

                        {/* Disruptive CTA Text */}
                        <div className="flex flex-col justify-center h-full space-y-8 bg-black/40 p-8 rounded-xl border border-white/5 shadow-inner">
                            <div className="inline-flex items-center gap-2 text-rubid-red font-bold text-xs uppercase tracking-widest border border-rubid-red/20 bg-rubid-red/10 px-3 py-1 rounded-full w-max">
                                <span className="w-2 h-2 rounded-full bg-rubid-red animate-pulse"></span> The Revolution is Now
                            </div>

                            <h4 className="text-2xl md:text-3xl font-black text-white leading-snug">
                                AI and automation are rewriting the rules of business.
                                <span className="text-gray-500 block mt-2">You cannot afford to be left behind.</span>
                            </h4>

                            <p className="text-gray-400 leading-relaxed">
                                The era of manual scaling and guesswork is over. We build the intelligent infrastructure that puts our partners years ahead of their competition.
                            </p>
                            <p className="text-gray-400 leading-relaxed font-bold border-l-2 border-rubid-red pl-4">
                                Stop adopting tools. Start automating your dominance. Reach out directly to our engineering and strategy team to see what's possible for your business.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="mailto:hello@rubid.io"
                                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-rubid-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(222,48,33,0.3)]"
                                >
                                    <Mail size={18} />
                                    Email our Team Directly
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
