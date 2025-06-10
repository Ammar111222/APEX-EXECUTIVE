import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/common/SectionTitle";
import InsightCard from "@/components/common/InsightCard";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { BlogPost } from "@/lib/types";
import { getAllBlogPosts } from "@/lib/blogService";

const Insights = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const fetchedPosts = await getAllBlogPosts();
      setBlogPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setError("Failed to load blog posts");
      // If there's an error, use fallback hardcoded data
      setBlogPosts(hardcodedBlogPosts);
    } finally {
      setLoading(false);
    }
  };
  
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    // In a real app, this would send the data to a server
    setTimeout(() => {
      toast.success("Thank you! Your toolkit is on the way to your inbox.");
      setIsSubmitting(false);
      reset();
    }, 1000);
  };
  
  // Fallback data in case Firebase loading fails
  const hardcodedBlogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Tech Investment Hits £20B in Q2 2025",
      shortDescription: "Analysis of the latest investment trends in the technology sector and what they mean for startups seeking funding in today's market.",
      fullContent: "",
      imageURL: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      templateType: "template1" as "template1" | "template2" | "template3",
      createdAt: Date.now() - 1000000,
      slug: "tech-investment-hits-20b",
    },
    {
      id: "2",
      title: "The Hidden Costs of Rapid Scaling",
      shortDescription: "Explore the often overlooked expenses and challenges that companies face when scaling operations too quickly without proper infrastructure.",
      fullContent: "",
      imageURL: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      templateType: "template1" as "template1" | "template2" | "template3",
      createdAt: Date.now() - 2000000,
      slug: "hidden-costs-rapid-scaling",
    },
    {
      id: "3",
      title: "Building a Resilient Supply Chain",
      shortDescription: "Strategies for creating robust supply chain networks that can withstand global disruptions and maintain business continuity.",
      fullContent: "",
      imageURL: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      templateType: "template1" as "template1" | "template2" | "template3",
      createdAt: Date.now() - 3000000,
      slug: "resilient-supply-chain",
    },
    {
      id: "4",
      title: "Ethical AI Implementation for SMEs",
      shortDescription: "Practical guidelines for small and medium enterprises looking to adopt AI technologies while maintaining ethical standards.",
      fullContent: "",
      imageURL: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      templateType: "template1" as "template1" | "template2" | "template3",
      createdAt: Date.now() - 4000000,
      slug: "ethical-ai-implementation",
    },
    {
      id: "5",
      title: "The Future of Remote Work Models",
      shortDescription: "Examining the evolution of hybrid and remote work arrangements and their impact on business productivity and culture.",
      fullContent: "",
      imageURL: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      templateType: "template1" as "template1" | "template2" | "template3",
      createdAt: Date.now() - 5000000,
      slug: "future-remote-work-models",
    },
    {
      id: "6",
      title: "Navigating Regulatory Changes in 2025",
      shortDescription: "A comprehensive guide to understanding and preparing for the latest regulatory changes affecting businesses across industries.",
      fullContent: "",
      imageURL: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
      templateType: "template1" as "template1" | "template2" | "template3",
      createdAt: Date.now() - 6000000,
      slug: "navigating-regulatory-changes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Business Insights & Resources | Apex Executive Partners</title>
        <meta
          name="description"
          content="Explore our latest business insights, articles, and free resources designed to help your business thrive in today's competitive landscape."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insights & Resources
              </h1>
              <p className="text-xl text-soft-cream/80 max-w-2xl">
                Explore our latest articles, research, and tools designed to help your business navigate challenges and seize opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Free Toolkit Section */}
        <section id="toolkit" className="py-20 bg-deep-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  Download Our Free Business Growth Toolkit
                </h2>
                <p className="text-soft-cream/80 mb-6">
                  Our comprehensive toolkit includes templates, checklists, and guides to help you navigate:
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
                    <span className="text-soft-cream">Strategic Planning Frameworks</span>
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
                    <span className="text-soft-cream">Financial Projection Templates</span>
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
                    <span className="text-soft-cream">Operations Optimization Checklist</span>
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
                    <span className="text-soft-cream">Scaling Readiness Assessment</span>
                  </li>
                </ul>
                
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-royal-gold font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-2 bg-jet-black border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold text-soft-cream"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message as string}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-royal-gold font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-2 bg-jet-black border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold text-soft-cream"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-royal-gold hover:bg-warm-gold text-jet-black font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-jet-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Get Your Free Toolkit"
                    )}
                  </button>
                </form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border border-royal-gold/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                  alt="Business Growth Toolkit"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section id="blog" className="py-20 bg-jet-black">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Latest Insights"
              subtitle="Expert Analysis and Actionable Advice"
              centered={true}
            />
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-12 w-12 border-4 border-royal-gold border-t-transparent rounded-full"></div>
              </div>
            ) : error ? (
              <div className="flex justify-center py-6">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {blogPosts.map((post, index) => (
                  <InsightCard
                    key={post.id}
                    image={post.imageURL}
                    title={post.title}
                    date={new Date(post.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    summary={post.shortDescription}
                    slug={post.slug}
                    delay={index * 0.1}
                    variant="dark"
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Webinar Promo */}
        <section className="py-20 bg-deep-charcoal border-t border-royal-gold/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  Join Our Next Webinar
                </h2>
                <p className="text-soft-cream/80 mb-8 text-lg">
                  Stay ahead of the curve with our expert-led webinars on business growth strategies.
                </p>
                
                <a
                  href="/webinars"
                  className="inline-block bg-royal-gold hover:bg-warm-gold text-jet-black font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  View Upcoming Webinars
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Insights;
