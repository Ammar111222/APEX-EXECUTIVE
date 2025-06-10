import React, { useState } from "react";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  position,
  bio,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-md group border border-royal-gold/30 hover:border-royal-gold"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] bg-deep-charcoal">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 bg-jet-black text-soft-cream">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-royal-gold font-medium">{position}</p>
      </div>
      
      <div
        className={`absolute inset-0 bg-gradient-to-b from-jet-black via-deep-charcoal to-royal-gold/90 text-soft-cream p-6 flex flex-col justify-center transition-all duration-300 transform ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h3 className="text-xl font-bold mb-2 text-royal-gold">{name}</h3>
        <p className="text-soft-cream font-medium mb-4">{position}</p>
        <p className="text-sm overflow-auto max-h-[60%] text-soft-cream/90">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
