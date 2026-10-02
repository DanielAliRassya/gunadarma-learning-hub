# Matematika Dasar 1

## Fungsi (Functions)

### Definisi
Fungsi adalah relasi khusus antara dua himpunan di mana setiap anggota domain dipetakan ke TEPAT SATU anggota kodomain.

**Notasi**: f: A → B atau y = f(x)

### Komponen Fungsi
1. **Domain (Daerah Asal)**: Nilai x yang diperbolehkan
2. **Kodomain**: Himpunan yang memungkinkan sebagai hasil
3. **Range (Daerah Hasil)**: Semua nilai y yang benar-benar dihasilkan

### Contoh:
```
f(x) = 2x + 1

Domain: semua bilangan real
f(1) = 2(1) + 1 = 3
f(2) = 2(2) + 1 = 5
f(3) = 2(3) + 1 = 7

Range: semua bilangan real
```

### Jenis-jenis Fungsi

#### 1. Fungsi Linear: f(x) = mx + c
```
f(x) = 2x + 3
- Slope (m) = 2
- Y-intercept (c) = 3
- Grafik: garis lurus
```

#### 2. Fungsi Kuadrat: f(x) = ax² + bx + c
```
f(x) = x² - 4x + 3
- a = 1 (parabola terbuka ke atas)
- Vertex (titik puncak)
- Grafik: parabola
```

#### 3. Fungsi Eksponensial: f(x) = aˣ
```
f(x) = 2ˣ
- f(0) = 1
- f(1) = 2
- f(2) = 4
- Grafik: kurva naik eksponensial
```

### Komposisi Fungsi
Jika f(x) = 2x + 1 dan g(x) = x²

(f ∘ g)(x) = f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1

---

## Limit Fungsi

### Definisi Intuitif
Limit adalah nilai yang didekati fungsi ketika x mendekati nilai tertentu.

**Notasi**: lim(x→a) f(x) = L

### Contoh:
```
f(x) = (x² - 1)/(x - 1)

Ketika x → 1:
x = 0.9: f(0.9) = 1.9
x = 0.99: f(0.99) = 1.99
x = 0.999: f(0.999) = 1.999
...
Limit = 2
```

### Sifat-sifat Limit
1. lim(x→a)[f(x) ± g(x)] = lim(x→a)f(x) ± lim(x→a)g(x)
2. lim(x→a)[f(x) · g(x)] = lim(x→a)f(x) · lim(x→a)g(x)
3. lim(x→a)[f(x)/g(x)] = lim(x→a)f(x) / lim(x→a)g(x), jika lim(x→a)g(x) ≠ 0

---

## Turunan (Derivative)

### Definisi
Turunan adalah laju perubahan fungsi pada titik tertentu. Secara geometri, turunan adalah slope garis singgung kurva.

### Notasi
- f'(x)
- dy/dx
- df/dx

### Rumus Dasar
```
f(x) = xⁿ  →  f'(x) = n·xⁿ⁻¹
f(x) = c   →  f'(x) = 0 (konstanta)
f(x) = 5x³ →  f'(x) = 15x²
```

### Contoh:
```
f(x) = 3x² + 2x + 1
f'(x) = 6x + 2

Pada x = 2: f'(2) = 6(2) + 2 = 14
```

### Aturan Turunan
1. **Sum/Difference**: (f ± g)' = f' ± g'
2. **Product**: (f·g)' = f'·g + f·g'
3. **Quotient**: (f/g)' = (f'·g - f·g')/g²
4. **Chain**: (f(g(x)))' = f'(g(x))·g'(x)

---

## Integral (Anti-derivative)

### Definisi
Integral adalah kebalikan dari turunan. Jika F'(x) = f(x), maka ∫f(x)dx = F(x) + C

### Integral Tak Tentu
```
∫xⁿ dx = xⁿ⁺¹/(n+1) + C,  n ≠ -1
∫5 dx = 5x + C
∫3x² dx = x³ + C
```

### Integral Tentu
Digunakan untuk menghitung luas area di bawah kurva.

```
∫[a to b] f(x)dx = F(b) - F(a)

Contoh:
∫[1 to 3] 2x dx = [x²] dari 1 ke 3 = 9 - 1 = 8
```

---

## LATIHAN SOAL

### Level 1 (Mudah)

**1. Domain dan Range**
Tentukan domain dan range dari:
f(x) = √(x - 2)

**2. Fungsi Linear**
Diketahui f(x) = 2x - 3
Tentukan:
- f(0)
- f(1)
- f(-2)

**3. Komposisi Fungsi**
f(x) = x + 2
g(x) = 3x
Tentukan (f ∘ g)(2)

### Level 2 (Sedang)

**4. Limit Fungsi**
Hitung: lim(x→2) (x² + 3x - 1)

**5. Turunan Dasar**
Tentukan turunan dari:
- f(x) = 4x³ - 2x² + x
- g(x) = (2x + 1)³

**6. Integral Dasar**
Tentukan integral dari:
- ∫(3x² + 2x) dx
- ∫(x⁴ - 5) dx

### Level 3 (Sulit)

**7. Integral Tentu**
Hitung: ∫[1 to 2] (2x + 1) dx

**8. Aplikasi Turunan**
Sebuah kotak tanpa tutup dibuat dari kertas persegi dengan sisi 20 cm. Jika setiap sudut dipotong persegi dengan sisi x cm, tentukan nilai x agar volume maksimal.

