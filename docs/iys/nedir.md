---
next:
  text: 'İzin Yönetimi'
  link: '/iys/izin-yonetimi'
---

# İYS Nedir?

İYS (İleti Yönetim Sistemi), Ticaret Bakanlığı tarafından yönetilen ve ticari elektronik ileti izinlerinin kayıt altına alındığı resmi bir platformdur.

## Yasal Zorunluluk

6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında:

- **Ticari SMS, e-posta ve sesli arama** göndermek için alıcının onayı zorunludur
- Onaylar İYS'de kayıtlı olmalıdır
- İzinsiz gönderim idari para cezasına yol açar

## Hangi Gönderimleri Etkiler?

| Gönderim Tipi | İYS Zorunlu mu? |
|---------------|-----------------|
| Ticari SMS (kampanya, promosyon) | **Evet** |
| OTP / doğrulama SMS | Hayır |
| Bilgilendirme SMS (sipariş, kargo) | Hayır (ticari içerik yoksa) |
| Sesli pazarlama araması | **Evet** |
| Ticari e-posta | **Evet** |

## Verimor ile İYS Süreci

```
Marka kaydı (İYS) → Verimor OİM'de marka kodu girişi → API'de is_commercial: true
```

1. Markanızı İYS platformuna kaydedin: [iys.org.tr](https://iys.org.tr)
2. Verimor OİM'de SMS başlığınıza İYS marka kodunu tanımlayın
3. Ticari gönderimlerde `is_commercial: true` ve `iys_recipient_type` parametrelerini ekleyin

## Sonraki Adımlar

- [İzin Yönetimi →](/iys/izin-yonetimi)
- [Ticari SMS Gönderimi →](/iys/ticari-sms)
