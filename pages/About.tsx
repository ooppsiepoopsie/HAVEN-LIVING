import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Users, Globe, Award } from 'lucide-react';
import { TeamMember, Stat, ValuePillar } from '../types';

/* --- DATA --- */
const teamMembers: TeamMember[] = [
  { id: 1, name: "Sarah Jenkins", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "David Chen", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Maria Rodriguez", role: "Community Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" },
];

const stats: Stat[] = [
  { id: 1, label: "Cities", value: 12, suffix: "+" },
  { id: 2, label: "Residents", value: 5000, suffix: "+" },
  { id: 3, label: "Happiness", value: 98, suffix: "%" },
];

const values: ValuePillar[] = [
  { id: 1, title: "Community First", description: "We build spaces that foster connection.", iconName: "Users" },
  { id: 2, title: "Sustainable Living", description: "Eco-friendly designs for a better future.", iconName: "Globe" },
  { id: 3, title: "Excellence", description: "Premium service in every detail.", iconName: "Award" },
];

/* --- TILT CARD COMPONENT --- */
interface TiltCardProps {
  member: TeamMember;
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ member }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-80 md:h-96 w-full rounded-xl cursor-pointer perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="h-full w-full relative">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white font-montserrat">{member.name}</h3>
                <p className="text-[#80CBC4] font-medium">{member.role}</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-20 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-[#0D47A1] font-montserrat mb-6">
            Redefining <span className="text-[#00BFA5]">Urban Living</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#212529] text-base md:text-lg">
            We're on a mission to create homes that connect people, inspire creativity, 
            and enable a more flexible way of living.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0D47A1] text-white py-16 md:py-20 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-5xl font-bold text-[#00BFA5] mb-2 font-montserrat">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, idx) => {
            const Icon = value.iconName === 'Users' ? Users : value.iconName === 'Globe' ? Globe : Award;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#00BFA5]/30 transition-colors"
              >
                <div className="w-14 h-14 bg-[#E0F7FA] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-[#00BFA5]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D47A1] mb-4 font-montserrat">{value.title}</h3>
                <p className="text-[#212529] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D47A1] font-montserrat">Meet the Team</h2>
          <div className="w-16 h-1 bg-[#00BFA5] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TiltCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};