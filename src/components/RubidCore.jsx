import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const RubidCore = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center py-24 overflow-hidden bg-black">

            {/* The user's custom colorful background, made much more visible (opacity 50%) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] mix-blend-screen"
                style={{ backgroundImage: "url('/core-bg.png')" }}
            ></div>

            {/* Dark gradient overlay to ensure text contrast while letting the center shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-rubid-red animate-pulse"></span>
                        <span className="text-sm font-bold text-gray-300 tracking-wider">ENTERPRISE INFRASTRUCTURE</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight"
                    >
                        The Architecture of an <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubid-red via-red-500 to-white">Autonomous Company</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        RUBID is not just a tool. It is the invisible intelligence layer that connects,
                        analyzes, and executes decisions across your entire business ecosystem in real-time.
                    </motion.p>
                </div>

                {/* The 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

                    {/* Pillar 1: Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-black/60 hover:border-rubid-red/50 transition-all group relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rubid-red/10 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="h-16 w-16 mb-8 rounded-2xl bg-gradient-to-br from-rubid-red/20 to-rubid-red/5 border border-rubid-red/30 flex items-center justify-center p-3 shadow-[0_0_30px_rgba(222,48,33,0.15)] group-hover:scale-110 transition-transform">
                            <div className="w-full h-full bg-[#DE3021]" style={{ WebkitMaskImage: "url('/icon-connect.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url('/icon-connect.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}></div>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-wide">1. CONNECT</h3>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Breaking down data silos. We unify live streams from ERPs, CRMs, Logistics, Financials, and Media into a single source of absolute, unified truth.
                        </p>
                    </motion.div>

                    {/* Pillar 2: Analyze */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-black/60 hover:border-rubid-red/50 transition-all group relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rubid-red/10 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="h-16 w-16 mb-8 rounded-2xl bg-gradient-to-br from-rubid-red/20 to-rubid-red/5 border border-rubid-red/30 flex items-center justify-center p-3 shadow-[0_0_30px_rgba(222,48,33,0.15)] group-hover:scale-110 transition-transform">
                            <div className="w-full h-full bg-[#DE3021]" style={{ WebkitMaskImage: "url('/icon-analyze.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url('/icon-analyze.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}></div>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-wide">2. ANALYZE</h3>
                        <p className="text-gray-400 leading-relaxed font-light">
                            We leverage top-tier LLMs to extract deep insights from all connected tools, acting as the ultimate bridge between human strategy and Artificial Intelligence.
                        </p>
                    </motion.div>

                    {/* Pillar 3: Execute */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-black/40 backdrop-blur-xl border border-rubid-red/20 p-8 rounded-2xl hover:bg-black/60 hover:border-rubid-red/80 transition-all group relative shadow-[0_0_40px_rgba(222,48,33,0.05)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rubid-red/15 rounded-full blur-[50px] pointer-events-none"></div>
                        <div className="h-16 w-16 mb-8 rounded-2xl bg-gradient-to-br from-rubid-red/20 to-rubid-red/5 border border-rubid-red/40 flex items-center justify-center p-3 shadow-[0_0_30px_rgba(222,48,33,0.25)] group-hover:scale-110 transition-transform">
                            <div className="w-full h-full bg-[#DE3021]" style={{ WebkitMaskImage: "url('/icon-execute.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url('/icon-execute.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }}></div>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-wide">3. EXECUTE</h3>
                        <p className="text-gray-400 leading-relaxed font-light">
                            We go beyond dashboards and alarms. RUBID takes direct action, automating complex operations natively within your existing tech stack without human bottlenecks.
                        </p>
                    </motion.div>

                </div>

                {/* The Call to Action (Moved from Hero) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <div className="text-center mb-6">
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest block mb-2">First Real-World Application</span>
                        <ChevronDown className="mx-auto text-gray-600 animate-bounce" size={20} />
                    </div>

                    <a href="#admaki" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-rubid-red rounded-xl hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(222,48,33,0.5)] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                        <span className="relative z-10 flex items-center gap-3 text-lg uppercase tracking-wider">
                            See in a real business <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default RubidCore;
