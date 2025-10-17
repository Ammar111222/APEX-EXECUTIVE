import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { TeamMemberFormData, TeamMember } from '@/lib/types';
import { getTeamMemberById, updateTeamMember } from '@/lib/teamService';

const EditTeamMember = () => {
  const { id } = useParams<{ id: string }>();
  const [initialData, setInitialData] = useState<TeamMemberFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTeamMemberById(id).then(member => {
        if (member) {
          setInitialData({
            name: member.name,
            position: member.position,
            expertise: member.expertise || '',
            bio: member.bio || ''
          });
        }
      });
    }
  }, [id]);

  const handleSubmit = async (data: TeamMemberFormData, imageFile?: File) => {
    setIsSubmitting(true);
    try {
      let imageBase64: string | undefined = undefined;
      if (imageFile) {
        const reader = new FileReader();
        imageBase64 = await new Promise<string>((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(imageFile);
        });
      }
      if (id) {
        await updateTeamMember(id, data, imageBase64);
        toast.success('Team member updated successfully!');
        navigate('/admin/team-members');
      }
    } catch (error) {
      toast.error(`Failed to update team member: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!initialData) {
    return <div className="p-8 text-soft-cream">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-royal-gold mb-6">Edit Team Member</h1>
      <div className="bg-deep-charcoal rounded-lg shadow-md p-6 border border-royal-gold/30">
        <TeamMemberForm initialData={initialData} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default EditTeamMember; 