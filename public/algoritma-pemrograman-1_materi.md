# Algoritma dan Pemrograman 1

## Pengenalan Algoritma

### Definisi
Algoritma adalah urutan langkah-langkah terstruktur yang dirancang untuk menyelesaikan masalah atau mencapai tujuan tertentu. Dalam pemrograman, algoritma adalah logika yang kami terjemahkan menjadi kode.

### Karakteristik Algoritma yang Baik
1. **Finite (Terbatas)**: Harus berakhir dalam jumlah langkah yang terbatas
2. **Definite (Jelas)**: Setiap langkah harus jelas dan tidak ambigu
3. **Effective (Efektif)**: Menggunakan operasi dasar yang dapat dijalankan
4. **Input**: Menerima data masukan (boleh nol)
5. **Output**: Menghasilkan keluaran (minimal satu)

### Contoh: Mencari Bilangan Terbesar
**Problem**: Diberikan 3 bilangan, cari yang terbesar.

**Pseudocode**:
```
Masukkan a, b, c
Jika a > b AND a > c
  Cetak a adalah terbesar
Else Jika b > c
  Cetak b adalah terbesar
Else
  Cetak c adalah terbesar
```

**Kode Python**:
```python
a = int(input("Masukkan a: "))
b = int(input("Masukkan b: "))
c = int(input("Masukkan c: "))

if a > b and a > c:
    print(f"{a} adalah terbesar")
elif b > c:
    print(f"{b} adalah terbesar")
else:
    print(f"{c} adalah terbesar")
```

## Flowchart
Flowchart adalah representasi visual algoritma menggunakan simbol-simbol standar:
- **Oval**: Start/End
- **Rectangle**: Process
- **Diamond**: Decision
- **Parallelogram**: Input/Output
- **Arrow**: Flow

---

## Variabel & Tipe Data

### Definisi Variabel
Variabel adalah tempat menyimpan data dalam memori komputer. Diberi nama untuk diakses kemudian.

**Deklarasi di Python**: `nama_variabel = nilai`

### Tipe Data Dasar
1. **int**: Bilangan bulat (5, -10, 0)
2. **float**: Bilangan desimal (3.14, -2.5)
3. **str**: Teks/string ("Halo", 'Python')
4. **bool**: Boolean (True, False)

### Contoh:
```python
nama = "Budi"              # string
usia = 20                  # int
tinggi = 1.75             # float
sudah_lulus = True        # bool

print(f"Nama: {nama}")
print(f"Usia: {usia} tahun")
print(f"Tinggi: {tinggi} meter")
```

### Konversi Tipe (Type Casting)
```python
nilai_str = "100"
nilai_int = int(nilai_str)  # 100
nilai_float = float("3.14")  # 3.14
nilai_bool = bool(1)         # True
```

### Operator Aritmatika
```python
a = 10
b = 3

print(a + b)   # 13 (penjumlahan)
print(a - b)   # 7  (pengurangan)
print(a * b)   # 30 (perkalian)
print(a / b)   # 3.333... (pembagian)
print(a // b)  # 3  (pembagian bulat)
print(a % b)   # 1  (sisa bagi)
print(a ** b)  # 1000 (pangkat)
```

---

## Percabangan (if-else)

### Definisi
Percabangan memungkinkan program membuat keputusan berdasarkan kondisi tertentu.

### Operator Perbandingan
```python
a = 5
print(a == 5)    # True (sama dengan)
print(a != 5)    # False (tidak sama)
print(a > 5)     # False (lebih besar)
print(a >= 5)    # True (lebih besar atau sama)
print(a < 5)     # False (lebih kecil)
print(a <= 5)    # True (lebih kecil atau sama)
```

### Operator Logika
```python
x = 10
print(x > 5 and x < 15)    # True (AND)
print(x < 5 or x > 15)     # False (OR)
print(not (x > 20))        # True (NOT)
```

### Struktur if-else
```python
nilai = int(input("Masukkan nilai: "))

if nilai >= 80:
    print("Nilai A")
elif nilai >= 70:
    print("Nilai B")
elif nilai >= 60:
    print("Nilai C")
else:
    print("Nilai D")
```

### Nested if
```python
usia = 17
punya_sim = True

if usia >= 17:
    if punya_sim:
        print("Boleh berkendara")
    else:
        print("Harus punya SIM")
else:
    print("Belum cukup umur")
```

---

## LATIHAN SOAL

### Level 1 (Mudah)

**1. Program Ganjil/Genap**
Buatlah program yang menerima input bilangan dan menentukan apakah bilangan tersebut ganjil atau genap.

Contoh Input: 7
Contoh Output: 7 adalah bilangan ganjil

**2. Program Kalkulator Sederhana**
Buatlah program yang menerima dua bilangan dan sebuah operator (+, -, *, /), lalu cetak hasilnya.

Contoh Input: 10, 5, +
Contoh Output: 10 + 5 = 15

**3. Program Terbesar 3 Bilangan**
Buatlah program yang menerima 3 bilangan dan menentukan bilangan terbesar.

Contoh Input: 5, 12, 8
Contoh Output: 12 adalah bilangan terbesar

### Level 2 (Sedang)

**4. Program Grade Siswa**
Buatlah program yang menerima nilai siswa (0-100) dan menampilkan:
- A jika nilai >= 85
- B jika nilai >= 75
- C jika nilai >= 65
- D jika nilai >= 55
- E jika nilai < 55

**5. Program Diskon**
Buatlah program yang:
- Menerima harga barang dan status member (yes/no)
- Jika member: diskon 20%, jika bukan member: diskon 5%
- Tampilkan harga awal, diskon, dan harga akhir

### Level 3 (Sulit)

**6. Program BMI (Body Mass Index)**
Rumus: BMI = berat (kg) / (tinggi (m))^2

Kategori:
- BMI < 18.5: Underweight
- 18.5 <= BMI < 25: Normal
- 25 <= BMI < 30: Overweight
- BMI >= 30: Obese

Input: berat dan tinggi
Output: BMI dan kategori

