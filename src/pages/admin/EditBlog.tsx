import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AlertCircle } from 'lucide-react';
import BlogForm from '@/components/admin/BlogForm';
import { BlogFormData } from '@/lib/types';
import { getBlogPostById, updateBlogPost } from '@/lib/blogService';

const EditBlog = () => {
  const { id } = useParams<{ id: string }>();
  const [blogData, setBlogData] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchBlogData(id);
    }
  }, [id]);

  const fetchBlogData = async (blogId: string) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Fetching blog data for ID:', blogId);
      const blog = await getBlogPostById(blogId);
      
      if (!blog) {
        setError('Blog post not found');
        return;
      }
      
      const { id: _id, createdAt: _createdAt, ...formData } = blog;
      console.log('Blog data fetched successfully:', formData.title);
      setBlogData(formData);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: BlogFormData, imageFile: File) => {
    if (!id) return;
    
    setIsSubmitting(true);
    console.log('Updating blog post with ID:', id);
    
    try {
      // If imageFile is from the existing base64, don't send it again
      const shouldUpdateImage = imageFile.name !== 'existing-image.jpg';
      
      console.log('Should update image?', shouldUpdateImage);
      await updateBlogPost(
        id, 
        data, 
        shouldUpdateImage ? imageFile : undefined
      );
      
      console.log('Blog post updated successfully');
      toast.success('Blog post updated successfully!');
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error updating blog post:', error);
      toast.error('Failed to update blog post');
    } finally {
      setIsSubmitting(false);
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
          onClick={() => navigate('/admin/blogs')}
          className="mt-3 px-4 py-2 bg-royal-gold text-jet-black rounded-md hover:bg-warm-gold transition-colors"
        >
          Return to Blog List
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-royal-gold mb-6">Edit Blog Post</h1>
      {blogData && (
        <div className="bg-deep-charcoal rounded-lg shadow-md p-6 border border-royal-gold/30">
          <BlogForm 
            initialData={blogData} 
            onSubmit={handleSubmit} 
            isSubmitting={isSubmitting} 
          />
        </div>
      )}
    </div>
  );
};

export default EditBlog; 