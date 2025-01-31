# Web UMKM Tanjungrejo

[![Next.js Version](https://img.shields.io/badge/next.js-14.2.15-blue)](https://nextjs.org/) [![React Version](https://img.shields.io/badge/react-18-blue)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4.1-blue)](https://tailwindcss.com/) [![Firebase](https://img.shields.io/badge/firebase-11.1.0-orange)](https://firebase.google.com/)

## 📌 Deskripsi Proyek
Web UMKM Tanjungrejo adalah sebuah platform berbasis web yang dibuat menggunakan **Next.js**, **TailwindCSS**, dan **Firebase**. Aplikasi ini bertujuan untuk membantu masyarakat menemukan informasi mengenai UMKM yang berada di daerah Tanjungrejo, termasuk daftar produk yang mereka tawarkan.

## 🚀 Fitur Utama
- 🔍 **Pencarian UMKM dan produk**
- 📂 **Halaman daftar UMKM dan produk**
- 📄 **Detail informasi UMKM dan produk**
- 🗺 **Halaman Peta - Integrasi Google Maps untuk lokasi UMKM**
- 🔥 **Animasi interaktif dengan Framer Motion**
- 📈 **Statistik UMKM menggunakan data real-time**

## 🛠️ Teknologi
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Animasi**: Framer Motion
- **Peta**: Google Maps API (@react-google-maps/api)
- **Galeri Foto**: react-photo-view
- **Slider**: react-slick
- **Backend**: Firebase Firestore
- **Lainnya**: Axios, date-fns, react-icons

## 💻 Instalasi & Menjalankan

### 1️⃣ Clone Repository
```bash
git clone https://github.com/pesuts/web-portal-umkm.git
cd web-portal-umkm
```

### 2️⃣ Instal Dependensi
```bash
npm install
```

### 3️⃣ Konfigurasi Environment Variables
Buat file `.env.local` dan tambahkan konfigurasi berikut:
```env
NEXT_PUBLIC_GOOGLE_MAP_API=your_google_maps_api
NEXT_PUBLIC_GOOGLE_MAP_ID=your_google_maps_id
NEXT_PUBLIC_SITE_URL=your_site_url
NEXT_PUBLIC_ADMIN_URL=your_admin_url

FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Jalankan Proyek
```bash
npm run dev
```

## 📂 Struktur Folder
```plaintext
src/
├── app/               # Routing aplikasi
│   ├── api/           # Endpoint API
│   ├── map/           # Halaman peta
│   ├── products/      # Halaman produk
│   └── umkm/          # Halaman UMKM
├── components/        # Komponen reusable
│   ├── landing-page/  # Komponen halaman utama
│   └── map/           # Komponen peta
├── data/              # Data statis
├── lib/               # Konfigurasi Firebase
├── services/          # Service layer untuk API
├── types/             # TypeScript definitions
├── utils/             # Utilities helper
└── views/             # Halaman view components
```


## 📄 Dokumentasi API
Endpoint yang tersedia:
`
GET /api/products/featured - Produk unggulan
`
`
GET /api/products - Daftar semua Produk
`
`
GET /api/umkm - Daftar semua UMKM
`
`
GET /api/statistic - Data statistik wilayah
`

Contoh response:

```
{
  "status": "success",
  "data": {
    "position": {
      "lng": 109.6712451,
      "lat": -7.725755
    },
    "owner": "Rohman",
    "id": "umkm-wkOHVAdLdpIeDnYnjVWSK",
    "contact": {
      "address": "Tinesek, Tanjungrejo, Buluspesantren, Kebumen",
      "phone": "08812792687"
    },
    "totalProducts": 1,
    "name": "Golak Mas Rohman",
    "platforms": [
      
    ],
    "dusun": "Tinesek",
    "openDays": [
      ...
    ],
    "products": [
      ...,
      ...
    ]
  }
}
```

## 📸 Screenshots

### Halaman Beranda
![Homepage](/public/screenshots//landing-page.png)

### Halaman Daftar UMKM
![Detail Produk](/public/screenshots/umkm.png)

### Halaman Detail UMKM
![Detail Produk](/public/screenshots/umkm-detail.png)

### Halaman Daftar Produk
![Detail Produk](/public/screenshots/products.png)

### Halaman Detail Produk
![Detail Produk](/public/screenshots/product-detail.png)

### Halaman Peta UMKM
![Detail Produk](/public/screenshots/peta.png)

### Halaman Info Peta UMKM
![Detail Produk](/public/screenshots/peta-detail.png)

## 🌍 Deployment

🔗 [Web UMKM Tanjungrejo](https://umkmtanjungrejo.com)

`umkmtanjungrejo.com`

## 🎨 Design Prototype (Figma)
Desain UI/UX dari website ini dibuat menggunakan **Figma**. Anda dapat melihat desain lengkapnya di tautan berikut:

🔗 **[Lihat Desain di Figma](https://www.figma.com/design/WGOl7UmBs1eSG2JxxkEFd8/UI%2FUX-WEB-UMKM-TANJUNGREJO---PROKER-KKN?node-id=0-1&t=fX6JQCoAjsG73548-1)**  

Berikut adalah tampilan desainnya:

![Figma Preview](/public/screenshots/figma.png)

## 🤝 Kontribusi
1. **Fork** repository ini.
2. **Buat branch** baru (`git checkout -b fitur-anda`).
3. **Commit** perubahan (`git commit -m 'Menambahkan fitur baru'`).
4. **Push ke branch** (`git push origin fitur-anda`).
5. **Ajukan Pull Request**.

## 📜 Lisensi
Proyek ini menggunakan lisensi **MIT License** – bebas digunakan dan dimodifikasi dengan tetap memberikan kredit.

## 📧 Kontak
- Developer: Daniel Hasiando Sinaga
- 📩 Email: **daniel.sinaga.ds@gmail.com**

