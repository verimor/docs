---
prev:
  text: 'Aktif Çağrılarım'
  link: '/oim/sesli-hizmetler/aktif-cagrilar'
next:
  text: 'Akıllı Yönlendirme Servisi'
  link: '/oim/sesli-hizmetler/akilli-yonlendirme'
---

# Gelen Çağrı Yönetimi

Dışarıdan gelen aramaların hangi hat veya dahiliye yönlendirileceğini yapılandırın.

## Mevcut Trunk Listesi

| Hat | Numara | Durum | Yönlendirme |
|-----|--------|-------|-------------|
| Ana Hat | 0850 532 0000 | Aktif | IVR Menüsü → Satış Kuyruğu |
| Yedek Hat | 0212 555 00 11 | Aktif | Doğrudan Dahili 1001 |
| Faks Hattı | 0212 555 00 12 | Aktif | Faks Cihazı |

## Yönlendirme Kuralları

Gelen aramanın nereye yönlendirileceğini belirleyin:

1. OİM > **Sesli Hizmetler** > **Gelen Çağrı Yönetimi** sayfasını açın
2. İlgili hat satırındaki **Düzenle** butonuna tıklayın
3. Yönlendirme hedefini seçin:
   - Dahili numara
   - Çalma grubu
   - Kuyruk
   - IVR menüsü
   - Dış numara
4. Kaydedin

## Zaman Kuralları

Mesai saatleri dışında farklı bir yönlendirme tanımlayabilirsiniz:

| Zaman | Yönlendirme |
|-------|-------------|
| Mesai içi (08:00–18:00) | Satış Kuyruğu |
| Mesai dışı | Telesekreter |
| Tatil günleri | Tatil Ses Dosyası + Telesekreter |
