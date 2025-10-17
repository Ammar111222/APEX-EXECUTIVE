import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutSection from "@/components/home/AboutSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TeamSection from "@/components/home/TeamSection";
import InsightsSection from "@/components/home/InsightsSection";
import PackagesSection from "@/components/home/PackagesSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Apex Executive Partners | Business Consulting & Strategy</title>
        <meta
          name="description"
          content="Apex Executive Partners provides expert-led consulting for startups, SMEs, and high-growth ventures. Transform your business with our tailored strategies."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesPreview />
        <TeamSection />
        <PackagesSection />
        <InsightsSection />
        <CTASection />
      </motion.div>
    </>
  );
};

export default Home;
