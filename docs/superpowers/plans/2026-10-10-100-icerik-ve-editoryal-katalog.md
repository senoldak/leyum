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

- [ ] **Step 1: Katalog bütünlüğü ve kategori renkleri testini yaz**

```javascript
// tests/redaksjon/katalog.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lagFolioSvg } from '../../scripts/redaksjon/bilde.mjs';

test('katalog-100.json tam 100 özgün ikiz konu içerir', async () => {
  const raw = await readFile('scripts/redaksjon/katalog-100.json', 'utf8');
  const items = JSON.parse(raw);
  assert.equal(items.length, 100, 'Katalog 100 konu içermelidir');

  const kategoriler = new Set(items.map((i) => i.category));
  assert.deepEqual(
    Array.from(kategoriler).sort(),
    ['aktiviteter', 'eventyr', 'gater', 'natur', 'oppdager'].sort()
  );

  const slugs = new Set(items.map((i) => i.slug));
  assert.equal(slugs.size, 100, 'Tüm sluglar benzersiz olmalıdır');
});

test('lagFolioSvg yeni kategori slugları ile sorunsuz çalışır', () => {
  const svg = lagFolioSvg({
    title: 'Hvorfor er himmelen blå?',
    category: 'oppdager',
    ageRange: '7-9',
  });
  assert.match(svg, /OPPDAGER|NYSSGJERRIG/i);
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/katalog.test.mjs`
Expected: FAIL (Cannot find module or file `scripts/redaksjon/katalog-100.json`)

- [ ] **Step 3: `bilde.mjs` içindeki kategori haritasını güncelle**

`scripts/redaksjon/bilde.mjs` içindeki `KATEGORI_FARGER` nesnesine yeni slugları ekle:
```javascript
export const KATEGORI_FARGER = {
  oppdager: { surface: '#E0F2FE', ink: '#0284C7', labelNo: 'Nysgjerrig Oppdager', labelTr: 'Meraklı Kaşif' },
  natur: { surface: '#DCFCE7', ink: '#16A34A', labelNo: 'Natur & Dyr', labelTr: 'Doğa & Hayvanlar' },
  eventyr: { surface: '#F3E8FF', ink: '#7C3AED', labelNo: 'Eventyr & Fortellinger', labelTr: 'Masal & Hikaye' },
  gater: { surface: '#D1FAE5', ink: '#059669', labelNo: 'Gåter & Moro', labelTr: 'Zeka & Bilmece' },
  aktiviteter: { surface: '#FFEDD5', ink: '#EA580C', labelNo: 'Aktiviteter & Kunst', labelTr: 'Etkinlik & Sanat' },
  // Eski geriye uyumluluk:
  'merakli-kasif': { surface: '#E0F2FE', ink: '#0284C7', labelNo: 'Nysgjerrig Oppdager', labelTr: 'Meraklı Kaşif' },
  'doga-hayvanlar': { surface: '#DCFCE7', ink: '#16A34A', labelNo: 'Natur & Dyr', labelTr: 'Doğa & Hayvanlar' },
  'masal-hikaye': { surface: '#F3E8FF', ink: '#7C3AED', labelNo: 'Eventyr & Fortellinger', labelTr: 'Masal & Hikaye' },
  'zeka-bilmece': { surface: '#D1FAE5', ink: '#059669', labelNo: 'Gåter & Moro', labelTr: 'Zeka & Bilmece' },
  'etkinlik-sanat': { surface: '#FFEDD5', ink: '#EA580C', labelNo: 'Aktiviteter & Kunst', labelTr: 'Etkinlik & Sanat' },
};
```

- [ ] **Step 4: `scripts/redaksjon/katalog-100.json` dosyasını oluştur**

100 konunun tamamını içeren JSON listesini oluştur.

- [ ] **Step 5: Testleri çalıştır ve doğrula**

Run: `node --test tests/redaksjon/katalog.test.mjs`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/redaksjon/ tests/redaksjon/
git commit -m "feat: add 100-topic catalog manifest and sync category colors"
```

---

### Task 2: Parti 1 – Meraklı Kaşif (`oppdager`) 20 İkiz Konu Üretimi

**Files:**
- Create: 20 adet `src/content/yazilar/no/<slug>.md`
- Create: 20 adet `src/content/yazilar/tr/<slug>.md`
- Create: 20 adet `public/images/yazilar/<slug>.png`
- Create: `scripts/redaksjon/tohum/parti-1-oppdager.mjs`

**Interfaces:**
- Produces: 40 geçerli Markdown dosyası ve 20 kapak PNG kartı. Yaş piramidi: 6 adet 4-6, 8 adet 7-9, 6 adet 10-12.

- [ ] **Step 1: Meraklı Kaşif tohumlama modülünü (`parti-1-oppdager.mjs`) yaz ve çalıştır**
- [ ] **Step 2: 20 kapak görselinin `public/images/yazilar/` altında üretildiğini doğrula**
- [ ] **Step 3: `sjekker.mjs` ile metinlerin cümle uzunluğu ve güvenlik testini çalıştır**
- [ ] **Step 4: `npm run build` ile 40 yeni sayfanın hatasız derlendiğini doğrula**
- [ ] **Step 5: Commit**

```bash
git add src/content/yazilar/ public/images/yazilar/ scripts/redaksjon/tohum/
git commit -m "feat(content): add 20 twin stories for oppdager category"
```

---

### Task 3: Parti 2 – Doğa & Hayvanlar (`natur`) 20 İkiz Konu Üretimi

**Files:**
- Create: 20 adet `src/content/yazilar/no/<slug>.md`
- Create: 20 adet `src/content/yazilar/tr/<slug>.md`
- Create: 20 adet `public/images/yazilar/<slug>.png`
- Create: `scripts/redaksjon/tohum/parti-2-natur.mjs`

**Interfaces:**
- Produces: 40 geçerli Markdown dosyası ve 20 kapak PNG kartı. Yaş piramidi: 6 adet 4-6, 8 adet 7-9, 6 adet 10-12.

- [ ] **Step 1: Doğa & Hayvanlar tohumlama modülünü (`parti-2-natur.mjs`) yaz ve çalıştır**
- [ ] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [ ] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [ ] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [ ] **Step 5: Commit**

```bash
git add src/content/yazilar/ public/images/yazilar/ scripts/redaksjon/tohum/
git commit -m "feat(content): add 20 twin stories for natur category"
```

---

### Task 4: Parti 3 – Masal & Hikaye (`eventyr`) 20 İkiz Konu Üretimi

**Files:**
- Create: 20 adet `src/content/yazilar/no/<slug>.md`
- Create: 20 adet `src/content/yazilar/tr/<slug>.md`
- Create: 20 adet `public/images/yazilar/<slug>.png`
- Create: `scripts/redaksjon/tohum/parti-3-eventyr.mjs`

**Interfaces:**
- Produces: 40 geçerli Markdown dosyası ve 20 kapak PNG kartı. Yaş piramidi: 6 adet 4-6, 8 adet 7-9, 6 adet 10-12.

- [ ] **Step 1: Masal & Hikaye tohumlama modülünü (`parti-3-eventyr.mjs`) yaz ve çalıştır**
- [ ] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [ ] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [ ] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [ ] **Step 5: Commit**

```bash
git add src/content/yazilar/ public/images/yazilar/ scripts/redaksjon/tohum/
git commit -m "feat(content): add 20 twin stories for eventyr category"
```

---

### Task 5: Parti 4 – Zeka & Bilmece (`gater`) 20 İkiz Konu Üretimi

**Files:**
- Create: 20 adet `src/content/yazilar/no/<slug>.md`
- Create: 20 adet `src/content/yazilar/tr/<slug>.md`
- Create: 20 adet `public/images/yazilar/<slug>.png`
- Create: `scripts/redaksjon/tohum/parti-4-gater.mjs`

**Interfaces:**
- Produces: 40 geçerli Markdown dosyası ve 20 kapak PNG kartı. Yaş piramidi: 6 adet 4-6, 8 adet 7-9, 6 adet 10-12. Bilmecelerin gizli cevap/ipucu blokları (`<details>` veya soru-cevap formatı).

- [ ] **Step 1: Zeka & Bilmece tohumlama modülünü (`parti-4-gater.mjs`) yaz ve çalıştır**
- [ ] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [ ] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [ ] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [ ] **Step 5: Commit**

```bash
git add src/content/yazilar/ public/images/yazilar/ scripts/redaksjon/tohum/
git commit -m "feat(content): add 20 twin stories for gater category"
```

---

### Task 6: Parti 5 – Etkinlik & Sanat (`aktiviteter`) 20 İkiz Konu Üretimi

**Files:**
- Create: 20 adet `src/content/yazilar/no/<slug>.md`
- Create: 20 adet `src/content/yazilar/tr/<slug>.md`
- Create: 20 adet `public/images/yazilar/<slug>.png`
- Create: `scripts/redaksjon/tohum/parti-5-aktiviteter.mjs`

**Interfaces:**
- Produces: 40 geçerli Markdown dosyası ve 20 kapak PNG kartı. Yaş piramidi: 6 adet 4-6, 8 adet 7-9, 6 adet 10-12. Adım adım malzeme ve yapılış rehberleri.

- [ ] **Step 1: Etkinlik & Sanat tohumlama modülünü (`parti-5-aktiviteter.mjs`) yaz ve çalıştır**
- [ ] **Step 2: 20 kapak görselinin üretildiğini doğrula**
- [ ] **Step 3: Metin denetimini çalıştır (`sjekker.mjs`)**
- [ ] **Step 4: `npm run build` ile derleme doğrulaması yap**
- [ ] **Step 5: Commit**

```bash
git add src/content/yazilar/ public/images/yazilar/ scripts/redaksjon/tohum/
git commit -m "feat(content): add 20 twin stories for aktiviteter category"
```

---

### Task 7: Uçtan Uca Doğrulama, Testler ve Astro Statik Derleme

**Files:**
- Verify: Tüm 200 makale ve 100 kapak kartı
- Test: `tests/redaksjon/*.test.mjs`

- [ ] **Step 1: Tüm birim testlerini çalıştır**

Run: `node --test tests/redaksjon/*.test.mjs`
Expected: Tüm testler PASS (19+ test)

- [ ] **Step 2: Editoryal denetçiyi tüm içerikler üzerinde koştur**

Run: `node scripts/redaksjon/denetle.mjs`
Expected: 0 hata (VVP 4.8 ve pedagog kurallarına tam uyum)

- [ ] **Step 3: Astro statik derlemesini gerçekleştir**

Run: `npm run build`
Expected: Tüm 200+ statik sayfa, kategori arşivleri ve sitemap hatasız üretilir (`build Complete!`).

- [ ] **Step 4: Son commit**

```bash
git add .
git commit -m "feat: complete publishing 100 twin topics across all categories"
```
