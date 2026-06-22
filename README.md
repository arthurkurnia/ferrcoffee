# Fer Coffe — Website (Express.js + EJS)

Website kedai kopi "Fer Coffe" dibangun dengan **Express.js** sebagai server dan
**EJS** sebagai template engine. CSS & JS murni (vanilla), tanpa framework
frontend, tanpa API eksternal untuk data menu.

## Struktur Folder

```
fer-coffee-express/
├── server.js              # Entry point Express, berisi data menu (array statis) & route
├── package.json
├── views/
│   └── index.ejs           # Template halaman utama (di-render oleh server.js)
└── public/
    ├── css/
    │   └── style.css       # Semua styling
    └── js/
        └── script.js       # Navbar scroll, hamburger, smooth scroll
```

## Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan server:
   ```bash
   npm start
   ```
   atau untuk mode development dengan auto-reload (perlu nodemon):
   ```bash
   npm run dev
   ```

3. Buka browser ke:
   ```
   http://localhost:3000
   ```

## Kustomisasi

- **Data menu**: edit array `menuItems` di `server.js`.
- **Nomor WhatsApp**: edit `waNumber` di `server.js` (format: `62xxxxxxxxxx`, tanpa tanda `+`).
- **Warna brand**: edit variabel `:root` di `public/css/style.css` (default `--primary: #006041`).
- **Lokasi Maps**: ganti query pada `src` iframe di `views/index.ejs` bagian `#lokasi`
  (saat ini menggunakan dummy lokasi Monumen Nasional).

## Catatan

- Tidak butuh database — semua data menu disimpan sebagai array JavaScript statis di `server.js`.
- Gambar memakai URL Unsplash langsung (butuh koneksi internet saat halaman dibuka).
- Fully responsive: desktop, tablet, dan mobile (hamburger menu otomatis aktif di bawah 768px).