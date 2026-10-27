# Portal Kelas TRPL 25 A1

Repositori resmi website kelas **Sarjana Terapan Teknologi Rekayasa Perangkat Lunak (TRPL)** angkatan 2025, Fakultas Ilmu Komputer, Universitas Duta Bangsa Surakarta.

- **Domain Utama:** `trpl25a1.my.id`
- **Hosting Target:** Azure Static Web Apps (Free Tier)
- **Teknologi:** React 18, Vite, Tailwind CSS, Lucide Icons

---

## 1. Fitur Utama

- **Status Jadwal Hari Ini:** Mendeteksi hari secara otomatis dan menampilkan mata kuliah yang sedang atau akan berlangsung lengkap dengan ruang dan kontak PJ.
- **Jadwal Kuliah Mingguan:** Filter interaktif berdasarkan hari (Senin s/d Sabtu) untuk seluruh 22 SKS perkuliahan teori dan praktik.
- **Direktori 20 Mahasiswa:** Pencarian nama dan NIM cepat, filter kategori BPH/PJ, penyalinan NIM dengan satu klik, dan tautan sosial media resmi.
- **Struktur Kepengurusan BPH:** Bagan tata kelola kelas periode 2026/2027 beserta Pembimbing Akademik.
- **Arsip Dokumentasi:** Galeri kegiatan studi lapangan (Kunjungan Industri Yogyakarta) dan kebersamaan angkatan.
- **Virtual CLI Terminal:** Terminal interaktif berbasis web untuk menjelajahi data kelas melalui perintah konsol (`help`, `jadwal`, `mahasiswa`, `dosen`, `pengurus`, `motto`).

---

## 2. Menjalankan di Komputer Lokal

Pastikan Node.js (versi 18+) telah terpasang.

```bash
# 1. Masuk ke direktori proyek
cd trpl25a1-web

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka peramban di `http://localhost:5173`.

---

## 3. Panduan Deploy ke Azure Static Web Apps

1. **Inisialisasi Git dan Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi website kelas trpl 25 a1"
   git branch -M main
   git remote add origin https://github.com/USERNAME/trpl25a1-web.git
   git push -u origin main
   ```

2. **Buat Resource di Azure Portal:**
   - Masuk ke [Azure Portal](https://portal.azure.com/).
   - Cari dan pilih **Static Web Apps** -> Klik **Create**.
   - Isi konfigurasi dasar:
     - **Subscription & Resource Group:** Pilih yang kamu miliki.
     - **Name:** `trpl25a1-web`
     - **Plan type:** `Free`
     - **Deployment details:** Pilih `GitHub`.
     - Masuk dengan akun GitHub dan pilih repositori `trpl25a1-web`, branch `main`.
   - **Build Details (Penting):**
     - **Build Presets:** `Custom` (atau `Vite`)
     - **App location:** `/`
     - **Api location:** *(kosongkan)*
     - **Output location:** `dist`
   - Klik **Review + create** -> **Create**.
   - Azure akan secara otomatis menambahkan file GitHub Actions workflow (`.github/workflows/azure-static-web-apps-*.yml`) ke repositorimu dan melakukan deployment otomatis.

3. **Menghubungkan Custom Domain `trpl25a1.my.id`:**
   - Di Azure Portal pada resource Static Web App kamu, buka menu **Custom domains** di panel kiri.
   - Klik **+ Add** -> Masukkan nama domain `trpl25a1.my.id` (atau subdomain `www.trpl25a1.my.id`).
   - Azure akan memberikan petunjuk konfigurasi DNS:
     - Tambahkan **CNAME record** atau **TXT record** validasi di panel DNS tempat kamu mendaftarkan domain `my.id`.
     - Tunggu propagasi DNS (biasanya 5 - 30 menit).
     - Sertifikat SSL gratis akan otomatis diterbitkan dan dikelola oleh Azure.

---

## 4. Cara Memperbarui Data Kelas

Seluruh data kelas dipusatkan pada satu berkas yang mudah disunting:
- Lokasi berkas: `src/data/classData.js`
- Teman-teman sekelas dapat memperbarui foto, tautan GitHub, LinkedIn, atau akun Instagram melalui Pull Request pada repositori GitHub ini.
