-- Schema untuk admin-editable materials & homework

-- Table: course_materials
CREATE TABLE IF NOT EXISTS course_materials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  file_url VARCHAR(500),
  week INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: homework
CREATE TABLE IF NOT EXISTS homework (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  due_date TIMESTAMP WITH TIME ZONE,
  file_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_course_materials_course_id ON course_materials(course_id);
CREATE INDEX idx_homework_course_id ON homework(course_id);

-- Row Level Security (RLS)
ALTER TABLE course_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE homework ENABLE ROW LEVEL SECURITY;

-- Policies: public bisa baca, admin bisa CRUD (handle di app level)
CREATE POLICY "Enable read access for all users" ON course_materials
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON homework
  FOR SELECT USING (true);
