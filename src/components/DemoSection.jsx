import { motion } from 'framer-motion';
import { Activity, Globe, Shield, Cpu, TrendingUp, Terminal, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const DemoSection = () => {
    const [logs, setLogs] = useState([]);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [systemReaction, setSystemReaction] = useState(null);

    const scenarios = [
        {
            prompt: "Analyze competitor ad spend on TikTok for the last 30 days.",
            reaction: {
                title: "COMPETITOR ANALYSIS DETECTED",
                steps: [
                    "Scanning TikTok Ad Library...",
                    "Identified 3 major competitors",
                    "Estimated Total Spend: €45,200",
                    "Action: Adjustment recommended for AdSet #2"
                ],
                color: "text-blue-400"
            }
        },
        {
            prompt: "Scale budget for campaigns with ROAS > 400%.",
            reaction: {
                title: "BUDGET OPTIMIZATION PROTOCOL",
                steps: [
                    "Filtering Campaigns: Found 4 matches",
                    "Calculating saturation points...",
                    "Increasing daily budget by 20%",
                    "Projected Revenue Increase: +€3,500/week"
                ],
                color: "text-green-400"
            }
        },
        {
            prompt: "Generate 3 variations of copy for 'Summer Sale' targeting Gen Z.",
            reaction: {
                title: "GENERATIVE CONTENT ENGINE",
                steps: [
                    "Analyzing Gen Z linguistic patterns...",
                    "Drafting Variation A: 'High Energy'",
                    "Drafting Variation B: 'FOMO Driven'",
                    "Drafting Variation C: 'Value Focus'",
                    "Deployed to A/B Testing Queue"
                ],
                color: "text-purple-400"
            }
        },
        {
            prompt: "Query Neural.one: What is the true conversion path for User ID #8821?",
            reaction: {
                title: "NEURAL.ONE ATTRIBUTION MAPPING",
                steps: [
                    "Tracing cross-device journey (Mobile -> Desktop)",
                    "Touchpoints found: IG Ad -> Google Search -> Direct",
                    "Assigning weight: IG (40%), Search (30%), Direct (30%)",
                    "True ROI verified: 650% (vs 220% reported by Meta)"
                ],
                color: "text-pink-500"
            }
        }
    ];

    // Log generation effect
    useEffect(() => {
        const interval = setInterval(() => {
            const actions = [
                "Optimizing CPC bid for Campaign #442",
                "Detected audience saturation in AdSet B",
                "Reallocating budget to TikTok Ads",
                "Syncing conversion data from G-Ads",
                "Analyzing creative performance v2.1",
                "Cross-referencing attribution model",
                "Anomaly detected: CTR spike (+15%)",
                "Audit complete: 99.9% health score"
            ];
            const newLog = `> ${new Date().toLocaleTimeString()} :: ${actions[Math.floor(Math.random() * actions.length)]}`;
            setLogs(prev => [newLog, ...prev].slice(0, 8));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    // Scenario sequencing effect
    useEffect(() => {
        let typingTimeout;
        let nextScenarioTimeout;
        let stepTimeouts = [];

        const currentScenario = scenarios[currentScenarioIndex];

        // Reset state for new scenario
        setTypedText("");
        setIsTyping(true);
        setSystemReaction(null);

        // Typing effect
        let charIndex = 0;
        const typeChar = () => {
            if (charIndex < currentScenario.prompt.length) {
                setTypedText(currentScenario.prompt.substring(0, charIndex + 1));
                charIndex++;
                typingTimeout = setTimeout(typeChar, 50); // Typing speed
            } else {
                setIsTyping(false);
                // Start reaction after typing finishes
                startReaction(currentScenario);
            }
        };

        const startReaction = (scenario) => {
            setSystemReaction({ title: scenario.reaction.title, steps: [], color: scenario.reaction.color });

            scenario.reaction.steps.forEach((step, index) => {
                const t = setTimeout(() => {
                    setSystemReaction(prev => ({
                        ...prev,
                        steps: [...prev.steps, step]
                    }));
                }, 600 * (index + 1)); // Delay between steps
                stepTimeouts.push(t);
            });

            // Schedule next scenario
            const totalReactionTime = 600 * (scenario.reaction.steps.length + 2);
            nextScenarioTimeout = setTimeout(() => {
                setCurrentScenarioIndex(prev => (prev + 1) % scenarios.length);
            }, totalReactionTime + 1500); // Pause before next
        };

        // Start typing delay
        typingTimeout = setTimeout(typeChar, 1000);

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(nextScenarioTimeout);
            stepTimeouts.forEach(clearTimeout);
        };
    }, [currentScenarioIndex]);

    return (
        <section id="demo" className="py-24 bg-rubid-black relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-[0.03]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rubid-red/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rubid-red text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Live Demonstration
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight"
                    >
                        SEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubid-white to-gray-500">ADMAKI</span> IN ACTION.
                    </motion.h3>
                </div>

                <div className="relative w-full max-w-6xl mx-auto bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[700px]">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="font-mono text-xs text-gray-400">RUBID.IO // ADMAKI CONTROL CENTER // V.2.0.4 - LIVE</span>
                        </div>
                    </div>

                    {/* Main Dashboard Layout (Desktop) */}
                    <div className="hidden md:flex flex-col lg:flex-row h-full overflow-hidden">

                        {/* Left Panel: Metrics & Visuals */}
                        <div className="lg:w-1/3 p-6 border-r border-white/10 space-y-6 overflow-y-auto">
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-xs">TOTAL ROAS</span>
                                        <TrendingUp className="text-green-500" size={16} />
                                    </div>
                                    <div className="text-3xl font-bold text-white">425.8%</div>
                                    <div className="text-xs text-green-500 mt-1">↑ 12.4% vs last hour</div>
                                </div>
                                {/* Visualizer */}
                                <div className="p-4 bg-black rounded-lg border border-white/10 relative overflow-hidden h-40">
                                    <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-10"></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <h4 className="text-gray-400 text-xs mb-4 flex items-center gap-2">
                                            <Globe size={12} /> TRAFFIC PULSE
                                        </h4>
                                        <div className="flex-1 flex items-end gap-1">
                                            {[...Array(15)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex-1 bg-rubid-red/50 hover:bg-rubid-red transition-colors"
                                                    animate={{ height: `${Math.random() * 80 + 20}%` }}
                                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                                ></motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* System Logs */}
                            <div className="h-48 p-4 bg-black rounded-lg border border-white/10 font-mono text-xs overflow-hidden">
                                <h4 className="text-gray-400 mb-2 flex items-center gap-2">
                                    <Shield size={12} /> BACKGROUND TASKS
                                </h4>
                                <div className="space-y-1">
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-gray-500 truncate"
                                        >
                                            {log}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: AI Interaction (The "Chat") */}
                        <div className="flex-1 bg-black/50 p-6 flex flex-col font-mono relative">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                            {/* AI Prompt Input Simulation */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs uppercase tracking-widest">
                                    <MessageSquare size={14} /> Human Input
                                </div>
                                <div className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-lg text-white font-light flex items-center shadow-inner">
                                    <span className="text-rubid-red mr-2">{">"}</span>
                                    {typedText}
                                    {isTyping && <span className="w-2 h-5 bg-rubid-red animate-pulse ml-1"></span>}
                                </div>
                            </div>

                            {/* System Reaction / Output */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs uppercase tracking-widest">
                                    <Terminal size={14} /> ADMAKI Processing
                                </div>

                                <div className="min-h-[300px] border-l-2 border-white/10 pl-6 py-2 relative">
                                    {systemReaction ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-4"
                                        >
                                            <h3 className={`text-xl font-bold ${systemReaction.color} flex items-center gap-2`}>
                                                <Cpu className="animate-spin-slow" size={20} />
                                                {systemReaction.title}
                                            </h3>
                                            <div className="space-y-3">
                                                {systemReaction.steps.map((step, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="flex items-center gap-3 text-sm text-gray-300"
                                                    >
                                                        <div className={`w-1.5 h-1.5 rounded-full ${idx === systemReaction.steps.length - 1 ? 'bg-white animate-pulse' : 'bg-gray-600'}`}></div>
                                                        {step}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-gray-600 italic">
                                            {isTyping ? "Waiting for input..." : "Processing..."}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile View: Insights Feed */}
                    <div className="flex md:hidden flex-col h-full bg-rubid-black relative overflow-hidden">
                        {/* Mobile Header Gradient */}
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-rubid-red/20 to-transparent pointer-events-none"></div>

                        <div className="p-6 overflow-y-auto space-y-6 pb-20 relative z-10">
                            <div className="text-center mb-8">
                                <h3 className="text-white font-bold text-lg mb-1">Morning Briefing</h3>
                                <p className="text-gray-400 text-xs">ADMAKI has been active for 8h 23m</p>
                            </div>

                            {/* Timeline Items */}
                            {[
                                { time: "Now", icon: <Cpu size={16} />, title: "Budget Reallocated", desc: "Moved €500 from FB -> TikTok based on lower CPA.", type: "success" },
                                { time: "12m ago", icon: <Shield size={16} />, title: "Ad Fraud Auto-Block", desc: "Prevented 240 bot clicks from IP Range 192.168.x.x", type: "warning" },
                                { time: "45m ago", icon: <TrendingUp size={16} />, title: "ROAS Milestone", desc: "Campaign 'Summer_V2' hit 520% ROAS.", type: "neutral" },
                                { time: "2h ago", icon: <Activity size={16} />, title: "Creative A/B Test", desc: "Winner declared: 'Video_B_Short' (CTR 3.4%)", type: "neutral" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-rubid-red shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-white/20'}`}></div>

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

                        {/* Sticky Action Button */}
                        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                            <button className="w-full py-3 bg-rubid-red text-white font-bold rounded-lg shadow-lg shadow-rubid-red/20 active:scale-95 transition-transform text-sm">
                                View Full Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
