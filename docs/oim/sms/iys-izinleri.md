---
prev:
  text: 'SMS Ayarlarım'
  link: '/oim/sms/sms-ayarlari'
next:
  text: 'Durum Paneli'
  link: '/oim/bulut-santralim/durum-paneli'
---

# İYS İzinleri

İleti Yönetim Sistemi'ne gönderdiğiniz izin bildirimlerinin durumunu takip edin.

## Kampanya Listesi

| Kampanya | Tarih | Toplam | Onay | Ret | Hata |
|----------|-------|--------|------|-----|------|
| Ocak İzin Yükleme | 05.01.2026 | 12.500 | 11.980 | 420 | 100 |
| Şubat Güncelleme | 03.02.2026 | 850 | 840 | 8 | 2 |

## İzin Yükleme

1. **Yeni İzin Yükle** butonuna tıklayın
2. CSV dosyanızı hazırlayın:
   ```
   numara,durum,kaynak,tarih
   905001112233,ONAY,HS_WEB,2024-01-15
   905002223344,RET,HS_WEB,2024-01-16
   ```
3. Dosyayı yükleyin ve **Gönder**'e tıklayın

## Kampanya Detayı

Bir kampanyaya tıklayarak her numaranın İYS yanıtını görebilirsiniz.

::: info
İYS sorgulamaları birkaç dakika sürebilir. Sayfa yenilendiğinde güncel durumu göreceksiniz.
:::

[İYS hakkında daha fazla bilgi →](/iys/nedir)
