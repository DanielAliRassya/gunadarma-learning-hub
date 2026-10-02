# Pengantar Teknologi Komputer dan Informatika

## Sejarah Komputer

### Generasi Komputer

#### Generasi 1 (1940-1959): Tab Vakum
- Komponen: Tab vakum (vacuum tube)
- Contoh: ENIAC, UNIVAC
- Karakteristik: Ukuran sangat besar, panas, boros energi
- Bahasa: Bahasa mesin

#### Generasi 2 (1959-1965): Transistor
- Komponen: Transistor (mengganti tab vakum)
- Contoh: IBM 1401, IBM 7090
- Karakteristik: Lebih kecil, lebih cepat, lebih efisien
- Bahasa: Assembly, Fortran, COBOL

#### Generasi 3 (1965-1971): IC
- Komponen: Integrated Circuit (IC)
- Contoh: IBM 360
- Karakteristik: Lebih kecil lagi, multiprocessing
- Bahasa: BASIC, Pascal

#### Generasi 4 (1971-sekarang): Mikroprosesor
- Komponen: Microprocessor (VLSI)
- Contoh: PC, IBM PC, Apple
- Karakteristik: Personal Computer, GUI
- Bahasa: C, C++, Java, Python

#### Generasi 5 (Sekarang-): AI
- Komponen: AI chip, quantum computing
- Karakteristik: AI, machine learning, parallel processing
- Teknologi: Deep learning, neural network

---

## Arsitektur Komputer

### Model Von Neumann
```
┌───────────┐     ┌────────────┐     ┌────────────┐
│   Input   │────▶│   CPU      │────▶│   Output   │
│  Devices  │     │            │     │  Devices   │
└───────────┘     │ ┌────────┐ │     └────────────┘
                  │ │   ALU  │ │
                  │ ├────────┤ │     ┌────────────┐
                  │ │   CU   │◀┼────▶│   Memory   │
                  │ ├────────┤ │     │ (RAM)      │
                  │ │Register│ │     └────────────┘
                  │ └────────┘ │
                  └────────────┘
```

### Komponen Utama
1. **CPU (Central Processing Unit)**: Otak komputer
   - **ALU**: Arithmetic Logic Unit (operasi hitung & logika)
   - **CU**: Control Unit (mengatur jalannya program)
   - **Registers**: Penyimpanan sementara super cepat

2. **Memory**: Penyimpanan data dan instruksi
   - **RAM**: Volatile, cepat
   - **ROM**: Non-volatile, firmware
   - **Cache**: Antara CPU dan RAM

3. **I/O Devices**: Input dan Output
   - Input: Keyboard, mouse, scanner
   - Output: Monitor, printer, speaker

### Siklus Instruksi (Instruction Cycle)
```
1. Fetch    : Ambil instruksi dari memory
2. Decode   : Terjemahkan instruksi
3. Execute  : Jalankan instruksi
4. Store    : Simpan hasil
```

---

## Sistem Bilangan

### Bilangan Desimal (Basis 10)
Digit: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
123 = 1×10² + 2×10¹ + 3×10⁰
    = 100 + 20 + 3
    = 123
```

### Bilangan Biner (Basis 2)
Digit: 0, 1
```
1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰
     = 8 + 0 + 2 + 1
     = 11 (desimal)
```

### Bilangan Oktal (Basis 8)
Digit: 0, 1, 2, 3, 4, 5, 6, 7
```
17 = 1×8¹ + 7×8⁰
   = 8 + 7
   = 15 (desimal)
```

### Bilangan Heksadesimal (Basis 16)
Digit: 0-9, A, B, C, D, E, F
```
FF = 15×16¹ + 15×16⁰
   = 240 + 15
   = 255 (desimal)
```

### Konversi
**Desimal → Biner** (dibagi 2):
```
25 / 2 = 12 sisa 1
12 / 2 = 6  sisa 0
6 / 2  = 3  sisa 0
3 / 2  = 1  sisa 1
1 / 2  = 0  sisa 1
Hasil: 11001
```

**Biner → Desimal** (dikalikan pangkat 2):
```
11001 = 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰
      = 16 + 8 + 0 + 0 + 1
      = 25
```

---

## Sistem Operasi

### Definisi
Sistem Operasi (OS) adalah software yang mengatur hardware dan software resources, serta menyediakan layanan untuk program aplikasi.

### Jenis OS
1. **Windows**: Microsoft, GUI-based, dominan di PC
2. **Linux**: Open source, stabil, server & developer
3. **macOS**: Apple, Unix-based, desain premium
4. **Android**: Mobile, Linux-based
5. **iOS**: Mobile, Apple

### Fungsi OS
1. **Manajemen Proses**: Penjadwalan CPU
2. **Manajemen Memory**: Alokasi & dealokasi RAM
3. **Manajemen File**: Organisasi data di storage
4. **Manajemen I/O**: Kontrol perangkat
5. **Keamanan**: Proteksi & autentikasi
6. **Network**: Komunikasi data

### Contoh Manajemen Proses
```
Process States:
New → Ready → Running → Waiting → Ready
                 ↓
               Terminated
```

---

## Jaringan Komputer

### Topologi Jaringan
1. **Star**: Semua terhubung ke switch/hub pusat
2. **Bus**: Satu kabel backbone
3. **Ring**: Melingkar, token passing
4. **Mesh**: Semua terhubung ke semua
5. **Tree**: Hierarki

### OSI Layer (7 Layers)
| Layer | Nama | Fungsi | Contoh |
|-------|------|--------|--------|
| 7 | Application | Interface user | HTTP, FTP |
| 6 | Presentation | Enkripsi, kompresi | SSL, JPEG |
| 5 | Session | Manajemen sesi | NetBIOS |
| 4 | Transport | Pengiriman data | TCP, UDP |
| 3 | Network | Routing | IP |
| 2 | Data Link | Frame, MAC | Ethernet |
| 1 | Physical | Bit, kabel | Kabel UTP |

### IP Address
- **IPv4**: 32-bit, format 4 oktet (192.168.1.1)
- **IPv6**: 128-bit, format heksadesimal

**Kelas IPv4**:
```
Kelas A: 1.0.0.0 - 126.255.255.255 (jaringan besar)
Kelas B: 128.0.0.0 - 191.255.255.255
Kelas C: 192.0.0.0 - 223.255.255.255 (jaringan kecil)
```

---

## Keamanan Komputer

### CIA Triad
1. **Confidentiality**: Kerahasiaan data
2. **Integrity**: Keutuhan data tidak diubah
3. **Availability**: Ketersediaan layanan

### Jenis Ancaman
1. **Malware**: Virus, worm, trojan, ransomware
2. **Phishing**: Penipuan email/web palsu
3. **DDoS**: Membanjiri server dengan request
4. **SQL Injection**: Sisipan kode ke database
5. **Social Engineering**: Manipulasi psikologis

### Metode Proteksi
1. **Password kuat**: Min 12 char, campuran
2. **Two-Factor Authentication (2FA)**: Layer keamanan
3. **Firewall**: Filter traffic
4. **Antivirus**: Deteksi malware
5. **Backup**: Cadangan data berkala
6. **Encryption**: Enkripsi data sensitif

### Contoh Password Lemah vs Kuat
```
Lemah  : password123, 123456, namatanggalahir
Kuat   : K7#mP@9xLw2!nQ
```

---

## Cloud Computing

### Jenis Cloud Services
1. **IaaS (Infrastructure as a Service)**
   - Penyedia: AWS EC2, Google Compute
   - Fitur: Server virtual, storage

2. **PaaS (Platform as a Service)**
   - Penyedia: Heroku, Google App Engine
   - Fitur: Environment untuk develop

3. **SaaS (Software as a Service)**
   - Penyedia: Gmail, Office 365, Google Docs
   - Bidang akademik: Learning Management System

### Keuntungan Cloud
1. Skalabilitas: Naik/turun sesuai kebutuhan
2. Cost-effective: Bayar sesuai pemakaian
3. Akses dari mana saja
4. Maintenance ditangani provider
5. Backup dan disaster recovery

---

## Karir di Bidang Informatika

### Bidang Pekerjaan
1. **Software Engineer/Developer**: Membuat aplikasi
2. **Data Scientist**: Analisis data, ML
3. **DevOps Engineer**: Otomasi deployment
4. **Cybersecurity Specialist**: Keamanan sistem
5. **UI/UX Designer**: Desain antarmuka
6. **Cloud Architect**: Arsitektur cloud
7. **Database Administrator**: Manajemen database
8. **Network Engineer**: Jaringan komputer
9. **AI Engineer**: Kecerdasan buatan
10. **IT Consultant: Konsultan teknologi

### Skill Penting
- **Hard skills**: Programming, algoritma, database, jaringan
- **Soft skills**: Komunikasi, teamwork, problem-solving, adaptability
- **Tools**: Git, Docker, Linux, IDE

---

## LATIHAN SOAL

### Level 1 (Mudah)

**1. Sejarah Komputer**
Sebutkan komponen utama pada setiap generasi komputer (1-5)!

**2. Konversi Bilangan**
Konversikan:
- 42 (desimal) → biner
- 1101 (biner) → desimal
- 255 (desimal) → heksadesimal

**3. Arsitektur Komputer**
Jelaskan perbedaan fungsi ALU dan CU dalam CPU!

### Level 2 (Sedang)

**4. Sistem Operasi**
Jelaskan 3 fungsi utama sistem operasi dan berikan contoh implementasinya!

**5. Jaringan Komputer**
Sebutkan dan jelaskan minimal 4 dari 7 layer OSI model!

**6. Keamanan Komputer**
Anda diminta membuat password baru untuk akun bank online Anda. Buatlah password yang kuat dan jelaskan kenapa kuat!

### Level 3 (Sulit)

**7. Studi Kasus Arsitektur**
Sebuah perusahaan startup ingin membangun sistem e-commerce dengan budget terbatas. Jelaskan arsitektur sistem yang Anda rekomendasikan, termasuk:
- Jenis cloud service yang dipilih (IaaS/PaaS/SaaS)
- Database
- Security measures

**8. Konversi Komprehensif**
Konversikan 250 (desimal) ke: biner, oktal, dan heksadesimal. Tunjukkan langkah perhitungannya!
