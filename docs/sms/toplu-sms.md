---
prev:
  text: 'SMS Nedir?'
  link: '/sms/nedir'
next:
  text: 'OTP / Tek Kullanımlık Şifre'
  link: '/sms/otp'
---

# Toplu SMS

Müşterilerinize, üyelerinize veya çalışanlarınıza tek işlemle binlerce SMS 
gönderebilirsiniz. Kampanya duyuruları, hatırlatmalar, bildirimler ve 
pazarlama mesajları için kullanılır.

## Nasıl Gönderilir?

Toplu SMS göndermek için üç yol vardır:

**1. OİM Paneli üzerinden**  
OİM'e giriş yapın → SMS → Toplu SMS Gönder adımlarını izleyin.  
Numara listesini Excel veya CSV olarak yükleyebilir, mesajı yazıp 
anlık veya zamanlanmış gönderim başlatabilirsiniz.

**2. SMS API ile**  
Kendi sisteminizden programatik olarak göndermek için 
[SMS API](https://developer.verimor.com.tr/smsapi) belgelerine bakabilirsiniz.

**3. Entegrasyonlar üzerinden**  
CRM veya e-ticaret sisteminize bağlı bir entegrasyon varsa oradan 
tetikleyebilirsiniz. Detaylar için [Entegrasyonlar](/entegrasyonlar/) bölümüne bakın.

## Temel Özellikler

- Türkçe karakter desteği
- Anlık veya zamanlanmış gönderim
- Kişiselleştirilmiş mesaj (ad-soyad değişkeni ile)
- Gönderim raporu ve teslimat durumu takibi
- İYS uyumlu gönderim (izinli alıcı listesi ile çalışır)

## Dikkat Edilmesi Gerekenler

- Ticari içerikli SMS'lerde İYS onayı zorunludur. Detaylar için [İYS](/iys/) bölümüne bakın.
- Numaranız yerine firma adı, marka adı ile gönderim yapabilmek için SMS başlığınızın tanımlı olması gerekir. Bkz. [SMS Başlığı](./sms-basligi.md)
- Tek SMS 160 karakterdir. Türkçe karakter kullanıldığında limit 
  70 karaktere düşer; sistem otomatik böler.


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
