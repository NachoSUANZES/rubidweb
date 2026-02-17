import { motion } from 'framer-motion';
import { useState } from 'react';
import DemoModal from './DemoModal';

const Hero = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-[0.03]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rubid-red/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-rubid-red mb-6 uppercase">
                        Next-Gen Marketing Automation
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
                        MARKETING <br /> ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubid-white to-gray-500">AUTOPILOT</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Unlock the power of <span className="text-white font-medium">Artificial Intelligence</span> to automate workflows, analyze operational data, and scale your brand with surgical precision.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-rubid-red text-white font-bold rounded-lg hover:bg-red-600 hover:shadow-[0_0_30px_rgba(222,48,33,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                            Discover ADMAKI
                        </button>
                        <button
                            onClick={() => setIsDemoOpen(true)}
                            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-2 group"
                        >
                            <span>Watch Demo</span>
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse group-hover:scale-125 transition-transform"></span>
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 text-sm">
                Scroll to explore
            </div>

            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </section>
    );
};

export default Hero;
