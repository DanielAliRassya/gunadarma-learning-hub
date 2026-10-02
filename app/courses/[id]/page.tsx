"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseById } from "@/lib/courses";
import { ArrowLeft, Clock, User, MapPin, FileText, PlayCircle, CheckCircle, ExternalLink, BookOpen } from "lucide-react";
import { useState } from "react";

// Helper to extract YouTube video ID from URL
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|playlist\?list=))([\w-]+)/);
  return match ? match[1] : null;
}

function getYouTubeEmbed(url: string): string | null {
  // For playlists
  if (url.includes("playlist?list=")) {
    const match = url.match(/list=([\w-]+)/);
    if (match) return `https://www.youtube.com/embed/videoseries?list=${match[1]}`;
  }
  // For videos
  if (url.includes("watch?v=")) {
    const match = url.match(/v=([\w-]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  if (url.includes("youtu.be/")) {
    const match = url.match(/youtu\.be\/([\w-]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

export default function CoursePage() {
  const params = useParams();
  const courseId = params.id as string;
  const course = getCourseById(courseId);
  const [activeTab, setActiveTab] = useState<"overview" | "videos" | "materials" | "topics" | "practice" | "notes">("overview");
  const [notes, setNotes] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(`notes-${courseId}`) || "";
    }
    return "";
  });

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
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "videos", label: "Video" },
              { id: "materials", label: "Materi" },
              { id: "topics", label: "Topik" },
              { id: "practice", label: "Latihan" },
              { id: "notes", label: "Catatan" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 font-semibold transition whitespace-nowrap ${
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
                course.youtube_playlists.map((playlist, i) => {
                  const embedUrl = getYouTubeEmbed(playlist.url);
                  return (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <PlayCircle className="w-6 h-6 text-red-500" />
                        <h3 className="text-lg font-bold flex-1">{playlist.title}</h3>
                      </div>
                      {embedUrl ? (
                        <div className="mb-4">
                          <iframe
                            width="100%"
                            height="350"
                            src={embedUrl}
                            title={playlist.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        </div>
                      ) : null}
                      <a
                        href={playlist.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                      >
                        Buka di YouTube <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
                  <PlayCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">
                    Video pembelajaran akan segera ditambahkan
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "materials" && (
            <div className="space-y-4">
              {course.learning_materials && course.learning_materials.length > 0 ? (
                <>
                  {/* PDF Viewer Button */}
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-6 text-white mb-6">
                    <div className="flex items-center gap-4">
                      <BookOpen className="w-12 h-12" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Materi Pembelajaran Lengkap</h3>
                        <p className="text-blue-100 mb-4">
                          Penjelasan detail, contoh kode, dan konsep fundamental dalam format PDF
                        </p>
                        <a
                          href={`/${courseId}_materi.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                        >
                          <FileText className="w-5 h-5" />
                          Buka Materi PDF
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Preview Cards */}
                  {course.learning_materials.map((material, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                          W{material.week}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1">{material.title}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Minggu {material.week}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {material.summary}
                      </p>
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Konsep Kunci:</h4>
                        <div className="flex flex-wrap gap-2">
                          {material.key_concepts.map((concept, j) => (
                            <span
                              key={j}
                              className="badge bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-0 text-xs py-1 px-3"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
                  <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Materi pembelajaran belum tersedia
                  </p>
                  {/* Check if PDF exists anyway */}
                  <a
                    href={`/${courseId}_materi.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    Coba buka PDF
                  </a>
                </div>
              )}
            </div>
          )}

          {activeTab === "practice" && (
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Latihan Soal</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Kerjakan latihan untuk menguji pemahaman Anda
                </p>
              </div>

              {/* PDF with practice problems */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-2">📝 Soal Latihan Lengkap</h3>
                <p className="text-purple-100 mb-4">
                  Latihan soal level mudah, sedang, dan sulit tersedia dalam materi PDF
                </p>
                <a
                  href={`/${courseId}_materi.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
                >
                  <FileText className="w-5 h-5" />
                  Lihat Semua Latihan
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Coming soon features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h4 className="font-bold mb-2">🎯 Level Mudah</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Soal dasar untuk memahami konsep fundamental
                  </p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h4 className="font-bold mb-2">⚡ Level Sedang</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Soal aplikasi konsep dalam konteks nyata
                  </p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h4 className="font-bold mb-2">🔥 Level Sulit</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Soal kompleks untuk menguji pemahaman mendalam
                  </p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h4 className="font-bold mb-2">✅ Auto-Grading</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Sistem penilaian otomatis (coming soon)
                  </p>
                </div>
              </div>
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
                className="w-full h-64 p-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button 
                  onClick={() => setNotes("")}
                  className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg"
                >
                  Hapus
                </button>
                <button 
                  onClick={() => {
                    localStorage.setItem(`notes-${courseId}`, notes);
                    alert("Catatan berhasil disimpan!");
                  }}
                  className="btn-primary px-6 py-2 rounded-lg"
                >
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
