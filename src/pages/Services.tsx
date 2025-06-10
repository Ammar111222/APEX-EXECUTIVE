import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      const id = location.hash.substring(1); // remove the #
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Our Services | Apex Executive Partners</title>
        <meta
          name="description"
          content="Discover our comprehensive business consulting services including Seed-Stage Consulting, SME Optimization, Venture Growth, M&A Advisory, and Outsourced HR solutions."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page Header */}
        <section className="pt-32 pb-20 bg-jet-black text-soft-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-royal-gold">
                Our Services
              </h1>
              <p className="text-xl text-soft-cream/80 max-w-2xl">
                Tailored consulting solutions designed to address your specific business challenges and opportunities at every stage of growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Section: Seed-Stage */}
        <section id="seed-stage" className="py-20 bg-royal-gold">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-jet-black">
                  Seed-Stage Consulting
                </h2>
                <p className="text-jet-black/80 mb-4">
                  For startups and early-stage ventures, our Seed-Stage Consulting provides the strategic guidance necessary to establish strong foundations and validate business models before scaling.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
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
                      className="text-jet-black mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-jet-black">Business Model Validation</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-jet-black mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-jet-black">Market Sizing & Competitive Analysis</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-jet-black mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-jet-black">Seed Funding Preparation</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-jet-black mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-jet-black">MVP Development Strategy</span>
                  </li>
                </ul>
                <CTAButton text="Get Started" href="/contact" variant="dark" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                  alt="Seed-Stage Consulting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Section: SME */}
        <section id="sme" className="py-20 bg-deep-charcoal text-soft-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1 image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                  alt="SME Optimization"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  SME Optimization
                </h2>
                <p className="text-soft-cream/80 mb-4">
                  Our SME Optimization services help established small and medium enterprises identify inefficiencies, streamline operations, and maximize profitability in competitive markets.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Operational Efficiency Analysis</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Process Reengineering</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Cost Structure Analysis</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Digital Transformation</span>
                  </li>
                </ul>
                <CTAButton text="Learn More" href="/contact" variant="primary" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Section: Venture Growth */}
        <section id="venture" className="py-20 bg-jet-black text-soft-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  Venture Growth
                </h2>
                <p className="text-soft-cream/80 mb-4">
                  Designed for high-growth companies seeking to scale rapidly, our Venture Growth services help you navigate the challenges of scaling operations, teams, and revenue.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Strategic Scaling Roadmap</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Team Expansion Strategy</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Revenue Acceleration</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Market Expansion Planning</span>
                  </li>
                </ul>
                <CTAButton text="Scale Your Business" href="/contact" variant="primary" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
                  alt="Venture Growth"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Section: M&A Advisory */}
        <section id="ma" className="py-20 bg-deep-charcoal text-soft-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1 image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
                  alt="M&A Advisory"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  M&A Advisory
                </h2>
                <p className="text-soft-cream/80 mb-4">
                  Our M&A Advisory services provide comprehensive support for businesses looking to acquire, merge, or be acquired, ensuring strategic alignment and maximum value creation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Target Identification</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Due Diligence</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Valuation Analysis</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Post-Merger Integration</span>
                  </li>
                </ul>
                <CTAButton text="Explore M&A Services" href="/contact" variant="primary" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Section: Outsourced HR */}
        <section id="outsourced-hr" className="py-20 bg-jet-black text-soft-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  Outsourced HR
                </h2>
                <p className="text-xl text-royal-gold mb-3 font-medium">
                  Outsourced HR Services in the UK – Expert HR Support Without the Overhead
                </p>
                <p className="text-soft-cream/80 mb-4 font-semibold text-lg">
                  Streamline Your Business with Professional HR Support
                </p>
                <p className="text-soft-cream/80 mb-6">
                  Running a business is challenging enough without the added burden of HR administration, compliance, and employee relations. That's where we come in. Our outsourced HR services provide UK businesses with expert HR support tailored to your needs, without the cost of an in-house team.
                </p>
                <p className="text-soft-cream/80 mb-6">
                  Whether you're a small business looking for occasional advice or a growing company needing full HR management, we offer flexible, cost-effective solutions to keep your workforce happy and compliant.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Recruitment & Talent Acquisition</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Performance Management</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Compliance & Legal Support</span>
                  </li>
                  <li className="flex items-start">
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
                      className="text-royal-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Employee Relations</span>
                  </li>
                </ul>
                <CTAButton text="HR Support Solutions" href="/contact" variant="primary" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
                  alt="Outsourced HR"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-jet-black via-deep-charcoal to-royal-gold text-soft-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-soft-cream/80 mb-8 text-lg">
                Schedule a consultation with our experts to explore how our tailored strategies can help you achieve your business goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CTAButton
                  text="Book a Consultation"
                  href="/contact"
                  variant="dark"
                  className="px-8 py-3 text-lg"
                />
              <CTAButton 
                  text="View Our Case Studies"
                  href="/insights"
                  variant="outline"
                  className="px-8 py-3 text-lg"
              />
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Services;
