---
prev:
  text: 'SMS Gönder'
  link: '/oim/sms/sms-gonder'
next:
  text: 'Hazır Mesajlar'
  link: '/oim/sms/hazir-mesajlar'
---

# Excel'den SMS Gönder

Binlerce alıcıya Excel dosyasıyla toplu SMS gönderin.

## Dosya Formatı

Excel veya CSV dosyanızı aşağıdaki formatta hazırlayın:

| Numara | Ad | Mesaj |
|--------|----|-------|
| 905001112233 | Ahmet | Merhaba Ahmet, kampanyamız başladı! |
| 905004445566 | Ayşe | Merhaba Ayşe, kampanyamız başladı! |

**Zorunlu sütun:** Numara  
**Opsiyonel sütunlar:** Ad, Mesaj (kişiselleştirilmiş gönderim için)

::: info Numara Formatı
Numaraları **905XXXXXXXXX** formatında girin. Başında 0 olan numaralar (05XX) otomatik düzeltilir.
:::

## Yükleme Adımları

1. OİM > **SMS** > **Excel'den SMS Gönder** sayfasını açın
2. Gönderici başlığı seçin
3. **Dosya Seç** ile Excel / CSV dosyanızı yükleyin
4. Sütun eşleşmesini onaylayın
5. Mesaj şablonunu girin (tek mesaj) veya dosyadaki Mesaj sütununu kullanın
6. **Önizle**'ye tıklayarak ilk birkaç mesajı kontrol edin
7. **Gönder** veya ileri tarih seçin

## Kişiselleştirilmiş Mesaj Şablonu

Excel'deki sütun adlarını süslü parantez içinde kullanın:

```
Merhaba {Ad}, siparişiniz hazır!
```

Her alıcıya kendi adıyla mesaj gönderilir.
