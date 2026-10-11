import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CourseMaterial {
  id: string;
  course_id: string;
  title: string;
  content: string;
  file_url?: string;
  week?: number;
  created_at: string;
  updated_at: string;
}

export interface Homework {
  id: string;
  course_id: string;
  title: string;
  description: string;
  due_date?: string;
  file_url?: string;
  created_at: string;
  updated_at: string;
}
