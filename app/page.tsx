"use client";

import Link from "next/link";
import { courses } from "@/lib/courses";
import { ArrowRight, BookOpen, Zap, Target, Clock } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "Mata Kuliah", value: "10" },
  { icon: Zap, label: "Video Tutorial", value: "50+" },
  { icon: Target, label: "Quiz Interaktif", value: "100+" },
  { icon: Clock, label: "Jam Belajar", value: "∞" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Belajar Lebih Cerdas
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Platform pembelajaran premium untuk mahasiswa S1 Informatika Gunadarma. Akses video YouTube, materi RPS, quiz interaktif, dan catatan pribadi dalam satu tempat.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/courses"
                className="btn-primary px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Mulai Belajar <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-900 transition">
                Lihat Tutorial
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 card-hover fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Courses */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Mata Kuliah Populer</h2>
              <Link
                href="/courses"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2"
              >
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course, i) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="group fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 card-hover">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4" />
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {course.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs badge badge-primary">
                        {course.day}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {course.credits} SKS
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Premium Features */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fitur Premium</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">📚 Materi Lengkap</h3>
                <p>RPS resmi, video YouTube, ringkasan per topik</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✅ Quiz Interaktif</h3>
                <p>Latihan soal dengan feedback instan</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📝 Catatan Pribadi</h3>
                <p>Buat & edit catatan belajar Anda sendiri</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📊 Progress Tracking</h3>
                <p>Visualisasi kemajuan belajar Anda</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌙 Dark Mode</h3>
                <p>Nyaman untuk belajar siang dan malam</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📥 Export PDF</h3>
                <p>Download materi untuk belajar offline</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
