import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TestimonialFormData } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface TestimonialFormProps {
  initialData?: TestimonialFormData;
  onSubmit: (data: TestimonialFormData, imageFile?: File) => Promise<void>;
  isSubmitting: boolean;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({
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
  } = useForm<TestimonialFormData>({
    defaultValues: initialData || {
      clientName: '',
      clientPosition: '',
      clientCompany: '',
      testimonialText: '',
      featured: false
    }
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Image selected:', file.name, file.size, file.type);
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log('Image preview created');
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFormSubmit = async (data: TestimonialFormData) => {
    console.log('Form submitted with data:', data);
    await onSubmit(data, selectedImage || undefined);
  };
  
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-royal-gold mb-1">
            Client Name
          </label>
          <input
            id="clientName"
            type="text"
            {...register('clientName', { required: 'Client name is required' })}
            className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${
              errors.clientName ? 'border-red-500' : 'border-royal-gold/30'
            } border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
          />
          {errors.clientName && (
            <p className="mt-1 text-sm text-red-500">{errors.clientName.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="clientPosition" className="block text-sm font-medium text-royal-gold mb-1">
            Client Position
          </label>
          <input
            id="clientPosition"
            type="text"
            {...register('clientPosition', { required: 'Client position is required' })}
            className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${
              errors.clientPosition ? 'border-red-500' : 'border-royal-gold/30'
            } border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
          />
          {errors.clientPosition && (
            <p className="mt-1 text-sm text-red-500">{errors.clientPosition.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="clientCompany" className="block text-sm font-medium text-royal-gold mb-1">
          Client Company (Optional)
        </label>
        <input
          id="clientCompany"
          type="text"
          {...register('clientCompany')}
          className="w-full px-4 py-2 bg-deep-charcoal text-soft-cream border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold"
        />
      </div>
      
      <div>
        <label htmlFor="testimonialText" className="block text-sm font-medium text-royal-gold mb-1">
          Testimonial Text
        </label>
        <textarea
          id="testimonialText"
          rows={5}
          {...register('testimonialText', { required: 'Testimonial text is required' })}
          className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${
            errors.testimonialText ? 'border-red-500' : 'border-royal-gold/30'
          } border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
        ></textarea>
        {errors.testimonialText && (
          <p className="mt-1 text-sm text-red-500">{errors.testimonialText.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-royal-gold mb-1">
          Client Image (Optional)
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
      
      <div className="flex items-center">
        <input
          id="featured"
          type="checkbox"
          {...register('featured')}
          className="h-4 w-4 text-royal-gold border-royal-gold/30 rounded focus:ring-royal-gold"
        />
        <label htmlFor="featured" className="ml-2 block text-sm text-soft-cream">
          Feature this testimonial on the homepage
        </label>
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
              <span className="animate-spin">⟳</span>
            </>
          ) : (
            'Save Testimonial'
          )}
        </Button>
      </div>
    </form>
  );
};

export default TestimonialForm;