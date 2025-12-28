import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Residences: React.FC = () => {
  const residences = [
    { 
      title: "The Studio", 
      size: "450 sq ft", 
      price: "Starting at $2,200/mo", 
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      features: ["Queen Bed", "Kitchenette", "Work Desk"]
    },
    { 
      title: "One Bedroom", 
      size: "650 sq ft", 
      price: "Starting at $3,100/mo", 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Full Kitchen", "Living Area"]
    },
    { 
      title: "Two Bedroom", 
      size: "950 sq ft", 
      price: "Starting at $4,500/mo", 
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "2 Bathrooms", "Balcony"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-[#F5F5F5] min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D47A1] font-montserrat mb-4">Curated Residences</h1>
            <p className="text-[#212529] max-w-2xl mx-auto text-lg">Thoughtfully designed spaces that blend the comfort of home with the luxury of a hotel.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residences.map((res, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow border border-gray-100"
                >
                    <div className="h-64 overflow-hidden relative">
                        <img src={res.image} alt={res.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0D47A1]">
                            AVAILABLE NOW
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold font-montserrat text-[#0D47A1] mb-2">{res.title}</h3>
                        <p className="text-[#00BFA5] font-bold text-lg mb-4">{res.price}</p>
                        <p className="text-[#212529] text-sm mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            {res.size}
                        </p>
                        
                        <div className="space-y-2 mb-8">
                            {res.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-2 text-[#212529] text-sm">
                                    <Check className="h-4 w-4 text-[#00BFA5]" />
                                    {feat}
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 border-2 border-[#00BFA5] text-[#00BFA5] font-bold rounded-xl hover:bg-[#00BFA5] hover:text-white transition-colors">
                            View Details
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};