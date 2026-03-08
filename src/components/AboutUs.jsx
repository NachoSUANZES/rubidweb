import { motion } from 'framer-motion';
import { History, Award, Users, ArrowRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-rubid-black relative overflow-hidden text-white">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: The Narrative */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-rubid-red font-bold tracking-widest uppercase mb-4 text-sm"
                        >
                            The Origin Story
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black mb-8 leading-tight"
                        >
                            Re-engineering <br /> the Enterprise.
                        </motion.h3>

                        <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-white font-bold">RUBID</span> isn't just an agency. We are the architecture of the future. A company fundamentally built to <strong>automate and optimize business processes AT SCALE</strong>.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                We saw that manual operations were destroying enterprise margins. <strong>ADMAKI</strong> is our first major product to revolutionize <em>Marketing</em> and advertising. But our exponential vision goes much further.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="pl-6 border-l-2 border-rubid-red my-6"
                            >
                                <p className="text-gray-300 italic mb-2">
                                    "We bring the same obsession for automation to sectors where milliseconds and absolute accuracy matter. <strong>Finance, administration, logistics, and beyond.</strong> We don't adapt to the market; we rewire it."
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Pioneering advanced AI algorithms and predictive models, RUBID is deploying the ultimate super-brain to master corporate complexity globally.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Column: Visual Stats/Timeline */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-rubid-red/5 rounded-full blur-3xl"></div>

                        <div className="grid gap-6 relative z-10">
                            {[
                                {
                                    year: "Foundation",
                                    title: "Core Infrastructure",
                                    desc: "Pioneering highly accurate process automation models.",
                                    logo: "./rubid-isotipo-rojo.png",
                                    fallbackIcon: <History className="text-rubid-red" />
                                },
                                {
                                    year: "Evolution",
                                    title: "Cross-Sector Scale",
                                    desc: "Expanding algorithmic mastery into Finance and Ops.",
                                    logo: "./rubid-isotipo-rojo.png",
                                    fallbackIcon: <Award className="text-blue-500" />
                                },
                                {
                                    year: "2026",
                                    title: "Rubid.io Launches",
                                    desc: "Total Automation & AI at scale for your business.",
                                    logo: "./favicon.png", // Using Isotype
                                    fallbackIcon: <RocketIcon className="text-white" />
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                                >
                                    <div className="shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-white/10 overflow-hidden p-2">
                                        <img
                                            src={item.logo}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                        <div className="hidden text-rubid-black">
                                            {item.fallbackIcon}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{item.year}</div>
                                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Simple internal component for the rocket icon to avoid import issues if lucide-react version varies
const RocketIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-9.56 1.5 1.5 0 0 1 1.56 0 22 22 0 0 1 9.56 2z" /></svg>
);

export default AboutUs;
