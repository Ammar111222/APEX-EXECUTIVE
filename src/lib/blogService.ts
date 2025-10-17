import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { BlogPost, BlogFormData } from './types';

const BLOGS_COLLECTION = 'blogs';

// Generate a slug from the title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    // Remove protocol and www if it's a URL
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    // Remove domain extension
    .replace(/\.[a-z]{2,}$/, '')
    // Replace special characters and spaces with hyphens
    .replace(/[^\w-]+/g, '-')
    // Replace multiple hyphens with single hyphen
    .replace(/-+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
};

// Convert file to base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log(`Converting file to base64: ${file.name}`);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log('File converted to base64 successfully');
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      console.error('Error converting file to base64:', error);
      reject(error);
    };
  });
};

// Create a new blog post
export const createBlogPost = async (blogData: BlogFormData, imageFile: File): Promise<string> => {
  try {
    console.log('Creating new blog post with data:', blogData);
    // Always generate slug from title
    const slug = generateSlug(blogData.title);
    console.log(`Generated slug: ${slug}`);
    
    // Convert image to base64
    const imageBase64 = await fileToBase64(imageFile);
    console.log('Image converted to base64');
    
    const newBlog: BlogPost = {
      ...blogData,
      imageURL: imageBase64,
      // createdAt intentionally omitted to avoid showing dates
      slug // Use generated slug
    };
    
    console.log('Saving blog post to Firestore');
    const docRef = await addDoc(collection(db, BLOGS_COLLECTION), newBlog);
    console.log(`Blog post saved with ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Getting all blog posts');
    const q = query(collection(db, BLOGS_COLLECTION));
    console.log('Query created, fetching documents');
    const querySnapshot = await getDocs(q);
    console.log(`Received ${querySnapshot.docs.length} documents`);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    console.log(`Getting blog post with ID: ${id}`);
    const docRef = doc(db, BLOGS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('Blog post found');
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as BlogPost;
    } else {
      console.log('Blog post not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    console.log(`Getting blog post with slug: ${slug}`);
    const q = query(collection(db, BLOGS_COLLECTION));
    const querySnapshot = await getDocs(q);
    
    const matchingDocs = querySnapshot.docs.filter(doc => doc.data().slug === slug);
    
    if (matchingDocs.length > 0) {
      console.log('Blog post found by slug');
      const docData = matchingDocs[0];
      return {
        id: docData.id,
        ...docData.data()
      } as BlogPost;
    } else {
      console.log('No blog post found with that slug');
      return null;
    }
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    throw error;
  }
};

// Update a blog post
export const updateBlogPost = async (
  id: string, 
  blogData: BlogFormData, 
  imageFile?: File
): Promise<void> => {
  try {
    console.log(`Updating blog post with ID: ${id}`);
    const docRef = doc(db, BLOGS_COLLECTION, id);
    const currentBlog = await getBlogPostById(id);
    
    if (!currentBlog) {
      console.error('Blog post not found for update');
      throw new Error('Blog post not found');
    }
    
    // If a new image is provided, update the imageURL with base64
    let imageURL = currentBlog.imageURL;
    if (imageFile) {
      console.log('New image provided, will replace the existing one');
      imageURL = await fileToBase64(imageFile);
      console.log('New image converted to base64');
    }
    
    // Generate new slug if title has changed
    const slug = generateSlug(blogData.title);
    
    console.log('Updating document in Firestore');
    await updateDoc(docRef, {
      ...blogData,
      imageURL,
      slug, // Always update slug based on title
      // Don't update createdAt timestamp
    });
    console.log('Blog post updated successfully');
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    console.log(`Deleting blog post with ID: ${id}`);
    const blog = await getBlogPostById(id);
    
    if (!blog) {
      console.error('Blog post not found for deletion');
      throw new Error('Blog post not found');
    }
    
    // Delete the document from Firestore
    console.log('Deleting document from Firestore');
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await deleteDoc(docRef);
    console.log('Blog post deleted successfully');
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}; 