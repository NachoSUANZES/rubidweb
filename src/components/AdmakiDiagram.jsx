import { motion } from 'framer-motion';
import { Users, Database, Layers, Code, BrainCircuit, Globe, RefreshCcw, Activity, Building2, BarChart3, LineChart, Target } from 'lucide-react';
import AdmakiIcon from './AdmakiIcon';
import { useState, useEffect } from 'react';

const agencies = [
    { name: "TRADERS", icon: <Users size={20} /> },
    { name: "STRATEGY & MEDIA", icon: <Layers size={20} /> },
    { name: "DATA", icon: <Database size={20} /> },
    { name: "TECH OPS", icon: <Code size={20} /> }
];

const platforms = [
    { name: "DV360", color: "bg-blue-500" },
    { name: "GA4", color: "bg-orange-500" },
    { name: "GOOGLE ADS", color: "bg-blue-400" },
    { name: "BING", color: "bg-teal-500" },
    { name: "META", color: "bg-blue-600" },
    { name: "TIKTOK", color: "bg-black" },
    { name: "TABOOLA", color: "bg-blue-800" },
    { name: "LINKEDIN", color: "bg-blue-700" }
];

const AdmakiDiagram = () => {
    const [salesBars, setSalesBars] = useState(Array(12).fill(0));

    useEffect(() => {
        const interval = setInterval(() => {
            setSalesBars(Array(12).fill(0).map(() => Math.random() * 60 + 40));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-rubid-black relative overflow-hidden flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-[0.03] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rubid-red text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        The Engine Architecture
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight"
                    >
                        THE AUTOMATED ECOSYSTEM
                    </motion.h3>
                </div>

                {/* --- MAIN ARCHITECTURE DIAGRAM --- */}
                <div className="relative w-full py-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">

                    {/* LEFT: ADVERTISER -> MINI-ADMAKI -> AGENCY TEAMS */}
                    <div className="flex flex-col w-full md:w-1/4 z-10 pt-4 relative">
                        {/* New Top Flow: ADVERTISER */}
                        <div className="flex flex-col items-center mb-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/20 p-4 rounded-xl flex items-center justify-center gap-3 w-full backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                            >
                                <Building2 className="text-white" size={20} />
                                <span className="text-sm font-black text-white tracking-widest text-center">ADVERTISER / AGENCY</span>
                            </motion.div>

                            {/* Line connecting Advertiser to Mini-Admaki */}
                            <div className="w-[2px] h-8 bg-gradient-to-b from-white/50 to-rubid-red/50 relative overflow-hidden">
                                <motion.div
                                    className="w-full h-4 bg-white"
                                    animate={{ y: ["-100%", "200%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-rubid-red/10 border border-rubid-red/40 p-3 rounded-lg flex items-center justify-center gap-3 w-full shadow-[0_0_20px_rgba(222,48,33,0.3)] backdrop-blur-md z-20"
                            >
                                <BrainCircuit className="text-rubid-red" size={24} />
                                <div className="flex flex-col text-left">
                                    <span className="text-[9px] text-rubid-red font-mono uppercase tracking-widest leading-none">Media Plans & IOs</span>
                                    <span className="text-[11px] text-white font-bold leading-none mt-1">ADMAKI IOs</span>
                                </div>
                            </motion.div>

                            {/* Lines connecting Mini-Admaki to Agency Inputs text */}
                            <div className="w-[2px] h-12 bg-gradient-to-b from-rubid-red/50 to-white/10 relative overflow-hidden flex">
                                <motion.div
                                    className="w-full h-4 bg-rubid-red"
                                    animate={{ y: ["-100%", "300%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                />
                                <motion.div
                                    className="w-full h-4 bg-blue-400 absolute bottom-0"
                                    animate={{ y: ["300%", "-100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }}
                                />
                            </div>
                        </div>

                        <div className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Agency Inputs</div>
                        <div className="flex flex-col gap-3">
                            {agencies.map((team, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:border-rubid-red/50 transition-colors relative group shadow-lg"
                                >
                                    <div className="text-gray-400 group-hover:text-rubid-red transition-colors">{team.icon}</div>
                                    <div className="text-sm font-bold text-white">{team.name}</div>
                                    {/* Animated Line pointing to center Admaki */}
                                    <div className="absolute top-1/2 left-full w-[50px] md:w-[120px] lg:w-[150px] xl:w-[200px] h-[2px] bg-gradient-to-r from-rubid-red/50 to-transparent hidden md:block overflow-hidden -z-10">
                                        <motion.div
                                            className="h-full w-10 bg-rubid-red"
                                            animate={{ x: ["-100%", "500%"] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: idx * 0.2 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CENTER: MAIN ADMAKI CORE */}
                    <div className="relative flex flex-col items-center justify-center w-full md:w-1/3 z-20 py-20">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 shadow-[0_0_60px_rgba(222,48,33,0.4)] backdrop-blur-md"
                        >
                            <div className="absolute inset-0 rounded-full border border-rubid-red/30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                            <div className="flex flex-col items-center text-center">
                                <AdmakiIcon className="w-16 h-16 md:w-24 md:h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                <div className="mt-4 font-black text-2xl tracking-widest text-white">ADMAKI</div>
                                <div className="text-[10px] text-rubid-red font-mono uppercase tracking-widest animate-pulse">Core Optimization</div>
                                <div className="flex gap-4 mt-6">
                                    <div className="w-8 h-8 rounded border border-white/20 flex justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden bg-white hover:scale-110 transition-transform">
                                        <img src="./chatgpt_icon.jpg" className="w-full h-full object-cover" alt="ChatGPT" />
                                    </div>
                                    <div className="w-8 h-8 rounded border border-white/20 flex justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden bg-white hover:scale-110 transition-transform">
                                        <img src="./gemini-icon.png" className="w-full h-full object-cover" alt="Gemini" />
                                    </div>
                                    <div className="w-8 h-8 rounded border border-white/20 flex justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden bg-white hover:scale-110 transition-transform">
                                        <img src="./anthropic_icon.jpg" className="w-full h-full object-cover" alt="Anthropic" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Top / Bottom flow arrows from Neural.one */}
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-full h-32 hidden md:flex z-[-1]">
                            <div className="w-[2px] h-full bg-gradient-to-t from-green-500/50 to-transparent relative overflow-hidden">
                                <motion.div
                                    className="w-full h-8 bg-green-500"
                                    animate={{ y: ["150%", "-100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: PLATFORMS */}
                    <div className="flex flex-col items-center w-full md:w-1/4 z-10 relative pt-16">
                        <div className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Ad Ecosystem</div>

                        <div className="grid grid-cols-2 gap-3 w-full">
                            {platforms.map((platform, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-black/50 border border-white/10 p-3 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors relative shadow-lg"
                                >
                                    <div className={`w-8 h-8 rounded-full ${platform.color} border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)] flex items-center justify-center`}>
                                        <Globe size={14} className="text-white" />
                                    </div>
                                    <div className="text-[10px] font-bold text-white tracking-wider text-center">{platform.name}</div>

                                    {/* Lines pointing from ADMAKI to Platforms */}
                                    {idx % 2 === 0 && (
                                        <div className="absolute top-1/2 right-full w-[50px] md:w-[120px] lg:w-[150px] xl:w-[200px] h-[1px] bg-gradient-to-l from-transparent to-blue-500/30 hidden md:block overflow-hidden -z-10">
                                            <motion.div
                                                className="h-full w-8 bg-blue-500"
                                                animate={{ x: ["-500%", "200%"] }}
                                                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: idx * 0.1 }}
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Down arrow to Neural One */}
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-full h-32 hidden md:flex z-[-1]">
                            <div className="w-[2px] h-full bg-gradient-to-b from-blue-500/50 to-transparent relative overflow-hidden">
                                <motion.div
                                    className="w-full h-8 bg-blue-500"
                                    animate={{ y: ["-100%", "300%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM: NEURAL.ONE (Attribution) */}
                <div className="relative w-full max-w-4xl mx-auto mt-12 md:mt-24 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-white/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative shadow-[0_0_40px_rgba(34,197,94,0.2)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-2xl"></div>

                        <div className="flex items-center gap-6 relative z-10 w-full justify-between px-8">
                            {/* Flow from Platforms */}
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                <Activity className="text-blue-500 animate-pulse" size={16} />
                                <span className="hidden md:inline">RECEIVING DATA</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-3">
                                    <BrainCircuit className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" size={32} />
                                    <h4 className="text-2xl font-black tracking-widest text-white">NEURAL.ONE</h4>
                                </div>
                                <div className="text-xs text-green-400 font-mono tracking-widest mt-1">ATTRIBUTION BRAIN</div>
                            </div>

                            {/* Flow back to Admaki */}
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                <span className="hidden md:inline">FEEDING INSIGHTS</span>
                                <RefreshCcw className="text-green-500 animate-spin-slow" size={16} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- NEW BOTTOM: KPI CHARTS SECTION --- */}
                <div className="relative w-full max-w-6xl mx-auto mt-24 z-20 border-t border-white/5 pt-16">
                    <div className="text-center mb-10 text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Real-Time Business Outcomes Tracker</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* KPI 1 Sales & Conversions */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col justify-between h-40"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Sales / Conversions</span>
                                <BarChart3 className="text-green-500" size={18} />
                            </div>
                            {/* Animated bar chart */}
                            <div className="flex items-end gap-[4px] h-16 px-2 w-full">
                                {salesBars.map((height, i) => (
                                    <motion.div
                                        key={i}
                                        className={`flex-1 rounded-t-sm ${i > 8 ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-green-600/50'}`}
                                        animate={{ height: `${height}%` }}
                                        transition={{ duration: 0.6 }}
                                    ></motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* KPI 2 Quality Web Traffic */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col justify-between h-40"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Quality Web Traffic</span>
                                <LineChart className="text-blue-500" size={18} />
                            </div>
                            {/* Animated pulsing value */}
                            <div className="relative h-16 overflow-hidden flex items-end justify-center w-full">
                                <div className="w-full border-b-2 border-dashed border-white/10 absolute bottom-0"></div>
                                <motion.div
                                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-blue-300 font-mono tracking-tighter mb-2"
                                    animate={{ opacity: [0.7, 1, 0.7], y: [2, -2, 2] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-2xl">+</span>124<span className="text-2xl">%</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* KPI 3 Target Impact Optimization */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col justify-between h-40"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Target Impact Opt.</span>
                                <Target className="text-rubid-red" size={18} />
                            </div>
                            <div className="relative h-16 w-full flex items-end overflow-hidden border-b-2 border-white/5">
                                <motion.svg
                                    className="absolute bottom-0 left-0 w-[200%] h-full fill-rubid-red/20 stroke-rubid-red"
                                    preserveAspectRatio="none" viewBox="0 0 200 100"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                >
                                    <path d="M0,100 L0,50 Q12,30 25,60 T50,40 T75,70 T100,50 Q112,30 125,60 T150,40 T175,70 T200,50 L200,100 Z" strokeWidth="2" strokeLinejoin="round" />
                                </motion.svg>
                            </div>
                        </motion.div>

                        {/* KPI 4 New Audiences */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col justify-between h-40"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">New Audiences Disc.</span>
                                <Users className="text-purple-500" size={18} />
                            </div>
                            <div className="relative h-16 w-full flex flex-col items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 flex justify-center pt-2 pb-2 pointer-events-none">
                                    <div className="w-16 h-full bg-gradient-to-b from-purple-500/20 to-purple-500/0 border-t-2 border-purple-500/50" style={{ clipPath: 'polygon(0 0, 100% 0, 60% 100%, 40% 100%)' }}></div>
                                </div>
                                <div className="absolute inset-0 flex justify-center overflow-hidden">
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute top-0 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_5px_rgba(168,85,247,0.8)]"
                                            style={{ left: `calc(50% + ${(Math.random() - 0.5) * 40}px)` }}
                                            animate={{
                                                y: [0, 60],
                                                x: [0, (Math.random() - 0.5) * 10],
                                                opacity: [0, 1, 0],
                                                scale: [1, 0.5]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.4,
                                                ease: "easeIn"
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdmakiDiagram;
