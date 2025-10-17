import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import CTAButton from "@/components/common/CTAButton";
import { useEffect, useState } from "react";
import { getAllTeamMembers } from '@/lib/teamService';

const TeamPreview = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTeamMembers().then(members => {
      setTeamMembers(members);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="py-20 bg-gray-50 text-center text-royal-gold">Loading team...</div>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Team"
          title="Meet Our Associates"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              image={member.imageBase64}
              name={member.name}
              position={member.position}
              bio={member.bio}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <CTAButton text="Meet the Full Team" href="/about" />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
