import coursesData from "@/courses-data.json";

export interface LearningMaterial {
  week: number;
  title: string;
  summary: string;
  key_concepts: string[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  day: string;
  time: string;
  lecturer: string;
  room?: string;
  rps_url?: string;
  description?: string;
  topics?: string[];
  youtube_playlists?: { title: string; url: string }[];
  learning_materials?: LearningMaterial[];
}

export const courses: Course[] = coursesData.courses;

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getAllCourseIds(): string[] {
  return courses.map((c) => c.id);
}

export function getCoursesByDay(day: string): Course[] {
  return courses.filter((c) => c.day.toLowerCase() === day.toLowerCase());
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase();
  return courses.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.lecturer.toLowerCase().includes(q) ||
      c.description?.toLowerCase().includes(q) ||
      c.topics?.some((t) => t.toLowerCase().includes(q))
  );
}
