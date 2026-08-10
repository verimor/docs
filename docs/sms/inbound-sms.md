# Gelen SMS (Inbound SMS)

Hesabınıza atanan kısa numara veya uzun numara üzerinden müşterilerinizin gönderdiği SMS'leri iki yöntemle alabilirsiniz: **Push (Webhook)** veya **GET ile sorgulama**.

## Kullanım Senaryoları

| Senaryo | Nasıl Çalışır? |
|---|---|
| Kampanya katılımı | "KATIL" yaz, kısa numaraya gönder |
| Abonelikten çıkış | "İPTAL" yaz, kısa numaraya gönder |
| Anket / oylama | Seçenek kodu SMS ile alınır |
| Bilgi sorgulama | Anahtar kelimeye göre otomatik yanıt döner |

---

## Push (Webhook) Yöntemi

Hesabınıza mesaj geldiği anda Verimor, OİM'de tanımladığınız URL'ye POST isteği gönderir.

**OİM'de URL tanımlamak için:** SMS Ayarlarım → Gelen SMS Push URL

```json
POST https://sizin.adresiniz.com.tr/gelen_sms
Content-Type: application/json

[
  {
    "message_id": 1234,
    "type": "inbound",
    "received_at": "2025-06-01 09:00:00",
    "network": "TURKCELL",
    "source_addr": "905001234567",
    "destination_addr": "4609",
    "keyword": "VERIMOR",
    "content": "VERIMOR deneme"
  }
]
```

| Alan | Açıklama |
|------|----------|
| `type` | Her zaman `inbound` |
| `message_id` | Mesaja atanan tekil ID |
| `received_at` | Mesajın alındığı tarih-saat |
| `network` | Gönderenin operatörü: `TURKCELL`, `VODAFONE`, `TTMOBIL` |
| `source_addr` | Mesajı gönderen numara |
| `destination_addr` | Verimor'daki alıcı numara veya kısa numara (örn. `4609`) |
| `keyword` | Ortak kısa numaralarda ayırt edici anahtar kelime. Doğrudan numaranıza gelenlerde boştur. |
| `content` | Gelen mesajın tam içeriği |
| `created_at` | Kaydın oluşturulma zamanı (push yönteminde dönmez) |

::: warning
Sisteminiz `200 OK` dönmezse Verimor 5'er dakika arayla 3 kez daha dener. Hâlâ yanıt alınamazsa bildirim tekrar yapılmaz.
:::

---

## GET ile Sorgulama

::: info İstek Limiti
Bu endpoint dakikada 20 istekle sınırlıdır, burst değeri 10'dur. Bu limit `status`, `balance` gibi diğer genel havuz endpoint'leriyle paylaşımlıdır — bkz. [Rate Limiting](/sms/rate-limiting). Sınır aşıldığında 429 (Too Many Requests) döner. Yüksek hacimde Push yöntemi önerilir.
:::

```
GET https://sms.verimor.com.tr/v2/inbound_messages
```

| Parametre | Zorunlu | Açıklama |
|-----------|---------|----------|
| `username` | Evet | API kullanıcı adı |
| `password` | Evet | API şifresi |
| `from_time` | Hayır | Başlangıç tarihi: `2025-06-01 09:00:00` |
| `to_time` | Hayır | Bitiş tarihi: `2025-06-01 12:00:00` |
| `greater_than` | Hayır | Verilen `message_id`'den büyük mesajları getirir — sayfalama için kullanılır, her seferinde 100 mesaj döner |

```bash
# Tarih aralığına göre
curl "https://sms.verimor.com.tr/v2/inbound_messages?username=kullanici@ornek.com&password=api_sifreniz&from_time=2025-06-01+09:00:00&to_time=2025-06-01+12:00:00"

# Sayfalama ile
curl "https://sms.verimor.com.tr/v2/inbound_messages?username=kullanici@ornek.com&password=api_sifreniz&greater_than=1234"
```

### Yanıt

```json
[
  {
    "message_id": 1234,
    "created_at": "2025-06-01T09:00:01.000+03:00",
    "received_at": "2025-06-01T09:00:00.000+03:00",
    "network": "TURKCELL",
    "source_addr": "905001234567",
    "destination_addr": "4609",
    "keyword": "VERIMOR",
    "content": "VERIMOR deneme"
  },
  {
    "message_id": 1235,
    "created_at": "2025-06-01T10:00:01.000+03:00",
    "received_at": "2025-06-01T10:00:00.000+03:00",
    "network": "VODAFONE",
    "source_addr": "905007654321",
    "destination_addr": "908501234567",
    "keyword": "",
    "content": "Siparişim ne zaman gelecek?"
  }
]
```

Hiç mesaj yoksa boş dizi `[]` döner.

---

## Sıkça Sorulan Sorular

**Hangi numara üzerinden gelen SMS alınır?**
Kısa numara (4 haneli, örn. `4609`) veya uzun numara tahsis edilir. Detay için satış ekibiyle iletişime geçin.

**Otomatik yanıt kurabilir miyim?**
Evet. Webhook entegrasyonu ile gelen mesajın içeriğine göre otomatik yanıt tetikleyebilirsiniz.

**OİM üzerinden görebilir miyim?**
Evet. OİM → SMS → Gelen SMS sayfasından tüm mesajlar listelenir ve dışa aktarılabilir.
