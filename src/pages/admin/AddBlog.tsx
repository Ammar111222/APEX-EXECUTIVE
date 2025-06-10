import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import BlogForm from '@/components/admin/BlogForm';
import { BlogFormData } from '@/lib/types';
import { createBlogPost } from '@/lib/blogService';

const AddBlog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: BlogFormData, imageFile: File) => {
    setIsSubmitting(true);
    console.log('Form submission started with data:', data);
    console.log('Image file:', imageFile.name, imageFile.size, imageFile.type);
    
    try {
      console.log('Attempting to create blog post...');
      const blogId = await createBlogPost(data, imageFile);
      console.log('Blog post created successfully with ID:', blogId);
      toast.success('Blog post created successfully!');
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast.error(`Failed to create blog post: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-royal-gold mb-6">Add New Blog Post</h1>
      <div className="bg-deep-charcoal rounded-lg shadow-md p-6 border border-royal-gold/30">
        <BlogForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default AddBlog; 