import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { BlogPost } from '@/lib/types';
import { getAllBlogPosts, deleteBlogPost } from '@/lib/blogService';
import { format, isValid } from 'date-fns';

// Safe format function to handle invalid dates
const safeFormat = (dateValue: number | string | Date, formatString: string): string => {
  try {
    const date = new Date(dateValue);
    if (!isValid(date)) {
      console.warn('Invalid date value:', dateValue);
      return 'Invalid date';
    }
    return format(date, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

const BlogList = () => {
  console.log('BlogList component initialized');
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    console.log('BlogList component mounted, effect running');
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    console.log('Fetching blogs started...');
    setLoading(true);
    setError(null);
    
    try {
      console.log('Making API call to get all blog posts');
      const blogPosts = await getAllBlogPosts();
      console.log('Received blog posts:', blogPosts);

      // Validate blog data
      const validatedBlogs = blogPosts.map(blog => {
        // Ensure createdAt exists and is valid
        if (!blog.createdAt) {
          console.warn('Blog missing createdAt, setting default value:', blog.id);
          return { ...blog, createdAt: Date.now() };
        }
        return blog;
      });
      
      setBlogs(validatedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError(`Failed to load blog posts: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
      console.log('Fetch blogs completed, loading state set to false');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      console.log('Deleting blog post with ID:', id);
      await deleteBlogPost(id);
      toast.success('Blog post deleted successfully');
      // Refresh the blog list
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error(`Failed to delete blog post: ${error.message || 'Unknown error'}`);
    } finally {
      setDeleteConfirm(null);
    }
  };

  console.log('BlogList render state:', { loading, error, blogsCount: blogs.length });

  if (loading) {
    console.log('Rendering loading state');
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin h-12 w-12 border-4 border-royal-gold border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    console.log('Rendering error state:', error);
    return (
      <div className="bg-jet-black border-l-4 border-royal-gold/50 p-4 my-4 rounded-md">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-royal-gold mr-3" />
          <p className="text-soft-cream">{error}</p>
        </div>
        <button 
          onClick={fetchBlogs}
          className="mt-3 px-4 py-2 bg-royal-gold text-jet-black rounded-md hover:bg-warm-gold transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  console.log('Rendering blog list with', blogs.length, 'blogs');
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-royal-gold">Manage Blog Posts</h1>
        <Link
          to="/admin/add"
          className="flex items-center bg-royal-gold text-jet-black py-2 px-4 rounded-md hover:bg-warm-gold transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Post
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-deep-charcoal rounded-lg shadow-md p-8 text-center border border-royal-gold/30">
          <p className="text-lg text-soft-cream mb-4">No blog posts yet</p>
          <Link
            to="/admin/add"
            className="inline-flex items-center bg-royal-gold text-jet-black py-2 px-4 rounded-md hover:bg-warm-gold transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Post
          </Link>
        </div>
      ) : (
        <div className="bg-deep-charcoal rounded-lg shadow-md overflow-hidden border border-royal-gold/30">
          <table className="min-w-full divide-y divide-royal-gold/20">
            <thead className="bg-jet-black">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">
                  Blog Post
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">
                  Template
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-deep-charcoal divide-y divide-royal-gold/20">
              {blogs.map(blog => (
                <tr key={blog.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <img className="h-12 w-12 rounded-md object-cover" src={blog.imageURL} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-soft-cream">{blog.title}</div>
                        <div className="text-sm text-soft-cream/60 truncate max-w-xs">{blog.shortDescription}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-royal-gold/10 text-royal-gold border border-royal-gold/30">
                      {blog.templateType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-soft-cream/60">
                    {safeFormat(blog.createdAt, 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/edit/${blog.id}`}
                        className="text-royal-gold hover:text-warm-gold"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                      
                      {deleteConfirm === blog.id ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDelete(blog.id!)}
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
                          onClick={() => setDeleteConfirm(blog.id!)}
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

export default BlogList; 