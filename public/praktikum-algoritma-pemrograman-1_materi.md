# Praktikum Algoritma dan Pemrograman 1

## Pengenalan IDE dan Setup

### Apa itu IDE?
IDE (Integrated Development Environment) adalah software yang menyediakan fasilitas lengkap untuk menulis, meng-compile, dan menjalankan program.

**IDE Populer untuk Python**:
1. **VS Code** - Ringan, banyak extension
2. **PyCharm** - Fitur lengkap untuk Python
3. **Google Colab** - Online, tidak perlu install
4. **Thonny** - Pemula-friendly

### Setup Python
1. Download Python dari python.org
2. Install (centang "Add Python to PATH")
3. Cek di terminal/CMD:
```
python --version
```

### Menjalankan Program Python
**Cara 1 - Interactive Mode**:
```
>>> print("Hello World!")
Hello World!
>>> 2 + 3
5
```

**Cara 2 - Script Mode**:
1. Buat file `hello.py`
2. Tulis kode: `print("Hello World!")`
3. Jalankan: `python hello.py`

---

## Input dan Output

### Fungsi print()
```python
# Output dasar
print("Selamat datang!")

# Multiple values
print("Nama:", "Budi", "Usia:", 20)

# Format string (f-string)
nama = "Andi"
nilai = 95
print(f"Mahasiswa {nama} mendapat nilai {nilai}")

# Format angka
pi = 3.14159
print(f"Pi = {pi:.2f}")  # Pi = 3.14
```

### Fungsi input()
```python
# Input selalu menghasilkan string
nama = input("Masukkan nama: ")
print(f"Halo, {nama}!")

# Konversi ke integer
umur = int(input("Masukkan umur: "))
print(f"5 tahun lagi umur Anda: {umur + 5}")

# Konversi ke float
tinggi = float(input("Masukkan tinggi (m): "))
print(f"Tinggi Anda: {tinggi} meter")
```

---

## Tipe Data dan Operator

### Tipe Data
```python
# Integer (bilangan bulat)
x = 42
print(type(x))  # <class 'int'>

# Float (bilangan desimal)
y = 3.14
print(type(y))  # <class 'float'>

# String (teks)
s = "Hello"
print(type(s))  # <class 'str'>

# Boolean
flag = True
print(type(flag))  # <class 'bool'>

# List (kumpulan data)
lst = [1, 2, 3, 4, 5]
print(type(lst))  # <class 'list'>
```

### Operator
```python
# Aritmatika
a, b = 10, 3
print(a + b)    # 13 (tambah)
print(a - b)    # 7  (kurang)
print(a * b)    # 30 (kali)
print(a / b)    # 3.333... (bagi)
print(a // b)   # 3  (bagi bulat)
print(a % b)    # 1  (sisa bagi/modulo)
print(a ** b)   # 1000 (pangkat)

# Perbandingan
print(a > b)    # True
print(a == b)   # False
print(a != b)   # True

# Logika
x = 5
print(x > 3 and x < 10)  # True
print(x < 3 or x > 10)   # False
print(not (x > 3))        # False
```

---

## Percabangan (Branching)

### if-else
```python
# Struktur dasar
nilai = int(input("Masukkan nilai: "))

if nilai >= 80:
    print("Grade A - Sangat Baik")
elif nilai >= 70:
    print("Grade B - Baik")
elif nilai >= 60:
    print("Grade C - Cukup")
elif nilai >= 50:
    print("Grade D - Kurang")
else:
    print("Grade E - Sangat Kurang")
```

### Ternary Operator
```python
umur = 17
status = "Dewasa" if umur >= 18 else "Belum dewasa"
print(status)  # Belum dewasa
```

### Match-case (Python 3.10+)
```python
hari = "Senin"
match hari:
    case "Senin":
        print("Fisika dan Kimia Dasar")
    case "Selasa":
        print("Matematika Dasar")
    case _:
        print("Tidak ada jadwal")
```

---

## Perulangan (Looping)

### for loop
```python
# Range sederhana
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Range dengan start dan stop
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# Range dengan step
for i in range(0, 20, 5):
    print(i)  # 0, 5, 10, 15

# Iterasi list
buah = ["apel", "jeruk", "mangga"]
for b in buah:
    print(b)

# Enumerate (index + value)
for idx, b in enumerate(buah):
    print(f"{idx}: {b}")
```

### while loop
```python
# Dasar
i = 1
while i <= 5:
    print(f"Iterasi ke-{i}")
    i += 1

# Contoh: Tebak angka
import random
target = random.randint(1, 100)
tebakan = 0

while tebakan != target:
    tebakan = int(input("Tebak angka (1-100): "))
    if tebakan < target:
        print("Terlalu kecil!")
    elif tebakan > target:
        print("Terlalu besar!")

print("Benar! Angkanya", target)
```

### break dan continue
```python
# break: menghentikan loop
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue: skip iterasi
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # 1, 3, 5, 7, 9
```

---

## List dan String

### Operasi List
```python
# Membuat list
angka = [10, 20, 30, 40, 50]

# Akses elemen
print(angka[0])     # 10
print(angka[-1])    # 50 (elemen terakhir)

# Slicing
print(angka[1:4])   # [20, 30, 40]

# Menambah elemen
angka.append(60)
angka.insert(0, 5)

# Menghapus
angka.remove(30)
angka.pop()  # hapus terakhir

# Sorting
angka.sort()
angka.reverse()

# Panjang
print(len(angka))
```

### Operasi String
```python
teks = "Algoritma dan Pemrograman"

# Panjang
print(len(teks))

# Akses karakter
print(teks[0])   # 'A'
print(teks[-1])  # 'n'

# Slicing
print(teks[0:9])  # 'Algoritma'

# Split dan Join
kata = teks.split()  # ['Algoritma', 'dan', 'Pemrograman']
gabung = "-".join(kata)  # 'Algoritma-dan-Pemrograman'

# Cari dan hitung
print(teks.find("dan"))    # indeks pertama
print(teks.count("a"))     # jumlah 'a'

# Replace
baru = teks.replace("Pemrograman", "Programming")
```

---

## Fungsi (Function)

### Definisi Fungsi
```python
# Fungsi tanpa parameter
def sapa():
    print("Halo, mahasiswa Informatika!")

sapa()

# Fungsi dengan parameter
def sapa_nama(nama):
    print(f"Halo, {nama}!")

sapa_nama("Budi")

# Fungsi dengan return
def kuadrat(x):
    return x ** 2

hasil = kuadrat(5)
print(hasil)  # 25

# Fungsi dengan default parameter
def jalankan(kode, bahasa="Python"):
    print(f"Menjalankan {kode} dalam {bahasa}")

jalankan("print('hi')")  # bahasa default: Python
```

### Scope (Lingkup Variabel)
```python
# Variabel lokal vs global
x = 10  # global

def fungsi():
    x = 5  # lokal
    print(f"Dalam fungsi: x = {x}")

fungsi()
print(f"Di luar fungsi: x = {x}")

# Output:
# Dalam fungsi: x = 5
# Di luar fungsi: x = 10
```

---

## LATIHAN SOAL

### Level 1 (Mudah)

**1. Program Perkenalan**
Buat program yang:
- Meminta input nama, NPM, dan kelas
- Menampilkan perkenalan dengan format rapi
```
=== BIODATA ===
Nama  : Budi Santoso
NPM   : 50412345
Kelas : 1IA01
================
```

**2. Program Kalkulator**
Buat kalkulator yang menerima 2 angka dan 1 operator, lalu tampilkan hasilnya.

**3. Program Genap/Ganjil 1-20**
Tampilkan bilangan genap dan ganjil dari 1 sampai 20 menggunakan loop.

### Level 2 (Sedang)

**4. Program Segitiga Bintang**
Buat program menggunakan nested loop:
```
*
**
***
****
*****
```

**5. Program FizzBuzz**
Tampilkan angka 1-100. Jika habis dibagi 3 cetak "Fizz", habis dibagi 5 cetak "Buzz", habis dibagi keduanya cetak "FizzBuzz".

**6. Program Manajemen Nilai**
Buat program yang:
- Menerima N nilai siswa (N ditentukan input)
- Simpan semua nilai dalam list
- Tampilkan: rata-rata, nilai tertinggi, nilai terendah
- Tampilkan jumlah siswa yang lulus (nilai >= 60)

### Level 3 (Sulit)

**7. Program Tic-Tac-Toe**
Buat program Tic-Tac-Toe 2 pemain menggunakan list 2D:
- Tampilkan board setiap giliran
- Validasi input
- Cek kondisi menang

**8. Program Enkripsi Caesar Cipher**
Buat program yang:
- Menerima string dan key (shift)
- Geser setiap huruf sebanyak key
- Mendukung enkripsi dan dekripsi
