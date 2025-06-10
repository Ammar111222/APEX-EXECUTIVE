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