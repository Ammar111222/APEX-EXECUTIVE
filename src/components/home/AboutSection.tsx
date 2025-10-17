import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const AboutSection = () => {
  return (
    <section className="py-20 bg-deep-charcoal">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="About Us"
          title="INNOVATIVE BUSINESS STRATEGIES FOR SUCCESS"
          centered={true}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-soft-cream mb-6">
            Welcome to Apex Executive Partners. Our expert associates are dedicated to helping businesses develop innovative strategies to achieve their goals and drive profitability. Contact us today to discover how we can help your business thrive.
          </p>
          
          <CTAButton 
            text="Learn More About Us"
            href="/about"
            className="mt-2"
          />
        </motion.div>
        
        {/* Move testimonials above the Unlock section */}
        <div className="mb-12">
          <TestimonialsSection />
        </div>
        <h3 className="text-2xl font-bold text-center mb-8 text-royal-gold">Unlock Your Business Potential</h3>
        <p className="text-center text-lg font-semibold text-soft-cream mb-10">EMPOWERING ENTREPRENEURS AND PROFESSIONALS WITH TAILORED BUSINESS STRATEGIES</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard 
              key={index}
              title={guarantee.title}
              description={guarantee.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm italic text-soft-cream/70"
        >
          *Backed by our money-back guarantee subject to terms and conditions available on request
        </motion.div>
      </div>
    </section>
  );
};

interface GuaranteeCardProps {
  title: string;
  description: string;
  delay?: number;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-jet-black border border-muted-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-lg font-bold text-soft-cream mb-2">
        Guaranteed <span className="text-royal-gold">{title}</span>
      </h3>
      <p className="text-soft-cream/80 text-sm">{description}</p>
    </motion.div>
  );
};

const guarantees = [
  {
    title: "EXPERTISE",
    description: "Backed by Years of Proven Success.",
  },
  {
    title: "TRANSPARENCY",
    description: "No Hidden Fees, No Surprises.",
  },
  {
    title: "FLEXIBILITY",
    description: "Tailored Solutions for YOUR Needs.",
  },
  {
    title: "SUPPORT",
    description: "Ongoing Guidance Even After Delivery.",
  },
  {
    title: "SATISFACTION",
    description: "Or Your Money Back.",
  },
];

export default AboutSection;
