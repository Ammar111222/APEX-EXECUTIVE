import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const InsightsSection = () => {
  return (
    <section className="py-20 bg-jet-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Industry Insights"
          title="Latest Business Intelligence"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
          date={undefined}
              title={insight.title}
              link={insight.link}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <CTAButton 
            text="View All Insights"
            href="/insights"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            }
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-navy text-white p-10 rounded-lg max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">TRANSFORM YOUR BUSINESS WITH APEX EXECUTIVE PARTNERS</h3>
          <p className="mb-6">REQUEST OUR FREE BUSINESS TOOLKIT HERE</p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-lg flex-grow text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-lg transition-colors"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-xs mt-4 text-gray-300">Subscribe for free toolkits and more!</p>
        </motion.div>
      </div>
    </section>
  );
};

interface InsightCardProps {
  date?: string;
  title: string;
  link: string;
  delay?: number;
}

const InsightCard: React.FC<InsightCardProps> = ({ date, title, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-deep-charcoal border border-royal-gold/30 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-royal-gold/60 transition-all duration-300"
    >
      <Link to={link} className="block p-6">
        {date ? <p className="text-royal-gold text-sm font-medium mb-2">{date}</p> : null}
        <h3 className="text-xl font-bold text-soft-cream mb-2 hover:text-royal-gold transition-colors">{title}</h3>
        <div className="flex justify-end mt-4">
          <span className="inline-flex items-center text-soft-cream/70 hover:text-royal-gold transition-colors">
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
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const insights = [
  {
    date: "",
    title: "How Apex supports VC-backed businesses",
    link: "/insights/vc-backed-businesses",
  },
  {
    date: "",
    title: "Tech Investment Reaches £20 billion in the last 12 months",
    link: "/insights/tech-investment",
  },
];

export default InsightsSection;
