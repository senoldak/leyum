# leyum (Barnemagasin · Çocuk Dergisi)

`leyum`, iki dilli (Norveççe `no` ve Türkçe `tr`) yayın yapan, çocuklar için güvenli, reklamsız ve merak dolu modern bir dijital çocuk dergisidir.

Mecmua ekosisteminin (`tidsrost`, `finfolis`, `kifobu`) bir parçasıdır ve aynı yüksek güvenlikli, sıfır maliyetli Cloudflare Pages / Astro statik mimarisini kullanır.

## Özellikler

- **İki Dilli Mimari (i18n)**: `/no/` (Norveççe) ve `/tr/` (Türkçe) tam ayrık rotalar, dil değiştirici.
- **Çocuk Odaklı Tasarım**: Neşeli renkler, Fredoka & Quicksand tipografisi, interaktif bilmeceler (`<details class="fun-riddle">`).
- **Cloudflare Pages Uyumlu**: `wrangler.jsonc` ve sıkı `public/_headers` CSP korumaları.
- **Sveltia CMS Entegrasyonu**: `/admin` üzerinden GitHub tabanlı kolay içerik yönetimi.
- **İçerik Kategorileri**:
  - 🚀 **Meraklı Kaşif** (Nysgjerrig Oppdager) - Bilim, uzay, keşifler
  - 📖 **Masal & Hikaye** (Eventyr & Fortellinger) - Sıcak çocuk öyküleri
  - 🎨 **Etkinlik & Sanat** (Aktiviteter & Kunst) - Origami, boyama, ev deneyleri
  - 🧩 **Zeka & Bilmece** (Gåter & Moro) - Düşündüren bilmeceler, tekerlemeler
  - 🌍 **Doğa & Hayvanlar** (Natur & Dyr) - Hayvanlar alemi ve çevre bilinci

## Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Statik siteyi derle
npm run build
```
