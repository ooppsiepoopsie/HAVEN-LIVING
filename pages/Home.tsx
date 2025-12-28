import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wallet, Home as HomeIcon, Key, Coffee, FileCheck, Search, PenTool, CheckCircle } from 'lucide-react';

const bannerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* 2. BANNER SECTION */}
      <section className="relative h-[80vh] min-h-[500px] flex flex-col items-center justify-center bg-[#E0F7FA] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Living Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
        </div>

        {/* Abstract Background Waves */}
        <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                    d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" 
                    fill="url(#gradient)"
                    animate={{ 
                        d: [
                            "M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z",
                            "M0 55 Q 25 45 50 55 T 100 55 V 100 H 0 Z",
                            "M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z"
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00BFA5" />
                        <stop offset="100%" stopColor="#00897B" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 text-center px-4 relative max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0D47A1] font-montserrat mb-6 leading-tight"
          >
            Find Your Place <br/>
            <span className="text-[#00BFA5]">Within The Community</span>
          </motion.h1>
          
          <motion.div
             animate={{ y: [0, -6, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <button className="bg-white px-6 py-3 sm:px-8 rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-3 text-[#00BFA5] font-semibold mx-auto group border border-[#E0F7FA] text-sm sm:text-base">
                <Star className="h-5 w-5 fill-[#00BFA5] group-hover:rotate-180 transition-transform duration-500" />
                PREMIUM EXTENDED LIVING
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. BUDGET PLANNING SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-[#0D47A1]">Plan for Your Budget</h2>
            <div className="w-16 h-1 bg-[#00BFA5] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { icon: Wallet, title: "Transparent Pricing", text: "No hidden fees, ever. Know exactly what you pay." },
              { icon: HomeIcon, title: "Furnished Options", text: "Move-in ready spaces designed for comfort." },
              { icon: Key, title: "Flexible Leases", text: "Stay for a month or a year. It's up to you." },
              { icon: Coffee, title: "All-Inclusive", text: "Utilities, wifi, and cleaning included." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-[#F5F5F5] p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#E0F7FA] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00BFA5] transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-[#00BFA5] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#0D47A1] mb-3 font-montserrat">{item.title}</h3>
                <p className="text-[#212529] text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. RENTAL PROCESS SECTION */}
      <section className="py-16 md:py-24 bg-[#E0F7FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-[#0D47A1]">Rent Entirely Online</h2>
            <p className="text-[#212529] mt-2 text-sm md:text-base">From searching to signing, we made it simple.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 -z-0">
               <motion.div 
                 initial={{ width: "0%" }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-[#00BFA5]"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {[
                { icon: Search, title: "Search", desc: "Find your perfect match." },
                { icon: FileCheck, title: "Apply", desc: "Quick online verification." },
                { icon: PenTool, title: "Sign", desc: "Digital lease signing." },
                { icon: CheckCircle, title: "Move In", desc: "Digital keys & welcome." },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center group border border-gray-100 hover:border-[#00BFA5]/30 transition-colors relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#00BFA5]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-16 h-16 bg-white border-4 border-[#E0F7FA] rounded-full flex items-center justify-center mb-6 group-hover:border-[#00BFA5] transition-colors duration-300 relative z-10">
                    <step.icon className="h-7 w-7 text-[#00BFA5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D47A1] mb-2 font-montserrat relative z-10">{step.title}</h3>
                  <p className="text-[#212529] relative z-10 text-sm md:text-base">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};