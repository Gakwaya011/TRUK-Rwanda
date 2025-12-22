export interface Blog {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
  author?: string; // Default is 'Admin'
  created_at?: Date;
}