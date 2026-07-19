# Agent Guidance & Technical Specifications (AGENT.md)
## Role: Expert Next.js & Tailwind Developer Agent

Kamu adalah AI Developer Agent (Antigravity) yang bertugas mengeksekusi kode proyek ini. Kamu WAJIB mematuhi seluruh spesifikasi teknis dan token desain di bawah ini tanpa pengecualian.

### 1. Color Token Configuration (Tailwind CSS v4)
Terapkan token warna dari core design system berikut ke dalam konfigurasi `@theme` di `app/globals.css` atau menggunakan utility classes:
*   `background / Level 1`: `#0c1324` (Deep Nocturnal Base) atau `#020617` (Canvas Edge)[cite: 1]
*   `surface / Level 2 (Cards/Navbar)`: `#0c1324` dengan opacity 60%, `backdrop-filter: blur(12px)`, dan border 1px dengan white/slate-light opacity 10%[cite: 1]
*   `primary (Accent 1)`: `#adc6ff` / Electric Neon Blue (`#3b82f6` untuk high-contrast highlights)[cite: 1]
*   `secondary (Accent 2)`: `#4edea3` / Mint Emerald Green (`#10b981` untuk AI live status)[cite: 1]
*   `on-surface (Primary Text)`: `#dce1fb` / Crisp Slate Light (`#f8fafc`)[cite: 1]
*   `on-surface-variant (Muted Text)`: `#c2c6d6` (Opacity 60%)[cite: 1]

### 2. Typography Rules
*   **Headlines (Display Large):** `font-family: Geist`, font-weight: 800, tight kerning (`letter-spacing: -0.04em`)[cite: 1].
*   **Body Text:** `font-family: Inter`, font-weight: 400, optimal legibility di dalam glassmorphic cards[cite: 1].
*   **Badges & Meta Labels:** `font-family: JetBrains Mono`, font-weight: 500, uppercase, memberi impresi "pure code"[cite: 1].

### 3. Micro-Interactions & Elevation (Framer Motion / Tailwind)
*   **Level 2 Components (Cards):** Wajib menggunakan border tipis `border-white/10` atau `border-slate-800/50` dengan `backdrop-blur-md`[cite: 1].
*   **Hover State (Interactive Depth):** Saat kartu di-hover, wajib terjadi transisi 0.5 detik: `translate-y-[-4px]`, border opacity naik ke 30%, dan memancarkan efek outer glow tipis (shadow/glow blur 15px dengan warna accent blue/green opacity 20%)[cite: 1].
*   **Active Section Dots:** Titik navigasi vertikal yang aktif harus membesar dari 8px menjadi 12px dan memancarkan glow Electric Blue[cite: 1].

### 4. Code Implementation Constraints
*   **Dilarang Hardcoded Data:** Semua komponen organisme dan halaman wajib melakukan `.map()` atau membaca properti dari `data/portfolioData.json`.
*   **Atomic Design & TypeScript:** Komponen harus dipecah secara modular menggunakan TypeScript. Gunakan ekstensi `.tsx` untuk komponen React dan `.ts` untuk file utilitas/non-React. Jangan menumpuk seluruh UI di `app/page.tsx`.
*   **Package Manager:** Gunakan perintah berbasis `pnpm`.

### 5. Shop Route Technical Execution Rules
*   **Next.js Route Groups:** Agent WAJIB mengimplementasikan Route Groups untuk memisahkan tata letak. Sembunyikan Top Navbar portofolio, Side Dot Nav, dan Floating Bottom Bar ketika pengguna berada di dalam rute `/components-shop`.
*   **Shop Component Strategy:** Sediakan data produk komponen baru di dalam JSON (`data/shopData.json`) untuk merendernya secara dinamis. Data wajib mencakup properti: `componentName`, `category`, `price`, `previewUrl`, dan `downloadKey`.
*   **Theme Integration:** Halaman toko tetap harus patuh menggunakan token warna `Synthetic Intelligence Portfolio` (`bg-slate-950` dan aksen warna neon) namun dengan pendekatan UI e-commerce yang berfokus pada konversi penjualan produk digital[cite: 1].