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
                <p className="text-jet-black/80 mb-4">
                  As you navigate the complexities of early growth, our Seed-Stage Consulting helps refine your value proposition and identify high-potential customer segments. We work closely with founders to optimize product market fit, ensuring that every iteration brings you closer to sustainable traction. From crafting compelling investor pitches to building scalable operational frameworks, our support is tailored to position your venture for long term success in a competitive landscape.
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
                <CTAButton text="Download our free seed stage toolkit" href="/contact" variant="dark" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[550px] rounded-lg overflow-hidden shadow-xl image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Seed-Stage Consulting"
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
                className="relative h-[550px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1 image-overlay"
              >
                <img
                  src="/images/SME%20OPTIMIZATION.png"
                  alt="SME Optimization"
                  style={{ objectPosition: '50% 20%' }}
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
                <p className="text-soft-cream/80 mb-4">
                  Beyond initial validation, we assist in designing data driven growth experiments to test assumptions and prioritize key initiatives. Our approach combines lean methodology with actionable insights, helping you allocate resources efficiently while minimizing risk. Whether it's refining your go-to-market strategy or establishing early revenue streams, we equip you with the tools to make informed decisions, turning early traction into scalable momentum.
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
                <CTAButton text="Download our free SME optimization toolkit" href="/contact" variant="primary" />
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
                <p className="text-soft-cream/80 mb-4">
                  We provide hands on support in optimizing your unit economics and operational efficiency, ensuring that growth is both sustainable and capital efficient. From refining your sales engine to implementing scalable customer acquisition strategies, our expertise helps you maintain momentum while avoiding common scaling pitfalls. Whether entering new markets or securing later stage funding, we align your execution with long-term vision, turning scale into a competitive advantage.
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
                <CTAButton text="Download our free venture growth toolkit" href="/contact" variant="primary" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[550px] rounded-lg overflow-hidden shadow-xl image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                  alt="Venture Growth"
                  style={{ objectPosition: '50% 20%' }}
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
                className="relative h-[550px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1 image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80"
                  alt="M&A Advisory"
                  style={{ objectPosition: '50% 20%' }}
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
                <p className="text-soft-cream/80 mb-4">
                  We guide you through every phase of the transaction, from initial target screening to seamless post deal execution, minimizing disruption and unlocking synergies. Our team helps structure win-win deals, whether you're pursuing aggressive expansion through acquisitions or positioning for an optimal exit. With deep expertise in negotiation strategy and regulatory considerations, we ensure your M&A journey is both strategic and execution ready.
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
                <CTAButton text="Download our free M&A advisory toolkit" href="/contact" variant="primary" />
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
                <CTAButton text="Download our free HR toolkit" href="/contact" variant="primary" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[550px] rounded-lg overflow-hidden shadow-xl image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="Outsourced HR"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Section: Executive Coaching */}
        <section id="executive-coaching" className="py-20 bg-royal-gold text-jet-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[550px] rounded-lg overflow-hidden shadow-xl image-overlay order-1 md:order-1"
              >
                <img
                  src="/images/executive.jpg"
                  alt="Executive Coaching"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-2 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-jet-black">
                  Executive Coaching
                </h2>
                <p className="text-jet-black/80 mb-4">
                  For established leaders and high-potential executives, our Executive Coaching services offer tailored development to navigate complex challenges and unlock peak performance.
                </p>
                <p className="text-jet-black/80 mb-4">
                  As you lead your organization through strategic transformations and rising expectations, our coaching refines your vision and enhances your leadership influence. We work closely with executives to sharpen decision-making, build resilient leadership styles, and address unique development needs.
                </p>
                <p className="text-jet-black/80 mb-4">
                  Whether it's improving communication, strengthening team performance, or boosting strategic impact, our coaching is designed to elevate your leadership and deliver meaningful organizational results.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jet-black mr-2 mt-1 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                    <span className="text-jet-black">Strategic Leadership Development</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jet-black mr-2 mt-1 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                    <span className="text-jet-black">Enhancing Executive Presence</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jet-black mr-2 mt-1 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                    <span className="text-jet-black">Decision-Making & Problem Solving</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jet-black mr-2 mt-1 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                    <span className="text-jet-black">Team Dynamics & Influence</span>
                  </li>
                </ul>
                <CTAButton text="Download our free executive coaching toolkit" href="/contact" variant="dark" />
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
                  text="View Our Testimonials"
                  href="/#testimonials"
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
