# Legal Aspek Produk TIK

## Hukum dan Teknologi Informasi

### Pengertian
Hukum TIK (Teknologi Informasi dan Komunikasi) adalah kumpulan aturan hukum yang mengatur penggunaan, perlindungan, dan penyelesaian sengketa terkait teknologi informasi.

### Dasar Hukum di Indonesia
1. **UU ITE 2008** (No. 11/2008): Informasi dan Transaksi Elektronik
2. **UU PDP** (No. 27/2022): Perlindungan Data Pribadi
3. **UU Hak Cipta** (No. 28/2014): Perlindungan ciptaan digital
4. **UU Keamanan Siber** (UU No. 6/2023): Cybersecurity
5. **PP No. 71/2019**: Penyelenggaraan Sistem dan Transaksi Elektronik

### Pentingnya Hukum TIK bagi IT
- Melindungi hak cipta software
- Menghindari pelanggaran hukum
- Mengetahui batasan legal dalam coding
- Memahami kontrak kerja IT
- Menangani data pribadi dengan benar

---

## Hak Kekayaan Intelektual (HKI)

### Jenis HKI di Bidang IT

#### 1. Hak Cipta (Copyright)
Perlindungan otomatis atas karya cipta.

**Yang dilindungi**:
- Source code program komputer
- Desain antarmuka (UI)
- Dokumentasi teknis
- Konten digital (artikel, video)

**Durasi**: Seumur hidup pencipta + 70 tahun

#### 2. Merek (Trademark)
Identitas visual/nama produk.

**Contoh**: Logo Windows, nama "Python", ikon Chrome

**Pendaftaran**: Direktorat Jenderal HKI

#### 3. Paten
Perlindungan atas penemuan teknis.

**Syarat**:
- Baru (novel)
- Inventif (tidak obvious)
- Dapat diterapkan secara industri

**Durasi**: 20 tahun dari tanggal penerimaan

### Lisensi Software

#### Open Source License
| Lisensi | Syarat | Contoh |
|---------|--------|--------|
| MIT | Bebas pakai, modifikasi, distribusi | React, jQuery |
| GPL | Modifikasi harus open source juga | Linux, GIMP |
| Apache | Mirip MIT + paten protection | Android, Hadoop |
| BSD | Sangat bebas, bisa proprietary | FreeBSD |

#### Proprietary License
- **EULA**: End User License Agreement
- **SaaS**: Software as a Service subscription
- **Enterprise**: Custom license untuk perusahaan

**Contoh EULA Clause**:
```
"Software ini dilisensikan, bukan dijual.
Anda tidak boleh: reverse engineer, decompile,
atau disassemble software ini."
```

---

## UU ITE (Informasi dan Transaksi Elektronik)

### Pasal-Pasal Penting

#### Pasal 4: Pengakuan Elektronik
```
Informasi elektronik dan/atau dokumen elektronik 
dan/atau hasil cetaknya merupakan alat bukti yang sah.
```

#### Pasal 5: Tanda Tangan Digital
```
Tanda tangan digital memiliki kekuatan hukum dan 
dapat digunakan sebagai alat bukti hukum selama:
1. Memenuhi persyaratan formal
2. Menggunakan metode autentikasi yang andal
```

#### Pasal 27: Larangan
Dilarang:
1. Mendistribusikan akses tanpa izin
2. Mendistribusikan informasi palsu/menyesatkan
3. Mendistribusikan konten yang melanggar asusila

#### Pasal 28: Larangan Konten
Dilarang menyebarkan:
1. SARA (suku, agama, ras)
2. Kekerasan/pornografi
3. Penghinaan/pencemaran nama baik

#### Pasal 29: Ujaran Kebencian
```
Setiap orang sengaja dan tanpa hak mengirim 
informasi elektronik berisi ancaman kekerasan atau 
mengintimidasi dipidana...
```

### Sanksi Pelanggaran
| Pelanggaran | Sanksi |
|-------------|--------|
| Akses ilegal | 7 tahun / Rp700 juta |
| Konten ilegal | 6 tahun / Rp1 miliar |
| Ujaran kebencian | 4 tahun / Rp750 juta |
| Pencemaran nama baik | 4 tahun / Rp750 juta |

---

## Perlindungan Data Pribadi (PDP)

### Definisi Data Pribadi
Data tentang individu yang teridentifikasi atau dapat diidentifikasi.

**Contoh**:
- Nama, NIK, alamat
- Email, nomor HP
- Lokasi GPS
- IP address, cookie
- Biometrik (sidik jari, wajah)

### Prinsip Perlindungan Data (7 Prinsip)
1. **Legalitas**: Proses data harus ada dasar hukum
2. **Tujuan spesifik**: Jelas kenapa data dikumpulkan
3. **Minimasi data**: Hanya kumpulkan yang perlu
4. **Akurasi**: Data harus akurat & up-to-date
5. **Penyimpanan terbatas**: Simpan sesuai kebutuhan
6. **Integritas & Kerahasiaan**: Amankan data
7. **Akuntabilitas**: Bisa dimintai pertanggungjawaban

### Hak Subjek Data (Data Subject Rights)
1. **Hak Konfirmasi**: Apakah data saya diproses?
2. **Hak Akses**: Lihat data yang disimpan
3. **Hak Koreksi**: Perbaiki data salah
4. **Hak Penghapusan**: Hapus data ("right to be forgotten")
5. **Hak Portabilitas**: Pindahkan data ke layanan lain
6. **Hak Keberatan**: Tolak pemrosesan tertentu

### Implementasi untuk Developer
```python
# Contoh: Consent Management System
class ConsentManager:
    def __init__(self):
        self.consents = {}
    
    def request_consent(self, user_id, purpose):
        """Minta izin sebelum proses data"""
        # Kirim notifikasi ke user
        # Catat waktu & jenis consent
        pass
    
    def check_consent(self, user_id, purpose):
        """Cek apakah sudah ada izin"""
        return self.consents.get(user_id, {}).get(purpose, False)
    
    def revoke_consent(self, user_id, purpose):
        """User menarik izin"""
        if user_id in self.consents:
            del self.consents[user_id][purpose]
```

---

## Aspek Legal dalam Pengembangan Software

### Kontrak Kerja IT

#### Komponen Kontrak
1. **Parties**: Identitas kedua belah pihak
2. **Scope of Work**: Detail pekerjaan
3. **Timeline**: Deadline & milestone
4. **Payment**: Gaji/honorarium
5. **IP Ownership**: Siapa punya hak cipta?
6. **Confidentiality**: NDA (Non-Disclosure Agreement)
7. **Termination**: Syarat mengakhiri kontrak
8. **Dispute Resolution**: Cara menyelesaikan sengketa

#### Contoh Klausul IP
```
"Seluruh kode, desain, dan dokumentasi yang dibuat 
selama masa kontrak menjadi milik Perusahaan. 
Programmer tidak memiliki hak atas karya tersebut."
```

### Terms of Service (ToS)
Ketentuan layanan untuk pengguna aplikasi/web.

**Komponen penting**:
1. Acceptance of terms
2. Description of service
3. User responsibilities
4. Content ownership
5. Privacy policy reference
6. Limitation of liability
7. Termination clause
8. Governing law

### Privacy Policy
Kebijakan privasi wajib untuk aplikasi yang mengumpulkan data.

**Isi minimal**:
1. Data apa yang dikumpulkan?
2. Kenapa dikumpulkan?
3. Bagaimana cara pengumpulan?
4. Siapa yang bisa akses?
5. Bagaimana data diamankan?
6. Bagaimana jika terjadi breach?

---

## Etika Profesi IT

### Kode Etik ACM/IEEE
1. **Public Interest**: Prioritaskan kepentingan publik
2. **Avoid Harm**: Hindari bahaya pada orang lain
3. **Be Honest**: Jujur dan dapat dipercaya
4. **Fairness**: Adil dan tidak diskriminatif
5. **Respect Property**: Hormati properti intelektual
6. **Give Credit**: Beri kredit pada karya orang lain
7. **Respect Privacy**: Hormati privasi pengguna
8. **Professional Competence**: Tingkatkan kompetensi

### Dilema Etika Umum
1. **AI Bias**: Algoritma yang diskriminatif
2. **Surveillance**: Monitoring berlebihan
3. **Data Mining**: Eksploitasi data tanpa izin
4. **Automation**: Penggantian tenaga kerja
5. **Deepfake**: Manipulasi konten

### Studi Kasus: Cambridge Analytica
**Masalah**: Data 87 juta pengguna Facebook diambil tanpa izin untuk kampanye politik.

**Pelajaran**:
- Third-party apps harus diaudit
- User harus tahu siapa yang akses datanya
- Platform bertanggung jawab atas ekosistem mereka

---

## Sengketa dan Penyelesaian

### Jenis Sengketa IT
1. **Pelanggaran hak cipta**: Copy software, plagiat kode
2. **Breach of contract**: Tidak bayar, tidak selesaikan proyek
3. **Data breach**: Kebocoran data pribadi
4. **Cybercrime**: Hacking, phishing, ransomware
5. **Patent infringement**: Melanggar paten

### Cara Penyelesaian
1. **Negosiasi**: Diskusi langsung
2. **Mediasi**: Mediator netral membantu
3. **Arbitrasi**: Arbitrator putuskan (binding)
4. **Litigasi**: Pengadilan (mahal & lama)

### Tips Menghindari Sengketa
1. Selalu buat kontrak tertulis
2. Dokumentasikan semua komunikasi
3. Gunakan lisensi yang jelas
4. Jangan gunakan kode tanpa izin
5. Backup semua pekerjaan
6. Konsultasi lawyer untuk proyek besar

---

## LATIHAN SOAL

### Level 1 (Mudah)

**1. HKI Dasar**
Jelaskan perbedaan Hak Cipta, Merek, dan Paten! Berikan contoh masing-masing di bidang IT!

**2. UU ITE**
Sebutkan 3 larangan menurut Pasal 27 UU ITE beserta contohnya!

**3. Data Pribadi**
Apa saja yang termasuk data pribadi? Berikan 5 contoh!

### Level 2 (Sedang)

**4. Lisensi Software**
Bandingkan lisensi MIT vs GPL! Mana yang lebih cocok untuk:
- Library utility yang ingin banyak dipakai orang?
- Framework core yang ingin tetap open source?

**5. Privacy Policy**
Buat draft privacy policy sederhana untuk aplikasi "Catatan Kuliah" yang hanya menyimpan:
- Nama mahasiswa
- Daftar mata kuliah
- Catatan harian

**6. Etika Profesi**
Sebagai developer, Anda diminta bos membuat fitur yang melacak lokasi pengguna tanpa memberi notifikasi. Bagaimana Anda merespons? Jelaskan berdasarkan kode etik IT!

### Level 3 (Sulit)

**7. Studi Kasus Kontrak**
Anda freelance mengerjakan website e-commerce untuk klien. Setelah selesai, klien tidak mau bayar dan mengklaim mereka yang punya kode karena "kami yang bayar server". Analisis:
- Apa yang salah dalam kontrak (jika ada)?
- Langkah hukum apa yang bisa diambil?
- Bagaimana mencegah hal ini di masa depan?

**8. Essay: Regulasi AI**
Indonesia belum memiliki regulasi spesifik tentang AI. Buatlah proposal kerangka regulasi AI yang mencakup:
- Definisi AI yang perlu diregulasi
- Prinsip-prinsip dasar
- Tanggung jawab developer vs user
- Sanksi pelanggaran
