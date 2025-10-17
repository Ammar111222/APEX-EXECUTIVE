import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface InsightCardProps {
  image: string;
  title: string;
  date?: string;
  summary: string;
  slug: string;
  delay?: number;
  variant?: "dark" | "gold" | "charcoal";
}

const InsightCard: React.FC<InsightCardProps> = ({
  image,
  title,
  date,
  summary,
  slug,
  delay = 0,
  variant = "dark"
}) => {
  const variantClasses = {
    dark: "bg-jet-black border border-royal-gold/30 hover:border-royal-gold text-soft-cream",
    gold: "bg-royal-gold text-jet-black border border-jet-black/30 hover:border-jet-black",
    charcoal: "bg-deep-charcoal border border-royal-gold/30 hover:border-royal-gold text-soft-cream"
  };

  const dateClass = variant === "gold" ? "text-jet-black/70" : "text-soft-cream/70";
  const titleClass = variant === "gold" ? "text-jet-black hover:text-deep-charcoal" : "text-royal-gold hover:text-warm-gold";
  const summaryClass = variant === "gold" ? "text-jet-black/80" : "text-soft-cream/80";
  const linkClass = variant === "gold" ? "text-jet-black font-medium hover:text-deep-charcoal" : "text-royal-gold font-medium hover:text-warm-gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] ${variantClasses[variant]}`}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jet-black/80 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {date ? (
          <span className={`text-sm ${dateClass} mb-2`}>{date}</span>
        ) : null}
        <h3 className={`text-xl font-bold mb-3 transition-colors ${titleClass}`}>
          <Link to={`/insights/${slug}`}>{title}</Link>
        </h3>
        <p className={`${summaryClass} mb-4 flex-grow`}>{summary}</p>
        <Link
          to={`/insights/${slug}`}
          className={`${linkClass} inline-flex items-center transition-colors`}
        >
          Read More
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
      </div>
    </motion.div>
  );
};

export default InsightCard;
