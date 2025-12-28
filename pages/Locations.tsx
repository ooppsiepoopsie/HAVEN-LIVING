import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const Locations: React.FC = () => {
  const cities = [
    { name: "New York City", count: "4 Locations", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80" },
    { name: "San Francisco", count: "3 Locations", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" },
    { name: "Austin", count: "2 Locations", image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=800&q=80" },
    { name: "London", count: "5 Locations", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-[#0D47A1] font-montserrat mb-4">Our Locations</h1>
            <p className="text-[#212529]">Find your haven in the world's most vibrant cities.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cities.map((city, idx) => (
                <motion.div
                    key={idx}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative h-72 md:h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                >
                    <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-[#0D47A1]/80 transition-colors duration-500" />
                    
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2 flex items-center gap-2">
                                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#00BFA5]" />
                                {city.name}
                            </h2>
                            <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm md:text-base">
                                {city.count} &bull; View Availability
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
         </div>
      </div>
    </motion.div>
  );
};