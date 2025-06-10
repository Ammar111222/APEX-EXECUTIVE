import { motion } from "framer-motion";
import CTAButton from "@/components/common/CTAButton";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/2.webp')", 
        }}
      >
        <div className="absolute inset-0  bg-opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-royal-gold leading-tight mb-2"
          >
            APEX EXECUTIVE PARTNERS
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-soft-cream mb-4"
          >
            EMPOWERING ENTREPRENEURS AND PROFESSIONALS WITH TAILORED BUSINESS STRATEGIES.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-soft-cream/80 mb-8"
          >
            Supporting Growth-Focused Businesses
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <CTAButton 
              text="Explore Our Services"
              href="/services"
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
              className="text-lg py-3 px-6 bg-royal-gold text-jet-black hover:bg-warm-gold"
            />
            
            <CTAButton 
              text="Contact Us"
              href="/contact"
              variant="outline"
              className="text-lg py-3 px-6 text-royal-gold border-royal-gold hover:bg-royal-gold/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
