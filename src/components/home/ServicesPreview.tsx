import SectionTitle from "@/components/common/SectionTitle";
import ServiceCard from "@/components/common/ServiceCard";
import CTAButton from "@/components/common/CTAButton";
import { motion } from "framer-motion";

const ServicesPreview = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      title: "Business Consulting for Seed & Growth-Stage",
      description:
        "Strategic guidance to help early-stage startups establish solid foundations, validate business models, and prepare for scalable growth.",
      link: "/services#seed-stage",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      ),
      title: "Business Optimisation for SMEs",
      description:
        "Streamline & Scale: Comprehensive analysis and implementation of efficiency improvements for established small and medium enterprises looking to maximize profitability.",
      link: "/services#sme",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
      ),
      title: "Venture Growth Consulting",
      description:
        "Fuelling Hyper-Scalable Businesses: Accelerate your high-potential venture through our tailored scaling strategies, funding acquisition support, and market expansion planning.",
      link: "/services#venture",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8a5 5 0 0 0-10 0v7h10Z"></path>
          <path d="M8 15h8"></path>
          <path d="M12 8v0"></path>
          <path d="M12 11v0"></path>
          <path d="m19 15 3 3-3 3"></path>
          <path d="M2 15h16"></path>
          <path d="m5 21-3-3 3-3"></path>
          <path d="M22 15h-3"></path>
          <path d="M5 15H2"></path>
        </svg>
      ),
      title: "M&A Advisory Services",
      description:
        "Strategic Support for Successful Mergers & Acquisitions: Expert guidance through mergers, acquisitions, and other strategic transactions to ensure optimal valuations and seamless integrations.",
      link: "/services#ma",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Outsourced HR Services",
      description:
        "Expert HR Support Without the Overhead: Professional HR solutions including talent acquisition, performance management, compliance support, and employee relations to streamline your business operations.",
      link: "/services#outsourced-hr",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
        </svg>
      ),
      title: "Executive Coaching",
      description:
        "Tailored coaching for leaders and executives to unlock peak performance, enhance decision-making, and drive meaningful organizational results.",
      link: "/services#executive-coaching",
    },
  ];

  return (
    <section className="py-20 bg-deep-charcoal">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Services"
          title="EXPERT BUSINESS CONSULTING SERVICES"
          centered={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 text-lg text-white"
        >
          We offer tailored solutions that will elevate your business to the next level.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-deep-charcoal p-8 rounded-xl shadow-lg border border-royal-gold/30">
          <h3 className="text-xl font-bold text-center mb-4 text-royal-gold">Included in All Services:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includedFeatures.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center text-soft-cream/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-royal-gold mr-2"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-10">
          <CTAButton
            text="Download All Toolkits"
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
          />
        </div>
      </div>
    </section>
  );
};

const includedFeatures = [
  "Full company appraisal",
  "In-Depth Competitor Analysis",
  "Implementation of best practices",
  "On-going support"
];

export default ServicesPreview;
