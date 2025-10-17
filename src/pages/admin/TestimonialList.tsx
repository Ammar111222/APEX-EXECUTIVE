import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Testimonial } from '@/lib/types';
import { getAllTestimonials, deleteTestimonial } from '@/lib/testimonialService';
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

const TestimonialList = () => {
  console.log('TestimonialList component initialized');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    console.log('TestimonialList component mounted, effect running');
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    console.log('Fetching testimonials started...');
    setLoading(true);
    setError(null);
    
    try {
      console.log('Making API call to get all testimonials');
      const testimonialData = await getAllTestimonials();
      console.log('Received testimonials:', testimonialData);

      // Validate testimonial data
      const validatedTestimonials = testimonialData.map(testimonial => {
        // Ensure createdAt exists and is valid
        if (!testimonial.createdAt) {
          console.warn('Testimonial missing createdAt, setting default value:', testimonial.id);
          return { ...testimonial, createdAt: Date.now() };
        }
        return testimonial;
      });
      
      setTestimonials(validatedTestimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setError(`Failed to load testimonials: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
      console.log('Fetch testimonials completed, loading state set to false');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      console.log('Deleting testimonial with ID:', id);
      await deleteTestimonial(id);
      toast.success('Testimonial deleted successfully');
      // Refresh the testimonial list
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast.error(`Failed to delete testimonial: ${error.message || 'Unknown error'}`);
    } finally {
      setDeleteConfirm(null);
    }
  };

  console.log('TestimonialList render state:', { loading, error, testimonialsCount: testimonials.length });

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
          onClick={fetchTestimonials}
          className="mt-3 px-4 py-2 bg-royal-gold text-jet-black rounded-md hover:bg-warm-gold transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  console.log('Rendering testimonial list with', testimonials.length, 'testimonials');
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-royal-gold">Manage Testimonials</h1>
        <Link
          to="/admin/add-testimonial"
          className="flex items-center bg-royal-gold text-jet-black py-2 px-4 rounded-md hover:bg-warm-gold transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Testimonial
        </Link>
      </div>

      {testimonials.length === 0 ? (
        <div className="bg-deep-charcoal rounded-lg shadow-md p-8 text-center border border-royal-gold/30">
          <p className="text-lg text-soft-cream mb-4">No testimonials yet</p>
          <Link
            to="/admin/add-testimonial"
            className="inline-flex items-center bg-royal-gold text-jet-black py-2 px-4 rounded-md hover:bg-warm-gold transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Testimonial
          </Link>
        </div>
      ) : (
        <div className="bg-deep-charcoal rounded-lg shadow-md overflow-x-auto border border-royal-gold/30">
          <table className="w-full divide-y divide-royal-gold/20" style={{ minWidth: '800px' }}>
            <thead className="bg-jet-black">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider w-1/4">
                  Client
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider w-1/3">
                  Position
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider w-1/6">
                  Date
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider w-1/6">
                  Featured
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-royal-gold uppercase tracking-wider w-1/12">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-deep-charcoal divide-y divide-royal-gold/20">
              {testimonials.map(testimonial => (
                <tr key={testimonial.id}>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        {testimonial.imageURL ? (
                          <img className="h-12 w-12 rounded-full object-cover" src={testimonial.imageURL} alt="" />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold">
                            {testimonial.clientName.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="ml-4 min-w-0 flex-1">
                        <div className="text-sm font-medium text-soft-cream truncate">{testimonial.clientName}</div>
                        <div className="text-sm text-soft-cream/60 truncate">
                          {testimonial.clientCompany || ''}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-soft-cream break-words">
                      {testimonial.clientPosition}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-soft-cream/60">
                    {safeFormat(testimonial.createdAt, 'MMM d, yyyy')}
                  </td>
                  <td className="px-4 py-4">
                    {testimonial.featured ? (
                      <span className="px-2 py-1 text-xs rounded-full bg-royal-gold/10 text-royal-gold border border-royal-gold/30">
                        Featured
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded-full bg-deep-charcoal text-soft-cream/60 border border-soft-cream/20">
                        Standard
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/edit-testimonial/${testimonial.id}`}
                        className="text-royal-gold hover:text-warm-gold"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                      
                      {deleteConfirm === testimonial.id ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDelete(testimonial.id!)}
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
                          onClick={() => setDeleteConfirm(testimonial.id!)}
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

export default TestimonialList;