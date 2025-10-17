import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
  variant?: "dark" | "gold" | "charcoal";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  delay = 0,
  variant = "dark",
}) => {
  const variantClasses = {
    dark: "bg-jet-black border border-royal-gold/30 text-soft-cream hover:border-royal-gold",
    gold: "bg-gradient-to-b from-royal-gold to-warm-gold text-jet-black",
    charcoal: "bg-deep-charcoal border border-royal-gold/30 text-soft-cream hover:border-royal-gold"
  };

  const iconBgClass = variant === "gold" ? "bg-jet-black/10" : "bg-royal-gold/10";
  const iconTextClass = variant === "gold" ? "text-jet-black" : "text-royal-gold";
  const descriptionClass = variant === "gold" ? "text-jet-black/80" : "text-soft-cream/80";
  const linkClass = variant === "gold" ? "text-jet-black font-medium" : "text-royal-gold font-medium";
  const linkHoverClass = variant === "gold" ? "hover:text-deep-charcoal" : "hover:text-warm-gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] p-6 flex flex-col h-full ${variantClasses[variant]}`}
    >
      <div className={`${iconBgClass} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        <div className={iconTextClass}>{icon}</div>
      </div>
      <h3 className={`text-xl font-bold mb-3 ${variant === "gold" ? "text-jet-black" : "text-royal-gold"}`}>{title}</h3>
      <p className={`${descriptionClass} mb-6 flex-grow`}>{description}</p>
      <Link
        to={link}
        className={`${linkClass} flex items-center ${linkHoverClass} transition-colors`}
      >
        Download Toolkit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
