---
prev:
  text: 'Gelen Arama Yönetimi'
  link: '/oim/bulut-santralim/gelen-arama'
next:
  text: 'Otomatik Arama'
  link: '/oim/bulut-santralim/otomatik-arama'
---

# Giden Arama Yönetimi

Dahililerin dış arama yaparken hangi trunk üzerinden çıkacağını ve hangi numarayı göstereceğini belirleyin.

## Giden Kural Listesi

| Kural Adı | Öncelik | Hedef Prefix | Trunk | Arayan Numara |
|-----------|---------|--------------|-------|---------------|
| Yurt İçi | 1 | 90 | Ana Trunk | 0850 532 0000 |
| GSM | 2 | 905 | GSM Trunk | 0212 555 00 11 |
| Uluslararası | 3 | 00 | Intl Trunk | 0212 555 00 11 |

## Yeni Kural Ekleme

1. **Yeni Kural** butonuna tıklayın
2. Kural adı ve öncelik sırası girin
3. Hedef numara prefix'ini girin (örn. `905` GSM'ler için)
4. Hangi trunk'ı kullanacağını seçin
5. Görüntülenecek arayan numarayı seçin
6. **Kaydet**'e tıklayın

::: info
Kurallar öncelik sırasına göre değerlendirilir. Eşleşen ilk kural uygulanır.
:::
