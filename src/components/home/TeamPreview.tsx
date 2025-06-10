
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import CTAButton from "@/components/common/CTAButton";

const TeamPreview = () => {
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      name: "Joseph Fleming",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in tech growth and venture capital, Joseph has guided hundreds of startups from concept to acquisition. His strategic vision and extensive network make him a trusted advisor to entrepreneurs worldwide.",
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      name: "Sarah Mitchell",
      position: "Head of Strategy",
      bio: "Sarah brings 15+ years of corporate strategy experience from Fortune 500 companies. Specializing in market positioning and competitive analysis, she helps businesses identify untapped opportunities and develop robust growth plans.",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      name: "David Chen",
      position: "Financial Advisor",
      bio: "A former investment banker with extensive experience in fundraising and M&A transactions, David helps clients navigate complex financial decisions with clarity and confidence. His analytical approach ensures optimal outcomes for businesses at all stages.",
    },
  ];

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
              key={index}
              image={member.image}
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
