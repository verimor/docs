---
prev:
  text: 'Toplu SMS'
  link: '/sms/toplu-sms'
next:
  text: "SMS API'ye Giriş"
  link: '/sms/giris'
---

# OTP SMS (Tek Kullanımlık Şifre)

OTP (One Time Password) SMS, kullanıcı kimliğini doğrulamak veya işlem 
güvenliğini artırmak amacıyla tek kullanımlık şifre iletmek için kullanılır.

## Kullanım Alanları

| Senaryo | Örnek |
|---|---|
| Üyelik ve giriş doğrulama | Uygulamaya giriş sırasında SMS ile kod gönderme |
| İşlem onayı | Ödeme, transfer veya sipariş onayı |
| Şifre sıfırlama | Hesap kurtarma akışı |
| İki faktörlü doğrulama (2FA) | Kurumsal sistemlerde ek güvenlik katmanı |
| E-devlet / e-imza akışları | Kimlik doğrulama gerektiren süreçler |

## Teknik Entegrasyon

OTP SMS, SMS API üzerinden tetiklenir. Temel akış şöyledir:

1. Kullanıcı işlemi başlatır
2. Sisteminiz Verimor SMS API'ye istek gönderir
3. Verimor kodu kullanıcının telefonuna iletir
4. Kullanıcı kodu girer, sisteminiz doğrular

API belgelerine ulaşmak için: [SMS API Dokümantasyonu](https://developer.verimor.com.tr/smsapi)

## Önemli Notlar

- OTP SMS'ler ticari içerik taşımadığı için İYS kapsamı dışındadır.
- Yüksek öncelikli hat üzerinden iletilir; teslimat süresi kritik işlemler 
  için optimize edilmiştir
- SMS başlığı tanımlı olmalıdır. Bkz. [SMS Başlığı](./sms-basligi.md)


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

## Sıkça Sorulan Sorular

**OTP SMS'ler ne kadar sürede ulaşır?**  
Saniyeler içinde iletilir. Yüksek öncelikli hat kullanılır.

**İYS kaydı gerekiyor mu?**  
Hayır. OTP SMS'ler doğrulama amaçlı olduğundan ticari ileti kapsamına girmez.

**Kodun geçerlilik süresi Verimor tarafından mı belirleniyor?**  
Hayır. Kodun geçerlilik süresi ve içeriği tamamen sizin sisteminiz 
tarafından belirlenir. Verimor yalnızca iletimi sağlar.
 
## İlgili Sayfalar

- [SMS Gönderme →](/sms/gonderme)
- [Rapor Sorgulama →](/sms/rapor)
