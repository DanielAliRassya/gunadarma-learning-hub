"use client";

export const dynamic = "force-dynamic";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { BookOpen, FileText, ClipboardList, LogOut, Plus } from "lucide-react";
import Link from "next/link";
import { courses } from "@/lib/courses";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [materials, setMaterials] = useState<any[]>([]);
  const [homework, setHomework] = useState<any[]>([]);
  const [showMaterialForm, setShowMaterialForm] = useState(false);
  const [showHomeworkForm, setShowHomeworkForm] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (selectedCourse) {
      loadMaterials();
      loadHomework();
    }
  }, [selectedCourse]);

  const loadMaterials = async () => {
    const res = await fetch(`/api/materials?course_id=${selectedCourse}`);
    const data = await res.json();
    setMaterials(data);
  };

  const loadHomework = async () => {
    const res = await fetch(`/api/homework?course_id=${selectedCourse}`);
    const data = await res.json();
    setHomework(data);
  };

  const deleteMaterial = async (id: string) => {
    if (!confirm("Hapus materi ini?")) return;
    await fetch(`/api/materials?id=${id}`, { method: "DELETE" });
    loadMaterials();
  };

  const deleteHomework = async (id: string) => {
    if (!confirm("Hapus tugas ini?")) return;
    await fetch(`/api/homework?id=${id}`, { method: "DELETE" });
    loadHomework();
  };

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="font-bold text-lg">Admin Dashboard</h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {session.user?.name}
                </p>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2">
            Pilih Mata Kuliah
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Pilih Mata Kuliah --</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name} ({course.code})
              </option>
            ))}
          </select>
        </div>

        {selectedCourse && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Materials Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Materi
                </h2>
                <button
                  onClick={() => setShowMaterialForm(!showMaterialForm)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4" />
                  Tambah
                </button>
              </div>

              {showMaterialForm && (
                <MaterialForm
                  courseId={selectedCourse}
                  onSuccess={() => {
                    loadMaterials();
                    setShowMaterialForm(false);
                  }}
                  onCancel={() => setShowMaterialForm(false)}
                />
              )}

              <div className="space-y-3">
                {materials.map((mat) => (
                  <div
                    key={mat.id}
                    className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{mat.title}</h3>
                      <button
                        onClick={() => deleteMaterial(mat.id)}
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        Hapus
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {mat.content.substring(0, 100)}...
                    </p>
                    {mat.week && (
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                        Minggu {mat.week}
                      </span>
                    )}
                  </div>
                ))}
                {materials.length === 0 && (
                  <p className="text-center text-slate-500 py-8">
                    Belum ada materi
                  </p>
                )}
              </div>
            </div>

            {/* Homework Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ClipboardList className="w-6 h-6" />
                  Tugas
                </h2>
                <button
                  onClick={() => setShowHomeworkForm(!showHomeworkForm)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4" />
                  Tambah
                </button>
              </div>

              {showHomeworkForm && (
                <HomeworkForm
                  courseId={selectedCourse}
                  onSuccess={() => {
                    loadHomework();
                    setShowHomeworkForm(false);
                  }}
                  onCancel={() => setShowHomeworkForm(false)}
                />
              )}

              <div className="space-y-3">
                {homework.map((hw) => (
                  <div
                    key={hw.id}
                    className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{hw.title}</h3>
                      <button
                        onClick={() => deleteHomework(hw.id)}
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        Hapus
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {hw.description.substring(0, 100)}...
                    </p>
                    {hw.due_date && (
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded">
                        Deadline: {new Date(hw.due_date).toLocaleDateString('id-ID')}
                      </span>
                    )}
                  </div>
                ))}
                {homework.length === 0 && (
                  <p className="text-center text-slate-500 py-8">
                    Belum ada tugas
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MaterialForm({ courseId, onSuccess, onCancel }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [week, setWeek] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/materials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_id: courseId,
        title,
        content,
        week: week ? parseInt(week) : null,
        file_url: fileUrl || null,
      }),
    });

    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 mb-4 space-y-3">
      <input
        type="text"
        placeholder="Judul Materi"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Konten Materi"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={4}
        required
      />
      <input
        type="number"
        placeholder="Minggu ke-"
        value={week}
        onChange={(e) => setWeek(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="url"
        placeholder="URL File (opsional)"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          Batal
        </button>
      </div>
    </form>
  );
}

function HomeworkForm({ courseId, onSuccess, onCancel }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/homework", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_id: courseId,
        title,
        description,
        due_date: dueDate || null,
        file_url: fileUrl || null,
      }),
    });

    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 mb-4 space-y-3">
      <input
        type="text"
        placeholder="Judul Tugas"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <textarea
        placeholder="Deskripsi Tugas"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        rows={4}
        required
      />
      <input
        type="datetime-local"
        placeholder="Deadline"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="url"
        placeholder="URL File (opsional)"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
