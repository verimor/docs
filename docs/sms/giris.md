# SMS API Giriş

Verimor SMS API, uygulamalarınız veya sunucu taraflı yazılımlarınız üzerinden SMS gönderimi ve yönetimi yapmanızı sağlayan bir HTTP arayüzüdür.

## Temel Bilgiler

| Özellik | Değer |
|---------|-------|
| Base URL | `https://sms.verimor.com.tr` |
| Protokol | HTTPS |
| Format | JSON (POST) / Plain Text (GET) |
| Encoding | UTF-8 |
| Rate Limit | Dakikada 240 istek |
| Maks. Paket | 10 MB |
| Maks. Alıcı | 50.000 / istek |

## Özellikler

- **Tekli ve Toplu Gönderim** — Tek istekle 50.000 alıcıya farklı mesajlar gönderin
- **Zamanlanmış Gönderim** — `send_at` ile ileri tarihli gönderim planlayın
- **Türkçe / Unicode** — `datacoding` ile karakter seti seçin
- **İYS Uyumu** — Ticari iletiler için İYS entegrasyonu
- **İletim Raporu** — Durum sorgulama veya Push yöntemi
- **Kara Liste** — Abonelik dışı çıkmak isteyen numaraları yönetin

## Hızlı Başlangıç

```bash
curl -X POST https://sms.verimor.com.tr/v2/send.json \
  -H "Content-Type: application/json" \
  -d '{
    "username": "KULLANICI_ADINIZ",
    "password": "API_SIFRENIZ",
    "source_addr": "BASLIGINIZ",
    "messages": [
      {
        "dest": "905001234567",
        "msg": "Merhaba! Bu bir test mesajıdır."
      }
    ]
  }'
```

::: tip Rate Limit
Dakikada 240 istek yapılabilir. Limit aşılırsa `429 Too Many Requests` döner. Rapor sorgulaması dakikada 20 istekle sınırlıdır — Push yöntemi önerilir.
:::

## Sonraki Adımlar

- [Kimlik Doğrulama](./kimlik-dogrulama) — POST ve GET isteklerinde kimlik bilgisi gönderimi
- [SMS Gönderme](./gonderme) — Tüm parametre detayları
- [Rapor Sorgulama](./rapor) — Durum kodları ve açıklamaları
- [Hata Kodları](./hata-kodlari) — Gönderim ve iletim hata kodları
