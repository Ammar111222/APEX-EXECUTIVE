import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TeamMemberFormData } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface TeamMemberFormProps {
  initialData?: TeamMemberFormData;
  onSubmit: (data: TeamMemberFormData, imageFile?: File) => Promise<void>;
  isSubmitting: boolean;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TeamMemberFormData>({
    defaultValues: initialData || {
      name: '',
      position: '',
      expertise: '',
      category: 'strategy',
      bio: ''
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (data: TeamMemberFormData) => {
    await onSubmit(data, selectedImage || undefined);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-royal-gold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${errors.name ? 'border-red-500' : 'border-royal-gold/30'} border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-royal-gold mb-1">
            Position
          </label>
          <input
            id="position"
            type="text"
            {...register('position', { required: 'Position is required' })}
            className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${errors.position ? 'border-red-500' : 'border-royal-gold/30'} border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
          />
          {errors.position && (
            <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="expertise" className="block text-sm font-medium text-royal-gold mb-1">
          Expertise (Optional)
        </label>
        <input
          id="expertise"
          type="text"
          {...register('expertise')}
          className="w-full px-4 py-2 bg-deep-charcoal text-soft-cream border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold"
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-royal-gold mb-1">
          Category (About page filter)
        </label>
        <select
          id="category"
          {...register('category')}
          className="w-full px-4 py-2 bg-deep-charcoal text-soft-cream border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold"
        >
          <option value="strategy">Strategy</option>
          <option value="finance">Finance</option>
          <option value="operations">Operations</option>
          <option value="technology">Technology</option>
          <option value="legal">Legal</option>
          <option value="hr">HR</option>
        </select>
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-royal-gold mb-1">
          Bio (Optional)
        </label>
        <textarea
          id="bio"
          rows={4}
          {...register('bio')}
          className="w-full px-4 py-2 bg-deep-charcoal text-soft-cream border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-royal-gold mb-1">
          Profile Image (Optional)
        </label>
        <div className="flex items-center space-x-4">
          {imagePreview && (
            <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-royal-gold/30">
              <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
            </div>
          )}
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-soft-cream file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-royal-gold file:text-jet-black hover:file:bg-warm-gold"
            />
            <p className="mt-1 text-xs text-soft-cream/60">
              Recommended: Square image, at least 200x200px
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-royal-gold text-jet-black hover:bg-warm-gold transition-colors"
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Saving...</span>
              <span className="animate-spin">⏳</span>
            </>
          ) : (
            'Save Team Member'
          )}
        </Button>
      </div>
    </form>
  );
};

export default TeamMemberForm; 