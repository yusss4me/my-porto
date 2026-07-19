# Agent Guidance & Technical Specifications (AGENT.md)
## Role: Expert Next.js & Tailwind Developer Agent

Kamu adalah AI Developer Agent (Antigravity) yang bertugas mengeksekusi kode proyek ini. Kamu WAJIB mematuhi seluruh spesifikasi teknis dan token desain di bawah ini tanpa pengecualian.

### 1. Color Token Configuration (Tailwind CSS v4)
Terapkan token warna dari core design system berikut ke dalam konfigurasi `@theme` di `app/globals.css` atau menggunakan utility classes:
*   `background / Level 1`: `#0c1324` (Deep Nocturnal Base) atau `#020617` (Canvas Edge)
*   `surface / Level 2 (Cards/Navbar)`: `#0c1324` dengan opacity 60%, `backdrop-filter: blur(12px)`, dan border 1px dengan white/slate-light opacity 10%
*   `primary (Accent 1)`: `#adc6ff` / Electric Neon Blue (`#3b82f6` untuk high-contrast highlights)
*   `secondary (Accent 2)`: `#4edea3` / Mint Emerald Green (`#10b981` untuk AI live status)
*   `on-surface (Primary Text)`: `#dce1fb` / Crisp Slate Light (`#f8fafc`)
*   `on-surface-variant (Muted Text)`: `#c2c6d6` (Opacity 60%)

### 2. Typography Rules
*   **Headlines (Display Large):** `font-family: Geist`, font-weight: 800, tight kerning (`letter-spacing: -0.04em`).
*   **Body Text:** `font-family: Inter`, font-weight: 400, optimal legibility di dalam glassmorphic cards.
*   **Badges & Meta Labels:** `font-family: JetBrains Mono`, font-weight: 500, uppercase, memberi impresi "pure code".

### 3. Micro-Interactions & Elevation (Framer Motion / Tailwind)
*   **Level 2 Components (Cards):** Wajib menggunakan border tipis `border-white/10` atau `border-slate-800/50` dengan `backdrop-blur-md`.
*   **Hover State (Interactive Depth):** Saat kartu di-hover, wajib terjadi transisi 0.5 detik: `translate-y-[-4px]`, border opacity naik ke 30%, dan memancarkan efek outer glow tipis (shadow/glow blur 15px dengan warna accent blue/green opacity 20%).
*   **Active Section Dots:** Titik navigasi vertikal yang aktif harus membesar dari 8px menjadi 12px dan memancarkan glow Electric Blue.

### 4. Code Implementation Constraints
*   **Dilarang Hardcoded Data:** Semua komponen organisme dan halaman wajib melakukan `.map()` atau membaca properti dari `data/portfolioData.json`.
*   **Atomic Design & TypeScript:** Komponen harus dipecah secara modular menggunakan TypeScript. Gunakan ekstensi `.tsx` untuk komponen React dan `.ts` untuk file utilitas/non-React. Jangan menumpuk seluruh UI di `app/page.tsx`.
*   **Package Manager:** Gunakan perintah berbasis `pnpm`.

### 5. Shop Route Technical Execution Rules
*   **Next.js Route Groups:** Agent WAJIB mengimplementasikan Route Groups untuk memisahkan tata letak. Sembunyikan Top Navbar portofolio, Side Dot Nav, dan Floating Bottom Bar ketika pengguna berada di dalam rute `/components-shop`.
*   **Shop Component Strategy:** Sediakan data produk komponen baru di dalam JSON (`data/shopData.json`) untuk merendernya secara dinamis. Data wajib mencakup properti: `componentName`, `category`, `price`, `previewUrl`, dan `downloadKey`.
*   **Theme Integration:** Halaman toko tetap harus patuh menggunakan token warna `Synthetic Intelligence Portfolio` (`bg-slate-950` dan aksen warna neon) namun dengan pendekatan UI e-commerce yang berfokus pada konversi penjualan produk digital.

### 6. Atomic Design Framework & Page Synchronization Rules (KP-Inspired)
Agen WAJIB mematuhi aturan pembagian hierarki komponen dan sinkronisasinya dengan halaman utama sesuai dengan arsitektur sistem manajemen modular berikut:

*   **Atoms (Single Responsibility & Core Elements):** Komponen terkecil yang tidak bergantung pada komponen lain. 
    *   *Implementasi:* `Button.jsx`, `Badge.jsx` (untuk tech stack tag), dan `DotIndicator.jsx`. 
    *   *Aturan:* Hanya menerima properti dasar (props) seperti `children`, `onClick`, `className`, atau status `isActive`. Dilarang keras melakukan *fetching* atau *mapping* data di level ini.
*   **Molecules (Component Combinations):** Kombinasi dari beberapa *Atoms* untuk membentuk satu fungsi sederhana.
    *   *Implementasi:* `ProjectCard.jsx` (gabungan image container, teks judul, deskripsi, dan deretan `Badge` atom) dan `NavbarLink.jsx`.
    *   *Aturan:* Harus bersifat *reusable*. Menerima objek data tunggal dari parent-nya (misal: `data={project}`).
*   **Organisms (Functional Page Sections):** Gabungan dari *Molecules* dan/atau *Atoms* yang membentuk satu bagian utuh dari antarmuka halaman.
    *   *Implementasi:* `TopNavbar.jsx`, `SideDotNav.jsx`, `ProjectGrid.jsx` (yang membungkus dan melakukan looping `ProjectCard`), dan `HeroSection.jsx`.
    *   *Aturan:* Di level inilah data dinamis dari JSON dikonsumsi dan di-looping menggunakan `.map()`.
*   **Templates (Layout Frameworks):** Konstruksi tata letak makro halaman tanpa konten spesifik.
    *   *Implementasi:* `MainLayout.jsx` di dalam rute `(portfolio)` dan layout bersih di rute `(shop)`.
    *   *Aturan:* Berfungsi sebagai jangkar penempatan posisi grid global (di mana Top Navbar menetap, di mana Side Dot menyala, dan di mana area `{children}` dirender).
*   **Pages (Next.js Page Synchronization):** File `page.js` pada Next.js App Router hanya bertindak sebagai konduktor akhir.
    *   *Aturan:* `app/(portfolio)/page.js` dilarang berisi elemen HTML mentah (`div`, `section`, `h1`). File ini hanya boleh mengimpor dan menyusun komponen tingkat *Organisms* secara berurutan (`<HeroSection />`, `<ProjectGrid />`, `<LabSection />`, `<Footer />`).

### 7. Unified Digital Storefront Catalog & Product Rules (One-Stop Tech Store)
Agen WAJIB memahami bahwa platform toko pada rute `/shop` (atau `/store`) adalah sebuah marketplace aset teknologi terpadu yang merepresentasikan keahlian Ardi sebagai Design Engineer, AI Fullstack, dan UI/UX Designer. Data produk dikonsumsi secara dinamis dari `data/shopData.json`.

Agen harus mengenali dan merender 3 Pilar Utama Produk beserta ketentuan visualnya sebagai berikut:

1.  **PILAR I: UI/UX & FRONTEND ASSETS**
    *   *Sub-Kategori:* Figma Component UI Kit, Next.js Premium Templates, Tailwind & Framer Motion Presets.
    *   *Aksen Visual:* Menggunakan token warna Electric Blue (#3b82f6) untuk borders dan hover states.
    *   *Tombol Aksi Utama:* "Live Preview" (Membuka iframe/modal preview komponen) dan "Buy Template".

2.  **PILAR II: AI & DATA SCIENCE**
    *   *Sub-Kategori:* Trained Model Binary (.pkl/.pt), Premium Google Colab Notebooks (.ipynb), Curated & Clean Datasets (.csv/.json).
    *   *Aksen Visual:* Menggunakan token warna Mint Emerald Green (#10b981) untuk memberikan kesan kecerdasan buatan.
    *   *Tombol Aksi Utama:* "View Docs / Notebook" (Membuka github/colab link) dan "Get Model".

3.  **PILAR III: FULLSTACK & DEV TOOLS**
    *   *Sub-Kategori:* Streamlit Custom Boilerplates, Python Automation Scripts, Micro-SaaS Starter Kit.
    *   *Aksen Visual:* Menggunakan token warna Amber/Purple Slate campuran untuk menegaskan fungsionalitas otomasi.
    *   *Tombol Aksi Utama:* "View Architecture" atau "Buy Source Code".

### 8. Frontend Store Interface Rendering Constraints
*   **Filter Navigation:** Di tingkat *Organisms* (`components/organisms/StoreCatalog.jsx`), buat filter berbasis Tab horizontal yang responsif menggunakan Framer Motion layout transitions untuk berpindah antar 3 pilar di atas + tab "All Products".
*   **Card Anatomy (`components/molecules/ProductCard.jsx`):** Setiap kartu produk wajib merender:
    *   Badge Kategori Utama di pojok atas (dengan warna penanda pilar masing-masing).
    *   Nama Produk & Sub-Kategori.
    *   Daftar Tech Stack (Badge Atom: Python, Next.js, Tailwind, dll.).
    *   Label Harga dalam format IDR (Rupiah) yang diformat dinamis secara lokal (`Intl.NumberFormat('id-ID')`).
    *   Dua tombol aksi (Satu untuk preview/dokumentasi eksternal, satu untuk trigger pembelian/Midtrans gateway checkout).

### 9. Next.js Core Performance & Optimization Guardrails
*   **Server Component First (Hybrid Rendering):** Secara default, semua file `page.js` dan komponen tingkat `Templates` serta `Organisms` HARUS tetap berupa Server Components. Direktif `"use client"` hanya boleh diletakkan di level `Molecules` atau `Atoms` terkecil yang benar-benar membutuhkan interaksi (state, hooks, atau animasi Framer Motion).
*   **Image Optimization Rules:** Dilarang keras menggunakan tag `<img>` mentah. Semua aset gambar, screenshot proyek, dan ikon besar wajib menggunakan komponen `<Image />` dari `next/image` dengan menyertakan dimensi `width`, `height`, properti `placeholder="blur"` jika memungkinkan, dan optimasi *lazy loading*.
*   **Framer Motion Bundle Economy:** Hindari penggunaan animasi berat di tingkat makro global. Gunakan pembungkusan minimalis dan manfaatkan optimasi Framer Motion agar tidak membebani ukuran bundel JavaScript utama di browser.
*   **Asset & Font Optimization:** Manfaatkan `next/font` untuk manajemen tipografi agar ter-hosting secara lokal dan mencegah Layout Shifts (CLS). Gunakan skrip pihak ketiga (seperti payment gateway SDK) secara asinkronus menggunakan `next/script`.

### 10. Backend API Route Handlers & Security Architecture
*   **API Isolation:** Semua logika backend internal wajib diletakkan di dalam direktori `app/api/`.
*   **Standardized JSON Response:** Semua API route harus mengembalikan format respons seragam: `{ success: boolean, data?: any, error?: string }` dengan HTTP status code yang sesuai (200, 400, 401, 500).
*   **Strict Input Validation:** Semua API Route Handlers wajib memvalidasi payload `request.json()` menggunakan skema strict (direkomendasikan memakai Zod) sebelum mengeksekusi logika bisnis.
*   **Environment & Price Integrity:**
    *   Dilarang keras menulis *Secret Key* (Midtrans/Database) langsung di dalam kode. Wajib menggunakan `process.env` yang tidak memiliki prefix `NEXT_PUBLIC_` agar tidak diekspos ke client.
    *   Parameter harga wajib di-query/diverifikasi di sisi server berdasarkan `productId` yang valid dari database internal, bukan memercayai harga dari Client.
*   **Secure Webhook Verification:** Endpoint penerima callback/webhook pembayaran wajib melakukan enkripsi atau verifikasi signature key (seperti SHA512 dari Midtrans) untuk memastikan request murni datang dari payment gateway resmi.

### 11. Dual Navigation System Architecture (Top Navbar vs Sidebar)
Agen WAJIB memisahkan fungsi dan ruang lingkup kontrol antara Navigasi Atas (Top Navbar) dan Navigasi Samping (Sidebar) dengan ketentuan arsitektur berikut:
*   **Top Navbar (Global Page Navigation):**
    *   *Fungsi Utama:* Menangani perpindahan antar rute/halaman besar secara global di aplikasi (contoh: rute `/` ke `/shop` atau `/projects`).
    *   *Posisi & Layout:* Berada secara horizontal di bagian atas layar (`sticky top-0`), menggunakan efek *glassmorphism* premium.
    *   *Branding Requirement:* **WAJIB** memiliki Logo Ikon visual utama yang representatif di sebelah kiri menu navigasi.
*   **Sidebar (Local Anchor/Section Navigation):**
    *   *Fungsi Utama:* Menangani navigasi internal di dalam halaman aktif menggunakan mekanisme jangkar (Anchor Navigation / *Scroll to Section*, contoh: `#hero`, `#about`, `#skills`, `#portfolio`).
    *   *Posisi & Layout:* Berada secara vertikal di sisi samping layar (kiri atau kanan tergantung tata letak tematik), responsif (menyembunyikan diri di layar *mobile* atau berubah menjadi tombol menu pemicu).
    *   *Identity Requirement:* **WAJIB** memiliki Logo Ikon sekunder atau indikator visual penanda identitas navigasi lokal di bagian atas/bawah area sidebar.
*   **Atomic Component Structure:** Top Navbar diletakkan pada level `components/organisms/Navbar.jsx` sedangkan Sidebar diletakkan pada level `components/organisms/Sidebar.jsx`.

### 12. Fullstack Production Tech Stack & Data Seed Management
Agen WAJIB mematuhi spesifikasi teknologi dan manajemen data berikut untuk seluruh fitur e-commerce di rute `/shop`:
*   **Database & Storage:** Menggunakan **Supabase (PostgreSQL)** sebagai *Single Source of Truth* untuk data produk dan transaksi, serta menggunakan **Supabase Private Storage** untuk menyimpan file aset digital asli (.pkl, .fig, .py).
*   **Payment System Gateway:** Terintegrasi penuh dengan **Midtrans SDK (Sandbox Mode)** untuk menangani pembuatan token snap pembayaran dan verifikasi callback webhook berbasis SHA512 signature key.
*   **Developer-Centric Content Management (Seeding):**
    *   Manajemen item toko dikelola secara lokal pada berkas `data/shopData.json` sebagai *backup matrix* ter-versi di Git.
    *   Proses sinkronisasi data ke cloud database Supabase dikendalikan menggunakan skrip otomatisasi *Seeding* yang dipicu melalui perintah terminal `pnpm run seed`.
    *   Agen dilarang keras membuat halaman Admin Dashboard UI (`/admin`) untuk menghemat bundel JavaScript frontend.

### 13. Progressive Composite Skeleton Rules
Agen WAJIB mematuhi aturan visual dan struktural berikut saat mengimplementasikan loading state (Skeleton System):
*   **Skeleton Core Atom:** Gunakan kelas Tailwind `animate-pulse bg-white/5 border border-white/5` pada `components/atoms/SkeletonBar.tsx` yang menerima custom `className` untuk menentukan ukuran dan tata letak secara dinamis.
*   **Composite Molecule Alignment:** Bangun `ProductCardSkeleton.tsx` yang meniru persis anatomi asli `ProductCard.tsx` (header badge & price, subcategory, title, description, tech stack badges, dan action buttons) untuk meminimalkan pergeseran tata letak (CLS - Cumulative Layout Shift).
*   **Macro Streaming Layout:** Di dalam file `loading.tsx` pada rute `/components-shop`, panggil grid makro yang melakukan looping render minimal 6 buah `ProductCardSkeleton` agar proses streaming Next.js 16 berjalan mulus dan responsif sejak muatan halaman pertama dikirim.
*   **Suspense Isolation:** Bungkus komponen organisme yang melakukan fetching data dinamis (seperti `<StoreCatalog />`) di dalam `<Suspense fallback={<ShopLoading />}>` pada file konduktor rute (`page.tsx`) untuk mengaktifkan pemuatan bertahap (incremental streaming).