---
prev:
  text: 'SMS Nedir?'
  link: '/sms/nedir'
next:
  text: 'OTP / Tek Kullanımlık Şifre'
  link: '/sms/otp'
---

# Toplu SMS

Toplu SMS, tek bir işlemle yüzlerce, binlerce veya milyonlarca kişiye aynı anda mesaj gönderme hizmetidir. Kampanya duyuruları, müşteri bildirimleri ve promosyon iletişimi için kullanılır.

## Panel (OİM) Üzerinden Toplu SMS

Teknik bilgiye gerek duymadan tarayıcıdan toplu gönderim yapabilirsiniz.

**Adımlar:**

1. [oim.verimor.com.tr](https://oim.verimor.com.tr) adresine giriş yapın
2. **SMS Gönder** menüsüne tıklayın
3. Gönderici başlığını seçin
4. Mesaj metnini yazın
5. Alıcıları girin:
   - Elle numara yazın
   - Kayıtlı gruptan seçin
   - Excel / CSV dosyası yükleyin
6. **Hemen Gönder** veya ileri tarih seçin
7. **Gönder** düğmesine basın

## API Üzerinden Toplu SMS

Yazılımınızdan otomatik toplu gönderim için tek bir POST isteğiyle 50.000 alıcıya ulaşın.

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "FIRMAADI",
  "messages": [
    { "dest": "905001234567", "msg": "Kampanyamız başladı! %%20 indirim fırsatını kaçırmayın." },
    { "dest": "905007654321", "msg": "Kampanyamız başladı! %%20 indirim fırsatını kaçırmayın." }
  ]
}
```

**Bir başlığa farklı mesaj göndermek için** `messages` dizisindeki her elemana farklı `msg` değeri verin.

## Zamanlanmış Gönderim

`send_at` parametresiyle gönderim saatini planlayın:

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "FIRMAADI",
  "send_at": "2025-09-01 09:00:00",
  "messages": [...]
}
```

Zamanlanmış bir gönderimi iptal etmek için `/v2/cancel/{campaign_id}` endpoint'ini kullanın.

## Excel / CSV ile Gönderim

OİM üzerinden alıcı listesini Excel veya CSV olarak yükleyebilirsiniz.

**Dosya formatı:**

```
905001234567
905007654321
905001112233
```

Sadece numara sütunu yeterlidir. Başlık satırı eklemeyin.

## Sınırlar

| Kural | Değer |
|-------|-------|
| İstek başına maks. alıcı | 50.000 |
| Dakikada maks. istek sayısı | 240 |
| Maks. paket boyutu | 10 MB |

## İlgili Sayfalar

- [SMS API Gönderme →](/sms/gonderme)
- [Rapor Sorgulama →](/sms/rapor)
- [Hata Kodları →](/sms/hata-kodlari)
