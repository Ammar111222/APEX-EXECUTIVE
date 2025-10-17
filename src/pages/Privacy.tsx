import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Apex Executive Partners</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-jet-black text-soft-cream min-h-screen pt-28 pb-10"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-royal-gold">Privacy Policy</h1>
            <a
              href={encodeURI('/Privacy Policy v1_0725.pdf')}
              download
              className="bg-royal-gold hover:bg-warm-gold text-jet-black px-4 py-2 rounded-md text-sm font-medium"
            >
              Download PDF
            </a>
          </div>
          <div className="rounded-lg border border-royal-gold/30 overflow-hidden shadow-lg bg-deep-charcoal">
            <iframe
              title="Privacy Policy"
              src={encodeURI('/Privacy Policy v1_0725.pdf')}
              className="w-full"
              style={{ height: "80vh" }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Privacy;


