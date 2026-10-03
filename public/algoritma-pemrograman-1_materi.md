# Algoritma dan Pemrograman 1

> **Mata Kuliah:** IT045301 | **SKS:** 2 | **Semester:** 1
> Materi pembelajaran fundamental algoritma dan pemrograman menggunakan Python.

---

## Minggu 1: Pengenalan Algoritma & Flowchart

### Definisi Algoritma
**Algoritma** adalah urutan langkah-langkah logis dan terstruktur yang dirancang untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu. Dalam pemrograman, algoritma adalah cetak biru (blueprint) yang kita terjemahkan menjadi kode program.

### Karakteristik Algoritma yang Baik
1. **Finite (Terbatas):** Harus berakhir dalam jumlah langkah yang terbatas
2. **Definite (Pasti):** Setiap langkah jelas dan tidak ambigu
3. **Effective (Efektif):** Setiap operasi dapat dijalankan secara nyata
4. **Input:** Menerima nol atau lebih data masukan
5. **Output:** Menghasilkan minimal satu keluaran

### Contoh 1: Mencari Bilangan Terbesar dari 3 Angka

**Pseudocode:**
```
MULAI
  Baca bilangan a, b, c

  JIKA a > b DAN a > c MAKA
    Cetak "a adalah yang terbesar"
  JIKA TIDAK, JIKA b > c MAKA
    Cetak "b adalah yang terbesar"
  LAINNYA
    Cetak "c adalah yang terbesar"
SELESAI
```

**Implementasi Python:**
```python
a = int(input("Masukkan bilangan pertama: "))
b = int(input("Masukkan bilangan kedua  : "))
c = int(input("Masukkan bilangan ketiga : "))

if a > b and a > c:
    print(f"{a} adalah bilangan terbesar")
elif b > c:
    print(f"{b} adalah bilangan terbesar")
else:
    print(f"{c} adalah bilangan terbesar")
```

**Output Contoh (input: 7, 12, 9):**
```
Masukkan bilangan pertama: 7
Masukkan bilangan kedua  : 12
Masukkan bilangan ketiga : 9
12 adalah bilangan terbesar
```

### Simbol-Simbol Flowchart

| Simbol | Bentuk | Fungsi |
|--------|--------|--------|
| **Terminator** | Oval | Start / End |
| **Process** | Persegi Panjang | Proses / Perhitungan |
| **Decision** | Belah Ketupat | Percabangan (Ya/Tidak) |
| **Input/Output** | Jajar Genjang | Baca data / Cetak hasil |
| **Arrow** | Panah | Arah aliran |
| **Connector** | Lingkaran kecil | Penghubung ke halaman lain |

---

## Minggu 2: Variabel, Tipe Data, dan Operator

### Definisi Variabel
**Variabel** adalah nama simbolis untuk lokasi memori yang menyimpan data. Variabel diberi nama agar bisa diakses dan dimodifikasi selama program berjalan.

**Aturan Penamaan Variabel di Python:**
- Harus diawali huruf atau underscore (`_`)
- Hanya boleh berisi huruf, angka, underscore
- Case-sensitive (`nama` berbeda dengan `Nama`)
- Tidak boleh kata kunci Python (`if`, `for`, `while`, dll)

### Tipe Data Dasar

| Tipe | Contoh | Keterangan |
|------|--------|------------|
| `int` | `5`, `-10`, `0` | Bilangan bulat |
| `float` | `3.14`, `-2.5` | Bilangan desimal |
| `str` | `"Halo"`, `'Python'` | Teks/string |
| `bool` | `True`, `False` | Boolean (logika) |

### Contoh Kode Python

```python
# Deklarasi variabel dengan tipe data berbeda
nama      = "Budi Santoso"      # str
usia      = 20                  # int
tinggi    = 1.75                # float
mahasiswa = True                # bool

# Menampilkan informasi
print("Nama:", nama)
print("Usia:", usia, "tahun")
print("Tinggi:", tinggi, "meter")
print("Status Mahasiswa:", mahasiswa)
```

### Konversi Tipe Data (Type Casting)

```python
# String ke numerik
nilai_str  = "100"
nilai_int  = int(nilai_str)       # 100
nilai_flt  = float("3.14")        # 3.14

# Numerik ke string
angka      = 42
teks       = str(angka)           # "42"

# Ke boolean
print(bool(1))    # True
print(bool(0))    # False
print(bool(""))   # False (string kosong)
print(bool("hi")) # True
```

### Operator

**Operator Aritmatika:**
```python
a = 10
b = 3

print(a + b)    # 13  (penjumlahan)
print(a - b)    # 7   (pengurangan)
print(a * b)    # 30  (perkalian)
print(a / b)    # 3.3333... (pembagian)
print(a // b)   # 3   (pembagian bulat / floor division)
print(a % b)    # 1   (modulo / sisa bagi)
print(a ** b)   # 1000 (pangkat)
```

**Operator Perbandingan:**
```python
x = 5
print(x == 5)   # True   (sama dengan)
print(x != 5)   # False  (tidak sama dengan)
print(x > 3)    # True   (lebih besar)
print(x < 10)   # True   (lebih kecil)
print(x >= 5)   # True   (lebih besar atau sama)
print(x <= 4)   # False  (lebih kecil atau sama)
```

**Operator Logika:**
```python
nilai = 75
lulus = (nilai >= 70) and (nilai <= 100)
print(lulus)   # True

hadir = True
tepat_waktu = False
masuk = hadir and tepat_waktu   # False
print(masuk)
```

---

## Minggu 3: Percabangan (Conditional Statements)

### Struktur if Sederhana

```python
umur = 18

if umur >= 17:
    print("Anda boleh mengendarai kendaraan bermotor.")
```

### Struktur if-else

```python
nilai = int(input("Masukkan nilai: "))

if nilai >= 60:
    print("Selamat, Anda LULUS!")
else:
    print("Maaf, Anda belum lulus. Silakan belajar lebih giat.")
```

### Struktur if-elif-else

```python
nilai = int(input("Masukkan nilai (0-100): "))

if nilai >= 85:
    grade = "A"
elif nilai >= 75:
    grade = "B"
elif nilai >= 65:
    grade = "C"
elif nilai >= 55:
    grade = "D"
else:
    grade = "E"

print(f"Grade Anda: {grade}")
```

### Nested if (if Bersarang)

```python
usia = 20
punya_sim = True

if usia >= 17:
    if punya_sim:
        print("Boleh mengendarai kendaraan bermotor.")
    else:
        print("Harus memiliki SIM terlebih dahulu.")
else:
    print("Belum cukup umur untuk mengendarai kendaraan.")
```

### Contoh Aplikasi: Program Diskon

```python
harga_awal = float(input("Masukkan harga barang: Rp "))
member = input("Apakah Anda member? (ya/tidak): ")

if member.lower() == "ya":
    diskon = 0.20  # 20%
else:
    diskon = 0.05  # 5%

potongan = harga_awal * diskon
harga_akhir = harga_awal - potongan

print(f"Harga Awal  : Rp {harga_awal:,.0f}")
print(f"Diskon      : {diskon*100:.0f}%")
print(f"Potongan    : Rp {potongan:,.0f}")
print(f"Harga Akhir : Rp {harga_akhir:,.0f}")
```

---

## Minggu 4: Perulangan (Looping)

### Perulangan for

**Iterasi range:**
```python
# Mencetak angka 1 sampai 5
for i in range(1, 6):
    print(f"Perulangan ke-{i}")

# Output:
# Perulangan ke-1
# Perulangan ke-2
# Perulangan ke-3
# Perulangan ke-4
# Perulangan ke-5
```

**Iterasi list:**
```python
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]

for item in buah:
    print(f"Saya suka makan {item}")
```

### Perulangan while

```python
counter = 1

while counter <= 5:
    print(f"Counter: {counter}")
    counter += 1   # increment

print("Selesai!")
```

### break dan continue

```python
# break: keluar dari loop
for i in range(1, 11):
    if i == 6:
        break
    print(i)   # 1, 2, 3, 4, 5

print("---")

# continue: skip iterasi saat ini
for i in range(1, 11):
    if i % 2 == 0:
        continue   # skip bilangan genap
    print(i)   # 1, 3, 5, 7, 9
```

### Nested Loop (Loop Bersarang)

```python
# Membuat pola segitiga bintang
tinggi = 5

for baris in range(1, tinggi + 1):
    for kolom in range(baris):
        print("*", end=" ")
    print()   # pindah baris

# Output:
# *
# * *
# * * *
# * * * *
# * * * * *
```

### Contoh: Menghitung Faktorial

```python
n = int(input("Masukkan bilangan: "))
faktorial = 1

for i in range(1, n + 1):
    faktorial *= i

print(f"{n}! = {faktorial}")
```

---

## Minggu 5: Array/List dan Matriks

### List di Python

```python
# Membuat list
angka = [10, 20, 30, 40, 50]
buah  = ["Apel", "Jeruk", "Mangga"]
campur = [1, "dua", 3.0, True]

# Mengakses elemen (indeks mulai dari 0)
print(angka[0])    # 10
print(angka[-1])   # 50 (elemen terakhir)
print(buah[1])     # Jeruk

# Slicing
print(angka[1:4])  # [20, 30, 40]
print(angka[:3])   # [10, 20, 30]
print(angka[2:])   # [30, 40, 50]
```

### Metode-Metode List

```python
hewan = ["Kucing", "Anjing"]

hewan.append("Burung")       # Tambah di akhir
print(hewan)                  # ['Kucing', 'Anjing', 'Burung']

hewan.insert(1, "Ikan")      # Sisipkan di indeks 1
print(hewan)                  # ['Kucing', 'Ikan', 'Anjing', 'Burung']

hewan.remove("Anjing")       # Hapus berdasarkan nilai
print(hewan)                  # ['Kucing', 'Ikan', 'Burung']

popped = hewan.pop()         # Hapus dan kembalikan elemen terakhir
print(popped)                 # Burung

hewan.sort()                 # Urutkan ascending
print(hewan)                  # ['Ikan', 'Kucing']

hewan.reverse()              # Balik urutan
print(hewan)                  # ['Kucing', 'Ikan']

print(len(hewan))             # 2 (panjang list)
```

### Matriks (List of Lists)

```python
# Matriks 3x3
matriks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Mengakses elemen
print(matriks[0][0])   # 1
print(matriks[1][2])   # 6

# Menampilkan seluruh matriks
for baris in matriks:
    for elemen in baris:
        print(elemen, end=" ")
    print()
```

### Penjumlahan Dua Matriks

```python
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
C = [[0, 0], [0, 0]]

for i in range(2):
    for j in range(2):
        C[i][j] = A[i][j] + B[i][j]

# Menampilkan hasil
for baris in C:
    print(baris)
```

---

## Minggu 6: Fungsi dan Prosedur

### Definisi Fungsi

```python
def sapa(nama):
    """Fungsi untuk menyapa seseorang."""
    print(f"Halo, {nama}! Selamat belajar.")

# Pemanggilan
sapa("Andi")
sapa("Budi")
```

### Fungsi dengan Return Value

```python
def luas_persegi_panjang(panjang, lebar):
    """Menghitung luas persegi panjang."""
    return panjang * lebar

hasil = luas_persegi_panjang(5, 3)
print(f"Luas: {hasil}")   # Luas: 15
```

### Default Parameter

```python
def sapa(nama, salam="Halo"):
    print(f"{salam}, {nama}!")

sapa("Andi")                # Halo, Andi!
sapa("Budi", "Selamat pagi") # Selamat pagi, Budi!
```

### Scope Variabel

```python
variabel_global = 100   # bisa diakses dari mana saja

def fungsi():
    variabel_lokal = 50  # hanya bisa diakses di dalam fungsi
    print(variabel_global)   # 100
    print(variabel_lokal)    # 50

fungsi()
print(variabel_global)   # 100
# print(variabel_lokal)  # ERROR! tidak bisa diakses
```

### Rekursi: Faktorial

```python
def faktorial(n):
    """Menghitung n! secara rekursif."""
    if n == 0 or n == 1:
        return 1   # base case
    else:
        return n * faktorial(n - 1)

print(faktorial(5))   # 120
print(faktorial(0))   # 1
```

### Lambda Function

```python
# Fungsi biasa
def kuadrat(x):
    return x ** 2

# Lambda (fungsi anonim satu baris)
kuadrat_lambda = lambda x: x ** 2

print(kuadrat(5))          # 25
print(kuadrat_lambda(5))   # 25

# Lambda dengan map
angka = [1, 2, 3, 4, 5]
kuadrat_list = list(map(lambda x: x ** 2, angka))
print(kuadrat_list)   # [1, 4, 9, 16, 25]
```

---

## Minggu 7: Algoritma Sorting (Pengurutan)

### Bubble Sort

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

data = [64, 34, 25, 12, 22, 11, 90]
print("Sebelum:", data)
print("Sesudah:", bubble_sort(data))
```

### Selection Sort

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

data = [64, 25, 12, 22, 11]
print("Sebelum:", data)
print("Sesudah:", selection_sort(data))
```

### Insertion Sort

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

data = [12, 11, 13, 5, 6]
print("Sebelum:", data)
print("Sesudah:", insertion_sort(data))
```

### Perbandingan Kompleksitas

| Algoritma | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |

---

## Minggu 8: Algoritma Searching (Pencarian)

### Linear Search

```python
def linear_search(arr, target):
    """Mencari target di arr secara sekuensial."""
    for i in range(len(arr)):
        if arr[i] == target:
            return i   # ditemukan di indeks i
    return -1          # tidak ditemukan

data = [10, 20, 30, 40, 50]
hasil = linear_search(data, 30)
print(f"Ditemukan di indeks: {hasil}")   # 2
```

### Binary Search

```python
def binary_search(arr, target):
    """Mencari target di arr yang sudah terurut."""
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1   # tidak ditemukan

data = [10, 20, 30, 40, 50, 60, 70]
print(binary_search(data, 50))   # 4
```

### Perbandingan

| Algoritma | Prasyarat | Kompleksitas |
|-----------|-----------|--------------|
| Linear Search | Tidak perlu urut | O(n) |
| Binary Search | Harus terurut | O(log n) |

---

## Minggu 9: Manipulasi String

### Indexing dan Slicing

```python
teks = "Python Programming"

print(teks[0])        # P
print(teks[-1])       # g (karakter terakhir)
print(teks[0:6])      # Python
print(teks[7:])       # Programming
print(teks[::-1])     # gnimmargorP nohtyP (dibalik)
```

### Metode String

```python
kalimat = "  Belajar Python Itu Menyenangkan!  "

print(kalimat.upper())         # BELAJAR PYTHON ITU MENYENANGKAN!
print(kalimat.lower())         #   belajar python itu menyenangkan!
print(kalimat.strip())         # Belajar Python Itu Menyenangkan!
print(kalimat.replace("Python", "Java"))
print(kalimat.split())         # ['Belajar', 'Python', 'Itu', 'Menyenangkan!']
print(kalimat.startswith("  Belajar"))  # True
print(kalimat.endswith("!  "))  # True
print(kalimat.find("Python"))   # 10 (indeks)
print(kalimat.count("a"))      # 3
```

### String Formatting (f-string)

```python
nama = "Andi"
usia = 20
ipk  = 3.75

# f-string (Python 3.6+)
print(f"Nama: {nama}, Usia: {usia}, IPK: {ipk:.2f}")
# Output: Nama: Andi, Usia: 20, IPK: 3.75

# Format method
print("Nama: {}, IPK: {:.2f}".format(nama, ipk))
```

### Validasi Email Sederhana

```python
email = input("Masukkan email: ")

if "@" in email and "." in email and " " not in email:
    print("Format email VALID")
else:
    print("Format email TIDAK VALID")
```

---

## Minggu 10: File Handling

### Membaca File

```python
# Cara 1: read() - baca seluruh isi
with open("data.txt", "r") as file:
    isi = file.read()
    print(isi)

# Cara 2: readline() - baca per baris
with open("data.txt", "r") as file:
    baris = file.readline()
    while baris:
        print(baris.strip())
        baris = file.readline()

# Cara 3: readlines() - baca semua baris jadi list
with open("data.txt", "r") as file:
    daftar_baris = file.readlines()
    for baris in daftar_baris:
        print(baris.strip())
```

### Menulis File

```python
# Mode 'w' - tulis ulang (overwrite)
with open("output.txt", "w") as file:
    file.write("Halo, dunia!\n")
    file.write("Ini baris kedua.\n")

# Mode 'a' - append (tambah di akhir)
with open("output.txt", "a") as file:
    file.write("Baris tambahan.\n")
```

### Mode File

| Mode | Keterangan |
|------|------------|
| `r` | Read (baca) |
| `w` | Write (tulis, overwrite) |
| `a` | Append (tambah di akhir) |
| `r+` | Read + Write |
| `b` | Binary mode |

### Membaca dan Menulis CSV

```python
import csv

# Menulis CSV
with open("mahasiswa.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["NIM", "Nama", "IPK"])
    writer.writerow(["101", "Andi", 3.5])
    writer.writerow(["102", "Budi", 3.8])

# Membaca CSV
with open("mahasiswa.csv", "r") as file:
    reader = csv.reader(file)
    for baris in reader:
        print(baris)
```

### Exception Handling pada File

```python
nama_file = "data.txt"

try:
    with open(nama_file, "r") as file:
        print(file.read())
except FileNotFoundError:
    print(f"Error: File '{nama_file}' tidak ditemukan!")
except PermissionError:
    print(f"Error: Tidak punya akses ke file '{nama_file}'!")
```

---

## Ringkasan & Persiapan Ujian

### Konsep Wajib Dikuasai
1. **Algoritma:** Definisi, karakteristik, pseudocode, flowchart
2. **Variabel & Tipe Data:** int, float, str, bool, casting
3. **Operator:** Aritmatika, perbandingan, logika, assignment
4. **Percabangan:** if, if-else, if-elif-else, nested if
5. **Perulangan:** for, while, break, continue, nested loop
6. **List/Array:** indexing, slicing, metode list, matriks
7. **Fungsi:** definisi, parameter, return, scope, rekursi, lambda
8. **Sorting:** Bubble, Selection, Insertion Sort
9. **Searching:** Linear Search, Binary Search
10. **String:** indexing, slicing, metode, formatting
11. **File Handling:** open(), read, write, mode, with statement, CSV

### Tips Belajar
- Praktikkan setiap konsep dengan menulis kode sendiri
- Kerjakan latihan soal secara mandiri
- Pahami logika, bukan hafalan sintaks
- Diskusi dengan teman untuk memperdalam pemahaman
- Buat ringkasan pribadi untuk tiap topik
