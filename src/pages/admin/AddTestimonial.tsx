import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import TestimonialForm from '@/components/admin/TestimonialForm';
import { TestimonialFormData } from '@/lib/types';
import { createTestimonial } from '@/lib/testimonialService';

const AddTestimonial = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: TestimonialFormData, imageFile?: File) => {
    setIsSubmitting(true);
    console.log('Form submission started with data:', data);
    if (imageFile) {
      console.log('Image file:', imageFile.name, imageFile.size, imageFile.type);
    }
    
    try {
      console.log('Attempting to create testimonial...');
      const testimonialId = await createTestimonial(data, imageFile);
      console.log('Testimonial created successfully with ID:', testimonialId);
      toast.success('Testimonial created successfully!');
      navigate('/admin/testimonials');
    } catch (error) {
      console.error('Error creating testimonial:', error);
      toast.error(`Failed to create testimonial: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-royal-gold mb-6">Add New Testimonial</h1>
      <div className="bg-deep-charcoal rounded-lg shadow-md p-6 border border-royal-gold/30">
        <TestimonialForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default AddTestimonial; 