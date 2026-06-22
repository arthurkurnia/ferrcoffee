const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const menuItems = [
  {
    id: 1,
    nama: 'Kopi Susu Fer',
    kategori: 'Signature',
    harga: 18000,
    deskripsi: 'Racikan signature espresso robusta lokal, susu segar, dan gula aren pilihan.',
    gambar: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    nama: 'Americano',
    kategori: 'Coffee',
    harga: 20000,
    deskripsi: 'Double shot espresso murni dipadukan air panas, rasa kopi kuat dan bersih.',
    gambar: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    nama: 'Cafe Latte',
    kategori: 'Coffee',
    harga: 23000,
    deskripsi: 'Espresso lembut berpadu steamed milk creamy dengan sentuhan foam art.',
    gambar: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    nama: 'V60 Manual Brew',
    kategori: 'Manual Brew',
    harga: 27000,
    deskripsi: 'Seduh manual single origin pilihan, cita rasa kopi lebih murni dan kompleks.',
    gambar: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    nama: 'Croissant Butter',
    kategori: 'Pastry',
    harga: 28000,
    deskripsi: 'Pastry mentega renyah berlapis, dipanggang fresh setiap pagi.',
    gambar: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    nama: 'Lychee Tea',
    kategori: 'Non-Coffee',
    harga: 19000,
    deskripsi: 'Teh segar dengan sari buah leci, manis ringan dan menyegarkan.',
    gambar: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'
  }
];

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Fer Coffe - Grind The Essentials',
    menuItems,
    waNumber: '6285717912788'
  });
});

app.use((req, res) => {
  res.status(404).send('Halaman tidak ditemukan.');
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

module.exports = app;