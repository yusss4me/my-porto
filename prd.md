# Product Requirement Document (PRD)
## Project: Synthetic Intelligence Portfolio (Ardi Yustiar)

### 1. Project Overview
Membangun website portofolio premium berskala profesional untuk Ardi Yustiar dengan konsep "The Bridge"—menjembatani rekayasa antarmuka modern (Frontend Next.js) dengan implementasi kecerdasan buatan (AI/ML). Website ini dirancang dengan estetika "Futuristic Minimalist" menggunakan efek Glassmorphism intensif untuk memberikan impresi teknis yang kuat, bersih, dan berorientasi masa depan.

### 2. Core Features & Requirements
*   **Dynamic Data Architecture (JSON-Driven):** Seluruh konten profil, daftar tech-stack, riset lab, dan etalase proyek tidak boleh ditulis secara manual (hardcoded) di komponen UI. Data harus dikonsumsi secara dinamis dari file `data/portfolioData.json`.
*   **Dual Navigation System:**
    *   *Desktop:* Sticky Top Navbar untuk navigasi global antarpaginasian + Floating Vertical Dot Navigation di sisi kiri/kanan sebagai penanda posisi scroll aktif.
    *   *Mobile (Mobile-First):* Top Navbar dan Side Dots otomatis disembunyikan melalui media query Tailwind, digantikan oleh Floating Bottom Navigation Bar yang thumb-friendly.
*   **Showcase Kategori Ganda:** Etalase proyek wajib memisahkan secara visual atau melabeli secara dinamis proyek berbasis "Web Development" (Next.js, PHP, dll.) dan "Artificial Intelligence" (Python, Streamlit, Scikit-Learn).
*   **Ultra-Responsive & Performance:** Tampilan mobile harus mempertahankan estetika glassmorphism, readability, dan kualitas animasi yang sama tingginya dengan versi desktop. Manajemen paket menggunakan `pnpm`.

### 3. Architecture & Methodology
*   **Framework:** Next.js (App Router, TypeScript).
*   **Styling:** Tailwind CSS v4 (menggunakan CSS-theme configuration di `app/globals.css`).
*   **Component Structure:** Menggunakan **Atomic Design Methodology** (`components/` terbagi menjadi `atoms/`, `molecules/`, `organisms/`, dan `templates/`).

### 4. Component Shop Route Expansion (E-Commerce Feature)
*   **Isolated Routing:** Membuat rute khusus independen di `/components-shop` untuk menjual komponen UI Atomic Design premium yang terisolasi sepenuhnya dari tata letak visual (layout) website portofolio utama.
*   **Route Group Architecture:** Menggunakan Route Groups Next.js `(portfolio)` dan `(shop)` untuk memisahkan kebutuhan global layout antara halaman personal branding dan halaman komersial produk UI.
*   **Katalog Komponen:** Halaman toko harus mampu menampilkan katalog kartu produk komponen yang dijual, lengkap dengan metadata harga, kategori tingkat atom (atoms/molecules/organisms), tombol pratinjau (*live preview*), dan tombol beli.