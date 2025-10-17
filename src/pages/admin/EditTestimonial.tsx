import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AlertCircle } from 'lucide-react';
import TestimonialForm from '@/components/admin/TestimonialForm';
import { TestimonialFormData } from '@/lib/types';
import { getTestimonialById, updateTestimonial } from '@/lib/testimonialService';

const EditTestimonial = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [testimonialData, setTestimonialData] = useState<TestimonialFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Testimonial ID is missing');
      setIsLoading(false);
      return;
    }

    const fetchTestimonial = async () => {
      try {
        console.log(`Fetching testimonial with ID: ${id}`);
        const testimonial = await getTestimonialById(id);
        
        if (!testimonial) {
          console.error('Testimonial not found');
          setError('Testimonial not found');
          return;
        }

        console.log('Testimonial data received:', testimonial);
        
        // Prepare form data
        const formData: TestimonialFormData = {
          clientName: testimonial.clientName,
          clientPosition: testimonial.clientPosition,
          clientCompany: testimonial.clientCompany || '',
          testimonialText: testimonial.testimonialText,
          imageURL: testimonial.imageURL || '',
          featured: testimonial.featured
        };
        
        setTestimonialData(formData);
      } catch (error) {
        console.error('Error fetching testimonial:', error);
        setError(`Failed to load testimonial: ${error.message || 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonial();
  }, [id]);

  const handleSubmit = async (data: TestimonialFormData, imageFile?: File) => {
    if (!id) return;
    
    setIsSubmitting(true);
    console.log('Form submission started with data:', data);
    if (imageFile) {
      console.log('Image file:', imageFile.name, imageFile.size, imageFile.type);
    }
    
    try {
      console.log(`Attempting to update testimonial with ID: ${id}`);
      await updateTestimonial(id, data, imageFile);
      console.log('Testimonial updated successfully');
      toast.success('Testimonial updated successfully!');
      navigate('/admin/testimonials');
    } catch (error) {
      console.error('Error updating testimonial:', error);
      toast.error(`Failed to update testimonial: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin h-12 w-12 border-4 border-royal-gold border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error || !testimonialData) {
    return (
      <div className="bg-jet-black border-l-4 border-royal-gold/50 p-4 my-4 rounded-md">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-royal-gold mr-3" />
          <p className="text-soft-cream">{error || 'Failed to load testimonial'}</p>
        </div>
        <button 
          onClick={() => navigate('/admin/testimonials')}
          className="mt-3 px-4 py-2 bg-royal-gold text-jet-black rounded-md hover:bg-warm-gold transition-colors"
        >
          Back to Testimonials
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-royal-gold mb-6">Edit Testimonial</h1>
      <div className="bg-deep-charcoal rounded-lg shadow-md p-6 border border-royal-gold/30">
        <TestimonialForm 
          initialData={testimonialData}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default EditTestimonial;
