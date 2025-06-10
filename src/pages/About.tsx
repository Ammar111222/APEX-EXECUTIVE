import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const About = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filterOptions = [
    { id: "all", label: "All" },
    { id: "strategy", label: "Strategy" },
    { id: "finance", label: "Finance" },
    { id: "operations", label: "Operations" },
    { id: "technology", label: "Technology" },
    { id: "legal", label: "Legal" },
  ];
  
  const teamMembers = [
    {
      id: 1,
      name: "Jo Fleming",
      position: "Founder of Apex Executive Partners",
      image: "/images/jo.webp",
      expertise: ["strategy", "operations"],
    },
    {
      id: 2,
      name: "John",
      position: "C-Suite Fractional Board Director",
      image: "/images/john.webp",
      bio: "With over 40 years of experience as a Board Director, Strategy Consultant, and Entrepreneur, John has started seven of his own businesses and advised over 100 scale-ups, family businesses, and SMEs on strategy, growth, and innovation. John has been ranked among the Top UK Entrepreneurs and Innovators, and has won a Lifetime Achievement Award.",
      expertise: ["strategy", "finance"],
    },
    {
      id: 3,
      name: "Pia",
      position: "Commercial Business Lawyer",
      image: "/images/pia.webp",
      bio: "Pia is a dual qualified (English/Danish) pragmatic corporate & commercial solicitor with many years' experience advising a wide range of business clients including start-ups, SMEs and listed companies on a multitude of corporate & commercial legal issues including buying and selling of businesses/companies (M&A), cross-border transactions.",
      expertise: ["legal"],
    },
    {
      id: 4,

      name: "Claudio",

      position: "United Emirates CFO, Change Agent",

      image: "/images/claudio.webp",

      bio: "Project and Finance Executive for processes of organizational transition. Advisory Board Member (Advisory Council Team ex-FGV) for small & medium size organizations. Change agent leading to corporate restructuring and cultural transformation, adding value to organizations through entrepreneurial mindset and spirit of innovation.",

      expertise: ["finance", "operations"],
    },
    {
      id: 5,
      name: "Jade",
      position: "UK Employment Law Solicitor",
      image: "/images/jade.webp",
      bio: "Jade is a highly skilled and registered solicitor specialising in employment law, dedicated to helping UK companies navigate the complexities of workplace regulations with confidence. With a proactive approach, Jade ensures businesses remain fully compliant with employment law, safeguarding them from costly disputes, legal pitfalls, and reputational damage.",
      expertise: ["legal"],
    },
    {
      id: 6,
      name: "David",
      position: "Digital Transformation Specialist",
      image: "/images/david.webp",
      bio: "David is a professionally qualified customer focused programme and digital transformation delivery specialist, with extensive international experience in the planning, execution and delivery of complex programmes and project portfolios. David works closely with our clients to design and develop class leading technical solutions.",
      expertise: ["technology", "operations"],
    },
    {
      id: 7,
      name: "Stephen",
      position: "Business Intelligence Specialist",
      image: "/images/stephen.jpg",
      bio: "With a background in serious fraud and cybercrime investigation, Stephen delivers In-Depth Business Rival Research, Helping Businesses Stay Informed and Stay Ahead. Stephen works with business owners, executives, and investors who need clear, raw data on their competitors to make strategic decisions with confidence. His focus is on precision.",
      expertise: ["technology", "strategy"],
    },
    {
      id: 8,
      name: "Martin",
      position: "Sustainability and Growth Specialist",
      image: "/images/martin.webp",
      bio: "With a proven track record of driving 250% company growth, Martin specializes in helping ambitious business owners build sustainable, scalable, and sellable ventures. Whether you're looking to streamline operations, scale effectively, or prepare your business for a successful exit, Martin can support.",
      expertise: ["operations", "strategy"],
    },
    {
      id: 9,
      name: "Margaret",
      position: "Executive Coach",
      image: "/images/margaret.webp",
      bio: "Margaret is a PGC Senior Practitioner in Business & Executive Coaching and a Fellow of the Chartered Management Institute. She specialises in 121 Leadership & Management Coaching, Psychometric Assessments, Coaching Workshops, Transitional & On-Boarding Coaching.",
      expertise: ["operations"],
    },
    {
      id: 10,
      name: "Dan",
      position: "Executive Business Director",
      image: "/images/dan.webp",
      bio: "Executive Business Director | Scaling Businesses | Driving Growth & Turnarounds. With over 30 years of leadership experience at board and MD level, Dan specialises in guiding businesses to achieve exceptional growth and long-term success. From shaping strategy to empowering leadership teams. Every business faces pivotal moments—whether it's scaling up or turning around performance—and Dan provides the expertise to navigate these critical transitions successfully.",
      expertise: ["strategy", "operations"],
    },
  ];
  
  const filteredMembers = teamMembers.filter(member => {
    if (activeFilter === "all") return true;
    return member.expertise.includes(activeFilter);
  });

  const companyValues = [
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from initial consultation to delivery and follow-up.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We are committed to honesty and transparency in all our client relationships, even when that means delivering difficult truths.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We continuously seek creative solutions to complex business challenges, embracing new technologies and methodologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12.5V12a10 10 0 0110-10v0a10 10 0 0110 10v.5"></path>
          <path d="M12 13a5 5 0 015 5v6H7v-6a5 5 0 015-5z"></path>
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We believe in working alongside our clients as true partners, integrating seamlessly with your team for optimal results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
          <path d="M16 3.13a4 4 0 010 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Apex Executive Partners</title>
        <meta
          name="description"
          content="Meet the expert team behind Apex Executive Partners. Our associates are dedicated to helping businesses develop innovative strategies to achieve their goals and drive profitability."
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
                About Us
              </h1>
              <p className="text-xl text-soft-cream/80 max-w-2xl">
                Empowering entrepreneurs and professionals with tailored business strategies for growth-focused businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-deep-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold">
                  Our Story
                </h2>
                <p className="text-soft-cream/80 mb-4">
                  Welcome to Apex Executive Partners. Our expert associates are dedicated to helping businesses develop innovative strategies to achieve their goals and drive profitability.
                </p>
                <p className="text-soft-cream/80 mb-4">
                  We believe that the key to success is a collaborative approach that puts your needs first. Our team works closely with you every step of the way to ensure that our solutions are aligned with your goals and objectives.
                </p>
                <p className="text-soft-cream/80 mb-4">
                  We offer tailored solutions that will elevate your business to the next level. Ready to build a smarter, stronger business? Let's talk!
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border border-royal-gold/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-jet-black">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="Our Values"
              title="What Drives Us"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-deep-charcoal p-6 rounded-lg shadow-md border border-royal-gold/30"
                >
                  <div className="text-royal-gold mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-soft-cream">{value.title}</h3>
                  <p className="text-soft-cream/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-deep-charcoal">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="OUR TEAM"
              title="Your Strategic Growth Partners"
              centered={true}
            />
            
            <div className="flex justify-center mt-6 mb-12">
              <div className="flex flex-wrap gap-2 justify-center">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                    activeFilter === option.id
                        ? "bg-royal-gold text-jet-black"
                        : "bg-jet-black text-soft-cream hover:bg-royal-gold/20 border border-royal-gold/30"
                  }`}
                >
                  {option.label}
                </button>
              ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-jet-black rounded-lg overflow-hidden shadow-lg border border-royal-gold/30"
                >
                  <div className="h-60 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-royal-gold">{member.name}</h3>
                    <p className="text-soft-cream/60 mb-4">{member.position}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs bg-royal-gold/10 text-royal-gold rounded-full border border-royal-gold/30"
                        >
                          {skill.charAt(0).toUpperCase() + skill.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            
          </div>
        </section>

        {/* Our Packages */}
        <section className="py-20 bg-jet-black">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="OUR PACKAGES"
              title="Packages Available"
              centered={true}
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
                className="bg-deep-charcoal rounded-lg overflow-hidden shadow-lg border border-royal-gold/30"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-royal-gold">
                    £2,000 <span className="text-soft-cream/60 text-lg">/ month</span>
                  </h3>
                  <h4 className="text-xl font-bold mb-4 text-soft-cream">Essential Advisory</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Strategic Planning Support</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Monthly Advisory Calls</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Basic Growth Strategy</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 rounded-md bg-royal-gold hover:bg-warm-gold text-jet-black font-medium transition-colors">
                    Get Started
                  </button>
                </div>
            </motion.div>
            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-deep-charcoal rounded-lg overflow-hidden shadow-lg border-2 border-royal-gold relative transform hover:-translate-y-1 transition-transform"
              >
                <div className="absolute top-0 right-0 bg-royal-gold text-jet-black py-1 px-4 text-sm font-medium">
                  Most Popular
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-royal-gold">
                    £4,500 <span className="text-soft-cream/60 text-lg">/ month</span>
                  </h3>
                  <h4 className="text-xl font-bold mb-4 text-soft-cream">Premium Growth</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Comprehensive Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Weekly Advisory Calls</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Operations Assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Financial Planning Support</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 rounded-md bg-royal-gold hover:bg-warm-gold text-jet-black font-medium transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-deep-charcoal rounded-lg overflow-hidden shadow-lg border border-royal-gold/30"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-royal-gold">
                    Custom <span className="text-soft-cream/60 text-lg">pricing</span>
                  </h3>
                  <h4 className="text-xl font-bold mb-4 text-soft-cream">Enterprise Solutions</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Full Executive Support</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">On-Demand Consulting</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-gold mr-2 mt-1 flex-shrink-0">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className="text-soft-cream/80">Custom Growth Framework</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 rounded-md border border-royal-gold bg-transparent hover:bg-royal-gold/10 text-royal-gold font-medium transition-colors">
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                  Ready to Accelerate Your Business Growth?
              </h2>
                <p className="text-soft-cream/80 mb-8 text-lg">
                  Schedule a consultation with our team to discuss how we can help your business reach its full potential.
                </p>
                
                <a
                  href="/contact"
                  className="inline-block bg-royal-gold hover:bg-warm-gold text-jet-black font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Schedule a Consultation
                </a>
            </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
