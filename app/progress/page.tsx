"use client";

import { courses } from "@/lib/courses";
import { BookOpen, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function ProgressPage() {
  const [progress, setProgress] = useState<Record<string, number>>({
    "algoritma-pemrograman-1": 75,
    "matematika-informatika-1": 60,
    "bahasa-inggris": 40,
  });

  const totalCourses = courses.length;
  const completedTopics = Object.values(progress).reduce((a, b) => a + b, 0);
  const averageProgress = Math.round(completedTopics / totalCourses);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Progress Belajar</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Pantau kemajuan belajar Anda untuk setiap mata kuliah
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Mata Kuliah</span>
            </div>
            <div className="text-3xl font-bold">{totalCourses}</div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Sedang Dikerjakan</span>
            </div>
            <div className="text-3xl font-bold">{Object.keys(progress).length}</div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Rata-rata Progress</span>
            </div>
            <div className="text-3xl font-bold">{averageProgress}%</div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Jam Belajar</span>
            </div>
            <div className="text-3xl font-bold">32h</div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Progress Keseluruhan</h2>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Semester 1</span>
            <span className="font-semibold">{averageProgress}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">
            <div
              className="progress-bar h-4 rounded-full transition-all duration-500"
              style={{ width: `${averageProgress}%` }}
            />
          </div>
        </div>

        {/* Course Progress List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Progress Per Mata Kuliah</h2>
          {courses.map((course) => {
            const courseProgress = progress[course.id] || 0;
            return (
              <div
                key={course.id}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{course.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {course.day} • {course.lecturer}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Progress</span>
                      <span className="font-semibold">{courseProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          courseProgress >= 75
                            ? "bg-green-500"
                            : courseProgress >= 50
                            ? "bg-blue-500"
                            : courseProgress >= 25
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${courseProgress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setProgress((prev) => ({
                          ...prev,
                          [course.id]: Math.min((prev[course.id] || 0) + 10, 100),
                        }))
                      }
                      className="px-4 py-2 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition"
                    >
                      +10%
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
