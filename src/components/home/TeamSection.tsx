import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const TeamSection = () => {
  // For simplicity, let's just display the founder and 3 team members here
  // The full team will be shown on the about page
  const featuredTeam = [team[0], team[1], team[2], team[3]];

  return (
    <section className="py-20 bg-deep-charcoal">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="OUR TEAM"
          title="Your Strategic Growth Partners"
          centered={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <CTAButton 
            text="Meet the Full Team"
            href="/about#team"
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

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string[];
  image?: string;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-jet-black rounded-lg overflow-hidden shadow-md group relative border border-royal-gold/30"
    >
      <div className="h-60 bg-deep-charcoal flex items-center justify-center">
        {image ? (
          <div className="w-32 h-32 rounded-full overflow-hidden border border-royal-gold/30">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-royal-gold/10 flex items-center justify-center border border-royal-gold/30">
            <span className="text-4xl font-bold text-royal-gold">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-royal-gold">{name}</h3>
        <p className="text-soft-cream/60 font-medium mb-2">{role}</p>
      </div>
      
      {/* Hover overlay with bio */}
      <div className="absolute inset-0 bg-deep-charcoal bg-opacity-95 text-soft-cream p-6 flex flex-col justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border border-royal-gold/30">
        <h3 className="text-xl font-bold mb-3 text-royal-gold">{name}</h3>
        <div className="text-sm space-y-2 overflow-y-auto max-h-[80%] text-soft-cream/80">
          {bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Team data with complete information
const team = [
  {
    name: "Jo Fleming",
    image: "/images/jo.webp",
    role: "Founder",
    bio: [
      "The creation of Apex Executive Partners is driven by Jo's relentless passion in supporting the business community, and she is able to successfully execute this for her clients with the exceptional talent within the Apex associates portfolio.",
      "With over 20 years of corporate experience, Jo is a results-driven business leader specialising in commercial and operational growth within innovative technology-focused organisations.",
      "Her track record reflects a consistent ability to establish and execute commercial and organisational strategies that drive substantial revenue growth and operational excellence within start-up or private equity backed organisations.",
      "Named as one of the Top 20 Most Inspirational Business Leaders for 2 consecutive years, Jo has received numerous accolades, including the Women in Business Award, which underscore her commitment to excellence and leadership."
    ]
  },
  {
    name: "John",
    image: "/images/john.webp",
    role: "C-Suite Fractional Board Director",
    bio: [
      "With over 40 years of experience as a Board Director, Strategy Consultant, and Entrepreneur.",
      "John has started seven of his own businesses and advised over 100 scale-ups, family businesses, and SMEs on strategy, growth, and innovation.",
      "John has been ranked among the Top UK Entrepreneurs and Innovators, and has won a Lifetime Achievement Award."
    ]
  },
  {
    name: "Pia",
    image: "/images/pia.webp",
    role: "Commercial Business Lawyer",
    bio: [
      "Pia is a dual qualified (English/Danish) pragmatic corporate & commercial solicitor with many years' experience.",
      "She advises a wide range of business clients including start-ups, SMEs and listed companies on corporate & commercial legal issues.",
      "Expertise includes M&A, cross-border transactions, and comprehensive business legal support."
    ]
  },
  {
    name: "Jade",
    image: "/images/jade.webp",
    role: "UK Employment Law Solicitor",
    bio: [
      "Jade is a highly skilled and registered solicitor specialising in employment law.",
      "She is dedicated to helping UK companies navigate the complexities of workplace regulations with confidence.",
      "With a proactive approach, Jade ensures businesses remain fully compliant with employment law, safeguarding them from costly disputes, legal pitfalls, and reputational damage."
    ]
  },
  {
    name: "Claudio",
    role: "United Emirates CFO, Change Agent",
    bio: [
      "Project and Finance Executive for processes of organizational transition.",
      "Advisory Board Member (Advisory Council Team ex-FGV) for small & medium size organizations.",
      "Change agent leading to corporate restructuring and cultural transformation, adding value to organizations through entrepreneurial mindset and spirit of innovation."
    ]
  },
  {
    name: "David",
    role: "Digital Transformation Specialist",
    bio: [
      "Professionally qualified customer-focused programme and digital transformation delivery specialist.",
      "Extensive international experience in the planning, execution and delivery of complex programmes and project portfolios.",
      "Works closely with clients to design and develop class-leading technical solutions."
    ]
  },
  {
    name: "Stephen",
    role: "Business Intelligence Specialist",
    bio: [
      "With a background in serious fraud and cybercrime investigation.",
      "Delivers In-Depth Business Rival Research, helping businesses stay informed and stay ahead.",
      "Works with business owners, executives, and investors who need clear, raw data on their competitors to make strategic decisions with confidence."
    ]
  },
  {
    name: "Martin",
    role: "Sustainability & Growth Specialist",
    bio: [
      "With a proven track record of driving 250% company growth.",
      "Specializes in helping ambitious business owners build sustainable, scalable, and sellable ventures.",
      "Whether you're looking to streamline operations, scale effectively, or prepare your business for a successful exit, Martin can support."
    ]
  },
  {
    name: "Margaret",
    role: "Executive Coach",
    bio: [
      "Margaret is a PGC Senior Practitioner in Business & Executive Coaching and a Fellow of the Chartered Management Institute.",
      "She specializes in 121 Leadership & Management Coaching, Psychometric Assessments, Coaching Workshops, Transitional & On-Boarding Coaching."
    ]
  },
  {
    name: "Dan",
    role: "Executive Business Director",
    bio: [
      "Executive Business Director | Scaling Businesses | Driving Growth & Turnarounds.",
      "With over 30 years of leadership experience at board and MD level.",
      "Dan specializes in guiding businesses to achieve exceptional growth and long-term success. From shaping strategy to empowering leadership teams."
    ]
  }
];

export default TeamSection;
