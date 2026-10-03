# Gunadarma Learning Hub

<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="License">
</div>

<div align="center">
  <h3>Platform pembelajaran S1 Informatika Gunadarma</h3>
  <p>10 mata kuliah, materi PDF, video YouTube, kuis interaktif, dan progress tracking dalam satu tempat.</p>
</div>

---

## Fitur Utama

- **Daftar Mata Kuliah** - 10 mata kuliah Semester 1 dengan search dan filter hari
- **Halaman Detail per Mata Kuliah** - 5 tab: Overview, Video, Materi, Topik, Catatan
- **Materi PDF** - materi lengkap tiap mata kuliah, dibuka langsung dari browser
- **Video Pembelajaran** - YouTube embedded player + playlist dari dosen pengampu
- **Kuis Interaktif** - latihan soal dengan skor langsung di `components/quiz.tsx`
- **Progress Tracking** - pelacakan progres belajar per mata kuliah
- **Note-taking** - catatan pribadi tersimpan di localStorage
- **Dark / Light Mode** - toggle tema dengan persistensi localStorage
- **PWA Ready** - `public/manifest.json` untuk install di HP
- **Responsive** - mobile-first, optimal di semua ukuran layar

---

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| Next.js 15 (App Router) | Framework React full-stack |
| TypeScript | Type safety di seluruh codebase |
| Tailwind CSS | Styling utility-first + custom theme |
| Lucide React | Icon library |
| Geist Font | Typography modern dari Vercel |
| localStorage | Penyimpanan notes & progress |

---

## Struktur Proyek

```
gunadarma-learning-hub/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout + manifest
│   ├── globals.css           # Custom theme CSS
│   ├── courses/
│   │   ├── page.tsx          # Daftar mata kuliah
│   │   └── [id]/page.tsx     # Detail mata kuliah
│   └── progress/page.tsx     # Progress tracking
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer
│   ├── quiz.tsx              # Kuis interaktif
│   └── theme-provider.tsx    # Dark/light mode
├── lib/
│   ├── courses.ts            # Course interface & helpers
│   └── utils.ts              # Utility functions
├── courses-data.json         # Data 10 mata kuliah
└── public/
    ├── manifest.json         # PWA manifest
    └── *_materi.pdf          # Materi PDF per mata kuliah
```

---

## Cara Menjalankan

### Prasyarat

- Node.js 18.18 atau lebih baru
- npm

### Local Development

1. Clone repository ini:

   ```bash
   git clone https://github.com/DanielAliRassya/gunadarma-learning-hub.git
   cd gunadarma-learning-hub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
npm run build
npm start
```

---

## Mata Kuliah

| # | Mata Kuliah | SKS | Hari | Dosen Pengampu |
|---|-------------|-----|------|----------------|
| 1 | Algoritma dan Pemrograman 1 | 2 | Kamis | Dr. Rodiah |
| 2 | Praktikum Algoritma dan Pemrograman 1 | 1 | Kamis | Dr. Rodiah |
| 3 | Matematika Informatika 1 | 2 | Rabu | Dr. Feni Andriani |
| 4 | Matematika Dasar 1 | 2 | Selasa | Dr. Desti Riminarsih |
| 5 | Fisika dan Kimia Dasar 1 | 2 | Senin | Nur Fatihah ST., MT |
| 6 | Pengantar Teknologi Komputer dan Informatika | 2 | Kamis | Dr. Ike Putri Kusumawijaya |
| 7 | Bahasa Inggris | 2 | Rabu | Ir. Taufik Hidayat, MM |
| 8 | Bahasa Indonesia | 2 | Selasa | Dr. Choirul Umam |
| 9 | Pendidikan Pancasila | 2 | Senin | Gatot Subiyakto SH., MM |
| 10 | Legal Aspek Produk Teknologi Informasi dan Komunikasi | 2 | Jumat | Risdiandri Iskandar S.Kom., MM |

**Total: 19 SKS** - Program studi S1 Informatika, Fakultas Ilmu Komputer, Universitas Gunadarma.

---

## Menambahkan Materi Baru

Materi PDF dan markdown disimpan di folder `public/` dengan konvensi nama:

```
public/{course_id}_materi.pdf
public/{course_id}_materi.md
```

`course_id` mengikuti key `id` di `courses-data.json`. Contoh: `algoritma-pemrograman-1_materi.pdf`.

1. Tambahkan file PDF ke folder `public/` dengan nama `{course_id}_materi.pdf`
2. Tambahkan juga versi markdown `{course_id}_materi.md` sebagai source
3. Commit dan push - file otomatis terlink dari halaman detail mata kuliah

---

## Deploy ke Vercel

**Opsi A: Via Dashboard (Recommended)**

1. Buka [vercel.com](https://vercel.com) dan login dengan GitHub
2. Klik **New Project**
3. Import repository `gunadarma-learning-hub`
4. Framework Preset: **Next.js** (auto-detect)
5. Klik **Deploy** - selesai dalam 2-3 menit

**Opsi B: Via CLI**

```bash
npx vercel
npx vercel --prod
```

---

## Tema Warna

| Token | Warna | Hex |
|-------|-------|-----|
| Primary | Deep Blue | `#1e40af` |
| Accent | Emerald Green | `#10b981` |
| Secondary | Purple | `#7c3aed` |
| Background | Light Gray | `#f8fafc` |
| Dark Mode | Slate | `#1e293b` |

---

## Lisensi

Proyek ini menggunakan lisensi **MIT**. Bebas digunakan dan dimodifikasi dengan menyertakan credit yang sesuai.

---

<div align="center">
  <p>Dibuat oleh <strong>Daniel Ali Rassya</strong></p>
</div>
