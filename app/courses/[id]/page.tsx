"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseById } from "@/lib/courses";
import { ArrowLeft, Clock, User, MapPin, FileText, Youtube, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CoursePage() {
  const params = useParams();
  const courseId = params.id as string;
  const course = getCourseById(courseId);
  const [activeTab, setActiveTab] = useState<"overview" | "videos" | "topics" | "notes">("overview");
  const [notes, setNotes] = useState("");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Mata kuliah tidak ditemukan</h1>
          <Link href="/courses" className="text-blue-600 dark:text-blue-400">
            Kembali ke daftar mata kuliah
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Mata Kuliah
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="badge bg-white/20 text-white border-0 mb-2">
                {course.code}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.name}</h1>
              <p className="text-white/90 mb-4">{course.description}</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <div>
                <div className="text-xs text-white/70">Hari</div>
                <div className="font-semibold">{course.day}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <div>
                <div className="text-xs text-white/70">Dosen</div>
                <div className="font-semibold">{course.lecturer.split(" ")[0]}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <div>
                <div className="text-xs text-white/70">Ruang</div>
                <div className="font-semibold">{course.room || "TBA"}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <div>
                <div className="text-xs text-white/70">SKS</div>
                <div className="font-semibold">{course.credits}</div>
              </div>
            </div>
          </div>

          {course.rps_url && (
            <div className="mt-6">
              <a
                href={course.rps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                <FileText className="w-4 h-4" /> Download RPS
              </a>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex gap-8">
            {[
              { id: "overview", label: "Overview" },
              { id: "videos", label: "Video" },
              { id: "topics", label: "Topik Materi" },
              { id: "notes", label: "Catatan" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 font-semibold transition ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-bold mb-4">Deskripsi Mata Kuliah</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {course.topics && course.topics.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
                  <h2 className="text-xl font-bold mb-4">Topik Yang Dipelajari</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="space-y-6">
              {course.youtube_playlists && course.youtube_playlists.length > 0 ? (
                course.youtube_playlists.map((playlist, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Youtube className="w-6 h-6 text-red-500" />
                      <h3 className="text-lg font-bold">{playlist.title}</h3>
                    </div>
                    <a
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {playlist.url}
                    </a>
                  </div>
                ))
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
                  <Youtube className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">
                    Video pembelajaran akan segera ditambahkan
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "topics" && (
            <div className="space-y-4">
              {course.topics && course.topics.length > 0 ? (
                course.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{topic}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Materi minggu ke-{i + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">
                    Topik materi belum tersedia
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "notes" && (
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-xl font-bold mb-4">Catatan Pribadi</h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tulis catatan belajar Anda di sini..."
                className="w-full h-64 p-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200">
                  Reset
                </button>
                <button className="btn-primary px-6 py-2 rounded-lg">
                  Simpan Catatan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
