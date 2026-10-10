# 100 İkiz İçerik ve Editoryal Katalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `leyum` çocuk dergisi için 5 ana kategoride (`oppdager`, `natur`, `eventyr`, `gater`, `aktiviteter`) 100 özgün ikiz konudan oluşan toplam 200 makaleyi (100 Norveççe Bokmål + 100 Türkçe transcreation) ve 100 tipografik kapak kartını eksiksiz üreterek yayına almak.

**Architecture:** 100 konuluk ana editoryal manifest (`scripts/redaksjon/katalog-100.json`) rehberliğinde; kategori renk ve slug eşlemesi (`bilde.mjs`), parti derleme ve kapak üreticisi (`parti-derleyici.mjs`), her kategoride 20 ikiz makale (40 markdown) ve 20 kapak PNG'si üreten 5 bağımsız kategori partisi ve en son kalite/derleme kapısı (`npm run build`).

**Tech Stack:** Astro 7 (Content Collections, Zod, glob loader), Node.js (v24 ESM, `node:test`, `node:assert/strict`), Sharp (1200x630 SVG folio PNG kart üretimi), Markdown & Frontmatter.

## Global Constraints

- Tüm makaleler `src/content/yazilar/no/<slug>.md` ve `src/content/yazilar/tr/<slug>.md` konumlarına yazılmalıdır.
- Her konu için tek ve ortak kapak görseli `public/images/yazilar/<slug>.png` olarak üretilmelidir.
- Kategori anahtarları `src/lib/site.ts` ile birebir eşleşmelidir (`oppdager`, `natur`, `eventyr`, `gater`, `aktiviteter`).
- Norveççe metinlerde Språkrådet Bokmål normuna uyulmalı, tırnaklar `« »`, konuşma çizgileri `– ` olmalıdır.
- Türkçe metinlerde tırnaklar `“ ”`, konuşma çizgileri `— ` olmalıdır.
- Yaş grubu kelime sınırları: 4–6 yaş ≤ 12 kelime/cümle; 7–9 yaş ≤ 18 kelime/cümle; 10–12 yaş ≤ 24 kelime/cümle.
- Korku, şiddet, dehşet, kabus, eko-anksiyete ve reklam/ticari unsurlar mutlak yasaktır (`sjekker.mjs` testlerinden geçmelidir).
- Her partinin sonunda `node --test tests/redaksjon/*.test.mjs` ve `npm run build` hatasız tamamlanmalıdır.

---

### Task 1: Katalog Manifesti ve Kategori Uyum Kütüphanesi

**Files:**
- Create: `scripts/redaksjon/katalog-100.json`
- Modify: `scripts/redaksjon/bilde.mjs:5-15`
- Test: `tests/redaksjon/katalog.test.mjs`

**Interfaces:**
- Produces:
  - `katalog-100.json`: 100 konunun metadata listesi (`slug`, `category`, `ageRange`, `titleNo`, `titleTr`, `descNo`, `descTr`).
  - `bilde.mjs`: `oppdager`, `natur`, `eventyr`, `gater`, `aktiviteter` slug'larına uyumlu `KATEGORI_FARGER` haritası.

- [x] **Step 1: Katalog bütünlüğü ve kategori renkleri testini yaz**
- [x] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**
- [x] **Step 3: `bilde.mjs` içindeki kategori haritasını güncelle**
- [x] **Step 4: `scripts/redaksjon/katalog-100.json` dosyasını oluştur**
- [x] **Step 5: Testleri çalıştır ve doğrula**
- [x] **Step 6: Commit**

---

### Task 2: Parti 1 – Meraklı Kaşif (`oppdager`) 20 İkiz Konu Üretimi

- [x] **Step 1: Meraklı Kaşif tohumlama modülünü (`parti-1-oppdager.mjs`) yaz ve çalıştır**
- [x] **Step 2: 20 kapak görselinin `public/images/yazilar/` altında üretildiğini doğrula**
- [x] **Step 3: `sjekker.mjs` ile metinlerin cümle uzunluğu ve güvenlik testini çalıştır**
- [x] **Step 4: `npm run build` ile 40 yeni sayfanın hatasız derlendiğini doğrula**
- [x] **Step 5: Commit**

---

### Task 3: Parti 2 – Doğa & Hayvanlar (`natur`) 20 İkiz Konu Üretimi

- [x] **Step 1: Doğa & Hayvanlar tohumlama modülünü (`parti-2-natur.mjs`) yaz ve çalıştır**
- [x] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [x] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [x] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [x] **Step 5: Commit**

---

### Task 4: Parti 3 – Masal & Hikaye (`eventyr`) 20 İkiz Konu Üretimi

- [x] **Step 1: Masal & Hikaye tohumlama modülünü (`parti-3-eventyr.mjs`) yaz ve çalıştır**
- [x] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [x] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [x] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [x] **Step 5: Commit**

---

### Task 5: Parti 4 – Zeka & Bilmece (`gater`) 20 İkiz Konu Üretimi

- [x] **Step 1: Zeka & Bilmece tohumlama modülünü (`parti-4-gater.mjs`) yaz ve çalıştır**
- [x] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [x] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [x] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [x] **Step 5: Commit**

---

### Task 6: Parti 5 – Etkinlik & Sanat (`aktiviteter`) 20 İkiz Konu Üretimi

- [x] **Step 1: Etkinlik & Sanat tohumlama modülünü (`parti-5-aktiviteter.mjs`) yaz ve çalıştır**
- [x] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [x] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [x] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [x] **Step 5: Commit**

---

### Task 7: Uçtan Uca Doğrulama, Testler ve Astro Statik Derleme

- [x] **Step 1: Tüm birim testlerini çalıştır** (`node --test tests/redaksjon/*.test.mjs` - 20/20 PASS)
- [x] **Step 2: Editoryal denetçiyi tüm içerikler üzerinde koştur** (`node scripts/redaksjon/denetle.mjs`)
- [x] **Step 3: Astro statik derlemesini gerçekleştir** (`npm run build` - 227 sayfa, 0 hata)
- [x] **Step 4: Son commit**
