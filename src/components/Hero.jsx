import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] mix-blend-screen"
                    style={{ backgroundImage: "url('/hero-bg.png')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none"></div>
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

                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 text-sm">
                Scroll to explore
            </div>

        </section >
    );
};

export default Hero;
