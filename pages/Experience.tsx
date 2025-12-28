import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Calendar, Shield, Users, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 md:py-20 bg-white"
        >
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#0D47A1] font-montserrat mb-6">The Haven Experience</h1>
                    <p className="text-center text-[#212529] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        We've reimagined the rental experience to give you more time for what matters. 
                        Live, work, and play in spaces designed for modern life.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
                    {[
                        { icon: Wifi, title: "Tech-Enabled", desc: "Gigabit wifi, smart locks, and our resident app make daily life seamless." },
                        { icon: Coffee, title: "Premium Amenities", desc: "Coworking lounges, artisan coffee bars, and fitness studios right downstairs." },
                        { icon: Calendar, title: "Community Events", desc: "Weekly mixers, workshops, and local excursions to meet your neighbors." },
                        { icon: Shield, title: "24/7 Support", desc: "On-site concierge and maintenance teams are always just a tap away." },
                        { icon: Users, title: "Network Access", desc: "Connect with a global community of professionals and creatives." },
                        { icon: Sparkles, title: "Housekeeping", desc: "Optional weekly cleaning services to keep your sanctuary sparkling." }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#E0F7FA] p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-[#00BFA5]/30 transition-colors hover:shadow-lg group"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="h-6 w-6 md:h-7 md:w-7 text-[#00BFA5]" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-[#0D47A1] mb-2 md:mb-3 font-montserrat">{item.title}</h3>
                            <p className="text-[#212529] leading-relaxed text-sm md:text-base">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0D47A1] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-6">Ready to upgrade your lifestyle?</h2>
                        <button className="bg-[#00BFA5] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-[#008F7A] transition-colors shadow-lg hover:shadow-[#00BFA5]/50 transform hover:-translate-y-1 transition-all text-sm md:text-base">
                            Schedule a Tour
                        </button>
                    </div>
                </motion.div>
             </div>
        </motion.div>
    );
};