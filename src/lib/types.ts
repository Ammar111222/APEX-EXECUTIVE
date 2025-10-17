export interface BlogPost {
  id?: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  imageURL: string;
  templateType: 'template1' | 'template2' | 'template3';
  createdAt: number; // timestamp
  slug: string;
}

export type BlogFormData = Omit<BlogPost, 'id' | 'createdAt'>;

export enum TemplateType {
  TEMPLATE1 = 'template1',
  TEMPLATE2 = 'template2',
  TEMPLATE3 = 'template3',
} 

// TEAM MEMBER TYPES
export interface TeamMember {
  id?: string;
  name: string;
  position: string;
  expertise?: string;
  category?: 'strategy' | 'finance' | 'operations' | 'technology' | 'legal' | 'hr';
  bio?: string;
  imageBase64?: string; // stored as base64 string
  createdAt?: number;
}

export type TeamMemberFormData = Omit<TeamMember, 'id' | 'imageBase64' | 'createdAt'>;

// TESTIMONIAL TYPES
export interface Testimonial {
  id?: string;
  clientName: string;
  clientPosition: string;
  clientCompany?: string;
  testimonialText: string;
  imageURL?: string; // base64 or URL
  featured: boolean;
  createdAt?: number;
}

export type TestimonialFormData = Omit<Testimonial, 'id' | 'imageURL' | 'createdAt'>; 