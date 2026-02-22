import { motion } from 'framer-motion';
import { BrainCircuit, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import AdmakiIcon from './AdmakiIcon';

const features = [
    {
        icon: <BrainCircuit className="w-8 h-8 text-rubid-red" />,
        title: "Omnichannel Command",
        desc: "Controls Google DV360, Ads, Analytics 4, Meta, TikTok, and more simultaneously. Connecting dots humans miss."
    },
    {
        icon: <Zap className="w-8 h-8 text-blue-400" />,
        title: "Radical Efficiency",
        desc: "Cut operational costs by 80%. Generate complex reports in 3 seconds. Automate optimizations while you sleep."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
        title: "Powered by Neural.one",
        desc: "The world's most advanced attribution model. Real-time Multi-Touch tracking across 10+ sources to calculate the true mathematical value of every click."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
        title: "Autonomous Guardian",
        desc: "24/7 monitoring. Never forgets, never errors. Detects anomalies and fixes them before they become crises."
    }
];

const AdmakiSection = () => {
    return (
        <section id="admaki" className="py-32 bg-black relative overflow-hidden">
            {/* Core Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] mix-blend-screen"
                style={{ backgroundImage: "url('/core-bg.png')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold tracking-[0.2em] text-rubid-red mb-4 uppercase">Introducing The Core</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight flex items-center gap-4">
                                <div>
                                    ADMAKI <br />
                                    <span className="text-gray-500 text-3xl md:text-5xl">100% Automated Platform.</span>
                                </div>
                                <div className="block">
                                    <AdmakiIcon className="w-12 h-12 md:w-20 md:h-20 text-white" />
                                </div>
                            </h3>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                The world's first fully automated, AI-driven marketing platform. ADMAKI replaces manual labor with intelligent execution, running scaling operations with surgical precision and infinite memory.
                            </p>

                            <div className="grid gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                    >
                                        <div className="shrink-0 p-3 bg-white/5 rounded-lg border border-white/5">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual/Graphic Side */}
                    <div className="order-1 lg:order-2 relative h-[600px] flex items-center justify-center">
                        <div className="relative w-full h-full max-w-md mx-auto">
                            {/* Abstract 'Brain' visualization */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-rubid-red/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse"></div>
                            <div className="relative w-full h-full border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs text-mono text-gray-500">ADM.SYS.CORE.V1</div>
                                </div>
                                <div className="flex-1 p-6 font-mono text-xs md:text-sm text-green-400 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
                                    <p className="mb-2">&gt; INITIALIZING NEURAL LINKS...</p>
                                    <p className="mb-2">&gt; CONNECTING TO: [DV360, G-ADS, META, TIKTOK, LINKEDIN]</p>
                                    <p className="mb-2 text-blue-400">&gt; CONNECTION ESTABLISHED (0.04s)</p>
                                    <p className="mb-2">&gt; ANALYZING CAMPAIGN DATA...</p>
                                    <p className="mb-2 text-yellow-400">&gt; ANOMALY DETECTED: CPA SPIKE IN ADSET_ID_992</p>
                                    <p className="mb-2">&gt; EXECUTING CORRECTION PROTOCOL...</p>
                                    <p className="mb-2 text-green-400">&gt; OPTIMIZATION APPLIED. BUDGET REDISTRIBUTED.</p>
                                    <p className="mb-2">&gt; GENERATING REPORT...</p>
                                    <div className="mt-4 p-4 border border-green-500/30 bg-green-500/5 rounded">
                                        <div className="flex justify-between mb-1">
                                            <span>ROI CURRENT</span>
                                            <span>452%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
                                            <div className="bg-green-500 h-full w-[85%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdmakiSection;
