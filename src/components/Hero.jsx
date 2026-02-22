import { motion } from 'framer-motion';

const Hero = () => {
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
                    className="flex flex-col items-center"
                >
                    <img src="./rubid-isotipo-rojo.png" alt="RUBID" className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-[0_0_15px_rgba(222,48,33,0.8)]" />
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-rubid-red mb-6 uppercase">
                        The Master Brain For Your Business
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
                        PROCESS AUTOMATION <br /> & AI DECISION MAKING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rubid-white to-gray-500">AT SCALE</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Unlock the power of <span className="text-white font-medium">Artificial Intelligence</span> to control your business 24/7, achieve unprecedented efficiency, reduce operational costs, and drive superior outcomes.
                    </p>

                    <div className="flex justify-center items-center mt-4">
                        <a href="#admaki" className="px-10 py-5 bg-rubid-red text-white font-black uppercase tracking-widest rounded-xl hover:bg-red-600 hover:shadow-[0_0_40px_rgba(222,48,33,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 group">
                            See in a real business
                            <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform"></span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 text-sm">
                Scroll to explore
            </div>

        </section >
    );
};

export default Hero;
