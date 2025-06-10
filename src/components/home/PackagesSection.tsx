import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const PackagesSection = () => {
  return (
    <section className="py-20 bg-jet-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Packages"
          title="Packages Available"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <PriceCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-deep-charcoal border border-muted-gray p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-royal-gold">How We Work And Price For Services Provided</h3>
          <p className="mb-4 text-soft-cream">Apex Executive Partners Associates are all hugely professional and experienced business executives in their own right, who once aligned to your company, will agree the project scope and provide a detailed cost analysis.</p>
          <p className="mb-4 text-soft-cream">Costs are determined on either a day or a project rate.</p>
          <p className="mb-4 text-soft-cream">Apex Associates fees typically range from £600-£1800 per day depending on the depth of the project and the skills required to deliver.</p>
          <p className="text-sm text-soft-cream/70 italic">*Our money-back guarantee is subject to terms and conditions available on request.</p>
          
          <div className="mt-8">
            <CTAButton 
              text="CONTACT US FOR MORE INFORMATION ON OUR PACKAGES"
              href="/contact"
              className="uppercase"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-semibold mb-3">Our Approach</h4>
          <p className="max-w-xl mx-auto">
            We believe that the key to success is a collaborative approach that puts your needs first.
            Our team works closely with you every step of the way to ensure that our solutions are aligned with your goals and objectives.
          </p>
          
          <div className="mt-6">
            <CTAButton 
              text="Looking to join our TEAM of associates?"
              href="/contact#careers"
              variant="secondary"
              className="mt-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PriceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-deep-charcoal border border-muted-gray rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-royal-gold mb-4">{title}</h3>
      <p className="text-soft-cream">{description}</p>
    </motion.div>
  );
};

const packages = [
  {
    title: "Fixed Fee Project",
    description: "Perfect for clients with complex one-off needs. We add the skills and resources your business needs, FAST. Contact us to discuss your specific requirements."
  },
  {
    title: "Retain and Grow",
    description: "Ideal for clients with ongoing needs who want to utilize our services on a fixed-fee monthly retainer basis. Includes regular consultation and support."
  }
];

export default PackagesSection;
