import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { useState, useEffect } from "react";
import { getAllTeamMembers } from '@/lib/teamService';

const TeamSection = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTeamMembers().then(members => {
      setTeam(members);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="py-20 bg-deep-charcoal text-center text-royal-gold">Loading team...</div>;
  }

  return (
    <section className="py-20 bg-deep-charcoal">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="OUR TEAM"
          title="Your Strategic Growth Partners"
          centered={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.position}
              bio={member.bio ? [member.bio] : []}
              image={member.imageBase64}
              delay={index * 0.1}
            />
          ))}
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
  const [showFullBio, setShowFullBio] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-jet-black rounded-lg overflow-hidden shadow-md border border-royal-gold/30 h-full flex flex-col"
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
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-royal-gold">{name}</h3>
        <p className="text-soft-cream/60 font-medium mb-4">{role}</p>
        
        <div className="text-sm text-soft-cream/80 space-y-2 flex-grow">
          {showFullBio ? (
            <>
              {bio.map((paragraph, idx) => (
                <p key={idx} className="mb-2">{paragraph}</p>
              ))}
              {bio.length > 1 && (
                <button 
                  onClick={() => setShowFullBio(false)}
                  className="text-royal-gold hover:text-warm-gold text-sm font-medium mt-2 flex items-center"
                >
                  Show Less
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                </button>
              )}
            </>
          ) : (
            <>
              <p>{bio[0]}</p>
              {bio.length > 1 && (
                <button 
                  onClick={() => setShowFullBio(true)}
                  className="text-royal-gold hover:text-warm-gold text-sm font-medium mt-2 flex items-center"
                >
                  Show More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
