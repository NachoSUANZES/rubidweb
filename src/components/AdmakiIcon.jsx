const AdmakiIcon = ({ className = "w-12 h-12" }) => {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Maki Roll (Robot Shell) */}
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" className="text-gray-800" />
            <circle cx="50" cy="50" r="45" stroke="#ef4444" strokeWidth="2" strokeDasharray="20 10" className="animate-spin-slow" />

            {/* Inner Rice (Circuit) */}
            <circle cx="50" cy="50" r="35" fill="#f3f4f6" fillOpacity="0.1" />
            <path d="M50 20V35 M50 65V80 M20 50H35 M65 50H80" stroke="currentColor" strokeWidth="2" className="text-gray-600" />

            {/* Core (Robot Eye) */}
            <circle cx="50" cy="50" r="15" fill="#ef4444" className="animate-pulse" />
            <circle cx="55" cy="45" r="5" fill="white" />
        </svg>
    );
};

export default AdmakiIcon;
