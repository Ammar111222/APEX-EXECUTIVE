import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { Testimonial, TestimonialFormData } from './types';
import { fileToBase64 } from './blogService';

const TESTIMONIALS_COLLECTION = 'testimonials';

// Create a new testimonial
export const createTestimonial = async (testimonialData: TestimonialFormData, imageFile?: File): Promise<string> => {
  try {
    console.log('Creating new testimonial with data:', testimonialData);
    
    // Convert image to base64 if provided
    let imageURL = '';
    if (imageFile) {
      imageURL = await fileToBase64(imageFile);
      console.log('Image converted to base64');
    }
    
    const newTestimonial: Testimonial = {
      ...testimonialData,
      imageURL: imageURL,
      createdAt: Date.now()
    };
    
    console.log('Saving testimonial to Firestore');
    const docRef = await addDoc(collection(db, TESTIMONIALS_COLLECTION), newTestimonial);
    console.log(`Testimonial saved with ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error('Error creating testimonial:', error);
    throw error;
  }
};

// Get all testimonials
export const getAllTestimonials = async (): Promise<Testimonial[]> => {
  try {
    console.log('Getting all testimonials');
    const q = query(collection(db, TESTIMONIALS_COLLECTION), orderBy('createdAt', 'desc'));
    console.log('Query created, fetching documents');
    const querySnapshot = await getDocs(q);
    console.log(`Received ${querySnapshot.docs.length} documents`);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Testimonial));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

// Get featured testimonials
export const getFeaturedTestimonials = async (): Promise<Testimonial[]> => {
  try {
    console.log('Getting featured testimonials');
    const allTestimonials = await getAllTestimonials();
    return allTestimonials.filter(testimonial => testimonial.featured);
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    throw error;
  }
};

// Get a single testimonial by ID
export const getTestimonialById = async (id: string): Promise<Testimonial | null> => {
  try {
    console.log(`Getting testimonial with ID: ${id}`);
    const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('Testimonial found');
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Testimonial;
    } else {
      console.log('Testimonial not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    throw error;
  }
};

// Update a testimonial
export const updateTestimonial = async (
  id: string, 
  testimonialData: TestimonialFormData, 
  imageFile?: File
): Promise<void> => {
  try {
    console.log(`Updating testimonial with ID: ${id}`);
    const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
    const currentTestimonial = await getTestimonialById(id);
    
    if (!currentTestimonial) {
      console.error('Testimonial not found for update');
      throw new Error('Testimonial not found');
    }
    
    // If a new image is provided, update the imageURL with base64
    let imageURL = currentTestimonial.imageURL || '';
    if (imageFile) {
      console.log('New image provided, will replace the existing one');
      imageURL = await fileToBase64(imageFile);
      console.log('New image converted to base64');
    }
    
    console.log('Updating document in Firestore');
    await updateDoc(docRef, {
      ...testimonialData,
      imageURL,
      // Don't update createdAt timestamp
    });
    console.log('Testimonial updated successfully');
  } catch (error) {
    console.error('Error updating testimonial:', error);
    throw error;
  }
};

// Delete a testimonial
export const deleteTestimonial = async (id: string): Promise<void> => {
  try {
    console.log(`Deleting testimonial with ID: ${id}`);
    const testimonial = await getTestimonialById(id);
    
    if (!testimonial) {
      console.error('Testimonial not found for deletion');
      throw new Error('Testimonial not found');
    }
    
    // Delete the document from Firestore
    console.log('Deleting document from Firestore');
    const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
    await deleteDoc(docRef);
    console.log('Testimonial deleted successfully');
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
}; 