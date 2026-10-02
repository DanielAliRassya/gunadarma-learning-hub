"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { Search, Filter, ChevronDown } from "lucide-react";

const days = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState("Semua");
  const [sortBy, setSortBy] = useState("name");

  const filtered = courses
    .filter((course) => {
      const matchSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.lecturer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchDay =
        selectedDay === "Semua" ||
        course.day === selectedDay;

      return matchSearch && matchDay;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "day") return a.day.localeCompare(b.day);
      return a.code.localeCompare(b.code);
    });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Mata Kuliah</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Temukan dan pelajari semua mata kuliah S1 Informatika semester 1
          </p>
        </div>

        {/* Search & Filters */}
        <div className="space-y-4 mb-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari mata kuliah, kode, atau dosen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Days Filter */}
            <div className="flex gap-2 flex-wrap">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedDay === day
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex-1 flex justify-end">
              <div className="relative inline-block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer pr-10"
                >
                  <option value="name">Urutkan: Nama</option>
                  <option value="day">Urutkan: Hari</option>
                  <option value="code">Urutkan: Kode</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Menampilkan {filtered.length} dari {courses.length} mata kuliah
        </p>

        {/* Courses Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="group fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 card-hover h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg mb-4" />

                  <div className="flex-1 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2">
                        {course.name}
                      </h3>
                      <span className="badge badge-primary ml-2">{course.code}</span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      <strong>Dosen:</strong> {course.lecturer}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex items-center justify-between">
                    <div className="text-xs">
                      <div className="badge badge-accent">{course.day}</div>
                      <div className="text-slate-500 dark:text-slate-400 mt-1">
                        {course.credits} SKS
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Ruang: {course.room}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              Tidak ada mata kuliah yang sesuai dengan pencarian Anda
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDay("Semua");
              }}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
            >
              Hapus Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
