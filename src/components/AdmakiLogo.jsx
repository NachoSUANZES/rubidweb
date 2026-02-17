import { motion } from 'framer-motion';

const AdmakiLogo = ({ className = "w-64 h-64" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* 1. The Nori (Outer Data Ring) */}
            <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                    <linearGradient id="noriGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="50%" stopColor="#333333" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                </defs>
                {/* Thick outer ring segment */}
                <circle cx="50" cy="50" r="48" stroke="url(#noriGradient)" strokeWidth="4" fill="none" strokeDasharray="75 25" />
                {/* Thin inner data line */}
                <circle cx="50" cy="50" r="44" stroke="#ef4444" strokeWidth="0.5" fill="none" strokeDasharray="10 5" opacity="0.5" />
            </motion.svg>

            {/* Counter-rotating ring */}
            <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="50" cy="50" r="46" stroke="#ffffff" strokeWidth="0.2" fill="none" strokeDasharray="3 3" opacity="0.3" />
            </motion.svg>

            {/* 2. The Rice (Hexagonal/Digital Grid Background) */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-black/80 backdrop-blur-sm border border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                        <pattern id="hexGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0 L10 2.5 L10 7.5 L5 10 L0 7.5 L0 2.5 Z" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#hexGrid)" />
                    </svg>
                </div>
            </div>

            {/* 3. The Core (Red AI Eye) */}
            <motion.div
                className="absolute w-1/4 h-1/4 rounded-full bg-rubid-red shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center justify-center z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Inner pupil */}
                <div className="w-1/2 h-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </motion.div>

            {/* 4. Scanning Beam effect */}
            <motion.div
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-rubid-red to-transparent opacity-50 z-20"
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            ></motion.div>
        </div>
    );
};

export default AdmakiLogo;
