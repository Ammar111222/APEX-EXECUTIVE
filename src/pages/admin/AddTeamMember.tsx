import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { TeamMemberFormData } from '@/lib/types';
import { createTeamMember } from '@/lib/teamService';

const AddTeamMember = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: TeamMemberFormData, imageFile?: File) => {
    setIsSubmitting(true);
    try {
      let imageBase64 = '';
      if (imageFile) {
        const reader = new FileReader();
        imageBase64 = await new Promise<string>((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(imageFile);
        });
      }
      const id = await createTeamMember(data, imageBase64);
      toast.success('Team member added successfully!');
      navigate('/admin/team-members');
    } catch (error) {
      toast.error(`Failed to add team member: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-royal-gold mb-6">Add New Team Member</h1>
      <div className="bg-deep-charcoal rounded-lg shadow-md p-6 border border-royal-gold/30">
        <TeamMemberForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default AddTeamMember; 