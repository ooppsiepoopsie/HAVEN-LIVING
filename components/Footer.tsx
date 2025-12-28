import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Star, Facebook, Twitter, Instagram, Linkedin, Heart, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailForm = z.infer<typeof emailSchema>;

export const Footer: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: EmailForm) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00BFA5', '#0D47A1', '#ffffff']
    });
    reset();
    alert(`Subscribed with: ${data.email}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0D47A1] text-slate-300 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00BFA5]/10 to-transparent pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Star className="h-6 w-6 text-[#00BFA5] fill-[#00BFA5]" />
              <span className="text-xl font-bold font-montserrat">HAVEN LIVING</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-200">
              Premium extended living spaces designed for comfort, community, and the modern lifestyle.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold font-montserrat">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Residences', 'Services', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#00BFA5] transition-colors relative group inline-block text-slate-200">
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00BFA5] transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Locations */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold font-montserrat">Locations</h3>
            <ul className="space-y-2 text-sm">
              {['New York City', 'San Francisco', 'Austin', 'London', 'Berlin'].map((city) => (
                <li key={city}>
                  <a href="#" className="hover:text-[#00BFA5] transition-colors text-slate-200">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold font-montserrat">Newsletter</h3>
            <p className="text-xs text-slate-200">Stay updated with our latest openings.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#09357a] border border-[#1e5aa0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00BFA5] transition-colors text-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00BFA5] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
              {errors.email && (
                <p className="text-red-300 text-xs">{errors.email.message}</p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="border-t border-[#1e5aa0] mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="bg-[#09357a] p-2 rounded-full text-slate-300 hover:bg-[#00BFA5] hover:text-white transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-1 text-xs text-slate-300"
          >
            <span>&copy; {new Date().getFullYear()} Haven Living. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="h-3 w-3 text-red-400 fill-red-400" />
            </motion.div>
            <span>for community.</span>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};