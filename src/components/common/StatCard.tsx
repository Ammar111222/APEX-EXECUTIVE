import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-center p-6 bg-jet-black rounded-lg shadow-md"
    >
      <div className="flex-shrink-0 mr-4">
        <div className="bg-deep-charcoal rounded-full w-14 h-14 flex items-center justify-center">
          <div className="text-royal-gold">{icon}</div>
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-royal-gold">{value}</div>
        <div className="text-sm text-soft-cream">{label}</div>
      </div>
    </motion.div>
  );
};

export default StatCard;
