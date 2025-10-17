import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/common/SectionTitle";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const businessStages = [
    { value: "", label: "Select your business stage" },
    { value: "pre-seed", label: "Pre-Seed (Idea Stage)" },
    { value: "seed", label: "Seed (Early Operations)" },
    { value: "early-growth", label: "Early Growth" },
    { value: "scaling", label: "Scaling" },
    { value: "mature", label: "Mature Business" },
  ];
  
  const serviceOptions = [
    { value: "", label: "Select service of interest" },
    { value: "seed-consulting", label: "Business Consulting for Seed & Growth-Stage" },
    { value: "sme-optimization", label: "Business Optimisation for SMEs" },
    { value: "venture-growth", label: "Venture Growth Consulting" },
    { value: "ma-advisory", label: "M&A Advisory Services" },
    { value: "outsourced-hr", label: "Outsourced HR Services" },
    { value: "other", label: "Other" },
  ];
  
  const onSubmit = (data: any) => {
    setIsSubmitting(true);

    emailjs.send(
      'service_sonn9ab', // <-- Replace with your EmailJS Service ID
      'template_o5w59hp', // <-- Replace with your EmailJS Template ID
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        businessStage: data.businessStage,
        serviceInterest: data.serviceInterest,
        message: data.message,
      },
      '_Pii-CqIlyydj16yZ' // <-- Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        toast.success("Thank you! We'll be in touch within 24 hours.");
        setIsSubmitting(false);
        reset();
      },
      (error) => {
        toast.error("Sorry, something went wrong. Please try again later.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Apex Executive Partners</title>
        <meta
          name="description"
          content="Get in touch with our team of business consultants. Whether you're a startup or established business, we're here to help you achieve your goals."
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
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-soft-cream/80">
                Have a question or ready to transform your business? Reach out to our team for a prompt response.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-deep-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-royal-gold">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-royal-gold font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
                      />
                      {errors.name && (
                        <p className="text-red-500 mt-1 text-sm">
                          {errors.name.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-royal-gold font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
                      />
                      {errors.email && (
                        <p className="text-red-500 mt-1 text-sm">
                          {errors.email.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-royal-gold font-medium mb-2">
                        Phone Number (optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        {...register("phone")}
                        className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="businessStage" className="block text-royal-gold font-medium mb-2">
                        Business Stage
                      </label>
                      <select
                        id="businessStage"
                        {...register("businessStage", { required: "Please select your business stage" })}
                        className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
                      >
                        {businessStages.map((stage) => (
                          <option key={stage.value} value={stage.value} className="bg-jet-black">
                            {stage.label}
                          </option>
                        ))}
                      </select>
                      {errors.businessStage && (
                        <p className="text-red-500 mt-1 text-sm">
                          {errors.businessStage.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="serviceInterest" className="block text-royal-gold font-medium mb-2">
                        Services Interested In
                      </label>
                      <select
                        id="serviceInterest"
                        {...register("serviceInterest", { required: "Please select a service you're interested in" })}
                        className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
                      >
                        {serviceOptions.map((service) => (
                          <option key={service.value} value={service.value} className="bg-jet-black">
                            {service.label}
                          </option>
                        ))}
                      </select>
                      {errors.serviceInterest && (
                        <p className="text-red-500 mt-1 text-sm">
                          {errors.serviceInterest.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-royal-gold font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your business needs"
                        {...register("message", { required: "Please provide some details about your inquiry" })}
                        className="w-full px-4 py-3 bg-jet-black border border-royal-gold/30 rounded-md focus:outline-none focus:border-royal-gold shadow-sm text-soft-cream"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 mt-1 text-sm">
                          {errors.message.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-royal-gold hover:bg-warm-gold text-jet-black font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-jet-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : "Submit Inquiry"}
                      </button>
                    </div>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-jet-black p-8 rounded-lg h-fit border border-royal-gold/30"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-royal-gold">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-soft-cream">Contact Details</h3>
                      <ul className="space-y-3 text-soft-cream/80">
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
                            className="mr-3 mt-1 text-royal-gold"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <span>020 3834 9620</span>
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
                            className="mr-3 mt-1 text-royal-gold"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                          </svg>
                          <a href="https://www.linkedin.com/company/109445367/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-royal-gold transition-colors">LinkedIn</a>
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
                            className="mr-3 mt-1 text-royal-gold"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <span>info@apexexecpartners.com</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-soft-cream">Business Hours</h3>
                      <ul className="space-y-2 text-soft-cream/80">
                        <li>
                          <span className="font-medium text-royal-gold">Monday - Friday:</span>
                          <br />
                          9:00 AM - 6:00 PM
                        </li>
                        <li>
                          <span className="font-medium text-royal-gold">Saturday:</span>
                          <br />
                          By appointment
                        </li>
                        <li>
                          <span className="font-medium text-royal-gold">Sunday:</span>
                          <br />
                          Closed
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-deep-charcoal p-4 rounded-lg border border-royal-gold/30">
                      <h3 className="font-semibold text-lg mb-2 text-royal-gold">Our Promise</h3>
                      <p className="text-soft-cream/80">Response Within 24 Hours</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-jet-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                subtitle="CONTACT US"
                title="Get In Touch"
                centered={true}
              />
              
              <div className="bg-deep-charcoal rounded-lg overflow-hidden shadow-lg mt-8 border border-royal-gold/30">
                <div className="aspect-w-16 aspect-h-9 bg-jet-black/50 flex items-center justify-center p-12">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 text-royal-gold"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <h3 className="text-xl font-bold mb-2 text-royal-gold">Contact Us</h3>
                    <p className="text-soft-cream/80 mb-6">020 3834 9620 | info@apexexecpartners.com</p>
                    <p className="text-sm text-soft-cream/60 italic">We work remotely to serve clients across the UK and internationally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
