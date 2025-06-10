import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BlogFormData, TemplateType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogFormProps {
  initialData?: BlogFormData;
  onSubmit: (data: BlogFormData, imageFile: File) => Promise<void>;
  isSubmitting: boolean;
}

// Quill modules configuration
const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
    ['link'],
    ['clean']
  ],
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'blockquote', 'code-block',
  'align',
  'link'
];

const BlogForm: React.FC<BlogFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting
}) => {
  console.log('BlogForm rendered with initialData:', initialData);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.imageURL || null);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm<BlogFormData>({
    defaultValues: initialData || {
      title: '',
      shortDescription: '',
      fullContent: '',
      imageURL: '',
      templateType: 'template1',
      slug: ''
    }
  });
  
  const selectedTemplate = watch('templateType');
  
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
  
  const handleFormSubmit = async (data: BlogFormData) => {
    console.log('Form submitted with data:', data);
    
    if (!selectedImage && !initialData?.imageURL) {
      alert('Please select an image');
      return;
    }
    
    if (selectedImage) {
      console.log('Submitting with new image:', selectedImage.name);
      await onSubmit(data, selectedImage);
    } else if (initialData?.imageURL) {
      console.log('Using existing image from initialData');
      try {
        const response = await fetch(initialData.imageURL);
        console.log('Fetched existing image', response.status);
        const blob = await response.blob();
        console.log('Created blob from existing image:', blob.size, blob.type);
        const file = new File([blob], 'existing-image.jpg', { type: 'image/jpeg' });
        await onSubmit(data, file);
      } catch (error) {
        console.error('Error handling existing image:', error);
        alert('Error handling image. Please try again with a new image.');
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-royal-gold mb-1">
          Select Template Layout
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className={`border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer ${
            selectedTemplate === TemplateType.TEMPLATE1 
              ? 'border-royal-gold bg-royal-gold/10' 
              : 'border-royal-gold/30 bg-deep-charcoal hover:bg-royal-gold/5'
          }`}>
            <input
              type="radio"
              value={TemplateType.TEMPLATE1}
              {...register('templateType', { required: 'Please select a template' })}
              className="sr-only"
            />
            <div className="w-full h-32 bg-jet-black mb-2 rounded flex items-center justify-center">
              <span className="text-soft-cream/60 text-xs">Header Image</span>
            </div>
            <div className="w-full h-4 bg-deep-charcoal mb-1 rounded"></div>
            <div className="w-3/4 h-4 bg-deep-charcoal mb-3 rounded"></div>
            <div className="w-full space-y-1">
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
            </div>
            <p className="mt-2 text-center text-sm font-medium text-soft-cream">Template 1</p>
          </label>
          
          <label className={`border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer ${
            selectedTemplate === TemplateType.TEMPLATE2 
              ? 'border-royal-gold bg-royal-gold/10' 
              : 'border-royal-gold/30 bg-deep-charcoal hover:bg-royal-gold/5'
          }`}>
            <input
              type="radio"
              value={TemplateType.TEMPLATE2}
              {...register('templateType', { required: 'Please select a template' })}
              className="sr-only"
            />
            <div className="flex w-full mb-2">
              <div className="w-1/2 h-32 bg-jet-black rounded-l flex items-center justify-center">
                <span className="text-soft-cream/60 text-xs">Image</span>
              </div>
              <div className="w-1/2 p-2 bg-deep-charcoal rounded-r">
                <div className="w-full h-4 bg-jet-black mb-1 rounded"></div>
                <div className="w-3/4 h-4 bg-jet-black mb-2 rounded"></div>
                <div className="w-full space-y-1">
                  <div className="w-full h-2 bg-jet-black rounded"></div>
                  <div className="w-full h-2 bg-jet-black rounded"></div>
                </div>
              </div>
            </div>
            <div className="w-full space-y-1">
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
            </div>
            <p className="mt-2 text-center text-sm font-medium text-soft-cream">Template 2</p>
          </label>
          
          <label className={`border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer ${
            selectedTemplate === TemplateType.TEMPLATE3 
              ? 'border-royal-gold bg-royal-gold/10' 
              : 'border-royal-gold/30 bg-deep-charcoal hover:bg-royal-gold/5'
          }`}>
            <input
              type="radio"
              value={TemplateType.TEMPLATE3}
              {...register('templateType', { required: 'Please select a template' })}
              className="sr-only"
            />
            <div className="w-full h-8 bg-jet-black mb-3 rounded"></div>
            <div className="flex w-full mb-2">
              <div className="w-1/3 h-24 bg-jet-black mr-2 rounded flex items-center justify-center">
                <span className="text-soft-cream/60 text-xs">Image</span>
              </div>
              <div className="w-2/3 space-y-1">
                <div className="w-full h-2 bg-deep-charcoal rounded"></div>
                <div className="w-full h-2 bg-deep-charcoal rounded"></div>
                <div className="w-full h-2 bg-deep-charcoal rounded"></div>
                <div className="w-full h-2 bg-deep-charcoal rounded"></div>
                <div className="w-3/4 h-2 bg-deep-charcoal rounded"></div>
              </div>
            </div>
            <div className="w-full space-y-1">
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
              <div className="w-full h-2 bg-deep-charcoal rounded"></div>
            </div>
            <p className="mt-2 text-center text-sm font-medium text-soft-cream">Template 3</p>
          </label>
        </div>
        {errors.templateType && (
          <p className="mt-1 text-sm text-red-500">{errors.templateType.message}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-royal-gold mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${
              errors.title ? 'border-red-500' : 'border-royal-gold/30'
            } border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="shortDescription" className="block text-sm font-medium text-royal-gold mb-1">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            rows={3}
            {...register('shortDescription', { required: 'Short description is required' })}
            className={`w-full px-4 py-2 bg-deep-charcoal text-soft-cream ${
              errors.shortDescription ? 'border-red-500' : 'border-royal-gold/30'
            } border rounded-md shadow-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold`}
          ></textarea>
          {errors.shortDescription && (
            <p className="mt-1 text-sm text-red-500">{errors.shortDescription.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="fullContent" className="block text-sm font-medium text-royal-gold mb-1">
          Full Content
        </label>
        <Controller
          name="fullContent"
          control={control}
          rules={{ required: 'Full content is required' }}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              modules={quillModules}
              formats={quillFormats}
              value={field.value}
              onChange={field.onChange}
              className="bg-deep-charcoal text-soft-cream min-h-[300px] [&_.ql-toolbar]:bg-jet-black [&_.ql-toolbar]:border-royal-gold/30 [&_.ql-container]:border-royal-gold/30 [&_.ql-editor]:min-h-[250px]"
            />
          )}
        />
        {errors.fullContent && (
          <p className="mt-1 text-sm text-red-500">{errors.fullContent.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="imageUpload" className="block text-sm font-medium text-royal-gold mb-1">
          Blog Image
        </label>
        <div className="border-2 border-dashed border-royal-gold/30 rounded-md p-4 bg-deep-charcoal">
          <div className="flex flex-col items-center justify-center">
            {imagePreview ? (
              <div className="mb-4">
                <img src={imagePreview} alt="Preview" className="w-full max-h-60 object-contain" />
              </div>
            ) : (
              <div className="text-center mb-4">
                <p className="text-soft-cream/60">No image selected</p>
              </div>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 bg-jet-black text-soft-cream border border-royal-gold/30 rounded-md shadow-sm focus:outline-none focus:border-royal-gold"
            />
            <p className="text-xs text-soft-cream/60 mt-2">Recommended size: 1200 x 630 pixels</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button 
          type="button" 
          variant="outline"
          onClick={() => window.history.back()}
          className="border-royal-gold text-royal-gold"
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          variant="gold"
          disabled={isSubmitting}
          className="bg-royal-gold text-jet-black"
        >
          {isSubmitting ? 'Saving...' : initialData ? 'Update Blog Post' : 'Create Blog Post'}
        </Button>
      </div>
    </form>
  );
};

export default BlogForm; 