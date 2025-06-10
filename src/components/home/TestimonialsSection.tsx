import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

const testimonials = [
  {
    quote: "Apex transformed our startup from a struggling concept to a thriving business with clear direction and purpose. Their strategic insights were invaluable.",
    author: "Michael Robertson",
    position: "Founder, TechSpark Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The SME Optimization program helped us identify inefficiencies we never knew existed. Within six months, we increased profitability by 35%.",
    author: "Rebecca Liu",
    position: "CEO, Evergreen Solutions",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "Working with Apex's M&A team ensured we got maximum value from our acquisition. Their negotiation skills and attention to detail were exceptional.",
    author: "James Wilson",
    position: "Former CEO, DataFlow Systems",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-jet-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          centered={true}
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  display: currentIndex === index ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="bg-deep-charcoal p-8 rounded-lg shadow-md absolute w-full border border-royal-gold/30"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover border-4 border-royal-gold/30 shadow-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-royal-gold/50 mb-2"
                    >
                      <path d="M11.94 3.25c-4.06 0-7.69 3.04-7.69 7.22 0 3.8 3.13 6.7 6.7 7.22.19 0 .38-.13.38-.32v-1.27c0-.19-.13-.32-.32-.32-2.53-.57-4.49-2.66-4.49-5.31 0-2.72 2.09-4.94 4.81-5.31.19 0 .32-.13.32-.32V3.57c0-.19-.19-.32-.32-.32h-.38zm7.7 0c-4.06 0-7.69 3.04-7.69 7.22 0 3.8 3.13 6.7 6.7 7.22.19 0 .38-.13.38-.32v-1.27c0-.19-.13-.32-.32-.32-2.53-.57-4.49-2.66-4.49-5.31 0-2.72 2.09-4.94 4.81-5.31.19 0 .32-.13.32-.32V3.57c-.06-.19-.25-.32-.38-.32h-.32z" />
                    </svg>
                    <blockquote className="text-lg mb-4 italic text-soft-cream/80">
                      {testimonial.quote}
                    </blockquote>
                    <div>
                      <p className="font-bold text-royal-gold">{testimonial.author}</p>
                      <p className="text-sm text-soft-cream/60">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-deep-charcoal hover:bg-royal-gold/20 text-royal-gold rounded-full p-2 transition-colors border border-royal-gold/30"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="bg-deep-charcoal hover:bg-royal-gold/20 text-royal-gold rounded-full p-2 transition-colors border border-royal-gold/30"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
