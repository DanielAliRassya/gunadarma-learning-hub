# Matematika Informatika 1

## Logika Matematika

### Proposisi
Proposisi adalah pernyataan yang bernilai benar (True) atau salah (False), tetapi tidak keduanya.

**Contoh Proposisi**:
- "2 + 2 = 4" → Benar
- "Jakarta adalah ibu kota Indonesia" → Benar
- "Bulan adalah bintang" → Salah

**Bukan Proposisi**:
- "Berapa umurmu?" (pertanyaan)
- "Tutup pintu!" (perintah)

### Operator Logika

#### 1. Negasi (NOT - ¬)
Membalikkan nilai kebenaran.

| P | ¬P |
|---|-----|
| T | F |
| F | T |

**Contoh**: P = "2 > 5" (salah) → ¬P = "2 ≤ 5" (benar)

#### 2. Konjungsi (AND - ∧)
Benar hanya jika KEDUA proposisi benar.

| P | Q | P ∧ Q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**Contoh**: "2 < 5" ∧ "5 < 10" = Benar

#### 3. Disjungsi (OR - ∨)
Benar jika MINIMAL SATU proposisi benar.

| P | Q | P ∨ Q |
|---|---|-------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

#### 4. Implikasi (IF-THEN - →)
"Jika P maka Q"

| P | Q | P → Q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

**Contoh**: "Jika hari hujan, maka jalanan basah"

#### 5. Biimplikasi (IF AND ONLY IF - ↔)
Benar jika KEDUA proposisi memiliki nilai sama.

| P | Q | P ↔ Q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

**Contoh**: "Segitiga adalah sama sisi IFF ketiga sisinya sama panjang"

---

## Himpunan (Set Theory)

### Definisi
Himpunan adalah kumpulan objek yang didefinisikan dengan jelas dan berbeda satu sama lain.

**Notasi**:
```
A = {1, 2, 3, 4, 5}
B = {x | x bilangan genap, 0 < x < 10} = {2, 4, 6, 8}
```

### Jenis-jenis Himpunan

1. **Himpunan Kosong**: Tidak memiliki anggota
   - Notasi: ∅ atau {}
   - Contoh: {x | x² = 2, x ∈ ℤ}

2. **Himpunan Hingga**: Banyak anggota terbatas
   - Contoh: A = {1, 2, 3, 4}

3. **Himpunan Tak Hingga**: Banyak anggota tidak terbatas
   - Contoh: ℕ = {1, 2, 3, ...}

4. **Himpunan Semesta**: Semua anggota yang dipertimbangkan
   - Notasi: U atau S
   - Contoh: U = {1, 2, 3, 4, 5}

### Operasi Himpunan

#### 1. Gabungan (Union - ∪)
A ∪ B = semua anggota yang ada di A atau B (atau keduanya)

**Contoh**:
- A = {1, 2, 3}
- B = {3, 4, 5}
- A ∪ B = {1, 2, 3, 4, 5}

#### 2. Irisan (Intersection - ∩)
A ∩ B = anggota yang ada di KEDUA himpunan

**Contoh**:
- A = {1, 2, 3}
- B = {2, 3, 4}
- A ∩ B = {2, 3}

#### 3. Komplemen (A')
A' = anggota semesta yang TIDAK ada di A

**Contoh** (U = {1,2,3,4,5}):
- A = {1, 2}
- A' = {3, 4, 5}

#### 4. Selisih (Difference - A - B)
A - B = anggota A yang TIDAK ada di B

**Contoh**:
- A = {1, 2, 3, 4}
- B = {3, 4, 5}
- A - B = {1, 2}

### Sifat-sifat Operasi Himpunan

1. **Komutatif**: A ∪ B = B ∪ A, A ∩ B = B ∩ A
2. **Asosiatif**: (A ∪ B) ∪ C = A ∪ (B ∪ C)
3. **Distributif**: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
4. **De Morgan**: 
   - (A ∪ B)' = A' ∩ B'
   - (A ∩ B)' = A' ∪ B'

### Diagram Venn
```
     U
   ┌────────┐
   │  A  B  │
   │ ┌──┬──┐│
   │ │1,3│2 ││
   │ │  │  ││
   │ └──┴──┘│
   └────────┘
```

---

## LATIHAN SOAL

### Level 1 (Mudah)

**1. Tabel Kebenaran**
Buatlah tabel kebenaran untuk: (P ∧ Q) ∨ ¬R

**2. Himpunan Dasar**
Diketahui:
- A = {1, 2, 3, 4, 5}
- B = {4, 5, 6, 7}

Tentukan:
- A ∪ B
- A ∩ B
- A - B
- B - A

**3. Himpunan Semesta**
U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
A = {2, 4, 6, 8, 10}

Tentukan A' (komplemen A)

### Level 2 (Sedang)

**4. Operasi Ganda**
Diketahui:
- U = {a, b, c, d, e, f, g}
- A = {a, b, c}
- B = {c, d, e}
- C = {e, f, g}

Tentukan:
- (A ∪ B) ∩ C
- A' ∩ (B ∪ C)
- (A - B) ∪ C

**5. Diagram Venn**
Dari 100 siswa:
- 60 menyukai Matematika
- 50 menyukai IPA
- 30 menyukai keduanya

Tentukan jumlah siswa yang:
- Hanya menyukai Matematika
- Hanya menyukai IPA
- Tidak menyukai keduanya

### Level 3 (Sulit)

**6. Himpunan Kuasa**
Tentukan himpunan kuasa (Power Set) dari:
P({1, 2, 3})

Berapa banyak anggotanya?

**7. Logika Kompleks**
Buatlah tabel kebenaran untuk:
(P → Q) ↔ (¬P ∨ Q)

Apakah ini tautologi, kontradiksi, atau kontingensi?

