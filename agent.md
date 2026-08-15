# Agent Guidance & Architecture Specifications (AGENT.md)
**Role:** Technical Guide & Architecture Framework

Dokumen ini berfungsi sebagai panduan standar arsitektur dan panduan alur kerja bagi pengembang (Ardi Yustiar) untuk melakukan modifikasi antarmuka dan refactoring kode secara mandiri tanpa eksekusi otomatis.

---

### 1. Alur Kerja Refactoring & Pembenahan Mandiri
Saat hendak merapikan tampilan atau menyesuaikan komponen, ikuti alur 4 tahap berikut:

*   **Tahap 1: Sinkronisasi Data Layer**
    Sebelum menyentuh tampilan, pastikan struktur data proyek pada berkas data eksternal sudah disesuaikan. Tambahkan metadata atau atribut baru di tingkat data terlebih dahulu.

*   **Tahap 2: Pembagian Komponen Modular (Atomic Design)**
    Pastikan perbaikan dilakukan dari tingkat paling dasar. Hindari menumpuk logika visual dalam satu file utama. Pisahkan elemen tombol atau badge ke folder atom/molekul, lalu gabungkan ke dalam komponen organisme.

*   **Tahap 3: Penyesuaian Responsivitas & Kenyamanan Layar (Mobile-First)**
    *   Untuk kontainer tombol aksi, gunakan tata letak fleksibel yang dapat menumpuk secara vertikal di layar smartphone dan memanjang secara horizontal di layar desktop.
    *   Untuk modal atau jendela popover, tetapkan batas tinggi maksimum area tampilan dengan opsi gulir vertikal otomatis agar konten tidak terpotong di perangkat seluler.
    *   Atur urutan penumpukan visual (z-index) modal agar berada di atas komponen navigasi dan kunci pengguliran latar belakang saat modal aktif.

*   **Tahap 4: Verifikasi Tipe Data**
    Lakukan pemeriksaan tipe data dan validasi kompilasi melalui terminal sebelum melakukan penyimpanan akhir.

---

### 2. Standar Visual & Sistem Warna

*   **Lapis Latar Belakang:** Menggunakan warna biru gelap nokturnal atau hitam pekat sebagai pijakan utama canvas.
*   **Lapis Permukaan & Kartu:** Menggunakan efek transparan glassmorphism ber-opacity rendah dengan pemutarburaman latar (backdrop blur) dan garis tepi tipis semi-transparan.
*   **Aksen Utama (Sistem & Frontend):** Menggunakan aksen Biru Neon Elektrik untuk sorotan elemen interaktif utama.
*   **Aksen Sekunder (AI & Model Status):** Menggunakan aksen Hijau Mint Emerald untuk menandai status inferensi model atau indikator kecerdasan buatan.
*   **Tipografi:** Kombinasi gaya font sans-serif modern untuk judul utama dan font berjarak tetap (monospace) untuk label teknis dan indikator terminal.

---

### 3. Aturan Struktur Komponen (Atomic Design Hierarchy)

*   **Atoms:** Elemen murni tanpa ketergantungan data yang hanya menerima instruksi properti dasar.
*   **Molecules:** Kombinasi beberapa atom yang membentuk satu fungsi antarmuka ringkas.
*   **Organisms:** Bagian halaman utuh yang bertugas mengonsumsi data eksternal dan melakukan pemetaan loop data.
*   **Templates & Pages:** Penata tata letak makro global yang menyusun urutan komponen organisme.