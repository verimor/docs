---
prev:
  text: 'Toplu SMS'
  link: '/sms/toplu-sms'
next:
  text: "SMS API'ye Giriş"
  link: '/sms/giris'
---

# OTP / Tek Kullanımlık Şifre

OTP (One-Time Password), kullanıcı kimliğini doğrulamak veya hassas işlemleri onaylamak için tek seferlik kod gönderme yöntemidir.

## Kullanım Alanları

- Üyelik ve giriş doğrulama (2FA)
- Şifre sıfırlama
- Ödeme onayı
- Sözleşme ve form imzalama
- Telefon numarası doğrulama

## Nasıl Çalışır?

1. Kullanıcı uygulamanızda bir işlem başlatır
2. Sisteminiz rastgele bir kod üretir (örn. 6 haneli)
3. Verimor API üzerinden bu kodu SMS olarak gönderirsiniz
4. Kullanıcı kodu girerek işlemi onaylar

## API ile OTP Gönderme

```bash
curl -X POST https://sms.verimor.com.tr/v2/send.json \
  -H "Content-Type: application/json" \
  -d '{
    "username": "kullanici@ornek.com",
    "password": "api_sifreniz",
    "source_addr": "FIRMAADI",
    "messages": [
      {
        "dest": "905001234567",
        "msg": "Doğrulama kodunuz: 482931\nBu kodu kimseyle paylaşmayın.",
        "id": "islem-uuid-001"
      }
    ]
  }'
```

`id` alanını kullanarak her OTP isteğini benzersiz şekilde takip edebilirsiniz.

## OTP için Önerilen Ayarlar

| Parametre | Önerilen Değer | Açıklama |
|-----------|----------------|----------|
| `valid_for` | `00:05` | Kod 5 dakika geçerli |
| `datacoding` | `0` | Türkçe harf içermiyorsa |
| `source_addr` | Sabit başlık | Güvenilir görünüm için |

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "FIRMAADI",
  "valid_for": "00:05",
  "messages": [
    { "dest": "905001234567", "msg": "Kodunuz: 482931" }
  ]
}
```

## Yüksek Hacimli OTP Gönderimleri

::: warning Performans Notu
Yoğun OTP gönderimlerinde istekleri kendi tarafınızda biriktirip **saniyede bir** POST isteği yapmanız önerilir. Böylece rate limit'e takılmadan yüksek hacim sağlanır.
:::

- Dakikada 240 istek sınırına dikkat edin
- Her isteğe birden fazla alıcı eklemek mümkündür (tek seferde 50.000'e kadar)

## Kod Önerileri

- 4–8 haneli sayısal veya alfanümerik kod üretin
- Kodların geçerlilik süresini kısa tutun (3–10 dakika)
- Kullanılan kodu hemen geçersiz kılın
- Aynı kodu 3 kez yanlış girilirse engel koyun

## İlgili Sayfalar

- [SMS Gönderme →](/sms/gonderme)
- [Rapor Sorgulama →](/sms/rapor)
