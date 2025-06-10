
import { motion } from "framer-motion";
import CTAButton from "@/components/common/CTAButton";

const CTASection = () => {
  return (
    <section className="py-20 bg-navy bg-deep-charcoal">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 uppercase"
          >
            Ready to Build a Smarter, Stronger Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-8"
          >
            Let's talk about how our tailored consulting services can help your company reach its full potential.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <CTAButton
              text="LET'S TALK!"
              href="/contact"
              className="px-8 py-3 uppercase"
            />
            
            <CTAButton
              text="Get Your Free Toolkit"
              href="/insights#toolkit"
              variant="outline"
              className="px-8 py-3 text-white border-white hover:bg-white/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
