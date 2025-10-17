import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { getFeaturedTestimonials } from "@/lib/testimonialService";
import { Testimonial } from "@/lib/types";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const fetchedTestimonials = await getFeaturedTestimonials();
        console.log('Fetched testimonials:', fetchedTestimonials);
        
        if (fetchedTestimonials.length === 0) {
          // If no testimonials in database, use fallback data
          setTestimonials(fallbackTestimonials);
        } else {
          setTestimonials(fetchedTestimonials);
        }
      } catch (err) {
        console.error('Error loading testimonials:', err);
        setError('Failed to load testimonials');
        // Use fallback data on error
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  useEffect(() => {
    if (!loading && window.location.hash === "#testimonials") {
      const el = document.getElementById("testimonials");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [loading]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Fallback testimonials in case of empty database or error
  const fallbackTestimonials: Testimonial[] = [
    {
      id: "fallback1",
      clientName: "Michael Robertson",
      clientPosition: "Founder",
      clientCompany: "TechSpark Inc.",
      testimonialText: "Apex transformed our startup from a struggling concept to a thriving business with clear direction and purpose. Their strategic insights were invaluable.",
      imageURL: "https://randomuser.me/api/portraits/men/32.jpg",
      createdAt: Date.now(),
      featured: true
    },
    {
      id: "fallback2",
      clientName: "Rebecca Liu",
      clientPosition: "CEO",
      clientCompany: "Evergreen Solutions",
      testimonialText: "The SME Optimization program helped us identify inefficiencies we never knew existed. Within six months, we increased profitability by 35%.",
      imageURL: "https://randomuser.me/api/portraits/women/65.jpg",
      createdAt: Date.now(),
      featured: true
    },
    {
      id: "fallback3",
      clientName: "James Wilson",
      clientPosition: "Former CEO",
      clientCompany: "DataFlow Systems",
      testimonialText: "Working with Apex's M&A team ensured we got maximum value from our acquisition. Their negotiation skills and attention to detail were exceptional.",
      imageURL: "https://randomuser.me/api/portraits/men/68.jpg",
      createdAt: Date.now(),
      featured: true
    },
  ];

  if (loading) {
    return (
      <section className="py-20 bg-jet-black">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            centered={true}
          />
          <div className="flex justify-center py-12">
            <div className="animate-pulse w-full max-w-4xl h-64 bg-deep-charcoal/50 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error && testimonials.length === 0) {
    return (
      <section className="py-20 bg-jet-black">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            centered={true}
          />
          <div className="text-center text-soft-cream/60 py-12">
            Unable to load testimonials at this time.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-16 bg-jet-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          centered={true}
        />
        {/* Wider but shorter testimonial card wrapper */}
        <div className="max-w-6xl mx-auto pb-6">
          <div className="relative min-h-[16rem] md:min-h-[14rem] flex items-stretch">
            <AnimatePresence mode="wait">
              {testimonials.length > 0 && (
                <motion.div
                  key={testimonials[currentIndex]?.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-deep-charcoal p-6 md:p-8 rounded-lg shadow-md w-full border border-royal-gold/30 flex flex-col relative z-10"
                >
                  {(() => {
                    const t = testimonials[currentIndex];
                    return (
                      <>
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start h-full">
                          <div className="flex-shrink-0">
                            {t.imageURL ? (
                              <img
                                src={t.imageURL}
                                alt={t.clientName}
                                className="w-20 h-20 rounded-full object-cover border-4 border-royal-gold/30 shadow-md mx-auto md:mx-0"
                              />
                            ) : (
                              <div className="w-20 h-20 rounded-full bg-royal-gold/20 flex items-center justify-center text-royal-gold text-2xl font-bold border-4 border-royal-gold/30 shadow-md mx-auto md:mx-0">
                                {t.clientName.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className="flex-grow pr-2 overflow-y-auto md:overflow-visible max-h-[140px] md:max-h-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-royal-gold/50 mb-2"
                            >
                              <path d="M11.94 3.25c-4.06 0-7.69 3.04-7.69 7.22 0 3.8 3.13 6.7 6.7 7.22.19 0 .38-.13.38-.32v-1.27c0-.19-.13-.32-.32-.32-2.53-.57-4.49-2.66-4.49-5.31 0-2.72 2.09-4.94 4.81-5.31.19 0 .32-.13.32-.32V3.57c0-.19-.19-.32-.32-.32-.32h-.38zm7.7 0c-4.06 0-7.69 3.04-7.69 7.22 0 3.8 3.13 6.7 6.7 7.22.19 0 .38-.13.38-.32v-1.27c0-.19-.13-.32-.32-.32-2.53-.57-4.49-2.66-4.49-5.31 0-2.72 2.09-4.94 4.81-5.31.19 0 .32-.13.32-.32V3.57c-.06-.19-.25-.32-.38-.32h-.32z" />
                            </svg>
                            <blockquote className="text-base md:text-[1.05rem] mb-4 italic text-soft-cream/80">
                              {t.testimonialText}
                            </blockquote>
                            <div>
                              <p className="font-bold text-royal-gold">{t.clientName}</p>
                              <p className="text-sm text-soft-cream/60">
                                {t.clientPosition}
                                {t.clientCompany && `, ${t.clientCompany}`}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Bottom arrows and dots */}
                        <div className="flex flex-col items-center mt-4 w-full">
                          <div className="flex justify-center space-x-6 w-full">
                            <button
                              onClick={prevTestimonial}
                              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-deep-charcoal hover:bg-royal-gold/20 text-royal-gold rounded-full border-2 border-royal-gold/60 shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-royal-gold/60 active:scale-95 group"
                              aria-label="Previous testimonial"
                              style={{ minWidth: 44, minHeight: 44 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1 group-active:scale-110 drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
                                <path d="m15 18-6-6 6-6"></path>
                              </svg>
                            </button>
                            <button
                              onClick={nextTestimonial}
                              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-deep-charcoal hover:bg-royal-gold/20 text-royal-gold rounded-full border-2 border-royal-gold/60 shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-royal-gold/60 active:scale-95 group"
                              aria-label="Next testimonial"
                              style={{ minWidth: 44, minHeight: 44 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-active:scale-110 drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex justify-center mt-4 space-x-2">
                            {testimonials.map((_, idx) => (
                              <span
                                key={idx}
                                className={`w-3 h-3 rounded-full border border-royal-gold/60 transition-all duration-300 ${currentIndex === idx ? 'bg-royal-gold shadow-lg scale-110' : 'bg-deep-charcoal'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
