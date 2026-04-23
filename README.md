# MONART İnşaat ve Mimarlık - Web Sitesi

Modern, minimalist ve kurumsal bir web sitesi. Next.js 14, Tailwind CSS, Framer Motion ve Lucide React ile geliştirilmiştir.

## Özellikler

- 🎨 Modern ve minimalist tasarım
- 📱 Tam responsive yapı
- ⚡ Next.js App Router ile hızlı sayfa geçişleri
- 🎭 Framer Motion animasyonları
- 🎯 SEO optimizasyonu
- 🌐 Türkçe arayüz

## Teknoloji Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animasyon:** Framer Motion
- **İkonlar:** Lucide React
- **Font:** Inter, Montserrat (Google Fonts)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Sayfa Yapısı

- `/` - Ana Sayfa (Hero, Projeler, Hizmetler, Hakkımızda, İletişim)
- `/projeler` - Tüm Projeler (Filtreleme özelliği ile)
- `/projeler/[id]` - Proje Detay Sayfası
- `/hakkimizda` - Hakkımızda Sayfası
- `/iletisim` - İletişim Sayfası

## Proje Yapısı

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── projeler/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── hakkimizda/
│   │   └── page.tsx
│   └── iletisim/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectsGrid.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── data/
    └── projects.ts
```

## Geliştirici

MONART İnşaat ve Mimarlık
- Web: www.monartmimarlik.com
- Email: monartyapimimralik@gmail.com
- Tel: +90 (543) 960 71 46
