# 💍 Zoejeton — Premium Digital Wedding Invitation

Zoejeton adalah platform undangan pernikahan digital premium dengan estetika desain **neo-brutalist editorial** yang clean, berani, dan berkelas untuk target peluncuran di tahun 2026. 

Desain ini menggabungkan layout editorial modern, garis tepi tebal khas brutalism, typography kontras tinggi, serta skema warna hangat yang elegan untuk menciptakan impresi pertama yang mendalam bagi tamu undangan Anda.

---

## ✨ Fitur Utama

- 🎨 **Premium Wedding Brutalist Palette** — Skema warna yang dikurasi khusus dengan perpaduan *Deep Forest Green*, *Warm Terracotta*, *Champagne Gold*, dan *Soft Warm Paper*.
- 📱 **Interactive Live Mockup** — Simulasi undangan fisik interaktif pada layar smartphone di halaman utama, lengkap dengan hitung mundur (countdown) waktu nyata, tombol RSVP, dan indikator lagu latar.
- ⚙️ **Smooth FAQ Accordion** — Transisi accordion modern berbasis CSS grid-rows untuk ekspansi tinggi yang mulus tanpa hentakan instan.
- 💳 **Rupiah (IDR) Pricing System** — Paket harga transparan yang disesuaikan untuk pasar lokal Indonesia (*Standard Gratis*, *Premium Rp 149rb*, dan *Eksklusif Rp 399rb*).
- 🧭 **Dynamic Active Section Tracker** — Menu navigasi yang secara otomatis mendeteksi posisi scroll layar pengguna dan menyoroti halaman yang aktif.
- ⚡ **Mobile First & Responsive** — Tampilan yang dioptimalkan penuh untuk kenyamanan akses pada perangkat mobile tamu undangan.

---

## 🛠️ Tech Stack & Font

Aplikasi ini dibangun menggunakan teknologi modern:
- **Core**: React + Vite (HMR enabled)
- **Styling**: Tailwind CSS + Custom Brutalist Utility
- **Typography**: 
  - **Anybody** (Headline & Display font)
  - **Hanken Grotesk** (Body font)
  - **Space Grotesk** (Label & Button font)

---

## 🚀 Memulai Project

### 1. Kloning Repositori
```bash
git clone https://github.com/Alifian-Zulfaani/zoejeton-public.git
cd zoejeton
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan Lokal
```bash
npm run dev
```
Aplikasi akan dapat diakses secara default di `http://localhost:5173`.

### 4. Build Produksi
```bash
npm run build
```

---

## 📂 Struktur Folder
```text
zoejeton/
├── public/                 # Aset statis public (Favicon, dll)
├── src/
│   ├── assets/             # Aset gambar & ilustrasi
│   ├── components/         # Komponen Modular Landing Page
│   │   ├── Header.jsx      # Navigation Bar & Mobile Drawer
│   │   ├── Hero.jsx        # Landing Hero & Phone Preview Mockup
│   │   ├── Features.jsx    # Fitur-fitur Aplikasi
│   │   ├── Themes.jsx      # Galeri Pilihan Tema Premium
│   │   ├── Testimonials.jsx# Kumpulan Kisah Sukses Pengguna
│   │   ├── Pricing.jsx     # Paket Harga Rupiah
│   │   ├── FAQ.jsx         # Accordion Pertanyaan Umum
│   │   └── Footer.jsx      # Logo branding & copyright
│   ├── App.jsx             # Root layout perakitan komponen
│   ├── index.css           # Custom CSS & keyframes brutalist
│   └── main.jsx            # Entry point React
├── index.html              # Main HTML template
├── tailwind.config.js      # Konfigurasi Tema & Desain System
└── vite.config.js          # Konfigurasi bundler Vite
```

---
*Zoejeton — Brutally crafted for beautiful milestones.*
