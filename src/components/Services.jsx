import { motion } from 'framer-motion';
import { PenTool, Target, BarChart, Settings, Rocket, Layers } from 'lucide-react';
const services = [
    {
        icon: <PenTool size={32} className="text-rubid-red" />,
        title: "Creative Automation",
        desc: "Stop manually resizing banners. Our AI generates high-converting ad variations, writes copy in your brand voice, and iterates designs based on performance data instantly."
    },
    {
        icon: <Target size={32} className="text-blue-500" />,
        title: "Hyper-Targeting",
        desc: "We don't guess audiences; we engineer them. Using cross-platform data signals to find your perfect customer before your competitors even know they exist."
    },
    {
        icon: <Settings size={32} className="text-purple-500" />,
        title: "Algorithmic Bidding",
        desc: "Human traders sleep. Our algorithms bid 24/7, adjusting micro-budgets every millisecond to ensure you never overpay for a conversion again."
    },
    {
        icon: <Rocket size={32} className="text-orange-500" />,
        title: "Full-Funnel Execution",
        desc: "From the first impression to the final sale, we automate the entire journey. Awareness, consideration, conversion—synced perfectly across all channels."
    }
];

const Services = () => {

    return (
        <section id="services" className="py-24 bg-rubid-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        End-to-End Solutions
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight"
                    >
                        BUILT FOR <span className="text-rubid-red">AGILE AGENCIES</span> & <br />SMART ADVERTISERS.
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-light"
                    >
                        The old agency model is dead. We provide the infrastructure to automate 90% of your workload so you can focus on strategy, not spreadsheets.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-rubid-red/50 transition-colors">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-rubid-red transition-colors">{service.title}</h4>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-rubid-red/10 to-blue-600/10 border border-white/10 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-10"></div>
                    <div className="relative z-10">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to automate your growth?</h4>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#contact" className="px-8 py-4 bg-white text-rubid-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-block">
                                Audit My Business
                            </a>
                            <a
                                href="#case-study"
                                className="px-8 py-4 inline-flex justify-center items-center bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors"
                            >
                                View Case Study
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
