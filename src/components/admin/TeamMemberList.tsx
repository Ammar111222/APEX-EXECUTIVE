import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { TeamMember } from '@/lib/types';
import { getAllTeamMembers, deleteTeamMember } from '@/lib/teamService';

const TeamMemberList = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllTeamMembers();
      setTeamMembers(data);
    } catch (error) {
      setError(`Failed to load team members: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTeamMember(id);
      toast.success('Team member deleted successfully');
      fetchTeamMembers();
    } catch (error) {
      toast.error(`Failed to delete team member: ${error.message || 'Unknown error'}`);
    } finally {
      setDeleteConfirm(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin h-12 w-12 border-4 border-royal-gold border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-jet-black border-l-4 border-royal-gold/50 p-4 my-4 rounded-md">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-royal-gold mr-3" />
          <p className="text-soft-cream">{error}</p>
        </div>
        <button 
          onClick={fetchTeamMembers}
          className="mt-3 px-4 py-2 bg-royal-gold text-jet-black rounded-md hover:bg-warm-gold transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-royal-gold">Manage Team Members</h1>
        <Link
          to="/admin/add-team-member"
          className="flex items-center bg-royal-gold text-jet-black py-2 px-4 rounded-md hover:bg-warm-gold transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Team Member
        </Link>
      </div>
      {teamMembers.length === 0 ? (
        <div className="bg-deep-charcoal rounded-lg shadow-md p-8 text-center border border-royal-gold/30">
          <p className="text-lg text-soft-cream mb-4">No team members yet</p>
          <Link
            to="/admin/add-team-member"
            className="inline-flex items-center bg-royal-gold text-jet-black py-2 px-4 rounded-md hover:bg-warm-gold transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Team Member
          </Link>
        </div>
      ) : (
        <div className="bg-deep-charcoal rounded-lg shadow-md overflow-hidden border border-royal-gold/30">
          <table className="min-w-full divide-y divide-royal-gold/20">
            <thead className="bg-jet-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">Expertise</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-deep-charcoal divide-y divide-royal-gold/20">
              {teamMembers.map(member => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        {member.imageBase64 ? (
                          <img className="h-12 w-12 rounded-full object-cover" src={member.imageBase64} alt="" />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-soft-cream">{member.name}</div>
                        <div className="text-sm text-soft-cream/60 truncate max-w-xs">
                          {member.bio || ''}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-soft-cream">{member.position}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-soft-cream/60">
                    {member.expertise || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/edit-team-member/${member.id}`}
                        className="text-royal-gold hover:text-warm-gold"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                      {deleteConfirm === member.id ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDelete(member.id)}
                            className="text-red-500 hover:text-red-400"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="text-soft-cream/60 hover:text-soft-cream"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(member.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeamMemberList; 