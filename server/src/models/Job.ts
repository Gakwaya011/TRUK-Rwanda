export interface Job {
  id?: number; // Optional because database creates it automatically
  title: string;
  type: string;     // e.g. "Full-time", "Remote"
  location: string;
  department: string;
  description: string;
  created_at?: Date;
}