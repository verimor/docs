# Rapor Sorgulama

İki yöntemle gönderim raporu alabilirsiniz: **Push (Webhook)** veya **GET ile sorgulama**.

## Push (Webhook) Yöntemi

Her mesajın durumu kesinleştiğinde (iletildi, iletilemedi, zaman aşımı vb.) Verimor, OİM'de tanımladığınız URL'ye otomatik olarak POST isteği gönderir. Yüksek hacimli gönderimlerde bu yöntem önerilir.

**OİM'de URL tanımlamak için:** SMS Ayarlarım → Rapor Push URL

Gelen istek bir JSON dizisidir; her eleman bir mesajın durumunu temsil eder:

```json
POST https://sizin.adresiniz.com.tr/sms_rapor
Content-Type: application/json

[
  {
    "type": "outbound",
    "campaign_id": 98765432,
    "campaign_custom_id": "siparisim-123",
    "message_id": "13582302",
    "message_custom_id": "1234",
    "dest": "905001234567",
    "size": 1,
    "international_multiplier": 1,
    "credits": 1,
    "status": "DELIVERED",
    "gsm_error": "0",
    "sent_at": "2025-06-01 09:00:00",
    "done_at": "2025-06-01 09:00:05"
  }
]
```

| Alan | Açıklama |
|------|----------|
| `type` | Her zaman `outbound` |
| `campaign_id` | Gönderim sırasında dönen kampanya ID'si |
| `campaign_custom_id` | Gönderimde verdiğiniz `custom_id` (verilmediyse `null`) |
| `message_id` | Her mesaja atanan tekil ID |
| `message_custom_id` | `messages[].id` ile verdiğiniz mesaj bazlı ID |
| `dest` | Alıcı numarası |
| `size` | Mesaj boyu (SMS adedi) |
| `international_multiplier` | Kredi çarpanı — uluslararasında 1'den büyük olabilir |
| `credits` | Bu mesaj için düşülen kredi |
| `status` | Mesaj durumu (aşağıdaki tabloya bakın) |
| `gsm_error` | İletilemediyse operatörden gelen hata kodu |
| `sent_at` | İletilme tarihi (iletilemezse `null`) |
| `done_at` | Son duruma ulaşma tarihi |

::: warning
Sisteminiz `200 OK` dönmezse Verimor 5'er dakika arayla 3 kez daha dener. Hâlâ yanıt alınamazsa bildirim tekrar yapılmaz.
:::

---

## GET ile Sorgulama

::: tip İstek Limiti
GET yöntemi dakikada 20 istekle sınırlıdır, burst değeri 10'dur. Bu limit `balance`, `inbound_messages` gibi diğer genel havuz endpoint'leriyle paylaşımlıdır — bkz. [Rate Limiting](/sms/rate-limiting). Sınır aşıldığında 429 (Too Many Requests) döner. Büyük kampanyalar için Push yöntemini tercih edin.
:::

#### Kampanya ID ile Sorgulama

```
GET https://sms.verimor.com.tr/v2/status
```

| Parametre | Zorunlu | Açıklama |
|-----------|---------|----------|
| `username` | Evet | API kullanıcı adı |
| `password` | Evet | API şifresi |
| `id` | id veya custom_id zorunlu | Gönderim sırasında dönen `campaign_id` |
| `custom_id` | id veya custom_id zorunlu | Gönderimde verdiğiniz özel ID |
| `dest` | Hayır | Belirli bir numaranın durumunu filtreler |
| `greater_than` | Hayır | Verilen `message_id`'den büyük mesajları getirir — büyük kampanyalarda sayfalama için kullanılır, her seferinde 100 mesaj döner |

```bash
# Kampanya ID ile
curl "https://sms.verimor.com.tr/v2/status?username=kullanici@ornek.com&password=api_sifreniz&id=98765432"

# Custom ID ile
curl "https://sms.verimor.com.tr/v2/status?username=kullanici@ornek.com&password=api_sifreniz&custom_id=siparisim-123"

# Belirli numarayı filtrele
curl "https://sms.verimor.com.tr/v2/status?username=kullanici@ornek.com&password=api_sifreniz&id=98765432&dest=905001234567"
```

### Yanıt

```json
[
  {
    "campaign_id": 98765432,
    "campaign_custom_id": "siparisim-123",
    "message_id": "13582302",
    "message_custom_id": "1234",
    "dest": "905001234567",
    "size": 1,
    "international_multiplier": 1,
    "credits": 1,
    "status": "DELIVERED",
    "gsm_error": "0",
    "sent_at": "2025-06-01 09:00:00",
    "done_at": "2025-06-01 09:00:05"
  }
]
```

---

## Mesaj Durum Değerleri

| Durum | Web Arayüzü | Açıklama |
|-------|-------------|----------|
| `SENDING` | Gönderiliyor | Mesaj iletim sürecinde |
| `WAITING` | Bekliyor | Gönderildi, operatörden teyit bekleniyor |
| `DELIVERED` | İletildi | Alıcıya başarıyla iletildi |
| `SENT` | İletildi | İletildi; operatör raporlamayı desteklemediğinden teyit yok (genelde uluslararası) |
| `NOT_DELIVERED` | İletilemedi | İletim başarısız (genellikle pasif/kapalı numara) |
| `EXPIRED` | Zaman Aşımı | Geçerlilik süresi doldu, iletilemedi |
| `REJECTED` | Reddedildi | Operatör içerik kontrolü sonucu reddetti |
| `DOUBLE_SEND_ERROR` | Mükerrer | Aynı içerik aynı gün aynı başlıkla aynı numaraya gönderilmiş |
| `BLACKLISTED_DESTINATION_ADDRESS` | Karalistede | Alıcı kara listenizde |
| `NOT_ALLOWED_BY_IYS` | İYS izni yok | İYS sistemi izin vermedi |
| `INVALID_DESTINATION_ADDRESS` | Hatalı Numara | Numara hiçbir operatöre kayıtlı değil |
| `MISSING_TARIFF` | Tarife Yok | Alıcı operatörü tarifelerimizde bulunmuyor (uluslararası) |
| `ROUTE_NOT_AVAILABLE` | Geçersiz Şebeke | Hesabınız bu alıcıya mesaj gönderemiyor |
| `NETWORK_NOTCOVERED` | Geçersiz Şebeke | Hesabınız bu alıcıya mesaj gönderemiyor (uluslararası) |
| `SEND_ERROR` | Gönderim Hatası | Gönderilirken hata oluştu |
| `INTERNATIONAL_DENIED` | Uluslararası Kapalı | OİM'de uluslararası gönderim kapalı |

---

## Gelen SMS Raporu

Hesabınıza gelen SMS'leri sorgulamak için bkz. [Gelen SMS](./inbound-sms).
