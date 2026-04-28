---
prev:
  text: 'Kuyruklarım'
  link: '/oim/bulut-santralim/kuyruklarim'
next:
  text: 'Gelen Arama Yönetimi'
  link: '/oim/bulut-santralim/gelen-arama'
---

# Sesli Karşılama Menüsü (IVR)

Arayanların tuş takımıyla yönlendirilebildiği otomatik karşılama menüleri oluşturun.

## Mevcut IVR Menüleri

| Menü Adı | Ses Dosyası | Seçenekler |
|----------|-------------|-----------|
| Ana Menü | hosgeldiniz.wav | 1→Satış, 2→Destek, 0→Operatör |
| Satış Alt Menüsü | satis-karsilama.wav | 1→Bireysel, 2→Kurumsal |

## Yeni IVR Menüsü Oluşturma

1. **Yeni IVR Menüsü** butonuna tıklayın
2. Menü adı girin
3. Karşılama ses dosyasını seçin
4. Her tuş için hedef belirleyin:

| Tuş | Hedef Türü |
|-----|-----------|
| 1–9, *, # | Dahili / Çalma Grubu / Kuyruk / Başka IVR / Dış Numara / Kapat |

5. Zaman aşımı ve geçersiz tuş hedeflerini ayarlayın
6. **Kaydet**'e tıklayın

## Örnek Senaryo

```
"Merhaba, Firma'ya hoş geldiniz.
Satış için 1'e,
Teknik destek için 2'ye,
Muhasebe için 3'e basın."

1 → Satış Kuyruğu
2 → Destek Kuyruğu
3 → Dahili 1010
* → Tekrar dinle
Yanıt yok → 5 sn → Tekrar dinle (2 kez) → Telesekreter
```
