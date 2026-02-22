import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, BarChart3, Activity, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

const CaseStudySection = () => {
    const [bars, setBars] = useState(Array(15).fill(0));

    useEffect(() => {
        const interval = setInterval(() => {
            setBars(Array(15).fill(0).map(() => Math.random() * 80 + 20));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="case-study" className="py-24 bg-rubid-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rubid-red text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Success Stories
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight"
                    >
                        TRANSFORMATIONAL <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">RESULTS AT SCALE</span>
                    </motion.h3>
                </div>

                <div className="relative w-full max-w-5xl mx-auto bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[700px] md:h-auto z-[10]">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="font-mono text-xs text-gray-400">RUBID.IO // CASE STUDY: ADG MEDIA GROUP // CONFIDENTIAL</span>
                        </div>
                    </div>

                    {/* Main Dashboard Layout (Desktop) */}
                    <div className="hidden md:flex flex-col lg:flex-row h-full overflow-hidden">

                        {/* Left Panel: Metrics & Visuals */}
                        <div className="lg:w-1/3 p-6 border-r border-white/10 space-y-6 overflow-y-auto bg-black/20">
                            {/* Success Badge */}
                            <div className="p-4 bg-rubid-red/10 border border-rubid-red/20 rounded-lg">
                                <div className="flex items-center gap-2 text-rubid-red font-bold text-xs uppercase tracking-wider mb-2">
                                    <TrendingUp size={14} /> Performance Breakthrough
                                </div>
                                <h3 className="text-xl font-black text-white leading-tight">
                                    ADG Media Group:<br />
                                    <span className="text-gray-400">Infinite Scale.</span>
                                </h3>
                            </div>

                            {/* Key Metrics */}
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-xs">SALES GROWTH</span>
                                        <BarChart3 className="text-green-500" size={16} />
                                    </div>
                                    <div className="text-3xl font-bold text-white">+30%</div>
                                    <div className="text-xs text-green-500 mt-1">Direct attribution revenue</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-gray-400 text-xs mb-1">TIME SAVED</div>
                                        <div className="text-2xl font-bold text-blue-400">85%</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-gray-400 text-xs mb-1">ERRORS</div>
                                        <div className="text-2xl font-bold text-red-500">0%</div>
                                    </div>
                                </div>

                                {/* Visualizer */}
                                <div className="p-4 bg-black rounded-lg border border-white/10 relative overflow-hidden h-32">
                                    <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-10"></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <h4 className="text-gray-400 text-xs mb-2 flex items-center gap-2">
                                            <Activity size={12} /> AUTOMATION FREQUENCY
                                        </h4>
                                        <div className="flex-1 flex items-end gap-1">
                                            {bars.map((height, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex-1 bg-rubid-red/50"
                                                    animate={{ height: `${height}%` }}
                                                    transition={{ duration: 0.4 }}
                                                ></motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: The Narrative "Terminal" */}
                        <div className="flex-1 bg-black/50 p-6 flex flex-col font-mono relative overflow-y-auto">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                            <div className="space-y-8 max-w-3xl">
                                {/* Section 1: Challenge */}
                                <div>
                                    <div className="flex items-center gap-2 text-red-500 mb-2 text-xs uppercase tracking-widest font-bold">
                                        <Target size={14} /> 01. The Challenge
                                    </div>
                                    <div className="border-l-2 border-white/10 pl-4 py-1">
                                        <p className="text-lg text-white font-light leading-relaxed">
                                            <span className="text-gray-500">{">"}</span> Managing <span className="text-white font-bold">300+ campaigns</span> across 12 platforms (Meta, Google, TikTok, DV360) was physically impossible. Manual optimizations were reactive, spreadsheets were outdated instantly, and man-hours were destroying margins.
                                        </p>
                                    </div>
                                </div>

                                {/* Section 2: Solution */}
                                <div>
                                    <div className="flex items-center gap-2 text-yellow-500 mb-2 text-xs uppercase tracking-widest font-bold">
                                        <Zap size={14} /> 02. The ADMAKI Solution
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Cpu className="text-yellow-500 animate-pulse" size={20} />
                                            <span className="text-white font-bold">Autonomous Control Activated</span>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                "Micro-bidding strategies executed every second.",
                                                "Attribution synced via Neural.ONE.",
                                                "Creative fatigue detection: AI-Predicted.",
                                                "Budget redistribution: Real-time across 12 platforms."
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Results */}
                                <div>
                                    <div className="flex items-center gap-2 text-green-500 mb-2 text-xs uppercase tracking-widest font-bold">
                                        <TrendingUp size={14} /> 03. Unmatched Efficiency
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Final system audit confirming total transformation of operational capabilities.
                                    </p>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: "Growth", val: "+30%", col: "text-green-500" },
                                            { label: "Efficiency", val: "100%", col: "text-blue-500" },
                                            { label: "Errors", val: "0", col: "text-red-500" },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-black border border-white/10 p-4 rounded text-center">
                                                <div className={`text-xl font-bold ${stat.col}`}>{stat.val}</div>
                                                <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Mobile View: Insights Feed */}
                    <div className="flex md:hidden flex-col h-full bg-rubid-black relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-rubid-red/20 to-transparent pointer-events-none"></div>

                        <div className="p-6 overflow-y-auto space-y-6 pb-24 relative z-10">
                            <div className="text-center mb-8">
                                <h3 className="text-white font-bold text-lg mb-1">Project: ADG Media</h3>
                                <p className="text-gray-400 text-xs">Status: 100% AUTOMATED</p>
                            </div>

                            {[
                                { time: "Phase 1", icon: <Target size={16} />, title: "The Bottleneck", desc: "300+ campaigns manually managed. High error rate. Low margins.", type: "warning" },
                                { time: "Phase 2", icon: <Zap size={16} />, title: "ADMAKI Deployment", desc: "AI takes control of bidding, creative rotation, and budget allocation.", type: "neutral" },
                                { time: "Phase 3", icon: <TrendingUp size={16} />, title: "The Result", desc: "+30% Sales Lift. 85% Time Savings. Zero Errors.", type: "success" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${i === 2 ? 'bg-rubid-red shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-white/20'}`}></div>

                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                        <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                                            {item.icon} {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                            <button className="w-full py-3 bg-rubid-red text-white font-bold rounded-lg shadow-lg shadow-rubid-red/20 active:scale-95 transition-transform text-sm">
                                Start Your Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
